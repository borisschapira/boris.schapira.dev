---
title: GPT et autres modèles…
subtitle: du potentiel, des questions et des inquiétudes
slug: des-questions
last_modified_at: 2023-03-23 07:49:00 +0000
---

Depuis plusieurs semaines, il ne se passe pas une journée sans que ChatGPT ne fasse irruption dans les discussions que j'ai avec de très nombreux professionnel·les du numérique.

L'émergence des LLM (Large Language Model) comme GPT ou Cédille, capables de produire du contenu (sous la forme d'une discussion ou non) m'interroge.

Je vais utiliser cet article pour jeter mes points d'attention. Je ne m'interdis pas de le mettre à jour plus tard avec de nouveaux éléments. Je parle au présent parce que ces solutions sont déjà là. Nous ne parlons pas d'un problème du futur. Ce n'est pas de la science-fiction, mais un problème politique.

---

## Intro

Besoin d'une intro sur ChatGPT ? J'ai trouvé personnellement que cette vidéo était très bien construite, et accessible pour des néophytes :

{% include media/youtube.html.liquid id="R2fjRbc9Sa0" title="De quoi ChatGPT est-il VRAIMENT capable ? | Ft. Science4All" %}

En quelques mots, si vous préférez me lire : un LLM est un système à modèle d'apprentissage automatique dont l'objectif est de manipuler le langage naturel (on parle de Natural Language Processing ou NLP).

Une fois le modèle alimenté et entrainé statistiquement, il peut servir à :

-   classifier des contenus
-   élaborer de nouveaux contenus textuels à partir d'un contexte interactionnel : à partir d'une consigne ou dans le cadre d'un échange textuel (chat)
-   modifier des contenues existants

Ces systèmes ne comprennent pas ce qu'ils écrivent, en tout cas pas dans le sens où nous l'entendons. Ils se basent sur des analyses statistiques pour prédire le prochain élément d'une phrase, compte tenu du contexte à leur disposition (constitué de la consigne d'origine et d'une partie de l'historique d'interaction).

Leur nature profonde les amène à produire des contenus très consensuels (au regard des données qui les ont alimentées).

## Le positif

Ces systèmes sont utilisés ou peuvent l'être de manière à profiter aux organisations et la société.

Les usages décrits ici doivent tous êtres validés par un·e opérateur·ice humain·e doué de compétences spécifiques, qui se chargera de corriger les défauts éventuels. L'outil lui apporte une productivité importante sur la partie la plus fastidieuse de la tâche.

### Inclusion

Quand on est capable de créer ou de modifier un contenu à partir d'un autre, alors on peut fabrique des correspondances multimédia.

On peut, par exemple, prendre le sous-titrage automatique d'une conférence et corriger son contenu pour qu'il soit :

-   plus synthétique ;
-   plus intelligible ;
-   découpé de manière optimale pour la lecture.

On peut aussi faire décrire automatiquement des images qui n'auraient pas de description textuelle sans cela, par défaut d'éducation des contributeur·ices.

On peut aussi prendre un texte légal, comme les conditions générales d'utilisation d'un service, et demander au LLM de le convertir en français Facile à lire et à comprendre (FALC).

Non seulement ces usages pourraient augmenter la productivité des utilisateurs, mais ils permettraient surtout un accès facilité à l'information pour une immense partie de la population qui en est aujourd'hui privée : personnes mal ou non-voyantes, ne sachant pas lire ou ayant des troubles de la lecture, neuroatypique avec des troubles de la concentration… pour elles et eux, la capacité de synthèse et de restitution de l'information est cruciale.

À condition que l'information soit de qualité.

### Manipulation de large jeux de données

La puissance de calcul de ces outils, couplées à l'analyse textuelle, peut également service à classer de très nombreux commentaires pour en faciliter l'analyse ou l'exclusion (par exemple dans le cadre de la modération).

Ils peuvent ainsi aider à acheminer une question vers la personne la plus susceptible d'y répondre ou améliorer les réponses d'un moteur de recherche sur une base de connaissance bien délimitée.

### Appariement de consensus

Un domaine dans lequel il est très pertinent d'établir du consensus linguistique c'est… la langue elle-même. Ces solutions améliorent tout ce que nous avons en termes de correction orthographique, grammaticale, ainsi que nos outils de traduction, du moins dans une compréhension universaliste de la langue (qu'on le veuille ou non, certaines spécificité seront intraduisibles car n'ayant pas d'équivalent dans la langue de destination).

### Régulation

Oui, la régulation, je mets ça dans le positif, parce que je ne suis pas convaincu que le libéralisme (économique ou des mœurs) puisse exister sans un cadre bien défini. Et comme pour la souveraineté des données personnelles, il y a un marché à prendre : celui de la réflexion et de l'implémentation d'une cadre légal autour des intelligences artificielles.

Comme pour les données personnelles, c'est un sujet très sensible pour les organisations, parce qu'il touche à leur capacité d'innovation. Mais pour toutes les raisons ci-dessous, je pense qu'il faut aller dans ce sens, et le plus vite sera le mieux, pour le développement d'outils éthiques dont le bénéfice sert la société.

## Ce qui m'inquiète

Une fois qu'on a dit ce qui va pousser l'adoption de ce type de solutions, voyons les conséquences.

### Contribution invisible

Dans la chaîne de production de valeur autour des LLM, on trouve bien sûr l'algorithme. Mais il n'est rien sans le renforcement par des humains (on parle de Reinforcement Learning from Human Feedback, aka RLHF). Pour ChatGPT, on parle de Kenyan payés 2$ de l'heure pour répondre à des scrutins et "éduquer" le système[^kenyanworkers].

[^kenyanworkers]: "[OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxix](https://time.com/6247678/openai-chatgpt-kenya-workers/)", Billy Perrigo dans Time

Si, à termes, un LLM comme ChatGPT permet de supprimer des emplois en répondant à la place d'interlocuteur·ices humain·es à des questions, ce n'est que grâce à d'autres emplois, moins rémunérés, invisibles à un·e consommateur·ice occidental·e.

On reproduit le modèle de sous-traitance de l'industrie textile, dans des proportions inégalées mais en conservant sa toxicité[^aicolonialism].

[^aicolonialism]: "[AI Colonialism](https://www.technologyreview.com/supertopic/ai-colonialism-supertopic)", MIT Technology Review

<ins datetime="2023-02-24">Je parle de toxicité du modèle, pas écologique. En termes d'impact écologique, l'industrie textile est difficile à dépasser.</ins>

### Dilution de la responsabilité (voire suppression)

Beaucoup de plate-formes et des décideurs parlent "d'algorithmes" pour cacher des décisions de mise en avant bien humaines. Parler d'algorithmes permet de cacher la responsabilités des personnes qui dirigent les paramètres de ces programmes[^smbc], et est également utilisé quand on parle d'Intelligence Artificielle (IA) pour diluer le rôle de ces agents dans les apprentissages de leurs LLM[^algorithmes].

[^smbc]: Voir le comic "[Algo](https://www.smbc-comics.com/comic/algo)", par Zach Weinersmith.

[^algorithmes]: "[On entend trop le mot algorithme](https://framablog.org/2022/09/29/on-entend-trop-le-mot-algorithme/)", Stéphane Bortzmeyer pour Framablog

Prenons un exemple concret : la discrimination à l'embauche. De nombreux algorithmes ont été créés, au fil des années, pour automatiser le tri des CVs, faisant apparaitre des discriminations avérées[^mozaikrh]. Ces abus ont amené la Défenseure des Droits à replacer le principe de discrimination au cœur du projet de réglementation de la commission européenne[^defdroits] dès 2022. Mais pour l'instant, rien n'est acté, et les recours contre ces discriminations n'ont pas de cadre légal.

> **Annexe: Étude de cas**  
> La candidature de Khadija, jeunes diplômées, mariées un enfant, est éliminé par un système d'IA de présélection automatique de CV. La sélection finale étant humaine, cette procédure est autorisée par le RGPD qui oblige par ailleurs l'entreprise à informer Khadija de son utilisation. Le SIA concerné est jugé à haut risque (art. 6 AIA) mais, dépendant de l'annexe III, il ne nécessite pas un audit ex ante pour obtenir la conformité; seule l'existence de la documentation (art. 11 AIA) est nécessaire. Quel est le recours possible de Khadija s'estimant discriminée par son genre, son origine ou les deux? L'analyse ci-dessus montre que ses chances d'obtenir gain de cause sont nulles.  
> <cite>"[Les Réglementations Européennes des Systèmes d’IA à Haut Risque 'oublient' la Défense des Droits Fondamentaux](https://www.linkedin.com/pulse/les-r%2525C3%2525A9glementations-europ%2525C3%2525A9ennes-des-syst%2525C3%2525A8mes-dia-%2525C3%2525A0-haut-besse%3FtrackingId=bHN6kP0NS42xjGPGI7HXBQ%253D%253D/?trackingId=bHN6kP0NS42xjGPGI7HXBQ%3D%3D)", Philippe Besse</cite>

[^mozaikrh]: "[Recruter avec des algorithmes pour moins discriminer : bonne ou mauvaise idée ?](https://mozaikrh.com/recruter-avec-des-algorithmes-pour-moins-discriminer-bonne-ou-mauvaise-idee/)", Mozaik RH

[^defdroits]: "[Intelligence artificielle : la Défenseure des droits appelle à replacer le principe de non-discrimination au cœur du projet de règlement de la Commission européenne](https://www.defenseurdesdroits.fr/fr/communique-de-presse/2022/06/intelligence-artificielle-la-defenseure-des-droits-appelle-a-replacer)", Communiqué de Presse

### Consensualité violente

La contribution caractéristique de ces systèmes en fait de très bon baratineurs, statistiquement capables de nous dire avec une très grande certitude les choses qu'on veut entendre.

Et pour savoir ce que nous voulons entendre, ils se basent sur des corpus monstrueux de données.

Je ne sais pas qui fournit les données. Je ne connais pas la nature des données.

La plupart des contenus produits par des humain·es sont biaisés, violents, et je ne vois pas ce qui pourrait résulter d'une telle éducation, si ce n'est de nouveaux contenus consensuellement biaisés et violents[^perfreviews].

[^perfreviews]: "[We asked ChatGPT to write performance reviews and they are wildly sexist (and racist)](https://www.fastcompany.com/90844066/chatgpt-write-performance-reviews-sexist-and-racist)"

Pire : dans la mesure où l'indignation encourage la consommation, il y a fort à parier que des LLM seront rapidement utilisés (si ce n'est pas déjà le cas) pour servir du contenu spécifiquement "violent envers les personnes concernées" (les conservateurs sont en panique[^woke]).

[^woke]: "[Conservatives Are Panicking About AI Bias, Think ChatGPT Has Gone 'Woke'](https://www.vice.com/en/article/93a4qe/conservatives-panicking-about-ai-bias-years-too-late-think-chatgpt-has-gone-woke)", Matthew Gault pour VICE

Au mieux, s'ils ne sont ni biaisés ni violents, les contenus seront juste plats, globalement ininstructifs. Une usine à produire un consensus mou et sans réelle dialectique.

### Consensus invisibilisant

Le consensus peut également être, sans mauvaise intention, un outil d'invisibilisation de la réalité.

Si vous demandez à un LLM de vous produire un paragraphe décrivant les chats, il vous expliquera que ce sont des créatures adorables, de très bons compagnons, de vraies peluches ronronnantes[^eminemcats]. Et c'est sûrement vrai.

[^eminemcats]: "[I asked AI to write an Eminem rap about cats](https://youtu.be/jnQ0zEQPu_A)", Grandayy

Mais les chats sont aussi un fléau pour la biodiversité, car ce sont des prédateurs ultimes responsables de la disparition de nombreuses espèces et en menaçant beaucoup d'autres[^cats]. On en parle moins.

[^cats]: "[Domestic cats and their impacts on biodiversity: A blind spot in the application of nature conservation law](https://besjournals.onlinelibrary.wiley.com/doi/10.1002/pan3.10073)", Arie Trouwborst, Phillipa C. McCormack, Elvira Martínez Camacho

Bon courage aux femmes et aux hommes de science pour imposer des discussions qui ne font pas déjà partie du débat public.

### À 100 à l'heure sur l'autoroute du totalitarisme

Dans un monde où il est facile d'inonder le marché de l'information avec des données qui se contredisent, la démocratie ne peut pas survivre.

> Quand tout le monde vous ment en permanence, le résultat n'est pas que vous croyez ces mensonges mais que plus personne ne croit plus rien (...). Un peuple qui ne peut plus rien croire ne peut se faire une opinion. Il est privé non seulement de sa capacité d'agir mais aussi de sa capacité de penser et de juger. Et avec un tel peuple, vous pouvez faire ce que vous voulez. <cite>Hannah Arendt</cite>

### Autorité

Quand je lis l'article d'un confrère ou d'une consoeur spécialisée dans un de mes domaines de prédilection, je m'accroche à certains éléments de savoir que je connais pour établir l'autorité de l'auteur·ice et ainsi savoir si je peux faire confiance à la partie du contenu qui m'échappe.

Cela n'est pas possible avec du contenu produit par ces systèmes. Le contenu peut être incroyablement juste et m'inspirer confiance puis, deux lignes plus loin, complètement faux, sans que je n'ai aucun moyen de le savoir.

Et contrairement à un·e professionnel·le, tant qu'il ne se trompe pas sur des choses incroyablement consensuelles, le système n'a pas à craindre pour sa réputation.

Pire, il peut produire les pires absurdités et dire, parce que c'est crédible, que **vous** les avez dites. Ou expliquer que votre entreprise produit un service qu'elle ne produit pas, et ainsi détériorer à la fois votre stratégie d'acquisition et votre réputation[^opencage]. Il peut détruire sa propre autorité, mais aussi la nôtre.

[^opencage]: "[Don't believe ChatGPT - we do NOT offer a "phone lookup" service](https://blog.opencagedata.com/post/dont-believe-chatgpt)", The OpenCage Blog

### Loi de Brandolini

> la quantité d'énergie nécessaire pour réfuter des sottises […] est supérieure d'un ordre de grandeur à celle nécessaire pour les produire. <cite><a href="https://fr.wikipedia.org/wiki/Loi_de_Brandolini">Loi de Brandolini (Wikipédia)</a></cite>

Nous n'avons pas la puissance de calcul nécessaire à détecter les absurdités qui seront dites pas ces LLM et les contredire efficacement.

### Boucles de rétro-alimentation

Que se passe-t-il quand un LLM se nourrit en continu ? Soit il se retrouve exposé à des contenus produits par d'autres LLM (soit directement, soit par le biais d'intermédiaires qui les citent), soit il continue à être alimenté par des données hiérarchisées par des scrutins alimentés par des personnes qui, elles-mêmes, sont exposées à des contenus produits par un LLM (donc leur jugement est biaisé).

Quel impact cela pourrait-il avoir sur la qualité des contenus ?

Nous avons déjà des exemples : une using à générer de fausses informations[^bingbard].

[^bingbard]: "[Google and Microsoft’s chatbots are already citing one another in a misinformation shitshow](https://www.theverge.com/2023/3/22/23651564/google-microsoft-bard-bing-chatbots-misinformation)", James Vincent, The Verge

### Volumes

Le <i lang="en">copywriting</i> était hier un métier avec divers critères de qualité. Avec ces innovations, c'est désormais un marché industriel où inonder les consommateurs de contenus a un coût fixe plutôt que variable.

Comment gérons-nous ce volume important de contenus dont il ne sera rapidement plus possible de savoir s'ils proviennent d'humains ou de machines (si tant est que ce soit possible aujourd'hui) ?

### Reproduction des inégalités

Dans un monde où le marché est inondé de produits (ici des contenus textuels) de qualité médiocre, la capacité à distinguer la qualité n'a plus de valeur. Cela prend trop de temps. Il est plus rentable de chercher des sources de qualité.

Réussir au mérite est déjà difficile : demain, cela sera quasiment impossible. Non pas qu'on ne veuille pas vous laisser votre chance mais il est tout bonnement inconcevable de trouver la bonne prestation, le bon CV, le bon service, au milieu de l'ensemble des générations automatiques. Tout comme il est très difficile de trouver un bon produit sur une <i lang="en">marketplace</i>.

Les réseaux les plus établis, comme les cercles bourgeois et/ou les groupes de diplômé·es, continuent à servir de références. Des cercles où il vaut mieux être "fils" ou "fille de" pour entrer.

### Reproduction des pratiques toxiques

Si nous, humains, parlons autant de l'art de nous convaincre mutuellement de ce qui est vraie (de la démonstration à la rhétorique en passant par la philosophie), c'est que nous sommes en réalité assez peu doués pour le dialogue.

Nos discussions sont souvent inégales, parfois manipulatoires. Les différentes parties ne prennent pas soin les unes des autres ou ne sont tout simplement pas alignées sur le cadre de la discussion.

Il n'y a aucune raison pour que des LLM entrainés à partir de nos conversation agissent différemment quand ils seront exposés à des interlocuteur·ices humain·es, reproduisant menaces et harcèlement[^harassment].

[^harassment]: [‘My AI Is Sexually Harassing Me’: Replika Users Say the Chatbot Has Gotten Way Too Horny](https://www.vice.com/en/article/z34d43/my-ai-is-sexually-harassing-me-replika-chatbot-nudes), Samantha Cole pour VICE

### Réseaux de distribution

Quand le contenu n'a plus de valeur, c'est le réseau de distribution qui gagne en valeur d'usage. Les réseaux sociaux sont désormais payants ou en voie de l'être. Les éditeurs de livres augmentent leurs marges pour assumer de nouveaux coûts. Les réseaux immobiliers améliorent leur pourcentage vs. celui des agents. La mise en compétition de la production originale avec des copycats sans coût d'exploitation détruit tout espace de création.

Il est impossible de penser une stratégie de contenus non-quantitatives, car elle n'aura aucune visibilité dans la masse.

### Personnalisation

Certains de ces réseaux de distribution de l'information se baseront sur la personnalisation des données. C'était déjà le cas précédemment, puisque les suggestions Google, TikTok ou Youtube d'une personne ne sont pas celles d'une autre. Mais dans toutes ces situations, ces plateformes recommandent du contenu produit par des tiers.

Avec la production automatisée à bas coût de contenus personnalisés correspondant aux attentes particulières de la personne visitant le site dans cette session, cette contribution tierce (et responsabilité légale) n'est plus utile. Un contenu généré à la volée (et potentiellement faux voire dangerereux) peut être servi, sans information sur son origine ou possibilité de mise en perspective.

Sauf erreur (corrigez-moi avec plaisir), rien n'oblige les acteurs concernés à conserver des traces des contenus produits et délivrés aux visiteur·euses.

### Empoisonnement de l'espace public

Si tous les contenus produits sont reconnus et acceptés comme étant des vérités car extrêmement consensuels, que se passe-t-il quand, volontairement ou non, le système est empoisonné ? Seules quelques franges d'extrême gauche dénoncent la manière dont les assistants vocaux valorisent déjà le capitalisme effréné. Qui détectera un glissement sémantique des IA, quand leur utilisation sera totalement normalisée et leur parole d'or ?

Et même si un tel glissement ne se produit pas, même si le marché reste incroyablement sous contrôle, alors il n'en restera pas moins que ces outils, LLM ou production visuelle, serviront également à améliorer la productivité d'activités humaines aujourd'hui discutables, comme la publicité.

### Tous les problèmes des assistants vocaux actuels

Ces LLM vont rapidement se doter d'une voix et rejoindre le large domaine existant des assistants vocaux.

Or d'après l'UNESCO, les voix féminines de Siri, Cortana, Alexa ou encore Google Assistant reflètent et renforcent les stéréotypes de genre chez les usagers, parce qu'elles sous-tendent qu'une femme est toujours disponible, docile, patiente et attentionnée[^blush].

[^blush]: "[I'd blush if I could: closing gender divides in digital skills through education](https://unesdoc.unesco.org/ark:/48223/pf0000367416.page=1)", UNESCO, EQUALS Skills Coalition

### Le prix de l'humanité

Si nous arrivons à contourner les limites et risques actuels de ces systèmes et que la productivité mondiale croît, qui en bénéficiera ? Est-ce que nous travaillerons d'autant moins ?

Est-ce que les entreprises propriétaires de ces systèmes se mettent spontanément à payer des impôts dans les pays qui ont éduqué et maintenu en bonne santé et en sécurité les ingénieur·euses qui ont créés ces systèmes ?

Est-ce qu'elles en paient dans les pays où elles embauchent à bas coût des forçats pour en améliorer les réponses ?

Est-ce qu'elles paient des impôts pour rembourser les infrastructures sociales, éducatives, médicales, qui sont détruites par leur adoption ?

{% include media/youtube.html.liquid id="Sqa8Zo2XWc4" title="Artificial Intelligence: Last Week Tonight with John Oliver (HBO)" %}
