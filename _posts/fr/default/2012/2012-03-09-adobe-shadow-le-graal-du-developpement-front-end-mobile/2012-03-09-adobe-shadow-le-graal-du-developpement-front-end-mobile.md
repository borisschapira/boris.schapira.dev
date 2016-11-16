---
title: 'Adobe Shadow, le Graal du développement Front-End mobile ?'
tags:
    - Front-End
    - Outils
canonical: 'http://blog.clever-age.com/fr/2012/03/09/adobe-shadow-le-graal-du-developpement-front-end-mobile/'
date: '2012-03-09'
section: default
lang: fr
type: post
---

Adobe vient de publier la bêta de Shadow, un outil de développement facilitant les tests et la visualisation sur de multiples plate-formes. Basé sur un projet Open Source du nom de WeInRe, la solution d’Adobe arrive sur un marché émergent et concurrentiel, déjà occupé par le très récent [Chrome Beta for Android](http://www.androidcentral.com/chrome-beta-android-brings-remote-debugging-tools-mobile-web-developers) ou le plus éprouvé [Opera Dragonfly](http://www.opera.com/dragonfly/) (dont la [documentation](http://www.opera.com/dragonfly/documentation/remote/) est très complète).

<!-- more -->

<em class="canonical">**Note&nbsp;:** l'article ci-dessous a été publié sur [Clever Age](http://www.clever-age.com/fr/) dans [Adobe Shadow, le Graal du développement Front-End mobile ?](http://blog.clever-age.com/fr/2012/03/09/adobe-shadow-le-graal-du-developpement-front-end-mobile/).</em>

Avec Shadow, l’utilisateur peut brancher plusieurs périphériques (mobiles, tablettes…) sur son ordinateur de bureau et lancer la page qu’il souhaite tester. Une routine JavaScript se charge alors de maintenir la synchronisation entre le PC et les périphériques. Ce fonctionnement, qui rappellera à certains [LiveJS](http://www.livejs.com/), va néanmoins plus loin car il synchronise également les changements d’URLs (qui sont alors répercutés sur tous les périphériques) et le contenu du DOM des navigateurs périphériques. Ces DOM peuvent alors être visualisés et modifiés en temps-réel via l’inspecteur WeInRe (fortement inspiré de l’inspecteur Webkit, vous ne serez pas dépaysés) disponible sur l’ordinateur de bureau.

Très prometteuse sur le papier, la solution est pour l’instant assez instable. Son évolution est à suivre de prêt. Et qui sait, peut-être qu’à force de propositions, nous finirons par avoir un protocole standard pour le "Remote Debugging".

[Vidéo de Shadow](http://tv.adobe.com/watch/adobe-technology-sneaks-2012/adobe-shadow/)

[Page officielle de Shadow](https://creative.adobe.com/products/inspect)
