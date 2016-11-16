---
title: 'Web Standard Update pour Visual Studio 2010 : support de HTML5 & CSS3'
tags:
    - Front-End
date: '2011-06-16'
section: default
lang: fr
type: post
---

Il n'y a rien qui vous empêchait, dès hier, de créer des sites Web HTML5 et CSS3 en ASP.NET WebForms ou MVC avec Visual Studio. Des schémas de validation existaient, il suffisait de les télécharger et de les installer. Cependant, il fallait dire au revoir à l'Intellisense et à la prise en charge de certaines balises. Microsoft, sous l'impulsion de [Mads Kristensen](http://madskristensen.net/ "Blog de Mads Kristensen"), vient de faire un gigantesque pas en avant en faveur des standards W3C et c'est une excellente nouvelle&nbsp;!

<!-- more -->

<figure>
<a data-featherlight="image" href="/assets/images/2011-06-16/vshtml5.png" title="Voir en plus grand">
      {% responsive_image path: assets/images/2011-06-16/vshtml5.png alt: "Logo de Visual Studio surplombant le logo d'HTML5" %}
  </a>
  <figcaption>Logo non-officiel de Web Standard Update, proposé par Scott Hanselman</figcaption>
</figure>

C'est en réunissant quelques collègues de l'équipe "Plate-Forme et Outils Web" qu'est né la "<del>Rogue</del> Team" à l'origine de ce [Web Standard Update pour Visual Studio 2010](https://visualstudiogallery.msdn.microsoft.com:443/a15c3ce9-f58f-42b7-8668-53f6cdc2cd83 "Téléchargement de Web Standards Update pour Microsoft Visual Studio 2010 SPI et Visual Web Developer Express 2010 SP1") qui ajoute à Visual Studio le support d'HTML5, de CSS3 et de nouvelles fonctionnalités JavaScript.

Au menu des fonctionnalités HTML5, on pourra citer&nbsp;: Video, Audio, Input typés, support du Drag &amp; Drop, [WAI-ARIA](http://www.w3.org/WAI/intro/aria) pour l'accessibilité, [Microdatas](http://www.w3.org/TR/microdata/) &amp; [Schema.org](http://schema.org/docs/gs.html) (ce sont les SEO qui vont sauter de joie)…

Côté API navigateurs&nbsp;: [Geo-Location](http://dev.w3.org/geo/api/spec-source.html) et [Local Storage](http://www.w3.org/TR/webstorage/).

Pour le support de CSS3, une liste de support tellement longue que je vous invite à [la consulter sur le blog de Scott Hanselman](http://www.hanselman.com/blog/AnnouncingTheWebStandardsUpdateHTML5SupportForTheVisualStudio2010Editor.aspx "Annonce de Web Standard Update pour Visual Studio 2010 sur le blog de Scott Hanselman"), mais sachez que vous pourrez enfin utiliser `div:nth-child(2n+1)` sans erreur de validation. Même les préfixes `-webkit` et `-moz` sont supportés.

Enfin, la meilleure nouvelle est que cette mise à jour n'est pas un coup d'épée dans l'eau, Mads Kristensen ayant d'ores et déjà annoncé son objectif de livrer **une nouvelle version chaque trimestre**, afin de maintenir Visual Studio à jour.

Alors que [la polémique enfle depuis la Professional Developpers Conference 2010](http://www.zdnet.com/article/microsoft-our-strategy-with-silverlight-has-shifted/) à propos de l'investissement croissant de Microsoft dans HTML5 (et les craintes que cela suscite par rapport à Silverlight 5), nul doute que cette nouvelle annonce va jeter de l'huile sur le feu.

Mais pour les développeurs ASP.NET, quelle bonne nouvelle&nbsp;!
