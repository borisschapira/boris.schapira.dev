---
title: Incremental Font Transfer
subtitle: une opportunité pour des web fonts en Asie
translations:
    en: incremental-font-transfer-en
---

Pour un français comme moi, les langues asiatiques telles que le chinois, le japonais et le coréen, ainsi que d'autres ayant des écritures complexes, contiennent souvent beaucoup de caractères. Bien que cette diversité soit culturellement fascinante, elle pose de vrais défis lors de la sélection d'une police web. Les fichiers peuvent avoir un poids potentiellement très important, ce qui entraîne des temps de chargement plus lents, en particulier sur les appareils mobiles ou dans les régions avec une connectivité limitée à Internet.

Pour vous donner un ordre de grandeur de la différence de poids, voici le sous-ensemble latin-étendu :

> En conclusion : le fichier de police médian avec un sous-ensemble latin-étendu de (395) caractères devrait pesé un peu **moins de 20 Ko**. Si vous regardez vos requêtes réseau et que votre police est beaucoup plus lourde, eh bien, il y a du travail à faire.
> <cite>"<a href="https://www.phpied.com/bytes-normal-web-font-study-google-fonts/" hreflang="en">How many bytes is “normal” for a web font: a study using Google fonts</a>", Stoyan Stefanov (traduction en français)</cite>

Et voici pour le chinois :

> Dans un type de police chinois, la plus petite police standard contient 6 763 caractères. Un type de police japonais appelé Hanazono a 87 791 caractères. La taille typique d'un fichier de police chinois est généralement **d'au moins 5 Mo, parfois plus de 20 Mo**.
> <cite>"<a href="https://medium.com/@Hynuza/typographic-design-in-asian-language-4bb1035ebb7" hreflang="en">Chinese Typographic Design</a>", Hynuza (traduction en français)</cite>

Vous comprendrez pourquoi il est courant de s'abstenir d'utiliser des polices web pour les pages web accessibles en ligne dans cette région.

De l'optimisation est toujours possible. Une méthode efficace est le <i lang="en">subsetting</i>, qui consiste à créer un sous-ensemble d'une police - un fichier qui inclut une sélection personnalisée (et généralement limitée) de glyphes. Mais même avec un chinois de base niveau lycée, nous aurions besoin d'un minimum de 3 000 caractères.

Je savais que le streaming de polices n'était pas possible, mais une publication récente [d'Anthony](https://indieweb.social/@anthony) sur le Web Performance Slack a attiré mon attention. Il faisait la promotion d'une nouvelle spécification (encore en brouillon) spécifiquement conçue à cet effet.

> Sans cette technologie, un navigateur doit télécharger chaque dernier byte d'une police avant de pouvoir rendre des caractères utilisant cette police.
> <cite>"<a href="https://www.w3.org/TR/IFT/" hreflang="en">Incremental Font Transfer</a>", W3C Working Draft (traduction en français)</cite>

L'idée est de créer une police qui peut être segmentée en un chargement initial, contenant uniquement le sous-ensemble de ce qui est critique, puis de lui adjoindre des additions qui complètent la police en cours de route. Une sorte de lazy-loading, mais pour les polices d'écriture.

Cette première itération, si elle est mise en œuvre dans les navigateurs, a le potentiel de débloquer d'importantes opportunités pour les marchés asiatiques. Je suis enthousiaste, même si je n'ai pas hâte de devoir maîtriser des descripteurs de police tels que `size-adjust` ou `ascent-override` pour gérer efficacement l'expérience utilisateur lors du chargement successifs de correctifs contenant des milliers de glyphes !
