---
title: 'Un fichier hosts pour les bloquer tous'
i18n-key: hosts
date: '2018-09-07'
main_image: '/assets/images/2018-09-07/gollum.jpg'
type: post
tags:
    - WebPerf
    - 'Me, myself and I'
    - Outils
    - Productivité
locale: fr_FR
---


En tant qu'expert du domaine, les gens me demandent souvent comment améliorer la performance des sites Web. Parfois, ils me demandent aussi comment améliorer les performances du Web sur leur propre machine, pour leur propre expérience de navigation. Dans ce cas, ma réponse est toujours la même : commencer par le fichier **hosts**.

{% capture img_alt %}Gollum, tenant l'Anneau unique dans l'adaptation du Seigneur des Anneaux de Peter Jackson{% endcapture %}
{% capture img_caption %}Je manquais d'inspiration pour trouver une illustration plus sympa…{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2018-09-07/gollum.jpg"
alt=img_alt
caption=img_caption
%}

<!-- more -->

## Filtrer les polluants

Le Web d'aujourd'hui est blindé de saletés. La plupart des sites sont bourrés de traqueurs, de publicités et de beaucoup d'autres choses désagréables qui pénalisent le chargement des sites Web. Pour éviter cela, les gens utilisent de plus en plus d'AdBlockers[^pr]. Ils offrent une solution simple et rapide (la plupart du temps, une extension de navigateur) qui bloque la plupart des contenus indésirables.

[^pr]: Le taux de pénétration des bloqueurs publicitaires aux États-Unis est d'environ 30 % sur les ordinateurs de bureau, et d'environ 12 % sur les téléphones mobiles, selon cette [étude eMaketer sur le blocage des publicités à partir de mars 2017].(https://www.statista.com/statistics/351862/adblocking-usage/).

Malheureusement, au niveau de l'UX, les AdBlockers ne font pas toujours l'affaire. Ils augmentent souvent la quantité de mémoire vive et de cycles CPU utilisés par votre navigateur Web, ce qui ralentit votre expérience de navigation au lieu de l'améliorer. Certains font mieux que d'autres, et des navigateurs entiers[^brave] ont été conçus pour bloquer les contenus indésirables, et font en cela un travail incroyable. Mais le web ne se limite pas à votre navigateur, n'est-ce pas ?

[^brave]: Si vous n'avez jamais testé [le navigateur Brave](https://brave.com/), je ne peux que vous encourager à le faire, et à rejoindre les 4 millions de personnes qui lui font confiance pour réparer leur Web.

Tout votre ordinateur consomme du Web. La plupart des applications grand public sont autant remplies de trackers que n'importe quel site web de Presse. Parfois, vous pouvez même voir les publicités affichées dans votre interface utilisateur (_Bonjour, Skype. Oui, je parle de toi, vilain garçon_).

Les AdBlockers ne peuvent rien y faire. Mais un simple fichier hosts, si.

## Hosts… kézako ?

> Le fichier **hosts** est un fichier utilisé par le système d'exploitation d'un ordinateur lors de l'accès à un réseau, comme Internet par exemple. Son rôle est d'associer des noms d'hôtes à des adresses IP.
> <cite>"[hosts](https://fr.wikipedia.org/wiki/Hosts)", sur Wikipedia</cite>

Chaque fois que votre navigateur interagit avec un site Web, il requête en réalité un serveur, identifié via son adresse IP, comme 185.31.40.11 (IPv4) ou 2a00:b6e0:1:20:2::1 (IPv6). Cette adresse est assez semblable à une adresse postale.

Imaginez que vous accédez à une page web, comme <https://borisschapira.com>. Comment votre navigateur sait-il quelle adresse IP contacter ? Eh bien, le navigateur demande simplement à l'annuaire Internet. Enfin, à l'un d'entre eux. Et l'annuaire, appelé <abbr title="Domain Name Server">DNS</abbr>, trouve l'adresse IP correspondante et la donne au navigateur.

Je ne sais pas pour vous, mais moi je n'utilise jamais d'annuaire. La plupart du temps, j'ai recueilli l'adresse des personnes à qui je veux écrire dans mon carnet d'adresses personnel et je pioche dedans. C'est exactement à cela que sert le fichier **hôtes**. Chaque fois qu'un processus sur votre ordinateur a besoin d'accéder à une ressource sur Internet, il passe d'abord par le fichier hosts pour savoir où la trouver.

Maintenant, imaginons que vous ne vouliez pas que le processus trouve la ressource en question. Rien de plus simple, lancez-le sur une mauvaise piste, en associant le domaine badthings.com à une adresse non spécifiée comme 0.0.0.0.0.

Donc, si quelqu'un fait une liste de tous les domaines contenant des ressources problématiques, nous pouvons tous les rediriger vers 0.0.0.0.0 dans notre fichier hosts, et faire de **notre propre Web** un endroit beaucoup plus sympa.

## Un projet pour tous les rassembler

Il n'y a rien de nouveau dans ce que je décris ici. Les gens cool font ça depuis des années, partageant leurs fichiers hôtes. Les sites de <span lang="en">fake news</span>, les plates-formes de jeu d'argent, les groupements de sites pornographiques, les pages qui cryptominent sur votre ordinateurs, les tentatives de fraude et les escroqueries sont tous patiemment identifiés et répertoriés dans des fichiers en accès libre.

J'utilise [ le projet "hosts" de Steven Black](https://github.com/StevenBlack/hosts), un script python, pour les agréger en [un fichier hosts unique de 2MB](https://raw.githubusercontent.com/borisschapira/hosts/master/hosts) contenant plus de 70k domaines. Au cas où vous vous poseriez la question : je peux modifier le résultat avec ma propre liste d'acceptation (des domaines qui seraient bloqués normalement, mais dont je veux quand même laisser passer les requêtes) et des redirections (ce qui me permet d'écrire cet article et de vérifier le résultat sur https://borisschapira-dev.com:10443/ qui pointe, en fait, vers ma propre machine).

Si vous n'êtes pas à l'aise avec la ligne de commande et utilisez Windows 10, l'application [hostsman](http://www.abelhadigital.com/hostsman/) vous offrira les mêmes fonctionnalités (_malheureusement, au moment où je publie ce billet, le site web ne semble pas joignable. Heureusement, il existe une [version portable](https://portapps.github.io/app/hostsman-portable/) de l'application_).   
Je ne recommanderai pas de modifier votre fichier hôte sur les versions précédentes de Windows même si [je le faisais, avant 2015](/2015/08/de-windows-a-mac/), sauf si vous aimez exécuter `ipconfig /flushdns` toutes les 30 minutes. Sur Linux, j'ai vu des gens discuter de [dnscrypt-proxy](https://github.com/jedisct1/dnscrypt-proxy)… mais je ne l'ai jamais testé.

{% capture img_alt %}Un capture de la fenêtre de hostsman, lors de la gestion des sources.{% endcapture %}
{% capture img_caption %}Vous pouvez gérer des sources pour vos mises à jour dans hostsman{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2018-09-07/hostsman.png"
alt=img_alt
caption=img_caption
%}

## Quelques astuces pratiques

Parfois, j'ai besoin de désactiver temporairement ce fichier hosts. Par exemple, quand j'ai besoin d'aider des clients [Dareboost](https://www.dareboost.com/)  à comprendre l'impact des scripts tiers sur leurs pages (et que j'ai donc besoin de charger ces scripts tiers également).

Pour activer ou désactiver mon fichier hosts, j'utilise une fonction en ligne de commande que j'ai développée et placée dans mon fichier `~/.profile` [^ozsh]:

[^ozsh]: En réalité, je l'ai mises dans mon `~/.zprofile`, car j'utilise [Oh My ZSH](https://ohmyz.sh/).

```bash
function togglehost() {
    if [ -e /etc/host.bak ]
    then
        sudo mv /etc/host.bak /etc/hosts
        echo "Fichier host réactivé"
    else
        sudo mv /etc/hosts /etc/host.bak
        echo "Fichier hosts mis de côté"
    fi
}
```

Une fois cette fonction chargée, l'activation ou la désactivation de mon fichier hosts est très simple :

```terminal
$ togglehost
Fichier hosts mis de côté
$ togglehost
Fichier host réactivé
```

Mais comme j'oublie parfois de le remettre en place, j'ai mis en place une routine qui vérifie chaque minute que le fichier est bien là et, si ce n'est pas le cas, me prévient en utilisant [noti](https://github.com/variadico/noti), de Jaime Piña, pour déclencher une notification. Pour exécuter ce contrôle régulier, j'utilise `crontab`.


```
* * * * * if [ ! -e /etc/hosts ]; then /usr/local/bin/noti -t "Fichier hosts" -m "introuvable"; fi
```

Cela fait des années que j'utilise cette technique et il m'arrive d'oublier que mon fichier hosts me protège à ce point. Chaque fois que j'ai besoin d'utiliser l'ordinateur de quelqu'un d'autre, ou de désactiver temporairement mon fichier hosts, je réalise le niveau de confort qu'il me procure.

Je suis bien conscient que la manipulation de son propre fichier hosts est une solution efficace mais qui recquiert un certain niveau de compétence technique. Il ne remplace pas complètement un AdBlocker (ou je n'ai pas encore agrégé assez de fichiers) mais c'est un gain de performance incroyable, que je recommande fortement pour la navigation quotidienne.

Essayez par vous-même, et dites-moi ce que vous en pensez !

***

## Synthèse

Le **fichier hosts** est le carnet d'adresses interne de votre ordinateur qui guident les requêtes Web vers les bons serveurs. Remplissez votre fichier hosts avec des domaines pointant dans le vide vous permet de vous assurer que les requêtes pointant vers ces domaines échoueront rapidement et efficacement. Des gens partagent leurs fichiers hôtes depuis des années. Il existe maintenant des solutions pour les concaténer, ce qui permet de co-construire une solution pour lutter contre le Web pollué auquel nous devons faire face tous les jours.

***