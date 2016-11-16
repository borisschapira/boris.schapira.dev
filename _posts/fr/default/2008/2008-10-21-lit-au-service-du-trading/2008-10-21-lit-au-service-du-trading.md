---
title: 'L''IT au service du Trading'
tags:
    - Finance
    - Technologie
    - Emploi
    - Nexeo
date: '2008-10-21'
section: default
lang: fr
type: post
---

La **salle de marché** s'excite. La courbe de taux se retourne et le Trading a besoin d'**outils** pour prendre les bonnes **décisions**. Appels téléphonique aux Commandos, envois de mails ou cris à travers la salle&nbsp;: nous sommes immédiatement au courant. En croisant divers référentiels, nous extrayons la liste d'**opérations** concernées, puis lançons nos applicatifs et fournissons quelques minutes plus tard les indicateurs désirés.

Cela a l'air simple et la plupart des utilisateurs ne se doutent pas de la **complexité qui réside dans ce processus**. D'abord, l'information d'origine. Elle provient elle-même d'une application reliée à des **flux d'information** sur les taux d'intérêt influencés en **temps réel** par l'offre et la demande.

Nous traduisons la demande en briques logiques&nbsp;: **périmètre** de positions issu du croisement de divers référentiels, **monnaies** concernées, type d'**analyse** et paramètres dédiés, **stock** considéré pour la prise en compte des fixings, date de **valorisation**, heure de modification des produits… que nous envoyons à une application chargée du calcul.

Après avoir chargé les **paramètres de marché**, l'application mobilise un parc numérique phénoménal pouvant contenir **plusieurs centaines de CPU**. Les tâches de calcul sont atomisées puis réparties sur les différents cœurs. Chaque ensemble cohérent d'atome de calculs terminés est aggloméré en une **information fonctionnellement utilisable** stockée immédiatement en **base de données**.

Une fois l'ensemble des calculs finis, les Traders en disposent directement dans leurs tableurs. En trois clics, l'**add-in VBA** développé pour eux se connecte à des **composants sécurisés** qui établissent un lien avec la **base de données**. Sans qu'ils ne la voient, l'information est formatée dans un ensemble de **vues** avant d'être rapatriée dans un recordset lui-même déroulé pour construire un impressionnant **tableau dynamique croisé**.

L'ensemble a peut-être pris 30 minutes. À peine le temps de commencer à envisager les résultats, que le Trader passe déjà à autre chose. Il ne se doute pas des **connaissances** et des **savoir-faire** qui ont permis d'aboutir au résultat et je ne lui dirais pas. Car un bon magicien ne révèle jamais ses tours…
