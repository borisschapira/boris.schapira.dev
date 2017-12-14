require "bundler/setup"
require "json"
require 'net/http'
require "rubygems"
require "time"
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
    else
      puts "Error! deploy_url not found in _config_deploy.yml"
      exit 1
    end
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
      sh "jekyll algolia --config _config.yml,#{config_file}"
    end

  end

  namespace :dareboost do
    desc 'Post an event in Dareboost'
    task :event, [:env] do |t, args|
        unless ENV['CI_MESSAGE'].include? "--skip-event"
          config=YAML.load_file('_config_prod.yml')
          uri = URI('https://www.dareboost.com/api/0.5/event/create')
          the_time = Time.now
          http = Net::HTTP.new(uri.host, uri.port)
          http.use_ssl = (uri.scheme == 'https')
          req = Net::HTTP::Post.new(uri.path, 'Content-Type' => 'application/json')
          req.body = {
            token: config["dareboost"]["token"],
            key: "ship_#{ENV['CI_COMMIT_ID']}",
            text: ENV['CI_MESSAGE'],
            monitorings: [config["dareboost"]["monitoring"]],
            date: the_time.utc.iso8601(3) }.to_json
          p req.body
          res = http.request(req)
          puts "response #{res.body}"
        end
    end
  end
end
