---
title: 'Vidéo : optimisez vos MP4 pour de meilleures performances'
canonical: 'https://blog.dareboost.com/fr/2018/01/video-optimisez-vos-mp4-pour-de-meilleures-performances/'
canonical_title: 'le blog de Dareboost'
canonical_dismissed: true
tags:
    - 'Performance Web'
    - Video
cloudinary_logo: dareboost-logo
slug: video-optimisez-vos-mp4-pour-de-meilleures-performances
translations:
    en: optimize-your-mp4-video-for-better-performance
---

Le format MP4 représente plus de 75 % des vidéos diffusées sur Internet aujourd’hui. Cependant, il est souvent mal utilisé, ce qui peut dégrader l’expérience utilisateur. Voyons ensemble comment améliorer ça.

{% capture img_alt %}Graphique de courbes{% endcapture %} {% capture img_caption %}Évolution des usages des différents types de formats video sur le Web. Source : Données HttpArchive requêtées via [BigQuery](https://goo.gl/srggsf).{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-01-18/0_video_usage.png"
alt=img_alt
caption=img_caption
%}

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

Que vous soyez un acteur du Luxe désireux de diffuser des vidéos de très haute qualité ou une plateforme d'information à la recherche d'une proposition de contenu accrocheuse, la vidéo est devenue en quelques années un élément incontournable du Web. Mais l'ajout d'une vidéo à un site peut être complexe.

L'encodage le plus largement utilisé et supporté aujourd’hui est sans aucun doute H.264, servi dans un fichier MP4. Ce format est supporté par la plupart des logiciels de manipulation vidéo : [Handbrake](https://handbrake.fr/), [MPEG Streamclip](http://www.squared5.com/), [OpenShot](https://www.openshot.org/)... même [VLC](https://www.videolan.org/) ! Mais peu d'entre eux offrent une fonctionnalité d’export d'une vidéo optimisée pour le Web.

Pourtant, on ne diffuse par une vidéo sur Internet comme on la lit sur un ordinateur de bureau. Il faut faire attention à plusieurs choses.

{% capture img_alt %}Capture du logiciel VLC{% endcapture %} {% capture img_caption %}Interface de conversion de VLC{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-01-18/1_vlc_convert.png"
alt=img_alt
caption=img_caption
%}

_Note : les exemples qui suivent feront un usage intensif de [ffmpeg](https://www.ffmpeg.org/), l'un des outils de manipulation vidéo les plus populaires parmi les développeurs. Mais la plupart des optimisations décrites devraient être disponibles dans votre logiciel de manipulation vidéo préféré._

## Réduire le poids des fichiers: le juste équilibre entre qualité et performance

Une vidéo trop lourde entraînera une augmentation du poids total de la page. Or n’oubliez pas que certains fournisseurs Internet vendent des forfaits dont la bande passante totale est limitée. Rendre vos pages inutilement lourdes ne rendra donc pas service à vos visiteurs.

Pour réduire le poids de votre vidéo, vous devez vous demander comment elle diffuse son contenu sur le réseau. Même si la taille de votre fichier semble déjà raisonnable, il est peut-être possible d'en améliorer le <span lang="en">bitrate</span> pour une diffusion optimale.

Qu’est-ce que le <span lang="en">bitrate</span> ? Pour faire simple, le <span lang="en">bitrate</span> est la quantité de données nécessaires pour encoder une seconde de vidéo. Plus vous allouez de données par seconde, meilleure est la qualité mais plus le fichier est lourd.  
Je n'ai pas de formule magique à partager qui permettrait de calculer le <span lang="en">bitrate</span> parfait. Je voudrais plutôt vous inviter à vous interroger au cas par cas sur la qualité nécessaire.

Par exemple, vous pouvez évaluer le <span lang="en">bitrate</span> nécessaire en fonction des changements brusques présents dans la vidéo : plus le contenu est fixe, moins vous aurez de données à allouer à chaque seconde de la vidéo. À l’inverse, si la vidéo contient beaucoup de mouvement, le débit requis, à qualité visuelle équivalente, augmentera.

Vous pouvez facilement anticiper le poids d'une vidéo après l'encodage en utilisant soit un <span lang="en">bitrate</span> constant sur l'ensemble de la vidéo, soit un encodage à plusieurs passes pour un [<span lang="en">bitrate</span> variable](https://fr.wikipedia.org/wiki/Variable_bitrate). Voici une comparaison entre un extrait original de 10 secondes d'une séquence du décollage d'Endeavour et un encodage à deux passes avec ffmpeg. La vidéo à gauche pesait 85 Mo, celle de droite pèse 1,2 Mo après optimisation :

{% include media/youtube.html.liquid id="M99TPB7qMsQ" title="Original vs. Constant Rate Factor 24 (ffmpeg h264)" %}

Cet exemple montre ce qui peut techniquement être fait pour améliorer le poids d'une vidéo, mais nous pouvons aussi extrapoler des optimisations à partir des objectifs métier de la vidéo. Il est assez courant, par exemple, de visiter des sites dont la page d'accueil affiche une large zone avec un message de bienvenue, occupant l'ensemble de la fenêtre. Parfois, derrière cette zone, qu’on appelle "Hero Container", une vidéo de fond est diffusée.

Ces vidéos ne sont ni destinées à être véritablement visionnées, ni utiles pour la conversion. Il s'agit souvent d'améliorations subtiles, destinées uniquement à embellir les pages et pas à distraire les visiteurs et visiteuses. Souhaitez-vous vraiment que cette vidéo soit de la plus haute qualité possible ? En utilisant un effet de flou comme l'effet "iirblur" de [la librairie frei0r (EN)](https://yalantis.com/blog/experiments-with-ffmpeg-filters-and-frei0r-plugin-effects/)", vous pouvez flouter votre contenu original, ce qui vous permet de gagner de précieux kilo-octets.

Avec ffmpeg :

```
ffmpeg -i origin.mp4 -vf frei0r=iirblur:0.4 -a:c copy blurred.mp4
```

L'option `-vf frei0r=iirblur:0.4` indique à ffmpeg de flouter avec un coefficient de 40 % tandis que l'option `-a:c copy` lui indique de garder la piste audio telle quelle.

Résultat :

{% include media/youtube.html.liquid id="nwGDXk9eE8s" title="Clear vs Blur (ffmpeg+frei0r)" %}

Autre optimisation possible : la piste audio. Si votre vidéo n'est pas destinée à jouer du son, pourquoi garder cette piste ? N'hésitez pas à la retirer :

```shell
ffmpeg -i origin.mp4 -an -vcodec copy muted.mp4
```

L’option `-an` indique à ffmpeg de supprimer la piste audio tandis que l’option `-vcodec copy` lui dit de garder la piste vidéo telle quelle. N'oubliez pas d'expliciter également l'absence de son au navigateur en utilisant [l’attribut `muted` de l’élément `<video>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Video#attr-muted).

Même si votre vidéo est légère, votre travail n'est pas terminé. Vous devez maintenant vous concentrer sur le mode de diffusion de la vidéo, qui est assez souvent le streaming.

## Démarrer la lecture avant d’avoir téléchargé tout le contenu

Voici comment fonctionne le streaming : lorsqu'une lecture vidéo est demandée, le navigateur va chercher le fichier pour trouver les métadonnées vidéo. Les métadonnées vidéo MP4 comprennent des éléments tels que les caractéristiques d'affichage, l'échelle de temps et la durée. Sans ces informations, le navigateur ne peut pas démarrer la lecture.

Si votre serveur est configuré pour accepter le [Service d'Octet](https://fr.wikipedia.org/wiki/Service_d%27octet), ce qui signifie qu'il a inclus un en-tête Accept-Ranges dans sa réponse HTTP initiale, le navigateur va chercher le fichier morceau par morceau au travers de plusieurs requêtes de contenu partiel (code HTTP 206). Dès qu'il trouve les métadonnées vidéo, il peut démarrer la lecture tout en téléchargeant le reste du fichier.

{% capture img_alt %}Capture des ChromeDevTools, onglet "Network"{% endcapture %} {% capture img_caption %}Dans cet exemple, le navigateur exécute trois requêtes avant d'obtenir les métadonnées et de commencer la lecture.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-01-18/2_devtools_capture.png"
alt=img_alt
caption=img_caption
%}

Si votre serveur ne prend pas en charge ces "<span lang="en">Range-Request</span>", le navigateur n'a pas d'autre choix que de télécharger le fichier complet. Si votre vidéo est en lecture automatique, la bande passante disponible pour télécharger d'autres ressources, par exemple celles nécessaires au rendu de la page, sera réduite. Le temps requis pour l'affichage augmentera, ce qui dégradera l'expérience utilisateur.

## Où sont stockées mes métadonnées vidéo ?

Un fichier MP4 se décompose en plusieurs unités de données appelées atomes. Les métadonnées sont contenues dans l’atome "<span lang="en">movie</span>", également appelé `moov`. Des logiciels comme [MP4creator](http://mp4creator.sourceforge.net/) ou [AtomicParsley](http://atomicparsley.sourceforge.net/) permettent de visualiser les atomes d'un fichier MP4.

{% capture img_alt %}Utilisation d'AtomicParsley en ligne de commande{% endcapture %} {% capture img_caption %}Dans l'exemple ci-dessus, l'atome `moov` vient après l'atome `mdat` (4e ligne){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-01-18/3_console_capture.png"
alt=img_alt
caption=img_caption
%}

Il existe plusieurs méthodes pour déplacer l'atome `moov` en première position. Un logiciel comme Handbrake offre une option "Optimiser pour le Web" (<a href="https://handbrake.fr/docs/en/latest/advanced/web-optimised.html" hreflang="en">documentation d’Handbrake</a>). Dans d'autres logiciels, cette option est appelée "<span lang="en">MP4 Fast Start</span>".

ffmpeg peut rapidement corriger une vidéo grâce à l'option `-movflags faststart`, qui exécute une seconde passe et déplace l’atome `moov` au début du fichier (<a href="https://ffmpeg.org/ffmpeg-formats.html#toc-Options-8" hreflang="en">documentation de ffmpeg</a>):

```shell
ffmpeg -i origin.mp4 -acodec copy -vcodec copy -movflags faststart fast_start.mp4
```

Si vous voulez en savoir plus sur l'atome `moov`, ne manquez pas "[Understanding the MPEG-4 Movie Atom (EN)](https://www.adobe.com/devnet/video/articles/mp4_movie_atom.html)" de Maxim Levkov.

## Des sources multiples pour une performance ciblée

Bien que H.264 soit le codec le plus largement utilisé et supporté, il n'est pas nécessairement le plus efficace à chaque fois. Nous avons déjà vu que [la balise `<image>` accepte plusieurs sources](/notes/2017-10-optimiser-les-images-et-reduire-leur-poids-formats-outils-et-rwd/), ce qui lui permet d’offrir des images WebP aux utilisateurs et utilisatrices de Chrome. L'élément `<video>` peut également accepter plusieurs sources. L’équivalent de WebP pour les vidéos est WebM.

ffmpeg est capable d’encoder des fichiers en WebM, à condition qu’il ait été installé avec l’option `--with-libvpx`. Voici un exemple d’encodage à deux passes avec un <span lang="en">bitrate</span> cible de 1 Mo, en utilisant l’encodeur VP9 ([documentation de l’encodeur VP9](https://trac.ffmpeg.org/wiki/Encode/VP9)). Sur Windows, il faut remplacer `/dev/null` par `NUL` :

```shell
ffmpeg -i source.mp4 -c:v libvpx-vp9 -b:v 1M -pass 1 -f webm /dev/null && ffmpeg -i source.mp4 -c:v libvpx-vp9 -b:v 1M -pass 2 output.webm
```

À partir de la vidéo optimisée de la navette Endeavour présentée au début de l'article, qui pesait 1,2 Mo, cette commande génère un fichier WebM de 715 Ko, soit **une réduction de poids de 40 %**. Dommage que WebM ne soit pas [plus largement supporté](https://caniuse.com/#feat=webm 'Support de WebM sur CanIUse') !

## Quelques conseils supplémentaires

**Faites attention à l'<span lang="en">autoplay</span>**. Non seulement son usage est perçu négativement par de nombreux utilisateurs s’il n'est pas utilisé correctement (d’une manière subtile et non-bloquante, derrière un arrière-plan par exemple) mais en plus la lecture de la vidéo consomme toujours une certaine bande passante, ce qui ralentit le téléchargement d'autres ressources.

**Pour jouer des vidéos en Full HD ou maximiser l’UX, utilisez des solutions dédiées.** Il existe une grande variété de solutions <abbr title="Software as a Service" lang="en">SaaS</abbr> ou en déploiement sur site pour gérer, encoder et diffuser du contenu. Ces solutions, qu’elles soient spécialisées dans la diffusion, la fourniture d’une plate-forme vidéo en ligne (<abbr title="Online Video Platform" lang="en">OVP</abbr>) ou la gestion de contenu vidéo d'entreprise (<abbr title="Enterprise Video Content Management" lang="en">ECVM</abbr>), proposent souvent une fonctionnalité appelée <span lang="en">Adaptative Bitrate</span>, ou débit adaptatif. Si vous avez accès à un réseau de qualité : la vidéo est claire et les couleurs sont riches. Si votre réseau perd subitement en capacité, la vidéo s'adapte en sacrifiant un peu de qualité, pour préserver la fluidité de la lecture. Pour réaliser ce tour de force, un script JavaScript détecte la bande passante courante de l'utilisateur et le fait basculer dynamiquement entre plusieurs versions d'une vidéo encodée avec différents <span lang="en">bitrates</span>, assurant une expérience utilisateur optimale dans n'importe quel contexte. Si vous êtes intéressé·es, regardez du côté de [Brightcove](https://www.brightcove.com/fr/), [Kaltura](https://fr.corp.kaltura.com/), [Qumu](https://www.qumu.com/), etc.

**Souvent, la meilleure solution est de retirer la vidéo.** N’ayez pas peur de ne pas afficher vos vidéos dans certaines situations, surtout si elles sont décoratives. Une media-query CSS bien placée protègera vos utilisateurs mobiles d’une mauvaise expérience. Envisagez également de prendre en charge le [Client Hint "Save-Data" (EN)](https://tools.ietf.org/html/draft-ietf-httpbis-client-hints-04#section-3.5), une instruction explicitement donnée par le navigateur au serveur pour que ce dernier lui communique une quantité de données réduite.

## En résumé

-   **Réduisez le poids** de vos vidéos en utilisant des stratégies d'optimisations qui dépendent du contenu et de l'objectif de vos vidéos.
-   **Optimisez le streaming** en encodant vos vidéos de manière à servir les métadonnées au plus tôt.
-   **Proposez des alternatives à MP4**, comme WebM, qui peuvent être plus performantes.
-   Faites attention à l'<span lang="en">autoplay</span>, envisagez des solutions dédiées pour le Full HD et n'hésitez pas à ne pas proposer de vidéos quand le contexte le demande.

---

_Merci à [Ravana Renoncé](https://www.linkedin.com/in/ravana/) et [Rick Viscomi](https://twitter.com/rick_viscomi) pour leur aide._
