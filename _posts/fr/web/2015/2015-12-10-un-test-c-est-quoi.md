---
title: "Un test, c'est quoi ?"
---

Tout le monde parle de test et au final, les gens ne se comprennent pas toujours. Précisons un peu tout ça pour parler la même langue.

<!-- more -->

## Types de classification

### Classification technique

Il s'agit ici de distinguer les tests qui ont une connaissance de vos algorithmes de ceux qui n'en ont pas. Très souvent, cela consiste à classifier vos tests suivant qu'ils sont eux-même composés de plusieurs étapes internes à votre code de ceux qui sont au plus haut niveau. Par exemple, si je manipule un objet de type Pizza chez Domino et que je veux vérifier qu'une commande engendre bien une livraison, je peux :

- soit tester `Commande(Pizza)` et constater si la pizza est livrée (test en boîte <span style="text-decoration: line-through" title="Désolé pour l'humour.">en carton</span> noire) ;
- soit lancer successivement les étapes de prise de commande, préparation, cuisson et livraison parce que **je sais à l'avance** que c'est à ça que correspond une commande (test en boite blanche).

### Classification par qualité

Je vous renvoie au listing officiel de la norme [NF ISO/CEI 9126 e AFNOR](https://fr.wikipedia.org/wiki/ISO/CEI_9126). Je ne peux pas mieux l'écrire.

### Classification par phase

- **Tests unitaires** : tests qui touchent de toutes petites unités ou composants du logiciel
- **Tests d'intégration** : les petits composants fonctionnent bien les uns avec les autres
- Tests du système (ou **tests d'intégration fonctionnels**) : tests consistant à vérifier que l'ensemble fonctionne correctement
- **Tests d'acceptance** (souvent appelés Recette) : vérifie que le le logiciel respecte des critères précis (critères d'acceptance) définis à l'avance par le client

### Autres classifications

Quand vous n'avez pas assez de celles d'au-dessus :

#### Classification par contexte d'exécution

Avec l'émergence des applications JavaScript, une partie des tests se fait souvent <em>client-side</em>, quant l'autre partie se fait <em>server-side</em>.

#### Classification par modalités d'exécution

- **Tests de simulation** : des tests qui visent à reproduire le modèle abstrait de l'interaction. Par exemple, si je veux tester un clic sur un bouton, je teste la méthode qui est lancée lors du clic en question.
- **Tests d'émulation** : des tests qui produisent concrètement l'action à la place d'un utilisateur.
- **Tests manuels** : des tests, manuels (merci <em>[Captain Obvious](/assets/images/2015-12-10/captain_obvious.jpg))</em>.

## Exemples ?

| **Technique** | **Caractéristique** | **Niveau** | **Exemple de tests** |
| --- | --- | --- | --- | --- |
| Boîte blanche | Technique | Unitaire | Vérifier que la fonction `réserverVoiture(voiture)` change bien le statut de l'objet `voiture` de "DISPONIBLE" à "RESERVEE". |
| Boîte noire | Technique | Unitaire | Lorsqu’une voiture est disponible, la fonction `verifierDisponibilité(voiture)` renvoie vrai. |
| Boîte blanche | Performance | Unitaire | Vérifier que la fonction `réserverVoiture(voiture)` s'exécute bien en moins de 120&#8239;ms. |
| Boîte blanche | Technique | Intégration | Si on essaie de réserver une voiture, les fonctions `peutLouerUneVoiture(personne)` et `estDisponible(voiture)` sont appelées. |
| Boîte noire | Fonctionnel | Intégration | Si on essaie de louer une voiture déjà réservée, la fonction `réserverVoiture(voiture)` retourne une erreur. |  |
| Boîte noire | Performance | Unitaire | L’appel de la fonction `récupererUneVoiture` met moins de 200&#8239;ms à s’exécuter lorsque l’on a plus de 100&#8239;000 voitures. |
| Boîte noire | Performance | Système | L’affichage de la liste sur le site prend moins de 200&#8239;ms lorsque l’on a plus de 100&#8239;000 voitures. |
| Boîte noire | Fonctionnel | Acceptance | Si on essaye de louer une voiture disponible, on obtient un message de succès. |
| Boîte noire | Rendement | Acceptance | Le système continue-t-il à répondre en moins de 2&#8239;s à des requêtes de réservations si on en envoie 20&#8239;000 par heure ? par minute ? par seconde ? |

Et on ne parle même pas ici des tests d'acceptance de non-régression visuels (avec [Wraith](https://github.com/BBC-News/wraith), par exemple)…

Bref : la prochaine fois qu'on vous parle de **faire des tests** ou que vous parlez de **faire des tests**, soyez précis·e !
