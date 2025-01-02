---
title: 'Un Web au Futur'
tags:
    - nowwwel
---

Cet article a été rédigé dans le cadre de [#nowwwel](https://twitter.com/hashtag/nowwwel?src=hash), une initiative lancée par Rémi Parmentier ([@hteumeuleu](https://twitter.com/hteumeuleu)) pour remplacer cette année les [24 jours de Web](http://www.24joursdeweb.fr/), les deux événement ayant pour but d'inciter les professionnels du Web à écrire et partager.

Si cet article vous plait, n'hésitez pas à me remercier d'une des façons suivantes (suivant votre budget et votre temps disponible) :

- publiez une offre de stage sur [Viens voir mon taf](http://www.viensvoirmontaf.fr/) pour offrir de l'espoir à des jeunes qui pensent nos métiers inaccessibles, à tort ;
- embauchez, recommandez, rémunérez des femmes et incitez-les à s'organiser et s'auto-promouvoir, par exemple via [Girlz In Web](http://girlzinweb.com/) ;
- formez-vous à la qualité, l'accessibilité ou l'écriture inclusive pour essayer de produire chaque jour un Web plus ouvert.

<!-- more -->

---

Votre dernier projet _parfait_ vient de se terminer :

- une démarche utilisateur a été menée pour bien en définir les usages ;
- une conception visuelle composée de diverses itérations a permis d’aboutir à une expression graphique traduisant parfaitement les intentions des parties prenantes ;
- le site est adapté aux périphériques mobiles, aux tablettes et aux ordinateurs par le biais de différentes `media-queries`, d’une intégration fluide et de diverses adaptations suivant les usages supposés sur les différentes plateformes ;
- le <span lang="en">Front</span> comme le <span lang="en">Back</span> reposent sur un socle technique solide, composé de diverses solutions spécialisées, agrémentées de nombreuses dépendances à des librairies tierces ;
- des services tiers ont été sélectionnés et intégrés pour fournir des fonctionnalités spécifiques sans besoin de développements ;
- enfin, le site est hébergé par une entreprise indépendante qui infogère le serveur.

De nombreuses démarches fonctionnelles et techniques ont été entreprises, à chacune des étapes citées, pour que le site soit à l’état de l’art au moment de sa sortie…

## La grande illusion

L'exemple ci-dessus vous fait rêver ? C'est normal. Nous espérons que l'ensemble de nos projets se passe comme ça. Une seule chose pourrait vous chiffonner… Personne, à aucun moment, ne s’est demandé combien de temps le site allait rester en ligne.

Trois mois ? Trois ans ? Cinq ans ? Sept ans ?

Personne ne s’est interrogé sur la pertinence des choix réalisés au regard de cette durée ou la façon dont il pourrait évoluer. Ce site est _parfait_… maintenant.

{% include media/spotify_title.html.liquid id="5ou59ERA2f7ffyAxAcZyVz" title="&quot;Perfect Illusion&quot;, Lady Gaga" %}

En tant que professionnels, nous pensons souvent les sites que nous réalisons comme des objets finis répondant à des **objectifs définis et immuables**. Nous partons de l'expression d'un besoin à un instant donné, en oubliant souvent que pour nos commanditaires, le site n'est qu'un outil construit pour répondre à des objectifs autres. Comme tous les outils, il doit être capable de durer… et aussi de s’adapter.

## Bonne impression ?

Dans la grande famille des éléments dont la satisfaction ne peut que décroître avec le temps se trouve la conception graphique. Toujours pensée pour laisser un souvenir impérissable et porter les valeurs fortes du projet, elle se transforme bien souvent en boulet au bout de quelques années.

Parfois, il s’agit d’une direction artistique très prononcée qui rend difficile l’ajout ou la modification de composants visuels (ô, designs obliques, je pense à vous). D’autres fois, la dépendance entre design graphique et design d’expérience est si importante qu’il devient impossible de modifier l’un sans affecter l’autre. Pourtant, un site n'est souvent réalisé qu'en envisageant en amont des <span lang="lat">personas</span> qui schématisent les utilisateurs réels… dont on peut affiner le profil par le biais des analytiques. Il y a donc de fortes chances qu'il faille adapter le <span lang="en">design</span> a posteriori…

{% include media/spotify_title.html.liquid id="6Ac4NVYYl2U73QiTt11ZKd" title="&quot;Hooked on a Feeling&quot;, LBlue Swede, Björn Skifs" %}

Quel est _votre_ site favori ? Pensez à ce site, qu'y faites-vous ? Est-ce que vous visualisez bien les éléments-clés de sa conception visuelle ou est-ce que votre souvenir de l'expérience concerne l’ensemble du service ?  
Il existe, bien sûr, des sites dont l’attrait visuel fait intégralement partie de la proposition de valeur. C'est notamment souvent le cas lorsque le visuel participe au positionnement d’une marque ou d’un secteur dans un domaine spécifique. Pour ces sites, une conception visuelle qui valorise le secteur, la marque ou la relation à l’utilisateur est primordiale.

Bien souvent, en discutant avec des clients et en les interrogeant de manière répétée sur leurs objectifs à long terme, ils concluent que l'aspect du site n'a pas besoin de laisser un souvenir impérissable : l’aspect exceptionnel, celui qui va laisser une impression incroyable… est souvent demandé pour séduire le _sponsor_.  
La valeur de _ce_ design à long terme (plusieurs années) est très réduite et un design moins original, plus modulable et pouvant s’adapter à différentes chartes graphiques au fil du temps, est en réalité bien plus pertinent, même si moins impressionnant le jour de la mise en Production.

## Technologies

Autre problème lié au design graphique, où plutôt à sa déclinaison : la prise en compte du parc matériel dans la conception du <span lang="en">Responsive Web Design</span>. Problème : nous sommes assez nul quand il s'agit de prévoir le parc matériel du futur. Certains se sont emballés pour les Pocket PC, les netbooks, le retour des téléphones à claviers (ouais, ok, il n'y avait que Nokia à y croire, mais quand même), les tables basses (coucou Microsoft), les montres, la réalité virtuelle. Rares sont les innovations qui perdurent et nous sommes aujourd'hui sur un marché massivement dominé par les <span lang="en">smartphones</span>.

Même en sachant cela, il est très difficile d'envisager l'avenir. Ayant cherché récemment un smartphone avec un écran de quatre pouces, j'ai découvert que ce segment avait quasiment disparu au profit de modèle plus grand. Je me rappelle pourtant bien, il y a cinq ans, quand mes amis se moquaient de l'énorme taille de mon OnePlus One. Tout change.

Indépendamment de la taille, il est très difficile d'envisager, à court ou moyen terme, les résolutions des matériels. Après plusieurs années à clairement séparer les usages mobiles et de bureau en fonction des résolutions, nous constatons que les résolutions des smartphones d'aujourd'hui sont de plus en plus proches de celles des ordinateurs, avec en plus une gestion de la densité de pixels imprévisible (qui dépend, en réalité, des capacités de productions). Bref, [le matériel permettant de consulter le Web, c'est le bordel](http://mydevice.io/devices/).

{% include media/spotify_title.html.liquid id="4Sdjsnfimz0DCYhbI35uoz" title="&quot;Ayo Technology&quot;, Milow" %}

En bref, le passé nous apprend que nous ne sommes absolument pas compétents pour deviner les évolutions du parc Web à plus de trois ans. Pourtant, nous continuons à imaginer nos points de rupture en fonction des matériels et des analytiques à notre disposition. Paradoxal, non ?

Il existe d’autres façons d’envisager le design d'un site web, comme la conception des points de rupture à partir de la taille et des ratios des images, couplée à une lecture optimisée et des tailles de polices adaptées : en bref, partir du contenu et imaginer vos points de rupture uniquement comme des adaptations sur un design fluide. Nous avons toutes les clés techniques pour ce genre de choses et [la littérature existe](https://www.smashingmagazine.com/2013/03/logical-breakpoints-responsive-design/ '"Logical Breakpoints For Your Responsive Design", Vasilis van Gemert').

Et si on construisait nos designs sur ce qu'on connait plutôt que sur d'hypothétiques futurs ?

## Un colosse aux pieds d'argile

Construire une solution logicielle pour répondre à un besoin, ça commence par fournir une architecture solide. Pour cela, il est conseillé d’utiliser des outils éprouvés car quelle que soit la solution utilisée ou le langage sur lequel elle repose, votre projet embarquera, un jour ou l’autre, des dépendances (rappelons qu'un <span lang="en">framework</span> est une dépendance). Le choix de ces dépendances ne doit pas être opportuniste et uniquement se reposer sur la correspondance avec le besoin immédiat, vos capacités au moment de la réalisation ou vos envies personnelles de vous "amuser" avec une nouvelle proposition (patience, nous allons y revenir).

Il vous faut également imaginer l’avenir de cette dépendance.

- Sera-t-elle maintenue sur la durée ? Existe-t-elle depuis longtemps ?
- Est-elle utilisée par de nombreux utilisateurs et qu’en pensent-ils ?
- S’il s’agit d’un projet jeune mais qui fait parfaitement le travail, existe-t-il un projet plus ancien qui le ferait également, moyennant quelques développements supplémentaires ? Passer par cet autre projet apporterait-il quelque chose (par exemple : la communauté du projet plus ancien est-elle plus grande et la littérature plus importante) ?
- Cette dépendance est-elle <span lang="en">open source</span> ? Est-elle régulièrement mises à jour, avec une prise en compte de la compatibilité descendante et une <span lang="en">roadmap</span> lisible ?
- Est-elle soutenue ou maintenue par plusieurs personnes ? Par qui la gouvernance est-elle détenue ?
- Sont-elles faciles à prendre en main pour un nouveau venu ? Quelle est la quantité de documentation qu'il vous sera nécessaire de produire pour lui mettre le pied à l'étrier ?
- Une fois le projet en Production, les dépendances sont-elles versionnées quelque part, de manière à pouvoir les retrouver si elles venaient à disparaitre ?

{% include media/spotify_title.html.liquid id="1L21YTLKh6eJaIjQWRgzo7" title="&quot;Shake Your Foundations
&quot;, AC/DC" %}

La manipulation des dépendances est également un point d’attention :

- Qu’utilisez-vous pour lister vos dépendances, pour les mettre à jour ?
- Ce produit/projet étant lui-même une dépendance, répond-t-il à toutes les questions ci-dessus ?

La maïeutique de ces questions peut sembler abstraite, alors autant expliciter : **vos outils de développement et la manière dont vous vous en servez font partie intégrante du projet**.  
Que se passera-t-il dans quatre ans, quand une développeuse ou un développeur voudra installer les dépendances que vous n’aurez pas listé et qu’elle ou il ne trouvera plus rien ? Pour Noël, soyez sympas : évitez à cette personne d'être obligé·e d’aller décompiler vos ressources obfusquées pour deviner ce que vous avez utilisé et comment. Est-ce que vous êtes obligés d'utiliser un outil de gestion des dépendances ? Non, de la documentation, c'est bien aussi. Pensez-y, c'est parfois tellement plus simple !

## Penser à la quatrième dimension

> Le bon code, c'est le code que je comprends. <cite>"<a href="http://www.commitstrip.com/fr/2016/06/07/good-code/" title="&quot;Le bon code&quot; sur CommitStrip">Le bon code</a>", CommitStrip

La structure de votre code n'a pas qu'une incidence sur votre projet. Un bon code est avant tout un code facile à comprendre et pour cela, il faut connaître les bonnes pratiques et les <span lang="en">patterns</span> **régulièrement** utilisés, mais aussi prendre sur soi pour éviter les couches d'abstractions inutiles.

> Oui mais attends, il n'y a rien de pire que de refactoriser un code avec du copier-coller partout.

Je préfère cinq copier-coller qu'une <span lang="en">Factory</span> sur laquelle repose un service injecté dans quatre modules différents. Je me suis toujours beaucoup méfié de l'acronyme <abbr lang="en" title="Don't Repeat Yourself">DRY</abbr> et je vous encourage à toujours lui préférez <abbr lang="en" title="Keep It Simple and Stupid">KISS</abbr> quand les deux sont possibles : souvent, **une petite répétition vaut mieux qu'une énorme usine à gaz**.

Ça a l'air simple mais ça ne l'est pas : certains d'entre vous ont un [très bon niveau](/notes/2015-09-expert-ou-pas/ 'Expert ou pas ?') et ce qui peut leur sembler naturel ne l'est pas forcément pour les autres. Sachez donc adapter la complexité de votre code au projet. Un projet important à plusieurs centaines de jours&times;personne nécessitera une toute autre architecture que celle à mettre en place pour un projet réalisé en deux mois !

N'oubliez pas : un projet de qualité est aussi un projet à [Bus Factor](https://vimeo.com/187568897 '"Le Bus Factor", Laurence Wagner à Sud Web 2016') élevé, donc à réversibilité importante. Cela peut passer par la documentation mais souvent, cela passe par la simplicité du code !

On évite donc au maximum les conventions mal partagées (donc pas si conventionnelles que ça), les abstractions de code dans la configuration (pour être sûr que le futur développeur ne pige rien), les surcharges par héritages de modules mal balisés (<q>Putain, mais elle vient d'où cette classe ?!</q>)… Bon, je m'arrête là, vous savez de quoi je parle. Mais si. Allez, pensez à vous-même, il y a six mois, deux ans, cinq ans… quand vous ne pigiez pas le code de votre collègue plus expérimenté. Voilà. Là, gardez cette pensée.

{% include media/spotify_title.html.liquid id="2lNCzdFpHSzmGgnZ3sVDqy" title="&quot;Woods of Chaos&quot;, Rob Costlow" %}

Essayez d'écrire du code pour ce "vous" du passé. Ça servira à quelqu'un dans le futur.

## Résistons aux tentations et à l'excitation

Notre secteur est particulièrmeent dynamique. L'innovation est partout et nous l'expérimentons chaque jour. Il est même possible d'en faire des jeux à boire.

<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">Drinking game for npm users:<br>➀ Think of a noun<br>➁ npm install &lt;noun&gt;<br>➂ If it installs - drink!</p>&mdash; Sindre Sorhus (@sindresorhus) <a href="https://twitter.com/sindresorhus/status/515511151669805056">26 septembre 2014</a></blockquote>

Résultat : beaucoup d'entre nous se lancent sur de nouvelles technos pour s'amuser, et c'est une très bonne chose. Cela ne veut pas dire qu'il faut absolument la mettre dans vos projets en Production ! L'utilisation d'une techno ou d'un paradigme doit faire le choix d'une vraie réflexion, pas être un caprice. Nous avons tous des dizaines de <span lang="en">side-project</span> pour tester, prototyper, confronter ces technos (et notre connaissance) à des cas d'usages du réel.

{% include media/spotify_title.html.liquid id="1a9YW7fATU351ok4zWjU7a" title="&quot;Brick By Boring Brick&quot;, Paramore" %}

Quelques exemples dont j'ai complètement conscience du potentiel trollesque :

- **Les <span lang="en">frameworks</span> <abbr lang="en" title="Single Page Application">SPA</abbr>** sont normalement faits pour faire… des applications ! Le web étant principalement constitué de documents, inutile d'en voir partout. Si vous décidez d'en utiliser un, sachez pourquoi et exploitez-le. Un pile <span lang="en">Front-End</span>, ça se mûrit, [même chez les meilleurs](https://forum.cozy.io/t/a-propos-de-la-pile-technique-front-about-our-frontend-stack/3849). Ce n'est pas grave si vous n'êtes pas encore prêt pour la dernière nouveauté.
- **Les <span lang="en">frameworks</span> CSS/JS de composants** : un composant bien écrit, bien documenté, validé par la communauté des développeurs et des fabricants de navigateurs au travers de réflexions et d'usages, ça s'appelle un standard. Travaillez sur les standards, apprenez à vous en servir à leur plein potentiel, bossez sur l'accessibilité pour obtenir un regard critique (comme de vous demander quels sont les cas d'usages de `<dt>` et `<dl>`, par exemple).
- **La mode récente à la containerisation et à l'utilisation de microservices** est très sensée et peut s'expliquer par énormément de facteurs, la plupart étant liés à l'explosion des infrastructures distribuées, y compris sur des phases de développement (les containers permettant d'effectuer des tests automatisés de haute volée). Sur des petits projets, c'est clairement de la complexité pour pas grand-chose. Et ne venez pas me dire que vous avez mis en place la <span lang="en">stack</span> en "pensant à plus tard". Soyez lucide sur votre projet et posez-vous véritablement la question de la pertinence.
- **Node est une plate-forme très prometteuse** mais les solutions répondant à des besoins métier sont peu nombreuses (voire inexistantes). La plupart des projets importants reposent sur des socles de dépendances très mouvant. Node.js lui-même n'offre des garanties que de manière très récente avec des versions [<span lang="en">Long Time Support</span>](https://github.com/nodejs/LTS/raw/master/schedule.png) disponibles uniquement depuis octobre 2015. Est-ce qu'il faut se lancer dessus ? Assurément. Est-ce que c'est une <span lang="en">Silver Bullet</span> qui viendra à bout de vos problématiques ? Probablement pas.

Si vous pensez que vous êtes prêt à utiliser quelque chose de nouveau, faites-le sur des éléments non-essentiels du projet, ou sur des projets de faible importance. Faites-le en connaissance de cause, en ayant établi une matrice des risques potentiels et faites suivre le projet par une personne de confiance qui saura vous indiquer quand vous allez trop loin dans l'obstination. Enfin, faites-le en binôme (au minimum). On n'apprend jamais aussi bien que quand on s'explique mutuellement les choses.

## Ne jamais perdre l'objectif de vue

C’est peut-être une évidence, mais un projet ne finit pas au moment où on le livre : il commence. L’ensemble du travail réalisé sert un objectif qui commence à peine à être rempli au moment de la mise en ligne et continuera de vivre et d’évoluer pendant plusieurs semaines, mois, années après l’ouverture aux utilisateurs.

Contrairement à vous, vos commanditaires ne sont pas nécessairement des professionnels du Web. Ils ne peuvent pas, la plupart du temps, envisager un certain nombre d'évidences qu'il est parfois à votre charge d'expliciter.

{% include media/spotify_title.html.liquid id="5wFajLDxgaUNFl0AdNKj0Y" title="&quot;The Neverending sight&quot;, Foo Fighters" %}

Prenez donc le temps, en amont, de réfléchir à la pérennité de ce que vous produisez et prenez vos décisions en gardant en tête que :

- **un site, ça se maintient**, par des acteurs qui doivent avoir à la fois le savoir, le savoir-faire et informations nécessaires à l'exécution des tâches qui leurs seront confiées. Pensez au futur : pensez à elles ;
- **la solution n'ayant aucun bug n'existe pas** : tant que les logiciels seront créés par des humains, ils contiendront des erreurs. Privilégiez les solutions mettant rapidement des correctifs à disposition et dont la communauté est saine. Vous savez peut-être distinguer un bon d'un mauvais module. Rien ne garantit que votre successeur sera dans le même cas.
- si le code n'est pas compréhensible en l'état, **envisagez la formation nécessaire** à la mise à jour technique des solutions et maintenez l'information sur cette "dette de formation" dans le temps, ainsi que les noms des personnes pouvant la combler.
- pensez à prévenir vos commanditaires que la maintenance a un coût et que **le marché n'est pas homogène**. Est-ce qu’il est plus facile de trouver un développeur PHP ou un développeur .NET ? Est-ce que chaque surcoût s'associe d'un avantage qui a du sens pour le projet ? Suivant la typologie financière, technique ou culturelle du client et des types de solution recherchées, cette question est pertinente !
- La documentation d'installation, de développement, de mise en Production vous gonfle ? **Écrivez des scripts versionnés**. Ils vous serviront durant le développement et feront un excellent point d'entrée pour vos successeurs.

## Demain ne meurt jamais

Vous l'aurez compris : pour Noël, je voudrais que nous réalisions tous que faire un site Web aujourd’hui, c’est avant tout le réaliser pour demain, pour la personne qui s'en occupera après nous et dans l'optique que l'ensemble dure plusieurs années et soit aisément maintenu.

{% include media/spotify_title.html.liquid id="4pxMChPcBLTgvocCR72Cus" title="&quot;Tomorrow Never Dies&quot;, Sheryl Crow" %}

Pour faire quelque chose de pérenne, il faut autant comprendre le présent qu'imaginer l’avenir, mais rien ne sert de l’appeler trop fort. Il n'est pas sourd et arrivera bien assez vite.

---

Des ressources m'ont été proposée par [Antoine Fauchié](https://www.quaternum.net/2016/12/24/concevoir-des-sites-web-pour-le-futur/), et elles ont entièrement leur place ici. Si l'article vous a plu, n'hésitez pas à creuser en lisant :

- "[Resilient Web Design](https://resilientwebdesign.com/)", de Jeremy Keith, il livre à lire en ligne (ou hors-ligne) ;
- "[The Future Web Wants You](https://briankardell.wordpress.com/2016/08/24/the-future-web-wants-you/)", par Brian Kardell ;
- "[The Future of the Web](http://alistapart.com/article/the-future-of-the-web)", par Matt Griffin ;
- et enfin "[Arrêtez le Web](http://www.la-grange.net/2015/08/04/stop)", par Karl Dubost.
