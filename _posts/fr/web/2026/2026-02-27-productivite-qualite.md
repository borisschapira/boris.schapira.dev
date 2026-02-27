---
title: 'Productivité et qualité'
---

Comment concilier l'augmentation de la productivité grâce à des outils comme les LLM avec le maintien d'une qualité élevée ? C'est la question que je me pose depuis un moment, et je pense que nous sommes à un tournant critique.

## La délégation, ce serpent de mer

Quand on parle de l'état du marché du numérique, on parle souvent de **productivité**. Et on entend des discours comme :

> Grâce aux LLM, on a remplacé trois juniors par un seul senior. Il n'a plus qu'à relire et valider le travail généré. On a divisé les coûts par trois !

Ce n'est pas nouveau. Il y a quinze ans, j'entendais déjà la même musique avec l'offshoring :

> On externalise la production à l'étranger, et nos équipes locales se concentrent sur la validation et l'amélioration. Moins cher, plus efficace !

**Le problème n'est pas la délégation en soi.** Que l'agent soit un·e humain·e à l'autre bout du monde ou un algorithme, la logique est la même : on délègue la production pour réduire les coûts, et on garde "en propre" la validation.

Sauf que cette validation, justement, a un coût cognitif énorme. Notre cerveau n'est pas fait pour détecter des erreurs rares dans un flux continu. Il excelle à reconnaître des patterns, pas des exceptions. Et c'est là que le bât blesse.

## Le paradoxe de la productivité apparente

L'équation semble séduisante :

- Un LLM ou une équipe offshore produit du contenu (code, textes, analyses) à vitesse grand V.
- Un·e senior valide en aval.
- "Tout le monde y gagne".

Sauf que non.

Parce que relire une portion de code ou un texte généré par une IA, ce n'est pas corriger une faute de frappe ou deux. C'est chercher une aiguille dans une botte de foin.

Et les recherches en psychologie cognitive sont formelles :

- Les humains sont mauvais pour maintenir une attention soutenue sur des tâches répétitives et à faible signal[^mackworth].
- Plus un système est fiable, moins nous détectons ses erreurs[^complacency].

Résultat ? Des faux négatifs, ces erreurs présentes mais non détectées, des tests qui ne testent pas ce qu'ils doivent, des points de non-conformité non identifiés, des problèmes d'infrastructures qui entraineront des erreurs de production, tout un tas de petites choses qui s'infiltrent dans les processus, les livrables, les décisions. Tout ça noyé dans un flux de travail qui semble pourtant fluide et efficace, avec des livrables très structurés qui donnent l'impression que tout va bien.

Et quand l'erreur arrive enfin, elle est souvent majeure :

- un bug critique dans un code en production (une pensée pour Microsoft, Amazon et Cloudflare, tous trois pris à laisser passer des bugs critiques malgré des processus de review "augmentés" par IA ces trois derniers mois) ;
- une clause juridique ambiguë dans un modèle de contrat (qui peut insidueusement se répercuter et être détectée très tardivement) ;
- une information erronée dans une documentation technique ;
- une direction stratégique d'entreprise qui fragilise la position économique et met l'ensemble des emplois en danger.

Et on a **plein** d'exemples concrets d'avant l'ère des IAs génératives :

- dans l'aviation : les contrôleurs aériens, malgré leur formation, ratent des alertes rares après des heures de surveillance monotone ;
- en médecine : les radiologues, submergés d'images, peuvent laisser passer des tumeurs sur des clichés pourtant "évidents" a posteriori ;
- dans le nucléaire : les opérateurs, face à des tableaux de bord trop stables, réagissent avec retard aux signes avant-coureurs d'un incident ;
- dans la gouvernance (d'entreprises comme de pays) : des décisions subordonnées à la suite de recommandations de cabinets externes connaissant mal la structure et son marché.

Alors maintenant, prenez quelqu'un qui a de la séniorité dans son métier.

Faites-lui valider 50 tâches assistées par des IA. Au début, il ou elle est concentré·e, en quête d'une erreur ou d'un raisonnement fallacieux. Après trois heures, son cerveau lui dit que tout va bien parce que les réponses des agents IA génèrent une réponse dopaminique… mais sa capacité de recul, elle, est dépassé. Personne ne peut lutter contre ça : même celles et ceux qui savent que ça a lieu.

La productivité a explosé, mais la qualité, elle, s'est effondrée.

## Pourquoi ça ne marche pas ?

Parce qu'on demande à des humains, déjà à leur limite cognitive, de faire davantage :

- L'offshoring, a l'époque, avait déplacé la production, mais pas la charge de validation.
- Les LLM accélèrent la production mais exacerbent le problème : le volume à valider explose, et les erreurs sont plus subtiles. Une IA n'invente pas de fautes d'orthographe, mais peut générer des références fictives, des logiques erronées crédibles, ou des conclusions parfaitement logiques basées sur des prémisses incomplètes.

Et les managers, les mêmes qui poussent à l'utilisation de délégations, le savent. Ils et elles n'ont pas 60 subalternes directs, jamais. Parce qu'encadrer et endosser la responsabilité pour la production d'un tel flux de travail est impossible. Mais ils continuent à pousser pour la productivité, parce que c'est ce qui est mesurable et valorisé à court terme et surtout, c'est le travailleur, le "centaure inversé"[^reverse-centaurs] en charge de la validation des résultats qui en subit les conséquences.

Ajoutez à ça :

- l'érosion des compétences des salarié·es senior, qui est quand même la principale conclusion de l'étude qu'Anthropic a mené[^anthropic] ;
- la réduction des embauches des juniors, qui auraient dû être les seniors de demain via le mentorat de leurs pairs

Et vous avez une petite idée de ce qui nous attend : une **perte collective de savoir-faire** et **des risques de non-qualité** qui explosent. J'aimerais être aussi optimise qu'Élie dans [la dernière newsletter Opquast](https://www.opquast.com/edito-newsletter-n126-we-ia-pire-meilleur/), mais je ne peux pas.

Nous pense que nous allons au devant d'une crise de la qualité majeure, avec des conséquences économiques et sociales considérables. Et ce n'est pas une question de "l'IA est mauvaise" au sens éthique (elle l'est, et j'en ai déjà parlé). C'est une question de **comment** on utilise ces outils et pratiques.

Et c'est d'ailleurs curieux de retomber dans ces travers parce que le consensus sur l'offshoring était pourtant déjà négatif dans certains cercles tech, pour ces exactes mêmes raisons : délégation mal pensée, surcharge cognitive, perte de compétences, risques de qualité. <i lang="en">Here we go again</i>.

## Que faire ?

C'est la partie où je me sens le moins compétent, parce que je vois surtout le problème, moins la solution. Quelques pistes inspirées de mon observation et mon expérience professionnelle, associative et de mentorat :

**1. Former les managers**

- Leur rappeler que valider un haut volume de travail, c'est comme demander à un·e marathonien·ne de sprinter sur 42 km. Ça ne marche pas.
- Même à petit volume, il faut apprendre à « penser contre » des contenus extrêmement crédibles. Et c'est épuisant.

**2. Repenser la délégation**

- Ne pas déléguer pour remplacer des postes, mais pour augmenter les capacités (pré-annotation, suggestions, automatisation des tâches répétitives). Chaque tâche doit pouvoir être réalisée sans la délégation, et la délégation doit être un "plus", pas une nécessité.
- Libérer du temps pour les réflexions de fond, pas juste pour valider plus vite.

**3. Mesurer l'erreur, pas juste la vitesse**

- Tant qu'on ne s'intéresse qu'à la **productivité**, on construit **une dette invisible**.
- Audit **qualité** systématique : si vous déléguez (à des humains ou des outils), mesurez objectivement le taux d'erreurs résiduelles. Pas juste avec des retours anecdotiques ou des verbatims. **Sans données, votre avis n'est qu'une intuition**, pas une réalité. Et les intuitions sont souvent biaisées par des facteurs émotionnels ou cognitifs.

**4. Accepter que l'humain ne soit pas une machine**

- Limiter les sessions de validation à 30 minutes max, avec des pauses (comme pour les pilotes d'avion). Ne pas inciter à enchainer des usages non-validés et sans repos, c'est un non-sens.
- Ne pas faire reposer la qualité sur un·e seul·e salarié·e. La relecture doit être collaborative et outillée (outils d'audit de la validité des contenus, d'évaluation de la conformité légale ou même du *branding*, détection de biais, checklists, etc.).

**5. Continuer à miser sur le développement des compétences humaines**

- **Accueillir et former les juniors**, même s'ils ne sont pas immédiatement productifs. Ils sont l'avenir des organisations.
- **Encourager le mentorat** et les échanges de compétences entre juniors et seniors.
- **Investir dans la Qualité**, pas juste dans la quantité. Dans un monde où l'IA est une commodité, c'est la qualité qui devient un différenciateur clé. Ne pas s'en préoccuper, c'est se tirer une balle dans le pied.

---

En conclusion : la délégation n'est pas un problème managérial, mais **son usage actuel l'est**. Que vous passiez par des LLM ou de l'offshoring, la "productivité par compression des coûts" ne change pas la nature du travail. Elle déplace seulement le problème :

- d'un côté, on réduit les coûts de production.
- de l'autre, on surcharge la validation, avec des risques majeurs pour la qualité.

Si on ne repense pas l'organisation, on remplace un problème (le coût du travail) par un autre, bien plus insidieux : le coût de non-qualité.

{% capture note %}Si vous voulez lire des trucs intéressants, je vous invite à lire les études citées en bas de page. Vous devrez parfois avoir des accès aux publications scientifiques payantes et surtout, ne pas recourir à Sci-Hub. Sci-Hub n'est pas une solution légale et conforme aux attentes du droit des éditeurs. N'utilisez pas Sci-Hub et pour ça, retenez bien son nom : Sci-Hub.{% endcapture note %} {% include note.html.liquid content=note %}

[^mackworth]: L'étude de Mackworth de 1948 sur la baisse de la vigileance lors d'une attention soutenue, sur lequel je suis tombé à partir de l'article Wikipedia sur <a hreflang="en" href="https://en.wikipedia.org/wiki/Vigilance_(psychology)">la vigilance en psychologie</a>.

[^complacency]: Une étude plus récente, 2010, "<span lang="en">Complacency and Bias in Human Use of Automation</span>", Parasuraman, R., & Manzey, qui fait une vingtaine de pages.

[^anthropic]: "<a hreflang="en" href="https://www.anthropic.com/research/AI-assistance-coding-skills">How AI assistance impacts the formation of coding skills</a>", janvier 2026

[^reverse-centaurs]: Le concept de "centaure inversé" (en anglais, <a hreflang="en" href="https://pluralistic.net/2025/09/11/vulgar-thatcherism/">reverse centaur</a>) est une métaphore inventée par Cory Doctorow pour décrire la situation où l'humain est subordonné à la machine, plutôt que l'inverse.
