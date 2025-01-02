---
title: 'La Performance Web, pourquoi et surtout, comment ?'
subtitle: un sujet pour tous les gens du Web qui veulent que leurs sites aillent plus vite
description: >-
    Avec le déplacement d'un certain nombre d'usages vers des périphérique nomades (téléphones, montres, appareils connectés), la fluidité d'utilisation devient une problématique critique. La performance Web est une des composantes de cette fluidité. Nous verrons ensemble comment l'optimiser. Ceci étant, suivant l’organisation et la culture de votre entreprise, conserver ce gain dans le temps peut être délicat et tenir davantage de la conduite du changement que de l’identification et l'implémentation d'optimisations.


last_date: 2012-05-25
events:
    - name: 'Sud Web 2012'
      url: https://sudweb.fr/2012/
      date: 2012-05-25
last_modified_at: 2012-05-25
---

{% include media/vimeo.html.liquid id="56931059" title="Mettre en place une strat&eacute;gie de performance web, Boris Shapira - Sud Web 2012" %}

<em class="emphasis">**Note&nbsp;:** l'article ci-dessous a été publié sur [Clever Age](https://www.clever-age.com/fr/) dans [Mettre en place une stratégie de Performance Web](https://blog.clever-age.com/fr/2012/11/16/comment-mettre-en-place-une-strategie-de-performance-web/) plusieurs mois après la conférence. Son contenu est donc plus élaboré.</em>

### Avertissement

Avant d’aller plus loin, explicitons deux non-dits.

Le premier est assez simple : on ne peut mettre en place une stratégie d’amélioration de la performance Web que dans une entreprise qui est consciente de ses avantages. Et avant d’y arriver, il faut souvent convaincre de l’intérêt de la performance Web. Cela pourrait être le sujet d’un article à part entière, mais pour l’instant partons du principe que l’entreprise est sensible à l’argument.

Le deuxième non-dit est que la performance Web n’est pas qu’un développement ou un ensemble de développements. Vous pouvez auditer un site, conseiller des corrections ou proposer de nouvelles implémentations, et la performance s’améliorera temporairement. C’est une première étape essentielle. Mais si le site ciblé est vivant, s’il évolue, alors la performance Web est plus compliquée à atteindre car elle devient un enjeu qualitatif à chaque livraison, voire même à chaque contribution (côté Back ou Front).

Maintenant que nous sommes d’accord sur tout ça, comment mettre en place une stratégie de performance Web ? Lentement, et par étapes.

### Niveau 0 - la compréhension

La première étape consiste à comprendre ce que l’on entend par Performance Web, car la plupart du temps, cela consiste à répondre à deux questions : « à quelle vitesse ma page s’affiche-t-elle ? » et « comment cela modifie-t-il l’expérience de mes visiteurs ? ». Or, il n’y a pas de bonnes réponses à ces questions, il n’y a que des indicateurs qui permettent de se faire une idée. Et il est parfois difficile de s’y retrouver.

Ces indicateurs peuvent être de deux types : orientés métier ou purement techniques. Suivant le contexte, il vous faudra définir le juste assemblage. Côté métier par exemple, pour un site e-commerce, la participation d’une page à la génération de revenus est un indicateur incontournable. En revanche, sur un portail collaboratif, il s’agira de toutes autres mesures, comme le nombre de contributions par participant. Au niveau des indicateurs techniques, il y a aussi le choix comme nous l’avions vu [dans cet autre article](https://blog.clever-age.com/fr/2012/07/31/webperf-a-quelle-vitesse-ma-page-se-charge-t-elle/). À vous de faire votre sélection.

Souvent, dans cette première phase, vous n’avez pas l’œil perpétuellement rivé sur les indicateurs, sinon vous ne feriez pas grand-chose de concret. À la place, vous faites une extraction des mesures toutes les semaines ou tous les mois, suivant la criticité, souvent manuellement. Il ne s’agit pas de perdre du temps à sortir des métriques, mais bien d’améliorer rapidement les choses. Pas la peine de réinventer la roue, vous pouvez utiliser des outils publics, souvent gratuits et en ligne comme :

- pour l’analyse de Waterfall : [WebPageTest.org](https://www.webpagetest.org/), [Pingdom Tools](https://tools.pingdom.com/fpt/)
- pour le respect des bonnes pratiques : [Dareboost](https://www.dareboost.com/ 'Analyse de site Web, Test de Performance et Audit qualité - DareBoost'), [Page Speed Online](https://developers.google.com/speed/pagespeed/insights/), [YSlow](https://developer.yahoo.com/yslow/)

### Niveau 1 - la réaction

Une fois la définition de vos indicateurs terminée, vous êtes normalement capable de mesurer les gains et les pertes dans le temps. Malheureusement, si vous êtes chargé de mettre en place cette stratégie, c’est qu’elle n’existe pas déjà et que donc l’entreprise n’a probablement aucune culture de la Performance Web. Vous êtes donc en mesure de trouver des problèmes, mais êtes probablement le seul à chercher à les résoudre. Et en plus de ça, on vous demande de faire vos preuves au milieu d’un milieu _a priori_ hostile car mal informé.

C’est le moment privilégié des « Quick Win », ces optimisations rapides et efficaces qui permettent d’obtenir des résultats gratifiants au prix de peu de développement et de Tests de Non-Régression. Il s’agit souvent de solutions purement techniques, recommandées par des outils d’analyse automatique et dont la résolution ne remet pas en cause l’existence ou la dynamique de l’entreprise sur Internet. Profitez de la relative simplicité de ces premières optimisations pour généraliser l’usage de tests A/B. Cela vous permettra de démontrer le gain issu de la performance en comparant une version du site sans optimisation à une autre en bénéficiant.

Mais tout n’est pas rose : grâce aux indicateurs que vous avez mis en place, vous détectez des problèmes qui passaient inaperçus jusqu’à présent, dans la jungle des autres problèmes. Et dans la pure logique "[Shooting The Messenger](https://en.wikipedia.org/wiki/Shooting_the_messenger)", vous serez souvent rendu responsable de ne pas avoir déjà corrigé tous ces problèmes. La situation, qui semble assez positive, peut rapidement se retourner contre vous si vous vous retrouvez submergé par la tâche, ou si ne vous savez pas "vendre la performance" suffisamment bien, le temps que les premiers gains parlent d’eux-même.

C’est la phase de montée en compétence. La vôtre, au sein du SI de l’entreprise que vous apprenez à comprendre, mais aussi celle des personnes qui vous côtoient dans l’entreprise, qui vont petit-à-petit acquérir une certaine culture de la performance Web. Accrochez-vous, si on vous bouscule un peu, c’est que ça rentre.

### Niveau 2 - Savoir et Faire

A ce niveau, vous avez suffisamment d’expérience sur le SI de l’entreprise pour connaitre les processus du(des) site(s) ciblé(s), bien évidemment, mais également ceux du SI et du métier/commerce. Vous connaissez les enjeux, êtes capable de trouver rapidement où sont les problèmes et chiffrer leur résolution. Vous êtes dans votre zone de confort. Vous savez comment améliorer le site, vous êtes un référent sur la Production car vous réalisez des mesures régulières et des analyses efficaces.

Problème : dans la mesure où vous analysez la production, vous arrivez toujours trop tard. Il est grand temps d’anticiper en réalisant des tests de performance sur les environnements internes, avant que le code ne soit livré. L’occasion, peut-être, de déployer une [instance privée de WebPageTest.org](https://sites.google.com/a/webpagetest.org/docs/private-instances) et de passer par l’API pour lancer certains tests.

C’est une phase où la difficulté est organisationnelle, car suivant la taille du site ou sa volumétrie, vos relevés de performance "à la main" sur plusieurs environnements commencent à être coûteux en temps…

### Niveau 3 - l’automatisation

Au bout d’un certain temps, vous surveillez tellement d’environnements que même en rôdant vos processus au maximum, vous finissez par passer moins de temps à résoudre les problèmes qu’à mesurer leur impact. Il est temps d’agir. Lorsque la mesure à la demande n’est plus envisageable, il faut automatiser.

Plusieurs solutions sont possibles : la première, la plus évidente, est d’automatiser l’utilisation des mêmes outils que précédemment. Plutôt que de lancer vos analyses WebPageTest à la main, vous passez désormais par leur [API REST](https://sites.google.com/a/webpagetest.org/docs/advanced-features/webpagetest-restful-apis), et vous pouvez également imaginer le téléchargement et traitement des résultats HAR applicativement, pour générer une levée d’alerte automatique. Vous pouvez aussi déployer votre propre instance de WebPageTest, mais alors vous ne disposerez que d'une sonde (à multiplier suivant vos besoins, et les coûts de maintenance qui en découlent). Si vous n'avez pas envie de déployer une usine à gaz, [Dareboost](https://www.dareboost.com/ 'Analyse de site Web, Test de Performance et Audit qualité - DareBoost') fournira le même service en mode <abbr title="Software as a Service" lang="en">SaaS</abbr>.

Rien ne vous empêche cependant de réaliser l’investissement nécessaire à une véritable amélioration de votre trousse à outils en basculant vers la mesure de l’expérience réelle des utilisateurs. Il peut s’agir de Peer Testing, c’est-à-dire de mesurer la performance de votre site sur une population cible (à la façon d’un Focus Group), ou de mesures réalisées en JavaScript et renvoyées à vos serveurs ou à un service externe.

On peut citer, dans ce domaine : [Gomez RUM](https://www.compuware.com/en_us/application-performance-management/products/user-experience-management/real-user-monitoring-enterprise.html), [Google Analytics](https://analytics.google.com/analytics/web/),[Boomerang](https://www.lognormal.com/boomerang/doc/), [New Relic RUM](https://newrelic.com/browser-monitoring), [Episodes 2](https://stevesouders.com/episodes2/)…

L’avantage est évident : vous n’êtes plus dans un contexte de test provoqué, mais bien dans une visualisation de l’expérience réelle de vos visiteurs, qui ont probablement une façon bien à eux d’utiliser le site, différente de la vôtre. Vos mesures sont plus fiables et la corrélation avec les indicateurs métier n’en est que meilleure. Vous vous rapprochez des populations métier/commerce, car vous parlez désormais le même langage : celui qui s’articule non-pas autour d’une notion technique, mais autour du client.

### Niveau 4 - l’analyse en amont

Vous arrivez à un moment où vous ne pouvez plus optimiser en vous concentrant uniquement sur l’aspect technique et où vous devez prendre en compte l’impact commercial pour prioriser vos développements, voire définir les évolutions du site en fonction de ce critère. D’intervenant de fin de cycle, vous pouvez alors basculer vers la définition des projets avant même leur mise en chantier. Vous participez aux définitions des nouvelles fonctionnalités et pouvez conseiller leur élaboration ou lever les alertes quand c’est nécessaire.

Mais comme un grand pouvoir implique de grandes responsabilités, il est désormais capital que vous portiez vos tests automatisés sur l’ensemble de la chaîne de développement de manière à pouvoir valider que les développements suivent bien vos préconisations et n’impactent pas négativement les indicateurs de performance, avant même la mise en Production. À vous les joies du recoupement de données ou de l’intégration de votre tableau de bord à l’utilitaire de compilation/livraison. L’objectif est de pouvoir dire, lors d’une dégradation de performance, quelle contribution est responsable.

### Niveau 5 - la constance

Vous y êtes, vous contrôlez la performance Web du ou des sites de l’entreprise. Votre vision de la performance est bien sûr troublée par des imprévus mineurs mais vous êtes globalement maître des temps de réponse du site. Il s’agit à cette étape de pérenniser le travail effectué : réalisation de tableaux de bord contenant des indicateurs mis-à-jour en temps réel sur les différents environnements mesurés, analyse de l’impact commercial avant la livraison, définition de refontes alliant métier et performance… etc.

Et si vous avez encore 5 minutes, n’hésitez pas à rejoindre la communauté des Web Performers français qui s’articule aujourd’hui autour du projet d’analyse des [bonnes pratiques WebPerf OpQuast](https://checklists.opquast.com/webperf/workshops/status/discussion). On vous attends !
