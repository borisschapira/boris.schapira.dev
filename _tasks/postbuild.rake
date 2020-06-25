# frozen_string_literal: true

require 'bundler/setup'
require 'json'
require 'net/http'
require 'rubygems'
require 'time'
require 'yaml'

namespace :postbuild do
  task test: ['test:kiss']

  namespace :test do
    desc 'Test if generated website is valid (do not test external links)'
    task :kiss do
      sh 'htmlproofer ./_site  --disable-external --empty-alt-ignore true'
    end

    desc 'Test the generated website external links'
    task :externals do
      sh 'htmlproofer ./_site --empty-alt-ignore true'
    end

    desc 'Test the generated website alt messages on images'
    task :alt do
      sh 'htmlproofer ./_site  --disable-external'
    end
  end

  # launch jekyll
  def jekyll(directives = '', env = 'development')
    unless env == 'development'
      sh 'JEKYLL_ENV=' + env + ' jekyll ' + directives
    else
      sh 'JEKYLL_ENV=' + env + ' jekyll ' + directives + ' --trace'
    end
  end
end
