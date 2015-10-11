---
layout: page
title: À propos de ce site
date: 2015-10-05 17:15:20
---

## <i lang="en">Me, myself & I</i>

Ingénieur de formation[^1], je travaille aujourd'hui pour [Clever Age](http://www.clever-age.com/fr/ "Clever Age"). J'y accompagne mes clients lors de missions de conseil, de gestion de projets, de formation et parfois (mais de plus en plus rarement) de développements. Vous avez pu me rencontrer autour de problématiques liées au Service Design, à la Finance de Marché, à l'e-Commerce ou à la Performance Web.

J'enseigne à [Ingésup Bordeaux](http://www.ingesup.com/ "Ingesup") mais je serais aussi ravi de [venir discuter avec vous contre un sandwich](http://www.brownbaglunch.fr/baggers.html#Boris_Schapira_Bordeaux "BrownBagLunch France"). Vous pouvez m'avoir croiser dans plusieurs conférences de Barcelone à Paris, mais ma petite préférence reste [Sud Web](http://sudweb.fr/ "SudWeb.fr").

J'aime comprendre les problématiques de mes clients sans leur imposer celles des développeurs (et réciproquement). Je ne rechigne pas contre une chocolatine le matin, une pizza à midi et un énorme câlin avec mes deux garçons et ma femme le soir. Je n'aime pas les discussions qui n'avancent pas, les processus qui les favorisent et les choux-fleurs.

[^1]: Mon CV complet est disponible [sur LinkedIn](https://www.linkedin.com/in/borisschapira CV de Boris SCHAPIRA sur LinkedIn")

## Mentions légales

Je suis le principal auteur et l'unique responsable des contenus publiés sur ce site. En revanche, les marques citées sur ce site sont propriétaires des sociétés qui les ont déposé. L’ensemble de ce site est soumis au droit français.

Les points de vue et opinions exprimés sur ce blog n'engagent que moi, et en aucun cas mes employeurs ou clients, mon hébergeur ou toute autre personne physique ou morale.

## Sous le capôt

### Développement

Ce site est produit par [Jekyll](https://jekyllrb.com/), un générateur de sites statiques en Ruby.
Celui-ci est complété, via [Bundler](http://bundler.io/), par plusieurs gems Ruby correspondant à différents besoins :

* la gestion des archives est assurée par `jekyll-archives` ;
* la gestion des étiquettes et catégories est assurée par `jekyll-tagging` ;
* la génération et la sélection automatique de la bonne taille d'image est assurée par `jekyll-picture-tag` ;
* les flux sont générés par `jekyll-feed` ;
* la coloration syntaxique est offert par `rouge` ;
* l'internationalisation est permise par `i18n` et le `i18n_filter`[^2].

[^2]: La technique de localisation est détaillée dans le [guide de démarrage Jekyll de Thomas Brelet](http://www.toam.fr/20-05-2013-guide-demarrage-jekyll/#localiser-jekyll).

La recherche instantanée est le fruit du branchement du site sur [Algolia](https://www.algolia.com/), une solution très performante d'indexation et de recherche côté client qui a le mérite de proposer un [exemple d'implémentation pour Jekyll](https://blog.algolia.com/instant-search-blog-documentation-jekyll-plugin/ "Add instant search to your blog or documentation using our Jekyll plugin") qui cadrait parfaitement avec mon besoin.

En local, j'utilise également [node](https://nodejs.org/), et plus particulièrement [gulp](http://gulpjs.com/) et [browsersync](http://www.browsersync.io/), pour que mon navigateur se mette seul à jour au fil de mes sauvegardes[^5].

[^5]: voir [l'article de Vladimir Iakovlev](https://nvbn.github.io/2015/06/19/jekyll-browsersync/ "Add live reloading to Jekyll with Gulp and Browsersync").

### Compilation et déploiement

Mon code est architecturé en deux dépôts. Un dépôt contient les articles du blog au format [Markdown](https://fr.wikipedia.org/wiki/Markdown), une syntaxe légère idéale pour rédiger[^3]. Un autre dépôt contient toute la logique applicative qui transforme ces articles en un site Web.

Lorsque je réalise une modification sur cette logique applicative, une notification est envoyée à [Codeship](https://codeship.com/), une solution d'intégration continue, qui s'occupe de valider que l'ensemble de la chaîne de compilation est valide : récupération de la dernière version du code, récupération des articles inclus dans un submodule git[^4], compilation de tout cela en un site Web et quelques tests pour vérifier que tout est à la bonne place.

Si cette étape d'intégration est valide et que j'ai contribué du code sur la branche <i lang="en">master</i>, alors [Codeship](https://codeship.com/) s'occupe du déploiement du site statique ainsi généré chez mon hébergeur, <a href="https://www.alwaysdata.com/">alwaysdata</a>. Le dernier déploiement a été réalisé le {{ site.time | localize: '%A %-d %B %Y' }}.

[^3]: Lire à ce propos [cet excellent article de Romy sur les syntaxes légères](http://romy.tetue.net/syntaxes-legeres-pour-rediger)

[^4]: Ne ratez pas cette [présentation complète des submodules git par Christophe Porteneuve](http://www.git-attitude.fr/2014/12/31/git-submodules/)
