---
title: 'PhotoSynth : déjà fait à l''ESIEE'
tags:
    - 'Me, myselft and I'
date: '2007-02-26'
section: default
lang: fr
type: post
---

L'année dernière, deux camarades et moi-même avons réalisé un projet de calibrage de caméra (au sein de [l'ESIEE-Paris](http://www.esiee.fr) à partir des travaux de [Zhengyou Zhang](http://research.microsoft.com/en-us/um/people/zhang/) pour Microsoft Research). Avec l'avènement de la technique par [Richard Hartley](http://www.robots.ox.ac.uk/~vgg/hzbook/), le lab Microsoft a élaboré [PhotoSynth](https://photosynth.net/).

<!-- more -->

Principe de l'application&nbsp;: il est possible, à partir de la donnée de certains points-clés sur plusieurs images d'un même objet de définir les caractéristiques spatiales (et internes, mais c'est un autre problème) des appareils ayant pris les photos. Exploitant une énorme base de données de photos, [PhotoSynth](https://photosynth.net/) calcule de lui-même les points clés et extrapole la position dans l'espace des appareils photos et des photos elle-même, élaborant par là-même une reconstitution 3D de l'espace considéré suivant l'ensemble des prises de vue capturées par les différents photographes.

En soi, la technologie autorise une réplication locale mais pour être pertinente, la base de données de photos se devrait d'être gigantesque. Ce qui pourra donner tout son sens à la technologie est l'aspect collaboratif&nbsp;: à supposer qu'un groupe de personnes fiables (afin d'éviter les abus) charge ses photos sur un serveur équipé de Photosynth. Si l'une de ces personnes applique un mot-clé à une photo (portant par exemple le nom de l'objet qu'elle représente), un mail pourrait être envoyé à l'ensemble des membres du groupe dont certaines photos représentent le même objet (même position dans l'espace) pour savoir si elles veulent que leurs photos soient étiquettés avec ce mot-clé. Un moyen facile et rapide de partager tout le potentiel de ses photographies avec le reste du monde, de profiter des connaissances de chacun et de recréer le monde en 3D, pour le plaisir de tous.

En attendant, on ne peut encore qu'essayer PhotoSynth, mais le résultat laisse rêveur&nbsp;!
