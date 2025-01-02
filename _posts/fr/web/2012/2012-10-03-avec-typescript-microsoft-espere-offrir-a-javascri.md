---
title: 'Avec TypeScript, Microsoft espère offrir à JavaScript les outils pour se développer'
tags:
    - Outils
    - Front-End
canonical: 'https://blog.clever-age.com/fr/2012/10/03/avec-typescript-microsoft-espere-offrir-a-javascript-les-outils-pour-se-developper/'
canonical_title: 'le blog de Clever Age'
slug: avec-typescript-microsoft-espere-offrir-a-javascript-les-outils-pour-se-developper
---

Beaucoup attendaient Anders Hejlsbernt au tournant. Il faut dire que l’homme attire l’attention, tant il cumule les succès professionnels. Après avoir participé à l’élaboration du Turbo Pascal, l’ingénieur danois est devenu chef de projet sur Delphi puis a créé le framework .NET et C# au début des années 2000\. Il est en charge depuis de faire évoluer ce langage fortement typé. Autant dire qu’on ne l’attendait pas sur du JavaScript, à tort.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

[**TypeScript**](http://www.typescriptlang.org/), le nouveau bébé de Hejlsbernt chez Microsoft, est un **sur-ensemble de JavaScript** ajoutant au langage un certain nombre d’extensions conceptuelles dont notamment le typage statique, et une orientation objet centrée sur les classes et non plus les prototypes.

Pour passer de TypeScript à JavaScript, le développeur utilisera un compilateur, mais TypeScript ne doit pas être confondu avec d’autres langages générant du JavaScript : il n’est ni une réinterprétation de JavaScript dans une syntaxe différente, comme [CoffeeScript](http://coffeescript.org), ni destiné à être exécuté dans son propre runtime comme [Dart](https://www.dartlang.org)

Le langage semble pensé pour l’avenir. La syntaxe de déclaration des classes, par exemple, est issue de l’[ECMAScript ES6](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts), tant et si bien que lorsque cette version sera supportée par les navigateurs, TypeScript n’aura tout simplement plus qu’à arrêter de compiler ces classes qui seront interprétées nativement.

Niveau support, Microsoft proprose une extension Visual Studio pour sa communauté de développeurs et de l’autre, un package NodeJS. Et niveau ouverture, on signalera que le compilateur proposé (développé lui-même en TypeScript) est sous licence Apache 2.0 et que le langage est sous licence Open Web Foundation (OWFa 1.0).

TypeScript n’est pas le seul dans la course à la succession de JavaScript mais il se démarque en se positionnant **non pas comme un remplaçant, mais plutôt comme une extension facilitant l’usage de JavaScript** pour du développement objet. En somme, un cri d’amour de Microsoft envers une technologie en pleine émancipation sur le Web, côté client comme côté serveur.

De plus :

- Respectant la syntaxe JavaScript, il peut être utilisé dès maintenant sur des projets en Production, sans coût de migration
- Quand c’est possible, TypeScript infère le type. Cela veut dire que même si vous lui passez vos JavaScripts actuels, il les validera en vérifiant que les types sont respectés
- Il n’exclut pas de continuer à utiliser les outils JavaScript déjà présent dans votre intégration continue : compilateurs, réducteurs, concaténeurs s’appliqueront sur le JavaScript en sortie de TypeScript.
- En ajoutant un compilateur, il ajoute une sécurité supplémentaire contre les erreurs de développement
- Son compilateur est lui-même en JavaScript, ouvrant la porte à des compilations à la volée
- Il est livré avec des add-ins pour la coloration syntaxique sous Sublime Text 2, Vim et Emacs

A vous d’essayer désormais, et de vous faire une idée…
