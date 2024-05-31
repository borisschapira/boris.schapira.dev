---
title: Pourquoi mon script asynchrone bloque-t-il le rendu de ma page ?
tags:
    - 'Performance Web'
slug: async-defer-render-blocking-fr
---

Une très bonne manière de mesurer l'impact d'une ressource tierce, comme un script, est de mesurer la performance de la page avec et sans ce script. Nombreux sont mes clients qui découvrent alors que leurs scripts, qu'ils ont pourtant chargé avec les attributs <code>async</code> et <code>defer</code>, sont bloquants pour le rendu.

Et c'est normal. D'après la spécification HTML ([source](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-async)), un script <code>async defer</code> est, en fait, un script <code>async</code> partout où <code>async</code> est supporté, [c'est-à-dire partout](https://caniuse.com/script-async). Un script <code>async</code> est téléchargé avec une priorité basse, voire la plus basse. En revanche, une fois qu'il est disponible, il est exécuté immédiatement, interrompant les tâches en cours (y compris les tâches de rendu).

Si vous cherchez d'autres manières de télécharger des scripts, [en voici au moins sept](/notes/2020-06-priorites-js/).

Et pour tout comprendre des attributs permettant de différer ou rendre asynchrone un script, [c'est par ici](/notes/2017-12-comment-differer-l-execution-d-un-script/).
