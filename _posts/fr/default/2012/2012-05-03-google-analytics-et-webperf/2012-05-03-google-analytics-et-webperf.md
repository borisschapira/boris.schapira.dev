---
title: 'Google Analytics et la performance Web'
tags:
    - 'Performance Web'
canonical: 'http://blog.clever-age.com/fr/2012/05/03/google-analytics-et-la-performance-web/'
date: '2012-05-03'
section: default
lang: fr
type: post
---

L’équipe de Google Analytics a publié [un article donnant quelques chiffres sur la performance Web à travers le monde](http://analytics.blogspot.fr/2012/04/global-site-speed-overview-how-fast-are.html), issus de leur collecte de données. Si l’on peut se féliciter que la problématique de la performance Web soit abordée (tant elle reste encore un sujet méconnu, à tort), il est dommage que la Team GA se permette de livrer de telles informations sans prendre davantage de précaution quant à leur interprétation.

<!-- more -->

<em class="canonical">**Note&nbsp;:** l'article ci-dessous a été publié sur [Clever Age](http://www.clever-age.com/fr/) dans [Google Analytics et la performance Web](http://blog.clever-age.com/fr/2012/05/03/google-analytics-et-la-performance-web/).</em>

Car ce qui est comparé ici n’est pas comparable. Les pays présentés n’ont pas les mêmes qualités de connexions, privilégient parfois le filaire (comme en France) ou le mobile (dont les latences sont incroyablement plus coûteuses et les caches de navigateurs moins importants). Le parc informatique lui-même est différent, et donc les navigateurs utilisés !

Si on ajoute à ça qu’il est très difficile, même avec des solutions de mesures similaires (solutions dites "RUM" pour Real User Monitoring, qui consistent à mesurer la performance chez le client en JavaScript) de recouper les informations de Google Analytics (voir [cette discussion sur le forum Performance Web français](https://groups.google.com/forum/#!topic/performance-web/c19aSy0SFHI)), on se rend compte que la Web Performance est un sujet complexe qui va bien au-delà de la simple installation de la balise statistique de Google.

Enfin, la mesure du Page Load Time n’est pas suffisante pour juger de la qualité d’un site en termes de Performance Web. Le temps passé côté serveur, le temps nécessaire à la construction de la page par le navigateur, le chargement des ressources statiques… sont autant d’indicateurs indispensables pour élaborer une comparaison entre deux pages. Et ils peuvent encore être complétés ou synthétisés par d’autres, comme en témoigne la création récente du [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) par Patrick Meenan de [WebPageTest.org](http://www.webpagetest.org/).

Ce qui est sûr en revanche, c’est que le Web reste lent et s’alourdit, comme en témoignent[les statistiques sur 2 ans du projet HttpArchive](http://httparchive.org/trends.php?s=Top1000&amp;minlabel=Nov+15+2010&amp;maxlabel=Nov+15+2011). Tendance qui devrait normalement s’inverser avec l’expansion du web mobile et du m-commerce.
