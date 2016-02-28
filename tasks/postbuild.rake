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
      sh "rsync --delete --exclude .ssh -zvclrOt -e ssh _site/ #{deploy_dir}"
      time = Time.new
      File.open("_last_deploy.txt", 'w') {|f| f.write(time) }
    else
      puts "Error! deploy_url not found in _config_deploy.yml"
      exit 1
    end
  end

  task :test => ["test:posts", "test:kiss"]

  namespace :test do

    # Use: rake clean
    desc "Test source content and generated result"
    task :default => [:posts, :kiss]

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

    desc "Test if generated website is valid (do not test external links)"
    task :kiss do
      sh 'htmlproof ./_site  --disable-external --empty-alt-ignore true'
    end

    desc "Test the generated website external links"
    task :externals do
      sh 'htmlproof ./_site --empty-alt-ignore true'
    end

    desc "Test the generated website alt messages on images"
    task :alt do
      sh 'htmlproof ./_site  --disable-external'
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

  namespace :webmention do

    # Caches
    # you may need to update this to point to the right folder
    cache = File.expand_path('../../.cache', __FILE__)
    cache_all_webmentions = "#{cache}/webmentions.yml"
    cache_sent_webmentions = "#{cache}/webmentions_sent.yml"

    # Use: rake webmention
    desc "Trigger webmentions"
    task :push do
      puts cache_all_webmentions

      if File.exists?(cache_all_webmentions)
        if File.exists?(cache_sent_webmentions)
          sent_webmentions = open(cache_sent_webmentions) { |f| YAML.load(f) }
        else
          sent_webmentions = {}
        end
        all_webmentions = open(cache_all_webmentions) { |f| YAML.load(f) }
        all_webmentions.each_pair do |source, targets|
          puts "\n#{source}"
          if ! sent_webmentions[source] or ! sent_webmentions[source].kind_of?(Array)
            sent_webmentions[source] = Array.new
          end
          targets.each do |target|
            if target and ! sent_webmentions[source].find_index( target )
              if target.index( "//" ) == 0
                target  = "http:#{target}"
              end
              puts "-- accessing support of webmention by #{target}"
              endpoint = `curl -s --connect-timeout 3 --location "#{target}" | grep 'rel="webmention"'`
              if endpoint
                endpoint.scan(/href="([^"]+)"/) do |endpoint_url|
                  endpoint_url = endpoint_url[0]
                  puts "-- sending webmention of #{source} to #{endpoint_url}"
                  command =  "curl -s -i --connect-timeout 3 -d \"source=#{source}&target=#{target}\" -o /dev/null #{endpoint_url}"
                  # puts command
                  system command
                end
                sent_webmentions[source].push( target )
              end
            end
          end
        end
        File.open(cache_sent_webmentions, 'w') { |f| YAML.dump(sent_webmentions, f) }
      end
    end
  end
end
