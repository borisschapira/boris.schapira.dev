---
layout: page
title: À propos de ce site
date: 2017-12-29 14:00:00
i18n-key: about-site
permalink: /a-propos/site/index.html
locale: fr_FR
---

Je suis le principal auteur et l'unique responsable des contenus publiés sur ce site. En revanche, les marques citées sur ce site sont propriétaires des sociétés qui les ont déposés. L’ensemble de ce site est soumis au droit français.

Les points de vue et opinions exprimés sur ce blog n'engagent que moi, et en aucun cas mes employeurs ou clients, mon hébergeur ou toute autre personne physique ou morale.

Si vous souhaitez copier, modifier ou redistribuer certains contenus, vous devez respecter les termes de la [licence creative commons CC-BY](http://creativecommons.org/licenses/by/3.0/fr/).

## Sous le capot

Consultant en Web Performance depuis quelques années, j'ai décidé un jour de ne pas être le cordonnier mal chaussé. Depuis, dans une saine compétition avec mon collègue [Nicolas Hoizey](http://nicolas-hoizey.com/), je n'ai de cesse d'en améliorer [les temps de réponse](http://www.webpagetest.org/testlog.php?days=365&filter=borisschapira.com&all=on "Tests de performance WebPageTest lancés sur ce site").

### Côté serveur

J'ai commencé par jeter mon blog Wordpress pour le remplacer par un générateur de site statique[^static] en <em lang="en">node</em>, [Hexo](https://github.com/hexojs/hexo). Après avoir déterminé les limites de l'outil et contribué à quelques <em lang="en">plugins</em>, j'ai décidé de migrer vers [<em lang="en">Jekyll</em>](https://jekyllrb.com/) dont la communauté me semblait plus mûre.

[^static]: Frank Taillandier a merveilleusement bien croqué la [mouvance statique](http://frank.taillandier.me/2016/03/08/les-gestionnaires-de-contenu-statique/) sur son blog.

Mes dépendances Ruby sont gérées par [Bundler](http://bundler.io/) :

* pour la gestion des archives : `jekyll-archives` ;
* pour la génération d'images <em lang="en">responsive</em> : `jekyll-cloudinary` ;
* pour le `sitemap.xml` : `jekyll-sitemap` ;
* pour la pagination : `jekyll-paginate-v2` ;
* pour la micro-typographie française : `jekyll-microtypo`.

J'en oublie sûrement mais vous pourrez trouver l'ensemble des dépendances [sur le dépôt Github](https://github.com/borisschapira/borisschapira.com/blob/master/Gemfile "Squelette Jekyll de BorisSchapira.com").

L'internationalisation est permise par `i18n` et le `i18n_filter`[^2].

[^2]: La technique de localisation est détaillée dans le [guide de démarrage Jekyll de Thomas Brelet](http://www.toam.fr/20-05-2013-guide-demarrage-jekyll/#localiser-jekyll).

La durée de lecture est calculée en considérant une vitesse de lecture moyenne de {{ site.reading_speed }} mots par minute. Votre vitesse de lecture est probablement différente[^rs], ce n'est qu'indicatif.

[^rs]: la mienne est d'un peu plus de {{ site.author.reading_speed_fr }} mots en français et de {{ site.author.reading_speed_en }} en anglais (à plus de 80 % de rétention, sinon ça ne compte pas).

J'utilise [node](https://nodejs.org/), et plus particulièrement [gulp](http://gulpjs.com/) pour la compilation des ressources statiques CSS et JS.

### Compilation et déploiement

Mes pages et articles sont écrits au format [Markdown](https://fr.wikipedia.org/wiki/Markdown), une syntaxe légère idéale pour rédiger[^3]. J'utilise les <em lang="en">hooks</em> de GitHub pour interfacer ce dépôt à [Netlify](https://www.netlify.com/) qui se charge d'exécuter des tests avec [rspec](http://rspec.info/) pour vérifier que le contenu des en-têtes Front-Matter sont valides en <abbr lang="en" title="YAML Ain't Markup Language">YAML</abbr>. Si c'est le cas, alors Netlify compile le site.

Le site généré est alors testé via [html-proofer](https://github.com/gjtorikian/html-proofer) pour vérifier que les pages ne contiennent pas d'erreurs.

Si tout se passe bien alors Netlify déploie le site généré sur son <abbr title="Content Delivery Network">CDN</abbr>.

Le dernier déploiement a été réalisé le {{ site.time | localize: '%A %-d %B %Y' }}.

[^3]: Lire à ce propos [cet excellent article de Romy sur les syntaxes légères](http://romy.tetue.net/syntaxes-legeres-pour-rediger)

### Côté Client

Le chargement des polices privilégie la vitesse en affichant une première version avant qu'elles soient disponibles puis une seconde version une fois les polices chargées, sans clignotement au remplacement[^font].

[^font]: Les [articles du Filament Group sur le chargement des polices](https://www.filamentgroup.com/lab/font-events.html) sont de très bonnes références si le sujet vous intéresse.

Une partie de mon code CSS et JS est dédiée à l'accessibilité et j'essaie également de contribuer de manière responsable, pour être le plus inclusif possible à la fois envers les personnes, mais aussi envers les contextes (par exemple, j'utilise la librairie [abbr-touch](http://www.growingwiththeweb.com/2014/09/making-abbr-elements-touch-accessible.html) pour permettre aux personnes en situation de mobilité de visualiser la définition d'une abréviation ou d'un acronyme.

<!-- La recherche instantanée est le fruit du branchement du site sur [Algolia](https://www.algolia.com/), une solution très performante d'indexation et de recherche côté client qui a le mérite de proposer un [exemple d'implémentation pour Jekyll](https://blog.algolia.com/instant-search-blog-documentation-jekyll-plugin/ "Add instant search to your blog or documentation using our Jekyll plugin") qui cadrait parfaitement avec mon besoin. Il faudra néanmoins que je repasse dessus car le code JavaScript nécessaire me semble un peu complexe ([jQuery](https://jquery.com/), [Hogan](http://twitter.github.io/hogan.js/), [MomentJs](http://momentjs.com/)… je dois pouvoir faire plus simple). -->

Afin de contrôler ce qui se passe sur mon site (notamment pour détecter des tentatives d'injections), j'ai positionné un certain nombre de règles [Content Security Policy](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9/CSP) et des rapports sont enregistrés dans une base de données à chaque infraction[^7].

[^7]: Merci à [Nicolas Hoffman](https://twitter.com/Nico3333fr) de m'avoir sensibilisé à cette problématique durant [sa présentation à Paris Web 2015](http://www.nicolas-hoffmann.net/content-security-policy-parisweb-2015/ "CSP: Content Security Policy").