source 'https://rubygems.org'
ruby '2.4.3'

gem 'i18n'
gem 'jekyll', '~>3.8.0'

# Optimize Liquid compilation
gem 'liquid', github: 'Shopify/liquid', branch: 'master'
gem 'liquid-c', github: 'Shopify/liquid-c', branch: 'master'

gem 'rake'

group :jekyll_tests do
  gem 'ffi', '~> 1.9', '>= 1.9.18'
  gem 'html-proofer'
end

group :jekyll_plugins do
  gem 'classifier-reborn'
  gem 'jekyll-algolia'
  gem 'jekyll-archives'
  gem 'jekyll-cloudinary'
  gem 'jekyll-mermaid'
  gem 'jekyll-microtypo'
  gem 'jekyll-paginate-v2', :git => 'https://github.com/borisschapira/jekyll-paginate-v2', :branch => 'default-values'
  gem 'jekyll-postfiles', '~> 2.1'
  gem 'jekyll-pwa-plugin'
  gem 'jekyll-sitemap'
  gem 'jekyll-tagging-related_posts'
end

gem "nokogiri", "~> 1.8"
