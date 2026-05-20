# frozen_string_literal: true

namespace :build do
  desc 'Clean Jekyll build'
  task :clean do
    jekyll('clean')
  end

  desc 'Preview on local machine (server with --auto)'
  task :preview, [:env] => :clean do |_t, args|
    args.with_defaults(env: 'dev')
    confirm_if_rake_running!
    jekyll("serve --config _config.yml,_config_#{args[:env]}.yml")
  end
  task serve: :preview

  desc 'Generate for deployment (but do not deploy)'
  task :generate, %i[env deployment_configuration] => [:clean, 'prebuild:test'] do |_t, args|
    args.with_defaults(env: 'prod')
    confirm_if_rake_running!

    puts 'Building…'
    jekyll("build --config _config.yml,_config_#{args[:env]}.yml", 'production')
  end
end

task build: 'build:preview'
