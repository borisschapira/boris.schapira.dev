---
title: 'Industrialiser le dév. Front-End'
subtitle: un sujet pour les développeurs·euses qui mangent du HTML
description: >-
    Qu'on parle d'intégration HTML ou de développement Front-End, on ne s'outille plus en 2015 comme en 2005. De nombreux outils existent désormais pour faciliter les processus de démarrage, composition, construction et déploiement. Prenons quelques minutes pour en parler.


last_date: 2015-10-16
events:
    - name: 'Bdx.IO 2015'
      url: https://www.bdx.io/
      date: 2015-10-16
last_modified_at: 2015-10-16
---

Transcription de mon <em lang="en">lightning talk</em> pour Bdx.io 2015 pour les absents, les malentendants ou les gens qui s'ennuient !

- [Slides](https://www.slideshare.net/bschapira/industrialiser-le-dev-front-end-54151018)
- [Site officiel de Bdx.io](https://www.bdx.io/)

<!-- more -->

## La routine invisible

Après le lycée, je suis entré en Maths Sup'. Dès le premier cours, notre professeur de Mathématiques nous a expliqué que nous allions tout reprendre à zéro, et apprendre à chaque fois les démonstrations.

Nous avons commencé par les corps et les anneaux, puis la formule du binôme de Newton. Quelques jours plus tard, c’était les polynômes de Lagrange et de Tchebychev...

Quand nous allions en colles[^1] avec ce professeur, il sortait son chapeau à petits papiers, nous tirions au sort et suivant le numéro affiché (car toutes les démonstrations étaient numérotées), nous savions ce qui était attendu de nous. Au début, il fallait réussir deux démonstrations en une heure pour avoir la note maximale. À la moitié de l'année, nous avions déjà une bonne trentaine de démonstrations à connaître par cœur. À la fin de l’année, nous en avions plus de 70 et il fallait en reproduire 4 en moins d’une heure pour espérer obtenir un 20.

[^1]: également orthographié "khôlles", il s'agit des interrogations orales que l'on impose aux étudiants pour les maintenir sous pression et leur apprendre à gérer le stress des examens

L'explication de notre professeur était très simple :

> Votre cerveau, c'est le plus merveilleux des outils. Bien entraîné, il vous donnera les réponses que vous attendez... à condition de ne pas le faire réfléchir à des trucs inutiles.
>
> Ces démonstrations sont faciles. Elles ne doivent pas vous fatiguer. Vous devez pouvoir les dérouler sans fatigue, en commençant à penser aux questions d’après. Votre valeur ajoutée est dans votre capacité à résoudre de nouveaux problèmes, pas des problèmes dont on connaît déjà la solution.
>
> Il faut tout faire pour que la routine devienne juste ça : de la routine, des vacances pour votre cerveau.

## L'intégration en 2015

S’il y a bien un domaine dans lequel l’innovation galope en ce moment, c’est le Web. Et le Front ne fait pas exception, avec des navigateurs toujours plus puissants et riches de fonctionnalités. À tel point que les standards sont désormais qualifiés de "vivants", parce qu'on ne sait plus comment appeler quelque chose de suffisamment peu figé pour évoluer chaque jour.

{% capture img_alt %}Une liste assez longue de termes techniques du Web{% endcapture %} {% capture img_caption %}Le Web aujourd'hui : HTML + JS + CSS ?{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2015-10-16/2.png"
alt=img_alt
caption=img_caption
%}

Résultat, être intégrateur ou développeur Front-End[^2] en 2015, c’est devoir maîtriser un nombre très important de concepts théoriques et pratiques, les faire vivre dans un espace aux contraintes parfois assez floues, notamment concernant la qualité, l'accessibilité, le support des navigateurs anciens ou l’enrichissement avec les fonctionnalités offertes par les nouveaux. Le tout en prenant en compte le futur pour ne pas être complètement à la rue quand les Web Components viendront tout écraser sur leur passage (quoi, on peut rêver non ?).

[^2]: Ce qui n'est pas la même chose, même si les deux métiers sont concernés par ce que j'ai à dire (pour plus d'infos, voir [cet article de Marie Guillaumet](https://marieguillaumet.com/les-mots-qui-fachent-2-integrateur-web-vs-developpeur-front-end/)).

Bref, développer des pages et/ou des applications Web en 2015, c'est une compétence d'artisan, un savoir qui se partage mais que peu peuvent se targuer de maîtriser dans son intégralité.

## Industrialiser pour se libérer

Chaque jour, pourtant, des milliers d'intégrateurs passent 10, 30 ou 60 % de leur temps à réaliser des tâches périphériques à l'intégration, inutiles, qui pénalisent leurs capacités de Production. Je me souviens par exemple avoir passé un jour deux heures entières à créer un <em lang="en">sprite</em> CSS optimisé pour ensuite me rendre compte qu'une nouvelle image devait être ajoutée et que, de toutes façons, je n'avais pas besoin de la cartographie des images en CSS mais en JSON...

Quand vous travaillez à produire pour un client ou un employeur, d'autres questions peuvent vous tarauder :

> Ma solution est-elle réversible, est-elle maintenable ?
>
> S’il m’arrive quelque chose demain ? Et si quelqu’un reprend mon code ? Et si, pris par mes autres projets… j’oublie comment tout ça marche ?

Un développeur ou intégrateur qui, à code source égal, est le seul détenteur de la méthode permettant de produire la solution, **est une partie du problème**.

{% capture img_alt %}Un chien triste{% endcapture %} {% capture img_caption %}[**pitiful** par latteda - CC BY 2.0](https://flic.kr/p/bYm7uu){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2015-10-16/1.jpg"
alt=img_alt
caption=img_caption
%}

Ce dont on parle quand on parle d’industrialisation du développement Front-End, ce n’est pas un ou plusieurs outils. C’est avant tout l'élaboration continue d'un processus destiné à vous faire gagner du temps, du confort et, au final, de la confiance. Ce processus s'articule autour de plusieurs besoins à qualifier.

## Les briques de l'industrialisation

Le premier des besoins est celui de de la **gestion des dépendances**. La version de jQuery que vous utilisez sera-t-elle toujours la même jusqu'à la mise en Production ? Sera-t-elle compatible avec le plugin que vous souhaitiez utiliser ? Où trouvez-vous ces scripts ? Sont-ils enregistrés dans le gestionnaire de code source et sinon, les dépôts à partir desquels vous les téléchargez sont-ils pérennes ?

Une fois vos dépendances gérées et votre propre contenu produit, comment orchestrez-vous les **tâches récurrentes** comme les constructions des pages par emboitement de blocs (parce qu'on est des gens biens, on ne manipule pas des copier/coller), l'application des (pré·post)compilateurs, la génération de vos images RWD à partir des images d'origine, les optimisations des ressources de tous types, l'auto-formatage du code source ou à l'inverse, le jeu de test de certains validateurs de mise en forme du code ?

Une fois ces tâches accomplies, disposez-vous d'un **observateur de modifications** capable de recharger les contenus ? Il peut s'agir d'un rechargement complet du navigateur ou d'un rechargement de la feuille de style uniquement. Le rechargement peut être local à la machine de développement ou être provoqué à distance sur tous les périphériques testés...

Cet observateur est-il capable de déclencher, en parallèle du rechargement de votre navigateur, une série de **contrôle** comme la conformité W3C du code HTML, la pertinence du JavaScript, la détection de règles inutiles en CSS. Etes-vous capables de mesurer la performance relative de votre modification par rapport à l'existant ? Des scénarios de tests fonctionnels peuvent-ils être joués ?

Reste enfin la question de la **finalité** du travail de l'intégrateur ou du développeur Front-End et des moyens à employer pour y arriver. Ici, tout dépend de la nature du projet et des équipes qui en ont la charge. Mais on peut imaginer l'identification d'une version bien déterminée de l'intégration, via un tag dans un gestionnaire de code source ou le déploiement d'une archive sur un serveur d'intégration.

Toutes ces tâches ne se produiront pas seules. Un **chef d'orchestre logiciel** sera nécessaire et bien sûr, il faudra le paramétrer et le maintenir. Il faut donc qu'il soit techniquement proche des compétences des collaborateurs, mais aussi peu éloigner de leurs installations techniques pour éviter d'ajouter une couche de dépendance à vos projets. Enfin, il faudrait choisir un orchestrateur capable de gérer vos besoins d'ajouts : autant donc en choisir un qui dispose d'une bonne communauté d'utilisateurs.

<em lang="en">Last, but not least</em>, il vous faudra envisager dans votre réflexion la **maintenance** de votre solution, en intégrant éventuellement à votre processus la génération automatique d'une **documentation** à l'usage des futurs mainteneurs, mais aussi des explications pour le **débogage**[^3].

[^3]: Lire à ce sujet ["Développeurs front : vous n’utilisez pas de proxy ?" de Stéphane Tessier](https://blog.clever-age.com/fr/2015/07/29/developpeurs-front-vous-nutilisez-pas-de-proxy/).

Une fois qu'on réassemble, cela donne la chaine complète :

{% capture img_alt %}L'ensemble de la chaine sous la forme d'un schéma{% endcapture %} {% capture img_caption %}Une chaine d'industrialisation assez complète{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2015-10-16/3.png"
alt=img_alt
caption=img_caption
%}

## Mais alors, quel outil pour l'industrialisation ?

Il existe une très importante variété d'outils sur le marché, ayant tous leur communauté d'utilisateurs et des milliers de raisons d'être vos favoris.

{% capture img_alt %}De nombreuses solutions répondant chacune à un ou plusieurs besoins exprimés{% endcapture %} {% capture img_caption %}Niveau offre, c'est la fête{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2015-10-16/5.png"
alt=img_alt
caption=img_caption
%}

Ma préférence ? Aucune.

{% include video_as_a_gif.html.liquid
url="/assets/images/2015-10-16/4"
alt="Image titre de la page"
caption="Je sais, ne me remerciez pas."
%}

En effet, il y a du bon partout. J'ai utilisé pendant des années [un framework PHP](https://github.com/htmlzengarden/outline) qui répondait à plusieurs de ces besoins. À l'usage, ses limites m'ont donné envie de tester des pistes différentes et j'ai testé des chaines de productions Front End en Ruby ou dernièrement en node, dont la [version 4.2.0](https://nodejs.org/en/blog/release/v4.2.0/ 'Node v4.2.0 (LTS)'), sortie il y a 4 jours est enfin la première version disposant d'un support à long terme.

Mon conseil est donc le suivant : réunissez votre équipe de production Front End. Analyser les compétences en interne. Vous avez probablement déjà des sensibilités sur le sujet, des personnes qui ont déjà essayé certaines solutions. Si ce n'est pas le cas, le passage de Node.js en <abbr lang="en" title="Long Time Support">LTS</abbr> est une bonne occasion de partir dans cette direction avec par exemple [Yeoman](https://yeoman.io/) ou [Brunch](https://brunch.io/) (respectivement pour les intégrateurs et les développeurs Front End). Utilisez, critiquez, itérez et construisez votre propre industrialisation, celle qui correspond à vos pratiques et valorisent vos savoir-faire.

{% capture img_alt %}Des individus discutant et autour, les logos des solutions Yeoman et Brunch{% endcapture %} {% capture img_caption %}Votre industrialisation, votre discussion{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2015-10-16/6.png"
alt=img_alt
caption=img_caption
%}

Si vous me montrez la vôtre, je vous montre la mienne.

## Licences

Toutes les icônes sont soumises aux licences Creative Commons BY 3.0-US :

- [documents](https://thenounproject.com/search/?q=document&i=183509) par John Slater ;
- [Gear](https://thenounproject.com/search/?q=automation&i=5009) par Dmitry Baranovskiy ;
- [Building blocks](https://thenounproject.com/search/?q=building+blocks&i=84244) par Olivier Rooker ;
- [Process](https://thenounproject.com/search/?q=process&i=194045) par Rflor Baranovskiy ;
- [Box](https://thenounproject.com/search/?q=package&i=91784) par Nicolas Vicent ;
- [Crosshair](https://thenounproject.com/search/?q=deploy&i=78984) par Chris, NZ ;
- [Observation](https://thenounproject.com/search/?q=eyes&i=145619) par Arthur Shlain ;
- [Accept File](https://thenounproject.com/search/?q=file&i=116576) par mantisshrimpdesign ;
- [Browser Upload](https://thenounproject.com/search/?q=browser&i=89766) par Tahsin Tahil, BD ;
- [Browser](https://thenounproject.com/search/?q=browsers&i=106830) par Zlatko Najdenovski, MK ;
- [Cloud](https://thenounproject.com/search/?q=cloud&i=166562) par Viktor Fedyuk ;
- User icons par [Wilson Joseph](https://thenounproject.com/wilsonjoseph/) ;
- [Discussion](https://thenounproject.com/search/?q=discussion&i=105771) par Milky - Digital innovation.
