# frozen_string_literal: true

load '_tasks/prebuild.rake'
load '_tasks/build.rake'
load '_tasks/postbuild.rake'

task default: ['build:preview']
task dryrun: ['build:generate', 'postbuild:test']
