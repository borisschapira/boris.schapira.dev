# frozen_string_literal: true

source 'https://rubygems.org'
ruby '2.6.2' unless Gem.win_platform?

gem 'jekyll'

# Optimize Liquid compilation
gem 'liquid', git: 'https://github.com/Shopify/liquid.git', branch: 'master'
gem 'liquid-c', git: 'https://github.com/Shopify/liquid-c.git', branch: 'master' unless Gem.win_platform?

gem 'rake'

group :jekyll_tests do
  gem 'ffi', '~> 1.11'
  gem 'html-proofer'
end

group :jekyll_plugins do
  gem 'classifier-reborn'
  # gem 'jekyll-tagging-related_posts'
  gem 'jekyll-archives', git: 'https://github.com/jekyll/jekyll-archives/'
  gem 'jekyll-cloudinary'
  gem 'jekyll-commonmark', git: 'https://github.com/jekyll/jekyll-commonmark/', branch: 'master'
  gem 'jekyll-include-cache'
  gem 'jekyll-microtypo'
  gem 'jekyll-paginate-v2', git: 'https://github.com/borisschapira/jekyll-paginate-v2.git', branch: 'default-values'
  # gem 'jekyll-paginate-v2', github: 'sverrirs/jekyll-paginate-v2'
  gem 'jekyll-sitemap'
end

if Gem.win_platform?
  gem 'tzinfo-data'
  gem 'wdm', '~> 0.1.0'
end
