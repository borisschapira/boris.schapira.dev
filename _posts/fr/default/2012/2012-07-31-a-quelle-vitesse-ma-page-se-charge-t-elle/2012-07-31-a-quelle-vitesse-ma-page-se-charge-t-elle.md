---
title: '«&#160;A quelle vitesse ma page se charge-t-elle ?&#160;»'
tags:
    - 'Performance Web'
canonical: 'http://blog.clever-age.com/fr/2012/07/31/webperf-a-quelle-vitesse-ma-page-se-charge-t-elle/'
date: '2012-07-31'
section: default
lang: fr
type: post
---

Cette question est à la base de toute stratégie de WebPerf et pour autant, elle n’admet aucune bonne réponse. Alors comment mesurer la performance Web&nbsp;?

<!-- more -->

<em class="canonical">**Note&nbsp;:** l'article ci-dessous a été publié sur [Clever Age](http://www.clever-age.com/fr/) dans [WebPerf&nbsp;: "A quelle vitesse ma page se charge-t-elle&nbsp;?"](http://blog.clever-age.com/fr/2012/07/31/webperf-a-quelle-vitesse-ma-page-se-charge-t-elle/).</em>

Il n’y a pas de façon "standard" de mesurer la performance web mais plusieurs, qui correspondent à ce qui se passe dans le navigateur lors de l’accès à une page Web. Quand vous tapez dans votre barre d’adresse l’URL de Clever Age et attendez que la page s’affiche, votre navigateur&nbsp;:

1. Se connecte au serveur hébergeant le site et lui demande de renvoyer le contenu de la page HTML
2. Reçoit le contenu de la page HTML
3. Interprète le code HTML pour comprendre comment est structurée la page et de quels objets supplémentaires (images, mises en forme, scripts…) elle a besoin pour être rendue
4. Charge l’ensemble des ressources en question
5. Affiche la page
6. Exécute d’autres script après le chargement, impliquant eux-même le chargement de nouvelles ressources et le déclenchement d’animations

La mesure de la performance du site passe alors par la compréhension de plusieurs indicateurs&nbsp;:

<figure>
<a data-featherlight="image" href="/assets/images/2012-07-31/1.png" title="Voir en plus grand">
      {% responsive_image path: assets/images/2012-07-31/1.png alt: "Schéma présentant les différentes étapes du chargement d'une page Web" %}
  </a>
  <figcaption>Les différentes étapes du chargement d'une page Web</figcaption>
</figure>

## Le "Time To First Byte"

**Description**&nbsp;: le "Time To First Byte" est le temps séparant la demande de votre navigateur et la réponse du serveur hébergeant la page que vous souhaitez consulter.

**Référence**&nbsp;: on considère qu’un "Time to First Byte" acceptable est bien inférieur à la seconde, et idéalement de l’ordre de 100ms, même si peu de sites importants atteignent ce niveau (la tendance globale du Web allant même vers une certaine lenteur).

**Quels problèmes&nbsp;?**&nbsp;: le "Time To First Byte" est utile pour déterminer les problèmes relatifs au réseau (latences), à la résolution du nom DNS (le lien entre l’URL du site et le serveur qui l’héberge) ou à un problème de délivrance du code HTML du site (absence ou mauvaise stratégie de cache, par exemple).

**Impacts**: à moins d’être véritablement catastrophique, le "Time To First Byte" n’a que peu d’impact sur l’utilisateur. En revanche, le "Time To First Byte" a énormément d’impact sur le référencement, il est donc nécessaire de le chouchouter.

## Les temps d’affichage

**Description**&nbsp;: suivant la qualité du code HTML renvoyé par le serveur, un site s’affichera avant même que le navigateur n’ait reçu l’ensemble de la page ou bien longtemps après. Le moment auquel le premier élément est affiché est appelé "Start Render Time". Le moment auquel le dernier élément de la fenêtre du navigateur (qui n’est pas forcément le dernier élément de la page si la page est plus longue qu’un écran) est appelé "Perceived Render Time" ou parfois "Above-The-Fold Render Time" bien que l’utilisation du terme "Fold" n’ait que peu de sens aujourd’hui, avec la multiplication des formes d’écrans).

**Quels problèmes&nbsp;?**&nbsp;: un mauvais temps de rendu signifie le site est soit trop "lourd" (il contient tellement d’objets qu’il est nécessaire aux navigateurs de récupérer de très nombreux fichiers avant de l’afficher). Cependant, tous ces objets ne sont pas forcément utiles à l’affichage et un site riche en contenu multimédia, par exemple, mettra certainement plus de temps à s’afficher qu’un site contenant uniquement quelques lignes de textes.

**Impacts**: le temps du rendu est celui de l’utilisateur, il est donc votre vitrine. Optimisez ce temps pour satisfaire vos visiteurs. Certains sites, comme Twitter ou Facebook, utilisent même une "coquille vide" qu’ils alimentent ensuite, zone par zone.

## Le "Load Time"

**Description**&nbsp;: une site n’est pas qu’une page HTML mais également un ensemble de ressources multimédia. Le Load Time est le temps nécessaire au navigateur pour rendre tous les éléments visibles (textes, images, mises en forme) et invisibles comme les scripts Javascripts. La mesure du Load Time étant renvoyée nativement par tous les navigateurs, il est facile à capturer et est donc souvent utilisé comme élément de comparaison pour la performance Web de deux sites, souvent à tort.

**Quels problèmes&nbsp;?**&nbsp;: le Load Time doit être recoupé avec ce qu’il représente, en l’occurence le temps de chargement des ressources utilisées par la page. Un fort Load Time peut donc être symptomatique d’un trop grand nombre de ressources (le navigateur ayant des limitations sur le nombre de téléchargement simultanés qu’il peut lancé), d’un problème dans la récupération de celles-ci (réseau, par exemple) ou tout simplement de ressources trop grosses (images mal dimensionnée, contenus animés…).

**Impacts**: le Load Time est souvent considéré comme le moment auquel un site devient interactif, à tort. Gonflé par des scripts de récupération de statistiques qui n’ont aucun impact sur l’utilisateur, le Load Time est alors déclenché bien après que la page soit devenue véritablement interactive. Ceci étant, le Load Time étant souvent utilisé comme mesure comparative, un site a tout intérêt à le minimiser et donc à déporter ces scripts plus tard dans la chronologie d’exécution.

## Le "Time To Last Byte" (ou à tort&nbsp;: "Response Time")

**Description**&nbsp;: le Time To Last Byte est le moment auquel plus aucune information n’est échangée (récupérée ou envoyée) par la page du site chargée. Ce temps est parfois appelé Response Time, même si ce nom fait croire "à tort", qu’il s’agit d’un moyen simple de mesurer la performance d’une page, alors que pas du tout&nbsp;!

**Quels problèmes&nbsp;?**&nbsp;: le Time To Last Byte n’a pas beaucoup d’intérêt. En revanche, c’est à son lancement qu’il est intéressant de mesurer le nombre d’objets total et le poids qu’ils représentent pour les internautes.

**Impacts**&nbsp;: le Time To Last Byte n’a aucun impact sur l’internaute. Certains sites, d’ailleurs, ne l’atteignent jamais car ils sont constamment en situation d’échange telles les messageries ou les réseaux sociaux, qui se mettent souvent à jour en temps réel.
