---
title: 'Custom Timing : attendez la prochaine frame'
subtitle: 'quand vous utilisez la User Timing API'
i18n-key: user-timing-api-next-frame
tags:
    - 'Performance Web'
    - JavaScript
    - UX
slug: custom-timing-prochaine-frame
translations:
    en: user-timing-api-next-frame
---

Les indicateurs habituels de performance web (Premier Octet, Speed Index...) sont très intéressants mais j'ai souvent besoin d'ajouter des marqueurs temporels personnalisés, basés sur des événements qui ont un sens du point de vue métier.

<!-- more -->

J'utilise la User Timing API ([voir sur <abbr title="Mozilla Developer Network" lang="en">MDN</abbr> [EN]](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API)) pour insérer des <i lang="en">timings</i> dans la  <i lang="en">performance timeline</i> du navigatuer. Comme on peut récupérer tous ces indicateurs dans Dareboost, je peux ensuite [surveiller leur évolution sur la durée](https://blog.dareboost.com/fr/2018/05/monitoring-custom-timings/).

{% capture img_alt %}Deux courbes dans un graphique. Sur l'axe des abscisses, une période d'un mois. Sur l'axe des Y, le temps entre 0 et 3 s. La courbe orange indique la valeur du marqueur "mark_declare_js_end" tandis que la courbe verte correspond au marqueur "mark_switchlang_end".{% endcapture %}
{% capture img_caption %}Quelques <i lang="en">Custom Timings</i> issus de ce site{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2019-09-30/custom-timings-dareboost.png"
alt=img_alt
caption=img_caption
%}

En utilisant l'API avec JavaScript, c'est assez simple (et [bien supporté](https://caniuse.com/#feat=user-timing)). Par exemple :

```js
    // Le truc dont vous voulez mesurer l'occurence
    document.getElementById("content").classList.add("blue");
    // Le marqueur temporel
    performance.mark("mark-blue");
```

Vous pouvez ensuite récupérer la valeur dans les outils de développement de votre navigateur, en utilisant :

```
console.dir(performance.getEntriesByType('mark'));
```


However, I recently[^1] realized that I often forgot something important: **just because the browser execute some JavaScript code does not mean that the user can see the results of this execution**. The browser must update the display, and its ability to do so depends on the JavaScript code that follows the piece of code we're interested in.

[^1]: Reading "[Performance metrics for blazingly fast web apps](https://blog.superhuman.com/performance-metrics-for-blazingly-fast-web-apps-ec12efa26bcb)", by Conrad Irwin

In the following example, I inject a whole second between my performance mark and the browser update of the display.

```js
    // The thing you want to monitor the occurrence of
    document.getElementById("content").classList.add("blue");
    // The timestamp
    performance.mark("mark-blue-sync");

    // A snippet of code that consumes resources during 1 second
    let n = performance.now();
    while (performance.now() - n < 1000) {}
```

Of course, in real life, you won't have a simple loop. You will have some other time-consuming tasks. You won't even know what, because it could be in a library on which your code depends, and you have no idea.

As we're not going to analyze all the code that follows the stuff we're interested in to know when to put the timestamp, we need a workaround.

We can use `requestAnimationFrame()` to ask for our mark to be put set before the browser performs the next repaint:

```js
    // The thing you want to monitor the occurrence of
    document.getElementById("content").classList.add("blue");
    performance.mark("mark-blue-sync");
    // The timestamp, before the next repaint
    window.requestAnimationFrame(() => {
      performance.mark("mark-blue-frame");
    });

    // A snippet of code that consumes resources during 1 second
    // but we don't care anymore
    let n = performance.now();
    while (performance.now() - n < 1000) {}
```

***

If you want to see this for yourself, here's [a test page](https://tests.boris.schapira.dev/perfmark-animationframe/).

***

## In a nutshell

- Call the User Timings API to create custom business-related timestamps.
- Encapsulate them  inside `requestAnimationFrame()` callbacks to get to understand how the IU behaves, rather than the code execution. If you want to understand the code, attach two marks: you will have an idea of the display latency.
