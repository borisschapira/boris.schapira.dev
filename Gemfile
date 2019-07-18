source 'https://rubygems.org'
ruby '2.6.2' unless Gem.win_platform?

gem 'jekyll',
  :git => 'https://github.com/jekyll/jekyll.git',
  :ref => "f3cb41b65ad70371e4cc750719c0789590e0bdfc"

# Optimize Liquid compilation
gem 'liquid', :git => 'https://github.com/Shopify/liquid.git', branch: 'master'
gem 'liquid-c', :git => 'https://github.com/Shopify/liquid-c.git', branch: 'master' unless Gem.win_platform?

gem 'rake'

group :jekyll_tests do
  gem 'ffi', '~> 1.11'
  gem 'html-proofer'
end

group :jekyll_plugins do
  gem 'classifier-reborn'
  gem 'jekyll-algolia'
# gem 'jekyll-algolia', :git => 'git@github.com:ashmaroli/jekyll-algolia.git', :branch => 'delete-key-not-reset'
  gem 'jekyll-archives'
  gem 'jekyll-commonmark', :git => 'https://github.com/ashmaroli/jekyll-commonmark/', :branch => 'highlighter-rouge'
  gem 'jekyll-cloudinary'
  gem "jekyll-include-cache"
  gem 'jekyll-microtypo'
  gem 'jekyll-paginate-v2', :git => 'https://github.com/borisschapira/jekyll-paginate-v2.git', :branch => 'default-values'
  gem 'jekyll-pwa-plugin'
  gem 'jekyll-sitemap'
  gem 'jekyll-tagging-related_posts'
end

if Gem.win_platform?
  gem 'tzinfo-data'
  gem 'wdm', '~> 0.1.0'
end
