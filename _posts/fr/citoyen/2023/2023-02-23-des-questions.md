---
title: Des questions
last_modified: 2023-02-24T07:25:32.586Z
---

Depuis plusieurs semaines, il ne se passe pas une journée sans que ChatGPT ne fasse irruption dans les discussions que j'ai avec de très nombreux professionnel·les du numérique.

Et sincèrement, l'émergence de ces LLM (Large Language Model) capable de produire du contenu (sous la forme d'une discussion ou non) m'interroge.

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

-   plus intelligible
-   découpé de manière optimale pour la lecture

On peut aussi faire décrire automatiquement des images qui n'auraient pas de description textuelle sans cela, par défaut d'éducation des contributeur·ices.

On peut aussi prendre un texte légal, comme les conditions générales d'utilisation d'un service, et demander au LLM de le convertir en français Facile à lire et à comprendre (FALC).

### Manipulation de large jeux de données

La puissance de calcul de ces outils, couplées à l'analyse textuelle, peut également service à classer de très nombreux commentaires pour en faciliter l'analyse ou l'exclusion (par exemple dans le cadre de la modération).

Ils peuvent ainsi aider à acheminer une question vers la personne la plus susceptible d'y répondre ou améliorer les réponses d'un moteur de recherche sur une base de connaissance bien délimitée.

### Appariement de consensus

Un domaine dans lequel il est très pertinent d'établir du consensus linguistique c'est… la langue elle-même. Ces solutions améliorent tout ce que nous avons en termes de correction orthographique, grammaticale, ainsi que nos outils de traduction, du moins dans une compréhension universaliste de la langue (qu'on le veuille ou non, certaines spécificité seront intraduisibles car n'ayant pas d'équivalent dans la langue de destination).

## Ce qui m'inquiète

Une fois qu'on a dit ce qui va pousser l'adoption de ce type de solutions, voyons les conséquences.

## Contribution invisible

Dans la chaîne de production de valeur autour des LLM, on trouve bien sûr l'algorithme. Mais il n'est rien sans le renforcement par des humains (on parle de Reinforcement Learning from Human Feedback, aka RLHF). Pour ChatGPT, on parle de Kenyan payés 2$ de l'heure pour répondre à des scrutins et "éduquer" le système[^kenyanworkers].

[^kenyanworkers]: "[OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxix](https://time.com/6247678/openai-chatgpt-kenya-workers/)", Billy Perrigo dans Time

Si, à termes, un LLM comme ChatGPT permet de supprimer des emplois en répondant à la place d'interlocuteur·ices humain·es à des questions, ce n'est que grâce à d'autres emplois, moins rémunérés, invisibles à un·e consommateur·ice occidental·e.

On reproduit le modèle de sous-traitance de l'industrie textile, dans des proportions inégalées mais en conservant sa toxicité.

<ins datetime="2023-02-24T07:25:32.586Z">Je parle de toxicité du modèle, pas écologique. En termes d'impact écologique, l'industrie textile est difficile à dépasser.</ins>

## Consensualité violente

La contribution caractéristique de ces systèmes en fait de très bon baratineurs, statistiquement capables de nous dire avec une très grande certitude les choses qu'on veut entendre.

Et pour savoir ce que nous voulons entendre, ils se basent sur des corpus monstrueux de données.

Je ne sais pas qui fournit les données. Je ne connais pas la nature des données.

La plupart des contenus produits par des humain·es sont biaisés, violents, et je ne vois pas ce qui pourrait résulter d'une telle éducation, si ce n'est de nouveaux contenus consensuellement biaisés et violents.

Au mieux, s'ils ne sont ni biaisés ni violents, les contenus seront juste plats, globalement ininstructifs. Une usine à produire un consensus mou et sans réelle dialectique.

## À 100 à l'heure sur l'autoroute du totalitarisme

Dans un monde où il est facile d'inonder le marché de l'information avec des données qui se contredisent, la démocratie ne peut pas survivre.

> Quand tout le monde vous ment en permanence, le résultat n'est pas que vous croyez ces mensonges mais que plus personne ne croit plus rien (...). Un peuple qui ne peut plus rien croire ne peut se faire une opinion. Il est privé non seulement de sa capacité d'agir mais aussi de sa capacité de penser et de juger. Et avec un tel peuple, vous pouvez faire ce que vous voulez. <cite>Hannah Arendt</cite>

## Autorité

Quand je lis l'article d'un confrère ou d'une consoeur spécialisée dans un de mes domaines de prédilection, je m'accroche à certains éléments de savoir que je connais pour établir l'autorité de l'auteur·ice et ainsi savoir si je peux faire confiance à la partie du contenu qui m'échappe.

Cela n'est pas possible avec du contenu produit par ces systèmes. Le contenu peut être incroyablement juste et m'inspirer confiance puis, deux lignes plus loin, complètement faux, sans que je n'ai aucun moyen de le savoir.

Et contrairement à un·e professionnel·le, tant qu'il ne se trompe pas sur des choses incroyablement consensuelles, le système n'a pas à craindre pour sa réputation.

Pire, il peut produire les pires absurdités et dire, parce que c'est crédible, que **vous** les avez dites. Ou expliquer que votre entreprise produit un service qu'elle ne produit pas, et ainsi détériorer à la fois votre stratégie d'acquisition et votre réputation[^opencage]. Il peut détruire sa propre autorité, mais aussi la nôtre.

[^opencage]: "[Don't believe ChatGPT - we do NOT offer a "phone lookup" service](https://blog.opencagedata.com/post/dont-believe-chatgpt)", The OpenCage Blog

## Loi de Brandolini

> la quantité d'énergie nécessaire pour réfuter des sottises […] est supérieure d'un ordre de grandeur à celle nécessaire pour les produire. <cite><a href="https://fr.wikipedia.org/wiki/Loi_de_Brandolini">Loi de Brandolini (Wikipédia)</a></cite>

Nous n'avons pas la puissance de calcul nécessaire à détecter les absurdités qui seront dites pas ces LLM et les contredire efficacement.

## Boucles de rétro-alimentation

Que se passe-t-il quand un LLM se nourrit en continu ? Soit il se retrouve exposé à des contenus produits par d'autres LLM, soit il continue à être alimenté par des données hiérarchisées par des scrutins alimentés par des personnes qui, elles-mêmes, sont exposées à des contenus produits par un LLM. Quel impact cela pourrait-il avoir sur la qualité des contenus ?

## Volumes

Le <i lang="en">copywriting</i> était hier un métier avec divers critères de qualité. Avec ces innovations, c'est désormais un marché industriel où inonder les consommateurs de contenus a un coût fixe plutôt que variable.

Comment gérons-nous ce volume important de contenus dont il ne sera rapidement plus possible de savoir s'ils proviennent d'humains ou de machines (si tant est que ce soit possible aujourd'hui) ?

## Reproduction des inégalités

Dans un monde où le marché est inondé de produits (ici des contenus textuels) de qualité médiocre, la capacité à distinguer la qualité n'a plus de valeur. Cela prend trop de temps. Il est plus rentable de chercher des sources de qualité.

Réussir au mérite est déjà difficile : demain, cela sera quasiment impossible. Non pas qu'on ne veuille pas vous laisser votre chance mais il est tout bonnement inconcevable de trouver la bonne prestation, le bon CV, le bon service, au milieu de l'ensemble des générations automatiques. Tout comme il est très difficile de trouver un bon produit sur une <i lang="en">marketplace</i>.

Les réseaux les plus établis, comme les cercles bourgeois et/ou les groupes de diplômé·es, continuent à servir de références. Des cercles où il vaut mieux être "fils" ou "fille de" pour entrer.

## Réseaux de distribution

Quand le contenu n'a plus de valeur, c'est le réseau de distribution qui gagne en valeur d'usage. Les réseaux sociaux sont désormais payants ou en voie de l'être. Les éditeurs de livres augmentent leurs marges pour assumer de nouveaux coûts. Les réseaux immobiliers améliorent leur pourcentage vs. celui des agents. La mise en compétition de la production originale avec des copycats sans coût d'exploitation détruit tout espace de création.

Il est impossible de penser une stratégie de contenus non-quantitatives, car elle n'aura aucune visibilité dans la masse.

## Empoisonnement de l'espace public

Si tous les contenus produits sont reconnus et acceptés comme étant des vérités car extrêmement consensuels, que se passe-t-il quand, volontairement ou non, le système est empoisonné ? Seules quelques franges d'extrême gauche dénoncent la manière dont les assistants vocaux valorisent déjà le capitalisme effréné. Qui détectera un glissement sémantique des IA, quand leur utilisation sera totalement normalisée et leur parole d'or ?

## Le prix de l'humanité

Si nous arrivons à contourner les limites et risques actuels de ces systèmes et que la productivité mondiale croît, qui en bénéficiera ? Est-ce que nous travaillerons d'autant moins ?

Est-ce que les entreprises propriétaires de ces systèmes se mettent spontanément à payer des impôts dans les pays qui ont éduqué et maintenu en bonne santé et en sécurité les ingénieur·euses qui ont créés ces systèmes ?

Est-ce qu'elles en paient dans les pays où elles embauchent à bas coût des forçats pour en améliorer les réponses ?

Est-ce qu'elles paient des impôts pour rembourser les infrastructures sociales, éducatives, médicales, qui sont détruites par leur adoption ?
