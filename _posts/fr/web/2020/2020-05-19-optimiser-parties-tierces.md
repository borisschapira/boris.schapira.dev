---
title: 'Comment optimiser les performance de vos parties tierces'
thumbnail_background: '/assets/images/2020-05-20/swimmers-on-body-water-3772419.jpg'
canonical: 'https://blog.dareboost.com/fr/2020/05/optimiser-performance-parties-tierces/'
canonical_title: 'le blog de Dareboost'
canonical_dismissed: true
description: >-
    Pourquoi et comment utiliser la directive preload et les Resource Hints pour optimiser la charge de vos ressources tierces (polices, vidéos, analytics...) et accélérer vos pages web.


tags:
    - 'Performance Web'
    - 3p
    - 'Parties Tierces et Resource Hints'
cloudinary_logo: dareboost-logo
slug: optimiser-parties-tierces
serie: 'Parties Tierces et Resource Hints'
translations:
    en: optimize-third-parties-performance
last_modified_at: 2020-05-20 07:26:00 +0000
---

Intégrer des librairies ou services existants de parties tierces permet de gagner en productivité, mais a souvent un coût sur la performance ressentie. Dès lors que vous intégrez du code externe, comment vous assurer que ce code ne viendra pas nuire au rendu et à l’interactivité de votre site ? Explications et propositions pour un code tiers plus performant.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

<figure>
{% capture img_alt %}Une course de natation en eau vive. Pas de couloirs, tous les participants se ruent en même temps vers l'arrivée, quitte à entrer en collision.{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/2020-05-20/swimmers-on-body-water-3772419.jpg"
alt=img_alt
caption="Si rien ne distingue vos ressources des ressources tierces, elles entrent en compétition."
%}
</figure>

Développer un projet Web Front-End, c’est répondre à un ensemble d’exigences métiers avec du code. Ce code, vous pouvez le produire vous-même ou déporter cette responsabilité vers des librairies ou services du marché ayant déjà fait leurs preuves.

Lorsque vous référencez une de ces librairies ou un de ces services depuis une page web plutôt que de l’intégrer à votre propre code, ni vous ni le navigateur de la personne visitant votre page Web n’avez aucun contrôle sur cette ressource, puisqu’elle est produite, maintenue et hébergée par un tiers. On parle alors de ressources en "Tierce Partie" (ou "3p").

## Comment cela fonctionne-t-il ?

Référencer des parties tierces, en HTML, passe généralement par les balises `<script>` (permettant de charger et d’exécuter un script), `<link>` (qui référence des ressources ultérieurement nécessaires à la page) ou `<iframe>` (qui crée au sein de la page un tout autre contexte de navigation).

[D’après l’Almanac Web 2019](https://almanac.httparchive.org/en/2019/third-parties), 93 % des pages destinées aux ordinateurs de bureau comprennent au moins une ressource tierce et près de 76 % de ces pages émettent une requête vers un domaine de télémétrie (comme Google Analytics, par exemple).

Les parties tierces peuvent concerner des domaines très variés : publicité, télémétrie, aide à la relation client, intégration de réseaux sociaux, fonctionnalités marketing, gestion des utilisateurs, vidéos… Très souvent, les références à ces ressources sont réunies au sein d’un [gestionnaire de tags](https://blog.dareboost.com/fr/2018/04/tag-managers-performance-web/), qui permet d’en centraliser la gestion et d’offrir un point d’entrée pour les [discussions relatives aux parties tierces](https://blog.dareboost.com/fr/2018/06/tag-manager-performance-web-bonnes-pratiques/) utilisées sur la page.

Avoir recours à des parties tierces augmente la productivité de vos équipes de développement (qui délèguent certaines fonctionnalités au tiers concerné). En contrepartie, cela augmentera votre coût opérationnel, puisqu’il faudra éventuellement s’acquitter d’une licence d’utilisation, et très certainement surveiller le bon fonctionnement de cette brique logicielle sur laquelle vous n’avez plus la main.

Sachez enfin que vous n’avez en général aucun droit à demander une modification du fonctionnement des ressources ou services tiers que vous utilisez : le fait que ces ressources soient utilisées par un très grand nombre de sites permet à son éditeur d’être à l’abri des influences individuelles.

## Et au niveau performance ?

Souvent critiquées, les tierces parties ont un impact sur les performances de rendu et d’utilisation qu’il est pourtant important de nuancer. Si on prend, par exemple, les librairies JS les plus courantes, servies en tierces parties par des CDN : elles sont parmi les ressources les plus efficacement servies, avec une minification et une obfuscation efficaces, souvent couplée à des CDNs permettant une faible latence dans l’accès aux données. Bien que leur utilisation détériore souvent Start Render, cela est plus souvent dû au fait que [ces scripts sont chargés de manière synchrone](/notes/2017-12-comment-differer-l-execution-d-un-script/) plutôt qu’à leur statut de parties tierces.

Le plus gros impact sur les performances vient des publicités et des scripts de réseaux sociaux dont le coût sur le réseau et la performance est rarement compensé par les fonctionnalités qu’ils apportent aux utilisateurs, à tout le moins pendant la phase de chargement initial de la page.

On pourra par exemple citer le cas du bouton "J’aime" de Facebook, dont on peut discuter l’intérêt mais qui, du point de vue de l’expérience utilisateur, n’est certainement pas utile avant d’avoir pris connaissance du contenu de la page. Il devrait donc naturellement être chargé en différé.

Une fois évaluée la pertinence de vos parties tierces et leurs modalités respectives de chargement, vous découvrirez certainement que le chargement de vos parties tierces peut être optimisé. Plusieurs cas de figure se présenteront.

## Retarder une ressource ou un service chargé trop tôt

Il s’agit du cas où une tierce partie charge une ou plusieurs ressources avant que l’ensemble des éléments critiques de la page n’aient été affichés et rendus interactifs. On pourra citer, par exemple, le chargement de vidéos Youtube situées sous la ligne de flottaison, consommant la bande passante alors qu’elles ne sont pas visibles.

Dans ce cas, il faudra revoir la déclaration du `<script>`, `<link>` ou `<iframe>` permettant l’inclusion de la partie tierce dans le site, de manière à ce que cette inclusion soit plus tardive : soit par rapport à un évènement levé pendant le chargement d’autres ressources, soit par rapport à un événement lié à l’utilisation de la page par l’internaute (une problématique de Lazy-Loading déjà abordée [pour le chargement des images](/notes/2019-03-lazy-loading-des-pages-web-plus-rapides-sans-risque-seo/)).

## Prioriser une ressource ou un service chargé trop tard

Si vous utilisez des parties tierces destinées à définir ou améliorer le design (polices d’écritures, scripts JS définissant des dimensions d’éléments dans la page), voire à récupérer une partie du contenu à afficher, vous souhaiterez en prioriser le téléchargement et l’utilisation. Or, très souvent, l’utilisation de ces ressources est ralentie par :

-   la **résolution DNS** de l’origine qui les héberge ;
-   la **connexion** à cette origine ;
-   le **téléchargement** de ces ressources.

Comment indiquer au navigateur le comportement à adopter pour optimiser leur chargement ? Jetez un œil à [mon précédent article sur Preload et les Resource Hints](/notes/2020-05-preload-prefetch-et-preconnect-resource-hints/) !

## Le cas des Googles Fonts

Dès qu’il s’agit de polices web, les Google Fonts sont prépondérantes : toujours d’après l’Almanac Web 2019 (chapitre "[Polices](https://almanac.httparchive.org/fr/2019/fonts)"), au moins 74 % des requêtes de polices web proviennent de Google Fonts, et 29 % des pages contiennent un lien vers une feuille de style CSS Google Fonts.

Ce type d’appel présente un véritable risque, car le chargement d’une feuille de style CSS est synchrone. Le navigateur interrompt le rendu de la page pendant qu'il requête, télécharge et analyse le fichier CSS. L’appel constitue alors un Point Unique de Défaillance (en anglais, Single Point of Failure, SPOF) : si aucune réponse n’est apportée, alors la page reste figée. Il est très facile de [simuler une défaillance de ce type avec Dareboost](https://www.dareboost.com/fr/doc/test-performance-web/options/mapping-dns-blackhole) (en ciblant fonts.googleapis.com).

On pourrait penser qu’en raison des moyens déployés par Google, une défaillance de cette ampleur soit peu probable. Pour autant, personne n’est à l’abri d’un incident, et Google n’est qu’un maillon de la chaîne. Entre les incidents réseaux, les équilibrages autour de la neutralité du net, les erreurs de configuration de proxy nationaux ou d’entreprises, ce risque existe et se réalise parfois (n’hésitez pas consulter [notre article sur les Single Point of Failure](https://blog.dareboost.com/fr/2016/06/single-point-of-failure-scripts-externes/)).

Pour éviter cela, vous pouvez utiliser des techniques de chargement asynchrone basées sur [des altérations d’attributs](https://www.filamentgroup.com/lab/load-css-simpler/) ou [des librairies JavaScript](https://github.com/filamentgroup/loadCSS) exposant le cycle de vie de vos polices.

Une optimisation plus simple est de télécharger les Google Fonts. Une fonctionnalité proposée nativement sur le site Google Fonts mais également disponible via l’outil [Google Webfont Helper de Mario Ranfti](https://google-webfonts-helper.herokuapp.com/fonts) qui vous aidera à générer le fichier CSS permettant de les déclarer.

En faisant cela, cependant, vous perdrez le bénéfice de la négociation de contenu de Google Fonts, détaillée [dans cet article de Barry Pollard](https://www.tunetheweb.com/blog/should-you-self-host-google-fonts/). En bref: Google Fonts optimise le fichier CSS qu’il délivre afin d’offrir les bons formats de polices et les jeux de caractères supportés par votre navigateur.

La meilleure solution est donc, à l’heure actuelle, d’utiliser un proxy de ressources. En apparence, il s’agit de sous-domaines vous appartenant qui sert les ressources tierces dont vous avez besoin. En réalité, il s’agit d’une web application qui procède à la récupération et la mise en cache des ressources sur des domaines externes, en filtrant les informations envoyées à ces domaines (transférant ce qui est pertinent pour la négociation de contenu mais pas ce qui relève de la vie privée des utilisateurs). Avec un tel outil, vous servez les polices depuis votre domaine, tout en bénéficiant de la négociation de contenu de Google Fonts. Cette technique, également disponible pour les JavaScript, est bien décrite dans cet article de l’équipe Tech de Décitre : "[Limiter les dégâts du chargement d’un JS tiers](https://tech.decitre.fr/posts/optimiser-chargement-js-tiers)".

Cette technique, complexe, n’est pas à la portée de tout le monde. Une alternative est donc d’utiliser un mélange de `preload` (pour la feuille de style CSS) et de `preconnect` (au domaine servant les polices) pour bénéficier de la meilleur optimisation possible. Harry Roberts traite ce sujet en détail dans un article paru aujourd’hui-même : "[The Fastest Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/)".

## Conclusion

Les ressources ou services en parties tierces apportent des fonctionnalités à votre site, mais la manière dont ils sont chargés peut nuire à l’expérience utilisateur. Pour optimiser leur chargement, commencez par déterminer les compromis à réaliser afin de donner à chaque élément considéré une priorité. Une fois ces priorités définies, alors vous pourrez retarder ou prioriser le chargement des parties tierces afin d’en tirer le meilleur profit, quitte parfois à les servir sur votre propre domaine, en direct ou via un proxy.
