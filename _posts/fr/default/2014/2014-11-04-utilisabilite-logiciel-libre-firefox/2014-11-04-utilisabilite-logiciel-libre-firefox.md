---
title: 'Utilisabilité&nbsp;: le cas Firefox'
tags:
    - 'Logiciel Libre'
    - 'Service Design'
date: '2014-11-04'
section: default
lang: fr
type: post
---

## L'UX, souvent un tabou dans les communautés du logiciel libre

Chrome est mon navigateur principal. À croire que [Bruce Lawson ne m'a rien appris sur la monoculture](http://vimeo.com/52171395 "&quot;Oh IE6 how we loved you&quot;, Bruce Lawson &quot;, Sud Web 2012") mais que voulez-vous, j'ai pris des habitudes. Un matin, il y a quelques semaines, j'ai pris la décision de migrer mes profils vers Firefox, afin d'envisager avec davantage de recul mon outillage Web et revenir vers une initiative que je soutiens fortement depuis des années par des dons ou en faisant la promotion.

<!-- more -->

Une des fonctionnalités que je préfère sous Chrome est la gestion des profils. Très bien pensée, elle permet de basculer en un clic d'un profil synchronisé à un autre, et d'avoir plusieurs sessions simultanées synchronisées sur des profils différents. Je gère ainsi de manières complètement différentes mes profils personnel et professionnel ainsi qu'un profil spécifique pour ma femme (et je pense créer bientôt un profil pour les enfants pour éviter d'avoir _Tchoupi_ et _Trotro_ dans mon historique Youtube en permanence, les parents comprendront).

Retrouver le même fonctionnement sur Firefox est loin d'être évident. Il existe bien un gestionnaire de profils, mais il faut le lancer manuellement, en ligne de commande. Sous Windows, cela donne `Touche Windows + R` puis `c:\Program Files (x86)\Mozilla Firefox\firefox.exe -p`.

Ensuite, si on lance une deuxième instance de Firefox, celle-ci démarre automatiquement sur le profil déjà utilisé plutôt que de proposer le gestionnaire. Je n'ai pas hésité à faire part de ma déception sur Twitter.

<blockquote class="twitter-tweet" lang="fr"><p lang="fr" dir="ltr">Ah par contre visiblement le gestionnaire de profil de <a href="https://twitter.com/hashtag/Firefox?src=hash">#Firefox</a> n&#39;autorise pas plusieurs profils simultanés. <a href="https://twitter.com/hashtag/Arg?src=hash">#Arg</a></p>&mdash; Boris (@borisschapira) <a href="https://twitter.com/borisschapira/status/516871050404298752">30 Septembre 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

J'avais bien évidemment tort&nbsp;: Firefox n'a aucun problème à gérer plusieurs profils simultanés, il faut juste le lui dire en ligne de commande (encore) ou en créant des raccourcis contenant les bons arguments (ce qui revient au même).

La conversation qui s'est déclenchée sur Twitter à la suite de ce message reflète très bien la vision que j'ai d'une partie de la Communauté du Logiciel Libre&nbsp;: d'une part, j'ai reçu une avalanche de conseils bienveillants, mais partageant tous une certaine technicité. Certains me conseillaient de lancer mes navigateurs en ligne de commande, d'autres me conseillaient de passer sous Mac où un module gère ça très bien.

Parallèlement, et c'est plus dérangeant, j'ai reçu un flot de messages où on me traitait d'incapable qui ne sais pas faire une ligne de commande ou pire, d'utilisateur de Windows (oui, c'est une insulte), de nuire en Logiciel Libre et plus particulièrement à Firefox en lui faisant une publicité négative alors que le projet est formidable.

On retrouve exactement les mêmes réponses à chaque fois qu'on se permet d'émettre une critique envers une alternative libre à un produit propriétaire. J'ai en tête immédiatement LibreOffice et GIMP, mais la liste est longue.

Sauf que mon problème n'est absolument pas là. La technique n'est pas un souci. Je suis sous Windows, mais je sais me servir de ma CLI, merci bien. La question que je soulevais était avant tout une problématique d'utilisabilité&nbsp;: il ne suffit pas que l'alternative fasse ce que la solution de référence fait. Il faut qu'elle le fasse bien et qu'elle donne à l'usager la sensation de gagner du temps. Tout le monde n'a pas des convictions suffisamment puissantes pour qu'elles soient le moteur d'une perte de temps ou d'un énervement à l'usage.

Et je suis le premier concerné par ce constat. Je me suis accroché, j'ai essayé mais, au final, mes convictions favorables envers Firefox sont moins puissantes que mon besoin et mon envie d'avoir un produit qui répond vite et de manière agréable à **mon** besoin. Même si ce besoin est conditionné (et j'en suis conscient) par l'utilisation d'un autre produit.

Encore une fois, ça n'a rien à voir avec les qualités techniques de Firefox, ses engagements géniaux, sa communauté formidable. J'aime Firefox, je donne à Mozilla, j'organise mes formations dessus, j'attends avec impatience la nouvelle version prévue pour les développeurs mais je ne l'utilise toujours pas comme navigateur principal.

L'utilisabilité est un véritable défi que la communauté Mozilla relève à bras le corps depuis plusieurs mois (avec une vraie refonte de l'interface utilisateur). Mais ce n'est pas en fermant les yeux qu'on résout le problème alors à la place, je suis allé voir les [tickets relatifs au _Profile Manager_](https://bugzilla.mozilla.org/buglist.cgi?query_format=specific&amp;order=relevance+desc&amp;bug_status=__open__&amp;product=&amp;content=profile+manager&amp;comments=0) mais là, malheureusement, je n'ai réussi à séparer les tickets relatifs au développement de ceux relatifs à l'expérience utilisateur.

Alors j'ai posé directement la question à l'équipe UX de Firefox&nbsp;:

<blockquote class="twitter-tweet" lang="fr"><p lang="en" dir="ltr"><a href="https://twitter.com/MozillaUX">@MozillaUX</a> Hi ! I was wondering, is there something planned to improve the Profile Manager in FF ? (1/2)</p>&mdash; Boris (@borisschapira) <a href="https://twitter.com/borisschapira/status/516956859434274816">30 Septembre 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

J'espère une réponse. Au pire, si elle ne vient pas, ce ne sera pas très grave&nbsp;: Firefox a d'autres besoins plus urgents que celui de remettre une couche d'UX sur son gestionnaire de profils. Je suis parfaitement conscient que **mon** besoin n'est pas celui du plus grand nombre et le mieux que je puisse souhaiter à Firefox c'est de continuer à les convaincre, eux. Moi, je sais déjà que Firefox est formidable, malgré cela.
