---
title: 'Optimiser les images et réduire leur poids : formats, outils et RWD'
thumbnail_background: /assets/images/2017-10-29/square.jpg
canonical: 'https://blog.dareboost.com/fr/2017/10/optimiser-les-images-et-reduire-leur-poids-formats-outils-et-rwd/'
canonical_title: 'le blog de Dareboost'
canonical_dismissed: true
tags:
    - 'Performance Web'
    - Images
cloudinary_logo: dareboost-logo
slug: optimiser-les-images-et-reduire-leur-poids-formats-outils-et-rwd
translations:
    en: optimize-images-to-reduce-page-weight-file-formats-tools-and-rwd
---

"Réduisez le poids de la page" : voici l'un des conseils les plus couramment délivrés dans les rapports Dareboost. Selon les tendances mesurées par HTTP Archive, les images représentent 53 % du poids moyen des pages web, qu’elles soient consultées sur ordinateurs de bureau ou périphériques mobiles. Lorsque vous cherchez à réduire le poids de votre page Web, l’optimisation des images remonte donc logiquement dans le top de vos priorités.

{% capture img_alt %}Sur un carré blanc sont disposés plusieurs pixels en camaïeu de bleu, au dessus de la diagonale, de manière progressive{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-10-29/square.jpg"
alt=img_alt
%}

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

## À chaque image son format

Il n’est pas toujours simple de trouver le format d’image le plus adapté. Prenons par exemple notre logo. Nous pourrions l’enregistrer en <abbr lang="en" title="Portable Network Graphics">PNG</abbr>, en <abbr lang="en" title="Joint Photographic Experts Group">JPEG</abbr>, en WebP ou en <abbr lang="en" title="Scalar Vector Graphics">SVG</abbr>. Le poids des images serait très différent. Un test empirique nous permet de le constater :

{% capture img_alt %}PNG 6 Ko ; JPEG 38 Ko ; WebP 9 Ko ; SVG 2,5 Ko (1,3 gzippé){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-10-29/logo_fr_580.png"
alt=img_alt
%}

Dans ce cas précis, le format le plus adapté semble être SVG, suivi de près par PNG. Il s’agit en effet d’une image dont les couleurs sont unies, non-animée, représentant des formes géométriques. Autant de facteurs qui tendent à favoriser ces formats.

Prenons un second exemple, avec cette fois la photographie d’une fusée qui décolle. SVG s’avère incapable de représenter cette image correctement (nous expliquerons pourquoi un peu plus loin). Voici ce que nous obtenons, à perception visuelle équivalente, pour les formats JPEG, PNG et WebP :

{% capture img_alt %}PNG 171 Ko ; JPEG 33 Ko ; WebP : 13 Ko. Pas de différence notable.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-10-29/rocket_fr_580.jpg"
alt=img_alt
%}

Ici, les résultats sont radicalement différents. Pour représenter toute la complexité d’une photographie, le format WebP se démarque nettement. Malheureusement, il n’est supporté que sur Chrome et Opéra, nous lui préférerons donc souvent le format JPEG.

<em><strong>A savoir :</strong> pour chacun de vos <a href="https://www.dareboost.com/">tests de performance avec Dareboost</a>, notre outil d'analyse vérifie systématiquement si le format PNG n'est pas utilisé pour des images trop complexes où d'autres formats seraient plus indiqués.</em>

Au moment de l’enregistrement en JPEG, la plupart des logiciels demandent quelle qualité conserver, car il s’agit d’un format d’encodage avec pertes. En choisissant une qualité inférieure à 100%, il est ainsi possible d’économiser de précieux octets en modifiant uniquement certains points de l’image. Essayons avec notre image, en qualité 80%. Le résultat est très intéressant avec un gain de poids de plus de 50%, alors que seuls quelques points de l’image ont été modifiés en profondeur.

{% capture img_alt %}JPEG d'origine : 33 Ko. JPEG optimisé : 16 Ko. Entre les deux, très peu de modifications.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-10-29/diff_fr_580.jpg"
alt=img_alt
%}

Comme les exemples ci-dessus le montrent, choisir un format n’est pas anodin et tous les formats ne sont pas adaptés à toutes les images. Tout cela mérite quelques explications.

## Comment choisir le bon format d’image ?

Certes, au final, toutes les images s'affichent à l’écran de la même manière : un rectangle composé de plusieurs points de différentes couleur. Mais ce n’est pas forcément comme ça qu’elle sont enregistrées dans la machine. Et chaque format de fichiers image s’appuie sur différentes techniques d’encodage des informations visuelles.

### Que représente mon image ?

Certains formats de fichiers encodent les images de la même manière qu’elle s’affiche à l’écran : comme des matrices de points de couleur. Chaque point de couleur est codé sur plusieurs octets (bits) et positionné au sein d’une carte (map) en fonction de ses coordonnées. C’est pour cela que ces formats sont parfois appelés « bitmap ». Divers algorithmes de compression viennent ensuite réduire l’espace pris par ces informations sur le disque. On parle, pour ces formats, d’images « <strong>matricielles</strong> ». Leur avantage : ils peuvent encoder n'importe quelle photographie et certains d'entre eux, comme le format PNG, ont des fonctionnalités avancées comme l'optimisation de la palette de couleurs ou la transparence.

Malheureusement, ce processus d’encodage doit définir en premier lieu les dimensions de la matrice, c’est-à-dire la résolution de l’image, avant d’y positionner les points. Du coup, si vous agrandissez une image matricielle <strong>JPG</strong>, <strong>PNG</strong> ou <strong>WebP</strong> existante, vous perdrez grandement en qualité.

D’autres formats de fichiers n'ont pas ce défaut, car ils encodent les images comme un ensemble de formes géométriques. Ils définissent une image à travers les lignes, les points et les polygones qui la compose. Chaque fois que l'image doit être affichée, l'ordinateur la redessine en suivant cette spécification de dessin virtuel. Ces <strong>images vectorielles</strong> sont très adaptées pour le rendu des formes simples, des logotypes et des graphiques de données. Comme ils ne sont pas dépendants de la résolution, ils sont particulièrement adaptés aux conceptions Web Responsive. Les images <strong>SVG</strong> et les polices d’icônes sont des formats vectoriels. Revers de la médaille : les graphiques vectoriels sont assez peu adaptés aux photographies.

### Réduire le poids des images en sacrifiant des informations

Il est possible d’aller plus loin dans l'optimisation en acceptant de perdre quelques informations en route. L’enjeu est bien sûr de perdre le strict nécessaire, tout en maintenant un niveau de qualité intéressant. C’est ce qu’on appelle la <strong>phase d’optimisation avec perte</strong>.

Pour les <strong>images vectorielles</strong>, <a href="https://github.com/svg/svgo">svgo</a> est aujourd’hui un outil de référence pour lequel il existe même une interface en ligne : <a href="https://jakearchibald.github.io/svgomg/">svgomg</a>. L’outil est capable de réduire la quantité de code en nettoyant des métadonnées qui sont inutiles pour l’affichage (par exemple, les informations concernant l’outil qui a servi à générer le fichier) mais aussi en réunissant plusieurs formes géométriques ou transformations qui leurs sont appliquées en une seule. Pour réduire le poids d'une police d’icônes, la logique est la même, à ceci près que vous pourrez également réduire son périmètre d'action en sélectionnant uniquement les caractères utilisés pour fabriquer votre jeu de caractères sur-mesure. Plusieurs sites, comme <a href="https://icomoon.io/">Icomoon</a>, permettent de créer sa propre webfont.

Comme nous l’avons vu dans l’exemple de la fusée, des optimisations avec ou sans pertes sont possibles également sur les <strong>images matricielles</strong>. Comme chaque format d'image a ses propres caractéristiques (par exemple, la transparence du support PNG), chaque algorithme a un mode d'action différent et un impact visuel spécifique.

Voici quelques formats de fichiers et certains outils d'optimisation adaptés, dont certains sont inclus dans les outils graphiques comme Photoshop ou GIMP :

-   PNG: Zopfli-png, PNGOUT, OptiPNG, AdvPNG, PNGCrush, PNGQuant
-   JPG: JPEGOptim, MozJPEG, Jpegtran, Guetzli

<a href="http://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer">FileOptimizer</a> (Windows), <a href="https://imageoptim.com/mac">ImageOptim</a> (Mac) ou <a href="https://trimage.org/">Trimage</a> (Linux) sont des logiciels qui réunissent plusieurs algorithmes en un seul endroit. Ils vous permettront de tester ces optimisations avec différents niveaux de perte et exportent directement une image optimisée. Ils sont même capables de déterminer quand une image PNG peut être enregistrée en PNG-8 (une variante de PNG à 256 couleurs seulement) plutôt que PNG-24 pour gagner quelques précieux octets.

### Pourquoi ne parle-t-on pas de GIF ?

GIF est un format très contraint (il ne peut décrire que 256 couleurs) qui supporte la transparence et l'animation. Utilisé depuis des années pour encoder des logotypes, des pictogrammes et de courtes animations, il est temps que GIF, disons-le clairement, prenne sa retraite..

Vous pouvez trouver des fonctionnalités estampillées GIF dans tous les réseaux sociaux ou applications de messagerie instantanée, mais ce n’est pas vraiment la réalité. En fait, beaucoup de ces services utilisent des formats vidéos, avec des fichiers bien plus légers ! Nous reviendrons sur ce sujet dans un prochain article.

{% include video_as_a_gif.html.liquid
controls=true
url="/assets/images/2017-10-29/lenny"
alt="Capture des Chrome DevTools où l'on voit une vidéo être jouée comme un GIF et à côté, le code HTML de cette vidéo."
%}

Si vous avez néanmoins besoin du format GIF, sachez qu'un outil de compression en ligne de commande existe aussi : gifsicle. Il peut être très utile pour manipuler les contenus GIF : réduire la palette de couleurs, redimensionner, couper et rogner... J'utilise parfois gifsicle pour encoder de courts enregistrements de mon écran et les intégrer dans des emails, car beaucoup de clients mail ne peuvent toujours pas lire les vidéos intégrées aux emails.

## Servir la bonne taille de fichier en fonction du contexte

Choisir le bon format de fichier n'est pas suffisant pour garantir que vous servirez l'image optimale dans tous les contextes d’usage.

Imaginons que vous utilisiez une image d'une largeur de 2680 pixels pour décorer le background d’un site pensé pour une consultation depuis un ordinateur de bureau à écran haute résolution (<abbr lang="en" title="Hight Dot Per Inch">HiDPI</abbr>, ex-Retina™). Sur un appareil mobile de plus faible résolution, en 3G, non seulement le navigateur chargera une quantité importante de données superflues mais, pour que l’image rentre dans la largeur du téléphone, il devra également la redimensionner avec son algorithme interne. Le résultat final sera dégradé, sans parler de la vitesse d’affichage... Ce qu’il aurait mieux valu faire, c’est produire plusieurs versions de cette image, dans différentes résolutions et laisser le navigateur choisir l’image à télécharger en fonction de son contexte d’exécution.

On appelle « <strong>Images Responsives</strong> » ces techniques qui consistent à produire, pour la même zone d'une page Web, plusieurs images adaptées aux contextes possibles de navigation. Pour les images d'arrière-plan et décoratives, vous pouvez utiliser les media-queries CSS.

Pour les images non-décoratives, la spécification <strong>picture</strong> a ajouté, en 2014 (oui, trois ans déjà !), l'attribut <code>srcset</code> à l'élément <code>&lt;img&gt;</code>. Le <code>srcset</code> est une collection d'URLs pointant vers plusieurs versions d'une même image de résolutions différentes (mais toujours le même rapport largeur/hauteur). Il confie au navigateur la responsabilité de choisir la version de l’image à télécharger, en fonction du contexte courant. Malheureusement, sans avoir téléchargé les fichiers CSS de la page Web, le navigateur ne peut pas comprendre l’espace relatif occupé par l'image dans la fenêtre, donc l'attribut <code>sizes</code> doit également être défini.

Si vous voulez proposer, en plus de votre image optimisée, des formats supportés par un nombre limité de navigateurs (comme WebP) ou si vous voulez gérer différents rapports largeur/hauteur en fonction du contexte (une question de direction artistique), vous pouvez encadrer votre image par un élément <code>picture</code> et plusieurs éléments <code>source</code> :

{% capture img_alt %}Capture de code{% endcapture %} {% capture img_caption %}Extrait de code d'image responsive du Guardian{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-10-29/theguardian.png"
alt=img_alt
caption=img_caption
%}

Avec tous les médias possibles, les questions de direction artistique, de tailles, de densité de pixel et de support de formats, le balisage HTML des images responsives peut aboutir à un résultat assez impressionnant. Mais n'oubliez pas que vos réponses HTTP doivent être gzippées. La différence de 500 o entre ce balisage et un simple élément <code>img</code> sera au final largement compensée par le gain sur le poids de l'image servie.

À noter que même si le support des éléments HTML nécessaires est assez récent, une librairie fiable et reconnue permet un support sur des navigateurs plus anciens : <a href="https://scottjehl.github.io/picturefill/">picturefill</a>.

### Automatiser, automatiser, automatiser

Choisir le bon format d’image, générer des miniatures, utiliser parfois des formats alternatifs plus adaptés suivant le contexte (comme WebP) et donc générer encore d'autres miniatures…

Réaliser manuellement ce travail sur une quantité importante d’images de base de grande qualité relève du titanesque. Très peu d’outils, qu’ils s’agissent des <abbr title="Content Management System">CMS</abbr> ou des plateformes e-commerce, intègrent des fonctionnalités abouties sur la gestion d’images. Même les solutions de Digital Asset Management, dédiées normalement à la gestion des ressources visuelle et dont cela devrait être une des prérogatives, sont souvent inutiles.

Quelques solutions existent tout-de-même, comme <a href="https://cloudinary.com/">Cloudinary</a> qui est un service tiers accessible en SaaS ou <a href="http://thumbor.org/">Thumbor</a>, qui s’installe sur un de vos serveurs. Discutez avec votre équipe de développement Web pour déterminer le meilleur outil et n'oubliez pas d’expliquer les problématiques aux contributeurs et de les former à la solution retenue.

N’oubliez pas non plus de toujours conserver les images d’origine (celles qui sont de la meilleure qualité disponible) et de bien réfléchir aux optimisations, notamment avec pertes, que vous souhaitez appliquer.

Par exemple, sur un site e-commerce, les visuels produits sont plus critiques que les images décoratives, donc vous ne voudrez pas perdre trop de qualité. De même, si vous êtes dans le marché du Luxe, vos visiteurs attendent une qualité d’image irréprochable. Il faudra donc être très fin dans la configuration des optimisations. Parfois, <a title="Perceptual Image Compression at Flickr" href="http://code.flickr.net/2015/09/25/perceptual-image-compression-at-flickr/">comme ce fut le cas chez Flickr</a>, le bon réglage peut prendre plusieurs mois.

## Le <span lang="en">Lazy Load</span> quand c’est possible (avec ou sans effet visuel)

Une autre façon d’améliorer les performances d'une page Web, consiste à se passer des images inutiles lors du chargement initial. Par exemple, vous pouvez retarder le chargement de toutes les images qui ne sont pas affichées dans la zone visible de la page Web (<span lang="en">Lazy Loading</span>). Il y a beaucoup de bibliothèques JS pour faire cela mais toutes ne seront pas compatibles avec votre code existant : demandez son avis à votre équipe de développement ou suggérez-leur une librairie sans dépendance comme <a href="https://apoorv.pro/lozad.js/">Lozad</a>. Une fonctionnalité de <span lang="en">Lazy Loading</span> est également disponible sur Apache et nginx : <a href="https://www.modpagespeed.com/doc/filter-lazyload-images" lang="en">ModPageSpeed Lazyload</a>.

Un des problèmes du <span lang="en">Lazy Loading</span> est que la zone dédiée à l’image reste souvent vide jusqu’à ce que, brutalement, l’image apparaisse. Il faut donc déterminer quand et comment charger les images ainsi retardées pour que l’utilisateur soit le moins possible témoin de ce phénomène : après le chargement initial (<a href="https://www.dareboost.com/fr/doc/test-performance-web/indicateurs/onload">onload</a>) de la page Web ? Lorsque l'utilisateur fait défiler le contenu et s’apprête donc à rendre visible la zone concernée ? Le <span lang="en">Lazy Loading</span> doit être discuté avec les concepteurs UX qui peuvent avoir des idées sur la façon de l’animer pour le rendre moins abrupt.

Certains sites Web occupent la zone de l’image avec un contenu standard aux couleurs de la marque. D’autres utilisent la couleur majoritaire de l'image ou même une silhouette de l'image réelle en SVG.

{% include video_as_a_gif.html.liquid
controls=true
url="/assets/images/2017-10-29/placeholders"
alt="Chargement progressif d'images : pendant que les images se charge, une silhouette floue occupe l'espace."
%}

## Réduire le nombre d'images avec une pile d'images

Sur les réseaux où la latence est importante, on peut rapidement gagner du temps en réduisant le nombre d'images à télécharger. Plutôt que d'inclure chaque image dans un fichier image séparé, les images peuvent être regroupées dans un seul fichier. Les Sprites d’images sont un exemple de cette technique appliquée aux images matricielles. Les polices d'icônes ou les symboles SVG sont l’implémentation équivalente pour les images vectorielles.

Bien que l’idée soit séduisante, sa mise en œuvre peut se révéler complexe. Utiliser un sprite image est une technique utile si vous utilisez vraiment toutes les images empilées sur la page Web où la ressource est chargée, ce qui est assez rare. De plus, si vous devez remplacer un seul élément de la pile, le sprite entier doit être invalidé dans le cache du navigateur.

Enfin : le problème initial, la latence, n’est pas une fatalité. <a title="HTTP/2 : la transition est en marche ! Quels changements pour le développeur front-end ? &mid; Blog Dareboost" href="https://blog.dareboost.com/fr/2016/11/http2-changements-bonnes-pratiques-http1-front-end/">En HTTP/2</a>, un protocole dans lequel les connexions sont optimisées pour télécharger simultanément plusieurs ressources, la technique perdrait tout son sens. Du moins, <a title="Ne jetez pas les sprites avec HTTP/2 &mid; Octo Talks" href="https://blog.octo.com/ne-jetez-pas-les-sprites-avec-http2/">en théorie</a>.

## Fin ?

Oh que non !

L'état de l'art de la gestion des images responsives est loin d'être parfait. Au lieu d'envoyer beaucoup d'informations au navigateur et lui laisser choisir la bonne image en fonction du contexte, pourquoi ne pas demander au navigateur de passer le contexte lors de la requête initiale puis calculer toute la contextualisation côté serveur ?

C’est ce à quoi réfléchissent certains membres du What Working Group dans <a href="http://httpwg.org/http-extensions/client-hints.html">la spécification Client Hints</a>. Le support est encore<a href="http://caniuse.com/#feat=client-hints-dpr-width-viewport"> très limité</a> mais le concept est en cours de normalisation à l’<abbr lang="en" title="Internet Engineering Task Force">IETF</abbr>. Cela ressemble beaucoup à une initiative du début du début des années 2010, appelée <a href="https://www.lukew.com/ff/entry.asp?1392">Responsive Web Design + Server Side Components, aka RESS</a>, qui essayait déjà de déporter une partie de la mécanique d’adaptation du contenu côté serveur.

L’essai sera-t-il transformé cette fois ? La gestion des images nous réserve encore bien des surprises !
