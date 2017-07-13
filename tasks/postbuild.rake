require "rubygems"
require "bundler/setup"
require "json"
require "yaml"

namespace :postbuild do

  desc 'Deploy to remote server'
  task :deploy, [:env,:deployment_configuration] do |t, args|
    args.with_defaults(:env => 'prod', :deployment_configuration => 'deploy')
    config_file = "_config_#{args[:deployment_configuration]}.yml"

    text = File.read("_config_#{args[:deployment_configuration]}.yml")
    matchdata = text.match(/^deploy_dir: (.*)$/)
    if matchdata
      deploy_dir = matchdata[1]
      sh "rsync --delete-after --exclude .ssh -crvzlOt -e ssh _site/ #{deploy_dir}"
      time = Time.new
      File.open("_last_deploy.txt", 'w') {|f| f.write(time) }
    else
      puts "Error! deploy_url not found in _config_deploy.yml"
      exit 1
    end
  end

  desc 'Coverage scanner for SonarQube'
  task :coverage do
    sh 'sonar-scanner'
  end

  task :test => ["test:kiss"]

  namespace :test do

    desc "Test if generated website is valid (do not test external links)"
    task :kiss do
      sh 'htmlproofer ./_site  --disable-external --empty-alt-ignore true'
    end

    desc "Test the generated website external links"
    task :externals do
      sh 'htmlproofer ./_site --empty-alt-ignore true'
    end

    desc "Test the generated website alt messages on images"
    task :alt do
      sh 'htmlproofer ./_site  --disable-external'
    end

  end

  namespace :search do

    desc 'Index content for search (Algolia)'
    task :index, [:env] do |t, args|
      args.with_defaults(:env => 'prod')
      config_file = "_config_#{args[:env]}.yml"
      sh "jekyll algolia push --config _config.yml,#{config_file}"
    end

  end
end
