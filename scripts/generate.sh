#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )
export JEKYLL_ENV=production;

bundle exec jekyll build --incremental;

sh ./scripts/postprocess.sh ./_site;
