require 'liquid'
require 'uri'

module Jekyll
  module URLEncodeFilter
    def url_encode(url)
      p = URI::Parser.new
      p.escape(url, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    end
  end
end

Liquid::Template.register_filter(Jekyll::URLEncodeFilter)
