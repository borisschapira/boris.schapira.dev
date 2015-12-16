export JEKYLL_ENV=developpement;

mv _posts _posts_prod;
mkdir _posts;
mkdir _posts/papa;

cp -R _posts_prod/2015 _posts;
cp -R _posts_prod/papa/2015 _posts/papa;

bundle exec jekyll serve --incremental;

rm -rf _posts;
mv _posts_prod _posts;
