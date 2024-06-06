---
title: 'Où est le WeChat occidental ?'
thumbnail_background: /assets/images/2017-06-20/touch.jpg
canonical: 'https://blog.clever-age.com/fr/2017/06/20/ou-est-le-wechat-occidental/'
canonical_title: 'le blog de Clever Age'
tags:
    - 'User eXperience'
slug: ou-est-le-wechat-occidental
translations:
    en: where-is-the-western-wechat
---

Il devient de plus en plus évident que la Chine est train de changer la façon dont Internet intègre le quotidien. Ce changement a un nom : [WeChat](https://blog.clever-age.com/fr/2017/06/07/wechat-10-fonctionnalites-cles-pour-votre-entreprise/). Quel impact pour le Web en occident ?

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

## WeChat réinvente les usages du Web

WeChat n’est pas un réseau social comme un autre, c’est un point de connexion avec les services qui entourent l’utilisateur : découverte de produits, dialogues en <abbr lang="en" title="Business To Business">B2B</abbr>, <abbr lang="en" title="Business To Consumer">B2C</abbr> ou <abbr lang="en" title="Consumer To Consumer(s)">C2C</abbr>, prises de rendez-vous, informations, paiement… les possibilités sont assez larges et c’est bien normal : l’application agit comme un centre regroupant de multiples services, des micro-applications, qui proposent chacune des services spécialisés simples à identifier. Pour résumer, WeChat est un centre de services s’exécutant au dessus du système d’exploitation de l’appareil mobile.

{% include media/video_iframe.html.liquid width="480" height="321" url="https://static01.nyt.com/video/players/offsite/index.html?videoId=100000004574648" title="&quot;How China Is Changing Your Internet&quot; By JONAH M. KESSEL and PAUL MOZUR" %}

## Pourquoi n’a-t-on pas la même chose en Occident ?

Facebook n’est pas à sa première tentative, sans que la magie n’opère, car les réponses à cette problématique sont nombreuses.

D’abord notre marché est plus contraint. Bien que la Chine soit limitée dans son accès au monde extérieur par la présence du Great Firewall[^gf], son marché intérieur est assez, voire très libéral. La protection de la vie privée y est balbutiante, les normes de contrôle très réduites et les réglementations laxistes, quand elles existent (au contraire de l’Union Européenne, qui suis exactement le chemin inverse)[^rgdp].

[^gf]: Dont nous parlions dans notre article "[S'implanter en Chine : état des lieux](https://blog.clever-age.com/fr/2014/07/28/s-implanter-en-chine-etat-des-lieux/)".

[^rgdp]: Nous en parlions plus en détails dans notre article "[Réglement Général sur la Protection des Données Personnelles : petit guide pour les entreprises](https://blog.clever-age.com/fr/2017/04/04/reglement-general-sur-la-protection-des-donnees-personnel-petit-guide-pour-entreprises_rgpd/)".

Autre élément de réponse : les barrières à l’entrée constituée par les App Store. Le système de rémunération applicatif d’Apple, mis en place il y a près de 10 ans et copié par Google pour Android, est aujourd’hui très bien implanté et génère plusieurs milliards de dollars de revenus. Il offre aux éditeurs la possibilité de commercialiser leur production et d’inclure des modalités d'achat à la volée au sein de l'application via des App Stores. Le gestionnaire de l'App Store assure la rotation de l'offre, la cohérence de l’expérience utilisateur et touche une commission.

## La rigidité des App Store

Le système des App Store, aussi satisfaisant qu’il soit, atteint ses limites. Il noie l’utilisateur sous une offre pléthorique qui manque de contexte. Le nombre de Stores alternatifs explose dans un certain nombre de marché émergents, où l’on trouve, par exemple, des Stores offrant des applications adaptées à des matériels bas de gamme sur lesquelles les applications "classiques" ne tournent pas.

{% capture img_alt %}Une main tenant un téléphone de face. On y voit de nombreuses applications Android listées dans un menu.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-06-20/50614.jpg"
alt=img_alt
%}

La découverte des services est également problématique sur un système centralisé de ce type. En regroupant l’offre d'applications, les App Store la rendent moins contextuelle, moins locale, moins ciblée. La découverte d’applications est alourdie et la proposition de service est, in fine, moins efficace. WeChat fonctionne mieux en proposant des services locaux, basés sur l’utilisateur et son réseau. Plutôt que de chercher dans un App Store, il est courant que les utilisateurs de WeChat scannent directement un QR Code qui leur donne accès au service dont ils ont besoin immédiatement.

## L’alternative est déjà dans votre poche

Comment égaler l’application WeChat ? C’est déjà (presque) fait. Nous disposons déjà d’applications capables d'en héberger d’autres, de créer des interconnexions entre services et contenus Web, d’offrir des services sans passer par les App Store et les contraintes qu’ils imposent. Vous pensez à Facebook ? Raté. Je parlais de nos navigateurs.

Google, fort de la position hégémonique de son navigateur Chrome, a pris le train en marche en adhérant massivement aux applications web "comme des vraies", allant jusqu’à inventer le concept de [Progressive Web App](https://blog.clever-age.com/fr/2016/12/29/les-progressive-web-apps-pour-booster-ux/), quitte à disrupter son propre modèle économique là où Apple freine encore des quatre fers. Alphabet, sa maison-mère, a en effet compris comment faire des <abbr lang="en" title="Progressive Web Apps">PWA</abbr> des applications à part entière, y compris au niveau de l’expérience utilisateur ([Twitter Lite](https://mobile.twitter.com/), par exemple, est une version PWA de Twitter qui n'a pas grand-chose à envier à l'application native).

## Vers la fin des App Store ?

Même en prenant en compte ces possibilités, la disparition des App Stores poserait encore certains problèmes :

-   disparition de la "présence de marque", c’est-à-dire de la capacité pour les utilisateurs de retrouver leurs marques préférées dans un annuaire de services ;
-   absence d’un module applicatif donnant les mêmes capacités de paiement à une <abbr lang="en" title="Progressive Web App">PWA</abbr> que ce qu’on trouve sur un App Store.

Rien de plus facile, pour Apple ou Google, que de transformer leurs annuaires applicatifs en annuaire de <abbr lang="en" title="Progressive Web Apps">PWA</abbr>. Ils pourront garder des mécanismes de contrôle automatisé de la qualité (comme [Lighthouse](https://developers.google.com/web/tools/lighthouse/)) mais déléguer le rôle de répertoire aux éditeurs.

Quant aux QR codes, qui ne recontrent pas nécessairement leur succès en occident, il y a fort à parier pour qu'ils soient complétés par d'autres modes de découverte : géo-localisation fine, conciergerie numérique plus ou moins intégrée à un système de Chat Bots… des sujets sur lesquels Google est également en pointe avec Google Now, Google Allo…

## Reste enfin le sujet du paiement

Géraldine aime la course à pieds, et voudrait commencer un suivi précis de ses trajets de course. Ne sachant pas quelle application installer, elle fait une recherche sur Google et trouve un site spécialisé.

À sa troisième visite, son navigateur lui signale que le site est disponible en tant qu’application, et lui propose de l'installer, ce qu'elle fait. Au sein de cette application, elle trouve un outil de suivi des trajets qui correspond à ses besoins.

Quelques mois plus tard, l'application lui signale qu'en analysant ses données de courses, elle a détecté une chance assez importante de foulée supinatrice et lui propose, en partenariat avec une grande marque de sport, de nouvelles chaussures de courses adaptées. Géraldine procède au paiement dans l'application, qui utilise sont profil Google pour récupérer ses coordonnées postales et bancaires, sans aucune friction.

{% capture img_alt %}Une personne fine est assise sur le sol, en tenue de sport. L'objectif se focalise sur sa chaussure droite, qui semble être une chaussure de running.{% endcapture %} {% capture img_caption %}Un scénario mêlant Web, application et achats de manière transparente pour l'utilisatrice.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-06-20/260290.jpg"
alt=img_alt
caption=img_caption
%}

Ce sujet va cristalliser l’avenir du Web ces prochains mois, voire ces prochaines années. C'est [un des sujets d’études "chaud" du <abbr title="World Wide Web Consortium">W3C</abbr>](https://www.w3.org/Payments/ 'Web Payments at W3C: Making Payments Easy on the Web'). Les <abbr lang="en" title="Progressive Web Apps">PWA</abbr> seront rapidement le cheval de Troie de librairies proposées par les éditeurs de systèmes d’exploitation pour faciliter et encadrer le paiement en échange d’une commission, sur la base d’un standard comme la [Payment Request API](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/). Le marché est conséquent et la lutte sera féroce avec d'autres acteurs qui n'ont pas l'intention de se faire damer le pion.

Il n’est pas impossible que Google attaque ce marché par le biais d’<abbr lang="en" title="Accelerated Mobile Pages">AMP</abbr>[^amp] : en entrant par la porte de la performance Web, cette alternative à <abbr lang="en" title="HyperText Markup Language, le fondement sémantique du Web">HTML</abbr> est une façon détournée de prendre le contrôle du Web et de ses processus de développement économique (s’assurant au passage de meilleures capacités d’indexation, à des coûts plus faibles, ce qui ne fait pas de mal quand la donnée est la matière première de son business et que la bande passante est un de ses plus gros centre de coût). Le paiement est d’ailleurs en bonne position dans la [feuille de route](https://www.ampproject.org/roadmap/ 'Feuille de route du projet AMP'). </abbr>

Autant d'indices concordant laissant à penser que les <abbr lang="en" title="Progressive Web Apps">PWA</abbr> s’intégreront progressivement à l'offre applicative de Google Play.

[^amp]: Lire à ce sujet : "[AMP Project booste le chargement des pages web](https://blog.clever-age.com/fr/2016/02/08/amp-project-booste-le-chargement-des-pages-web/)"

## TL;DR : Google est sur les rails, et il va vite

WeChat révolutionne le Web et le mobile en Chine mais la transposition de son modèle en Occident n’est pas triviale. Beaucoup s’y sont essayé (à commencer par Facebook) sans y parvenir. Il y a fort à parier que la pression chinoise amorce une nouvelle évolution logicielle du Web, par le biais des navigateurs, des <abbr lang="en" title="Progressive Web Apps">PWA</abbr>, des moteurs de recherche et de la conciergerie de services géo-localisée, quatre domaines dans lesquels Google (Alphabet) excelle aujourd’hui.

Cette nouvelle révolution ne pourra pas se produire sans de vraies avancées concernant la standardisation des modalités de paiement, un sujet sur lequel le <abbr title="World Wide Web Consortium">W3C</abbr> travaille activement.
