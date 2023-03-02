---
title: 'Déplacer un dépôt git'
---

Il arrive parfois qu'on veuille déplacer un dépôt avec toutes ses branches, ses tags et son historique, par exemple pour changer de service entre Github, Gitlab, Bitbucket…

<!-- more -->

Voici comment le faire en 6 étapes :

1.  Cloner le dépôt d’origine et entrer dans le dossier
1.  Relier toutes les branches distantes à des branches locales: `git branch -r | while read remote; do git branch --track "${remote#origin/}" "$remote"; done`
1.  Récupérer le contenu des branches distantes dans ces branches locales: `git pull --all;`
1.  Ajouter le nouveau dépôt : `git remote add new_origin http://…new_origin.git`
1.  Pousser les branches sur le nouveau dépôt
    `git push --all new_origin; git push --tags;`
1.  Faire du nouveau dépôt ton dépôt par défaut :
    `git remote rm origin; git remote rename new_origin origin;`
