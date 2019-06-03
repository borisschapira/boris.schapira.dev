---
title: 'A la recherche du nouveau décompilateur'
tags:
    - Outils
---

Si comme moi vous développez en .NET depuis un bout de temps, vous avez
probablement entendu parlé de
[.NET Reflector de Red Gate](http://www.red-gate.com/products/dotnet-development/reflector/ 'Site officiel de .NET Reflector'),
cet utilitaire qui décompile vos assembly .NET et vous permet de voir le code
C#/VB.NET contenu dans vos DLL. Récemment, .NET Reflector est passé d’un mode de
distribution gratuit à payant. Cette situation a incité la communauté à se
retrousser les manches et c’est comme ça que sont nées diverses alternatives.

<!-- more -->

{% capture img_alt %}Capture d'écran de IL.Spy{% endcapture %}
{% capture img_caption %}IL.Spy est une alternative à Reflector{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2011-06-08/il_spy.png"
alt=img_alt
caption=img_caption
%}

En ce moment, je teste [IL.Spy](http://ilspy.net/ 'Site officiel de IL.Spy'),
une solution gratuite et open-source, pas aussi développée que Reflector mais
qui convient à mes besoins. J'ai également installé dans un coin
[dotPeek de JetBrains](http://www.jetbrains.com/decompiler/ 'Site officiel de dotPeek, le décompiler de JetBrains'),
mais les premiers lancements ne sont pas concluants : la solution est très
lente.

Si vous avez d'autres propositions, je suis preneur !
