title: "Test de Deep Zoom Composer"
date: 2008-08-09 14:43:58
tags:
  - Technologie
  - DeepZoom
  - Photos
  - Silverlight
  - Visual Studio
---

**Deep Zoom Composer** est une application développée par l'équipe à l'origine des projets Microsoft Expression Design et Expression Blend. Son objectif est de permettre à tout utilisateur, développeur ou non, d'utiliser [Silverlight](//fr.wikipedia.org/wiki/Microsoft_Silverlight) et plus particulièrement sa fonctionnalité **Deepzoom** pour créer des **compositions photos navigables**. En trois étapes très simples (Ajout, Composition, Enregistrement), l'application vous permet de créer votre composition et de l'héberger sur PhotoZoom.

Téléchargez [Deep Zoom Composer](//www.microsoft.com/en-us/download/details.aspx?id=24819)

Voir directement le résultat final

Pour ce test, j'ai récupéré quelques photos prises en Tunisie avec mon [Casio Exilim S770](//www.casio-europe.com/euro/exilim/exilimcard/exs770/). Malgré le poids relativement important des photos (une douzaine de photos de 5Mo environ), l'**import** massif et la manipulation sont **fluides **sans une augmentation notable de l'utilisation processeur. Chaque photo apparaît dans barre latérale et lorsqu’on clique dessus, elle apparaît en grand dans la fenêtre principale, accompagnée de quelques informations comme son nom, sa taille et son poids. On peut difficilement faire plus **simple**.

![Deep Zoom Composer&nbsp;: Phase d](/images/)

Une fois l'import terminé, vous pouvez commencer la **manipulation des images**. Le zoom est très réactif et des fonctionnalités sont proposées afin de faciliter le **redimensionnement **et l’**agencement **des photos. Un utilisateur régulier d’applications de graphisme ne sera pas dépaysé mais c’est toujours plaisant de pouvoir utiliser des outils d’homogénéisation automatique des dimensions ou de voir apparaître des marques d’alignement pour **faciliter le montage**.

![DZC_Compose](/images/)

Une fois votre composition terminée, la phase d’**enregistrement **vous permet de l’héberger directement sur **PhotoZoom **ou de créer un projet **Silverlight Streaming** en local. C’est cette deuxième solution que j’ai choisie, afin de voir à quoi ressemble les fichiers générés.

L’**export **est relativement **long**. Environ 2 à trois minutes. Je suppose que c’est le temps nécessaire à la création de l’ensemble des sous-fichiers du projet. Pour un projet Silverlight Streaming dont les images sont en JPEG à 95% de qualité, comptez 35Mo (pour rappel, à l’origine, j’ai 60Mo de photos). Par curiosité, j’ai également enregistré le projet ailleurs en mode PNG&nbsp;: on arrive à 260Mo…

![DZC_Export](/images/)

Dernier point&nbsp;: le dossier contient bien sûr un projet Silverlight Streaming, mais également une **solution Visual Studio 2008** tout ce qu’il y a de plus classique&nbsp;: il est donc possible d’entrer dans plus de détails et de voir avec précision comment est agencé le code. Un régal pour de **développeurs **que quelques-uns apprécieront.

<a name="result"></a>Et pour le résultat final, ça donne ça (si vous n'avez pas installé Silverlight, c'est le moment où jamais de le faire)&nbsp;: