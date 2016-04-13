---
layout: post
title: "L'IT au service du Trading"
date: 2008-10-21 20:53:42
tags:
  - Finance
  - Technologie
  - Emploi
  - Nexeo
---

[![Société Générale - Damien Roue](//flickr.com/photos/damienroue/2618107379/)](http://flickr.com/photos/damienroue/2618107379/)

La **salle de marché** s'excite. La courbe de taux se retourne et le Trading a besoin d'**outils** pour prendre les bonnes **décisions**. Appels téléphonique aux Commandos, envois de mails ou cris à travers la salle&nbsp;: nous sommes immédiatement au courant. En croisant divers référentiels, nous extrayons la liste d'**opérations** concernées, puis lançons nos applicatifs et fournissons quelques minutes plus tard les indicateurs désirés.

Cela a l'air simple et la plupart des utilisateurs ne se doutent pas de la **complexité qui réside dans ce processus**. D'abord, l'information d'origine. Elle provient elle-même d'une application reliée à des **flux d'information** sur les taux d'intérêt influencés en **temps réel** par l'offre et la demande.

Nous traduisons la demande en briques logiques&nbsp;: **périmètre** de positions issu du croisement de divers référentiels, **monnaies** concernées, type d'**analyse** et paramètres dédiés, **stock** considéré pour la prise en compte des fixings, date de **valorisation**, heure de modification des produits… que nous envoyons à une application chargée du calcul.

[![Ferme de serveurs - JOHNIE W@LKER](https://login.yahoo.com/config/login?.src=flickrsignin&amp;.pc=8190&amp;.scrumb=0&amp;.pd=c%3DH6T9XcS72e4mRnW3NpTAiU8ZkA--&amp;.intl=fr&amp;.lang=fr&amp;mg=1&amp;.done=https%3A%2F%2Flogin.yahoo.com%2Fconfig%2Fvalidate%3F.src%3Dflickrsignin%26.pc%3D8190%26.scrumb%3D0%26.pd%3Dc%253DJvVF95K62e6PzdPu7MBv2V8-%26.intl%3Dfr%26.done%3Dhttps%253A%252F%252Fwww.flickr.com%252Fsignin%252Fyahoo%252F%253Fredir%253D%25252Fphotos%25252Fjohnniewalker%25252F359440369%25252F)](https://login.yahoo.com/config/login?.src=flickrsignin&amp;.pc=8190&amp;.scrumb=0&amp;.pd=c%3DH6T9XcS72e4mRnW3NpTAiU8ZkA--&amp;.intl=fr&amp;.lang=fr&amp;mg=1&amp;.done=https%3A%2F%2Flogin.yahoo.com%2Fconfig%2Fvalidate%3F.src%3Dflickrsignin%26.pc%3D8190%26.scrumb%3D0%26.pd%3Dc%253DJvVF95K62e6PzdPu7MBv2V8-%26.intl%3Dfr%26.done%3Dhttps%253A%252F%252Fwww.flickr.com%252Fsignin%252Fyahoo%252F%253Fredir%253D%25252Fphotos%25252Fjohnniewalker%25252F359440369%25252F)

Après avoir chargé les **paramètres de marché**, l'application mobilise un parc numérique phénoménal pouvant contenir **plusieurs centaines de CPU**. Les tâches de calcul sont atomisées puis réparties sur les différents cœurs. Chaque ensemble cohérent d'atome de calculs terminés est aggloméré en une **information fonctionnellement utilisable** stockée immédiatement en **base de données**.

Une fois l'ensemble des calculs finis, les Traders en disposent directement dans leurs tableurs. En trois clics, l'**add-in VBA** développé pour eux se connecte à des **composants sécurisés** qui établissent un lien avec la **base de données**. Sans qu'ils ne la voient, l'information est formatée dans un ensemble de **vues** avant d'être rapatriée dans un recordset lui-même déroulé pour construire un impressionnant **tableau dynamique croisé**.

L'ensemble a peut-être pris 30 minutes. À peine le temps de commencer à envisager les résultats, que le Trader passe déjà à autre chose. Il ne se doute pas des **connaissances** et des **savoir-faire** qui ont permis d'aboutir au résultat et je ne lui dirais pas. Car un bon magicien ne révèle jamais ses tours…