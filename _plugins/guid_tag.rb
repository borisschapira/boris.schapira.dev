require 'securerandom'

module Jekyll
  class GUIDTag < Liquid::Tag
    def initialize(tag_name, text, flags)
      super
    end

    def render(_context)
      SecureRandom.uuid
    end
  end
end

Liquid::Template.register_tag('guid', Jekyll::GUIDTag)
