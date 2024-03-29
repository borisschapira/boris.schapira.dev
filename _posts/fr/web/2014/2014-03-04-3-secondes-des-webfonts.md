---
title: '3 secondes & des WebFonts'
tags:
    - Front-End
    - 'Performance Web'
canonical: 'https://blog.clever-age.com/fr/2014/03/04/3-secondes-des-webfonts/'
canonical_title: 'le blog de Clever Age'
---

Les WebFonts, mal utilisées, sont souvent un fléau pour la performance Web. Chromium (donc Chrome) devrait changer la donne suite à <a href="https://codereview.chromium.org/171823002">la correction 171823002</a>. Dorénavant, le texte d'une page sera rendu 3 secondes après le <em>load start</em>, même si les WebFonts ne sont pas chargées. C'était déjà le comportement appliqué sur Firefox et c'est un nouveau pas en avant dans la lutte constante pour une meilleure performance Web.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

En dehors de cette problématique de WebFont (<a title="Optimiser le rendu de @font-face : tout un programme !" href="https://blog.clever-age.com/fr/2012/08/29/optimiser-le-rendu-de-font-face/">déjà abordée chez nous</a>), c'est surtout l'inclusion d'objectifs de performance au sein même du navigateur qui me fait plaisir. C'est dommage d'en arriver là mais avec un Web qui devient de plus en plus lourd (et <a href="https://www.webperformancetoday.com/2014/02/25/the-great-web-slowdown-infographic/">de plus en plus lent [EN]</a>) d'année en année, il est temps que la tendance s'inverse !
