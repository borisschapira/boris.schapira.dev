mv _posts _posts_prod; ln -s ../both/_posts _posts; bundle exec jekyll serve; rm _posts; mv _posts_prod _posts;
