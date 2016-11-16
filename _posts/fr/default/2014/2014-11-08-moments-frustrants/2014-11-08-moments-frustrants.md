---
title: 'Moments frustrants'
tags:
    - Front-End
    - Conférences
date: '2014-11-08'
section: default
lang: fr
type: post
---

Paris Web 2014 était un bel événement. Si vous n'avez pas encore lu [le beau résumé](http://fr.clever-age.com/veille/blog/nous-etions-a-paris-web-2014.html) que nous avons monté avec Marie et Vincent sur le sujet, n'hésitez pas (et je ne dis pas ça uniquement parce que j'ai passé 3 jours à réfléchir aux axes de l'article). Vous avez aussi [le résumé plus personnel de Marie](http://marieguillaumet.com/paris-web-2014-mon-compte-rendu/), seule cette fois, et plein d'autres sur le [Lanyrd de Paris Web 2014](http://lanyrd.com/2014/parisweb/).

Dans ce petit article supplémentaire et plus personnel, je voulais parler de deux conférences et d'un atelier qui m'ont laissé une impression mitigée. Très intéressantes sur le fond, elles ont été trop ambitieuses sur la forme.

<!-- more -->

Je me suis retrouvé un peu par hasard dans la conférence **"[Convivialité des interfaces des réseaux sociaux et spécificités culturelles](http://www.paris-web.fr/2014/conferences/convivialite-des-interfaces-des-reseaux-sociaux-et-specificites-culturelles.php)" de Léonie Marin**, qui sortait des sentiers battus. Léonie venait témoigner de son retour d’expérience après avoir observé l’utilisation des réseaux sociaux dans certains pays d'Afrique et en Nouvelle-Calédonie. Modification des relations familiales, transfert des sphères d’influence, ouverture de la parole selon des modes de communication qui sont profondément liés aux valeurs des peuples… J'ai tellement apprécié ce moment que j'ai fini par me sentir triste. De ne pas tout comprendre, d'abord, notamment dans la phase de questions/réponses, mais aussi que ça termine comme cela. J'en aurais voulu moins ou davantage, mais j'ai trouvé que ce qui était présenté ouvrait trop de portes pour un complet néophyte.

Ensuite, c'est la conférence de **David Rousset** qui m'a laissé sur ma faim. Car le pauvre, durant "**[Introduction à TypeScript et retour d'expérience sur le portage de BabylonJS](http://www.paris-web.fr/2014/conferences/sponsor-microsoft.php)**", s'est retrouvé privé de connexion Internet et même son PC s'est mis à faire des siennes (la panne de ZoomIt!, un classique). Résultat&nbsp;: une présentation où l'assistance n'a probablement pas compris à quel point le typage peut améliorer la productivité et la relecture, n'a pas probablement pas saisi le gain que peut apporter le compilateur ou les opportunités en termes de gestion des _callbacks_. Sans parler du futur gain de _await/async_ pour la gestions des promesses… En espérant que les curieux de ce jour-là auront la patience de donner une seconde chance à la solution en allant sur [typescriptlang.org](http://www.typescriptlang.org/).

Enfin, mon troisième point de frustration vient des copains de chez Clever Age (ou presque) **Nicolas Hoizey et Matthias Dugué** qui ont animé leur atelier **"[Finnissons-en avec le mythe du RWD lent](http://www.paris-web.fr/2014/ateliers/finissons-en-ensemble-avec-le-mythe-du-responsive-web-design-lent.php)"**. À mon sens, l’atelier était très intéressant dans ses intentions, trop ambitieux dans ses moyens et au final, raté dans son déroulement. En fait, Nicolas et Matthias ont développé [un protocole d’intégration continue](https://github.com/m4dz/prwd-workshop/) permettant aux participants de faire des propositions d’améliorations et de voir les mesures de perfomance comparatives de manière automatisée. C’est hyper-intéressant en théorie mais en pratique cela impose d’expliquer longtemps le protocole, de faire installer de très (trop) nombreuses dépendances aux participants… Je pense qu’il faut vraiment garder l’idée mais changer la forme, du moins pour les participants&nbsp;: les faire travailler dans un sous-dépôt ou sur une branche isolée moins complexe à prendre en main pour qu’ils puissent aller plus rapidement à la contribution d’optimisations. Là, le protocole a gâché la fête et c'était vraiment dommage. Je suis sûr que Nicolas et Matthias ont passé un temps fou à mettre en place tout ça et j'étais déçu de voir que finalement, les *commits* n'arrivaient pas.
