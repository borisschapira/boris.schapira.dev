bundle exec jekyll build --incremental;
rsync -dzvclrOt -e "ssh" _site/. borisschapira_codeship@ssh-borisschapira.alwaysdata.net:/home/borisschapira/www/jekyll
