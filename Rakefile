# frozen_string_literal: true

#
# Shared helpers — available in all task files
#

def jekyll(directives = '', env = 'development')
  trace = env == 'development' ? ' --trace' : ''
  sh({ 'JEKYLL_ENV' => env }, "jekyll #{directives}#{trace}")
end

def confirm_if_rake_running!
  return unless `pgrep -fc rake`.to_i > 1
rescue Errno::ENOENT
  return
else
  warn <<~MSG

    Warning! An instance of rake seems to be running
    (it might not be *this* Rakefile, however).
    Building while running other tasks (e.g., preview)
    might create a website with broken links.

  MSG
  print 'Are you sure you want to continue? [Y|n] '
  exit unless $stdin.gets.chomp == 'Y'
end

#
# Load task files
#

load '_tasks/prebuild.rake'
load '_tasks/build.rake'
load '_tasks/postbuild.rake'

task default: ['build:preview']
task dryrun: ['build:generate', 'postbuild:test']
