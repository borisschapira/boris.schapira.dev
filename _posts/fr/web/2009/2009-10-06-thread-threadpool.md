---
title: 'L’astuce du jour : Thread ou ThreadPool ?'
canonical: 'https://www.nexeo.fr/blog/2009/10/06/lastuce-du-jour-thread-ou-threadpool/'
canonical_title: 'le blog de Nexeo'
tags:
    - Nexdotnet
---

Aujourd’hui, retour sur une question fondamentale : faut-il utiliser `Thread` ou `ThreadPool` ?

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Contrairement à ce que la [francisation du mot anglais "thread"](https://fr.wikipedia.org/wiki/Processus_l%C3%A9ger) laisse entendre, la création de threads n’est pas vraiment sans conséquences. Si vous démarrez beaucoup de <span lang="en">threads</span> réalisant des tâches simples dont le seul objectif est d’être asynchrones, le coût de la création va significativement nuire à vos performances. `ThreadPool` résout ce problème en offrant un ensembe de threads déjà initialisés, et qui n’attendent que vos instructions pour démarrer.

Si théorie ne vous suffit pas, n’hésitez pas à consulter [l’article de Vko sur le sujet](http://blogs.codes-sources.com/vko/archive/2009/09/16/thread-ou-threadpool.aspx) : il y a mesuré la différence de performance entre l’utilisation de `Thread` et de `ThreadPool`. C’est édifiant.
