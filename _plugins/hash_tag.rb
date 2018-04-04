require 'securerandom'

module Jekyll
  class HashTag < Liquid::Tag
    def initialize(tag_name, text, flags)
      super
      @text = text.strip
    end

    def render(_context)
      Digest::SHA1.hexdigest(@text)
    end
  end
end

Liquid::Template.register_tag('hash', Jekyll::HashTag)
