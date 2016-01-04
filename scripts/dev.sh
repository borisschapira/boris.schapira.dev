export JEKYLL_ENV=developpement

mv _posts _posts_prod
mkdir _posts
mkdir _posts/papa

cd _posts
ln -s ../_posts_prod/2016 2016
ln -s ../_posts_prod/_images _images

cd papa
ln -s ../../_posts_prod/papa/2016 2016

cd ../..

bundle exec jekyll serve --host 0.0.0.0 --incremental --drafts --future

rm -rf _posts
mv _posts_prod _posts
