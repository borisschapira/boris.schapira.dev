require "rubygems"
require "bundler/setup"
require "json"
require "yaml"

# Caches
# you may need to update this to point to the right folder
cache = File.expand_path('../../.cache', __FILE__)
cache_all_webmentions = "#{cache}/webmentions.yml"
cache_sent_webmentions = "#{cache}/webmentions_sent.yml"

# Use: rake webmention
desc "Trigger webmentions"
task :webmention do
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
