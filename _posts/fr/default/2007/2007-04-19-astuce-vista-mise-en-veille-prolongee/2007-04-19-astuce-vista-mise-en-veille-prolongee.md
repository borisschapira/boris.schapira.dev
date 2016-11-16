---
title: 'Astuce Vista : mise en veille prolongée'
tags:
    - Technologie
    - 'Windows Vista'
date: '2007-04-19'
section: default
lang: fr
type: post
---

Aujourd'hui j'ai eu besoin de place sur mon disque dur pour une installation conséquente. Je parcours mes documents, supprime l'inutile, et lance le nettoyage du disque (clic droit sur le disque, puis `Propriétés`, puis `Nettoyage du disque`). Vista tourne quelques secondes puis m'affiche la liste des fichiers "nettoyables".

Les fichiers de mise en veille prolongée prennent plus de 1,2 Go. Normal, puisqu'il s'agit de sauvegarder l'intégralité de l'état actuel de l'ordinateur pour ensuite l'éteindre et récupérer cet état plus rapidement au démarrage suivant. Pour gagner de la place, je supprime.

Et bien sachez une chose&nbsp;: 

> Le nettoyage des fichiers de mise en veille prolongée désactive automatiquement toute possibilité de mise en veille prolongée et entraine notamment la disparition de la fonction adéquate du menu d'éteinte de l'ordinateur.

Rien de définitif, néanmoins, tout cela se récupère très bien en ouvrant le menu Windows, recherchez `cmd`, puis cliquez-droit sur `cmd.exe` et sélectionnez "Exécuter en tant qu'Administrateur". Enfin, tapez :

```
# cmd
powercfg hibernate on
```

Bon à savoir car **la mise en veille prolongée est une des fonctionnalités qui protègent le plus l'environnement** en proposant aux utilisateurs de pouvoir retrouver rapidement un scénario de productivité tout en arrêtant la consommation énergétique en cas de non-utilisation de la machine.