---
title: 'Un seul site vous manque, et tout le web est cassé'
tags:
    - Front-End
    - 'Performance Web'
canonical: 'https://blog.clever-age.com/fr/2014/06/20/un-seul-site-vous-manque-et-tout-le-web-est-casse/'
canonical_title: 'le blog de Clever Age'
---

Ce détournement de la fameuse citation d'Alphonse de Lamartine est bien sûr dédié à la chute, hier dans la matinée, de Facebook.

Il aura suffit d'une trentaine de minutes d'absence pour mettre le Web en émoi et surtout, faire de grands dégâts un peu partout. Car énormément de sites sont dépendants de Facebook, qu'ils le sachent ou non, et une indisponibilité du géant peut avoir des effets désastreux.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Car il faut bien se rendre compte que de nombreux sites sont encore liés à Facebook par des scripts synchrones (ne serait-ce que l'inclusion d'un bouton "J'aime" mal développé). Chaque lenteur de Facebook est alors ressentie par les visiteurs et une indisponibilité peut engendrer des temps de réponse à la limite du <em>timeout</em>. Facebook devient, pour ces sites, un <strong>Point Individuel de Défaillance</strong> (ou <strong>Single Point of Failure</strong>, SPoF).

Si vous n'avez aucun outil de surveillance sur votre site, vous pouvez être passé à côté d'une dégradation de l'expérience de vos utilisateurs. Heureusement, des outils peuvent vous aider à détecter cette faiblesse en dehors de tout incident chez un tiers :

- [L'extension Chrome SPoF-o-matic](https://chrome.google.com/webstore/detail/spof-o-matic/plikhggfbplemddobondkeogomgoodeg), par exemple, vous permettra de détecter les domaines problématiques ;
- [L'onglet SPOF de WebPageTest.org](http://www.webpagetest.org/) vous permettra de réaliser un test de performance en plaçant le domaine de votre choix en indisponibilité[^1].

[^1]: En réalité, il interpose un proxy renvoyant les appels vers un <a href="https://blackhole.webpagetest.org">site "trou noir"</a> recréant ces conditions

Evidemment, cette liste n'est pas exhaustive et Facebook est loin d'être le seul service tiers concerné (vous pouvez aussi avoir le problème avec des ressources distantes, comme des polices, par exemple).

Ne perdez pas le contrôle de vos sites à cause de dépendances synchrones, c'est tout-à-fait gérable autrement (et mieux), alors autant en profiter !
