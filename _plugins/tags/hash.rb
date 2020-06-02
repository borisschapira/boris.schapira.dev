require 'securerandom'

module Jekyll
  class HashTag < Liquid::Tag
    def initialize(tag_name, text, flags)
      super
      @text = text.strip
    end

    # Lookup allows access to the page/post variables through the tag context
    def lookup(context, name)
      lookup = context
      name.split(".").each { |value| lookup = lookup[value] }
      lookup
    end

    def render(context)
      Digest::SHA1.hexdigest("#{lookup(context, @text)}")
    end
  end
end

Liquid::Template.register_tag('hash', Jekyll::HashTag)
