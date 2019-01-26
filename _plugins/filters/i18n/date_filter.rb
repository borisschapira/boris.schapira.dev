require 'i18n'

module Jekyll
  module I18nDateFilter
    
    def self.load_translations
      return false unless I18n.backend.send(:translations).empty?
      filename = File.join(File.dirname(__FILE__), '../../../_data/_locales/*.yml')
      I18n.backend.load_translations Dir[filename]
    end

    # Example:
    #   {{ post.date | l: "%d.%m.%Y" }}
    #   {{ post.date | l: ":short" }}
    def self.localize(input, format = nil, locale = nil)
      locale ||= 'fr'
      load_translations

      format = format =~ /^:(\w+)/ ? Regexp.last_match(1).to_sym : format

      # Force the locale each time otherwise `jekyll serve` will fail with
      # "Liquid Exception: :en is not a valid locale" each time
      # a regeneration happens
      I18n.locale = locale

      I18n.l input, format: format
    end

    def l(input, format = nil, locale = nil)
      I18nDateFilter.localize(input, format, locale)
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18nDateFilter)
