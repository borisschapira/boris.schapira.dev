---
title: "Le statique, c'est fantastique"
subtitle: plus qu'une mode, un nouveau paradigme
last_modified_at: 2019-04-18
---

Le Web est aujourd'hui majoritairement composé de sites Web dont les pages sont
fabriquées à la demande. Chaque fois qu'un·e internaute demande une page à un
serveur, le serveur interroge une ou des bases de données (SQL, MySQL, MariaDb,
MongoDb…) par le biais de langages serveurs (PHP, Java, Python, Ruby, C#…) et
répond la page.

Cela pose divers problèmes de sécurité (que se passe-t-il si une personne mal
intentionnée modifie la demande pour injecter des informations de la base ?), de
performance (car il faut générer la page à chaque requête), de maintenance
opérationelle (comme une nouvelle livraison implique de changer à la fois le
code et la base, comment revenir en arrière ? Sous quels délais ?)…

Pourtant, tout ça n'a rien à voir avec HTML, JS et CSS, qui sont les fondements
du Web.

Depuis quelques années, une nouvelle tendance émerge, qui consiste à ne garder
que ces trois langages dans la relation client·e-serveur. Le reste, on le
déporte en amont, au moment du déploiement. Sur ce site, par exemple, les pages
sont stockées comme elles sont servies : il n'y a aucune requête de BDD, aucun
langage intelligent côté serveur. Mais du coup, comment ça marche ?

-   en terme de contribution, s'il n'y a pas d'interface ? Ou alors on peut en
    avoir quand même ? Comment ?
-   en terme d'interaction, s'il n'y a pas de langage et de base, on fait
    comment pour, par exemple, les commentaires ?
-   en terme de maintenance opérationnelle, est-ce que c'est aussi souple ?
    Est-ce que ça présente des avantages et lesquels ?
-   en terme de gestion de projet, est-ce que ça ne perturbe pas les équipes ?
    Quels sont les écueils à éviter ?
-   à quels besoin cela ne répond-t-il **pas** ?

Si un jour je présente ce sujet en conférence, je ne m'appuierai pas uniquement
sur mon expérience, mais également sur celle de toute la communauté
<Jamstatic.fr> avec laquelle nous parlons de statique et de JAMStack presque
tous les jours.

## Lire, à ce propos :

-   [Meilleure UX, meilleures performances : la nouvelle donne du web statique](/2018/02/site-statique-performance-web/)
