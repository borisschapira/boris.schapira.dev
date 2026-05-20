# frozen_string_literal: true

namespace :prebuild do
  task test: ['test:doctor']

  namespace :test do
    desc 'Executes the jekyll doctor'
    task :doctor, [:env] do |_t, args|
      args.with_defaults(env: 'prod')
      jekyll("doctor --config _config.yml,_config_#{args[:env]}.yml", 'production')
    end

    desc 'Test if content Front-Matter is YAML-valid'
    task :contents do
      require 'yaml'

      content_files = Dir.glob('{_posts/**/*,_community/*,_quotes/*}.{md,markdown}') +
                      Dir.glob('_data/**/*.yml')

      content_files.each do |file|
        YAML.load_file(file, permitted_classes: [Date, Time])
      rescue Psych::SyntaxError => e
        abort "Invalid YAML in #{file}: #{e.message}"
      end

      puts "#{content_files.size} valid content files."
    end
  end
end
