rsync --delete --exclude .ssh -zvclrOt -e "ssh" _site/. borisschapira_codeship@ssh-borisschapira.alwaysdata.net:/home/borisschapira/www/jekyll
