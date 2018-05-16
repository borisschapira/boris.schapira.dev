# frozen_string_literal: true

require 'rubygems'
require 'bundler/setup'
require 'json'
require 'yaml'

namespace :prebuild do
  task test: ['test:doctor', 'test:posts']

  desc 'Generate prod configuration from ENV variables'
  task :config do
    configs = [
      "dareboost:\n  monitoring: '$JEKYLL_SITE_DAREBOOST_MONITORING'",
      "  token: '$JEKYLL_SITE_DAREBOOST_TOKEN'"
    ]
    sh 'echo "' + configs.join('\n') + '" > _config_prod.yml'
  end

  namespace :test do
    desc 'Executes the jekyll doctor'
    task :doctor, [:env] do |_t, args|
      args.with_defaults(env: 'prod')
      config_file = "_config_#{args[:env]}.yml"
      jekyll("doctor --config _config.yml,#{config_file}", 'production')
    end

    desc 'Test if content Front-Matter is YAML-valid'
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
          raise 'Post syntax is not valid'
        end
      end
      puts "#{@posts.size} valid posts"
    end
  end

  # launch jekyll
  def jekyll(directives = '', env = 'development')
    sh 'JEKYLL_ENV=' + env + ' jekyll ' + directives
  end

end
