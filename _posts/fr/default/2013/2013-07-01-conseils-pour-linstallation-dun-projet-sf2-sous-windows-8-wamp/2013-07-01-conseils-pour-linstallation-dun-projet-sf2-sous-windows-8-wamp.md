---
title: 'Conseils pour l''installation d''un projet Sf2 sous Windows 8 (WAMP)'
tags:
    - Back-End
date: '2013-07-01'
section: default
lang: fr
type: post
---

Sous le pression de [William](http://william-pottier.fr/ "Site personnel de William Pottier"), je me mets à [Symfony](http://symfony.com/ "Site officiel de Symfony"). J'y retrouve toutes les grandes tendances de ce que je connais déjà en ASP.NET MVC, et découvre par la même occasion les outils Sf2 qui offrent aux développeurs PHP ce qui est disponible depuis longtemps dans le monde .NET. Utilisateur convaincu de Windows, j'ai pris quelques minutes pour m'installer mon environnement… et quelques heures pour comprendre certaines erreurs idiotes, donc autant que ça profite à d'autres.

<!-- more -->

Voici les points de vigilance&nbsp;:

1. L'installateur WAMP n'ajoute pas le chemin vers l'utilitaire PHP au PATH. À vous de le faire à la main pour pouvoir utiliser la commande PHP.
2. L'installateur WAMP n'installe pas l'extension PHP APC, mais vous pouvez [la trouver ici](http://dev.freshsite.pl/php-accelerators/apc.html "Extention APC pour PHP") et l'installer vous même dans le réperoire ext de votre dossier d'installation PHP (dans c:wampbinphp)
3. Vous pouvez activer les extensions PHP `apc` et `openssl`, ça ne fera pas de mal
4. Pensez à modifier aussi le `php.ini` situé dans votre dossier d'exécutable PHP `c:\\wamp\\bin\\php`, sinon vous n'aurez pas SSL dans la ligne de commande, par exemple
5. Enfin, attention aux chemins de votre `composer.json`. En effet, un "bin/toto" ne produira pas d'erreur sur Linux, mais devra être remplacer par un "bin\\toto" sous Windows sous peine d'avoir un bien joli message d'erreur expliquant que "bin" n'est pas une commande reconnue
Enfin, si vous avez un problème avec la fonction symlink(), vérifier votre version de PHP.

En effet, de nombreux forums répondront tout simplement&nbsp;: "t'es sous Windows, il n'y a pas de liens symboliques", ce qui est faux depuis Windows Vista (qui introduit le [lien symbolique dans NTFS](http://en.wikipedia.org/wiki/NTFS_symbolic_link "NTFS Symbolic Link on Wikipedia"))  et ne faisait pas avancer mon problème. D'autres parlaient de faire tourner l'exécutable PHP en mode de compatibilité XP. Cela ne fonctionnait pas davantage et pour cause, en réalité, c'est PHP 5.3.0 qui régresse sur cette fonction, et [un bug est d'ailleurs saisi](https://bugs.php.net/bug.php?id=48975 "Bug Symlink sur PHP 5.3.0").

J'ai donc mis à jour PHP en version 5.4.16 et le problème s'est résolu de lui-même. Windows n'avait rien à se reprocher ;)
