---
title: 'GitHub, l’Open-Source qui conquiert le monde'
tags:
    - 'Transformation numérique'
    - 'Open Source'
canonical: 'https://blog.clever-age.com/fr/2013/11/14/github-l-open-source-qui-conquiert-le-monde/'
canonical_title: 'le blog de Clever Age'
---

Difficile pour un développeur, en 2013, de ne pas savoir se servir de GitHub. Bien que jeune, la plate-forme d’hébergement de projets logiciels est probablement aujourd’hui le plus gros dépôt collaboratif du monde avec plus de trois millions d’utilisateurs et six millions de dépôts.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Ce qui avait commencé, en octobre 2007, comme un projet personnel, sans intention commerciale, est devenu aujourd’hui un pilier central de la collaboration logicielle et permet, chaque jour, à des milliers de développeurs de travailler ensemble à travers le monde.

{% capture img_alt %}Une carte naïve du monde, avec des zones accentuées{% endcapture %} {% capture img_caption %}Projet de visualisation des données de la Timeline publique de GitHub, par David Fischer.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2013-11-14/1.png"
alt=img_alt
caption=img_caption
%}

Si vous ou votre organisation ne partagez pas de code sur GitHub, vous devriez. Et bientôt, les entreprises de production de logiciels ne seront plus seules…

## GitHub, de l’outil pour développeurs à la collaboration productive

GitHub est né de la volonté commune de Tom Preston-Werner et Chris Wanstrath de résoudre la problématique de la collaboration décentralisée dans le cadre du développement. Un premier pas technique avait déjà été réalisé avec Git, un système de gestion de code source développé par Linus Torvalds, le créateur de Linux. Git est un très bon outil de collaboration décentralisée, mais il ne suffit pas à couvrir le périmètre fonctionnel de la collaboration sur un projet. Il manquait à Git une plate-forme, GitHub est venu combler ce manque.

Il est désormais possible, pour n’importe quel développeur de créer un dépôt, d’y héberger un projet, de le documenter sous la forme d’un site Web [GitHub.io](https://pages.github.com/ "GitHub.io, plate-forme d'hébergement associée aux projets GitHub") et de le proposer à la Communauté. Il peut lui-même s’approprier d’autres projets, y corriger des erreurs ou y apporter son savoir-faire puis proposer ses corrections au créateur du projet d’origine… ou non. GitHub permet et facilite ces interactions, tout en proposant les fonctionnalités d’un réseau social, comme la possibilité de personnaliser son profil ou celle de s’inscrire à l’activité d’un autre utilisateur.

{% capture img_alt %}Un dessin représentant une chimère chat/poulpe, déguisée en développeur{% endcapture %} {% capture img_caption %}&laquo; The CoderCat &raquo;, un des très nombreux détournements de la mascotte de GitHub, l’Octocat, par Cameron McEfee.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2013-11-14/2.jpg"
alt=img_alt
caption=img_caption
%}

Reposant sur sa simplicité d’usage, tout en offrant une qualité de service et un contrôle des données de premier ordre, la plate-forme a connu un succès fulgurant. Arrivé au million d’utilisateurs en trois ans environ, GitHub en héberge désormais plus de trois millions et met moins de cinq mois à acquérir chaque million d’utilisateurs supplémentaire.

Comment l’expliquer ? La force de GitHub a été de proposer une plate-forme centralisée pour ces tâches qui, par définition, se produisent de pair à pair (en se basant sur Git) tout en offrant une interface sympathique (là où SourceForge est un peu poussiéreux) et des fonctionnalités qui complétaient l’offre classique (comme Gist, ou GitHub.io). Et tout cela en présentant des conditions d’utilisation très claires qui laissent la totale propriété du contenu produit à leurs auteurs, comme l'indiquent les [_Terms Of Service_](https://help.github.com/articles/github-terms-of-service/ 'GitHub Terms of Service') :

> We claim no intellectual property rights over the material you provide to the Service. Your profile and materials uploaded remain yours. However, by setting your pages to be viewed publicly, you agree to allow others to view your Content. By setting your repositories to be viewed publicly, you agree to allow others to view and fork your repositories.

A cela s’ajoute qu’il est plus motivant de travailler à plusieurs que seul : les dépôts des comptes gratuits étant publics, ils sont autant d’invitation à venir lire la production de camarades ou de collègues et leur proposer des évolutions. Autre conséquence : une grande majorité des statistiques des personnes, des organismes ou des entreprises présentes sur GitHub sont publiques, permettant à GitHub de devenir un vrai CV d’aptitude auprès des communautés concernées.

Mais si GitHub remporte autant de succès, c’est aussi qu’il intervient au bon moment : ce second âge d’or de l’Open Source. Ces dernières années ont vu à la fois naître des projets de qualité qui sont toujours en cours de développement ([Android](https://github.com/android 'Profil GitHub pour le projet Android'), [Hadoop](https://github.com/apache/hadoop-common 'Dépôt du projet Hadoop Common'), [MongoDb](https://github.com/mongodb/mongo 'Dépôt du projet MongoDB'), …) mais aussi une grande évolution des mentalités face à l’Open Source, notamment en entreprise où l’on remarque une disparition progressive, sinon totale, de l’opposition des plus traditionnels. Certains employeurs encouragent même leurs salariés à contribuer sur des projets, quand ce ne sont pas des villes (comme [Chicago](https://github.com/Chicago/ 'Profil GitHub de la ville de Chicago')), de grandes institutions du savoir comme la [NASA](https://github.com/nasa 'Profil GitHub de la NASA') ou même des gouvernements (comme le [Royaume-Uni](https://github.com/alphagov 'Profil GitHub du Royaume-Uni') ou [les États-Unis](https://github.com/unitedstates 'Profil GitHub des États-Unis')).

{% capture img_alt %}Un dessin représentant une chimère chat/poulpe, pasticheant la campagne &laquo; Yes We Can &raquo; de Barack Obama{% endcapture %} {% capture img_caption %}&laquo; The Baraktocat &raquo;, par Cameron McEfee{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2013-11-14/3.jpg"
alt=img_alt
caption=img_caption
%}

L’inverse se produit également : des entreprises, [comme OVH](http://www.ovh.com/fr/a1136.interview-github-octave-klaba-ovh 'Interview d'), refusent que leurs salariés participent à des projets sur GitHub. Pourquoi ? Tout simplement parce qu’elles reconnaissent la capacité de GitHub à valoriser un profil et craignent la fuite des cerveaux. Une opposition en forme de succès pour la plate-forme.

## Un business-model éprouvé

Pourtant, il est évident que GitHub ne s’adresse pas qu’aux particuliers. Ces derniers représentent la grande majorité des comptes et peuvent utiliser les fonctionnalités collaboratives de la plate-forme gratuitement s’ils le souhaitent. Mais s’ils le préfèrent, ils peuvent souscrire un abonnement leur permettant de développer à l’abri, sur des dépôts privés, des portions de code propriétaire par exemple. Mais le cœur du Business Model de GitHub repose sur les entreprises.

Celles qui souhaitent gérer de multiples dépôts, avoir un seul tableau de bord ou ajouter des collaborateurs en lecture souscrivent un forfait "Organization". Mais ce forfait ne satisfera pas les plus grands acteurs pour qui il est impossible de partager leur code sur une plate-forme externe pour des problèmes de gouvernance ou de sécurité… Ces entreprises souscrivent donc un abonnement leur permettant d’héberger en interne une instance de la plate-forme, à la manière de Google Search Appliance pour la recherche, contre ce qui pourrait ressembler à plusieurs millions de dollars par an (les chiffres ne sont pas publics). Microsoft, VMWare, Walmart ont déjà été séduits.

## GitHub, ou l’Open Source appliqué au monde

La problématique de la production distribuée d’un contenu au sein d’un projet n’est pas liée purement au monde du développement logiciel. Dans d’autres domaines, la production puis la mise en commun de contenus écrits à plusieurs mains relèvent du défi, car la culture et l’outillage Open Source n’existe pas. Et si une plate-forme comme GitHub pouvait solutionner ce problème ?

Certains, [comme Loren](https://www.penflip.com/ "Article de Loren sur la possibilité d'étendre GitHub pour les écrivains"), ont déjà essayé d’imaginer l’utilisation de GitHub pour l’écriture :

- L’auteur principal créé la structure basique d’un document et quelques éléments de base (sur la branche par défaut);
- Chaque collaborateur voulant contribuer peut démarrer en un clic la contribution sans se préoccuper de gêner les autres contributeurs (en réalisant un _fork_);
- Une fois cette contribution terminée, son auteur propose à l’auteur original de valider sa contribution (via un _pull request_);
- Si la contribution est validée, elle peut rejoindre le document. Sinon, les raisons du refus sont notifiées à son auteur, de manière à ce qu’il puisse réaliser les corrections nécessaires avant une nouvelle contribution.

Ce processus, classique, est entièrement supporté par la plate-forme, mais elle n'est pas forcément adaptée en termes de design. L'idée a cependant servi de support à la création de [Penflip](https://www.penflip.com/ 'Penflip, plate-forme d')… et à d'autres initiatives, plus orientées vers le design visuel ou industriel, la musique. C'est par exemple le cas de [Splice](https://splice.com/ 'Splice, plate-forme de production musicale collaborative'), qui devrait ouvrir ses portes prochainement. Y retrouvera-t-on les grands de l'Electro française (et mondiale) ?

{% capture img_alt %}Un dessin représentant une chimère chat/poulpe, déguisée en un des Daft Punk{% endcapture %} {% capture img_caption %}&laquo; The Daftpunktocat (Thomas) &raquo;, par James Kang{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2013-11-14/4.gif"
alt=img_alt
caption=img_caption
%}

## Quelques liens, pour en savoir plus

- [[ReadWrite] GitHub For Beginners: Don't Get Scared, Get Started](https://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1 '[ReadWrite] GitHub For Beginners: Don')
- [[Wired] The GitHub Revolution: Why We’re All in Open Source Now](http://www.wired.com/2013/03/github/ '[Wired] The GitHub Revolution: Why We’re All in Open Source Now')
- [[Radar O'Reilly] GitHub gains new prominence as the use of open source within governments grows](http://radar.oreilly.com/2013/03/github-government-bureaucat-open-source.html '[Radar O')
- [[NY Times Bits Blog] Dreams of ‘Open’ Everything](http://bits.blogs.nytimes.com/2012/12/28/github-has-big-dreams-for-open-source-software-and-more/?_r=5 '[NY Times Bits Blog] Dreams of ‘Open’ Everything')
- [[The Next Web] Code-sharing site Github turns five and hits 3.5 million users, 6 million repositories](http://thenextweb.com/insider/2013/04/11/code-sharing-site-github-turns-five-and-hits-3-5-million-users-6-million-repositories/ '[The Next Web] Code-sharing site Github turns five and hits 3.5 million users, 6 million repositories')
- [[Inc] 2 Reasons to Keep an Eye on GitHub](http://www.inc.com/magazine/201303/will-bourne/2-reasons-to-keep-an-eye-on-github_pagen_2.html '[Inc] 2 Reasons to Keep an Eye on GitHub')
