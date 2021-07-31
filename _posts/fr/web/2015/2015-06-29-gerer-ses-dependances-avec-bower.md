---
title: 'Gérer ses dépendances avec Bower ?'
tags:
    - Front-End
    - Outils
canonical: 'https://blog.clever-age.com/fr/2015/06/29/gerer-ses-dependances-avec-bower/'
canonical_title: 'le blog de Clever Age'
subtitle: 'Un besoin d’industrialisation'
---

Le développement <span lang="en">front-end</span> se complexifie un peu plus chaque jour. D’une part, l’évolution des standards pousse à la spécialisation de nos métiers. D’autre part, la nécessité d’aller toujours plus vite tout en assurant une qualité importante et une facilité de maintenance impose de formaliser davantage certains processus, voire de les automatiser.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Plus précisément, avec l’arrivée depuis quelques années de librairies HTML/CSS/JS très ciblées dans leurs objectifs, il devient de plus en plus intéressant de construire son projet <span lang="en">front</span> comme on construisait avant son projet <span lang="en">back</span> : en architecturant sa solution à partir de dépendances et d’un processus de compilation permettant de produire la solution qui les utilisera au mieux.

## Ce qu’offre Bower

<strong>Bower</strong> est un gestionnaire de dépendances pour librairies <span lang="en">front-end</span>, s’installant via <span lang="en">node</span> et <span lang="en">npm</span>. Il trouve sa configuration dans un fichier à la racine de votre projet, et sait de lui-même installer, dans un dossier bien défini, l’ensemble des librairies déclarées dans les versions nécessaires (du moins suivra-t-il une syntaxe de gestion sémantique des versions lui permettant de déterminer la meilleure version à installer pour chaque librairie).

Imaginons par exemple que vous ayez besoin de <span lang="en">jQuery UI</span>. Un simple :

<pre><code class="bash">bower install jquery-ui --save</code></pre>

vous permettra d’ajouter la dépendance à votre projet ainsi qu’à votre configuration <strong>Bower</strong> sous la forme d’un fichier <code>.bowerrc</code>, et il ne vous restera plus qu’à référencer le script dans votre page HTML. L’intérêt d’une solution de gestion des dépendances, c’est qu’elle ira jusqu’à récupérer, au sein de votre projet, les dépendances de <span lang="en">jQuery UI</span> lui-même. Plus la peine de déterminer la version de <span lang="en">jQuery</span> à utiliser, <strong>Bower</strong> lira la configuration de <span lang="en">jQuery UI</span> et installera la meilleure version.

## Un problème de dépendances

<strong>Bower</strong> gère les dépendances à plat, il installera donc <span lang="en">jQuery</span> au même niveau que <span lang="en">jQuery UI</span> dans le répertoire de dépendances. Que se passera-t-il donc si on demande à <strong>Bower</strong> d’installer une autre librairie, ayant également <span lang="en">jQuery</span> comme dépendance, mais dans une autre version ? <strong>Bower</strong> ne saura pas répondre et aura besoin d’une confirmation humaine pour déterminer s’il doit conserver la version de <span lang="en">jQuery</span> déjà téléchargée ou la remplacer par l’autre version. Au développeur de prendre sa décision.

Ce comportement est souvent décrié par une partie de la communauté <span lang="en">front</span>, notamment celle proche de <span lang="en">npm</span>, le gestionnaire de paquet lié à <span lang="en">node</span>. Pourtant, le fonctionnement de <strong>Bower</strong> est tout à fait logique quand on comprend son objectif : être un gestionnaire de dépendances pour le <span lang="en">front</span>, tout le <span lang="en">front</span>.

Car autant il est désormais admis dans la communauté <span lang="en">JavaScript</span> qu’un développement peut s’organiser en contextes bien séparés (il y a quelques années, on écrivait des plugins <span lang="en">jQuery</span> aux responsabilités limitées, désormais on préférera travailler avec des modules CommonJS), autant le monde CSS est moins bien loti : impossible, pour l’instant((Avec l’émergence des <span lang="en">Web Components</span>, on devrait voir arriver ce genre de choses, mais cela ne sera probablement pas d’usage courant avant plusieurs années encore, si ça l’est un jour.)), de charger une feuille de style spécifique pour ne l’appliquer qu’à une portion de la page. Il est donc important de véritablement choisir la version d’une librairie CSS.

## Une incitation au couplage

Un autre problème levé par cette démarche, c’est qu’elle impose une mécanique de pensée au développeur qui, par économie d’effort, cherchera à provoquer le moins de conflits possible entre les dépendances. Quoi de plus efficace pour cela que de réduire son nombre de dépendances ?

Sans forcément penser à mal, le développeur en viendra alors souvent à l’exact opposé de ce qui était voulu en installant des dépendances monolithiques et très (trop) riches en fonctionnalités (comme <span lang="en">Bootstrap</span> ou <span lang="en">jQuery</span>, que l'on retrouve quasiment systématiquement des les <span lang="en">boilerplates</span> basés sur <strong>Bower</strong>) de manière à couvrir le besoin fonctionnel avec le moins de dépendances possibles avec à la clé, une augmentation du couplage et de nombreuses difficultés lors des demandes d’évolutions ou d’optimisations.

## Une forte dépendance aux dépôts des auteurs

<strong>Bower</strong> n’inclut pas un répertoire de dépendances mais un gestionnaire de références. Les projets dont vous allez avoir besoin continuent à être hébergés sur leurs dépôts respectifs. Si le dépôt n’est plus accessible ou si le projet déménage, alors votre dépendance risque d’être introuvable jusqu’à ce que son propriétaire l’enregistre à nouveau. <strong>Bower</strong> n’a aucun cache sur ces dépendances, donc les propriétaires peuvent également "réécrire l’histoire" de leur projet en supprimant des versions que vous utilisez ou en changeant le système de numérotation des versions((Ces pratiques, extrêmement déconseillées par l’ensemble des développeurs, arrivent malheureusement régulièrement.)).

Autre détail ayant son importance : <strong>Bower</strong> rapatrie sur le poste du développeur l’intégralité des fichiers du dépôts source, et pas uniquement les fichiers nécessaires (y compris les fichiers permettant à l’auteur de votre dépendance de la générer). Cette installation systématique de fichiers n’ayant pas d’intérêt pour votre projet peut être rapidement problématique en termes d’espace disque, certains auteurs n’hésitant pas à versionner leurs builds dans le dépot lui-même((Une autre pratique rare, mais que nous avons déjà rencontré.)).

## Bower dans votre architecture projet ?

D’abord, <strong>Bower</strong> nécessite ses propres dépendances, dont <span lang="en">node</span>. L’information est triviale mais peut avoir du sens dans un contexte sensible ou dans des organisations de projets où il est difficile d’installer de nouveaux paquets sur un serveur.

Ensuite, <strong>Bower</strong> est loin d’être le seul gestionnaire de dépendances. <span lang="en">npm</span>, livré avec <span lang="en">node</span>, est un gestionnaire de dépendances de premier niveau qui mérite également d’être évalué au regard de vos impératifs. Il est même envisageable d’utiliser les deux.

On oublie également trop souvent que la gestion des dépendances se fait depuis très longtemps et n’a pas attendu l’émergence d’un besoin d’industrialisation du développement <span lang="en">front</span>. Vous avez peut-être déjà un gestionnaire de dépendances dans votre projet <span lang="en">PHP</span>, <span lang="en">Ruby</span>, <span lang="en">C#</span>, <span lang="en">Java</span>… pourquoi ne pas envisager de l’utiliser pour le <span lang="en">front</span> ? Par exemple, si vous utilisez Compass pour compiler votre code SASS, vous utilisez déjà <span lang="en">RubyGems</span>.

## Faut-il utiliser <strong>Bower</strong> ?

Maintenant que vous en connaissez les limitations et si elles n’entrent pas en conflit avec la façon dont vous gérez vos projets : pourquoi pas ?

En revanche, si vous l’utilisez pour un projet que vous vous apprêtez à livrer entre les mains d’un tiers, soyez vigilant sur la bonne documentation du processus et de ses alternatives. Aucune démarche n’est finale, il est toujours possible de revenir en arrière ou de modifier… à condition de bien comprendre comment fonctionne l’existant.

Enfin, soyez conscient que les cas d’utilisation optimaux de <strong>Bower</strong> sont très limités. Vous avez peut-être une meilleure alternative.
