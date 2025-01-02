---
title: 'Récupérer une Pull Request (GitHub) ou une Merge Request (Gitlab) en local'
---

Votre collègue a fait une <abbr title="Pull Request">PR</abbr> ou une <abbr title="Merge Request">MR</abbr> et vous ne comprenez pas pourquoi elle ne passe pas le _build_ ? Vous pouvez la récupérer en local pour l'exécuter.

## Configurer

Pour cela, ouvrez votre _.git/config_ (_.git_ étant un répertoire caché à la racine de votre dépôt local), puis ajoutez sur le dépôt distant (_remote_) concerné :

- Pour Gitlab :

```
fetch = +refs/merge-requests/*/head:refs/remotes/upstream/merge-requests/*
```

- Pour Github :

```
fetch = +refs/pull/*/head:refs/remotes/origin/pr/*
```

En contexte, ça donne ça :

```ini
[remote "upstream"]
    url = git@gitlab.com:user/repo.git
    fetch = +refs/heads/*:refs/remotes/upstream/*
    fetch = +refs/merge-requests/*/head:refs/remotes/upstream/merge-requests/*
```

Sauvegardez, fermez.

## Récupérer

Il vous suffit d'exécuter `git fetch [remote]` (en remplaçant `[remote]` par le dépôt distant que vous visez). Voilà, à vous les _requests_ !

```bash
$ git fetch upstream
remote: Counting objects: 52, done.
remote: Compressing objects: 100% (45/45), done.
remote: Total 52 (delta 40), reused 10 (delta 7)
Unpacking objects: 100% (52/52), done.
From gitlab.com:user/repo
   224635d..c355b07  develop    -> upstream/develop
 * [new ref]         refs/merge-requests/1/head -> upstream/merge-requests/1
 * [new ref]         refs/merge-requests/10/head -> upstream/merge-requests/10
 * [new ref]         refs/merge-requests/11/head -> upstream/merge-requests/11
 * [new ref]         refs/merge-requests/12/head -> upstream/merge-requests/12
 * [new ref]         refs/merge-requests/13/head -> upstream/merge-requests/13
 * [new ref]         refs/merge-requests/14/head -> upstream/merge-requests/14
 * [new ref]         refs/merge-requests/15/head -> upstream/merge-requests/15
 * [new ref]         refs/merge-requests/16/head -> upstream/merge-requests/16
 * [new ref]         refs/merge-requests/2/head -> upstream/merge-requests/2
 * [new ref]         refs/merge-requests/3/head -> upstream/merge-requests/3
 * [new ref]         refs/merge-requests/4/head -> upstream/merge-requests/4
 * [new ref]         refs/merge-requests/5/head -> upstream/merge-requests/5
 * [new ref]         refs/merge-requests/6/head -> upstream/merge-requests/6
 * [new ref]         refs/merge-requests/7/head -> upstream/merge-requests/7
 * [new ref]         refs/merge-requests/8/head -> upstream/merge-requests/8
 * [new ref]         refs/merge-requests/9/head -> upstream/merge-requests/9
```
