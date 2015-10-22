title: "WPF/E : WPF sur tous les systèmes"
date: 2007-04-02 12:54:28
tags:
  - Développement
  - Silverlight
---

Vista est désormais disponible pour le grand public et amène avec lui son lot de nouveautés. Parmi celles-ci, WPF fait figure de proue. Mais les développements WPF doivent être exclusif à Vista, ce qui est un frein pour de nombreux développeurs&#8230;

<!-- more -->

### Nouveau corps, nouvel habillage

Dans ces nouveautés, il y a bien sûr une refonte des bibliothèques graphiques 2D et 3D, appelées DirectX, c'est-à -dire des fonctions du système qui permettent aux développeurs de fabriquer de belles et attractives applications. La boite à outils graphique du développeur, en quelques sortes.

Vista est muni de deux bibliothèques graphiques DirectX&nbsp;: une version spéciale du DirectX9 (celui de Windows XP, pour faire tourner les applications XP sous Vista) et DirectX10, la nouvelle version. Les interfaces audio ont également été revues dans Vista, ce qui a créé de nouvelles fonctions pour les développeurs, sans parler des fonctions vidéos et multimédia (MCI).

En bref, là où les développeurs pour Windows XP se sentaient en terrain connu, ils ont désormais affaire à des variations des bibliothèques de fonctions assez impressionnantes. Apprendre une à une toutes ces nouvelles fonctions est bien laborieux et souvent rébarbatif. Imaginez-vous changez tout ce que vous utilisez tous les jours par d'autres objets qui sont radicalement différents de ceux que vous connaissez&#8230; pas terrible, hein&nbsp;?

### Allons au plus simple

Certaines choses sont faites pour aller ensemble. Par exemple, si vous souhaitez fabriquer une petite application qui va chercher une vidéo sur Internet pour vous la jouer, vous désirez disposer d'une fonction particulière et prédéfinie qui lira la vidéo et sa bande audio, sans avoir besoin de (trop) rentrer dans les détails. Plus question donc de séparer la vidéo du son. Il vous faut une nouvelle librairie de fonctions qui gère l'objet "vidéo" comme un tout.

WPF, c'est exactement ça&nbsp;: un jeu de briques multimédia où certaines briques ont déjà été assemblées pour vous fournir des éléments de programmation simplifiés et plus conviviaux à utiliser. Bien sûr, ces nouvelles briques restent à apprendre et de nombreux programmeurs qui avaient développé des logiciels pour XP ne verront pas forcément l'intérêt de franchir le cap d'un nouveau langage pour les quelques utilisateurs (de plus en plus nombreux cependant) du nouveau système. C'est ici qu'intervient WPF/E.

### A bas les différences

L'idée est simple&nbsp;: si WPF est une surcouche de fonctions qui utilisent des fonctions de plus bas niveaux, rien n'empêche de remplacer ces fonctions par leurs équivalentes sur un autre système. Je donne un exemple pour éclaircir un peu la chose&nbsp;: si je veux créer une fonction qui m'affiche un diaporama photo, je vais avoir besoin, à un moment ou à un autre, d'appeler la fonction qui affiche une image dans une fenêtre. Cette fonction serait en réalité un assemblage de fonctions de plus bas niveau&nbsp;: une première vérifie que l'image existe, une seconde regarde quel est son format (Gif, Jpg, Bmp&#8230;), et en appelle une troisième qui l'ouvre pour en lire le contenu, qu'une quatrième analyse pour en connaitre les dimensions et appeler une cinquième qui va retailler l'image pour qu'elle entre dans la fenêtre de l'application avant qu'une sixième l'y imprime finalement&#8230;

Ces six fonctions (hypothétiques, il y en a en réalité bien plus) ne sont pas les mêmes sur toutes les machines et dépendent du système. L'intérêt d'un Framework est d'être programmé pour faire appel aux bonnes fonctions sous-jacentes sans que le développeurs ne s'y intéresse. **WPF/E** ("E" pour "Everywhere") est donc une bibliothèque dans laquelle la fonction qui affiche une image dans une fenêtre existe, porte le même nom et s'utilise de la même façon qu'on développe sur XP, Vista, MacOSX ou tout autre système supportant cette surcouche du framework .NET.

### Just Do It

J'ai exagéré&nbsp;: vous ne pourrez pas faire en WPF/E tout ce que vous pourriez faire avec WPF, car WPF a été conçu spécifiquement pour Vista et utilise des fonctions sous-jacentes qui n'ont pas encore d'équivalents sur les autres systèmes. Cependant, on trouve déjà sur la Toile des applications tirant partie de WPF et WPF/E de manière assez efficace et le rendu est tout-à -fait surprenant&nbsp;!