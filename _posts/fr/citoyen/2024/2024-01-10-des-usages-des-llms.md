---
title: IA et LLMs, quels usages en 2024 ?
last_modified_at: 2024-01-12 12:45:00 +0000
translations:
    en: about-ai-and-llms
---

Quand la hype s'est emballée autour de ce qu'on appelle couramment les "Intelligence Artificielles" (IA), j'ai écrit [un premier article pour souligner quelques opportunités et risques que j'y voyais](/notes/2023-02-des-questions/). Le marché a mûri, la perception du monde aussi. Qu'en dire de plus en 2024 à partir de ce que je peux voir (une vision très limitée, j'en suis conscient).

**En terme de communication**, la Presse généraliste comme spécialisée continue de se vautrer dans la confusion en nommant "IA" tout et n'importe quoi, ce qui génère un appel d'air dans lequel les entreprises s'engouffrent pour, à leur tour, annoncer faire de l'IA sans vraiment qu'on sache si elles utilisent des algorithmes, du <span lang="en">machine learning</span> ou du <span lang="en">deep learning</span>.

Le public comprend "des logiciels qui prennent des décisions sans trop qu'on soit en mesure d'en questionner les rouages". J'imagine qu'à partir d'un certain manque de transparence, peu importe comment le résultat est obtenu.

> Toute technologie suffisamment avancée est indiscernable de la magie. <cite>Arthur C. Clarke</cite>

**La description d'images**, on y est. Cloudinary génère automatiquement des descriptions pour des images pour lesquelles des descriptions n'ont pas été fournies à l'upload ([démo](https://ai.cloudinary.com/demos/captions)). Ice Cubes, client Mastodon sur iOS ([dans l'App Store](https://apps.apple.com/app/ice-cubes-for-mastodon/id6444915884)), propose une description à la volée des images lors de l'upload, pour aider à la saisie d'alternatives. L'application Web officielle de Mastodon le fait aussi.

**La traduction**, on y est aussi. Avec les malheureuses conséquences que cela représente : le géant Duolingo, par exemple, s'est massivement séparé de ses contractuels. Plus besoin de traducteurs quand on peut davantage reposer sur une couche logicielle pour un travail probablement moins qualitatif, mais tellement moins cher.

Tous les métiers de **la production de contenus graphiques et textuels grand public** sont en profonde mutation, et donc en crise. Les travailleurs et travailleuses sont, encore plus qu'avant, mis en concurrence sur leur capacité à élaborer les prompts les plus précis pour générer des contenus pertinents, porteurs d'un message et d'un style reconnaissable. La pige ou la production missionnée disparaît, remplacée petit à petit par de la génération automatisée tout juste bonne à créer de l'opportunité publicitaire.

Côté B2B et administrations commencent à apparaître des outils de **reformulation et synthèse des dossiers**. Sans masquer la complexité d'un dossier et en donnant des références vers les éléments le composant, permettant la vérification, ces outils pourraient rapidement améliorer la performance de tous les agents économiques : immobilier, syndic, gestion des comptes clients, conseil, etc.

Sur les **marketplaces e-commerce** et les sites de contenus pour le netlinking, on intègre des milliers de références externes en les reformulant à la volée, s'assurant ainsi que les moteurs de recherche ne cataloguent pas les contenus comme dupliqués. Et **les moteurs de recherche** eux-mêmes s'y mettent, réservant leur capacité d'indexation aux sites qui acceptent que leur contenu soit volé et jamais affiché, puisqu'il aura été reformulé par un programme conversationnel qui, s'il est bien gentil, ajoutera un lien en référence de bas de page.

Après des années à croire au Net Promoter Score alors que toute étude sérieuse confirme son invalidité[^nps], **les équipes opérationnelles web** s'éloignent progressivement de l'outil pour revenir à l'analyse des verbatims mais aussi et surtout aux analyses comportementales. La frustration utilisateur ne se traduit pas forcément par un retour (verbatim ou note), mais elle se collecte et peut se corréler à des frictions dans l'accomplissement d'objectifs.

[^nps]: Le NPS part du principe qu'une personne ne peut pas être à la fois promotrice et détractrice. Or, quand quelqu'un prend le temps de vous laisser une note et un avis négatif alors qu'il a le choix de ne pas le faire, c'est clairement qu'il apprécie votre marque. Votre NPS n'est jamais que le reflet des personnes que votre marque ne laisse pas indifférent. Les autres personnes ne sont pas prises en compte. En savoir plus : "<a href="https://hbr.org/2019/10/where-net-promoter-score-goes-wrong" hreflang="en">Where Net Promoter Score Goes Wrong</a>", Christina Stahlkopt.

Plusieurs outils d'aide au design émergent au sein des **outils de prototypage ou de tests A/B**. À partir de la détection automatique d'une déviation de la norme, ils tentent de proposer des pistes d'optimisation des UI. Je reste très dubitatif sur l'approche. Au mieux, guidée par un moteur de règle interne qui tait son nom, ce Design Assisté par Ordinateur (DAO) influerait dans le sens d'une neutralisation de l'image de marque, en proposant des pistes très consensuelles et pas nécessairement plus utilisables ou accessibles numériquement. Au pire, les propositions issues d'un apprentissage automatisé sans contexte métier seront en totale contradiction avec le design system et les objectifs de l'organisation.

Pour les métiers de **la formation, du support métier avancé et de la documentation technique**, la donne est un peu différente. Ayant toujours eu une clientèle niche, ils ne sont pas intéressés par la production d'énormes volumes de réponse, mais par la justesse des contenus. Réduisant l'entraînement d'une LLM à une base documentaire très réduite, ils pourront rapidement bénéficier d'aides à la conversation. En tant qu'utilisateur d'une fonctionnalité de support, vous ne parlez pas nécessairement avec un robot conversationnel, mais la personne qui traite votre besoin a sûrement une aide à la rédaction qui lui permet de gagner en productivité, tout en validant les réponses. Certains robots conversationnels très spécialisés font également leur apparition et permettent de répondre avec précision à des réponses thématiques.

Une fois bien entraînées, ces assistances peuvent envisager un fonctionnement faiblement supervisé. Ainsi, 2024 devrait signer le grand retour des **assistants d'achats** déclenchés à la demande ou lors d'un signal de frustration. Réengageant les utilisateurs·ices, ils ne peuvent que sauver quelques ventes.

La qualification de ces **signaux** est également une grande thématique émergente du e-commerce. Supportée par une collecte de données _nécessairement consentie_ (j'insiste), elle est désormais le support d'une **personnalisation** des expériences rendue techniquement possible par une **composabilité de l'expérience e-commerce**. Cette évolution devrait dynamiter les normes d'UI bien ancrées (la page d'accueil, la page de liste de produit, la page produit) pour permettre des compositions plus audacieuses. On est ici dans un mouvement de fond plutôt que sur une mode passagère, qui a commencé il y a des années avec [la mouvance statique et le e-commerce headless](/notes/2018-02-site-statique-performance-web/) et qui continue aujourd'hui avec les architectures composables en propre (par exemple, MACH[^mach]) ou les solutions d'Adobe ou de Salesforce qui ne cessent de tirer le marché vers la personnalisation.

[^mach]: Je recommande à ce sujet [ce cycle de webinars de mes anciens collègues de Clever Age](https://events.clever-age.com/bcm-mach-2023/).

Bien sûr, dans cette galaxie des "signaux", on trouve du bon grain et de l'ivraie. Je suis très dubitatif quant à la discrimination des utilisateurs en fonction de **profils comportementaux** déterminés en analysant quelques actions au début d'une session. Je ne dis pas que ça n'est pas possible, mais je souhaiterais fortement lire la recherche scientifique attestant les corrélations entre les modèles construits et une autre forme de perception de la réalité. Ça se vend très bien, les opérationnels web ont envie que ça soit vrai, mais je n'ai jamais vu de données permettant de l'attester.

De toute façon, le marché s'emballe probablement trop fortement sur la personnalisation. Avant d'être complètement automatisée avec des signaux dynamiques, les dimensions seront certainement choisies manuellement, probablement par les équipes merchandising. Dans les usages émergents, j'entrevois l'accélération de **la personnalisation des images produit lors des campagnes**. Je m'attends à rapidement trouver des sites où ma sélection "Pour vous" contiendra des produits dont l'image aura une palette à dominante rose. Encore une fois, Cloudinary domine le marché avec une proposition de modification à la volée de packshots à partir d'une instruction, mais d'autres Digital Assets Management devraient rapidement emboiter le pas _si la preuve de valeur est cohérente avec le coût_. En effet, la production d'image personnalisées reste un domaine très consommateur d'énergie, et il n'est pas dit que le faible nombre de e-commerçants en mesure de se payer ces outils permette de les _rentabiliser_.

Dernière piste que je vois émerger poussée par des "IA" : **la personnalisation demandée**. Les outils d'analyse en langage naturel permettent dès aujourd'hui de comprendre une phrase comme :

> Je souhaite consommer des produits fabriqués en France et produits de manière écoresponsable.

et de non seulement filtrer le catalogue en fonction, mais surtout de générer une partie de la description des produits de manière adaptée. Par exemple :

> Fabriquée à Choulat-Le-Tréfon, au cœur du Champignois, à partir de chambres à air de pneus recyclés, cette ceinture est acheminée selon la norme EcoStandard®.

Un bon moyen, pour les énormes marketplace en mal d'identité de recréer un lien avec leurs clients tout en montrant une forme de respect pour leurs attentes spécifiques.
