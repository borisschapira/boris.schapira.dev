mv _posts _posts_prod; ln -s ../default/_posts _posts; bundle exec jekyll serve; rm _posts; mv _posts_prod _posts;
