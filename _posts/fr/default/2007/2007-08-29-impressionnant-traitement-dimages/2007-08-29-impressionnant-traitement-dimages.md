---
title: 'Impressionnant traitement d''images'
tags:
    - Technologie
    - Web
date: '2007-08-29'
section: default
lang: fr
type: post
---

Une extraordinnaire nouvelle technique de redimensionnement d'images que nous présente ici [Fred Cavazza](http://www.fredcavazza.net/2007/08/27/des-algorithmes-de-retouche-dimage-toujours-plus-performants/). Merci pour la vidéo, je vais suivre ça de près maintenant.

La vidéo explique assez clairement la méthode mais pour les non-anglophones je précise un peu en dessous de la vidéo.

Il existe différents moyen de ramener une image à un ensemble de valeurs comparables (qu'on représente par des niveaux de gris). L'idée ici et d'évaluer l'image pour donner une grande valeur aux pixels qui présentent de l'intérêt et une faible aux négligeables (toute l'astuce étant dans le calcul de cette valeur, d'où le nom donné à cette méthode&nbsp;: **content-aware**).

Plutôt que d'enlever des lignes ou colonnes entières de pixels lors d'un redimensionnement (méthode traditionnelle), on ne supprime que les tracés d'intérêt faible. Ainsi, l'image obtenue présente un contenu similaire à l'image d'origine. Bien sûr et comme l'ordinateur ne peut pas toujours faire la différence entre le négligeable et l'important, il est possible de donner une forte valeur manuellement à certaines zones pour éviter leur disparition.

La documentation complète du professeur [Ariel Shamir ](http://www.faculty.idc.ac.il/arik/)se trouve ici (50 Mo et un taux de transfet très bas… mais pour qui s'intéresse au traitement d'images, c'est passionnant).