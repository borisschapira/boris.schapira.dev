---
title: 'Une grosse journée de Commando'
tags:
    - Finance
    - Emploi
    - Nexeo
---

On me demande souvent en quoi consiste mon métier. Officiellement, cela s'appelle "Commando Front Office" mais entre nous, c'est avant tout un poste d'ingénieur en développement informatique. Malgré cela, il est difficile de ranger notre équipe de 5 personnes dans un stéréotype courant. "Support informatique" ne met pas en avant l'aspect fonctionnel de nos interventions et "Support Front et Middle Office" efface notre activité de développement informatique, pourtant au cœur du métier. Le plus simple est donc, peut-être, de raconter ce que peut être une bonne journée de travail. Désolé pour les mots barbares, mais si je commence à tout expliquer l'article va être très, très long…

- **8:30** Arrivée sur le desk. Plusieurs utilisateurs semblent rencontrer des problèmes avec l'application de récupération des paramètres de marché. Après observation, le problème se situe au niveau de la contribution de ces paramètres sur le serveur. Quelques minutes plus tard, l'incident est clos et ses causes éradiquées. Un mail est envoyé aux utilisateurs pour leur expliquer la cause de l'incident et les moyens de contournement existants dans l'hypothèse désormais improbable d'une récidive.
- **9:40** Support pour une autre activité que celle de mon desk dans laquelle le Trading désire réviser la structure de ses analyses de risque. Il s'agit aujourd'hui de relancer des valorisations de la position en modifiant le paramétrage du pricer utilisé. Quelques lignes de configuration, un peu de batch et le tour est joué.
- **10:00** Validation d'un nouveau binaire du le pricer des produits Exotiques. Il s'agit de vérifier la non-régression au niveau de la valorisation et du [delta (en)](http://www.investopedia.com/terms/d/delta.asp) avant la mise en production.
- **11:00** Développement en base de donnée et dans un plugin Excel : ajout d'un nouveau menu pour l'import de données de la base dans un tableau dynamique croisé au format spécifié par le Trading dans un mail envoyé la veille.
- **12:40** Descente à la cafétéria : le sandwich est ton ami si tu veux avoir le temps de faire le tour de ton Netvibes avant de reprendre le boulot.
- **13:20** Validation et préparation de la mise en production du développement réalisé ce matin sur la base.
- **14:10** Développement .NET pour déporter une partie de l'intelligence existante dans le plugin Excel vers une technologie plus sûre et performante. Ouverture de Visual Studio : plaisir.
- **14:20** Interruption : le Middle Office a besoin de nous pour lancer son [Thêta (en)](http://www.investopedia.com/terms/t/theta.asp) côté [Vanille (en)](http://www.investopedia.com/terms/p/plainvanilla.asp). La grille sur laquelle ils lancent leurs calcul semble assez occupée : appel au support dédié et discussions "entre techos" pour savoir si tout est normal de leur côté.
- **15:00** Pause café. Niveau de priorité élevé :D
- **15:10** Retour au poste : interruption du développement .NET et passage à Delphi 5.0 (plus dure sera la chute) : une application de fixing nécessite qu'on revoit la méthode de traitement d'un certain type de produit. Ce développement qui entraînera de nombreux tests de non régression sera fait en perpétuelle discussion avec les Middle Office afin de correspondre à leurs attentes.
- **16:30** Découverte par un Middle Office de Londres d'un léger bug dans l'add-in VBA de récupération des valorisations et analyses de risque : les [maturités (en)](http://www.investopedia.com/terms/m/maturity.asp) sont distribuées dans le désordre à l'intérieur d'un tableau dynamique croisé. Ouverture du code source, révision des commandes afin d'optimiser les requêtes en base, commentaire des modifications, enclenchement du processus de test, validation des test, release sur le serveur de réplication, réplication locale et mondiale, communication aux utilisateurs. Tokyo lancera demain l'application sans jamais avoir rencontré le problème.
- **18:00** Au cœur du processus de validation des positions quotidiennes, les commandos sont demandés par le Middle Office pour répartir la puissance de calcul en fonction des différents besoins en valorisation.
- **18:30** Un mail du back-office nous informe d'un problème dans l'alimentation du processus Front To Back lancé quelques minutes auparavant. Les Middle corrigent l'erreur et nous relançons le processus.
- **19:00** Plus besoin de moi et pas d'astreinte ce soir : je rentre à la maison ! Heureusement parce que sinon cela peut durer… jusqu'à 20h en moyenne mais parfois bien plus !
