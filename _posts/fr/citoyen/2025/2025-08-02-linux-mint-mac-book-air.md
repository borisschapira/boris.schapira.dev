---
title: Linux Mint sur un Mac Book Air de 2012
---

À la maison, nous avons un MacBook Air de 11 pouces, un modèle de 2012. Il a été utilisé par mon aîné pendant quelques années, principalement pour consulter son agenda en ligne. Mais voilà, Apple ne supporte plus les mises à jour de sécurité depuis un certain temps, et la machine commence à être très lente.

Sauf qu'au fond, c'est une bonne machine. Le chassis est élégant, le SSD de 125 Go suffit à mon fils, et l'écran est en bon état. Ça n'aurait aucun sens de la jeter ! J'ai donc décidé de lui donner une seconde vie en installant Linux Mint.

Je ne me souviens plus comment j'ai entendu parler de Linux Mint, mais j'aime bien son interface très accessible. Je l'ai déjà installé sur un autre vieil ordinateur de la maison, un modèle de 2014, je pense, après avoir remplacé son disque dur par un SSD.

---

Disclaimer : attention, je ne suis pas un expert en la matière. Je travaille dans le numérique, mais mes compétences en matière de matériel et de systèmes d'exploitation sont assez limitées.

Je me débrouille pour naviguer dans des fichiers en ligne de commande mais ça ne veut pas dire que je comprends tout ce que je fais. Quant à ouvrir des machines pour remplacer des composants, c'est une autre paire de manches : la dernière fois que j'ai dû le faire, j'ai regardé une vidéo pour m'aider, soit à peu près la même démarche que quand je veux bricoler.

---

Donc, me voilà face à mon MacBook Air, équipé d'une clé USB de 3 Go. Pour la postérité, voici ce que j'ai fait.

## Sauvegarde

Ça va sans dire, mais c'est toujours mieux de le dire : n'oubliez pas de sauvegarder vos fichiers. Vous pouvez utiliser une clé USB ou passer par une synchronisation en ligne, à vous de voir. Moi, j'ai choisi de tout mettre sur une clé USB, puis de copier sur un autre ordinateur (bah oui, j'avais besoin de la clé pour la suite).

## Création d'une clé USB depuis le Mac

Un truc que j'adore avec les systèmes Linux, c'est qu'ils sont si légers qu'on peut les démarrer depuis une clé USB. Au lancement de l'ordinateur, vous dites que vous voulez utiliser la clé USB plutôt que le disque dur de l'ordinateur, et hop, vous pouvez tester le système tranquillement pour voir s'il est compatible avec votre matériel avant de faire le grand saut.

Pour créer une clé USB bootable, j'ai téléchargé le fichier correspondant à Linux Mint Cinnamon Edition (un fichier .ISO) depuis [le site de Linux Mint](https://linuxmint.com/download.php).

Ensuite, j'ai installé [balenaEtcher](https://etcher.balena.io/), un logiciel de création de clé bootable sur macOS[^alternatives]. Une fois installé et lancé, j'ai cliqué sur "Select image", choisi le fichier ISO téléchargé, puis "Select drive" pour choisir la clé USB, et enfin "Flash!".

[^alternatives]: [Rufus](https://rufus.ie/) fait pareil sous Windows. Si vous avez un autre ordinateur sous Mint, il y a un logiciel intégré par défaut "Créateur de clé USB".

J'ai attendu quelques minutes, et à la fin, j'ai eu un message de succès de balenaEtcher, ainsi qu'un message d'erreur du système disant qu'il ne pouvait plus accéder aux fichiers sur la clé USB. À priori, c'est normal, alors je n'ai pas paniqué.

## Rédémarrage

Pour redémarrer la machine et la forcer à utiliser la clé USB, il faut d'abord l'éteindre complètement. Ensuite, j'ai appuyé sur le bouton de démarrage et, au moment où j'ai entendu le "TOUDOM" caractéristique du Mac qui s'allume, j'ai inséré la clé USB de la main droite et j'ai appuyé sur la touche Option avec l'index gauche.

Si tout se passe bien, vous arrivez sur un écran vous demandant de choisir quel disque utiliser pour le démarrage : soit celui du Macintosh (c'est toujours drôle de voir écrit "Mac" en entier sur de vieux écrans), soit, dans mon cas, EFI[^efi], le microgiciel présent sur la clé USB, permettant de gérer l'amorce de Linux.

[^efi]: pour Extensible Firmware Interface.

## Édition de GRUB

En choisissant EFI, je me suis retrouvé devant une liste d'options, appelée GRUB, dont le lancement de Linux Mint et le lancement de Linux Mint en mode de compatibilité. J'ai essayé de lancer Linux Mint normalement, et je vous encourage à faire de même.

---

**Problème :** sur cet ordinateur, ça n'a pas marché. Je me suis retrouvé devant une ligne de commande clignotante, sans aucune indication. Après un peu de recherche sur mon téléphone, j'ai compris qu'il fallait ajouter un paramètre `intel_iommu=off` dans la ligne de commande[^pourquoi].

Pour ça, sur l'écran de choix des options, il faut taper sur la lettre `e`, ce qui ouvre l'interface d'édition de la commande d'amorçage. J'ai cherché la ligne qui commence par `linux`, j'ai ajouté `intel_iommu=off` à la fin de la ligne, juste avant le `--`.

Bien sûr, pour corser les choses, le système attendait un clavier QWERTY, pas un AZERTY. J'ai donc tapé quelque chose qui devait ressembler à `intel°ionnu-off` sur mon clavier. Si vous avez un doute, cherchez "layout qwerty" sur votre smartphone pour voir les emplacements des touches.

Une fois mon ajout fait, j'ai tapé sur `F10` pour valider.

[^pourquoi]: Du peu que j'en ai compris, c'est lié à la gestion de la mémoire entrante/sortante, normalement sécurisée et stabilisée par ce IOMMU. Mais sur certains systèmes Intel comme celui-ci, ça entre en conflit avec les pilotes de la carte graphique intégrée. Il faut désactiver le IOMMU pour permettre le démarrage.

---

Linux Mint s'est alors lancé.

## Tests et Installation

J'ai alors eu accès à une session live, ce qui m'a permis de découvrir si tout fonctionnait correctement et si ça me plaisait. Je n'ai pas forcément été très précis dans mes tests (cf. la partie plus bas sur le Wifi), je vous encourage à faire mieux que moi !

J'ai ensuite lancé l'installateur en cliquant sur "Install Linux Mint". L'installateur m'a guidé à travers les différentes étapes : choix de la langue, du clavier, installation des codecs supplémentaires, etc.

---

**Problème :** quand je suis arrivé à l'écran du choix du disque ou de la partition, il n'y avait rien. Juste la clé USB.

J'ai joué avec plein de lignes de commande pour comprendre où était le disque et pourquoi je ne le voyais pas. Finalement, j'ai découvert que je n'avais pas les droits pour le voir. J'ai donc tapé `sudo usermod -aG disk $USER` dans le terminal, et j'ai relancé l'installateur. Et là, miracle, le disque est apparu !

---

J'ai choisi d'installer Linux Mint sur tout le disque, mais vous pouvez aussi créer une partition si vous voulez garder MacOS et Linux Mint sur la même machine.

L'installation en elle-même a duré moins de 15 minutes, puis l'ordinateur m'a demandé de retirer la clé USB et s'est éteint.

## Démarrage

En principe, ça redémarre sur Linux Mint du premier coup.

---

**Problème :** tout est resté bloqué sur une page où était écrit `(initramfs)`, avec une invite de commande. Après une nouvelle recherche sur Internet, j'ai tapé `poweroff` pour éteindre l'ordinateur.

Au second redémarrage, j'ai appuyé sur la touche Option pour voir ce qui était proposé. Je me suis retrouvé devant une liste d'options, un GRUB de lancement. J'ai tapé `e` pour éditer les options de démarrage, et j'ai vu que l'option `intel_iommu=off` n'y était pas. En effet, je l'avais ajoutée sur le lanceur de la clé USB mais cette fois, j'étais sur le lanceur du système installé sur le disque.

J'ai ajouté l'argument, j'ai tapé sur `F10`, et cette fois, l'ordinateur a démarré avec Linux Mint.

Pour éviter d'avoir à refaire cette manipulation à chaque fois, j'ai lancé `sudo update-grub` dans le terminal. Cela m'a expliqué comment GRUB construisait sa liste d'options à partir de deux fichiers.

J'ai ouvert le premier fichier avec `nano`, mais il n'y avait rien d'intéressant. J'ai ouvert le second fichier, j'ai trouvé la ligne d'amorçage avec les paramètres, j'ai ajouté `intel_iommu=off`, et j'ai sauvé les modifications avec Ctrl+X, puis Y pour valider.

Enfin, j'ai relancé `sudo update-grub` pour que les modifications soient prises en compte. J'ai redémarré l'ordinateur, et cette fois, tout a fonctionné comme sur des roulettes.

---

**Problème** : oups, pas de Wi-Fi. Aucune petite fenêtre ne m'a demandé à quel réseau me connecter. Comme si le WiFi n'était pas allumé.

Après un peu de lecture sur des forums, j'ai compris qu'il fallait installer les pilotes Broadcom. Mais sans accès à Internet, comment faire ? Heureusement, les pilotes sont sur la clé USB. J'ai ouvert la clé, j'ai cherché un fichier commençant par `bcmwl-kernel-source`, et j'ai trouvé un fichier que j'ai copié sur le bureau.

Depuis une ligne de commande, j'ai tapé `dpkg -i {fichier}`, mais ça n'a pas marché. Le terminal m'a répondu qu'il manquait une dépendance, un truc appelé `broadcam-sta-dkms`. J'ai donc cherché ce fichier sur la clé, je l'ai copié sur le bureau, et j'ai tapé `dpkg -i {fichier}` sur ce nouveau fichier. Même chose, ensuite, pour `libc6`, etc.

J'ai dû installer deux ou trois dépendances comme ça avant de pouvoir enfin installer `bcmwl-kernel-source` sans problème. J'ai redémarré l'ordinateur, et cette fois, le système m'a immédiatement demandé à quel réseau Wi-Fi je voulais me connecter.

---

Et voilà, mon MacBook Air a maintenant une nouvelle vie avec Linux Mint.

J'espère que ce récit vous sera utile si vous décidez de faire de même. Bonne chance !

---

**Problème** : Ah ah, j'en ai oublié un. Après la mise en veille, l'ordinateur ne rédémarrait pas le Wifi. J'ai tapé `iwconfig` pour avoir le petit nom de mon WLAN (ma carte WiFi) et une fois que je l'avais, j'ai tapé `sudo iwconfig {wlp3s0} power off` (remplacez `{wlp3s0}` par le nom de votre propre WLAN) pour désactivé le gestionnaire de mise en veille.

En retapant `iwconfig`, le WLAN affiche désormais "Power Management:off".

---
