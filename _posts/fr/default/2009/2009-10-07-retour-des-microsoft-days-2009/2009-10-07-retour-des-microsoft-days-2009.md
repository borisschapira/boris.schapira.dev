---
title: 'Retour des Microsoft Days 2009'
tags:
    - Technologie
    - Microsoft
    - MSDays
date: '2009-10-07'
section: default
lang: fr
type: post
---

Du 6 au 8 octobre ont lieu les [Microsoft Days](http://www.microsoft.com/france/microsoft-days/) à Issy-Les-Moulineaux (d'autres villes villes seront visitées jusqu'au 4 novembre). Arrivé à 9h30 le 6 au matin pour représenter [Nexeo](http://www.nexeo.fr/) en compagnie du reste de l'équipe [Nexdotnet](http://nexdotnet.nexeo.fr/) (tous munis d'un beau badge décideur), j'ai assisté à plusieurs conférences. Et le moins que l'on puisse dire, c'est que le sentiment général à la sortie de cet évènement est plus que mitigé. **Finies les années de "techtainment"**, de technologie au service du plaisir. Changement de stratégie. **Nous ne sommes plus à l'ère de l'enthousiasme**, mais à celui de l'efficacité. La crise est passée par là et c'est une véritable pluie d'austérité qui semble s'être abattue sur les SI. **Au menu&nbsp;: réduction des coûts, contrôle et externalisation.**

<!-- more -->

### 15-0, Redmond au service

Dans _Software As A Service_, Microsoft nous propose d'**intégrer le SI dans le Nuage**. Sharepoint, Dynamics, Exchange (avec de vrais morceaux d'Outlook Web Access dedans, cachez votre joie)… la firme nous propose de tout externaliser dans ses datacenters. Mais la logique ne s'arrête pas là, puisqu'avec Azure (_Platform As A Service_), ce sont les composants de nos applications (base de données, couche d'accès, couche Web…) qui finissent par être déportés et **instanciables à la volée** (moyennant finance, cela s'entend bien) pour supporter d'éventuelles montées en charge.

L'intérêt pour les SI est logistique : les machines ne sont plus gérées localement et ne coutent donc rien en entretien. En cas de problème de charge (comme par exemple [un téléviseur LCD 132cm d’une valeur de 1.899€ bradé à 179.99€](http://www.generation-nt.com/3-suisses-ecran-plat-samsung-actualite-849541.html) sur un célèbre site de e-commerce), une intervention très simple peut avoir lieu (dans Azure, par exemple, en multipliant les instances) et surtout, une fois le pic de charge passé, on peut revenir en arrière. Mais tout cela a **un coût non-négligeable**. Une dizaine de centimes par heure d'utilisation du processeur, par Go de bande passante entrante, un peu plus pour le stockage au Go et la bande passante sortante, quelques centimes pour chaque millier de transactions…

### Boy's Bande

Autant dire que le travail des développeurs va s'en trouver révisé en profondeur. Plus question de produire du code manquant d'optimisation&nbsp;: **chaque requête superflue aura une conséquence sonnante et trébuchante**. Sans compter les besoins en bande passante au niveau de l'entreprise, qui échangera régulièrement des données avec le datacenter. Mais Microsoft a toujours une solution : l'installation de serveurs de cache dédiés, en local. La boucle est bouclée.

Le métier de DBA sera certainement aussi affecté par ces modifications, la plupart des interventions sur les fermes externes pouvant être réalisées par les équipes locales. Dernière profession concernée&nbsp;: les juristes. Ils ont également de beaux jours devant eux, avec l'arrivée des réglementations internationales dans les politiques de continuité d'activité et de sécurité. En effet, **en cas de problèmes dans un datacenter du Nuage, où se trouvera la responsabilité légale** ? Dans le datacenter le plus proche, dans une version répliquée, dans le pays du client, aux États-Unis ?

### Seven Heaven

Les Microsoft Days ont également été l'occasion pour Microsoft de reparler de l'intégration de Windows 7, en compagnie des décideurs _early adopters_ du CEA, de SystAlians ou encore de PSA. Et **les premiers retours sont assez positifs**.

D.Schmit (CEA) rassure les DSI récalcitrantes en expliquant que **le passage d'XP à Windows 7 est transparent pour les utilisateurs** et que ceux-ci adoptent rapidement les nouvelles fonctionnalités du système, comme la fonction de recherche car les utilisateurs ont l'habitude, avec le web d'aujourd'hui, de chercher dans un moteur au lieu de suivre des liens. Et aucun risque d'incompatibilité des anciennes applications grâce aux Windows 7 XP Mode.

Avec la possibilité d'installer Windows 7 sur des machines de 4-5 ans, les DSI n'hésite plus à renouveller leur parc de licences, d'autant que ce nouvel OS leur permet de réaliser **d'importantes économies d'énergie** par rapport à ses prédécesseurs. JC Frichot (SystAlians) confirme en tablant sur 40 % d'économie d'énergie sur les postes de travail. L'argument est non-négligeable pour les gros parcs logiciels.

Enfin, l'autre intérêt pour les DSI est de reprendre le contrôle sur leur matériel, de plus en plus dispersé dans l'entreprise. Sur un PC portable qui ne revient sur le réseau de l'entreprise qu'une fois par trimestre, comment maintenir à jour les politiques de sécurité&nbsp;? [AppLocker](http://microsofttouch.fr/default/b/js/archive/2009/08/22/comprendre-applocker.aspx) et Direct Access permettent de paramétrer et de **déployer une grande gamme de règles**, allant jusqu'au blocage d'un éditeur, d'une application voire même d'un numéro de version **via une IP publique sans passer par un VPN**. Une fonctionnalité qui va faire fureur chez les administrateurs réseau. Idéal pour obliger les utilisateurs à toujours utiliser la dernière version des applicatifs métiers ou, au contraire, à restreindre leurs capacités de mise-à-jour…

### Not Wayne's World

L'évènement a été, comme toujours quand il s'agit de Microsoft, parfaitement formaté. Enregistrement rapide à l'arrivée, indications relativement claires, sessions de bonnes durée… **on pouvait sentir l'expérience** acquise ces dernières années.

Mais quelques moments désagréables sont venus tâcher ce tableau. Rien de grave, mais suffisamment pour laisser une mauvaise impression. Nous avons surtout été déçu d'un changement de salle survenu au dernier moment qui nous a fait raté la session sur le développement ASP.NET et ASP.NET MVC. Nous avons pourtant couru en direction de la bonne salle au moment où nous nous sommes rendu compte de l'échange, mais nous nous sommes fait refoulés. Et bien sûr, impossible de revenir dans la salle où nous étions, elle aussi pleine entre-temps. Rageant.

Nous nous sommes également retrouvé debout dans les couloirs venteux à de nombreuses reprises, interdits que nous étions de rentrer dans des salles vides, climatisées et bercées d'une ambiance musicale. Or contrairement au Tech Days, **il n'y a rien à faire aux MS Days entre les sessions**, à part du networking. Autant dire qu'on peut attendre jusqu'à 20 minutes devant une porte fermée  et gardée par un hotesse (où attendre que l'hotesse tourne la tête de l'autre côté pour rentrer quand même, mais c'est mal).

Enfin, dans le contenu lui-même des présentations, nous avons décelé de nombreuses publicités pour des partenaires et beaucoup d'auto-satisfaction gratuite. Plusieurs passages m'ont semblé vraiment **surréalistes**, comme ce fabuleux tableau censé expliquer à quel point Microsoft est supérieur à ses concurrents que l'on saute, faute de temps. Ou encore ce merveilleux moment d'interaction avec le public où on demande comment les décideurs nomment le dernier Windows. "Seven&nbsp;!" crie le public. Et le présentateur de reprendre en expliquant que Microsoft utilisera le même nom que celui donné le marché, et que ce nom sera donc "Sept". Cherchez l'erreur.

Attention Microsoft&nbsp;: quand on commence à clamer qu'on est supérieurs à ses concurrents et qu'on relâche l'attention que l'on porte à son marché…

Mais bon, moi je m'en fiche, [j'ai vu Steve Ballmer](http://twitpic.com/kh5ja)&nbsp;!
