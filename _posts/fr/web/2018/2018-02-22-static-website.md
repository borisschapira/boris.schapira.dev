---
title: 'Meilleure UX, meilleures performances : la nouvelle donne du web statique'
canonical: 'https://blog.dareboost.com/fr/2018/02/site-statique-performance-web/'
canonical_title: 'le blog de Dareboost'
tags:
    - 'Performance Web'
    - JAMStack
cloudinary_logo: dareboost-logo
slug: site-statique-performance-web
translations:
    en: static-website-web-performance
---

Générateurs de sites statiques, CMS "headless", plateformes d'intégration continue et de déploiement… depuis plusieurs années, une nouvelle gamme de solutions émerge dans le paysage des technologies web. Ces solutions contribuent à une tendance globale qui ressemble à un retour aux sources du Web. On parle de "La mouvance statique" ou de la "JAMStack" mais aucun de ces noms ne caractérise vraiment ce qui n’est pas moins qu’une nouvelle façon d’architecturer des applications web.

{% capture img_alt %}De grands rouages métalliques emboités{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-02-21/0_rouages.jpg"
alt=img_alt
%}

<!-- more -->

## Aux origines du Web

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Lorsqu'un utilisateur tente d'accéder à une page Web, son navigateur envoie une requête au serveur qui l'héberge. Soit le serveur retourne immédiatement la page telle qu'elle est stockée, soit le serveur la génère en exécutant du code, à la demande.

Bien que le Web ait été conçu comme un enchevêtrement de fichiers statiques, les langages de programmation côté serveur sont apparus très tôt et sont maintenant largement utilisés. [Selon W3Techs](https://w3techs.com/technologies/overview/programming_language/all), plus de 80 % des serveurs qui utilisent un langage côté serveur tournent en PHP. Dans la mesure où les hébergeurs offrant des serveurs qui n’exécutent pas au moins un langage sont pratiquement introuvables, il y a fort à parier qu’une écrasante majorité de sites web sont aujourd’hui générés dynamiquement.

Pourtant, la génération dynamique de réponses HTTP présente des inconvénients importants en termes de performance web. Une page web dynamique est délivrée par un serveur web, qui charge un langage d'exécution, qui analyse la requête HTTP, interroge souvent une base de données (parfois localisée sur un autre serveur dans le datacenter) et des services tiers, alimente un modèle logique qui se révèle à travers un agrégat de vues pour générer une réponse HTML. Ces opérations prennent du temps, donc logiquement, le [Time To First Byte](https://www.dareboost.com/en/glossary#ttfb) est plus long.

{% capture img_alt %}Un graphique Dareboost Dareboost sur lequel on peut voir plusieurs indicateurs. Les pics de TTFB coincident avec les pics de Speed Index.{% endcapture %} {% capture img_caption %}Un TTFB elevé pénalise le Speed Index d'une page.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-02-21/1_ttfb_en.png"
alt=img_alt
caption=img_caption
%}

Afin d'optimiser les temps de réponse, de nombreuses solutions de mise en cache sont apparues au fil des ans. Avec ces solutions, le premier utilisateur qui requête la page continue de subir le coût de génération mais le résultat est stocké sur un ou plusieurs serveurs proxy et parfois synchronisé sur différents endroits, partout dans le monde. Ces pages "mises en cache" sont ensuite utilisées pour répondre à toutes les requêtes considérées identiques, ce qui assure des temps de réponse rapides et uniformes. Il est possible de trouver des solutions de mise en cache logicielles (comme [Varnish](https://varnish-cache.org/)) mais également des plateformes et des infrastructures (les Content Delivery Networks). À chaque fois, le principe est le même : transformer ce qui est dynamique en pages statiques. Chassez le naturel…

## Mais l'utilisation de contenus statiques présente d'autres avantages !

Si vous voulez livrer vos pages statiques, vous devez les avoir compilées à l'avance. Ce fait, aussi banal qu'il puisse paraître, change tout. En effet, la compilation constitue le principal avantage du statique : déplacer la complexité de l'environnement de production vers le processus d'intégration.

Si vos pages sont servies par un serveur web sans avoir besoin d’être générées à la volée, vous n'avez pas besoin d’exécuter un langage côté serveur. Sans ce langage, de nombreux vecteurs d'attaque disparaissent. On ne peut pas vous voler des données confidentielles en injectant du code malveillant si vous n'avez ni base de données, ni langage d'exécution côté serveur.

Ne pas exécuter de code sur le serveur signifie également que la consommation CPU est très faible pour chaque réponse HTTP, ce qui améliore considérablement votre capacité de montée en charge. Attention toutefois : comme nous le verrons, le déploiement est un facteur clé et peut prendre du temps CPU.

Autre avantage : votre infrastructure sera plus résiliente. Imaginons qu’une erreur advienne, cela serait nécessairement pendant la génération. Vous pourriez alors la détecter avant le déploiement (par des tests automatisés, par exemple). Les problèmes techniques résultant d'une mauvaise contribution n’ont donc plus d'impact sur le site consulté par les visiteurs. Au pire des cas, c’est-à-dire si la compilation échoue, le contenu ne sera pas livré et le contenu du site ne sera pas à jour.

Ces avantages ne sont que la partie visible de l'iceberg. La tendance statique vous permet de transformer complètement la façon dont un site est publié. Pas étonnant que [Smashing Magazine ait déjà migré (EN)](https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/) !

## La statique est une modalité de distribution. Quelle est sa _stack_ technique ?

Un générateur de site statique (SSG) est un logiciel exécuté localement ou en tant que service. Il produit (et parfois déploie) un site Web statique en utilisant certaines sources de données pour le modèle et la configuration, ainsi que des templates contenant de la logique métier.

Le marché des SSG est en plein essor, avec [un nouveau produit lancé toutes les deux semaines](https://www.staticgen.com/). La plupart d'entre eux génèrent un site Web à partir d'un ensemble de fichiers, souvent écrits avec une syntaxe légère comme [Markdown](https://daringfireball.net/projects/markdown/) ou Asciidoc. La responsabilité de la conversion en HTML est attribuée à la fois à un moteur de templating (Liquid, Go Template, Nunjucks) - responsable de la logique - et à un moteur de rendu ([kramdown](https://kramdown.gettalong.org/), [commonmark](https://commonmark.org/), [blackfriday](https://github.com/russross/blackfriday), [Asciidoctor](https://asciidoctor.org/)…) responsable de la transformation du balisage en HTML. Les SSG ne sont rien de plus que les orchestrateurs techniques de la génération du site web. Par conséquent, ils sont principalement un terrain de jeu pour les développeurs front-end qui en connaissent les rouages.

En effet, les SSG sont des outils techniques et non des substituts aux CMS. Toutefois, ils deviennent vraiment intéressants quand vous suivez la piste de leur alimentation par des sources de données externes. Parce qu’alors, nous pouvons introduire des CMS qui ne seraient pas utilisés pour le rendu HTML, mais seulement pour stocker et exposer les données. On les appelle les CMS Headless.

Un CMS Headless est constitué :

> -   d’un système de stockage de données ;
> -   d’une interface CRUD ;
> -   d’une API pour accéder au données. <cite>"[What is a Headless CMS? (EN)](https://css-tricks.com/what-is-a-headless-cms/)", Chris Coyier</cite>

Et vous pouvez fabriquer des CMS Headless à partir de vos solutions habituelles. Wordpress, par exemple, a une [API REST](https://developer.wordpress.org/rest-api/). Côté Drupal, il y a tout un [groupe de travail](https://groups.drupal.org/headless-drupal) qui travaille sur le Headless. Là encore, le marché est en plein essor avec de nombreux nouveaux [logiciels et services](https://www.headlesscms.org/).

Mais pourquoi diable voudrions-nous séparer l'environnement contributif et l'outil de production? Pour une meilleure séparation des préoccupations.

L'équipe de développement, libérée du fardeau de la maintenance d'une base de données, peut se concentrer sur l'évolution technique de la plate-forme et le pipeline de production des ressources statiques tandis que l'équipe de contribution, de son côté, peut affiner les contenus.

Les contributeurs peuvent travailler sur des fichiers plats faciles à stocker et à modifier. Leur seul langage commun avec les développeurs devient les métadonnées passées dans chaque fichier, souvent écrites avec [Front-Matter](https://jekyllrb.com/docs/frontmatter/). Ils peuvent utiliser un outil dédié à l'édition ou le service en ligne de leur choix, même certains qui facilitent la collaboration. Ils peuvent également bénéficier du versionning de fichiers pour consulter l'historique de leurs fichiers, fusionner plusieurs versions ou créer des branches pour écrire du contenu qu'ils ne veulent pas publier tout de suite.

{% capture img_alt %}Un diagramme des flux de contribution et de développement d'un site qui montre clairement la séparation des préoccuppations entre développeurs et contributeurs.{% endcapture %} {% capture img_caption %}Le flux de contribution du CMS statique de Carrot (une agence numérique), tel que décrit [sur leur blog](https://carrot.is/coding/static_cms.html).{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-02-21/2_carrot.png"
alt=img_alt
caption=img_caption
%}

Après la contribution des contenus, la génération du site web et le déploiement sont souvent opérés par le même composant de l'infrastructure. Pour évaluer la performance de cette étape, il faut surveiller la performance du serveur de compilation durant la génération et du déploiement (durée, consommation CPU, mémoire). Mais ce n’est pas tout : pensez à surveiller également l'infrastructure ciblée (composée d'un ou plusieurs serveurs), car les tâches de copie peuvent être gourmandes.

Nous ne sommes plus alors dans un système où la métrique principale de montée en charge est le nombre de visiteurs simultanés. Les DevOps doivent complètement changer leur façon de penser pour créer un système capable de s’adapter plutôt à la fréquence de génération et de déploiement demandée par les contributeurs.

Là encore, [de nouveaux acteurs sont apparus](https://www.thenewdynamic.org/tools/hosting-deployment/). Le plus connu et probablement le plus efficace d’entre eux est sûrement Netlify. Son interface claire et simple aide à rattacher un dépôt de code source en quelques clics. Netlify va ensuite générer et déployer votre site web pour chaque commit, à la volée.

Un CMS Headless, un SSG et un orchestrateur de déploiement : nous avons maintenant notre stack back-end complète. Pourtant, nous produisons toujours un site web statique sans contenu personnalisé. La demande de dynamisme et de personnalisation des utilisateurs n'ayant jamais été aussi forte, ne faisons-nous pas fausse route ?

## Statique ? Pas tant que ça.

Nous avons vu que cette stack statique produit un balisage très standardisé. Afin d'introduire du dynamisme et de la personnalisation, nous devrons importer des données – fournies par le biais d'API – et les traiter du côté client – donc utiliser Javascript.

Cette nouvelle stack "**J**avaScript + **A**PI à couplage léger + **M**arkup HTML" a un nom : [JAMStack](https://jamstack.org/) et le marché affiche déjà plusieurs acteurs de premier plan, chacun d'entre eux disposant d'une gamme de services bien spécifique : [Stripe](https://stripe.com/) pour le paiement, [Algolia](https://www.algolia.com/) pour la recherche instantanée, [Disqus](https://disqus.com/) ou [IntenseDebate](https://www.intensedebate.com/) pour les commentaires, [Snipcart](https://snipcart.com/) pour le e-commerce, [Cloudinary](https://cloudinary.com/) ou [Twicpics](https://www.twicpics.com/) pour la gestion des médias, [Formspree](https://formspree.io/) ou [Staticman](https://staticman.net/) pour les formulaires... Notez que tous ces produits ne sont pas conçus pour la JAMStack à proprement parler : vous pouvez parfaitement utiliser les fulgurantes API d'Algolia côté serveur.

JAMStack est un véritable changement de paradigme. Le site Web servi au visiteur devient plus que jamais une coquille dans lequel des services, qu’ils soient auto-hébergés ou tiers, sont dynamiquement injectés. Il est même possible de s'appuyer sur plusieurs services pour un seul objectif et passer de l’un à l’autre en cas d’indisponibilité ou pour maximiser la performance.

Et puisque vous déportez une grande partie de vos efforts côté Front, pourquoi ne pas aller plus loin et le construire avec un framework Single Page App (SPA) comme Vue, Angular ou React ou le transformer en Progressive Web App (PWA) complète, conçue pour être "offline first" ? Rien de tout ça n’est inhérent à la JAMStack, mais facilité par le changement de paradigme de développement.

Pour l'utilisateur, en revanche, la différence est imperceptible. Essayez de rechercher un produit [sur ce site](https://community.algolia.com/instantsearch.js/v2/examples/e-commerce/). Avez-vous l’impression d’utiliser un site différent par rapport à un site développé en PHP ?

Pour les contributeurs, le changement de paradigme est total puisqu'il sépare la plateforme de contribution de celle qui héberge le site Web, leur laissant une plus grande liberté dans leurs usages. Certains d'entre eux préféreront utiliser des logiciels qui intègrent des outils d'aide à l'écriture (correcteur de langue, suggestions de vocabulaire, intégrations documentaires). D'autres trouveront leur bonheur auprès de plateformes de contribution en ligne. En supposant que le stockage du contenu soit indépendant de la solution utilisée, chacun d'entre eux pourra utiliser son outil préféré sans interférer avec les autres.

{% capture img_alt %}Forestry.io editing interface{% endcapture %} {% capture img_caption %}Interface de contribution de [Forestry.io](https://forestry.io/). Les contenus sont sauvegardés dans les fichiers d’un dépôt git et peuvent être également modifiés avec un éditeur de texte.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-02-21/3_forestry.png"
alt=img_alt
caption=img_caption
%}

Mais certains produits vont plus loin et transforment la contribution en expérience de première classe. Les contributeurs peuvent alors bénéficier d’outils de saisie sur mesure, avec des options de contribution riches et une intégration multimédias, sans impact sur le flux de publication ou la performance du site web ciblé.

{% capture img_alt %}Prismic.io slices{% endcapture %} {% capture img_caption %}[Prismic.io](https://prismic.io/) est l'une des plates-formes de contenu les plus personnalisables (ici, des &laquo; slices &raquo; réutilisables). Les contenus comme les gabarits sont contribués sur la plateforme. Pendant la compilation, le SSG requête l’API de Prismic.io pour récupérer les informations.{% endcapture %} {% include video_as_a_gif.html.liquid
url="/assets/images/2018-02-21/4_prismic"
alt=img_alt
caption=img_caption
%}

## Statique ou dynamique ? Du pareil au même.

Bien que l'approche JAMStack présente de nombreux avantages, dont la sécurité, la performance, la montée en charge et la manière dont on développe et contribue, elle implique également de nouveaux risques qu'il serait dangereux d'ignorer.

Premier danger : se perdre dans l’offre pléthorique de CMS Headless, générateurs de sites statiques et plateformes de services. Prenez le temps d'évaluer vos besoins car chaque solution a ses avantages et ses inconvénients. [Jekyll](https://jekyllrb.com/), par exemple, est un SSG bien connu, développé en Ruby, bien documenté mais assez lent. [Hugo](https://gohugo.io/), en revanche, est un SSG beaucoup plus rapide mais aussi plus complexe à manier pour un novice. Si vous ne publiez pas du contenu à très haute fréquence, le temps de génération est-il un critère de choix si important, à résultat équivalent ?

Pensez également à inspecter les conditions d'utilisation des services tiers que vous envisagez d’utiliser. Chez Dareboost, nous avertissons souvent nos utilisateurs contre les abus de scripts tiers. Si vous avez besoin de commentaires et utilisez Disqus, acceptez-vous pour autant d'injecter dynamiquement leurs publicités ? Heureusement, si vous avez suivi [nos conseils sur les Content Security Policies](https://blog.dareboost.com/fr/2016/08/comment-implementer-content-security-policy/), vous ne devriez pas vous être trop dérangés 😉.

<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">Disqus started injecting adverts into pages that use their comment system, like my blog. Their problem is that my CSP doesn&#39;t allow their adverts to be included 😎 <a href="https://t.co/c3lTAhCjS7">pic.twitter.com/c3lTAhCjS7</a></p>&mdash; Scott Helme (@Scott_Helme) <a href="https://twitter.com/Scott_Helme/status/961612668992966656?ref_src=twsrc%5Etfw">8 février 2018</a></blockquote>

Un autre risque, et pas le moindre : même si votre site Web est moins sujet aux problèmes de sécurité, il peut quand même être attaqué au travers de ses appels à des API. Vous devez absolument vous assurer que les scripts que vous utilisez [n'ont pas été altérés](https://blog.dareboost.com/fr/2017/01/analyse-sites-maj-bonnes-pratiques-dareboost/#chargement-de-ressources-provenant-de-tierces-parties) et que chaque échange avec un service tiers est sécurisé via HTTPS. Assurez-vous également que vos API auto-hébergées sont conformes aux bonnes pratiques de sécurité et n'hésitez pas à inspecter minutieusement les garanties contractuelles des services tiers dont vous dépendez.

Enfin, pensez à choisir vos API en fonction de la pérennité des organisations qui les exposent. Si vous transférez la responsabilité de vos fonctionnalités clés à des services tiers, vous feriez mieux de vous assurer qu'ils perdurent dans le temps et maintiennent un niveau de qualité constant. Une bonne façon de surveiller ces services est de recourir à l’exécution régulière de [Parcours Utilisateurs](https://www.dareboost.com/fr/service/monitoring-parcours-utilisateur) qui sont capables de simuler les interactions fonctionnelles avec votre site web.

## Un nouvel horizon

Une fois que vous avez bien appréhendé les risques spécifiques et mis en place les workflows appropriés, le JAMStack présente de nombreuses opportunités.

Le coût de migration d’une solution Headless CMS ou SSG vers une autre sont souvent très réduits. Vous pouvez facilement passer d'une contribution locale sur fichiers à une infrastructure de contenu comme Netlify CMS, Forestry, Contentful ou Prismic, ce qui vous permet d'évaluer rapidement la solution qui répond le mieux à vos besoins. Reste que la création d'un site statique prend du temps et nécessite une architecture capable d'orchestrer plusieurs solutions.

Aujourd'hui, cela peut sembler complexe mais rappelez-vous votre premier site dynamique: choisir un hébergeur, maîtriser FTP, jonglez avec les logs du serveur web... ça n’était pas facile à apprendre non plus. Vous découvrirez cette nouvelle façon d’organiser votre projet étape par étape. Pour les utilisateurs expérimentés de la JAMStack, cela devient naturel.

D’autant qu’en dépit du risque de centralisation qu’elles constituent, les plates-formes unifiées comme Netlify offrent un catalogue impressionnant de services : génération et déploiement de sites web, enregistrement DNS, gestion des certificats et formulaires SSL, fonctions lambdas, Content Delivery Network, etc.

De quoi permettre à votre équipe de se concentrer sur le développement du Front-End et l'optimisation des performances Web. Avec un Time To First Byte aussi bas, l'équipe peut pleinement se concentrer sur l'UX grâce à la mesure du [Speed Index](https://blog.dareboost.com/en/2018/02/speed-index-web-performance/) et la maitrise des interactions utilisateurs.

---

_Mes remerciements à Erin Symons, [Frank Taillandier](https://twitter.com/dirtyf) et toute la [communauté jamstatic.fr](https://jamstatic.fr/), [Bud Parr](https://twitter.com/budparr), [Nicolas Hoffmann](https://twitter.com/Nico3333fr) et mes collègues [Philippe Guilbert](https://twitter.com/GuilbertPhil) et [Damien Jubeau](https://twitter.com/DamienJubeau) pour leur temps et leurs conseils._

---

## Ressources additionnelles

-   "[Why Static Site Generators Are The Next Big Thing (EN)](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/)", Matt Biilmann
-   "[Contentful n'est pas un CMS](https://bertrandkeller.info/2018/01/30/contentful-pas-un-cms/)", Michelle Gienow, adapté par Bertrand Keller
