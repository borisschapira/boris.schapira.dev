---
title: 'Un blog avec Jekyll et Codeship'
thumbnail_background: /assets/images/2016-02-25/jekyll.png
---

Depuis plusieurs mois, ce blog est propulsé par Jekyll et Codeship. Une page explicative existe, mais elle est "vivante" et si je change quelque chose demain, elle évoluera. J'utilise donc un article daté pour figer un peu les choses, et tant pis pour le contenu dupliqué.

<!-- more -->

{% capture img_alt %}Un tube à essai rempli d'une potion pétillante rouge écarlate{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2016-02-25/jekyll.png"
alt=img_alt
%}

## Sous le capot

Consultant en Web Performance depuis quelques années, j'ai décidé un jour de ne pas être le cordonnier mal chaussé. Depuis, dans une saine compétition avec mon collègue [Nicolas Hoizey](https://nicolas-hoizey.com/), je n'ai de cesse d'en améliorer les temps de réponse.

### Côté serveur

J'ai commencé par jeter mon blog Wordpress pour le remplacer par un générateur de site statique en <span lang="en">node</span>, [Hexo](https://github.com/hexojs/hexo). Après avoir déterminé les limites de l'outil et contribué à quelques <span lang="en">plugins</span>, j'ai décidé de migrer vers [Jekyll](https://jekyllrb.com/), plus rapide, plus abouti et dont la communauté Ruby me semblait plus mûre.

Mes dépendances Ruby sont gérées par [Bundler](http://bundler.io/) :

-   pour la gestion des ressources statiques (hors images) : `jekyll-assets` ;
-   pour la gestion des archives : `jekyll-archives` ;
-   pour la génération d'images <span lang="en">responsive</span> : `jekyll-responsive_image` ;
-   pour le `sitemap.xml` : `jekyll-sitemap`.

L'internationalisation est permise par `i18n` et le `i18n_filter`[^2].

[^2]: La technique de localisation est détaillée dans le [guide de démarrage Jekyll de Thomas Brelet](http://www.toam.fr/20-05-2013-guide-demarrage-jekyll/#localiser-jekyll).

Jekyll ayant tendance à produire du code HTML très "aéré" et aucun moteur de rendu Markdown ne m'ayant convaincu quant à sa capacité à traité certaines spécificités typographiques françaises, j'ai mis en place un script "maison" de remplacement et de compression, libre adaptation de [ce tutoriel de Sylvain Durand](https://www.sylvaindurand.org/ameliorer-la-typographie-avec-jekyll/ 'Améliorer la typographie avec Jekyll'). De plus, Jekyll ne semble pas proposer de syntaxe simple pour la navigation précédent/suivant au sein d'une même catégorie, j'utilise donc [ce plugin d'Adams Clarkson](http://ajclarkson.co.uk/blog/jekyll-category-post-navigation/ 'Jekyll Post Navigation Within a Category').

En local, j'utilise parfois [node](https://nodejs.org/), et plus particulièrement [gulp](http://gulpjs.com/) et [browsersync](http://www.browsersync.io/), pour que mon navigateur se mette seul à jour au fil de mes sauvegardes[^5].

[^5]: voir [l'article de Vladimir Iakovlev](https://nvbn.github.io/2015/06/19/jekyll-browsersync/ 'Add live reloading to Jekyll with Gulp and Browsersync').

### Compilation et déploiement

Mon code est architecturé en deux dépôts. Un dépôt contient les articles du blog au format [Markdown](https://fr.wikipedia.org/wiki/Markdown), une syntaxe légère idéale pour rédiger[^3]. J'utilise les <span lang="en">hooks</span> de GitHub pour interfacer ce dépôt à [Codeship](https://codeship.com/) (une solution d'intégration continue) qui se charge d'exécuter des tests avec [rspec](http://rspec.info/) pour vérifier que le contenu des en-têtes Front-Matter sont valides en <abbr lang="en" title="YAML Ain't Markup Language">YAML</abbr>. Si c'est le cas, alors [Codeship](https://codeship.com/) publie les articles sur un [dépôt public](https://github.com/borisschapira/blog). Puis clone le dépôt Jekyll et met à jour la référence du <span lang="en">submodule</span> git[^4].

Ce dépôt, mis à jour, lance également une opération sur [Codeship](https://codeship.com/) : récupération de la dernière version des articles, du code et des dépendances, compilation de tout cela en un site Web et tests via [html-proofer](https://github.com/gjtorikian/html-proofer).

Si cette étape d'intégration est valide et que le code est bien contribué sur la branche `master`, alors [Codeship](https://codeship.com/) s'occupe du déploiement du site statique ainsi généré chez mon hébergeur, <a href="https://www.alwaysdata.com/">alwaysdata</a>. Le dernier déploiement a été réalisé le {{ site.time | localize: '%A %-d %B %Y' }}.

[^3]: Lire à ce propos [cet excellent article de Romy sur les syntaxes légères](http://romy.tetue.net/syntaxes-legeres-pour-rediger)

[^4]: Ne ratez pas cette [présentation complète des submodules git par Christophe Porteneuve](http://www.git-attitude.fr/2014/12/31/git-submodules/)

Si tout se passe bien, alors le site se retrouve en Production.

### Côté Client

Le chargement des polices privilégie la vitesse en affichant une première version avant qu'elles soient disponibles puis une seconde version une fois les polices chargées, sans clignotement au remplacement[^font].

[^font]: Les [articles du Filament Group sur le chargement des polices](https://www.filamentgroup.com/lab/font-events.html) sont de très bonnes références si le sujet vous intéresse.

Une partie de mon code CSS et JS est dédiée à l'accessibilité et j'essaie également de contribuer de manière responsable, pour être le plus inclusif possible à la fois envers les personnes, mais aussi envers les contextes (par exemple, j'utilise la librairie [abbr-touch](http://www.growingwiththeweb.com/2014/09/making-abbr-elements-touch-accessible.html) pour permettre aux personnes en situation de mobilité de visualiser la définition d'une abréviation ou d'un acronyme.

La recherche instantanée est le fruit du branchement du site sur [Algolia](https://www.algolia.com/), une solution très performante d'indexation et de recherche côté client qui a le mérite de proposer un [exemple d'implémentation pour Jekyll](https://blog.algolia.com/instant-search-blog-documentation-jekyll-plugin/ 'Add instant search to your blog or documentation using our Jekyll plugin') qui cadrait parfaitement avec mon besoin. Il faudra néanmoins que je repasse dessus car le code JavaScript nécessaire me semble un peu complexe ([jQuery](https://jquery.com/), [Hogan](http://twitter.github.io/hogan.js/), [MomentJs](http://momentjs.com/)… je dois pouvoir faire plus simple).

J'ai ajouté au site [InstantClick](http://instantclick.io/), une librairie JavaScript qui augmente considérablement la vitesse perçue en préchargement les pages internes au survol des liens, donnant l'impression à l'utilisateur que l'ensemble du site est préchargé, comme dans une application web <span lang="en">single page</span>.

Afin de contrôler ce qui se passe sur mon site (notamment pour détecter des tentatives d'injections), j'ai positionné un certain nombre de règles [Content Security Policy](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9/CSP) et des rapports sont enregistrés dans une base de données à chaque infraction[^7].

[^7]: Merci à [Nicolas Hoffman](https://twitter.com/Nico3333fr) de m'avoir sensibilisé à cette problématique durant [sa présentation à Paris Web 2015](http://www.nicolas-hoffmann.net/content-security-policy-parisweb-2015/ 'CSP: Content Security Policy').

Parce que je suis curieux, j'ai installé Google Analytics. Je suis conscient que certains d'entre vous veulent un peu d'intimité. Je vous encourage, dans ce cas, à faire comme moi : bloquer l'ensemble des domaines auxquels vous ne souhaitez pas faire confiance, au sein de votre navigateur ou ailleurs sur votre machine. Ça passe par la manipulation de votre fichier `hosts` et il y a des scripts pour automatiser tout ça[^6]. Enfin, contrairement aux <span lang="en">ads blockers</span>, c'est transparent en performance.

[^6]: J'utilise pour ma part les [scripts de blocage de domaines de Steven Black](https://github.com/StevenBlack/hosts).
