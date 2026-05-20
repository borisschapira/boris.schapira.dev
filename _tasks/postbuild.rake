# frozen_string_literal: true

namespace :postbuild do
  task test: ['test:kiss']

  namespace :test do
    desc 'Test if generated website is valid (do not test external links)'
    task :kiss do
      run_html_proofer(disable_external: true)
    end

    desc 'Test if generated website is valid (test external links)'
    task :external do
      run_html_proofer(disable_external: false)
    end
  end

  def run_html_proofer(disable_external:)
    require 'html-proofer'

    config = {
      disable_external: disable_external,
      log_level: 'info',
      allow_hash_href: true,
      ignore_empty_alt: true,
      enforce_https: false,
      ignore_urls: [],
      cache: { timeframe: { external: '30d' } }
    }
    HTMLProofer.check_directory('./_site', config).run
  end
end
