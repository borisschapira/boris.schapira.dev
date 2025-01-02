---
title: 'Un gitignore pour les gouverner tous'
---

## TL;DR

Ne mettez pas de règles dans le `.gitignore` du projet qui ne concerne pas le projet mais uniquement votre environnement ou machine.

<!-- more -->

## Comment ça marche ?

Chaque projet sur lequel vous intervenez hérite de trois niveau de configuration :

- La configuration de votre machine : `git config --system --edit`
- Votre configuration utilisateur : `git config --global --edit`
- La configuration du projet : `git config --edit`

Ces configurations s'appliquent en cascade (comme les feuilles de style) : Machine puis Utilisateur puis Projet.

Votre système d’exploitation produit parfois des fichiers indésirables (_.Thumbs_ sous Windows, _.DS_Store_ sous OSX et j’en passe). Il est donc pertinent que l’une de ces configurations pointe vers un listing des fichiers à ignorer pour l’ensemble de vos projets : un `.gitignore` qui vous correspond rien qu'à vous et permet d'ignorer tous les fichiers ou dossiers produits par votre mode de fonctionnement (IDE, outil de virtualisation… que sais-je encore).

## Comment faire ?

1.  Créer ce `.gitignore` global. Par exemple, sous Mac, ça donnerait [au moins ça](https://github.com/github/gitignore/blob/main/Global/macOS.gitignore). Perso, je stocke ça dans `~/.gitignore` et considère que ça fait partie de mon profil utilisateur (même si ça se discute, mais c’est surtout pour être capable de retrouver facilement le fichier et qu'il soit sauvegardé en même temps que le reste du dossier par Time Machine)
2.  Ajouter le lien vers ce `.gitignore` global dans votre configuration :
    ```
    git config --global core.excludesfile ~/.gitignore
    ```

Et voilà. Vous n’aurez plus jamais besoin d’ajouter dans le `.gitignore` de vos projets des lignes pour ignorer ces fichiers indésirables. Notez que tout cela vaut aussi pour vos environnements de développement (ignorer les dossiers _.idea_ si vous utilisez PHPStorm, par exemple). Pour info, il y a plein d'exemples de fichiers `gitignore` à cette adresse : [https://github.com/github/gitignore](https://github.com/github/gitignore)
