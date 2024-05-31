---
title: 'Fiabiliser les connexions sécurisées avec HSTS (HTTP Strict Transport Security)'
thumbnail_background: /assets/images/2017-09-18/1.jpg
canonical: 'https://blog.dareboost.com/fr/2017/09/hsts-fiabiliser-connexions-securisees/'
canonical_title: 'le blog de Dareboost'
tags:
    - 'Performance Web'
slug: hsts-fiabiliser-connexions-securisees
last_modified_at: 2017-10-16
translations:
    en: hsts-ensure-secured-connections
---

Si vous fréquentez [le blog de Dareboost], il ne vous aura pas échappé [qu’il est urgent de passer au HTTPS](https://blog.dareboost.com/fr/2016/03/https-necessaire-pas-uniquement-pour-le-seo/). L’échéance est d’autant plus forte que les géants du Web ont déjà tiré leurs coups de semonce en affichant des alertes sur certaines pages en HTTP dans Google Chrome et Mozilla Firefox. Bientôt, ce seront tous les formulaires qui seront concernés.

Cela étant dit, avoir un site accessible en HTTPS ne suffit pas à basculer l’ensemble de son trafic automatiquement vers cette nouvelle version.

{% capture img_alt %}Le long d'un aiguillage ferroviaire, un feu bicolore indique si un train peut passer.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-09-18/2.png"
alt=img_alt
%}

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

## Mise en place d’une redirection : une technique qui présente des limites

Une des manières les plus efficaces de rediriger le trafic vers la version HTTPS de votre site est la mise en place d’une redirection permanente (code 301, avec un entête HTTP _Location_ indiquant la page destination). Utilisateurs comme moteurs de recherche visitant le site HTTP seront ainsi redirigés automatiquement vers la version HTTPS.

Cela suffit-il ? Malheureusement non. Car cette redirection ne corrigera pas, pour la plupart des utilisateurs, l’action d’origine les ayant amenés à interroger cette URL non-sécurisée. Certains auront tapé directement l’URL en HTTP, d’autres auront cliqué sur une icône de leur barre de favoris, d’autres encore auront suivi un lien situé sur un site tiers. L’erreur étant humaine, vous n’êtes pas, vous-même, à l’abri de laisser traîner un lien interne en HTTP dans votre site Web HTTPS. Dans tous ces cas, la redirection ne suffit pas à garantir la sécurité du trafic de vos visiteurs et ajoute à la navigation le coût d’une requête supplémentaire, affectant ainsi la performance.

De plus, subir une redirection vers une version sécurisée implique que l’on a d’abord cherché à joindre une page non-sécurisée. Durant cette requête initiale, la navigation est susceptible d’être capturée. Si un individu mal intentionné a accès au réseau de votre visiteur, il sera en mesure d’intercepter le trafic et, pire encore, de le détourner pour acquérir des données de navigation. La liste des situations à risque est longue : bornes Wi-Fi publiques, connexion internet fournies par les compagnies de transport (qui sont parfois les premières à injecter des contenus dans le trafic non-sécurisé), réseau privé compromis, etc.

Que l’on parle de sécurité ou de performance, il est donc nécessaire d’éviter autant que possible cette redirection.

## <abbr lang="en" title="HTTP Strict Transport Security">HSTS</abbr> pour forcer le trafic vers HTTPS

HTTP Strict Transport Security (<abbr lang="en" title="HTTP Strict Transport Security">HSTS</abbr>) est une directive, dont la spécification complète se trouve dans la [RFC 6797](https://tools.ietf.org/html/rfc6797). Elle se présente comme un entête de réponse envoyé par le serveur au navigateur **lui déclarant que le domaine interrogé est destiné à être visité uniquement en HTTPS**.

Le navigateur enregistre l’information et, si à l’avenir l’URL non-sécurisée est interrogée, il effectuera automatiquement une redirection interne (code 307) vers la version HTTPS. Comme HSTS ne concerne que les appels futurs, la mise en place de redirections 301 sur les appels HTTP reste pertinente.

La directive dispose une durée de validité exprimée en secondes dans le paramètre `max-age`. Une valeur à 300 ordonne au navigateur de mémoriser l’URL sécurisée pendant cinq minutes. Une valeur à 63072000, pendant deux ans.

Il est recommandé d’implémenter HSTS avec une faible durée de rétention, puis d’augmenter progressivement. À chaque étape, attendez a minima le temps paramétré dans `max-age` puis détectez les requêtes infructueuses et surveillez les métriques de votre domaine. Corrigez les problèmes constatés.

Voici un exemple d’implémentation avec Apache, pour une rétention de 5 minutes :

```
Header always set Strict-Transport-Security "max-age=300; includeSubDomains;"
```

Le paramètre `includeSubDomains` permet de forcer le HTTPS pour l’ensemble des sous-domaines : attention, si certaines de vos ressources sont uniquement accessibles en HTTP, mieux vaut ne pas activer cette option !

En cas d’erreur, sachez cependant qu’un retour en arrière est possible en modifiant votre directive HSTS avec un `max-age` à 0.

> A max-age value of zero (i.e., `max-age=0`) signals the UA to cease regarding the host as a Known HSTS Host, including the includeSubDomains directive (if asserted for that HSTS Host). <cite>[RFC6797, Section 6.1.1](https://tools.ietf.org/html/rfc6797#section-6.1.1)</cite>

Récapitulons. La directive HSTS permet, en complément d’une redirection 301, de sécuriser le trafic futur d’un visiteur pendant une période donnée, sur un contexte de domaine défini (domaine courant ou domaine et ensemble des sous-domaines). Reste toutefois un problème de sécurité : l’accès initial du visiteur à la version non-sécurisée.

## Un trafic totalement sécurisé et fiable avec HSTS Preloading

Pour sécuriser davantage l’ensemble du trafic des sites sécurisés, le projet Chromium maintient une liste des domaines "valides HSTS", c’est-à-dire :

-   disposant d’une version sécurisée à l’aide d’un certificat valide ;
-   ayant mis en place des redirections 301 de HTTP vers HTTPS ;
-   dont tous les sous-domaines sont sécurisés ;
-   proposant une directive HSTS (y compris sur la redirection 301) d’une validité minimale de <del datetime="2017-10-16T07:25:54.566Z" cite="https://hstspreload.org/">18 semaines (10886400 secondes)</del> <ins datetime="2017-10-16T07:25:54.566Z" cite="https://hstspreload.org/">un an (31536000 secondes)</ins>[^twalle], incluant les sous-domaines et spécifiant l’attribut `preload`.

[^twalle]: La valeur était de 18 semaines lorsque j'ai écrit l'article. Elle a été repoussée à une année entre le 11 et le 16 octobre 2017. Merci à [@Thibault_Walle](https://twitter.com/Thibault_Walle) de me l'avoir signalé en commentaire.

Un site éligible pourra alors [rejoindre le registre HSTS Preloading](https://hstspreload.org/ 'HSTS Preload List Submission') embarqué dans Chrome, [Firefox](https://blog.mozilla.org/security/2012/11/01/preloading-hsts/ 'Preloading HSTS ∣ Mozilla Security Blog'), Opera, Safari, [IE 11 et Edge](https://blogs.windows.com/msedgedev/2015/06/09/http-strict-transport-security-comes-to-internet-explorer-11-on-windows-8-1-and-windows-7/ 'HTTP Strict Transport Security comes to Internet Explorer 11 on Windows 8.1 and Windows 7 - Microsoft Edge Dev BlogMicrosoft Edge Dev Blog'). Toute requête non-sécurisée vers ce domaine bénéficiera alors d’une redirection interne (code 307) avant même que ne démarre la requête.

{% capture img_alt %}Une capture des Chrome DevTools{% endcapture %} {% capture img_caption %}Redirection interne lors d’une tentative d’accès à Facebook en HTTP dans Chrome 60.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-09-18/2.png"
alt=img_alt
caption=img_caption
%}

Attention : contrairement au chapitre précédent, modifier la directive pour revenir en arrière en cas d’erreur de votre part ne suffira pas. Des domaines peuvent être supprimés du registre, mais il faut des mois pour que tous les utilisateurs concernés voient leur navigateur mis à jour avec cette nouvelle liste. Ne demandez donc pas à être inclus à HSTS Preload à moins d’être sûr que vous supporterez HTTPS pour votre domaine et tous ses sous-domaines à long terme.

## Protégez vos utilisateurs avec HSTS

La directive HSTS existe depuis plusieurs années. Elle permet de sécuriser le trafic futur de vos visiteurs et, couplée à l’inscription dans le registre HSTS Preloading, de fiabiliser même leur première connexion. Sa mise en place doit être faite avec précaution, car elle impose la sécurisation de l’ensemble des sous-domaines du domaine concerné. Une fois mise en place, elle fiabilise durablement le trafic sécurisé des visiteurs, améliore la performance en supprimant des redirections 301 et, dans la mesure où ce trafic sécurisé est valorisé par l’algorithme de Google, améliore le référencement.

## Bonus : avec HSTS Preload, protégez votre domaine des attaques de type <i lang="en">SSL strip</i>

Celles et ceux qui suivent l'actualité du Web auront remarqué le danger représenté par [Krack Attacks](https://www.krackattacks.com/), une démonstration de piratage du protocole WiFi WPA2. Une des étapes de l'attaque consiste, pour le logiciel malveillant, à intercepter les requêtes SSL émises par l'internaute, les réaliser lui-même puis répondre le résultat en HTTP. Un simple instant d'inattention suffit alors pour qu'un pirate s'empare d'informations privées. Si votre domaine est indexé dans la liste HSTS Preload, alors le navigateur refusera de basculer en HTTP pour le visiter, protégeant ainsi vos visiteurs.

## Lectures complémentaires

-   [[EN] HTTP Strict Transport Security – The Chromium Projects](https://www.chromium.org/hsts)
-   [[EN] HTTP Strict Transport Security Cheat Sheet – OWASP](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet)
