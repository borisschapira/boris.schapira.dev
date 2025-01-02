---
title: 'Chrome DevTools ne se repose pas sur ses lauriers'
tags:
    - Outils
    - 'Performance Web'
canonical: 'https://blog.clever-age.com/fr/2013/07/15/chrome-devtools-ne-se-repose-pas-sur-ses-lauriers/'
canonical_title: 'le blog de Clever Age'
---

Alors qu’ils sont déjà reconnus comme étant d’excellente facture, voire même un cran au-dessus de la concurrence, les outils pour développeurs de Chrome ont encore bénéficié d’une exceptionnelle amélioration dans Chrome 28, disponible sur la branche _stable_.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Au menu, quatre innovations majeures :

- [Workspaces](https://plus.google.com/+GoogleChromeDevelopers/posts/644qQuBKZeL), qui permet d’utiliser DevTools comme éditeur de code, en définissant une relation en dur entre un dossier local et un dossier web
- La possibilité d’éditer Sass en temps-réel, avec compilation des modifications à la volée
- L’[extension ADP](https://chrome.google.com/webstore/detail/adb/dpngiggdglpdnjdoaefidgiigpemgage/details?hl=fr) qui simplifie le débogage à distance des applications Android (en embarquant le _Debug Bridge_, notamment)
- Une amélioration des outils de mesure de la Performance Web comme Flame Chart (visualisation du traitement JavaScript), la possibilité de visualiser le rendu en temps-réel ou en simulant un _repaint_ en continu, un compteur de FPS, un profiler Canvas…

Les documentations de ces outils sont encore balbutiantes, quand elles ne sont pas absentes, de la documentation officielle. Mais vous pouvez regarder cette [vidéo de Paul Irish qui présente ces nouvelles fonctionnalités](https://www.youtube.com/watch?v=x6qe_kVaBpg) ou vous référer à l’[excellente présentation d’HTML5 Rocks](http://www.html5rocks.com/en/tutorials/developertools/revolutions2013/).
