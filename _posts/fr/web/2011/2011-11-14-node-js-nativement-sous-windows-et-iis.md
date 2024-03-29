---
title: 'Node.js, nativement sous Windows et IIS'
canonical: https://blog.clever-age.com/fr/2011/11/14/node-js-nativement-sous-windows-et-iis/
canonical_title: le blog de Clever Age
tags:
    - Outils
---

Microsoft et Joyent ont annoncé en juin qu’ils travaillaient ensemble à l’élaboration d’une version Windows de Node.js. Après plusieurs mois de développement et quelques versions préliminaires, les deux sociétés ont annoncé lundi 7 novembre avoir abouti à la [première version stable de Node.js pour Windows](http://blogs.msdn.com/b/interoperability/archive/2011/11/07/first-stable-build-of-nodejs-on-windows-released.aspx).

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Cette version 0.6.0 est nativement supportée par le système d’exploitation de Microsoft et grâce à [iisnode](http://tomasz.janczuk.org/2011/08/hosting-nodejs-applications-in-iis-on.html), il est possible de l’héberger sur IIS. De quoi mettre au placard la version Windows de Node.Js disponible jusqu’ici, dont les performances étaient fortement améliorables.

J’ai vraiment hâte de voir les première synergies entre Node.js et ASP.NET, nul doute que la possibilité de les déployer tous deux sur le même Web Server devrait accélérer les choses. Vivement la version 1.0 !
