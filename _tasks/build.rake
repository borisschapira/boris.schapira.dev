# frozen_string_literal: true

namespace :build do
  # Use: rake clean
  desc 'Clean Jekyll build'
  task :clean, [:env] do |_t, _args|
    jekyll("clean")
  end

  desc 'Preview on local machine (server with --auto)'
  task :preview, [:env] => :clean do |_t, args|
    puts "Preview task args were: #{args}"
    args.with_defaults(env: 'dev')
    config_file = "_config_#{args[:env]}.yml"
    if rake_running
      puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
      puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
      puts 'Are you sure you want to continue? [Y|n]'

      ans = STDIN.gets.chomp
      exit if ans != 'Y'
    end
    jekyll("serve --config _config.yml,#{config_file}")
  end
  task serve: :preview

  desc 'Generate for deployment (but do not deploy)'
  task :generate, %i[env deployment_configuration] => [:clean, 'prebuild:test'] do |_t, args|
    args.with_defaults(env: 'prod')
    config_file = "_config_#{args[:env]}.yml"
    if rake_running
      puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
      puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
      puts 'Are you sure you want to continue? [Y|n]'

      ans = STDIN.gets.chomp
      exit if ans != 'Y'
    end

    puts 'Building…'
    jekyll("build --config _config.yml,#{config_file}", 'production')
  end

  #
  # General support functions
  #

  # launch jekyll
  def jekyll(directives = '', env = 'development')
    unless env == 'development'
      sh 'JEKYLL_ENV=' + env + ' jekyll ' + directives
    else
      sh 'JEKYLL_ENV=' + env + ' jekyll ' + directives + ' --trace'
    end
  end

  # check if there is another rake task running (in addition to this one!)
  def rake_running
    `ps | grep 'rake' | grep -v 'grep' | wc -l`.to_i > 1
  end
end

task build: 'build:preview'
