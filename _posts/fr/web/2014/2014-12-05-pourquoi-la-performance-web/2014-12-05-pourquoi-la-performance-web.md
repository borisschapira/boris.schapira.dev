---
title: 'Pourquoi la performance Web ?'
date: '2014-12-05'
published: false
lang: fr
type: post
tags:
    - 'Performance Web'
categories:
    - web
publishDate: '2014-12-05'
locale: fr_FR
---

## Un goût pour la rapidité

Chaque utilisateur a sa propre vision de ce qu’est une page lente… mais cette idée évolue avec le temps. Au début des années 2000, on considérait une page lente au delà de 20&#8239;s de chargement. En 2005, la perception avait évolué vers 10&#8239;s pour atteindre 2&#8239;s en 2010. En 2014, des utilisateurs perçoivent négativement les temps de réponse de certains services dès 400&#8239;ms d’attente. 

Ce goût pour la rapidité s’explique de manière très scientifique. Ivan Pavlov, célèbre psychologue ayant vécu de 1849 à 1936 et ayant reçu le prix Nobel de psychologie en 1904, a montré en 1889 que si l'on habituait un chien à accompagner sa nourriture d'un stimuli, ce stimuli pouvait à la longue déclencher la salivation de l'animal, sans présence de nourriture. Ce phénomène est aujourd'hui appelé **Conditionnement Classique**. 

En 1896, Wolfram Schultz, de l'université de Physiologie de Fribourg, en Suisse, a déterminé que les sujets de ses expériences sur les mécanismes de la récompense **éprouvaient davantage de satisfaction** (une plus forte libération de dopamine) lorsque qu’une récompence étant attendue dans le cadre d’un Conditionnement Classique. 

Le rapport avec notre ressenti de la performance est identique. Les interactions Homme-Machine devenant de plus en plus rapides, notre cerveau a développé un conditionnement lié aux temps de réponses. Nous éprouvons un plus grand plaisir à visualiser rapidement le résultat d’une action parce que nous sommes habitués à obtenir une réponse rapide.

## Bonnes pratiques, qualité et mesure du e-commerce

Il est régulier que des acteurs spécialisés publient des rapports sur la performance Web des sites e-commerce. Les résultats sont régulièrement décevants, et empirent sur la durée. Les temps de chargement sont de plus en plus longs, avec d’années en années des pertes moyennes de performance qui peuvent aller jusqu’à 13&#8239;% sur le Load Time des nouveaux visiteurs (qui atteignait 7,72&#8239;s en moyenne en 2013 chez les 500 premiers e-commerçants du classement Alexa). 

Même si cette mesure n’est pas suffisante à elle seule, cette détérioration est inquiétante. De nombreuses personnes quittent ces sites avant d’avoir pu interagir avec leurs contenus. Les causes sont pourtant souvent identifiables, et les bonnes pratiques connues. Parfois les serveurs sont mal configurées, parfois les ressources statiques chargées sont trop nombreuses et insuffisamment optimisées, les domaines mal répartis, les minifications insuffisantes… 

De nombreux référentiels se sont imposés comme des indicateurs viables **de l’effort** en faveur d’une meilleure performance : Yahoo Slow, Google PageSpeed, Opquast… pour autant, la “mesure” qu’ils délivrent n’est pas une mesure de performance, mais une mesure de respect d’un ensemble fini de bonnes pratiques. Un site avec une très bonne note PageSpeed peut très bien se révéler plutôt lent quelle qu’en soit la raison, d’une surcharge en contenus multimédia à la présence tôt dans le flux d’un code JavaScript particulièrement bloquant. 

Un audit de performance doit donc nécessairement faire le grand écart entre le monde théorique des bonnes pratiques et la constatation pure, réalisée via le résultat de certains tests ayant une distance plus ou moins proche de l’expérience utilisateur réelle, mais cherchant toujours à l’optimiser.

## Types de tests et de mesures

On distinguera quatre types de mesures.

Les **tests locaux** s'exécutent sur votre machine. Si vous testez sur une connexion de qualité, vous obtiendrez des résultats fantastiques mais rien ne vous dit qu'en relançant le test quelques secondes plus tard, il s'exécutera dans les mêmes conditions. Cela ne vous permet donc pas de comparer des performances en A/B ou d'évaluer une évolution. En revanche, les indicateurs de bonnes pratiques seront assez fiables, dans la mesure où les bonnes pratiques dépendent rarement du type de connexion mais bel et bien de la façon dont le code est architecturé côté serveur.

Les **tests "Backbone"** sont des tests qui sont exécutés depuis un serveur tentant de simuler un environnement utilisateur au plus près, en bridant par exemple une bande passante de haute qualité pour simuler un ADSL. C'est le mode de fonctionnement de WebPageTest.org et cela permet de réaliser des comparaisons et un suivi dans le temps. En revanche, il ne faut absolument pas prendre cela pour une mesure de la réalité : en réalité, les conditions sont bien moins idéales.

Les **tests "Last Mile"** sont des tests qui sont exécutés chez des volontaires rémunérés. Ils installent sur leur(s) machine(s) des logiciels capables d'exécuter des chargements de page durant les phases de non-utilisation. Ainsi, les chargements sont réalisés sur des postes clients proches de la réalité : avec d'autres logiciels lancés en simultané, sur des postes imparfaits, dans des endroits non-sélectionnés. De plus, les fournisseurs de solutions Last Mile disposent souvent d'informations personnelles sur les volontaires, ce qui permet de constituer des panels d'utilisateurs proches de la réalité.

Les **mesures <abbr title="Real User Monitoring : suivi des utilisateurs réels" lang="en">RUM</abbr>**, qui ne sont pas des tests à proprement parlé mais plutôt des mesures réelles, enregistrées durant la navigation des visiteurs sur le site via du JavaScript.

Évidemment, plus les mesures sont nombreuses, plus leur traitement technique et statistique est difficile. La grande valeur ajoutée des solutions payante n'est donc pas technique, mais plus souvent liée à leur capacité à calculer des indicateurs utiles et pertinents, et à traiter une grande quantité de données en entrée.