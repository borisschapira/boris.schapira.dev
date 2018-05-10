---
title: 'Tellement à apprendre'
date: '2017-03-24'
type: post
locale: fr_FR
---

Un de mes collègues a partagé une synthèse de différents outils Devops qu'il a trouvé sur LinkedIn… J'ai mis en exergue les outils que j'avais déjà utilisé dans le cadre de projets.

<!-- more -->

{% capture img_alt %}Un graphique, principalement en noir et blanc, présentant différents outils Devops classés en catégories : collaboration, compilation, tests, déploiements et maintenance opérationnelle. Sur les 150 outils listés, une cinquantaine est en couleur, pour être démarquée.{% endcapture %}
{% capture img_caption %}Infographie réalisée par James Bowman dans son article "<a href="http://www.jamesbowman.me/post/continuous-delivery-tool-landscape/"><span lang="en">Continuous delivery tool landscape</span></a>"{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2017-03-24/known.jpg"
alt=img_alt
caption=img_caption
%}

Je connais à peine ⅓ des outils de l'infographie[^others], mais l'exercice est intéressant.

[^others]: Si ce genre d'infographies vous intéressent, vous devriez également apprécier [IT Landscape for sysadmins](http://sysadmin.it-landscape.info/) d'Alen Krmelj et [The Periodic Table of Devops Tools](https://xebialabs.com/Periodic-Table-of-devops-Tools) de XebiaLabs. <ins datetime="2017-03-27" title="Ajout au 27 mars 2017">Pierre me signale également [The Web Developer Roadmap - 2017](https://github.com/kamranahmedse/developer-roadmap) qui n'est pas orienté que Devops, mais apporte des choses aussi.</ins>

## Il me permet de mieux diagnostiquer mon degré d'autonomie

Je ne pense absolument pas que la maitrise de l'ensemble de ces outils soit nécessaire mais leur regroupement en phases de projet (de la collaboration initiale à la production) me permet de constater que mes compétences actuelles me donnent une bonne autonomie. C'est toujours très délicat de s'auto-évaluer car je ne connais pas deux personnes, dans mon entourage numérique, qui font exactement le même métier, qui offrent exactement le même niveau de service ou de technicité à leurs partenaires, clients ou employeurs. On se rabat donc sur ce qu'on trouve !

## Il me permet de mettre le doigt sur des lacunes opérationnelles

Je le savais avant, mais l'exercice le souligne encore davantage : je suis plus attiré par les tâches d'accompagnement du développement que par les tâches de maintenance opérationnelle, notamment quand elles impliquent de gérer des fermes de bases de données ou d'orchestrer des services dans le <span>cloud</span>. Il s'agira de combler ces lacunes ultérieurement en prenant soin de monter en compétence sur ces points ou de m'entourer des bonnes personnes.

## Il souligne à quel point les chefs de projet sont versatiles

Je suis très éloigné d'avoir la maitrise complète d'un seul de ces outils. Au mieux en ai-je survolé les possibilités, avec un objectif très déterminé, en prenant uniquement dans l'outil ce qui satisfaisait mes besoins du moment. Le simple fait, cependant, d'avoir manipulé autant d'outils en quelques années montre à quel point la gestion des développements Web implique une connaissance large des problématiques et de comment y répondre. Je sais pas comment le dire autrement que comme ça : je suis vraiment très heureux d'avoir face à moi, chaque jour, d'aussi nombreux défis.

## Il ne présente qu'une toute petite part de nos compétences

Les gestions des développements et de la maintenance opérationnelle des sites Web présente de très nombreux défis que certains de ces outils permettent de confronter. Cette infographie ne présente cependant qu'une partie des enjeux car **des pans entiers ne sont pas abordés** : les cadriciels de développement, les outils de gestion de données de tous types (<abbr lang="en" title="Content Management System">CMS</abbr>, <abbr lang="en" title="Product Information Management">PIM</abbr>, <abbr lang="en" title="Digital Asset Manager">DAM</abbr>, <abbr lang="en" title="Master Data Manager">MDM</abbr> et compagnie), les outils de <span lang="en">stub</span>, <span lang="en">mocks</span> et <span lang="en">dummies</span>, les outils de protection ou de détection des intrusions, les gestionnaires d'APIs et de configurations, les outils d'analyse de la qualité de code, de la qualité opérationnelle, de l'accessibilité, les compilateurs, les gestionnaires de notifications, les systèmes de queue… et c'est uniquement ce qui me passe par la tête en rédigeant l'article.

Ajoutons à ça que plus <del>je vieillis</del> j'acquiers d'expérience, plus j'ai le sentiment que les principales difficultés ne sont pas tant liées aux outils qu'à la gestion des personnes, des besoins et de leurs possibles évolutions. Évolutions qui nécessitent de trouver les bons formats de collaboration et les architectures de code adaptées et, _après_, les outils.

J'ai encore tellement à apprendre.
