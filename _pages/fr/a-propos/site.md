---
layout: page
title: À propos de ce site
permalink: /a-propos/site/
i18n-key: about-site
---

Je suis le principal auteur et l'unique responsable des contenus publiés sur ce site. En revanche, les marques citées sur ce site sont propriétaires des sociétés qui les ont déposés. L’ensemble de ce site est soumis au droit français.

Les points de vue et opinions exprimés sur ce blog n'engagent que moi, et en aucun cas mes employeurs ou clients, mon hébergeur ou toute autre personne physique ou morale.

Si vous souhaitez copier, modifier ou redistribuer certains contenus, vous devez respecter les termes de la [licence creative commons CC-BY](https://creativecommons.org/licenses/by/3.0/fr/).

## Sous le capot

Spécialisé en Web Performance depuis quelques années, j'ai décidé un jour de ne pas être le cordonnier mal chaussé. Depuis, dans une saine compétition avec mon ex-collègue [Nicolas Hoizey](https://nicolas-hoizey.com/), je n'ai jamais cessé d'améliorer les performances web du site.

### Côté serveur

J'ai commencé par jeter mon blog Wordpress pour le remplacer par un générateur de site statique[^static] en <em lang="en">node</em>, [Hexo](https://github.com/hexojs/hexo). Après avoir déterminé les limites de l'outil et contribué à quelques <em lang="en">plugins</em>, j'ai décidé de migrer vers [<em lang="en">Jekyll</em>](https://jekyllrb.com/) dont la communauté me semblait plus mûre.

[^static]: Frank Taillandier a merveilleusement bien croqué la [mouvance statique](http://frank.taillandier.me/2016/03/08/les-gestionnaires-de-contenu-statique/) sur son blog.

Mes dépendances Ruby sont gérées par [Bundler](http://bundler.io/) :

- pour la gestion des archives : `jekyll-archives` ;
- pour la génération d'images <em lang="en">responsive</em> : `jekyll-cloudinary` ;
- pour le `sitemap.xml` : `jekyll-sitemap` ;
- pour la pagination : `jekyll-paginate-v2` ;
- pour la micro-typographie française : `jekyll-microtypo`.

J'en oublie sûrement mais vous pourrez trouver l'ensemble des dépendances [sur le dépôt Github](https://github.com/borisschapira/boris.schapira.dev/blob/main/Gemfile 'Squelette Jekyll de boris.schapira.dev').

L'internationalisation est permise par `i18n` et le `i18n_filter`[^2].

[^2]: La technique de localisation est détaillée dans le [guide de démarrage Jekyll de Thomas Brelet](http://www.toam.fr/20-05-2013-guide-demarrage-jekyll/#localiser-jekyll).

J'utilise [node](https://nodejs.org/) pour la compilation des ressources statiques CSS et JS.

### Compilation et déploiement

Le dernier déploiement a été réalisé le {{ site.time | l: '%A %-d %B %Y' }}.

Le site généré est alors testé via [html-proofer](https://github.com/gjtorikian/html-proofer) pour vérifier que les pages ne contiennent pas d'erreurs.

Si tout se passe bien alors Netlify déploie le site généré sur son <abbr title="Content Delivery Network">CDN</abbr>.

Le dernier déploiement a été réalisé le {{ site.time | localize: '%A %-d %B %Y' }}.

C'est également Netlify qui s'occupe de capturer les commentaires pour me les envoyer par mail via [Netlify Forms](https://www.netlify.com/docs/form-handling/).

[^3]: Lire à ce propos [cet excellent article de Romy sur les syntaxes légères](http://romy.tetue.net/syntaxes-legeres-pour-rediger)

### Côté Client

Une partie de mon code CSS et JS est dédiée à l'accessibilité et j'essaie également de contribuer de manière responsable, pour être le plus inclusif possible à la fois envers les personnes, mais aussi envers les contextes (par exemple, j'utilise la librairie [abbr-touch](http://www.growingwiththeweb.com/2014/09/making-abbr-elements-touch-accessible.html) pour permettre aux personnes en situation de mobilité de visualiser la définition d'une abréviation ou d'un acronyme.

Afin de contrôler ce qui se passe sur mon site (notamment pour détecter des tentatives d'injections), j'ai positionné un certain nombre de règles [Content Security Policy](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9/CSP)[^7].

Une surveillance quotidienne via [Dareboost](https://www.dareboost.com/) sur plusieurs types de pages m'informe des éventuelles régressions de performance par le biais d'alertes configurées.

[^7]: Merci à [Nicolas Hoffman](https://twitter.com/Nico3333fr) de m'avoir sensibilisé à cette problématique durant [sa présentation à Paris Web 2015](http://www.nicolas-hoffmann.net/content-security-policy-parisweb-2015/ 'CSP: Content Security Policy').
