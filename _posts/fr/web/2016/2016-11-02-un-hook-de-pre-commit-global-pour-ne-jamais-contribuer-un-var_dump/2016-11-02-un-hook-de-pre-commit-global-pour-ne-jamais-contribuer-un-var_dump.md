---
title: 'Un hook de pre-commit global pour ne jamais contribuer un var_dump'
date: '2016-11-02'
type: post
locale: fr_FR
---

On commence par définir le modèle de <span lang="en">hooks</span> de <span lang="en">pre-commit</span>.

1. Créer un dossier dans votre profil qui hébergera vos <span lang="en">templates</span> de création de projets (ce <span lang="en">template</span> sera utilisé ensuite à chaque initialisation) :
    ```
    git config --global init.templatedir '~/.git-templates'
    ```
1. Créer un répertoire dans ce dossier pour stocker les <span lang="en">hooks</span> :
    ```
    mkdir -p ~/.git-templates/hooks
    ```
1. Contribuer votre script de <span lang="en">pre-commit</span> dans `~/.git-templates/hooks/pre-commit`. Pour interdire les `var_dump`, par exemple :
    ```
    #!/bin/sh

    VAR=$(git diff | grep -w "var_dump")
    if [ -z $VAR ]; then
    echo "Oups, tu as laissé un var_dump…"
    exit 1
    fi
    ```
1. Faire en sorte que le script soit exécutable
    ```
    chmod a+x ~/.git-templates/hooks/pre-commit
    ```
1. Réinitialiser chaque dépôt pour que le template soit pris en compte :
    ```
    git init
    ```

Si votre projet contient déjà des hooks, cette commande ne fera rien. À vous de vous responsabiliser pour aller supprimer vous-même les scripts présents dans le dossier `.git` avant de re-jouer `git init`.

Si vous voulez allez plus loin, il existe plusieurs projets proposant des <span lang="en">hooks</span> dédiés à des tâches définies. Par exemple, sous PHP, [Grumphp](https://github.com/phpro/grumphp).