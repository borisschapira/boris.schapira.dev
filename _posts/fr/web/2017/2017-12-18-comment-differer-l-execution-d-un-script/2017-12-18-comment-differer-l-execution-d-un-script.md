---
title: "Comment différer l'exécution d'un script ?"
i18n-key: defer-js
date: '2017-12-18'
lang: fr
canonical: 'https://blog.dareboost.com/fr/2017/12/differer-les-scripts-pour-accelerer-le-rendu/'
type: post
categories:
    - web
tags:
    - 'Performance Web'
publishDate: '2017-12-18'
locale: fr_FR
---

Les artistes ne sont pas les seul·e·s à redouter les pages blanches, les internautes aussi. Leur frustration peut les pousser à abandonner votre site plus tôt qu’ils ou elles ne l’auraient voulu. Pour éviter ça, plusieurs techniques d’optimisation du rendu existent. Comme différer l’analyse et l’exécution des fichiers JavaScript.

{% include rwd-image.html.liquid 
    path="/assets/images/2017-12-18/0_chess.jpg"
    alt="Un jeu d'échec avant le début d'un partie. Zoom sur les noirs."
%}

<!-- more -->

<em class="canonical">**Note&nbsp;:** l'article ci-dessous a été publié sur [le blog de Dareboost](https://blog.dareboost.com/fr/) dans [{{ page.title }}]({{ page.canonical }}).</em>

Les navigateurs modernes sont conçus pour afficher les pages plus rapidement. Par exemple, ils analysent la page au fur et à mesure qu'elle est envoyée par le serveur, recherchant les URL des ressources qui sont nécessaires pour afficher la page (images, CSS mais plus spécifiquement, fichiers JavaScript). C'est ce qu'on appelle "[<i lang="en">preload scan</i>](https://plus.google.com/+IlyaGrigorik/posts/8AwRUE7wqAE)" dans Chrome et Safari, "[<i lang="en">speculative parsing</i>](https://developer.mozilla.org/en-US/docs/Web/HTML/Optimizing_your_pages_for_speculative_parsing)" dans Firefox et "<i lang="en">lookahead download</i>" dans Internet Explorer. Cette fonctionnalité permet au navigateur de commencer à récupérer les ressources tout en construisant sa propre modélisation du code HTML, le Document Object Model (DOM) et sa propre modélisation du code CSS, le CSS Object Model (CSSOM).

Dans la mesure où JavaScript est à la fois capable de modifier le contenu HTML et le style des éléments, le navigateur arrête la construction du DOM à chaque fois qu’il récupère un nouveau fichier JavaScript, au cas où. Il attend ensuite d’avoir fini de construire le CSSOM pour exécuter le script. Pendant ce temps-là, comme le DOM et le CSSOM sont la fondation du rendu visuel de la page, le navigateur n’affiche rien tant qu’ils ne sont pas construits.

Dans cet article, nous allons nous intéresser à ce qui peut être fait en JavaScript pour améliorer les délais d’affichage.

{% capture img_alt %}Capture de l'onglet Performance des Chrome DevTools. Une chronologie du chargement affiche les différentes étapes en couleurs. Une grande zone jaune est entourée de bleu. La première image n'apparait qu'à la fin.{% endcapture %}
{% capture img_caption %}Même si la construction du DOM (en bleu) se produit majoritairement avant l'exécution du JavaScript (en jaune), elle ne se termine qu'après. Dans cette configuration "par défaut" du chargement d'un script, le DOM est fini d'être construit très tardivement. L'affichage est retardé.{% endcapture %}
{% include rwd-image.html.liquid 
    path="/assets/images/2017-12-18/1_block.png"
    alt=img_alt
    caption=img_caption
%}

## Distinguer JS critique ou non-critique

Pour accélérer le rendu, vous devez décaler au maximum le parcours et l’évaluation des fichiers JavaScript. Facile à dire, plus difficile à faire.

En effet, il y a fort à parier que vos fichiers JavaScript contiennent des portions de code de différents types. Parmi elles, certaines doivent être chargées le plus tôt possible. C’est le cas des portions de JS orientées métier (les analytiques, par exemple), des librairies ayant un impact visuel important ou des scripts tiers que vous ne pouvez pas différer.

L’ensemble de ces éléments constitue votre "JavaScript critique". Groupez ce code dans un fichier identifiable simplement, nommé communément "critical.js". Comme pour tout fichier JavaScript, le navigateur devra le récupérer, le parcourir et l’analyser avant d’être en mesure de l’exécuter. 

Même si vous appliquez toutes les optimisations connues (nettoyage du code inutile, minification, compression, mise en cache côté client et côté serveur), le navigateur aura toujours besoin de parcourir et d’évaluer le code JavaScript. Comme [cette étape prend un temps considérable](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e), vous devez vraiment garder votre script critical.js aussi réduit que possible.

Tous les autres scripts peuvent être retardés, rendus asynchrones, ou déplacés en bas de page. Dans certains cas, vous pouvez leur appliquer plusieurs de ces comportements à la fois. Jetons un coup d'oeil à ces différentes techniques.

## Déplacer les scripts non-critiques au bas de la page

Un moyen très simple et intuitif de différer l'analyse des fichiers JavaScript par le navigateur est de placer les déclarations à la fin de la page HTML, juste avant le tag `</body>`. Ainsi, le navigateur n'aura aucune connaissance des scripts tant qu'il n'aura pas quasiment achevé la construction du DOM.

Bien que cette technique semble convenir à la majorité des cas, elle présente un inconvénient majeur : elle retarde non seulement l'évaluation des scripts, mais aussi leur téléchargement, ce qui exclut son utilisation pour les scripts volumineux. Si vos ressources ne sont pas desservies par HTTP/2 ou ne proviennent pas d'un domaine externe, vous devrez également ajouter un substantiel temps de résolution au temps de récupération déjà important.

Évidemment, puisque cette technique intervient à la fin de la construction du DOM, nous vous recommandons encore une fois de ne pas recourir à des scripts qui utilisent `document.write`, car le navigateur aurait à le reconstruire complètement.

{% capture img_alt %}Capture de l'onglet Performance des Chrome DevTools. Une chronologie du chargement affiche les différentes étapes en couleurs. L'intégralité du bleu est avant le jaune. Une première image apparait très tôt dans le chargement.{% endcapture %}
{% capture img_caption %}En repoussant les scripts en fin de page, la complétion de la zone d'affichage est bien plus rapide mais n'est pas définitive (une partie du contenu est altéré par l'exécution du JavaScript){% endcapture %}
{% include rwd-image.html.liquid 
    path="/assets/images/2017-12-18/2_end.png"
    alt=img_alt
    caption=img_caption
%}

## Et si on injectait une balise `<script>` dynamiquement ?

Comme mentionné ci-dessus, retarder le téléchargement d'un script n'est pas toujours une bonne idée. Ce que l’on veut parfois, c’est rendre le script asynchrone : le script est immédiatement récupéré sans que cette phase ne bloque la construction du DOM. Une fois disponible, la construction du DOM est interrompue pour que le navigateur puisse analyser et évaluer son contenu.

Pour obtenir ce comportement, il est nécessaire de ne pas déclarer ce script dans la source de la page, mais d'utiliser un autre script qui l'injecte directement dans le DOM. Cette technique, appelée "dynamic script tag", est l'épine dorsale de la plupart des services tiers.

L'un des principaux avantages de cette technique est que vous pouvez choisir quand le script sera injecté. Si vous voulez l'injecter immédiatement, vous pouvez utiliser une IIFE (Immediately Invoked Function Expression) :

```js
<script>
   (function () {
       var e = document.createElement('script');
       e.src = 'https://mydomain.com/script.js';
       e.async = true; // See the following explanation
       document.head.insertBefore(e, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
   }());
</script>
```

Mais vous pouvez aussi retarder l'injection pour qu'elle ne se produise que lorsqu'un événement spécifique est déclenché. Voici comment injecter un script lorsque le DOM est prêt :

```js
<script>
   // IE9+
   function ready(fn) {
       if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
           fn();
       } else {
           document.addEventListener('DOMContentLoaded', fn);
       }
   }
   ready(function () {
       var e = document.createElement('script');
       e.src = '[https://mydomain.com/script.js](https://mydomain.com/script.js)';
       e.async = true; // See the following explanation
       document.head.insertBefore(e, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
   });
</script>
```

Si vous êtes surpris par l’utilisation d’un `insertBefore` complexe à la place d’une plus simple `appendChild`, je vous invite à lire "[Surefire DOM Element Insertion](https://www.paulirish.com/2011/surefire-dom-element-insertion/)", de Paul Irish.

Aussi intéressante que puisse paraître cette technique, elle a aussi ses inconvénients. Tout d'abord, les scripts injectés de cette façon ne sont plus évalués séquentiellement dans l'ordre de leur injection. Vous ne pouvez donc pas y recourir pour injecter plusieurs scripts qui dépendent l’un de l’autre.

Deuxièmement, les balises de script dynamiques ne sont pas totalement asynchrones. Comme expliqué dans l'introduction, le navigateur s'assure que la construction du modèle objet CSS est terminée avant d'exécuter le code JS du script injecté. Le script n’est donc pas exécuté immédiatement. Afin d'expliquer au navigateur que le script peut être chargé sans attendre la construction du CSSOM, vous devez ajouter l'attribut `async` au script.

Mais attention : un script, même avec un attribut async, est toujours considéré comme une ressource de la page. L'événement `window. onload` sera donc retardé par son exécution. Si vous avez d’autres scripts qui dépendent de cet événement, anticipez un retard.

{% capture img_alt %}Capture de l'onglet Performance des Chrome DevTools. Une chronologie du chargement affiche les différentes étapes en couleurs. L'intégralité du bleu est avant le jaune. Une première image apparait très tôt dans le chargement.{% endcapture %}
{% capture img_caption %}Bien maitrisé, le tag dynamique est une des techniques les plus efficaces avec un DOM construit rapidement et un affichage quasiment immédiat. Attention cependant à l'absence d'ordre d'exécution des scripts !{% endcapture %}
{% include rwd-image.html.liquid 
    path="/assets/images/2017-12-18/3_dynamic.png"
    alt=img_alt
    caption=img_caption
%}

## `async`, `defer`, ou les deux

`async` et `defer` sont deux attributs standardisés par HTML5. Ils permettent de modifier le comportement par défaut du navigateur lors du chargement d'un script. 

Si l'attribut `async` est présent, alors le script est récupéré aussitôt que possible, puis exécuté. L'ordre de déclaration des scripts `async` n'est pas préservé: les scripts sont exécutés dès qu'ils sont disponibles. Notez cependant que même si la récupération du script n'arrête pas la construction du DOM, son exécution l'interrompt.

{% capture img_alt %}Capture de l'onglet Performance des Chrome DevTools. Une chronologie du chargement affiche les différentes étapes en couleurs. L'intégralité du bleu est avant le jaune. Une première image apparait très tôt dans le chargement.{% endcapture %}
{% capture img_caption %}Ici, à nouveau, un chargement très progressif. En revanche, comme pour le script dynamique, on perd l'ordre d'exécution des JS.{% endcapture %}
{% include rwd-image.html.liquid 
    path="/assets/images/2017-12-18/4_async.png"
    alt=img_alt
    caption=img_caption
%}

Si l'attribut `defer` est présent, le script sera récupéré aussitôt que possible, mais le navigateur attendra que l'arborescence DOM soit terminée avant de l'exécuter. Comme la plupart des navigateurs implémentent maintenant un *preloader*, le comportement d'un script ayant uniquement l'attribut `defer` est très similaire à celui d'un script placé à la fin du contenu HTML.

{% capture img_alt %}Capture de l'onglet Performance des Chrome DevTools. Une chronologie du chargement affiche les différentes étapes en couleurs, les unes sous les autres. On voit l'étape bleu et l'étape jaune se dérouler en simultané.{% endcapture %}
{% capture img_caption %}Cette autre mode de visualisation permet de bien comprendre la simultanéité de l'évaluation du DOM (en bleu) et du script (en jaune). Même si l'exécution du script est plus tardive, c'est toujours ce temps-là de gagné.{% endcapture %}
{% include rwd-image.html.liquid 
    path="/assets/images/2017-12-18/6_defer_details.png"
    alt=img_alt
    caption=img_caption
%}

Quant à utiliser `async` et `defer` ensemble, ce n'est pas très utile, sauf pour un cas d'utilisation, la rétro-compatibilité :

> L'attribut `defer` peut être spécifié même si l'attribut `async` est spécifié, pour que les navigateurs Web existants qui ne prennent en charge que `defer` (et non `async`) tombent dans le comportement `defer` au lieu du comportement de blocage par défaut.
> <cite>Extrait de <a href="https://www.w3.org/TR/html/semantics-scripting.html#element-attrdef-script-async">HTML 5.1 2nd Edition, W3C Recommendation 3 October 2017</a>, traduit par Boris Schapira</cite>

## Chargement de fichiers JavaScript : récupérez le contrôle, même sur vos scripts tiers

Nous avons vu que les techniques ne manquent pas quand il s’agit de rendre la récupération et l'exécution des scripts JavaScript asynchrone. Néanmoins, certains scripts ont encore besoin d'être déclarés synchrones comme les scripts de test A/B, qui bloquent parfois intentionnellement le rendu pour masquer le contenu à l'utilisateur jusqu'à ce que le script l'ait personnalisé. Comme ces scripts modifient souvent l'aspect visuel du site, il est censé bloquer le DOM et le CSSOM pendant leur exécution.

Cependant, même dans cette situation, vous n'avez pas à perdre le contrôle. Nous vous encourageons à choisir une solution qui tient compte des performances web. Certains acteurs sérieux comme Google Optimize, Kameleoon ou Optimizely limitent le temps alloué à la récupération et à l'exécution de leurs scripts. En cas de dépassement de cette durée, le navigateur interrompt la récupération ou l’exécution du script A/B. N'hésitez pas à réduire ce délai au minimum pour assurer la qualité de l'expérience de vos visiteurs.