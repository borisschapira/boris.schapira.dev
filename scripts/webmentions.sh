#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )
export JEKYLL_ENV=production;

bundle exec rake --rakefile ./webmention.Rakefile webmention
