---
title: 'VBA, Extensions OpenOffice… les langages de script bureautiques'
tags:
    - 'Microsoft Office'
    - 'Visual Basic'
slug: vba-extensions-openoffice-les-langages-de-script-bureautiques
---

Je suis passé par l'apprentissage de nombreux langages de développement. Des langages de balises aux langages objets en passant par la programmation logique (qui est un domaine d'expertise méconnu, à tort). Chacun d'entre eux possède ses avantages et ses inconvénients donc il serait erroné de penser que les langages de dernière génération (notamment les langages de Framework POO) sont forcément les "meilleurs" (pas de panique Mitsu, je ne renie pas ma passion pour .NET). Les langages de script pour les suites bureautique ont encore de beaux jours devant eux.

Il suffit simplement d'exprimer ce constat : dans de nombreuses activités non-techniques, les salariés répètent des actions informatisées qui pourraient être automatisées. Ces actions sont souvent d’une complexité informatique minime, mais d’un intérêt fonctionnel indéniable. Touchant au cœur de l'activité, elles nécessitent d'être fiables et de pouvoir subir les évolutions de l'environnement informatique de l'entreprise sans avoir besoin d'être développées à nouveau. Comment dans ce contexte assurer une pérennité sur 2 ans, 5 ans, 10 ans ?

Le langage de script VBA (Visual Basic for Application) fournit un cadre de développement simplifié (avec les quelques manques que cela engendre au niveau de la sécurité de l'exécution) pour de nombreuses applications de la suite Microsoft Office. Il est possible de développer des fonctions auxquelles l'utilisateur pourra très facilement avoir accès et de les déployer via un fichier .XLA contenant des compléments pour Excel (activable dans les options).

Fort de cette rapidité de développement et de cette simplicité de déploiement, le langage de script VBA est très souvent utilisé lors d’opérations complexes générant des tableaux de bord, scorecard, calculs scientifique (un complément "solveur" présent mais non-activé par défaut dans Office permet la résolution d'équations complexes), analyses et autres outils d’aide à la décision.

Souvent peu ou pas formés, les salariés exprimant ces besoins ont souvent recours à une main d’œuvre qualifiée qui doit avoir à la fois la compétence technique nécessaire au développement de l’outil demandé et la connaissance des termes métiers pour comprendre la demande du commanditaire et la transcrire en spécifications. Suivant le type d'activité de l'entreprise, il peut s'agir de demandes valides sur le long terme ou d'un besoin immédiat. L'incrustation au cœur d'un outil Microsoft Office assure à la fonction une relative utilisabilité, tandis que son support par les versions successives de la suite assure la pérennité de l'usage.

Si vous êtes utilisateurs d'OpenOffice vous pouvez également avoir accès à ce type de développements. Avant la version 2.0.4 d'Open Office, les modèles de développements étaient variés puisque pour produire un plug-in UNO (Universal Network Object), vous pouviez utiliser C, C++, Java ou Python. Légèrement plus complexes que les scripts VBA (notamment via la gestion des bridges de communication IDL), ils permettaient aussi de répondre à des demandes plus pointues.

Pour des raisons de rapidité et de simplicité, le modèle de plug-in a été revu depuis la version 2.04 et c'est désormais un gestionnaire du type de celui de Firefox qui permet aux utilisateurs de gérer leurs plugins en toute simplicité. Ces derniers, installables en un clic via un fichier .OXT, sont ensuite gérables via l'installateur de paquets situés dans les options (on retrouve à 100 % la gestion de Microsoft Office). De plus, le langage de script est très proche de VBA, ce qui facilite les transitions.

Mais personnellement, je ne conseille pas OpenOffice pour ce type d'utilisation. Voici pourquoi :

- Le processus de production de l'add-on est un cauchemar. Là où Microsoft Office vous permet de créer, en mode code ou juste en enregistrant vos actions, une fonction informatisée puis de l'enregistrer en fichier, OpenOffice vous impose de nombreuses étapes visant à fournir votre code mais également toute l'implémentation des menus permettant d'y faire appel. Un outil permettant d'automatiser le procesus existe mais n'a pas été mis à jour depuis des années…
- Dans la mesure où le développement d'OpenOffice.org n'est pas directement relié à ses utilisateurs par un contrat financier fort comme l'achat de licence, le modèle de gestion des add-ons peut très bien évoluer d'une version à l'autre (comme cela s'est fait à la version 2.0.4). Impossible d'obtenir une certification de la pérennité de ses développements dans ce contexte…

Cependant, il reste des points dont Microsoft devraient s'inspirer :

- De nombreuses extensions OpenOffice sont disponibles sous licence GPL (vous pouvez donc les triturer pour en comprendre le fonctionnement), dont une particulière que j'apprécie et qui permet de sauvegarder en un clic votre document en .PDF, .DOC et .ODT.
- Il existe un [Wiki sur la création d'extension OpenOffice](https://wiki.openoffice.org/wiki/Extensions) alors que les ressources VBA restent très éparses (même si les principales informations se trouvent facilement sur [Office.developpez.com](http://office.developpez.com/)).
