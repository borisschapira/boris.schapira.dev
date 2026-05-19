# frozen_string_literal: true

# https://www.scandio.de/blog/en/2017/11/jekyll-performance
module Jekyll
  class Translation < Generator
    safe true
    priority :high

    def generate(site)
      locales = site.config['locales'] || %w[fr en]

      # --- Pages: build an i18n-key index, then assign translations ---
      translations = {}

      site.pages.each do |page|
        name   = page.data['i18n-key']
        locale = page.data['locale']
        next unless name

        translations[name] ||= {}
        translations[name][locale] = page.url
      end

      site.pages.each do |page|
        name   = page.data['i18n-key']
        locale = page.data['locale']
        next unless name
        next unless translations.key?(name)

        trans_locale = (locales - [locale]).first
        next unless trans_locale

        page.data['translation'] = {
          'locale' => trans_locale,
          'url'    => translations[name][trans_locale]
        }
      end

      # --- Posts: build a slug index for O(1) lookups, then assign translations ---
      slug_index = site.posts.docs.each_with_object({}) do |post, idx|
        idx[post.data['slug']] = post
      end

      site.posts.docs.each do |post|
        next unless post.data.key?('translations')

        # Note: if a post lists multiple translations, only the last one is kept.
        # Extend post.data['translation'] to an array if multiple are needed.
        post.data['translations'].each do |_locale, slug|
          translation_post = slug_index[slug]
          next if translation_post.nil?

          post.data['translation'] = {
            'locale' => translation_post.data['locale'],
            'url'    => translation_post.url
          }
        end
      end
    end
  end
end
