---
title: Votre site est un restaurant
translations:
    en: restaurant-analogy
---

Dans la plupart des organisations, avant même de créer un site web, les équipes sélectionnent les technologies à utiliser, souvent sans avoir défini le périmètre fonctionnel et l'expérience utilisateur souhaitée. Je ne m'attarderai pas ici sur leurs motivations, mais le fait est qu'elles présentent cela aux parties prenantes qui, souvent, ne savent pas de quoi il retourne et valident par manque de compétences.

Avant de vous plonger dans les dernières technos mises en avant par les grandes entreprises, en pensant avoir les mêmes besoins et capacités qu'elles, permettez-moi de prendre un moment pour vous expliquer comment un site web est construit, en utilisant une métaphore que vous comprendrez : les restaurants.

---

{% capture img_alt %}Salade de légumes sur assiette en céramique blanche.{% endcapture %}{% capture img_caption %}Photo par Iina Luoto{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-iina-luoto-460132-1211887.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Comment servir un plat de restaurant ?

Si vous souhaitez un jour servir un plat, vous aurez besoin d'une liste précise d'ingrédients et de leurs attributs (qui peuvent dépendre de l'ingrédient). Une carotte peut être cuite à la vapeur, un œuf poché. Cette liste d'ingrédients cuisinés ajoute de la profondeur et de la saveur au plat.

{% capture note %}Ça, c'est HTML.{% endcapture note -%}{%- include note.html.liquid content=note %}

Des ingrédients cuisinés ne suffisent pas à créer un plat ; la présentation est essentielle. Pour susciter l'intérêt des clients, vous devez mettre en valeur ces ingrédients d'une manière qui reflète l'essence de l'art culinaire du restaurant.

{% capture note %}Ça, c'est CSS.{% endcapture note -%}{%- include note.html.liquid content=note %}

Toutefois, une belle présentation ne suffit pas à définir un plat de restaurant. Pour y parvenir, il faut un personnel de service attentif qui prend les commandes, les communique à la cuisine et sert ensuite les assiettes dans la salle à manger.

{% capture note %}Ce processus représente votre navigateur qui interagit avec le web.{% endcapture note -%}{%- include note.html.liquid content=note %}

{% capture note %}Voilà, vous avez les bases.

Maintenant créons un restaurant qui deviendra par la suite une franchise.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Plusieurs collègues joyeux, travaillant sur un ordinateur portable dans un café{% endcapture %}{% capture img_caption %}Photo par Ketut Subiyanto{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-ketut-subiyanto-4350066.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Créer le projet

Pour mener à bien ce projet, les propriétaires réunissent une équipe dédiée. Celle-ci comprend un designer qui imagine l'expérience client, un chef cuisinier chargé d'élaborer les processus de cuisine et des artisans qualifiés chargés de construire les meubles et les cloisons. Bien que les propriétaires n'aient pas les moyens d'embaucher un designer, un chef et des artisans à temps plein dans un premier temps, ils prévoient de le faire une fois la franchise établie afin d'optimiser les coûts.

Le lancement du projet implique rapidement que les parties prenantes se rencontrent, car certaines décisions prises en cuisine impactent l'organisation de la salle de restauration ainsi que les choix de design. Servir de la nourriture fusion dans un décor de cow-boy n'est peut-être pas le meilleur choix !

Le comité de pilotage s'appuie sur les retours des artisans et de la brigade ; cependant, il prend fréquemment des décisions en huis clos. Il est donc essentiel que les informations partagées avec lui soient de haute qualité et qu'il possède une expérience suffisante pour prendre des décisions éclairées.

{% capture note %}De nombreux projets web débutent par la constitution d'un petit comité de pilotage composé de prestataires, chargé de définir la vision et la gouvernance du projet. Au cours de cette phase, des décisions sont prises qui peuvent ne pas tenir compte des équipes qui seront chargées de faire vivre ces initiatives au cours des mois, voire des années suivantes.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Homme prenant une photo avec une femme tenant un verre{% endcapture %}{% capture img_caption %}Photo par ELEVATE{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-elevate-3009800.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Répétitions et pré-ouverture

Une fois que tout est en place, les propriétaires organisent des services fictifs, également appelés répétitions générales, qui permettent au personnel de service de simuler des scénarios réels, les aidant ainsi à affiner leur fonctionnement et à identifier tout problème opérationnel avant le lancement officiel. C'est souvent la première occasion pour tout le personnel de travailler ensemble.

{% capture note %}Dans les projets web, nous appelons cela l'environnement d'intégration.{% endcapture note -%}{%- include note.html.liquid content=note %}

Une fois les propriétaires satisfaits, ils invitent amis et famille pour des pré-ouvertures privées. Cela permet à l'équipe de tester le service et de recueillir des retours clients dans un environnement concret, en apportant les ajustements nécessaires.

{% capture note %}C'est l'environnement de pré-production ou de staging.{% endcapture note -%}{%- include note.html.liquid content=note %}

Petit à petit, les propriétaires décident d'augmenter le nombre de personnes. C'est un test de la capacité à monter en charge du service. Combien de clients pouvons-nous accueillir en une soirée ? Et combien pouvons-nous servir en une semaine ? Et si nous atteignons notre limite, qu'est-ce qui lâchera en premier et quelle sera l'expérience client ?

{% capture note %}Sur le web aussi, nous faisons des tests de charge !{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Un homme inconnu sert de délicieux sandwichs dans un restaurant.{% endcapture %}{% capture img_caption %}Photo par Rachel Claire{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-rachel-claire-5490926.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## L'offre la plus simple

Le premier bistrot est désormais officiellement ouvert ! L'expérience culinaire est simple mais très efficace. Le menu propose une sélection soigneusement choisie et très limitée de plats, garantissant que chaque commande est préparée rapidement, satisfait les clients et est joliment présentée. Les clients peuvent commander à la carte, ou même demander des plats personnalisés, mais la plupart ne le font pas. Le personnel de service peut se déplacer efficacement entre la cuisine et les tables, améliorant ainsi l'efficacité globale du service. Après quelques années de fonctionnement, les propriétaires décident d'investir pour multiplier le nombre de restaurants. La franchise est en place.

{% capture note %}Les sites web très simples en HTML+CSS, avec une personnalisation côté serveur limitée, sont souvent les plus rapides. Ils ont un <span lang="en">Time To First Bite</span> (Temps avant la Première Bouchée) très court ! La montée en charge est souvent aussi simple que de multiplier les serveurs frontaux.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Un salon moderne et dynamique avec des sièges rembourrés colorés, des murs en bois et des luminaires suspendus.{% endcapture %}{% capture img_caption %}Photo par MR PHOTOGRAPHER{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-mr-photographer-549209752-27605495.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## <span lang="en">Fast Food</span>

À un moment donné, les propriétaires estiment que le concept peut être optimisé en investissant dans un processus de production à la chaîne plus efficace. Les clients perdent ainsi la possibilité de personnaliser leurs plats et doivent choisir parmi des menus standardisés. La brigade n'a besoin de consulter une nouvelle recette qu'une seule fois pour en maîtriser instantanément la préparation. La rapidité du service est donc déterminée par la vitesse à laquelle le personnel de service peut livrer les assiettes, dans la mesure où l'espace le permet. Le nouveau goulet d'étranglement est le paiement, car il n'est pas possible de produire en masse les additions, qui dépendent de la commande de chaque table, et de procéder à leur encaissement.

{% capture note %}Sur le web aussi, on peut obtenir des réponses instantanées si l'on sert le même contenu à chaque visite : c'est ce qu'on appelle la mise en cache. Cependant, quelle que soit la rapidité de votre site web, la vitesse sera toujours limitée par les étapes personnalisées, telles que les entonnoirs de paiement. Il est essentiel de garantir une excellente interface utilisateur pour éviter les frustrations.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Un homme portant un tee-shirt rouge tient un presse-papiers et se tient devant des cartons empilés dans ce qui semble être une zone de stockage.{% endcapture %}{% capture img_caption %}Photo par Kampus Production{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-kampus-7843990.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Quality Audits

Pour obtenir une certification ISO et se conformer aux cadres réglementaires dans tous les lieux où la franchise opère, les propriétaires ont choisi de mener des audits complets sur l'ensemble de la chaîne. Cela inclut tout, de l'accès des clients à la salle de restauration, aux procédés de fabrication des denrées alimentaires, en passant par l'approvisionnement en ingrédients.

Les thèmes peuvent varier considérablement. Par exemple, les auditeurs peuvent signaler l'absence de mains courantes dans les toilettes pour les clients handicapés ou souligner que le type de carottes utilisé en cuisine n'est pas sourcé localement. Ils fournissent des listes de contrôle, tests et vérifications que les propriétaires peuvent effectuer avant, pendant et après chaque service pour éviter toute régression en termes de qualité.

{% capture note %}L'assurance qualité (<span lang="en">Quality Assurance</span>, ou QA) dans le développement web garantit que les sites web fonctionnent correctement et répondent aux exigences grâce à des processus de test et de validation systématiques. L'audit implique la révision et l'évaluation des applications web pour leur conformité aux normes et aux meilleures pratiques, identifiant les domaines à améliorer. Certains outils automatisés permettent d'effectuer des tests répétitifs de manière efficace, améliorant ainsi la fiabilité et la rapidité. Cependant, certains problèmes, en particulier l'accessibilité numérique, nécessitent une évaluation manuelle approfondie pour garantir la conformité avec des directives telles que les <span lang="en">Web Content Accessibility Guidelines (WCAG)</span> ou en France, le Référentiel Général d'Amélioration de l'Accessibilité (RGAA).{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Serveur présentant une bouteille de vin dans un restaurant.{% endcapture %}{% capture img_caption %}Photo par Fabrizio Velez{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-fabriziovelez-15270300.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Service en salle

Pour améliorer la qualité du service, les propriétaires ont décidé de mettre en place une équipe d'assistance à la clientèle appelée "<span lang="en">Jolly Servants</span>" (JS). Certains de ces JS sont spécialisés dans les boissons, tandis que d'autres se concentrent sur l'assaisonnement. Parfois, ils offrent des services personnalisés sans quitter la salle, en fournissant des recommandations ; cependant, il arrive qu'ils aient besoin de l'aide de la cuisine, et demandent alors de l'aide au personnel de service habituel. Certains sont maladroits et déstabilisent le service lorsqu'ils tombent.

Bien que l'expérience de l'utilisateur soit de plus en plus personnalisée, la salle peut devenir quelque peu bondée, ce qui ralentit le service. Par conséquent, certains clients peuvent se retrouver à attendre avant de pouvoir profiter d'une expérience satisfaisante. En outre, le personnel de service doit parfois déplacer des assiettes pour faire de la place à d'autres, ce qui peut être frustrant.

{% capture note %}JavaScript (JS) améliore les capacités natives du navigateur en offrant une expérience utilisateur avancée qui peut dépendre (ou non) des données du serveur. Cependant, une quantité excessive de JS peut entraîner des tâches longues (périodes pendant lesquelles le navigateur ne répond plus), ce qui peut se traduire par une expérience plus lente ou moins satisfaisante. Le déplacement d'éléments visuels peut entraîner des changements de mise en page, ce qui réduit encore l'expérience globale de l'utilisateur.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Une jeune femme souriante, vêtue d'une chemise et d'un tablier roses, prend des notes devant le mur coloré d'un restaurant couvert de graffitis.{% endcapture %}{% capture img_caption %}Photo par Andrea Piacquadio{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-olly-3801649.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Mesurer pour optimiser

Pour améliorer les conditions d'exploitation du restaurant, les propriétaires ont engagé deux maîtres d'hôtel contractuels. L'un d'eux se concentre sur l'évaluation de la cuisine et du bureau, en identifiant les goulets d'étranglement dans les zones de stockage et de préparation, ainsi que dans la comptabilité. L'autre maître d'hôtel observe le personnel de service, les interactions avec les clients à leur table et la caisse enregistreuse.

Tous deux prennent méticuleusement des notes, qui sont ensuite envoyées à leur entreprise, laquelle génère un rapport en temps réel détaillant les performances du restaurant, avec des données de diagnostic et des recommandations d'amélioration réalisables.

Leur présence peut ralentir les opérations, surtout dans une cuisine ou une salle à manger déjà encombrée.

Les propriétaires reconnaissent qu'il ne s'agit là que d'une partie de leur investissement. Ils ont également confié au comité de pilotage la responsabilité de mettre en œuvre les améliorations, car l'observabilité seule est inefficace sans un effort d'amélioration continue qui lui aussi, coûte de l'argent.

{% capture note %}Pour améliorer les performances du site web, les parties prenantes s'appuient souvent sur de la télémétrie. Certains services se spécialisent dans la surveillance du back-end, comme les outils de suivi des performances des applications (<span lang="en">Application Performance Monitoring, APM</span>), tandis que d'autres se concentrent sur le front-end, notamment les outils analytiques (<span lang="en">Analytics</span>) et de surveillance des utilisateurs réels (<span lang="en">Real User Monitoring, RUM</span>). Ces outils alimentent l'amélioration continue en permettant l'observation de l'utilisation, mais la plupart des sites web doivent sélectionner judicieusement leurs outils, car l'intégration d'un trop grand nombre de services tiers peut ralentir l'expérience.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Un serveur tient à la fois une salade et une assiette de hors-d'œuvre dans un restaurant confortable et chaleueusement éclairé.{% endcapture %}{% capture img_caption %}Photo par Pixabay{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-pixabay-262978.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Assiettes musicales

Pour mieux comprendre les attentes des clients, les propriétaires ont mis en place une série de tests. Dans un premier temps, différents restaurants de la franchise ont proposé des menus distincts, tandis que l'équipe dirigeante a analysé l'impact de ces variations sur l'expérience des clients. Mais ils se sont vite rendu compte qu'il était difficile de tirer des conclusions à partir d'une population hétérogène ayant des habitudes culturelles différentes. Ils ont donc décidé de mener les tests dans un même restaurant, en demandant aux <span lang="en">Jolly Servants</span> de présenter des menus différents à des tables différentes.

La conduite de tests visant à faire évoluer le menu d'un restaurant présente des difficultés considérables. Déterminer quelles tables ont droit à des options de menu spécifiques demande beaucoup de temps aux JS, ce qui peut avoir un impact négatif sur l'expérience globale du client. Certains habitués peuvent être déconcertés par le fait que le menu change d'un jour à l'autre, ce qui donne un sentiment d'incohérence qui s'ajoute à la lenteur du service.

{% capture note %}Les tests A/B, principalement orchestrés par du code JS, sont largement considérés comme la méthode la plus fiable pour évaluer comment les changements apportés à un site web affectent l'expérience d’utilisation. Toutefois, la réalisation de ces tests peut s'avérer délicate et entraîner une expérience sous-optimale pour les utilisateurs au cours de la période d'évaluation. Les professionnels du web conseillent généralement de faire preuve de prudence lors de la mise en œuvre des tests A/B, de définir clairement la portée et la durée des tests et de veiller à ce que les solutions soient désactivées lorsqu'elles ne sont plus utiles.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Gelato ice creams on display.{% endcapture %}{% capture img_caption %}Photo par Roman Odintsov{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-roman-odintsov-5061192.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Partenariats et délégation de tâches

Certaines parties du menu sont confiées à des partenaires avec lesquels le propriétaire a établi des conventions. Par exemple, les coupes glacées seront préparées par un glacier local. En outre, certains Jolly Servants internes ont été remplacés par des sous-traitants ; en particulier, un caviste installé de l'autre côté de la rue se charge désormais de la sélection des vins et formule des recommandations.

En réorientant son personnel vers son activité principale, les propriétaires ont amélioré à la fois l'efficacité et la fiabilité du service. Toutefois, cette réorientation a eu pour effet de ralentir certaines expériences déléguées, voire de les rendre plus risquées, notamment lorsque le sommelier doit se frayer un chemin dans la circulation en traversant la rue aux heures de pointe.

Les propriétaires doivent donc désormais surveiller leurs partenaires. En tant qu'éléments clés de ce partenariat, leur rôle est crucial pour la réussite de l'entreprise.

{% capture note %}L'utilisation de JavaScript tiers peut s'avérer très efficace pour fournir des services qui seraient autrement hors de portée ou dont on sait qu'ils seront mieux exécutés par des professionnels. Toutefois, leur utilisation nécessite un contrôle rigoureux pour garantir que les services fonctionnent correctement et ne rencontrent pas de défaillances susceptibles de dégrader l'expérience d'utilisation. Les services de télémétrie et d'observabilité peuvent aider à détecter les erreurs et à évaluer leur impact.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Une surface en bois présente un éventail de légumes frais, notamment des poivrons rouges coupés, des concombres en tranches et des légumes verts, ainsi que divers ustensiles de cuisine et ingrédients, créant ainsi une scène vivante et attirante.{% endcapture %}{% capture img_caption %}Photo par Maarten van den Heuvel{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-mvdheuvel-2284166.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## À la table du Chef

Pour se démarquer de la concurrence, les propriétaires décident que certains de leurs franchisés offriront une expérience unique et caractéristique : la table du chef. Directement à la table, un chef spécialisé prépare un menu personnalisé pour les clients, en fonction de leurs préférences, de leurs restrictions alimentaires et de la disponibilité des ingrédients apportés par le personnel de service et les Jolly Servants.

Les tables de chef occupent un espace important dans la salle, ce qui oblige le personnel de service à se déplacer fréquemment pour rassembler ou réarranger les ingrédients. Cela peut ralentir le début du repas. C'est pourquoi, généralement, cette expérience immersive commence par la dégustation d'un délicieux cocktail pendant que les convives attendent.

Une fois que tout est en place, la table fonctionne de manière autonome, ce qui réduit la demande en cuisine, qui peut même devenir nulle. Le service fourni est à la fois personnalisé et immédiat. Toutefois, cette expérience exclusive n'est généralement accessible qu'aux clients les plus aisés (ou à ceux qui ont le plus gros carnet d'adresses !).

Afin de rehausser leur statut, les restaurants voisins ont commencé à proposer aussi des tables de chef, y compris le <span lang="en">fast food</em> situé à deux pâtés de maisons. Les longs temps d'attente et l'expérience décevante font que les clients ne reviennent pas pour une deuxième visite !

{% capture note %}Dans l'industrie du web, les applications à page unique (<span lang="en">Single-Page Apps</span>, SPA) sont particulièrement bien adaptées à la création de parcours immersifs et attrayants pour les utilisateurs. Elles prennent souvent plus de temps à charger, et encore plus sur les appareils d'entrée de gamme, de sorte que les parties prenantes doivent réfléchir sérieusement aux astuces visuelles à utiliser pour embarquer le public et lui faire supporter l'attente.{% endcapture note -%}{%- include note.html.liquid content=note %}

{% capture note %}De nombreux petits sites web adoptent des SPA, s'inspirant de la tendance établie par les grands acteurs du web, même lorsque leurs besoins sont simples et standardisés. Il en résulte souvent une mauvaise affectation des ressources, car les équipes utilisent des librairies et techniques qui ne correspondent pas à leurs besoins, et n'ont pas les moyens d'investir correctement dans leur mise en œuvre.{% endcapture note -%}{%- include note.html.liquid content=note %}

---

{% capture img_alt %}Trois personnes assises à une table dans ce qui semble être un restaurant ou un bar, dégustant des boissons et de la nourriture ensemble.{% endcapture %}{% capture img_caption %}Photo par ELEVATE{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-elevate-3009797.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Des sites web divers pour de belles expériences

En conclusion de cette métaphore imparfaite et incomplète, je pense qu'il est essentiel de comprendre que, tout comme il existe différents types de restaurants, il devrait également y avoir une large variété de manières de faire des sites web. Du restaurant indépendant informel à la table de chef exclusive, chaque site peut offrir une expérience unique, avec son propre lot de défis.

Souvent, les solutions les plus simples s'avèrent les plus efficaces. Toutefois, un manque de personnalisation peut entraîner une diminution des marges bénéficiaires et entraver le développement d'une identité de marque solide. À l'inverse, les solutions plus complexes exigent une prise en compte méticuleuse de l'expérience utilisateur, ce qui nécessite des investissements importants dans l'analyse de la frustration et de l'amélioration continue. La dégradation temporaire d'une expérience peut être une décision stratégique visant à l'améliorer à long terme. Il est essentiel d'investir dans les processus et, en particulier, la mise en œuvre de l'assurance qualité joue un rôle essentiel dans la réduction des risques les plus importants.

---

_Merci à Meryem, qui a supporté mes expériences de métaphores filées pendant plus d'un an, et à Morgan, Luke et Natacha pour leur relecture !_
