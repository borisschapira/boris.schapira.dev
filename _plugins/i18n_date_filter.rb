# Taken from https://github.com/gacha/gacha.id.lv/blob/master/_plugins/i18n_filter.rb

require 'i18n'

# Create folder "_locales" and put some locale file from https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale
module Jekyll
  # i18n filter for jekyll
  module I18nDateFilter
    # Example:
    #   {{ post.date | localize: "%d.%m.%Y" }}
    #   {{ post.date | localize: ":short" }}
    def localize(input, format = nil, locale = nil)
      locale ||= 'fr_FR'
      load_translations

      format = format =~ /^:(\w+)/ ? Regexp.last_match(1).to_sym : format

      # Force the locale each time otherwise `jekyll serve` will fail with
      # "Liquid Exception: :en is not a valid locale" each time
      # a regeneration happens
      I18n.locale = locale

      I18n.l input, format: format
    end

    def load_translations
      return false unless I18n.backend.send(:translations).empty?
      filename = File.join(File.dirname(__FILE__), '../_data/_locales/*.yml')
      I18n.backend.load_translations Dir[filename]
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18nDateFilter)
