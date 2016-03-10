namespace :development do
  load 'tasks/emoji.rake'
end
load 'tasks/prebuild.rake'
load 'tasks/building.rake'
load 'tasks/postbuild.rake'

task :default => ["build:preview"]
task :dryrun => ["build:generate","postbuild:test"]
