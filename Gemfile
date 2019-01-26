source 'https://rubygems.org'
ruby '2.4.3' unless Gem.win_platform?

gem 'jekyll', :git => 'https://github.com/jekyll/jekyll.git', branch: 'master'

# Optimize Liquid compilation
gem 'liquid', :git => 'https://github.com/Shopify/liquid.git', branch: 'master'
gem 'liquid-c', :git => 'https://github.com/Shopify/liquid-c.git', branch: 'master' unless Gem.win_platform?

gem 'rake'

group :jekyll_tests do
  gem 'ffi', '~> 1.9', '>= 1.9.18'
  gem 'html-proofer'
end

group :jekyll_plugins do
  gem 'classifier-reborn'
  gem 'jekyll-algolia'
  gem 'jekyll-archives'
  gem 'jekyll-commonmark'
  gem 'jekyll-cloudinary'
  gem "jekyll-include-cache"
  gem 'jekyll-microtypo'
  gem 'jekyll-paginate-v2', :git => 'https://github.com/borisschapira/jekyll-paginate-v2.git', :branch => 'default-values'
#  gem 'jekyll-pwa-plugin'
  gem 'jekyll-sitemap'
  gem 'jekyll-tagging-related_posts'
end

if Gem.win_platform?
  gem 'tzinfo-data'
  gem 'wdm', '~> 0.1.0'
end
