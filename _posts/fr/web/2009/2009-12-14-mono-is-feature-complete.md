---
title: 'Mono C# compiler is now C# 4.0 feature complete'
canonical: 'https://www.nexeo.fr/blog/2009/12/14/mono-c-compiler-is-now-c-4-0-feature-complete/'
canonical_title: 'le blog de Nexeo'
tags:
    - Nexdotnet
---

C’est Marek Safar qui l’annonce sur son blog et chez NexDotNet, ça nous rend tous choses… <span lang="en">Well done guys</span> !

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Cette implémentation n’est pas encore complète : le comportement du mot clé `dynamic` est peu compatible avec les types valeurs et Mono a décidé de ne pas développer la compatibilité COM (ce qui se comprendra, étant donnée l’absence de COM sur les plateformes concernées par MONO.
