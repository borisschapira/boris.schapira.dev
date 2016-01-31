---
layout: post
title: "De l'archivage du Web"
---

Importante [discussion](https://twitter.com/htmlvv/status/575720039225098241) sur Twitter, suite à une prise de position récente de Jake Archibald :

> Pages that are empty without JS: dead to history (archive-org), unreliable for search results (despite any search engine claims of JS support, check it yourself), and thus ignorable.
>   <cite>["js;dr = JavaScript required; Didn’t Read."](http://tantek.com/2015/069/t1/js-dr-javascript-required-dead), Jake Archibald</cite>

Cette prise de position clairement opposée à l'actuelle tendance des sites _Single Page Application_ (SPA) est intéressante parce qu'elle soulève en réalité plusieurs questions.

## Référencement et accessibilité

La principale problématique SEO soulevée par les SPA est l'activation de JavaScript sans lequel le site n'est plus en mesure d'offrir son contenu. Cela pose des problèmes d'indexation car de nombreux moteurs de recherches et réseaux sociaux utilisent des processus de parcours (_crawling_) qui n'activent pas JavaScript. Il est donc nécessaire de passer par des solution de pré-rendu, comme [prerender.io](https://prerender.io/), qui génèrent un code HTML _à plat_, issues d'une interprétation du JavaScript dans un contexte neutre.

Par extension, cela soulève un autre problème de JavaScript : la faible tolérance à la faute de JavaScript : si une bibliothèque tierce vient nuire aux comportements du site, celui-ci peut devenir inutilisable et son contenu complètement disparaître de . Cependant, sur ce dernier point, JavaScript n'a pas l'exclusité : l'inclusion d'une CSS tierce au périmètre flou peut également nuire à l'expérience.

Du point de vue du référencement, on commence à se poser la question intéressante du Web en tant que dépôt de contenus, ce que le Web n'est plus tout-à-fait. Depuis des années, nous observons une _logiciellisation_ du Web, à la fois dans les territoires qu'il conquiert hors de lui-même (technologies Web utilisées pour du développement natif) que dans les productions qu'on y trouve, de plus en plus applicatives et de moins en moins orientées contenus.

Que signifie, dans ce contexte,

## L'archivage

La problématique de l'archivage, qui est
