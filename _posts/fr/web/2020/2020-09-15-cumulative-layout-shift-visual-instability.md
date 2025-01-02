---
title: >-
    Cumulative Layout Shift, l’indicateur de stabilité de la mise en page


description: >-
    Le Cumulative Layout Shift (CLS) est un des nouveaux Signaux Web Essentiels mis en avant par Google, dédié à la stabilité de la mise en page. Comment le mesurer, l’optimiser, le visualiser dans Chrome ? Quelles sont ses limitations ? Enquêtons.


tags:
    - 'Performance Web'
    - Metrics
    - CLS
cloudinary_logo: dareboost-logo
slug: cumulative-layout-shift-stabilite-page
canonical: https://blog.dareboost.com/fr/2020/09/cumulative-layout-shift-stabilite-page/
canonical_title: 'le blog de Dareboost'
canonical_dismissed: true
translations:
    en: cumulative-layout-shift-visual-instability
---

_Avez-vous déjà commencé à lire un article d’actualité passionnant, puis perdu votre ligne parce que tout le texte s’est déplacé vers le bas ? Cela m’arrive souvent, surtout à cause des publicités qui se chargent au-dessus du contenu._  
_Ce type d’expérience utilisateur peut être frustrant, mais jusqu’à présent, nous avons eu du mal à la mesurer quantitativement. Le <span lang="en">Cumulative Layout Shift</span> relève ce défi._

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

Lorsque vous voyez une page web, votre cerveau décompose l’information visuelle en éléments. L’agencement de la page vous donne des informations sur leurs relations les uns par rapport aux autres. C’est comme ça que vous détectez le contenu pertinent. Si ce contenu se déplace tout seul, ou si un autre élément est injecté dans la page et déplace les autres, alors vous risquez de le perdre de vue.

{% include media/youtube_playlist.html.liquid id="PL_fzqgZbdAUljJWSghDD9JiAGwhNGmLRN" title="Vidéo du chargement de la page d’accueil de LeMonde.fr. Des zones bleu clair sont affichées en superposition du contenu, couvrant jusqu’à 2/3 de l’écran." %}

_Chargement de la page d’accueil de LeMonde.fr. Les contenus insérés et en mouvement sont identifiés par des zones bleu clair. Le contenu d’environ 2/3 de l’écran se déplace pendant le chargement de la page._

Pire encore, vous pouvez penser que la mise en page est stable et essayer d’interagir avec la page. Par exemple en cliquant sur un bouton (image de gauche). Si un autre contenu apparaît juste avant le clic et pousse l’autre contenu vers le bas (image de droite), vous risquez d’interagir avec le mauvais élément.

{% capture img_alt %}Deux images d’un utilisateur tenant un téléphone dans sa main. Dans la seconde image, un tapotement est matérialisé.{% endcapture -%}{% capture img_caption %}L’utilisateur est sur le point de tapoter sur l’image d’un fauteuil, dans une liste de produits. Soudainement, un texte avec un bouton est inséré en haut de page, déplaçant tout le contenu vers le bas. L’utilisateur clique involontairement sur l’image d’un sac à dos.{% endcapture -%} {% include rwd-image.html.liquid
path="/assets/images/web/2020-09-15/1.png"
alt=img_alt
caption=img_caption
%}

{% capture note %}**Plan**

Dans cet article, nous introduirons [l’API <span lang="en">Layout Instability</span>](#layout-instability-api) et verrons comment elle est utilisée pour [calculer le <span lang="en">Cumulative Layout Shift</span> (CLS)](#cls-compute). Nous verrons comment [visualiser le CLS dans Chrome](#cls-in-chrome) et comment [optimiser son site pour avoir un bon CLS](#optimize-cls). Enfin, nous aborderons [les étranges caractéristiques du CLS](#wtf) et nous [conclurons](#conclusion).{% endcapture note %} {% include note.html.liquid content=note %}

## <span id="layout-instability-api">Une API dédiée dans le navigateur…</span>

Depuis plusieurs années, les équipes Front tentent d’identifier les éléments qui se déplacent pendant le chargement et l’utilisation d’une page. Il y a dix ans, il fallait un moteur de rendu sur-mesure pour afficher tous les <span lang="en">repaints</span> (dans l’exemple ci-dessous, Gecko, le moteur de rendu de Firefox).

{% capture note %} **ATTENTION**

Cette vidéo contient beaucoup de clignotements. Ne la regardez pas si vous êtes photosensible ou si vous souffrez de troubles vestibulaires.{% endcapture note %} {% include note.html.liquid content=note %}

{% include media/youtube.html.liquid id="dndeRnzkJDU" title="Gecko Reflow Visualization: the Wikipedia example" %}

Pour déterminer le moment où une page est chargée/stable, <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=581518" hreflang="en">vous pouviez utiliser l’événement <code>onload</code>, mais c’est loin d’être parfait</a>. L’API <a href="https://wicg.github.io/layout-instability/" hreflang="en" lang="en">Layout Instability</a> de Chrome répond à cette limite. L’idée ici est de s’intéresser à d’autres signaux. Plus particulièrement, à la stabilité de la mise en page, ou "l’absence de sursauts d’interface". Comme indiqué dans le résumé de l’API, elle "offre aux auteurs de pages web un aperçu de la stabilité de leurs pages, à partir des mouvements des éléments de la page". Pour ce faire, l’API surveille les nœuds du DOM qui sont visibles dans le viewport. Si la représentation visuelle d’un nœud se décale, entre deux frames, de 3 pixels ou plus dans le sens horizontal ou vertical, l’API enregistre un <em lang="en">layout-shif</em> (un décalage) et **lui attribue un score**.

## <span id="cls-compute">... utilisé pour pénaliser les saccades</span>

Revenons à notre exemple :

{% capture img_alt %}Deux images d’un utilisateur tenant un téléphone dans sa main. Dans la seconde image, un tapotement est matérialisé.{% endcapture -%}{% capture img_caption %}L’utilisateur est sur le point de tapoter sur l’image d’un fauteuil, dans une liste de produits. Soudainement, un texte avec un bouton est inséré en haut de page, déplaçant tout le contenu vers le bas. L’utilisateur clique involontairement sur l’image d’un sac à dos.{% endcapture -%} {% include rwd-image.html.liquid
path="/assets/images/web/2020-09-15/1.png"
alt=img_alt
caption=img_caption
%}

Comment l’API <span lang="en">Layout Instability</span> attribue-t-elle un score à ce décalage ? Pour calculer le score de décalage (<em lang="en">layout shift score</em>), l’algorithme évalue d’abord la zone affectée par le décalage (<em lang="en">impact fraction</em>), et la multiplie par la longueur du décalage (<em lang="en">distance fraction</em>).

{% include media/youtube_playlist.html.liquid id="PL_fzqgZbdAUlI1BEcOBva5OP4jaSQioQR" title="CLS : visualiser l’impact fraction et la distance fraction" %}

La zone affectée par le <span lang="en">layout shift</span>, ou <strong lang="en">impact fraction</strong> (fraction d’impact), est la zone totale occupée par le nœud qui se déplace, de sa première position à sa position finale. Ici, 78 % + 32 % = 110 %. Comme vous pouvez le voir, la fraction d'impact peut être supérieure à 100 % (la taille du <span lang="en">viewport</span>).

La longueur du décalage, ou <strong lang="en">distance fraction</strong>, est mesurée en pourcentage du plus grand côté du <span lang="en">viewport</span>. Dans cet exemple, nous allons donc considérer la hauteur. L’élément existant se déplace d’une hauteur équivalente à 34 % de la hauteur du <span lang="en">viewport</span>.

Pour ce <span lang="en">Layout Shift</span> en particulier, le **score de <span lang="en">Layout Shift</span>** est donc :

_score de <span lang="en">Layout Shift</span> = 110&nbsp;% (<span lang="en">impact fraction</span>) &times; 34&nbsp;% (<span lang="en">distance fraction</span>) = **0,374**_

Le <a href="https://www.dareboost.com/fr/doc/test-performance-web/indicateurs/cumulative-layout-shift-cls" lang="en">Cumulative Layout Shift</a> (CLS) est la somme des scores de (presque) tous les <span lang="en">Layout Shifts</span>.

{% capture note %} **La fenêtre de 500 millisecondes**

Pour éviter que les sites web ne soient pénalisés pour les transitions ou les animations qui résultent de l’interaction de l’utilisateur avec l’interface, l’algorithme du CLS ignore les <span lang="en">Layout Shifts</span> pendant 500 ms après chaque interaction active de l’utilisateur avec le document (par exemple, un clic, une frappe de touche ou un tapotement), ou après tout événement qui modifie directement la taille du <span lang="en">viewport</span>.{% endcapture note %} {% include note.html.liquid content=note %}

D’après Google, pour offrir une bonne expérience, les sites devraient s’efforcer d’avoir **un CLS inférieur à 0,1** pour la plupart (75 %) des utilisateurs. C’est une mauvaise nouvelle pour les développeurs de l’exemple ci-dessus !

N’oubliez pas que la fraction d'impact et la fraction de distance sont dépendantes des caractéristiques du <span lang="en">viewport</span>. Une modification des dimensions ou de l’orientation du <span lang="en">viewport</span> peuvent modifier la mise en page (en provoquant une réadaptation du contenu à l’espace disponible). Si cela se produit, pour un même <span lang="en">Layout Shift</span>, la fraction d'impact et la fraction de distance, et donc le <span lang="en">Cumulative Layout Shift</span>, n’auront plus les mêmes valeurs.

## <span id="cls-in-chrome">Comment visualiser les <span lang="en">Layout Shifts</span> dans Chrome</span>

Les <span lang="en">Layout Shifts</span> peuvent être affichés dans Chrome :

1. Dans les <span lang="en">DevTools</span> (les outils de développement de Chrome), ouvrez le menu de commande en appuyant sur <kbd>Control</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> ou <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (macOS)
2. Commencez à taper "<span lang="en">Rendering</span>"
3. Exécutez la commande "<span lang="en">Show Rendering</span>" qui vous est proposée
4. Activez la case <strong lang="en">Layout Shift Regions</strong>. Quand vous interagissez avec la page, les <span lang="en">Layout Shifts</span> apparaissent désormais en bleu.

{% capture note %} **Attention**

Cette fonctionnalité peut provoquer des clignotements. Si vous êtes photosensible ou si vous souffrez de troubles vestibulaires, faites attention.{% endcapture note %} {% include note.html.liquid content=note %}

Depuis Chrome 84, vous pouvez également visualiser les <span lang="en">Layout Shifts</span> et obtenir des informations sur leur attribution (allant même jusqu’à la liste des éléments qui ont été décalés) dans l’onglet Performance, sur la ligne "Experience".

{% capture img_alt %}Une capture de l’onglet Performance des DevTools, quand on zoome et qu’on sélectionne un Layout Shift en particulier.{% endcapture -%}{% capture img_caption %}Sur une ligne de temps, une succession d’écrans aide à comprendre la chronologie visuelle. En dessous, plusieurs lignes exposent ce qui s’est passé au même moment, y compris la ligne "Experience", qui contient des repères rouges, un pour chaque <span lang="en">Layout Shift</span>. Tout en bas, une description donne des informations plus précises sur le <span lang="en">Layout Shift</span> sélectionné.{% endcapture -%} {% include rwd-image.html.liquid
path="/assets/images/web/2020-09-15/performance.png"
alt=img_alt
caption=img_caption
%}

## <span id="optimize-cls">Comment optimiser votre Cumulative Layout Shift</span>

Une page accumule des <span lang="en">Layout Shifts</span> tout au long de son utilisation. À chaque fois que de nouveaux éléments sont insérés visuellement sans que l’espace nécessaire à leur affichage n’ait été réservé en amont par le navigateur. Le plus souvent, il s’agira d’images, mais vous devez également faire attention aux publicités, aux polices de caractères web, aux contenus intégrés et aux contenus injectés suite à une interaction qui génèrent des temps d’attente de plus de 500 ms.

### Images

Quand il reçoit le code HTML de votre page, le navigateur ne sait pas grand choses sur les images qui y sont utilisées. S’il ne dispose que de l’URL de l’image, le navigateur ne peut pas connaître sa taille. Il ne peut donc pas allouer l’espace nécessaire à l’affichage de cette image. Cette situation est devenue encore plus complexe depuis l’avènement du <span lang="en">Responsive Web Design</span> puisque désormais, la taille d’affichage d’une image dépend souvent du contexte.

Pour donner le plus d’informations possible au navigateur (afin qu’il puisse faire son travail au mieux) définissez toujours les valeurs des attributs `width` et `height` sur vos éléments `<img>` (exprimées en pixels). Même si ce ne sont pas les dimensions réelles de l’affichage (qui peuvent dépendre des règles de style), le navigateur les utilisera pour déduire le rapport largeur / hauteur (appelé `aspect-ratio`) de l’image, et ainsi calculer la hauteur à réserver en fonction de la largeur d’affichage définie par le CSS.

{% capture note %} **Le saviez-vous ?**

Edge, Firefox et Chrome ont une représentation interne du `aspect-ratio` des images sur lesquelles les attributs `width` et `height` sont définis. Une expérience est en cours sur Chrome pour ouvrir la fonctionnalité aux équipes de développement web.

```css
.el {
    aspect-ratio: 16 / 9;
}
/* internal rule for img, using the --webkit prefix (in Chrome)
img[width][height] {
  --webkit-aspect-ratio: attr(width) / attr(height);
}*/
```

Pour en savoir plus sur `aspect-ratio` lisez <a href="https://css-tricks.com/a-first-look-at-aspect-ratio/" hreflang="en">cet article de Chris Coyier sur <span lang="en">CSS Tricks</span></a> {% endcapture note %} {% include note.html.liquid content=note %}

Et bien sûr, n’oubliez pas de [servir la bonne taille de fichier en fonction du contexte](https://blog.dareboost.com/fr/2017/10/optimiser-les-images-et-reduire-leur-poids-formats-outils-et-rwd/#servir-la-bonne-taille-de-fichier-en-fonction-du-contexte). Utilisez `srcset` pour aider le navigateur à sélectionner la meilleure image de votre jeu d’images avec le même rapport hauteur/largeur (suivant la largeur du viewport). Utilisez `picture` et `source` pour gérer différents rapports hauteur/largeur ou différents formats d’image en fonction du contexte et des types supportés par le navigateur.

### Publicités, intégrations, <span lang="en">iframes</span> et contenus créés dynamiquement

Comme pour les images, le navigateur doit allouer l’espace nécessaire pour afficher le contenu final. Mais vous ne pouvez pas donner beaucoup d’informations au navigateur, car souvent, vous ne disposez vous-même que de peu d’informations sur le futur contenu. Dans ce qui suit, je ne parlerai que du cas des publicités, car elles constituent un problème récurrent. Mais l’approche est la même pour les autres types de contenus injectés.

{% capture note %}Dans la suite, nous examinerons l’impact des injections de contenu sur le contenu d’une page. Notez que le contenu des <span lang="en">iframes</span> n’est pas concerné : si une <span lang="en">iframe</span> produit de <span lang="en">Layout Shifts</span>, ceux-ci n’auront pas d’impact sur la page principale.{% endcapture note %} {% include note.html.liquid content=note %}

Le plus souvent, l’espace publicitaire est attribué à un service d’enchères qui injecte un conteneur publicitaire dans un nœud dédié du DOM. Ensuite, cet espace est "loué" au plus offrant, attribué à une régie qui injecte enfin une publicité. L’espace peut être redimensionné plusieurs fois avant que la publicité finale ne soit affichée, et dans le cas de publicités temporisées, des injections supplémentaires peuvent se produire plusieurs fois pendant la session de l’utilisateur.

#### Comment éviter que la mise en page soit modifiée ?

Définissez explicitement l’espace que vous souhaitez allouer au conteneur publicitaire. Prévoyez un habillage pour prendre en compte le cas dans lequel l’annonce serait plus petite que l’espace pré-réservé. Si l’annonce est plus grande que l’espace réservé, il faudra accepter qu’une partie de l’annonce ne soit pas affichée.

Il arrive que l’espace reste vide, si aucune publicité n’a été trouvée. Prévoyez des visuels correspondant à la taille de l’espace publicitaire afin de ne pas avoir à réduire l’espace publicitaire et à provoquer un changement de disposition. Si votre régie vous donne les moyens (par le biais d’un callback JS, par exemple) d’injecter du contenu utile en cas d’absence de publicité, bien sûr, n’hésitez pas.

Une autre façon de résoudre ce problème consiste à positionner les publicités dans l’espace négatif laissé par le contenu du site, en dehors du flux de pages. Si votre publicité a une position figée dans le gabarit de page, et que cette position n’interfère pas avec l’agencement du reste du contenu, alors l’insertion de la publicité ne provoque aucun décalage.

{% capture img_alt %}Une capture d’une page du Monde.fr où un espace est réservé pour une publicité dans la marge. Si la publicité est plus grande que prévue, elle occupe davantage de place dans la marge, mais ne décale pas le contenu.{% endcapture -%}{% capture img_caption %}Utilisation de l’espace négatif pour positionner les annonces.{% endcapture -%} {% include rwd-image.html.liquid
path="/assets/images/web/2020-09-15/negative_fr.png"
alt=img_alt
caption=img_caption
%}

Enfin, vous pouvez décider de déplacer vos espaces publicitaires plus bas sur vos pages. Cela évitera que la fraction d’impact du Layout Shift ne soit trop importante, mais cela réduira probablement vos revenus.

### Police d’écriture web

Lorsqu’un navigateur doit afficher du texte avec une police d’écriture web, il détermine si la police est nécessaire et disponible (via le système d’exploitation ou dans le cache navigateur). Si la police est nécessaire mais non disponible, le navigateur la récupère. Pendant la phase de récupération, le navigateur suit les instructions `font-display` (ou leur absence) pour déterminer s’il doit afficher le texte avec une police de substitution disponible ou allouer l’espace avec du texte invisible. Une fois la police chargée, ou si le temps d’attente est trop long, le navigateur procède alors au rendu final.

En d’autres termes, chaque fois que le navigateur doit récupérer une police web, il attribue à la zone un texte avec une police par défaut, visible ou non. Et lorsque la police devient disponible, le navigateur effectue le rendu final de la zone de texte.

Problème : la police temporaire utilisée pour occuper l’espace n’a pas nécessairement pas nécessairement les mêmes caractéristiques que la police finale. Les lignes de base, la taille des points typographiques et les kernings peuvent être différents et le texte final peut apparaître plus court ou plus long que le texte temporaire, ce qui peut déplacer les contenus qui suivent dans le flux de page, et entraîner des <span lang="en">Layout Shifts</span>.

{% capture note %}Chaque fois que j’ai besoin de me rappeler comment fonctionne la gestion de l’affichage des polices, je retourne voir le <a href="https://font-display.glitch.me/" hreflang="en" lang="en">the font-display playground</a>, de [Monica Dinculescu](https://twitter.com/notwaldorf). {% endcapture note %} {% include note.html.liquid content=note %}

Pour éviter ces <span lang="en">Layout Shifts</span>, vous pouvez [accélérer le chargement des polices](https://blog.dareboost.com/fr/2020/05/optimiser-performance-parties-tierces/). ou choisir des polices web ayant des caractéristiques très proches des polices système. Vous pouvez également considérer la police web comme optionnelle lors du premier chargement de la page. Elle ne sera alors pas utilisée sur cette page, même si elle est téléchargée et mise en cache. En revanche, elle sera disponible pour la page suivante. À ce sujet, vous pouvez lire "<a href="https://tech.ebayinc.com/engineering/ebays-font-loading-strategy/" hreflang="en" lang="en">eBay’s Font Loading Strategy</a>" de [Senthil Padmanabhan](https://twitter.com/senthil_hi).

### Contenu injecté plus de 500 ms après une interaction

L’algorithme du CLS ignore les <span lang="en">Layout Shifts</span> pendant 500 ms après chaque interaction active de l’utilisateur avec le document ou modification de la taille du <span lang="en">viewport</span>. Grâce à ce mécanisme, la plupart des interactions utilisateur ne provoquent pas de <span lang="en">Layout Shifts</span> comptabilisés dans le <span lang="en">Cumulative Layout Shift</span>.

Assurez-vous donc que votre interface réagira à l’interaction utilisateur dans la fenêtre de 500 ms. Si votre interface utilisateur repose sur des requêtes réseau ou un traitement javascript lourd, des décalages peuvent se produire après 500 ms et seront donc pris en compte dans la valeur du <span lang="en">Cumulative Layout Shift</span>.

Pour optimiser votre CLS :

-   Assurez-vous que vos transitions et animations qui suivent une interaction utilisateur durent moins de 500 ms.
-   Mesurez et optimisez les temps de réponse des vos API.
-   Anticipez le résultat de l’appel (ou des appels) ou du long traitement en réservant l’espace associé au(x) résultat(s) durant les 500 ms qui suivent l’interaction, quitte à ce que cet espace soit rempli ultérieurement, à la manière de <a href="https://uxdesign.cc/the-optimistic-ui-with-react-f1420e317d54" hreflang="en">l’<span lang="en">optimistic UI</a>.
-   Implémentez un paradigme d’interface utilisateur spécifique aux longs traitements et un appel réseau (mise en file d’attente et notification d’achèvement, affichage des résultats dans des pop-ins, etc.)
-   N’animez que des <a href="https://csstriggers.com/" hreflang="en">propriétés CSS qui ne déclenchent pas de changements de mise en page dans Blink</a>.

Bien sûr, **testez toujours** vos optimisations. En menant quelques expériences pour écrire cet article, j’ai découvert que <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1099895" hreflang="en">lorsque la durée d’une transition <code>translate</code> est de 0, des <span lang="en">Layout Shifts</span> apparaissent</a> (un problème désormais résolu). Des cas-limites comme celui-ci existeront toujours. N’hésitez pas à <a href="https://bugs.chromium.org/p/chromium/issues/list" hreflang="en">les signaler à l’équipe Chromium</a>.

{% capture note %} **Astuce: un traitement en deux étapes**

Prenez l’exemple d’un bouton "Charger 20 articles supplémentaires" en fin de page. Si le traitement (appel réseau + rendu) prend moins de 500 ms, c’est parfait. Mais s’il prend plus de 500 ms, le rendu peut provoquer un décalage du pied de page et augmenter votre <span lang="en">Cumulative Layout Shift</span>.

Pour éviter ça, surveillez le temps écoulé et divisez la tâche en deux parties si nécessaire. Au lieu de faire un rendu systématique après l’appel réseau, vous pourrez plutôt changer le libellé du bouton en "Afficher les 20 éléments récupérés". Cela obligera les utilisateurs à interagir à nouveau avec la page et vous accordera 500 millisecondes supplémentaires pour le rendu du contenu.

Bien sûr, n'hésitez pas à tester le ressensi des utilisateurs pour vérifier que l'utilisation de la fonctionnalité correspond mieux à leurs attentes. Optimiser le CLS ne doit pas se faire au détriment de l'UX.{% endcapture note %} {% include note.html.liquid content=note %}

## <span id="wtf">Comportements contre-intuitifs</span>

### Augmentation continue dans le cas des <span lang="en">Single-Page Applications</span> (SPAs)

La plupart des algorithmes de calcul des indicateurs de performance web s’arrêtent à la fin du chargement de la page. L’évaluation du <span lang="en">Cumulative Layout Shift</span>, elle, se poursuit tout au long de l’utilisation de la page.

Beaucoup de sites web sont construits sur un paradigme de navigation de page à page, d’URL à URL. Pour eux, le CLS est réinitialisé à chaque changement de page. Certains sites, en revanche, sont construits autour d’une page unique dont le contenu évolue au fil des interactions. C’est ce qu’on appelle des <span lang="en">Single-Page Applications</span> (SPA).

Sur les SPA (y compris les applications qui utilisent des bibliothèques d’amélioration progressives comme <a href="https://github.com/turbolinks/turbolinks" hreflang="en" lang="en">turbolinks</a>), le <span lang="en">Cumulative Layout Shift</span> **augmente en continu** pendant la session d’un utilisateur, puisque la navigation entre les contenus ne se fait pas en naviguant entre des pages. Le <span lang="en">Cumulative Layout Shift</span> n’est donc collecté que lorsque l’utilisateur quitte la page. Si la valeur du <span lang="en">Cumulative Layout Shift</span> que vous observez [dans la <span lang="en">Search Console</span> (rubrique "Signaux Web essentiels")](https://blog.dareboost.com/fr/2020/06/signaux-web-essentiels-core-web-vitals/) vous semble élevée, c’est peut-être une explication. {% capture note %} **Note**

Ce comportement spécifique du <span lang="en">Cumulative Layout Shift</span> est particulièrement important. Pour les équipes développant des SPAs, l’objectif ne doit pas être de réduire le nombre de <span lang="en">Layout Shifts</span>, mais de concevoir des interfaces qui ne produisent aucun <span lang="en">Layout Shifts</span>. Dans le cas contraire, plus leurs interfaces sont populaires, plus les durées des session de leurs utilisateurs et utilisatrices seront longues, plus le CLS mesuré sera élevé.{% endcapture note %} {% include note.html.liquid content=note %}

### Le problème des barres de défilement

Bien que cela puisse paraître contre-intuitif, les barres de défilement horizontales et verticales font partie du <span lang="en">viewport</span>. Elles sont notamment incluses dans <a href="https://drafts.csswg.org/css-values-3/#viewport-relative-lengths" hreflang="en">les dimensions de pourcentage du viewport <code>vw</code> et <code>vh</code></a>. L’apparition ou la disparition des barres de défilement ne modifie donc pas le viewport, et ne sont donc pas éligibles aux "500 ms sans accumulation de CLS". Pourtant, l’apparition et la disparition des barres de défilement modifient la zone disponible pour les contenus, qui peuvent donc se déplacer pour mieux l’occuper, provoquant un <span lang="en">Layout Shift</span>.

Sur certains systèmes d’exploitation, comme Windows, les barres de défilement sont cachées jusqu’à ce qu’elles soient nécessaires. Si le chargement de votre site est très progressif (avec par exemple une page vide au début puis des requêtes JavaScript qui, petit-à-petit, créent le contenu), alors les barres de défilement peuvent être absentes lors du <span lang="en">First Paint</span>, puis apparaître au cours du chargement de la page et provoquer des <span lang="en">Layout Shifts</span>.

Pour éviter ce comportement, vous pouvez ajouter `html { overflow-y: scroll }` afin de forcer l’apparition d’une barre de défilement au <span lang="en">First Paint</span>, ou attendre l’implémentation du module CSS Overflow de niveau 4 et <a href="https://www.w3.org/TR/css-overflow-4/#scollbar-gutter-property" hreflang="en">la nouvelle propriété <code>scrollbar-gutter</code></a>.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Cumulative Layout Shift <a href="https://twitter.com/hashtag/CLS?src=hash&amp;ref_src=twsrc%5Etfw">#CLS</a> tuning tip<br><br>Add html{overflow-y:scroll} to enforce a scrollbar at first paint.<br><br>Pages with a layout shift drastically reduced as soon as the above CSS rule was added. <a href="https://twitter.com/hashtag/WebPerf?src=hash&amp;ref_src=twsrc%5Etfw">#WebPerf</a> <a href="https://twitter.com/hashtag/AimForZero?src=hash&amp;ref_src=twsrc%5Etfw">#AimForZero</a> <a href="https://t.co/k4KCUnmzPo">pic.twitter.com/k4KCUnmzPo</a></p>&mdash; Tim Vereecke (@TimVereecke) <a href="https://twitter.com/TimVereecke/status/1239454788116533248?ref_src=twsrc%5Etfw">March 16, 2020</a></blockquote>

### Impact de la `timing-function`

Dans l’exemple suivant, nous comparons deux mises en page réalisées avec `flexbox`. Dans les deux cas, le survol de l’élément central double sa surface. Sur la première ligne, la `timing-function` est `ease`. Sur la seconde, c’est `linear`.

{% include media/youtube_playlist.html.liquid id="PL_fzqgZbdAUk6EgDkiqwvVUCGUHOyoUaU" title="Cumulative Layout Shift: Ease vs. Linear, impact des animations (Chrome 84)" %}

Comme vous pouvez le voir, le deuxième exemple génère beaucoup moins de Cumulative Layout Shift. Pour l’expliquer, nous devons revenir à la spécification de l’API <span lang="en">Layout Shift</span>, et plus précisément à ce que l’on appelle les "nœuds instables" ("<a href="https://wicg.github.io/layout-instability/#sec-unstable-nodes" hreflang="en" lang="en">Unstable nodes</a>").

<blockquote lang="en">A Node N has shifted in a coordinate space C if the 
starting point of N in C differs from the previous frame starting point of N 
in C by 3 or more pixel units in either the horizontal or vertical 
direction.</blockquote>

qu’on peut traduire par :

> Un nœud N s’est déplacé dans un espace de coordonnées C si le point de départ de N en C diffère du point de départ de la trame précédente de N en C de 3 unités de pixels ou plus dans le sens horizontal ou vertical.

Cette règle des "trois pixels entre deux frames" introduit un critère de vitesse dans la mesure de l’instabilité. Tous les éléments se déplaçant en dessous de cette vitesse ne sont pas considérés comme instables, et ces animations ne produisent pas de <span lang="en">Layout Shifts</span>.

Malheureusement, cela signifie que pour réduire le CLS, certains propriétaires de sites pourraient être tentés d’utiliser des animations linéaires, qui ont une vitesse constante, plutôt que des animations plus intuitives pour l’homme, telles que `ease`, qui accélère au début de l’animation et ralentit à la fin.

{% capture img_alt %}Les timing-function `ease`et `linear`, représentées par des courbes de bézier.{% endcapture -%}{% capture img_caption %}La timing-function `linear` a une croissance constante. `ease` accélère fortement jusqu’au milieu du temps, puis ralentit.{% endcapture -%} {% include rwd-image.html.liquid
path="/assets/images/web/2020-09-15/timings.png"
alt=img_alt
caption=img_caption
%}

### Autres comportements étranges de l’indicateur

-   Les éléments animés qui créent des <span lang="en">Layout Shifts</span> peuvent continuer à le faire, même s’ils ne sont pas visibles pour l’utilisateur (par exemple, s’ils ont une couleur qui se fond avec l’arrière-plan). Mais si vous utilisez `visibility: hidden`, ce ne sera pas le cas.
-   <a href="https://web.dev/cls/" hreflang="en">La page web.dev du CLS</a> ([traduite en français](https://www.fasterize.com/fr/blog/core-web-vitals-google-quest-ce-que-le-cumulative-layout-shift-cls/) par Sarah Salis pour Fasterize) recommande d’utiliser `transform` et `translate` pour créer des animations qui ne produisent pas de <span lang="en">Layout Shifts</span>. Chrome créer des <span lang="en">Layout Shifts</span> lorsque le temps de transition est de 0, jusqu’à Chrome 86.

## <span id="conclusion">Conclusion</span>

Le <span lang="en">Cumulative Layout Shift</span> est un indicateur qui mesure les instabilités de la mise en page d’une page web. Pour l’optimiser et **améliorer l’expérience utilisateur**, vous devez éviter d’injecter du contenu pour lequel le navigateur n’a pas alloué la bonne quantité d’espace. Il existe plusieurs techniques pour les images, mais cela rendra toutefois la gestion de la publicité beaucoup plus complexe.

Le mode de calcul du CLS lui confère des caractéristiques inhabituelles. L’algorithme actuel du CLS n’est probablement pas adapté aux <span lang="en">Single Page Apps</span>, car l’attribution des résultats au niveau de la page n’est pas correctement gérée. Par conséquent, [l’utilisation des <span lang="en">Core Web Vitals</span> (Signaux Web Essentiels) comme critère de classement](https://blog.dareboost.com/en/2020/06/core-web-vitals-page-experience/) pourrait être particulièrement difficile dans de tels cas.

N’oubliez pas que le CLS est une nouvelle mesure. Nous manquons encore de retours d’expérience à grande échelle. En cas de doute, concentrez-vous toujours sur l’amélioration de l’expérience de l’utilisateur plutôt que sur l’optimisation de l’indicateur lui-même. Certaines optimisations du CLS peuvent aller à l’encontre de l’UX et doivent être évitées.

---

### Support Navigateurs

En octobre 2018, Steve Kobes a annoncé que Blink (le moteur de rendu Chrome) avait [l’intention d’implémenter](https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/jF1-M8KWAMU/ubGV4Fx2BgAJ) une API faisant émerger cette information. Le travail sur le projet d’API <span lang="en">Layout Instability</span> a commencé en mai 2019, et l’API a été publiée [dans Chrome 77](https://www.chromestatus.com/feature/5110682739539968) en septembre 2019. Daniel Holbert a créé [un ticket pour Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1651528) en juillet 2020. Nous n’avons trouvé aucune mention de l’API <span lang="en">Layout Instability</span> parmi les tickets publics de Safari.

## Resources

-   [Mes propres expérimentations sur le <span lang="en">Cumulative Layout Shift</span>](https://tests.boris.schapira.dev/cls/)
-   "<a href="https://wicg.github.io/layout-instability/" hreflang="en" lang="en">Layout Instability API specification</a>", par Steve Kobes, Nicolás Peña Moreno et Emily Hanley
-   "<a href="https://web.dev/cls/" hreflang="en" lang="en">Cumulative Layout Shift</a>", par [Philip Walton](https://twitter.com/philwalton) et [Milica Mihajlija](https://twitter.com/bibydigital)
-   "<a href="https://web.dev/optimize-cls/" hreflang="en" lang="en">Optimize Cumulative Layout Shift</a>"<br> et "<a href="https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/" hreflang="en" lang="en">Infinite Scroll without Layout Shifts</a>", par [Addy Osmani](https://twitter.com/addyosmani)
-   "<a href="https://tamethebots.com/blog-n-bits/web-perf-iv-a-new-hope" hreflang="en" lang="en">Web Vitals - A New Hope in Web Performance Measurement</a>", par [Dave Smart](https://twitter.com/davewsmart)

---

_Merci à [Damien Jubeau](https://twitter.com/DamienJubeau) et [Matt Hobbs](https://twitter.com/TheRealNooshu) pour leurs contributions._
