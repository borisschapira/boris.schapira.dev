---
title: 'De Windows à Mac'
tags:
    - Outils
    - Productivité
---

J'ai récemment migré mon environnement de travail de Windows à Mac OS X. De nombreux développeurs se sont empressés de me rappeler qu'un Mac est une machine autrement plus productive qu'un PC alors que les raisons de mon changement sont bien différentes.

<!-- more -->

## Ok, comparons

Pour être productif, j'ai besoin d'être documenté et expérimenté sur le système que j'utilise. Windows et Mac sont bien documentés à la fois par leurs éditeurs mais aussi par leurs communautés d'utilisateurs. Je n'ai jamais rencontré de problème sous Windows et ma transition sous Mac se passe très bien pour les mêmes raisons.

Pour être productif, j'ai besoin d'outils. 95 % de mes usages sont liés à Chrome et à mes comptes Google (j'utiliserai volontiers Firefox mais [il ne correspond pas à mes besoins](/notes/2014-11-utilisabilite-logiciel-libre-firefox/)) : il m'a fallu très peu de temps pour les récupérer sous Mac.

Les éditeurs que j'utilise sous Windows sont disponibles partout (_Sublime Text_ ou _Atom_, _PHPStorm_), ma gestion de source repose sur _git_ (pour lequel j'utilise sous Windows la ligne de commande de [_Desktop Github_](https://desktop.github.com/)) et quelques scripts PowerShell me permettaient d'avoir à la fois [un _prompt_ qui déchire](http://www.git-attitude.fr/2013/05/22/prompt-git-qui-dechire/) et un gestionnaire d'accès direct à vous faire oublier _cd_ ([Jump Location](https://github.com/tkellogg/Jump-Location), un portage PowerShell du [_autojump_ de William Ting](https://github.com/wting/autojump), installé également sur mon Mac). Donc je n'ai jamais eu l'impression de passer plus de temps à naviguer dans mes fenêtres que mes collègues.

Enfin, après avoir essayé [_Chocolatey_](https://chocolatey.org/) et [_OneGet_](https://github.com/OneGet/oneget), j'ai découvert il y a quelques années [_node_](https://nodejs.org/). En plus de me permettre de continuer à développer dans un langage du Web (JavaScript, bien sûr), _node_ a l'avantage d'ête multi-plateforme. J'ai donc pu reprendre l'ensemble des outils de mon quotidien en quelques minutes. Et pour tout ce que _node_ ne supporte pas, [_homebrew_](http://brew.sh/) est venu à ma rescousse. Bref, sur le terrain de la gestion des dépendances, l'OS importe finalement peu.

L'interface du Mac est agréable et on sent bien la finition quand on observe certains petits détails mais paradoxalement, certaines choses sont compliquées à comprendre ou tout simplement impossibles (avoir des sens de défilement différents sur le <span lang="en">trackpad</span> et la souris, supprimer l'animation lors du passage en plein écran). La comparaison avec Windows, notamment la version 10 sortie récemment et déployée sur l'ordinateur de la maison, n'est pas vraiment à l'avantage du système de Tim Cook. Et je n'ai pas encore parlé de la calamiteuse gestion des fenêtres qui oblige à installer une application tierce ([Spectacle](http://spectacleapp.com/) pour moi) là où le système devrait être mieux pensé et permettre de docker les contenus à droite ou à gauche. Donc si je devais être vraiment critique avec les deux systèmes, je pense que Windows l'emporterait.

## Alors, pourquoi avoir changé de machine ?

Pour une question de lecture/écriture disque, tout simplement. Mes processus de développements Symfony impliquent l'utilisation de _vagrant_, ce qui me permet d'homogénéiser l'environnement de développement dans mon équipe, tout en permettant à chacun de développer sur des fichiers locaux et l'IDE de son choix. Seulement voilà, comme déjà expliqué dans un précédent article : [Windows n'est pas très performant dans ce cas d'utilisation, en raison de l'absence de support NFS](/notes/2014-06-vagrant-windows-et-nfs/).

J'ai bien contribué au plugin [_vagrant winnfsd_](https://github.com/winnfsd/vagrant-winnfsd), qui ajoute tant bien que mal le support NFS à _vagrant_ mais quand on manipule des frameworks qui reposent sur de nombreux accès fichiers comme Symfony, le dixième de seconde de latence à l'accès peut rapidement se transformer en dix secondes d'écart sur le chargement d'une page.

L'âge de mon ancien PC rendait envisageable son renouvellement par une machine disposant de SSD et comme j'ai à ma portée des collègues sous Mac, je me suis dit que j'allais aligner ma configuration avec la leur pour réduire le champ d'adaptation des projets, par exemple le _Vagrantfile_. Mais je n'ai rien contre Windows, bien au contraire.
