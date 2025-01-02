---
title: '[VS2010] Productivity Power Tools'
canonical: https://blog.clever-age.com/fr/2010/10/08/productivity-power-tools-pour-visual-studio-2010/
canonical_title: le blog de Clever Age
tags:
    - Outils
---

Visual Studio 2010 est assez riche en fonctionnalités à l’origine mais on trouve toujours deux ou trois choses sur lesquelles se plaindre, surtout si on est habitué à utiliser d’autres <abbr title="Integrated Development Environment : environnement de développement intégré (comme souvent, l’anagramme français EDI est moins utilisé que son équivalent anglophone)">IDE</abbr> (comme Eclipse). Heureusement, Visual Studio est extensible, et on trouve déjà de nombreux outils, dont les Productivity Power Tools.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

L’extension Productivity Power Tools ajoute à votre environnement trois formidables outils :

### Solution Navigator

Solution Navigator est un mariage entre le Solution Explorer et le Class Viewer. Avec, vous pouvez explorer vos fichiers pour faire apparaître vos classes et leurs membres tout en filtrant l’affichage (fichiers ouverts, non-sauvegardés ou édités seulement). Mais la fonctionnalité-clé est sûrement la recherche dynamique, qui permet de trouver rapidement, dans une solution massive, les fichiers, classes ou membres comportant une certaine chaîne de caractère. Le Solution Navigator ne remplacera pas tout de suite votre Solution Explorer car il a encore quelques lacunes dans la gestion des fichiers (déplacement, sélection multiple) mais l’utiliser est très addictif.

{% capture img_alt %}Capture de l'écran Solution Navigator{% endcapture %} {% capture img_caption %}Solution Navigator{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-09-02/VS2010_ProductivityPowerTools_SolutionNavigator.png"
alt=img_alt
caption=img_caption
%}

### Quick Access

Quick Access est l’outil idéal pour apprendre à utiliser Visual Studio ou en tirer le meilleur. Il vous permet, via une interface de recherche dynamique, de trouver et d’exécuter des tâches avec Visual Studio. Plus besoin de fouiller dans les menus à la recherche d’une fonctionnalité : tapez son nom et elle apparaitra. Quick Access facilite ainsi l’ouverture d’une fenêtre d’outils, le lancement d’une compilation, la création d’un projet à partir d’un Template…

{% capture img_alt %}Capture de l'écran Quick Access{% endcapture %} {% capture img_caption %}Quick Access{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-09-02/VS2010_ProductivityPowerTools_QuickAccess.png"
alt=img_alt
caption=img_caption
%}

### Fenêtre Add Reference améliorée

Celle nouvelle fenêtre facilite et accélère l’ajout de références à votre projet. Remplaçant la fenêtre d’ajout de références standard, elle se permet se mettre en cache les informations d’Assembly à la première utilisation. Ainsi, lors d’un lancement ultérieur, la fenêtre s’affiche en moins de deux secondes. Indispensable.

{% capture img_alt %}Capture de l'écran Add Reference{% endcapture %} {% capture img_caption %}Add Reference{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-09-02/VS2010_ProductivityPowerTools_AddReference.png"
alt=img_alt
caption=img_caption
%}

### Autres améliorations

L’extension installe un certain nombre d’outils et d’améliorations comme (liste extraite, traduite et enrichie à partir de [l’article de Scott Guthrie](http://weblogs.asp.net/scottgu/visual-studio-2010-productivity-power-tool-extensions), vice-président de la division Développement de Microsoft notamment connu pour sa participation au projet ASP.NET, qu’il a créé avec Mark Anders) :

- **Surlignage d’une Ligne Entière** : Facilite le suivi du curseur dans l’éditeur
- **Sélection d’une Ligne Entière** : Un triple-clic sur une ligne permet de la sélectionner (comme dans MS Word)
- **Déplacement d’un bloc de code** : Utilisez Alt+Haut/Bas pour déplacer un bloc de code dans l’éditeur
- **Usage Consistant des Tabulations et des Espaces** : Assure une utilisation consistante des tabulations et des espaces entre vos projets
- **Fermeture Automatiques** : Créez automatiquement le complément fermant d’un élément d’ouverture (comme (), , [], &lt;&gt;, "", et ‘’)
- **Paramètres Colorés** : Facilite l’identification des paramètres de méthodes
- **Indicateurs de Colonnes** : Ajoute, si vous le voulez, des indicateurs visuels verticaux (de couleurs différentes) facilitant l’alignement du texte
- **Affectations Alignées** : Facilite l’alignement de vos affectations de variables dans le code
- **Presse-Papier HTML** : Copiez/Collez votre code depuis Visual Studio vers un tampon HTML (utile pour blogger)
- **Ctrl + Clic pour Aller à la Definition** : Maintenez Control enfoncé en cliquant sur un type pour aller à sa définition

L’extension inclut également quelques améliorations dans la gestion des onglets par l’IDE :

- **Affichage du Bouton Fermer dans l’Onglet** : Affiche un bouton de fermeture dans l’onglet actif (comme c’était le cas dans VS 2008)
- **Onglets Colorés** : Vous pouvez désormais affecté une couleur à chaque onglet de votre projet ou déterminer une couleur via une expression régulière
- **Accrochage des Onglets** : Vous permet d’accrocher un onglet à l’IDE, afin qu’il soit toujours visible et disponible
- **Onglets Verticaux** : Affiche les onglets verticalement, ce qui permet d’en afficher davantage
- **Retrait des Onglets en Fonction de l’Usage** : Retire les onglets les moins utiliser lorsque l’ajout de nouveaux onglets implique des contraintes d’espace
- **Tri des Onglets par Projet** : Les onglets peuvent être triés en fonction du projet auquel ils appartiennent
- **Tri Alphabétique des Onglets** : Les onglets peuvent être triés alphabétiquement

### Installation

Pour ajouter cette extension, ouvrez votre Extension Manager sous Visual Studio 2010 puis sélectionnez Productivity Power Tools dans la gallerie (catégorie "Tools").
