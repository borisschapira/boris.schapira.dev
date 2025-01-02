---
title: 'Gestion des marque-pages : quel outil ?'
tags:
    - Outils
    - Veille
---

Depuis la revente de [delicious](http://delicious.com) par Yahoo! et son quasi-abandon par AVOS, j'avais migré ma veille sur Diigo mais suite à la récente décision de Diigo d'abandonner les listes (qui permettaient pourtant un partage plus sélectif), je suis à la recherche d'une nouvelle solution de gestion des marque-pages.

<!-- more -->

Je n'ai pas d'a priori sur la solution, qu'elle soit gratuite ou payante, collaborative ou non, en SASS ou auto-hébergée (il sera toujours temps de partager par ailleurs, via une tâche [IFTTT](http://ifttt.com)).

Fonctionnalités recherchées :

- possibilité de sauvegarder un marque-page avec titre, description et mots-clés, y compris constitués de plusieurs mots ;
- possibilité d'importer des marque-pages en masse (éventuellement via un service tiers ou une API, je devrais pouvoir me débrouiller) ;
- possibilité de rattacher un marque-page à une liste plus précise : via un mot-clé (qui ne serait, du coup, pas répété dans la liste) ou via une requête plus élaborée ;
- possibilité de consulter les marque-pages sous la forme d'un flux <abbr title="Really Simple Syndication" lang="en">RSS</abbr> suffisamment bien formé pour pouvoir en extraire les mots-clés de manière efficace.

J'ouvre à peine la réflexion, donc pour l'instant j'ai envisagé :

- [Pocket](http://getpocket.com), bien qu'étant un très bon outil de [cueillette](http://ploum.net/la-cueillette-de-lactualite-et-des-informations/ '"La cueillette de l’actualité et des informations", Lionel Dricot'), n'est pas adapté à la classification et au partage ;
- [Evernote](http://evernote.com) et [Diigo](http://www.diigo.com) sont plus proches d'espace de travail que de solution de gestion de marque-pages ;
- [Pinboard](http://pinboard.in), parce que [Nicolas en parle sur son blog](http://gasteroprod.com/web/mes-bookmarks-migrent-de-diigo-vers-pinboard '"Mes bookmarks migrent de Diigo vers Pinboard", Nicolas Hoizey');
- Wallabag me semble être une solution auto-hébergée – mais plutôt dans la veine de Pocket – à creuser ;
- [shaarli](http://sebsauvage.net/wiki/doku.php?id=php:shaarli), un clone auto-hébergé de [delicious](http://delicious.com) qui a l'avantage de pouvoir fonctionner sans javascript côté client et sans base de données côté serveur

Si vous avez d'autres propositions, je suis fortement preneur !
