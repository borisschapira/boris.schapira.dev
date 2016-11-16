---
title: 'OS 5.0.0.190 sur mon Bold (9000)'
tags:
    - 'Me, myself and I'
    - Mobile
date: '2009-10-08'
section: default
lang: fr
type: post
---

Mon Blackberry me comble mais vous me connaissez, je suis un incorrigible testeur. J'ai donc craqué à [l'appel de 2803](http://www.vingthuitzerotrois.fr/logiciel/les-nouveautes-du-prochain-os-de-blackberry-6959/) et [@Jarodnet](https://twitter.com/jarodnet) : j'ai installé l'OS 5.0.0.190 sur mon Bold. Je n'en suis pas à ma première installation (en moins d'un an, je dois en être à mon 3e changement d'OS), donc je commence à [connaitre la musique](http://www.blackberry-fr.com/101/tutoriel-comment-mettre-a-jour-los-de-votre-blackberry/). Il faut dire que la version officielle de Bouygues Telecom (4.6.0.162 je crois) est pas mal, mais reste perfectible.

<!-- more -->

# Disclaimer

J'insiste : **installer une nouvelle version de votre OS apporte, en général, peu de choses**. Si vous êtes satisfait de votre système, ne le changez pas. Si vous êtes à la recherche d'un dixième de batterie supplémentaire ou d'un peu plus de rapidité, tentez à vos risques et péril.

Il n'y a **pas de support officiel Blackberry** et votre opérateur ne pourra rien pour vous si vous vous plantez (et un plantage dans la mise à jour de l'OS, ça peut donner un téléphone qui ne démarre plus). La communauté francophone est sympa et très compréhensive mais si vous paniquez, elle ne pourra rien pour vous.

Enfin, est-ce la peine de le rappeler, ne faites rien sur un téléphone qui ne vous appartient pas (celui que vous a donné votre entreprise, par exemple) !

# Installation

Après l'installation de l'exécutable et la suppression du Vendor.xml, j'ai lancé directement le AppLoader plutôt que de passer par le Desktop Manager 5.0 qui voyait l'OS mais - allez savoir pourquoi - ne me proposait pas de l'installer.

Après l'installation, le redémarrage a pris son temps, mais rien de dramatique (moins de 5 minutes, je dirais). Je pense que les durées d'installation peuvent fortement varier d'un téléphone à l'autre, en fonction des applications installées. Ne paniquez pas si ça dure trop longtemps. Si ça plante, enlevez la batterie 90 secondes (correspond à un Hard Reset) et recommencez.

# Compatibilité

J'ai récupéré mes contacts et rendez-vous, et mes applications ont été réinstallées dans la foulée. La plupart ne fonctionnant pas (soit elles ne sont pas compatibles, soit elles sont installées par l'AppLoader sans les autorisations nécessaires), j'ai dû en désinstaller une bonne partie avant de les réinstaller moi-même.

Pour avoir essayer, je vous déconseille de restaurer vos applications et contacts après la mise-à-jour. Sous certains aspects, cela semblait intéressant (par exemple, l'application Yatca marchait bien) mais divers effets secondaires étaient vraiment désagréables (comme mon téléphone qui ne sonne plus…). Bref, faites un total Wipe avant ou après l'installation et re-synchroniser vos contacts et agenda après (Options &gt; Options sécurité &gt; Paramètres généraux&gt;… Effacer le contenu ou Nettoyage de mémoire).

Les applications suivantes fonctionnent sur l'OS 5.0: App World, Google Sync, Google Maps, Facebook (qui s'installe désormais dans les messageries instantannées), Opera Mini (je n'ai pas retrouvé l'OTA), Wordpress for Blackberry, Deezer, Yatca, ÜberTwitter, FlashLite.

Vopium et QuickPull Lite s'installent mais demandent une configuration manuelle des droits que je n'ai pas encore pris le temps de faire. Prudence, donc.

# Evolutions

Le _démarrage_ semble plus rapide et on a désormais une belle barre d'avancement pour nous confirmer que tout se passe bien. Ca rassure.

L'_écran des appels_ passés et reçus présente un nouveau design avec des icônes plus grandes.

Du côté des _mails_, la navigation est rendue plus claire par la fixation de la date en tête de la liste. Impossible désormais de se perdre dans ses messages comme avant. Lorsque l'on joint une image à un mail, la système propose automatiquement d'en réduire la taille et propose différents formats en affichant une estimation du poids.

L'_écran de SMS_ s'affiche en mode "Bubble" qui lui donne un petit côté messagerie instannée marrant (il y a un mode "Stripes" aussi, mais j'ai du mal à voir la différence). Et vous n'aimez pas, ben tant pis, on ne peut pas revenir au mode d'avant.

Dans le _navigateur_, une option [Gears](http://fr.wikipedia.org/wiki/Gears) apparait. Je ne sais pas encore comment la fonctionnalité de cache de Google sera gérée, mais c'est un début. Ca parle aussi vaguemment de vidéo en streaming, mais je vous avouerais que cette fonctionnalité m'intéressant peu, je n'ai pas poursuivi l'investigation.

Le _visualiseur de photos_ a été amélioré. On peut naviguer entre les photos avec un effet "défilement" que l'on avait pas avant et en utilisant la molette…

L'_horloge_ a vu ses menus revisités. C'est plus clair et plus moderne désormais. La fonction "Sommeil" existait-elle avant ?

L'_écran de gestion des applications_ (dans les options) a été complètement revu, avec l'affichage d'icônes façon Blackberry App World. La gestion des autorisation se divise désormais en plusieurs groupes d'habilitations clairement identifiés.

L'_appareil photo_ est dix fois plus rapide qu'avant, et l'interface offre un effet de transparence appréciable.

Une application _Nettoyeur de Mémoire_ fait son apparition, ainsi qu'un _explorateur de fichiers_ (il était temps).

Les _lecteurs de video et de musique_ ont beaucoup évolué, offrant des fonctionnalités appréciables comme la reprise ou une meilleure indexation. J'ai aussi aperçu dans les options des _éléments relatifs à la disposition et à la taille des sous-titres_. Se dirige-t-on vers le support des fichiers .srt en natif ?

# Bugs

Je constate les mêmes bugs que 2803, à savoir les nouveaux mails qui restent en gras après consultation et le changement d'état du profil qui ne s'applique pas sur l'écran principal (mais qui se met à jour quand on le quitte et qu'on revient) . Pour l'instant, je n'ai pas constaté d'erreur avec Google Sync, même si son installation a entrainé un dédoublement de mes rendez-vous assez gênant mais facilement corrigeable.

En revanche, j'ai constaté un bug gênant dans la lecture audio (et @Jarodnet confirme qu'il existe aussi sur le Storm) : à la fin du premier morceau joué, le Blackberry coupe le son. Si on fait pause et lecture, cela reprend et ne se coupe plus !

Enfin, si vous avez fait une mise à jour avec restauration de la configuration, attendez-vous à divers incohérences, sûrement dûes à l'incompatibilité des configuration de l'OS 4.0 à l'OS 5.0\. Pour moi, le téléphone ne sonnait plus, quel que soit le mode choisi ou la sonnerie choisie. Pas très pratique !

# Conclusion

Cette mouture est très stable (malgré les deux bugs ci-dessus). On ne devrait pas tarder à voir apparaître la version finale. Malheureusement, l'OS 5.0 n'apporte pas grand chose ou alors uniquement des éléments inspirés d'autres OS (qui a dit iPhone ?). Ceci étant dit, il corrige quand même tout un tas de petites choses désagréables et rien que pour ça, il vaut le temps perdu à l'installer.
