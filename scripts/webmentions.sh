#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )
export JEKYLL_ENV=production;

Bundle exec rake --rakefile ./webmention.Rakefile webmention
