---
title: 'A la conquête des Tests A/B'
tags:
    - Front-End
canonical: 'https://blog.clever-age.com/fr/2014/03/13/a-la-conquete-des-tests-a-b/'
canonical_title: 'le blog de Clever Age'
slug: a-la-conquete-des-tests-a-b
translations:
    en: conquering-ab-testing
---

Matthieu n’est pas du genre à prendre une décision à la légère, surtout lorsqu’elle risque d’avoir un impact sur le chiffre d’affaire de son entreprise. Il aime essayer avant d’adopter. C’est pourquoi il a décidé de se lancer dans les Tests A/B.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

<h2>Une histoire de tests A/B</h2>

Matthieu n’est pas tatillon, loin de là, mais ses responsabilités et sa conscience professionnelle l’obligent à mesurer chaque évolution du site Internet de son entreprise, de manière à assurer l’amélioration de l’ensemble des indicateurs clés à chaque livraison.

{% capture img_alt %}Un crayon écrit un point d'interrogation sur un carnet{% endcapture %} {% capture img_caption %}"Questioned Proposal" par Ethan Lofton - CC BY 2.0{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/1.jpg"
alt=img_alt
caption=img_caption
%}

Mais parfois, il faut l’avouer, Matthieu ne sait pas. Il hésite. Il se pose des questions : cette fonctionnalité va-t-elle améliorer les choses ? Cette nouvelle façon de communiquer incitera-t-elle les clients à venir visiter le site ? Et ce nouveau tunnel de paiement, est-il vraiment plus performant que l’ancien ?

<h2>Les Tests A/B, c’est simple et objectif</h2>
Pour améliorer son processus de décision, il se renseigne et découvre une technique éprouvée sur les géants du Web : l'<strong>A/B Testing</strong>. Il lit consciencieusement <a href="https://fr.wikipedia.org/wiki/Test_A/B">la définition de Wikipedia</a> et comprend immédiatement le principe, qui repose sur trois étapes :

<ol>
	<li>D’une part, il devra livrer les deux versions de sa fonctionnalité, diriger certains utilisateurs sur l’une, appelée version A et les autres sur l’autre, appelée version B ;</li>
	<li>d’autre part, il devra être capable de collecter des données sur l’expérience des utilisateurs sur les différentes versions. Pour Matthieu, cela implique d’adapter son plan de marquage analytique pour être capable de différencier les mesures issues des deux versions ;</li>
	<li>enfin, ce sera l’analyse de ces chiffres qui permettra à Matthieu de faire ressortir une <em>vérité statistique</em> concernant ces versions, déterminant ainsi la plus performante au regard des critères qu'il aura défini.</li>
</ol>

Confiant, Matthieu s’enquiert de quelques exemples pour convaincre sa Direction. Il découvre par exemple <a href="https://www.nytimes.com/2009/03/01/business/01marissa.html">l'histoire incroyable mais vraie</a> de Marissa Mayer (alors salariée de Google) qui demanda à ses équipes de déployer sur un site 41 variations de bleu pour déterminer la plus performante auprès des utilisateurs.

Si Google le fait, Matthieu devrait pouvoir le faire aussi. Et ça a même l’air facile.

<h2>Les Tests A/B, c’est compliqué et subjectif</h2>

Matthieu réfléchit à l’implémentation concrète. Sa première contrainte est sa capacité à mettre en place les deux versions en simultané. C’est une contrainte forte pour Matthieu, qui réalise alors que de nombreux tests A/B lui seront impossibles : l’infrastructure de son entreprise est limitée, et il ne peut pas demander de nouveaux serveurs et passerelles pour étendre le schéma d’architecture à volonté.

Qu’à cela ne tienne, il décide de franchir le pas malgré tout et demande à son équipe de développement de le suivre sur un premier essai. Il choisit spécifiquement une modification qui ne nécessite pas de changement d’infrastructure : un variante visuelle au sein d’une page.

{% capture img_alt %}Un prototype visuel d'une page produit d'un site e-commerce{% endcapture %} {% capture img_caption %}Maquette de la fiche produit : la zone jaune incluera soit un visuel du produit (version A), soit une vidéo (version B){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/2.png"
alt=img_alt
caption=img_caption
%}

Il hésite, puis décide finalement de tester l’affichage de l’image produit sur le gabarit "Fiche Produit" du site e-commerce. La version courante, avec l’image produit à gauche de sa description, sera considérée comme la version de contrôle, la version A. Sur la version B, c’est une vidéo du produit qui sera affichée. Depuis le temps que le département Marketing dit qu’il faut mettre davantage de vidéo, il est temps de le vérifier !

Se pose alors un problème analytique : comment mesurer l’efficacité d’une version par rapport à l’autre ? Il existe de nombreux indicateurs, servant à représenter la réalité de l’expérience utilisateur : achats, abandons, mesures de temps, mesures du nombre de rebonds... Après mûre réflexion, l’équipe fait un choix : celui d’utiliser l’action d’ajout-panier comme critère de succès. Plus un produit sera ajouté au panier, meilleure sera jugée la version.

Se pose ensuite un problème technique car par souci de cohérence, Matthieu souhaite qu’un utilisateur ayant basculé vers une version reste sur cette version pendant toute la durée du test : hors de question d’avoir tantôt un visuel, tantôt une vidéo, au hasard ! L’équipe met donc en place un cookie qui stocke la version choisie pour un visiteur au moment où elle est choisie. Le système teste ainsi pour chaque visiteur l’existence du cookie et s’il existe, lit à l’intérieur la valeur à lui afficher.

Reste à choisir la version qui sera affichée à la première visite d’un client. De nouveau, une décision doit être prise pour savoir comment seront traités les utilisateurs : quelle quantité de visiteurs verra la version B, sur quels critères seront-ils choisis et sur quel périmètre du site le test aura-t-il lieu : toutes les fiches produit ou seulement certaines ? Pour ne pas influencer les résultats, la technique du test A/B impose de trouver un critère parfaitement indépendant, mais ce n’est pas évident !

Matthieu et son équipe décident de s’en remettre à un tirage au sort, qui délivrera la version de contrôle à 99 % des utilisateurs et la version B à 1 % seulement, sur tout le site. Ainsi, si la version B ne réalise pas ses promesses, cela ne sera que peu préjudiciable à l’activité.

Matthieu se rend compte que sous couvert d’objectivité, l’équipe a déjà fait de nombreux choix très subjectifs :

<ul>
	<li>la nature du test lui-même ;</li>
	<li>la façon de mesurer la réussite d'une version par rapport à une autre ;</li>
	<li>la façon dont les populations de visiteurs sont triées et la répartition relative de ces populations.</li>
</ul>

Pas si simple, les Tests A/B, finalement. Mais bon, maintenant, c’est fait !

<h2>Les Tests A/B, ça commence quand ça finit</h2>

Matthieu décide de mener un test sur plusieurs jours et voici les chiffres qu’il récolte :

<table>
  <thead>
    <tr>
      <th>Version</th>
      <th>Nombre de visiteurs</th>
      <th>Nombre d’ajouts au panier</th>
      <th>Ratio Ajouts Panier / Visiteurs</th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td>Version de contrôle (A)</td>
        <td class="numeric ">34 217</td>
        <td class="numeric ">6234</td>
        <td>18,21 %</td>
      </tr>
      <tr>
        <td>Version avec vidéo (B)</td>
        <td class="numeric ">327</td>
        <td class="numeric ">68</td>
        <td>20,79 %</td>
    </tr>
  </tbody>
</table>

Au premier coup d’œil au ratio entre nombre d’ajouts au panier et nombre de visiteurs, il semble clair que la version B est plus efficace que la version A. Malheureusement, le trafic n’a pas été à la hauteur de ce qui était attendu et l’échantillon est très faible. Difficile de dire alors si l’échantillon de mesures est suffisant pour permettre une généralisation des résultats...

De plus, un des membres de l’équipe de Matthieu lui apporte une information nouvelle : suite à une erreur dans la gestion du tirage au sort, les visiteurs démarrant leur navigation dans le rayon "High Tech" ont eu davantage de tirages B que les autres. Or, le rayon "High Tech" est un des rayons dont la transformation est la meilleure. La différence de presque 3 points observée n’a peut-être donc rien à voir avec la modification apportée sur le visuel produit. Matthieu et son équipe sont dubitatifs.

Enfin, durant les quelques jours pendant lesquels le test a été effectué, le taux de conversion global du site a chuté. N’ayant pas fait suivre l’information A/B dans ses indicateurs jusqu’au paiement (seul l’ajout-panier stockait la différence), Matthieu a du mal à savoir si la version B y est pour quelque chose... Et si les gens ajoutaient davantage au panier, pour finalement partir sans avoir acheté ? C’est un risque que l’équipe ne peut pas prendre à la légère.

Tout cela enseigne beaucoup à Matthieu… sur la façon de faire des tests A/B. Mais sur le visuel produit, aucune conclusion n’est possible : il va falloir réitérer l’expérience en la contrôlant mieux.

<h2>Les Tests A/B, quand les autres s’en mêlent</h2>
Finalement, Matthieu et son équipe reproduisent le test avec de meilleures mesures et un volume significatif, ce qui leur permet de bien isoler les résultats. Contrairement à ce qu’ils avaient pensé, la version B est moins performante, aussi le site est-il à nouveau basculé à 100 % sur sur la version avec visuel produit. Même si Matthieu est frustré de ne pas comprendre les raisons du résultat, lui qui pensait que la vidéo ne pourrait être que plus attrayante, il est tout de même satisfait de l’avoir obtenu et sa Direction l’en félicite.

Fiers de ce succès, l’équipe de Matthieu se voit confier de plus en plus de demandes de tests, en provenance notamment des équipes Marketing qui y trouvent un moyen formidable de mesurer l’activité des visiteurs. Mais de nombreux problèmes techniques se posent, car certains tests, simples sur le papier, obligent notamment à maintenir plusieurs architectures logicielles incompatibles entre elles. Matthieu et son équipe sont obligés de mettre ces tests en attente, le temps de ré-écrire une partie du code pour pouvoir y injecter des dépendances. Et d’autres demandes, elles aussi mises en attente pour un délai indéterminé, nécessitent de modifier l’infrastructure technique. Beaucoup de dépenses qui n’étaient pas au budget...

Heureusement, certains tests continuent à être possibles. L’équipe Marketing demande notamment un Split testing sur la Home sur site Corporate. Cela signifie que seront testées des versions complètement différentes de la page. Pourquoi pas, se dit Matthieu...

{% capture img_alt %}Un panneau indicateur pour la Rue d'Enfer{% endcapture %} {% capture img_caption %}"Rue d’Enfer" par Frédéric Bisson - CC BY 2.0{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/3.jpg"
alt=img_alt
caption=img_caption
%}

Malheureusement, cette demande s’ajoute aux autres, plus nombreuses, et certaines concernent des pages similaires. Les utilisateurs pourraient ainsi subir sans le savoir plusieurs tests A/B au sein d’une même page. Sur la fiche produit, par exemple :

<ul>
	<li>un test A/B jouerait sur la police d'écriture du nom du produit ;</li>
	<li>un test A/B jouerait sur le texte du <em>call-to-action</em> d'ajout-panier ;</li>
	<li>un dernier test conditionnerait l'affichage d'informations en temps réel sur le produit consulté</li>
</ul>

Techniquement possibles (en étendant les concepts déjà mis en place pour un seul test), cette <em>analyse multivariée</em> pose néanmoins le problème de la complexification de l'analyse statistique, déjà délicate. Car avec tout ça, le nombre de versions du site augmente excessivement vite.

Matthieu se retrouve à gérer :

<ul>
	<li>un Split Test A/B/C sur la page d’accueil,</li>
	<li>trois tests A/B sur la fiche produit;</li>
	<li>un test A/B impliquant une variation de la structure de navigation...</li>
</ul>

… soit 18 combinaisons possibles pour chaque visiteur et une augmentation considérable des coûts de maintenance (car désormais, pour reproduire un bug, il faut se mettre dans la même configuration que le navigateur client sur lequel il s’est produit). Coûts auxquels s’ajoute la problématique du suivi, car le dernier test a pour conséquence directe de fausser les mesures analytiques existantes, qui jusqu’à présent se basaient sur les URLs.

<h2>Les Tests A/B, s'outiller</h2>

En se renseignant, Matthieu découvre différente entreprises proposant des produits permettant de rationaliser les tests A/B. La plupart internalisent notamment deux des principaux problèmes : l’analyse statistique et la gestion des campagnes. Parfois, les campagnes sont même automatisées pour s’arrêter à l’obtention d’un résultat significatif.

Malheureusement, il est très difficile de déterminer l’intérêt d’une solution plutôt qu’une autre, car chacune semble adaptée à un type de besoin :

<ul>
	<li>Pour les équipes commerciales, certaines solutions se superposent au Front-End pour modifier à la volée la page visualisée par le client. Si le concept est séduisant, il peut parfois aboutir à des lenteurs ressenties par l'utilisateur, des "flashs" de la page et même des situations de SPOF ( Single Point of Failure : situation dans laquelle le site repose fortement sur une ou plusieurs ressources externes. Si ces ressources ne sont pas disponibles ou qu'un problème technique rend impossible leur acheminent jusqu'au client &amp;#8211; problème réseau, passerelles capricieuses &amp;#8211; alors la page n'est plus consultable) dans les cas les plus extrêmes ;</li>
	<li>d'autres solutions plus orientées "injection" permettent de réaliser simplement des bascules entre plusieurs architectures logicielles ;</li>
	<li>enfin, d'autres solutions permettent de basculer rapidement vers une architecture plutôt qu'une autre, mais introduisent des passerelles supplémentaires dans le système, entraînant à la fois des risque et des baisses de performance.</li>
</ul>

Matthieu sait donc qu'il devra passer par une phase de veille et de sélection de la meilleure offre au regard de ses propres problématiques. Mais plus que ça, il commence également à ressentir que...

<h2>Les Tests A/B ont beaucoup de limites</h2>

La première d’entre elles concerne la fonction d’adaptation. En effet, tout chantier d’optimisation consiste à approcher la meilleure des solutions en comparant plusieurs variations. Ceci étant, cela ne veut pas dire qu’il s’agit de la meilleure variation dans l’absolu. Ce n’est pas parce qu’on aboutit à un optimum local (autour de la situation d’origine) qu’il n’existe pas une variante très éloignée produisant de meilleurs résultats.

{% capture img_alt %}A 3D representation of a local maximum{% endcapture %} {% capture img_caption %}Sometimes, optimization is an illusion. The real objective is higher.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/5.png"
alt=img_alt
caption=img_caption
%}

Imaginons, par exemple, que nous procédions à une analyse multivariée composée de deux tests ayant chacun une quinzaine de variations (le cas est extrême, mais il sert la démonstration). Jouer sur les variations des deux tests consiste alors à se déplacer sur le plan jaune du graphe ci-joint, à la recherche d’un maximum de performance. Rien ne nous permettrait, une fois arrivés en haut du sommet jaune, de savoir qu’il en existe un plus grand sommet ailleurs et que nous l’aurions trouvé en poursuivant nos tests sur un plus grand nombre de variations.

Ensuite, le Test A/B ne dira jamais que ce qu’on lui demande de dire. Dans l’exemple de Matthieu sur le visuel ou la vidéo produit, le test a répondu que le visuel était la meilleure solution, mais il est incapable d’expliquer qu’il s’agit probablement de la conséquence de deux facteurs : d’une part l’habitude des utilisateurs à visualiser des vidéos en paysage plutôt qu’en portrait et d’autre part, leur incapacité à ne pas se disperser face à un média interactif. Promouvoir les tests A/B est donc une bonne chose... à condition de faire appel à des professionnels pour savoir en comprendre les résultats !

Ajoutons à cela plusieurs autres limites évidentes :

<ul>
	<li>l’A/B Testing ne connait pas vos visiteurs. Il ne sait pas s’ils sont vieux, jeunes, technophiles, fidèles... or, ces populations peuvent avoir des comportements et des processus de décision complètement différents et vous n’en aurez qu’une vision globale. À vous de compléter votre A/B Testing par un outil analytique de qualité, ou un tracker, qui vous permettra de bien segmenter les retours de ces typologies de visiteurs ;</li>
	<li>l’abus d’analyses multivariées entraîne un besoin croissant en nombre de visites : il n’est donc pas possible de "tout tester" en espérant trouver la bonne recette, d’autant que le taux de conversion est probablement une équation plus complexe que la simple addition de l’ensemble des cas de figure ;</li>
	<li>l’A/B Testing est un outil court-termiste qui ne prend pas en compte la courbe d’apprentissage de vos visiteurs. Sa pertinence n’est donc pas la même pour un vendeur de masse et une entreprise dont les produits sont élaborés et le processus de vente très réfléchi</li>
</ul>

{% capture img_alt %}Une jeune femme pensive{% endcapture %} {% capture img_caption %}"Thinking" par Moyan Brenn - CC BY 2.0{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/4.jpg"
alt=img_alt
caption=img_caption
%}

<h2>Les Tests A/B, au final</h2>

Interrogé par sa Direction, Matthieu présente l’intégralité de son expérience sur les tests A/B. Envisagé comme un outil magique d’aide à la décision, l’A/B Testing est en réalité plus complexe et coûteux qu’imaginé.

En réalité, comme tous les outils, l’A/B Testing nécessite d’être manipulé par des experts ayant la meilleure connaissance possible du contexte. Enfin, jusqu’à ce qu’un test A/B prouve le contraire !
