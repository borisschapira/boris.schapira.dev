# frozen_string_literal: true

require 'rubygems'
require 'bundler/setup'
require 'json'
require 'yaml'

namespace :prebuild do
  task test: ['test:doctor']

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
    task :contents do
      @contents = []
      Dir.glob('_posts/**/*.{md,markdown}').each do |p|
        @contents << p
      end
      Dir.glob('_confs/*.{md,markdown}').each do |p|
        @contents << p
      end
      Dir.glob('_quotes/*.{md,markdown}').each do |p|
        @contents << p
      end
      Dir.glob('_data/**/*.yml').each do |p|
        @contents << p
      end
      Dir.glob('_data/*.yml').each do |p|
        @contents << p
      end
      @contents.each do |content|
        test_fm(content)
      end
      puts "#{@contents.size} valid content files."
    end
  end

  # launch jekyll
  def jekyll(directives = '', env = 'development')
    unless env == 'development'
      sh 'JEKYLL_ENV=' + env + ' jekyll ' + directives
    else
      sh 'JEKYLL_ENV=' + env + ' jekyll ' + directives + ' --trace'
    end
  end

  # test Front Matter in a content
  def test_fm(content)
    begin
      YAML.load_file(content)
    rescue Exception => e
      puts content
      puts e.message
      raise 'Content syntax is not valid'
    end
  end

end
