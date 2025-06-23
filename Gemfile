# frozen_string_literal: true

source 'https://rubygems.org'

gem 'jekyll'

# Optimize Liquid compilation
gem 'liquid', '~> 4.0'
gem 'liquid-c' unless Gem.win_platform?
gem 'commonmarker'
gem 'rake'

group :jekyll_plugins do
  gem 'classifier-reborn'
  # gem 'jekyll-tagging-related_posts'
  gem 'jekyll-archives', git: 'https://github.com/jekyll/jekyll-archives/'
  gem 'jekyll-cloudinary'
  gem 'jekyll-commonmark'
  gem 'jekyll-include-cache'
  gem 'jekyll-microtypo'
  # gem 'jekyll-paginate-v2', git: 'https://github.com/borisschapira/jekyll-paginate-v2.git', branch: 'default-values'
  gem 'jekyll-paginate-v2', github: 'sverrirs/jekyll-paginate-v2'
  gem 'jekyll-sitemap'
end

if Gem.win_platform?
  gem 'tzinfo-data'
  gem 'wdm', '~> 0.1.0'
end

gem "html-proofer", '~> 5.0.0'
