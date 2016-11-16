---
title: 'Gérer ses dépendances avec Bower ?'
tags:
    - Front-End
    - Outils
series:
    - 'Industrialisation du Front-End'
canonical: 'http://blog.clever-age.com/fr/2015/06/29/gerer-ses-dependances-avec-bower/'
date: '2015-06-29'
section: default
lang: fr
type: post
---

## Un besoin d’industrialisation

Le développement <i lang="en">front-end</i> se complexifie un peu plus chaque jour. D’une part, l’évolution des standards pousse à la spécialisation de nos métiers. D’autre part, la nécessité d’aller toujours plus vite tout en assurant une qualité importante et une facilité de maintenance impose de formaliser davantage certains processus, voire de les automatiser.

<!-- more -->

<em class="canonical">**Note&nbsp;:** l'article ci-dessous a été publié sur [Clever Age](http://www.clever-age.com/fr/) dans [Gérer ses dépendances avec Bower](http://blog.clever-age.com/fr/2015/06/29/gerer-ses-dependances-avec-bower/).</em>

Plus précisément, avec l’arrivée depuis quelques années de librairies HTML/CSS/JS très ciblées dans leurs objectifs, il devient de plus en plus intéressant de construire son projet <i lang="en">front</i> comme on construisait avant son projet <i lang="en">back</i> : en architecturant sa solution à partir de dépendances et d’un processus de compilation permettant de produire la solution qui les utilisera au mieux.

## Ce qu’offre Bower

<strong>Bower</strong> est un gestionnaire de dépendances pour librairies <i lang="en">front-end</i>, s’installant via <i>node</i> et <i>npm</i>.
Il trouve sa configuration dans un fichier à la racine de votre projet, et sait de lui-même installer, dans un dossier bien défini, l’ensemble des librairies déclarées dans les versions nécessaires (du moins suivra-t-il une syntaxe de gestion sémantique des versions lui permettant de déterminer la meilleure version à installer pour chaque librairie).

Imaginons par exemple que vous ayez besoin de <i lang="en">jQuery UI</i>. Un simple :
<pre><code class="bash">bower install jquery-ui --save</code></pre>
vous permettra d’ajouter la dépendance à votre projet ainsi qu’à votre configuration <strong>Bower</strong> sous la forme d’un fichier <code>.bowerrc</code>, et il ne vous restera plus qu’à référencer le script dans votre page HTML. L’intérêt d’une solution de gestion des dépendances, c’est qu’elle ira jusqu’à récupérer, au sein de votre projet, les dépendances de <i lang="en">jQuery UI</i> lui-même. Plus la peine de déterminer la version de <i lang="en">jQuery</i> à utiliser, <strong>Bower</strong> lira la configuration de <i lang="en">jQuery UI</i> et installera la meilleure version.

## Un problème de dépendances

<strong>Bower</strong> gère les dépendances à plat, il installera donc <i lang="en">jQuery</i> au même niveau que <i lang="en">jQuery UI</i> dans le répertoire de dépendances. Que se passera-t-il donc si on demande à <strong>Bower</strong> d’installer une autre librairie, ayant également <i lang="en">jQuery</i> comme dépendance, mais dans une autre version ? <strong>Bower</strong> ne saura pas répondre et aura besoin d’une confirmation humaine pour déterminer s’il doit conserver la version de <i lang="en">jQuery</i> déjà téléchargée ou la remplacer par l’autre version. Au développeur de prendre sa décision.

Ce comportement est souvent décrié par une partie de la communauté <i lang="en">front</i>, notamment celle proche de <i>npm</i>, le gestionnaire de paquet lié à <i>node</i>. Pourtant, le fonctionnement de <strong>Bower</strong> est tout à fait logique quand on comprend son objectif : être un gestionnaire de dépendances pour le <i lang="en">front</i>, tout le <i lang="en">front</i>.

Car autant il est désormais admis dans la communauté <i>JavaScript</i> qu’un développement peut s’organiser en contextes bien séparés (il y a quelques années, on écrivait des plugins <i lang="en">jQuery</i> aux responsabilités limitées, désormais on préférera travailler avec des modules CommonJS), autant le monde CSS est moins bien loti : impossible, pour l’instant((Avec l’émergence des <i lang="en">Web Components</i>, on devrait voir arriver ce genre de choses, mais cela ne sera probablement pas d’usage courant avant plusieurs années encore, si ça l’est un jour.)), de charger une feuille de style spécifique pour ne l’appliquer qu’à une portion de la page. Il est donc important de véritablement choisir la version d’une librairie CSS.

## Une incitation au couplage

Un autre problème levé par cette démarche, c’est qu’elle impose une mécanique de pensée au développeur qui, par économie d’effort, cherchera à provoquer le moins de conflits possible entre les dépendances. Quoi de plus efficace pour cela que de réduire son nombre de dépendances ?

Sans forcément penser à mal, le développeur en viendra alors souvent à l’exact opposé de ce qui était voulu en installant des dépendances monolithiques et très (trop) riches en fonctionnalités (comme <i>Bootstrap</i> ou <i>jQuery</i>, que l'on retrouve quasiement systématiquement des les <i lang="en">boilerplates</i> basés sur <strong>Bower</strong>) de manière à couvrir le besoin fonctionnel avec le moins de dépendances possibles avec à la clé, une augmentation du couplage et de nombreuses difficultés lors des demandes d’évolutions ou d’optimisations.

## Une forte dépendance aux dépôts des auteurs

<strong>Bower</strong> n’inclut pas un répertoire de dépendances mais un gestionnaire de références. Les projets dont vous allez avoir besoin continuent à être hébergés sur leurs dépôts respectifs. Si le dépôt n’est plus accessible ou si le projet déménage, alors votre dépendance risque d’être introuvable jusqu’à ce que son propriétaire l’enregistre à nouveau. <strong>Bower</strong> n’a aucun cache sur ces dépendances, donc les propriétaires peuvent également “réécrire l’histoire” de leur projet en supprimant des versions que vous utilisez ou en changeant le système de numérotation des versions((Ces pratiques, extrêmement déconseillées par l’ensemble des développeurs, arrivent malheureusement régulièrement.)).

Autre détail ayant son importance : <strong>Bower</strong> rapatrie sur le poste du développeur l’intégralité des fichiers du dépôts source, et pas uniquement les fichiers nécessaires (y compris les fichiers permettant à l’auteur de votre dépendance de la générer). Cette installation systématique de fichiers n’ayant pas d’intérêt pour votre projet peut être rapidement problématique en termes d’espace disque, certains auteurs n’hésitant pas à versionner leurs builds dans le dépot lui-même((Une autre pratique rare, mais que nous avons déjà rencontré.)).

## Bower dans votre architecture projet ?

D’abord, <strong>Bower</strong> nécessite ses propres dépendances, dont <i>node</i>. L’information est triviale mais peut avoir du sens dans un contexte sensible ou dans des organisations de projets où il est difficile d’installer de nouveaux paquets sur un serveur.

Ensuite, <strong>Bower</strong> est loin d’être le seul gestionnaire de dépendances. <i>npm</i>, livré avec <i>node</i>, est un gestionnaire de dépendances de premier niveau qui mérite également d’être évalué au regard de vos impératifs. Il est même envisageable d’utiliser les deux.

On oublie également trop souvent que la gestion des dépendances se fait depuis très longtemps et n’a pas attendu l’émergence d’un besoin d’industrialisation du développement <i lang="en">front</i>. Vous avez peut-être déjà un gestionnaire de dépendances dans votre projet <i>PHP</i>, <i>Ruby</i>, <i>C#</i>, <i>Java</i>… pourquoi ne pas envisager de l’utiliser pour le <i lang="en">front</i> ? Par exemple, si vous utilisez Compass pour compiler votre code SASS, vous utilisez déjà <i>RubyGems</i>.

## Faut-il utiliser <strong>Bower</strong> ?

Maintenant que vous en connaissez les limitations et si elles n’entrent pas en conflit avec la façon dont vous gérez vos projets : pourquoi pas ?

En revanche, si vous l’utilisez pour un projet que vous vous apprêtez à livrer entre les mains d’un tiers, soyez vigilant sur la bonne documentation du processus et de ses alternatives. Aucune démarche n’est finale, il est toujours possible de revenir en arrière ou de modifier… à condition de bien comprendre comment fonctionne l’existant.

Enfin, soyez conscient que les cas d’utilisation optimaux de <strong>Bower</strong> sont très limités. Vous avez peut-être une meilleure alternative.
