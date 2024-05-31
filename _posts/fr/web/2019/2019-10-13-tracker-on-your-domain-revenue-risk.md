---
title: "Trackers sur votre domaine, chiffre d'affaire en danger"
tags:
    - 'Performance Web'
    - SEO
    - Security
    - 3p
slug: trackers-sur-votre-domaine-ca-en-danger
translations:
    en: tracker-on-your-domain-revenue-risk
---

Dans le Web, des actualités qui peuvent n'avoir rien à voir en apparence peuvent, en réalité, être très liées. Là où la loi ne suffit pas toujours, le portefeuille finit souvent par l'emporter.

## Des <span lang="en">trackers</span> en <span lang="en">1<sup>st</sup> party</span>

> Collecter un maximum de données (et surtout bien les collecter) est un des enjeux principaux pour l’ensemble des marques. Néanmoins, face à la croissance du taux d’adblocking, à la mise en application du Règlement Général sur la Protection des Données (RGPD) et ainsi au fossé toujours plus important se creusant entre le traitement des différents types de cookies, des questions sont réellement à se poser.
>
> Comment réussir à **ne pas ressentir l’impact de ces éléments** sur sa collecte et donc sur sa stratégie data-driven ? Comment **préserver la quantité et la qualité de ses données** ? Et si, à cause de ces éléments, votre Tag Management System (TMS) ne se déclenchait pas ? Vous êtes-vous posé la question du 1st party ?

Voici l'introduction qu'on peut trouver sur la page "[Comment éviter de passer à côté de données avec l’arrivée du RGPD](https://www.eulerian.com/blog/astuces/comment-eviter-perte-donnees-avec-rgpd/)" d'Eulerian, une des solutions phares de recoupement de données de surveillance d'internautes.

Si vous n'avez pas compris le discours, il s'agit simplement de se demander comment contourner l'absence de consentement des internautes (voire l'expression claire de leur non-consentement quand elles et ils installent des adblockers) pour collecter des données malgré tout. La "solution" proposée : [cacher les saletés sous le tapis](https://reflets.info/articles/affreux-sales-et-mechants) en les masquant dans un sous-domaine appartenant à la marque.

Par exemple, au lieu d'envoyer des données à `mon_domaine.eulerian.net`, l'organisation les envoie vers `43bdf.mon_domaine.com` puis s'assure que `43bdf.mon_domaine.com` pointe bien vers `mon_domaine.eulerian.net`.

Le nombre de problèmes éthiques soulevés par cette pratique est important, mais elle pose aussi des problèmes de sécurité puisque, mal implémentée, elle peut transmettre des données de sessions à un tiers, permettant une usurpation de la session utilisateur, le vol de données critiques ou le défaçage de la plate-forme. Un risque que les prestataires se gardent bien de mettre en avant.

## Un badge "Page lente" sur Chrome ?

Google a annoncé le déploiement d'initiatives du type "badge de la honte", pénalisant les sites lents. L'idée d'un signalement de ce type, des expérimentations avaient déjà été menées en 2015. Des badges "<span lang="en">Slow To Load</span>" et "<span lang="en">Red Slow Label</span>" avaient été affichés <a href="http://www.redslowlabel.com/" hreflang="en">sur des résultats de recherche</a>. Cette fois, <a href="https://blog.chromium.org/2019/11/moving-towards-faster-web.html" hreflang="en">Google annonce démarrer des expérimentations au niveau de Chrome</a>.

{% capture img_alt %}Captures d'écran mobiles{% endcapture %} {% capture img_caption %}Exemple d'expérimentation qui pourrait être menée : dans le cadre du chargement d'une page mobile lente, la barre de chargement serait bleue et l'écran de chargement afficherait un badge d'avertissement. Dans le cadre du chargement d'une page potentiellement rapide, la barre serait verte.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-10-13/badge.png"
alt=img_alt
caption=img_caption
%}

Depuis la fin des années 2000, Google multiplie les initiatives autour de la Performance Web. Depuis 2017, j'ai néanmoins l'impression d'une accélération, sûrement dûe à la volonté d'indexer plus fidèlement le Web en utilisant des sondes <a href="https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html" hreflang="en">toujours équipées de la dernière version de Chrome et exécutant JavaScript</a>. Une tendance pour laquelle de nouveaux indicateurs ont même été créés, comme le [Time To (Consistently) Interactive](/notes/2019-05-mesurer-interactivite-time-to-interactive/) qui, à défaut d'être un bon indicateur d'UX, est un excellent indicateur de fin de chargement pour un robot.

## Si la loi ne convainc pas, le portefeuille le fera

Si vous travaillez dans une organisation qui envisage de masquer des parties tierces dans un domaine en <span lang="en">1<sup>st</sup> Party</span>, je vous encourage à **ne pas le faire**, pour des raisons éthiques et de sécurité.

Si cela ne vous suffit pas, sachez que vous perdrez rapidement des utilisateurs et utilisatrices averties qui sauront s'équiper de solutions détectant ces scripts malgré vos manipulations, et refuseront de cautionner ces usages.

Si cela ne vous convainc toujours pas, je vous encourage à [la surveillance minutieuse de votre Performance Web](https://www.dareboost.com/fr/). Si, ces parties tierces venaient à répondre de manière lente, alors cela pourrait ralentir la perception que Google a de l'ensemble de votre domaine, et provoquer l'affichage d'un badge "page lente".

Nous savons déjà que [la dégradation de la Performance Web a un impact sur le ranking](https://blog.dareboost.com/fr/2018/01/google-speed-update-vitesse-ranking/). Avec les expérimentations de Chrome, elle aura un impact explicite sur les visites de l'ensemble de votre domaine. On ne parle plus ici de personnes qui penseront que, temporairement, le réseau leur fait défaut, mais de personnes qui **seront averties par Google que votre site est lent**, et partiront.

Vous voulez vraiment prendre ce risque ?
