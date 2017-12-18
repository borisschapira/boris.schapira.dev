require "rubygems"
require "bundler/setup"
require "json"
require "yaml"

namespace :prebuild do

  task :npm => ["npm:install", "npm:build"]
  task :test => ["test:doctor", "test:posts"]

  namespace :test do

    desc "Executes the jekyll doctor"
    task :doctor, [:env] do |t, args|
      args.with_defaults(:env => 'prod')
      config_file = "_config_#{args[:env]}.yml"
      jekyll("doctor --config _config.yml,#{config_file}")
    end

    desc "Test if content Front-Matter is YAML-valid"
    task :posts do
      @posts = []
      Dir.glob('_posts/**/*.{md,markdown}').each do |p|
          @posts << p
      end
      @posts.each do |post|
        begin
          YAML.load_file(post)
        rescue Exception => e
          puts post
          puts e.message
          raise "Post syntax is not valid"
        end
      end
      puts "#{@posts.size} valid posts"
    end

  end

  namespace :npm do
    desc "Install node dependencies"
    task :install do
      npm("install")
    end

    desc "Build CSS and JS"
    task :build do
      npm("run build")
    end
  end

  # launch jekyll
  def jekyll(directives = '')
    sh 'jekyll ' + directives
  end

  # launch npm
  def npm(directives = '')
    sh 'npm ' + directives
  end

end
