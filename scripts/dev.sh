export JEKYLL_ENV=developpement

bundle exec jekyll serve --limit_posts 60 --host 0.0.0.0 --incremental --drafts --future
