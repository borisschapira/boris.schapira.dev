# frozen_string_literal: true

require 'bundler/setup'
require 'json'
require 'net/http'
require 'rubygems'
require 'time'
require 'yaml'

namespace :postbuild do
  task test: ['test:kiss']

  namespace :test do
    desc 'Test if generated website is valid (do not test external links)'
    task :kiss do
      sh 'htmlproofer ./_site  --disable-external --empty-alt-ignore true'
    end

    desc 'Test the generated website external links'
    task :externals do
      sh 'htmlproofer ./_site --empty-alt-ignore true'
    end

    desc 'Test the generated website alt messages on images'
    task :alt do
      sh 'htmlproofer ./_site  --disable-external'
    end
  end

  namespace :dareboost do
    desc 'Post an event in Dareboost'
    task :event, [:env] do |_t, _args|
      config = YAML.load_file('_config_prod.yml')
      uri = URI('https://www.dareboost.com/api/0.5/event/create')
      the_time = Time.now
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = (uri.scheme == 'https')
      req = Net::HTTP::Post.new(uri.path, 'Content-Type' => 'application/json')
      req.body = {
        token: config['dareboost']['token'],
        key: "ship_#{ENV['COMMIT_REF']}",
        text: 'livraison',
        monitorings: [config['dareboost']['monitoring']],
        date: the_time.utc.iso8601(3)
      }.to_json
      p req.body
      res = http.request(req)
      puts "response #{res.body}"
    end
  end

  namespace :algolia do
    desc 'Push content to algolia index'
    task :index, %i[env] => ['prebuild:config'] do |_t, args|
      args.with_defaults(env: 'prod')
      config_file = "_config_#{args[:env]}.yml"
      if rake_running
        puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
        puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
        puts 'Are you sure you want to continue? [Y|n]'

        ans = STDIN.gets.chomp
        exit if ans != 'Y'
      end

      puts 'Pushing index to algolia…'
      jekyll("algolia", 'production')
    end
  end

  # launch jekyll
  def jekyll(directives = '', env = 'development')
    sh 'JEKYLL_ENV=' + env + ' jekyll ' + directives
  end
end
