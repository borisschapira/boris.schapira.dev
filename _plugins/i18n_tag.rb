module Jekyll
  class I18NTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      lang = context['page']['lang']
      lang = context['site']['lang'] unless lang
      raise "Page language not specified: #{context['page']['path']}" unless lang
      site = context['site']
      source_lang = site['lang']
      if lang == source_lang
        @text
      else
        translations = site['data']['translations'][lang]
        raise 'Translations not provided' unless translations
        translation = translations[@text]
        raise "Translation not provided: #{@text}" unless translation
        translation
      end
    end
  end
end

Liquid::Template.register_tag('t', Jekyll::I18NTag)

module Jekyll
  module I18NTFilter
    def translate_to(text, lang)
      p text
      p lang
      raise "Page language not specified to filter" unless @lang
      site = Jekyll.contect({})
      source_lang = site['lang']
      if @lang == source_lang
        @text
      else
        translations = site['data']['translations'][@lang]
        raise 'Translations not provided' unless translations
        translation = translations[@text]
        raise "Translation not provided: #{@text}" unless translation
        translation
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18NTFilter)
