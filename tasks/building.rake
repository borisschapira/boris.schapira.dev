namespace :build do

  # Use: rake clean
  desc "Clean Jekyll build"
  task :clean => "prebuild:test" do |t, args|
    cleanup
  end

  desc 'Preview on local machine (server with --auto)'
  task :preview, [:env] => :clean do |t, args|
    args.with_defaults(:env => 'dev')
    config_file = "_config_#{args[:env]}.yml"
    if rake_running then
      puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
      puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
      puts "Are you sure you want to continue? [Y|n]"

      ans = STDIN.gets.chomp
      exit if ans != 'Y'
    end

    jekyll("serve --config _config.yml,#{config_file}")
  end
  task :serve => :preview


  desc 'Generate for deployment (but do not deploy)'
  task :generate, [:env,:deployment_configuration] => "prebuild:test" do |t, args|
    args.with_defaults(:env => 'prod', :deployment_configuration => 'deploy')
    config_file = "_config_#{args[:env]}.yml"
    deploy_file = "_config_#{args[:deployment_configuration]}.yml"

    if rake_running then
      puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
      puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
      puts "Are you sure you want to continue? [Y|n]"

      ans = STDIN.gets.chomp
      exit if ans != 'Y'
    end

    puts 'Building…'
    jekyll("build --config _config.yml,#{config_file},#{deploy_file}")
    puts 'Cleaning BOMs…'
    sh './scripts/postprocess.sh ./_site'
  end

  #
  # General support functions
  #

  # remove generated site
  def cleanup
    sh 'rm -rf _site'
  end

  # launch jekyll
  def jekyll(directives = '')
    sh 'jekyll ' + directives
  end

  # check if there is another rake task running (in addition to this one!)
  def rake_running
    `ps | grep 'rake' | grep -v 'grep' | wc -l`.to_i > 1
  end

end

task :build => "build:preview"
