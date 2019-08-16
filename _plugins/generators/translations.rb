# https://www.scandio.de/blog/en/2017/11/jekyll-performance
module Jekyll
  class Translation < Generator
    safe true
    priority :high

    def generate(site)
      translations = {}

      site.pages.each do |page|
        name = page.data['i18n-key']
        locale = page.data['locale']
        next unless name
        unless translations.key?(name)
          translations[name] = {}
        end
        translations[name][locale] = page.url
      end

      site.pages.each do |page|
        name = page.data['i18n-key']
        locale = page.data['locale']
        next unless name
        if translations.key?(name)
          transLang = (locale=="fr")? "en" : "fr"
          page.data['translation'] = {
            'locale' => transLang,
            'url' => translations[name][transLang]
          }
        end
      end

      site.posts.docs.each do |post|
        if post.data.key?('translations')
          dataTranslations = post.data['translations']
          dataTranslations.each do |locale,slug|
            translationPost = site.posts.docs.select { |post| post.data['slug'] == slug }
            unless (translationPost.nil? || translationPost[0].nil?)
              post.data['translation'] = {
                'locale' => translationPost[0].data['locale'],
                'url' => translationPost[0].url
              }
            end
          end
        end
      end
    end
  end
end
