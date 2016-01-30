require 'liquid'
require 'uri'

module Jekyll
  module URLEncodeFilter
    def url_encode(url)
      return URI.escape(url, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    end
  end
end

Liquid::Template.register_filter(Jekyll::URLEncodeFilter)
