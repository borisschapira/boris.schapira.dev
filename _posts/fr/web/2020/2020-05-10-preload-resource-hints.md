---
title: 'Preload, Prefetch et Preconnect : accélerez votre site avec les Resource Hints'
thumbnail_background: '/assets/images/2020-04-29/people-doing-swim-race-1263349.jpg'
canonical: 'https://blog.dareboost.com/fr/2020/05/preload-prefetch-et-preconnect-resource-hints/'
canonical_title: 'le blog de Dareboost'
description: >-
    Utilisez preload et les Resource Hints pour améliorer la vitesse de chargement en influençant l'ordre de récupération et exécution des ressources.


tags:
    - 'Performance Web'
    - Network
    - 'Parties Tierces et Resource Hints'
cloudinary_logo: dareboost-logo
slug: preload-prefetch-et-preconnect-resource-hints
serie: 'Parties Tierces et Resource Hints'
translations:
    en: preload-prefetch-preconnect-resource-hints
---

Pour charger une page web complète, il faut un ensemble de ressources qui, collectivement, permettent l’affichage et l’interaction avec la page. Pour que l’utilisateur ait une impression de vitesse, il peut être nécessaire d’influencer l’ordre de récupération et d’exécution de ces ressources. C’est là que `preload` et les Resource Hints entrent en jeu.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

<figure>
{% capture img_alt %}Une course de natation{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/2020-04-29/people-doing-swim-race-1263349.jpg"
alt=img_alt
caption="Besoin d’altérer les priorités définies par le navigateur ? Agissez avec précaution."
%}
</figure>

Une page web est composée d’un document principal, en HTML, et d’éventuelles ressources additionnelles permettant de la mettre en forme, ou de lui adjoindre des médias, ou des comportements. D’après l’Almanac Web 2019 ([chapitre "Poids"](https://almanac.httparchive.org/fr/2019/page-weight#page-requests)), plus de la moitié des pages contiennent plus de 68 ressources qui s’additionnent au document principal.

Il n’est donc pas absurde de dire qu’en temps normal, télécharger une ressource est une tâche récurrente pour le navigateur. Cette tâche se décompose en plusieurs étapes, dont :

-   **la résolution DNS** de l’origine de la ressource  
    (si nécessaire, c’est-à-dire si le navigateur ne l’a pas déjà faite) ;
-   **la connexion au serveur** de cette origine  
    (si nécessaire, c’est-à-dire si le navigateur n’est pas déjà connecté) ;
-   **le téléchargement** de la ressource  
    (si nécessaire, c’est-à-dire si la ressource n’est pas déjà dans le cache client et toujours valide) ;
-   et suivant le type de ressource et la raison de la requête, **son éventuelle évaluation et utilisation**.

Pour permettre au navigateur de télécharger de manière plus efficace les ressources, vous pouvez lui indiquer comment optimiser ces différentes étapes.

Vous pouvez même indiquer au navigateur de télécharger certaines ressources en amont, de manière à [fluidifier de futures expériences de navigation sur votre site](https://blog.dareboost.com/fr/2019/01/monitoring-synthetique-surveillance-parcours-utilisateur-scenario/).

## Définitions et usages

`preload`, `dns-prefetch`, `preconnect`, et `prefetch` sont les directives à utiliser pour influencer le chargement des ressources. Nous parlerons par la suite de "Resource Hints" pour l’ensemble de ces directives mais sachez que `preload` possède [sa propre spécification](https://www.w3.org/TR/preload/), alors que les autres Resource Hints sont définis dans [une spécification indépendante](https://www.w3.org/TR/resource-hints/), notamment parce que `preload` n’est pas qu’une indication au navigateur, mais plutôt un ordre.

Pour écrire ces directives, vous pouvez utiliser soit la balise HTML `<link>`, soit l’en-tête HTTP `Link`. [Comme pour spécifier le jeu de caractères](/notes/2018-11-content-encoding/), nous vous recommandons l’en-tête de réponse HTTP, puisqu’il sera pris en compte par le navigateur avant le début de l’interprétation du code HTML de la page.

Dans le corps de page HTML :

```html
<link
    href="url-de-la-ressource"
    rel="directive"
    as="type-de-la-ressource"
    crossorigin="valeur"
/>
```

Via un en-tête HTTP :

```
Link: <url-de-la-ressource>; rel="prefetch"; as="type-de-la-ressource"; crossorigin="valeur"
```

Que vous choisissiez l’une ou l’autre des syntaxes, les paramètres à définir sont toujours les mêmes :

-   **l’URL** de la ressource, évidemment ;
-   **la directive** à utiliser ;
-   **le type** à considérer pour la ressource, ce qui permet de lui appliquer les Content-Security-Policy adaptées à sa nature ([en savoir plus](https://blog.dareboost.com/fr/2016/08/comment-implementer-content-security-policy/)) ;
-   l’attribut `crossorigin`, sur lequel nous reviendrons un peu plus loin.

Ces paramètres vous permettent de définir 4 directives supportées par la plupart des navigateurs récents :

-   `dns-prefetch` : indique au navigateur qu’il pourrait réaliser la résolution du nom de domaine fourni (déterminant l’IP à contacter) avant que ce domaine ne soit utilisé pour télécharger des ressources ;
-   `preconnect` : indique au navigateur qu’il pourrait se connecter à l’origine fournie, avant que celle-ci ne soit utilisée pour télécharger des ressources. Cela implique, comme `dns-prefetch`, la résolution DNS, mais également l’établissement de la connexion TCP et la négociation TLS (si la page est en HTTPS) ;
-   `prefetch` : indique au navigateur qu’il pourrait télécharger une ressource donnée, même si elle n’est pas détectée dans la page. La priorité de ce téléchargement est alors faible ;
-   `preload` : indique au navigateur qu’il **doit** télécharger une certaine ressource au plus tôt, avec une haute priorité.

On retrouve des usages intéressant de `dns-prefetch` dans le cadre de l’utilisation de parties tierces critiques : en réalisant en amont la résolution du domaine, ce sont quelques millisecondes qui peuvent être économisées à moindre coût.  
Cependant, dans la plupart des cas, il sera plus intéressant d’utiliser `preconnect` à la place de `dns-prefetch`, de manière à anticiper l’ensemble de la connexion.

Si votre site doit être compatible avec Internet Explorer, qui ne supporte pas `preconnect`, vous pouvez utiliser la syntaxe `rel='preconnect dns-prefetch'`.

Utilisez `preload` pour les ressources dont vous savez qu’elles seront utiles très tôt dans le chargement de la page mais qui ne seraient pas naturellement priorisées par le navigateur. `preload` est ainsi inutile pour les scripts synchrones présents dans votre `<head>`, qui sont déjà considérés par l’analyseur comme ayant une haute priorité. En revanche, il peut vous permettre d’augmenter la priorité d’exécution d’un script asynchrones situé dans le `<head>`. On utilise également `preload` pour charger des ressources référencées dans d’autre ressources (comme des polices d’écriture web, des images, ou d’autre feuilles de style référencées via `@import`) afin de les récupérer avant que le téléchargement et l’analyse de ces premières ressources ne soient terminés.

`prefetch` est une directive qui donne au téléchargement une très faible priorité, donc ne vous en servez pas pour déclarer des ressources essentielles. En revanche, il peut être très pertinent pour améliorer la navigation sur les pages suivantes. Un des meilleurs cas d’usage est d’utiliser `prefetch` lors de l’authentification, afin de profiter de la saisie des identifiant et mot de passe d’un·e internaute pour précharger les ressources statiques nécessaires au rendu de la page qu’il ou elle visualisera une fois authentifié·e.

## L’attribut `crossorigin`

L’attribut `crossorigin`, facultatif, est utilisé lors du téléchargement de ressources issues d’origines différentes de l’origine principale ([CORS](https://developer.mozilla.org/fr/docs/Web/HTML/Reglages_des_attributs_CORS)). Pour de nombreuses ressources (comme les CSS, ou les images), il n’est pas utile de le préciser, sauf à souhaiter requêter ces ressources en passant des en-têtes d’authentification, des cookies, etc. (on utilise alors la valeur `use-credentials`).

Pour d’autres types de ressources, définies dans des spécifications plus récentes, `crossorigin` doit être explicité. C’est le cas, par exemple, pour les polices de caractères ([voir la spécification](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)), **y compris quand elles proviennent du domaine principal**.

Attention aux implications : par exemple, si vous utilisez `preconnect` sur un domaine tiers sur lequel vous récupérez des images **et** des polices, dupliquez la déclaration de manière à créer deux connexions : une sans `crossorigin` (qui servira pour les images) et l’autre avec (qui servira pour les polices).

## À consommer avec modération

À la lecture de cet article, vous pourriez penser qu’il est pertinent de déclarer de très nombreux Resource Hints pour que le navigateur charge la page au plus vite. Il n’en est rien.

Puisqu’il définit une priorité de chargement faible, vous pouvez utiliser `prefetch` sans réel impact sur le chargement immédiat de la page. Attention cependant : son usage augmentera la consommation de données sur votre site, ce qui peut être un problème pour vous (augmentation du trafic sur votre serveur) et pour vos visiteurs·euses (surconsommation inutile de ressources).

Utilisez `preload` avec parcimonie, car il prend le pas sur les priorités définies par l’analyseur du navigateur, aussi bien en terme de téléchargement que d’exécution. Par exemple, imaginez que vous avez un script `async` dans votre `<head>`. Grâce à l'attribut `async`, sa priorité de téléchargement est faible. Cependant, une fois téléchargé, comme tout script non-différé, son analyse et son exécution interrompent le fil d’exécution principal (vous devez utiliser l'attribut `defer` pour éviter ça). Si vous ajoutez une directive `preload` qui concerne cette ressource, le navigateur la récupérera plus rapidement, donc l'analysera et l’exécutera plus rapidement. Le fil d’exécution sera interrompu très tôt dans le chargement de la page,, annulant l'effet retardataire de votre attribut `async`.

Même si le coût d’un `preconnect` est faible, il n’est pas nul. Si la connexion ainsi ouverte n’est pas utilisée rapidement, alors le `preconnect` aura engendré un surcoût de consommation CPU (côté client comme serveur) et de compétition réseau inutile.

> […] utilisez-la à bon escient : chaque socket ouvert entraîne des coûts à la fois sur le client et sur le serveur, et vous voulez éviter d'ouvrir des sockets qui pourraient rester inutilisées. Comme toujours, faites-le, mesurez l'impact dans le monde réel et itérez pour obtenir le meilleur gain de performance possible. <cite>"<a href="https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/">Eliminating Roundtrips with Preconnect [EN]</a>", Ilya Grigorik, traduit de l’anglais.</cite>

Un conseil datant de 2015 mais toujours d’actualité, notamment dans le cas de connexions à des origines sécurisées, dont la validation des certificats ajoute de la charge CPU et réseau.

On retrouve le même genre de recommandations [chez Ivan Akulov](https://3perf.com/blog/link-rels/), qui conseille même de basculer vers `dns-prefetch`, dont le coût est plus faible, si plus de 4 à 6 domaines sont concernés.

Vous l’aurez compris, _un grand pouvoir implique de grandes responsabilités_. Si vous souhaitez prendre la main sur les priorités attribuées nativement par le navigateur, alors vous devez le faire de manière modérée et responsable, afin d’éviter de reproduire des engorgements réseau et des consommations CPU desservant vos utilisateurs·ices. Cela peut s'avérer très payant, notamment pour [optimiser les services tiers (comme vos analytics ou vos polices d'écriture web)](https://blog.dareboost.com/fr/2020/05/optimiser-performance-parties-tierces/). Comme de nombreux sujets relatifs à la performance web : testez, mesurez et itérez !
