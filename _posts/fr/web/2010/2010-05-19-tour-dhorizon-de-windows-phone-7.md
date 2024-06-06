---
title: "Windows Phone 7 : Tour d'horizon"
tags:
    - Mobilité
    - 'Windows Phone'
serie: 'Windows Phone'
canonical: 'https://blog.clever-age.com/fr/2010/05/19/tour-d-horizon-de-windows-phone-7/'
canonical_title: 'le blog de Nexeo'
---

Windows Phone est un système d’exploitation pour téléphones mobiles présenté par Microsoft lors du MIX 2010 sous le nom _Windows Phone 7 Series_. S’inspirant des modèles à succès que sont l’iPhoneOS d’Apple et l’Android de Google, Microsoft a fait table rase de son précédent système mobile et souhaite désormais s’imposer comme un acteur majeur du mobile grand public.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

### Matériel : un cahier des charges très strict

Les constructeurs de terminaux Windows Phone, tels que Samsung ou LG qui ont participé à la réalisation des prototypes présentés au MIX[^1], voient leur marge d’innovation réduire. En effet, les spécifications des combinés destinés au nouveau système devront respecter certains impératifs : un écran capacitif quatre points WGA d’une résolution de 800x480 pixels (une version HVGA de résolution inférieure sera envisagée par la suite), six boutons ("Démarrer", "Retour" et "Recherche (Bing)" auxquels s’ajoutent les désormais traditionnels boutons dédiés à la Photo, au Volume et bien sûr à l’allumage), un processeur ARMv7 Cortex (de 600MHz à 1GHz) ou Scorpion (1GHz), un chipset graphique supportant DirectX 9, 256Mo de RAM, 8Go de mémoire Flash au minimum, un appareil photo 5 mégapixels, un capteur Assisted GPS, un accéléromètre, une boussole, un chipset Wifi, et un module Radio FM. Différentes formes de combinés seront proposées, offrant parfois des fonctionnalités supplémentaires ou améliorées comme un clavier physique ou une webcam en façade.

{% capture img_alt %}Capture de l'écran d’accueil de Windows Phone 7 présentant plusieurs tuiles applicatives{% endcapture %} {% capture img_caption %}Écran d’accueil de Windows Phone 7 présentant plusieurs tuiles applicatives{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/1.jpg"
alt=img_alt
caption=img_caption
%}

En imposant un tel cahier des charge, Microsoft s’assure la mise en concurrence des constructeurs sur les prix plutôt que sur les fonctionnalités (limitées par design). À supposer que tous jouent le jeu (après tout, d’importantes opportunités de réalisation de marges existent avec d’autres systèmes comme Android), Microsoft pourrait bien parvenir à faire chuter les prix pour les consommateurs, ce serait une bonne nouvelle dans un marché du SmartPhone assez onéreux pour l’utilisateur (hors subventions des opérateurs de téléphonie mobile).

### Métro : le visage de la mobilité made in Microsoft

Windows Mobile 6.5 (rebaptisé _Windows Phone Classic_), prédécesseur de Windows Phone 7, n’a jamais été reconnu pour son interface. Portage mobile des systèmes d’exploitations Windows, l’interface apportait de nombreuses fonctionnalités mais manquait de convivialité avec ses menus déroulants et ses boutons minuscule qui obligeaient l’utilisateur à sortir un stylet. Tandis que de nombreux professionnels adoptaient ce style discutable, Apple peaufinait l’interface intuitive et tactile de son iPhone montrait que simplicité ne rime pas forcément avec austérité.

{% capture img_alt %}Capture de l'écran "Office Hub" (Univers Bureau){% endcapture %} {% capture img_caption %}"Office Hub" (Univers Bureau){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/2.jpg"
alt=img_alt
caption=img_caption
%}

Avec Windows Phone 7, finis le Menu Démarrer, les listes interminables d’icônes et les cases à cocher. Microsoft souhaite rattraper son concurrent voire même devenir prescripteur en terme d’interface. Pour cela, l’interface de Windows Mobile a été intégralement supprimée pour céder la place à un projet plus ambitieux nommé Métro. Derrière ce nom évocateur de "_modernisme rétro_" se cache une interface bien pensée, faisant une grande place aux contenus, aux espaces, aux couleurs primaires et entièrement manipulable au doigt.

{% capture img_alt %}Capture de l'écran Application Word pour Windows Phone : saisie d’un commentaire{% endcapture %} {% capture img_caption %}Application Word pour Windows Phone : saisie d’un commentaire{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/3.jpg"
alt=img_alt
caption=img_caption
%}

L’écran d’accueil est facile à lire sans être véritablement novateur dans son contenu. Composé de tuiles représentant les principales fonctionnalités du produit (applications, contacts spécifiques, galerie photo, liste de lecture…), il sert surtout de zone de lecture rapide (des informations pouvant apparaître sur les tuiles, comme les dernières photos de vos contacts) et de point d’entrée vers l’ensemble des modules d’activité du système. Ces modules, appelés Hubs ou Univers, réunissent des données en provenance d’applications ou de services Web de manière à ce qu’elles soient représentées rapidement. Le Hub People réunira ainsi l’ensemble des informations sur vos contacts Facebook, Hotmail, Exchange ou Gmail tandis que le Hub Applications concentrera vos jeux et logiciels récupérés sur le Microsoft Application Store. Pour rassembler ces informations en ensembles cohérents et chargés de sens, Metro fait appel à des paradigmes d’interfaces bien précis comme des larges panoramas ou l’écran se pose comme une fenêtre pouvant se déplacer latéralement ou de haut en bas, des effets de passage d’une page à une autre à la façon d’un jeu de carte ou encore l’usage du défilement différentiel pour créer un effet de profondeur.

L’expérience des Hubs (ou Univers) s’en trouve améliorée et on a vraiment l’impression d’utiliser des méta-applications capables de synthétiser l’information et de la représenter de manière rapide et exploitable sans se soucier de l’origine des données. L’utilisateur a ainsi l’illusion du Cloud[^2] en parcourant un mélange homogène d’informations pour lesquelles l’expérience utilisateur est exactement la même. L’apprentissage ergonomique des réflexes d’utilisation de l’appareil est donc très rapide, et permet aux utilisateurs d’assimiler la diversité des informations, alors que dans la plupart des systèmes existants aujourd’hui différentes sources de données s’expriment sur différents supports.

### Applications : une large ouverture vers le MarketPlace

Le parc d’applications disponibles dans le système regroupe les classiques E-Mail (multi-comptes), Calendrier, SMS/MMS, Téléphone, Contacts, Cartographie et Recherche, avec à chaque fois plusieurs ressemblances : un fort minimalisme, l’appel à une gamme de couleurs très réduite et un ensemble de fonctionnalités simples disponibles immédiatement dans une barre d’icônes en bas de l’écran (navigation dans Internet Explorer, ajout de rendez-vous dans le calendrier…). En faisant glisser cette barre vers le haut apparaissent les options plus complexes. Pour toute tâche relative à la recherche, l’utilisateur se tournera vers le bouton dédié. Contextuelle, la recherche triera vos rendez-vous en mode calendrier ou cherchera dans [Bing](http://www.bing.com/) si vous êtes dans le navigateur ou que vous venez de sélectionner une adresse à géolocaliser. Le navigateur, d’ailleurs, sera une version "7.5" d’Internet Explorer. Basée sur le moteur d’IE7, elle offrira la navigation par onglets, le support de Javascript et le zoom par pincement du pouce et de l’index.

{% capture img_alt %}Capture de l'écran Application Excel pour Windows Phone : capture du menu contextuel{% endcapture %} {% capture img_caption %}Application Excel pour Windows Phone : capture du menu contextuel{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/excel.jpg"
alt=img_alt
caption=img_caption
%}

Le copier-coller et le support de Flash seront absents de Windows Phone 7 à sa sortie. Plus qu’une véritable volonté de ne pas offrir ces fonctionnalités à ses utilisateurs, il semblerait qu’il s’agisse d’un manque de temps au niveau des développements. Cependant Microsoft assure que le système disposera de modules de reconnaissance des éléments interactifs dans les textes : adresses, numéros de téléphone ou images et proposera à chaque fois le comportement adéquat, Adobe annonçant de son côté travailler au support de Flash avec Microsoft. Reste à voir si ces promesses seront tenues et si ces deux absents seront rapidement implémentés, dans un patch du système ou dans une version ultérieure.

{% capture img_alt %}Capture de l'écran "Pictures Hub" (Univers Images){% endcapture %} {% capture img_caption %}"Pictures Hub" (Univers Images){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/4.jpg"
alt=img_alt
caption=img_caption
%}

Concernant les applications externes et pour la première fois, Microsoft ose l’absence totale de rétro-compatibilité. Qu’on se le dise, les applications développées pour Windows Mobile 6.5 n’auront pas leur place dans Windows Phone 7\. Évidemment, cela n’est qu’en partie vrai : on voit mal Microsoft tourner le dos à l’ensemble des partenaires et développeurs ayant travaillé pendant des années à développer des applications en .NET Compact Framework. En réalité, leurs applications ne tourneront pas sur Windows Phone 7 et cela n’est pas plus mal, car elles n’auraient pas du tout été adaptées aux nouveaux paradigmes d’interface de Métro. Leur code métier développé en .NET restera en revanche utilisable dans les programmes .NET en XNA ou Silverlight supportés par Windows Phone. Il n’y aura ainsi que les interfaces à reprendre en choisissant bien son support de développement. XNA s’articule autour du concept de temps réel avec une gestion fine de l’affichage, des rafraichissement et des performances : on le destinera plus facilement aux jeux (XNA est d’ailleurs le langage de développement du XBox Live Arcade). Silverlight facilite la mise en place d’applications respectant le style du système d’exploitation tout en apportant des fonctionnalités riches en termes de médias ou d’animations : on l’utilisera massivement pour les applications à contenus et les services.

{% capture img_alt %}Capture de l'écran de l'application Associated Press{% endcapture %} {% capture img_caption %}Application Associated Press{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/5.jpg"
alt=img_alt
caption=img_caption
%}

Si la plupart des applications offertes par le système pourront continuer à tourner en arrière-plan, ce ne sera visiblement pas le cas des applications issues du téléchargement. Le système supportera un gestionnaire d’états, similaire à un gestionnaire de cookies, permettant aux applications de retrouver un contexte lorsque l’utilisateur les ré-ouvrira mais entre les deux, elles ne s’exécuteront pas. Le multi-threading au sein d’une application, quant-à-lui, sera bel et bien supporté en tant qu’élément du Framework .NET. Les notifications dites "push" (comprendre : à l’initiative du serveur applicatif et non du téléphone) devront passer systématiquement par le _Microsoft Notification Service_ et ne nécessiteront pas qu’une application soit ouverte pour être reçues. Leur nombre s’affichera dans une barre en haut de l’écran, de manière non-intrusive tandis que leur lecture passera a priori par une application capable de décoder leur contenu.

{% capture img_alt %}Capture de l'écran Univers Microsoft MarketPlace{% endcapture %} {% capture img_caption %}Univers Microsoft MarketPlace{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/6.jpg"
alt=img_alt
caption=img_caption
%}

Toutes les applications devront être récupérées à partir du Windows Phone Marketplace, ce qui provoque déjà chez la plupart des développeurs de grands débats tant la nécessité de déployer des applications _ad-hoc_ pour réaliser des tests est grande. Heureusement, l’environnement de développement Windows Phone représenté par une version spécifique de Visual Studio 2010 propose un émulateur relativement complet. Microsoft aurait reconnu le besoin d’une fonctionnalité de déploiement locale à l’avenir mais confirme son absence dans le système au lancement. Sur le MarketPlace, la politique d’acceptation des applications sera moins restrictive que celle d’Apple et Microsoft a déjà annoncé ne pas empêcher la duplication de fonctionnalités offertes par le système. Rien n’empêchera donc les développeurs de proposer des applications plus pertinentes que celles offertes à l’origine, qu’il s’agisse des clients de communication, de solution de recherche (comme Google) ou de localisation (comme Google Maps), du navigateur ou d’autres fonctionnalités dans la limite des possibilités offertes par les applications externes (dont l’absence d’exécution en tâche de fond).

{% capture img_alt %}Capture de l'écran The Harvest, un Hack’n’Slash prometteur pour Windows Phone{% endcapture %} {% capture img_caption %}The Harvest, un Hack’n’Slash prometteur pour Windows Phone{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/7.jpg"
alt=img_alt
caption=img_caption
%}

Mais si le MarketPlace de Microsoft se distingue de celui d’Apple sur ce point, il est en très proche sur d’autres. Ainsi, le partage des revenus sera de 70%-30 % entre les développeurs et Microsoft. Développeurs, qui devront s’acquitter d’une licence annuelle de développement comprenant 5 comptes pour 99$. Le développeur souhaitant proposer des applications gratuites n’aura pas d’autres coûts et pourra ajouter de la publicité. La soumission d’une application payante coûtera en revanche 99$ supplémentaires.

### Développements : des portages sur tous les écrans

Le développement sous Windows Phone 7 se réalise via une version spécifique de Visual Studio, en XNA ou en Silverlight mais la plupart des applications seront développées dans ce second langage très orienté interfaces et médias et complètement supporté par les combinés. Il faut ainsi comprendre que les développeurs Silverlight auront très peu de travail pour passer d’une application WPF [^3] à une application _Silverlight for Web_ puis à une application _Silverlight for Windows Phone_. Les développeurs de Seesmic Desktop (un client Twitter pour Windows) ont ainsi confirmé avoir migrer leur application vers Windows Phone en conservant l’ensemble de leur code métier et en très peu de temps.

{% capture img_alt %}Capture de l'écran Twin Blades, un jeu XBox Live Arcade porté sur Windows Phone en environ deux semaines{% endcapture %} {% capture img_caption %}Twin Blades, un jeu XBox Live Arcade porté sur Windows Phone en environ deux semaines{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/8.png"
alt=img_alt
caption=img_caption
%}

Nous avons réalisé l’expérience en interne en développant une application très simple permettant d’afficher la disponibilité des VCub (vélos en libre service sur Bordeaux). Mise-à-part quelques contraintes sur la sécurité des appels aux Web Service (pour Silverlight Web comparé à WPF et Silverlight for Windows Phone), le code métier est exactement identique sur les trois plate-formes. Des modifications mineures ont dûe être apportées sur la partie XAML (le langage de description de l’interface, construit à partir de balises XML) car son support n’est pas exactement identique. Au final, cette application comportant 4 écrans et développée en une demi-douzaine d’heures a été portée sur les trois plateformes en moins de 30 minutes. Côté XNA, les migrations sont également très rapides et promettent de grands moments de jeu (certaines vidéos de The Harvest ou de Twin Blades montrent déjà le potentiel de la machine), de nombreuses applications existant déjà pour le Zune HD et la XBox 360.

{% capture img_alt %}Capture de l'écran Émulateur Windows Phone 7, très fidèle au système{% endcapture %} {% capture img_caption %}Émulateur Windows Phone 7, très fidèle au système{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2010-05-19/9.jpg"
alt=img_alt
caption=img_caption
%}

Mais la compatibilité des plate-formes n’est pas qu’ascendante. Microsoft s’est ainsi engagé à supporter Silverlight pour les développements XBox, permettant aux développeurs d’applications Windows Phone de les voir à moindre frais apparaître sur les écrans de télévision en plus des écrans d’ordinateurs. Microsoft dépense beaucoup d’énergie pour unifier son écosystème de développeurs autour d’expérience utilisateur riches et partagées entre plusieurs matériels, le tout en conservant les avantages de son environnement de développement Visual Studio et du Framework .NET : une très importante communauté arrivée à maturité, de fortes capacités multimédia et des bibliothèques de contrôles RIA riches et innovantes, dont certaines Open-Source.

### Conclusion : une stratégie intéressante, mais qui oublie le Web

Windows Phone 7 s’annonce comme un acteur de poids dans le monde du Smartphone, sans en révolutionner les paradigmes. Livré avec des fonctionnalités prometteuses, il sera vite enrichi de nombreuses applications issues des années d’expérience de l’écosystème de développeurs .NET rompus à Silverlight et XNA. Cependant, certaines absences (le copier-coller par exemple) et choix commerciaux (dont les frais pour la soumission d’applications) laissent une impression mitigée, d’autant que dans ce paysage de bonnes intentions et de promesses technologiques, très peu d’informations concernent HTML5 et le support des applications Web. Windows Phone 7 s’ajoute ainsi à la liste des smartphones pour lesquels les développements avancés nécessiteront une implication spécifique et donc une multiplication des coûts de développement, fussent ceux-ci rapides et facilités par la maturité d’un IDE qui a fait ses preuves.

[^1]: Le MIX est une conférence annuelle de Microsoft à destination des développeurs et créatifs Web durant laquelle l’entreprise dévoile ses dernières technologies

[^2]: Le Cloud Computing ou Informatique Dématérialisée est un concept utilisant l’ensemble de la puissance, de la mémoire et des services disponibles sur Internet ou sur un autre réseau pour simuler l’existence et la persistance de programmes et de données sur le matériel de l’utilisateur

[^3]: Windows Presentation Foundation, une couche de .NET utilisée pour le développement d’applications de bureau Windows proche de Silverlight
