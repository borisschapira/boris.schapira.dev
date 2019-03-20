---
title: 'Lazy Loading, des pages web plus rapides sans impact SEO'
i18n-key: lazy-loading-faster-webpages-seo-friendly
canonical: https://blog.dareboost.com/fr/2019/03/lazy-loading-des-pages-web-plus-rapides-sans-risque-seo/
tags:
    - 'Performance Web'
    - Images
    - SEO
loadTwitterWjs: true
cloudinary_logo: dareboost-logo
---

Les images sont au cœur de votre site web ? Si vous prenez la performance de
votre site au sérieux, vous les avez probablement optimisées. Mais avez-vous
pensé à les charger en Lazy Load ? Le Lazy Load des images améliore l’expérience
utilisateur en libérant de la bande passante pour le contenu important.

Certains rejettent la technique pour des questions de SEO. Mais un Lazy Load de
vos images ne les empêche pas d’être indexées. Voyons pourquoi vous devriez
implémenter un Lazy Load d’images et comment vous assurer qu’il soit compatible
avec votre SEO.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.title
    canonical=page.canonical
%}

Les images sont partout sur le Web, mais servir l’image la plus adaptée au
contexte courant peut s’avérer très difficile.
[L’image doit être optimisée](https://blog.dareboost.com/fr/2017/10/optimiser-les-images-et-reduire-leur-poids-formats-outils-et-rwd/),
adaptée à sa zone de rendu et chargée uniquement si nécessaire.

Le **Lazy Loading d’images** est un ensemble de techniques conçues pour répondre
à ce dernier besoin en différant le téléchargement de chaque image jusqu’au
moment où elle est nécessaire : après une interaction spécifique, à la suite
d’un défilement… ou jamais.

[Selon HTTPArchive \[EN\]](https://httparchive.org/reports/state-of-images#offscreenImages),
420 Ko (valeur médiane) pourraient être sauvegardés par page en chargeant ainsi
les images hors écran et/ou masquées.

{% capture img_alt %}Graphique présentant la quantité de données qui pourrait
être sauvegardées en ne chargeant pas les images hors-champ.{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2019-03-20/offscreen-images.png"
alt=img_alt
%}

## Quelques cas d’usage

Il y a de nombreux cas concrets du Lazy Loading. Prenons quelques minutes pour
citer quelques exemples.

**Résultats de recherche E-commerce**. Ces pages contiennent souvent tellement
de résultats que beaucoup de produits se trouvent en dehors de la fenêtre.
Est-il utile de télécharger leurs images ? Avec le Lazy Loading, vous pouvez
retarder leur chargement jusqu’à ce que la page soit déroulée.

**Les carrousels**, vous connaissez ? Pourquoi l’utilisateur devrait-il charger
toutes les images alors qu’il ne visualise que la première pendant quelques
secondes ? Utilisez le Lazy Load ! Chargez la première image normalement, et
lancez le téléchargement de l’image suivante en arrière-plan, quelques secondes
avant l’animation du carrousel. Et ainsi de suite.

**Menus et onglets**. Les images contenues dans un menu ou un onglet sont
souvent masquées, affichées seulement après un clic. Avec le Lazy Loading, vous
pouvez retarder le chargement de ces images jusqu’à ce que le bouton affichant
l’élément soit survolé ou cliqué.

Suivant la nature de votre page, d’autres cas sont envisageables. Aucune image
ne devrait être incluse à vos pages sans que vous ne vous soyez posé la question
d’en retarder le téléchargement. Car à la clé, il y a d’importants gains de
performance.

## Il en faut peu pour être heureux

En retardant le chargement des images qui ne sont pas immédiatement nécessaires
(ou, dans certains cas, en ne les chargeant pas du tout), le navigateur
économise des ressources (bande passante aussi bien que CPU). Ainsi, les
ressources préservées peuvent être affectées au contenu plus critique : la page
se charge plus rapidement et l’expérience utilisateur est améliorée. Les gains
sont aussi présents côté serveur : le processeur et la bande passante
nécessaires pour fournir les ressources sont moins sollicités, réduisant les
coûts d’hébergement et/ou de CDN.

Comme indiqué dans l’introduction, utiliser du Lazy Loading n’empêche pas vos
images d’être indexées par les moteurs de recherche. Mais cela peut être
compliqué. Toutes les techniques ne se valent pas car les différentes
bibliothèques et plugins disponibles sur le marché ne respectent pas
nécessairement toutes les bonnes pratiques. Pour préserver votre référencement
naturel, il est donc essentiel de comprendre comment le Lazy Loading fonctionne,
et comment l’utiliser sans risque.

## Utiliser JavaScript pour le LazyLoad

Dans un monde parfait, le Lazy Loading des images serait automatiquement assuré
par le navigateur. Ça sera peut-être bientôt le cas, car
[une Feature Policy dédiée au Lazyload \[EN\]](https://github.com/w3c/webappsec-feature-policy/issues/193)
est à l’étude, mais nous ne pouvons pas encore compter dessus. En attendant,
nous devons explorer d’autres solutions, chacune d’entre elles impliquant une
modification du balisage HTML et l’ajout d’une dépendance JS.

{% capture note %} **IMPORTANT** Vous n’avez pas besoin – et ne devriez pas –
appliquer un lazyload à toutes vos images. Si vous savez que certains images
seront affichées la plupart du temps, laissez-les être chargées et rendues
normalement. Le Lazy Loading est uniquement recommandé pour les autres images.
N’ajoutez pas de complexité si ça n’est pas nécessaire ! {% endcapture note %}
{% include note.html.liquid content=note %}

Traditionnellement, on utilise JS pour évaluer, à intervalles réguliers, si
chaque image (ou chaque élément affichant une image en arrière-plan) doit être
chargée et affichée. Les bibliothèques JS très performantes comme
[lazysizes](https://github.com/aFarkas/lazysizes) sont construites sur ce
paradigme et sont compatibles avec les anciens navigateurs. lazysizes peut même
détecter si le User-Agent est capable de scroller et, sinon, charger les images
sans attendre.

Cependant, l’exécution régulière de ces tests a un coût dont on peut
s’affranchir sur les navigateurs qui exposent les APIs Intersection et Mutation
Observer. Ces API permettent de réagir à des états spécifiques du DOM plutôt que
d’avoir à tester continuellement. [yall.js](https://github.com/malchata/yall.js)
et [lozad.js](https://apoorv.pro/lozad.js/) sont de bons exemples
d’implémentations de ce type mais sont seulement compatibles avec les
navigateurs modernes, ou exigent que vous utilisiez une autre bibliothèque,
appelée
[polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill),
pour émuler la fonctionnalité manquante au navigateur.

{% capture note %} **À NOTER** Pour éviter que le navigateur ne considère son
absence comme une erreur, je vous recommande fortement de toujours définir la
valeur de l’attribut `src`, en utilisant une très petite image transparente pour
occuper l’espace, comme : {% endcapture note %}
{% include note.html.liquid content=note %}

```html
<img
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
…
```

Quelle que soit la solution JavaScript que vous choisissez côté client, vous
devez modifier votre backend pour retourner le bon code HTML. Le balisage HTML
pour le lazyload d’une image est toujours similaire : l’attribut `src` est
remplacé temporairement par un attribut `data-src` qui empêche l’élément `<img>`
de charger l’image finale immédiatement.

```html
<!-- Lazy loaded image: before -->
<img
    data-src="garden.jpg"
    src="placeholder.jpg"
    class="js-lazyload"
    src="data…"
/>

<!-- Lazy loaded background image: before -->
<div data-class="bg-image-garden" class="container js-lazyload">…</div>
```

La bibliothèque identifie ses images cibles à l’aide d’un attribut, très souvent
en utilisant une classe spécifique (par exemple, ici, nous utilisons la classe
`js-lazyload`). Lorsque la bibliothèque détecte qu’il est temps de charger
l’image, l’attribut `data-src` est utilisé pour remplir l’attribut `src` et le
navigateur commence à charger l’image. La technique est la même pour d’autres
types de médias (vidéo, iframes) ou d’images adaptées pour le Responsive Web
Design (par exemple, l’attribut `data-srcset` peut être utilisé pour conserver
temporairement la valeur finale de l’attribut `srcset`)

```html
<!-- Lazy loaded image: after -->
<img src="garden.jpg" class="js-lazyload" … />

<!-- Lazy loaded background image: after -->
<div class="container js-lazyload bg-image-garden">…</div>
```

## Pas de JavaScript ? Contourner avec style (et `<noscript>`).

Les robots d’indexation, comme par exemple les Googlebots, sont des logiciels
qui parcourent le Web dans le but d’en indexer le contenu. Personne ne sait avec
certitude quand les Googlebots vont exécuter le code JavaScript de leurs pages,
et sous quelles contraintes. Comme
[démontré par Stephan Boyer en 2016 \[EN\]](https://www.stephanboyer.com/post/122/does-google-execute-javascript)
et confirmé plus tard par
[Tom Greenaway pendant Google IO 2018 \[EN\]](https://youtu.be/PFwUbgvpdaQ?t=845),
les Googlebots n’exécutent pas JavaScript durant leur première visite. Pour
obtenir une indexation se basant sur un rendu complet, il est parfois nécessaire
d’attendre plusieurs jours.

> Comme les Googlebots indexent le contenu web en deux temps, il est possible
> que certains détails nous échappent. <cite>Tom Greeaway</cite>

Comme certaines images.

Parce que si JavaScript n’est pas disponible, les images qui devraient être
chargées en Lazy Load ne le seront pas, car l’attribut `src` ne sera jamais
rempli, empêchant le navigateur de démarrer le téléchargement et d’afficher les
images. Ne pas télécharger et afficher les images en lazyload impliquent
malheureusement qu’elles ne seront pas indexées par les moteurs de recherche.

Comment servir ces images malgré l’absence de JavaScript ? Il y a un élément
HTML spécifique que vous pouvez utiliser : `<noscript>`. Le contenu d’un élément
`<noscript>` n’est affiché que si les fonctions de script ne sont pas supportées
ou sont désactivées. C’est exactement ce qu’il nous faut !

Donc si votre réponse HTML contient :

```html
<img
    data-src="garden.jpg"
    src="data/…"
    alt="A spacious garden dominated by a large pine tree."
    class="lazyload"
/>
<noscript>
    <img
        src="garden.jpg"
        alt="A spacious garden dominated by a large pine tree."
        …
    />
</noscript>
```

alors :

-   lorsque JavaScript est disponible, seul le premier élément `<img>` est
    affiché ;
-   lorsque JavaScript n’est pas disponible, les deux éléments `<img>` sont pris
    en compte lors de l’affichage de la page. Le second (dans l’élément
    `<noscript>`), est affiché et indexé par les moteurs de recherche. La
    technique,
    [confirmée par John Mueller \[EN\]](https://www.youtube.com/watch?time_continue=4308&v=7m-cd8XXovQ),
    Webmaster Trends Analyst chez Google, est exactement la même pour les images
    de fond :

```html
<div data-class="bg-image-garden" class="container js-lazyload">…</div>
<noscript>
    <div class="container bg-image-garden">
        … A spacious garden dominated by a large pine tree. …
    </div>
</noscript>
```

Attention : ne manquez pas d’ajouter un style spécifique qui sera appliqué
lorsque JavaScript n’est pas disponible, masquant les images qui n’auront pas
été chargées en Lazy Load.

Comme le code de chaque image est plus que dupliqué, vous pourriez craindre que
cette implémentation ne produise un code HTML verbeux. Ne vous inquiétez pas,
vos documents HTML sont normalement compressés avec gzip ou brotli avant d’être
envoyés sur le réseau. L’impact de ces duplications sur le poids du transfert
est donc négligeable (si vous n’êtes pas sûr·e que votre site utilise une
compression, [testez vos pages avec Dareboost](https://www.dareboost.com/)).

Reste bien sûr que saisir toutes ces balises n’est pas évident. En gérant les
images responsives, la direction artistique… le balisage des images peut être
très, très pénible. De toutes façons, vous ne devriez pas saisir ce code HTML à
la main : gérer cette complexité automatiquement devrait être de la
responsabilité de votre CMS, ou une tâche dédié de votre processus de
contribution.

{% capture img_alt %}Un cinquantaine de lignes de HTML bien dense.{% endcapture %}{% capture img_caption %}Balisage d’une image de The Guardian, avant-même la mise en place d’un Lazy
Loading{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-03-20/guardians_rwd_image.png"
alt=img_alt
caption=img_caption
%}



## Tester l’implémentation

Une fois le Lazy Load implémenté, vous devrez tester qu’il fonctionne. La
solution la plus simple est, bien sûr, d’exécuter
[un audit complet de performance web](https://www.dareboost.com/fr/service/analyse-site-web)
avec Dareboost pour détecter si toutes les images hors du viewport sont chargées
tardivement ou à la demande. Si ce n’est pas le cas, l’outil vous remontera les
URL des images pour lesquelles le chargement peut être reporté.

Si vous avez conditionné le chargement de vos images à la survenue d’un
événement navigateur ou personnalisé, n’hésitez pas à consulter
[la Waterfall de votre rapport](https://www.dareboost.com/fr/doc/rapport-analyse/timeline-waterfall)
pour vérifier que le chargement des images respecte votre chronologie. S’il
s’agit d’un événement personnalisé, n’hésitez pas à utiliser un
[Custom Timing](https://blog.dareboost.com/fr/2018/05/monitoring-custom-timings/)
pour être en mesure de le retrouver dans la Waterfall.

Il peut aussi être utile de faire des tests manuels. Ouvrez votre navigateur sur
la page web concernée, ouvrez les outils de développement et sélectionnez
l’onglet Réseau (tous les navigateurs modernes le proposent). Videz la pile
réseau pour mieux visualiser les nouveaux appels, puis provoquez l’interaction
destinée à démarrer le Lazy Loading.

Voici un exemple sur Chrome, avec un Lazy Loading activé au défilement :

{% include media/youtube.html.liquid id="Z4jRe3KRcf4" title="Visualization of lazyloading during scrolling in the Chrome DevTools Network tab" %}

Vous pouvez envisager d’automatiser ces tests en utilisant des outils basés sur
un navigateur. Puppeteer est l’un d’entre eux et
[peut être utilisé pour tester le comportement](https://github.com/GoogleChromeLabs/puppeteer-examples/blob/master/lazyimages_without_scroll_events.js)
de votre Lazy Loading avec Chrome ou Chromium, pour s’assurer que vos vrai·e·s
visiteurs·euses verront vos images.

Pour vérifier que les robots d’indexation verront également vos images, vous
pouvez demander à Google lui-même, en utilisant l’outil Inspecteur d’URL de la
[Google Search Console](https://search.google.com/search-console). Vous
afficherez votre page exactement comme si elle avait été récupérée par Google.
Insérez simplement votre URL pour que le Googlebot teste votre page et réalise
une capture d’écran du résultat pour confirmer que votre contournement
`<noscript>` fonctionne comme prévu.

---

Et voilà, vous savez maintenant tout ce qu’il y a à savoir sur le Lazy Loading
d’images, son impact SEO et la meilleure façon de le contourner. Il est temps de
faire un peu de ménage !
