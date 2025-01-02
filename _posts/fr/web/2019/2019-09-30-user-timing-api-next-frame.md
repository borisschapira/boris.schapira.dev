---
title: 'Custom Timing : attendez la prochaine frame'
subtitle: 'quand vous utilisez la User Timing API'
tags:
    - 'Performance Web'
    - JavaScript
    - UX
slug: custom-timing-prochaine-frame
translations:
    en: user-timing-api-next-frame
---

Les indicateurs habituels de performance web (Premier Octet, Speed Index...) sont très intéressants mais j'ai souvent besoin d'ajouter des marqueurs temporels personnalisés, basés sur des événements qui ont un sens du point de vue métier.

- le moment où un contenu (ou une fonctionnalité) spécifique est disponible pour les utilisateurs·ices
- le début et la fin de l'affichage d'une animation de chargement (très utile dans les tunnels complexe)
- dans une page découpée en composants récupérant leur contenu dans une API, les temps d'affichage spécifiques de chaque composant
- …

<!-- more -->

J'utilise la User Timing API ([voir sur <abbr title="Mozilla Developer Network" lang="en">MDN</abbr> [EN]](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API)) pour insérer des <i lang="en">timings</i> dans la <i lang="en">performance timeline</i> du navigateur. Comme on peut récupérer tous ces indicateurs dans Dareboost ou Contentsquare Speed Analysis, je peux ensuite [surveiller leur évolution sur la durée](https://blog.dareboost.com/fr/2018/05/monitoring-custom-timings/).

{% capture img_alt %}Deux courbes dans un graphique. Sur l'axe des abscisses, une période d'un mois. Sur l'axe des Y, le temps entre 0 et 3 s. La courbe orange indique la valeur du marqueur "mark_declare_js_end" tandis que la courbe verte correspond au marqueur "mark_switchlang_end".{% endcapture %} {% capture img_caption %}Quelques <i lang="en">Custom Timings</i> issus de ce site{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-09-30/custom-timings-dareboost.png"
alt=img_alt
caption=img_caption
%}

En utilisant l'API avec JavaScript, poser un marqueur est assez simple (et [bien supporté](https://caniuse.com/#feat=user-timing)).  
Par exemple :

```js
// Le truc dont vous voulez mesurer l'occurence
document.getElementById('content').classList.add('blue');
// Le marqueur temporel
performance.mark('mark-blue');
```

Vous pouvez ensuite récupérer la valeur dans les outils de développement de votre navigateur, en utilisant :

```
performance.getEntriesByType('mark');
```

Cependant, j'ai récemment[^1] réalisé quelque chose d'important. **Le simple fait que le navigateur exécute du code JavaScript ne signifie pas que l'utilisateur puisse voir les résultats de cette exécution**. Le navigateur doit, entre temps, mettre à jour l'affichage. Or, sa capacité à le faire dépend du code JavaScript qui suit le morceau de code qui nous intéresse…

[^1]: En lisant "[Performance metrics for blazingly fast web apps](https://blog.superhuman.com/performance-metrics-for-blazingly-fast-web-apps-ec12efa26bcb)" [EN], de Conrad Irwin

Dans l'exemple suivant, j'injecte une boucle bloquante d'une seconde après mon <i lang="en">timing</i> de performance, ce qui bloque le rendu par le navigateur.

```js
// Le truc dont vous voulez mesurer l'occurence
document.getElementById('content').classList.add('blue');
// The timestamp
performance.mark('mark-blue-sync');

// Un bout de code qui coûte des ressources au navigateur
// pendant 1 seconde
let n = performance.now();
while (performance.now() - n < 1000) {}
```

Bien sûr, dans la vraie vie, vous n'aurez pas une simple boucle. Vous aurez d'autres tâches qui prendront peut-être beaucoup de temps, ou peut-être pas. Vous ne pouvez pas le savoir et, même, vous ne pouvez pas le tester, car tout cela dépend du contexte client que vous ne contrôlez pas.

Pour contourner ce problème, nous pouvons utiliser `requestAnimationFrame()` afin de demander au navigateur de poser notre <i lang="en">timing</i> juste avant le prochain rendu (la prochaine <i lang="en">frame</i>) :

```js
// Le truc dont vous voulez mesurer l'occurence
document.getElementById('content').classList.add('blue');
performance.mark('mark-blue-sync');
// Le Custom Timing, avant la prochaine frame
window.requestAnimationFrame(() => {
    performance.mark('mark-blue-frame');
});

// Un bout de code qui coûte des ressources au navigateur
// pendant 1 seconde
let n = performance.now();
while (performance.now() - n < 1000) {}
```

Si vous voulez voir comment ça fonctionne par vous-même, voici [une page de test](https://tests.boris.schapira.dev/perfmark-animationframe/).

{% capture note %} **EN UN MOT**  
**Utilisez l'API User Timings** pour créer des <i lang="en">Custom Timings</i> liés à votre activité.

**Encapsulez-les** dans des <i lang="en">callbacks</i> `requestAnimationFrame()` pour comprendre le comportement de l'interface, plutôt que l'exécution du code.

Si vous voulez avoir une idée de la latence de l'affichage, attachez deux marques : l'une après l'événement à suivre, l'autre dans un <i lang="en">callback</i> `requestAnimationFrame()`.{% endcapture note %} {% include note.html.liquid content=note %}
