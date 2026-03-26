---
title: "Lectures complémentaires sur la fatigue liée à l'IA"
translations:
    en: readings-ai-fatigue
---

En février dernier, j'écrivais sur [productivité et qualité](/notes/2026-02-productivite-qualite/) : la délégation mal pensée, la charge cognitive des validateurs, l'érosion silencieuse des compétences collectives. Un texte construit depuis une perspective organisationnelle à partir de mes discussions avec mes confrères et consoeurs occupant des rôles finalement périphériques au code lui-même.

## Ce que j'avais manqué

L'une d'entre elles m'a partagé un article de Siddhant Khare qui lui, a vécu la même réalité, de plus près. Il construit une infrastructure d'agents IA, c'est-à-dire les outils que d'autres ingénieurs utilisent pour faire tourner des IA en production. Et il a quand même fini par se heurter à un mur. Pas un mur de performance. Un mur humain.

Son article, "<a href="https://siddhantkhare.com/writing/ai-fatigue-is-real" hreflang="en" lang="en">AI fatigue is real and nobody talks about it</a>" (en anglais : je traduirai les citations par la suite), me hante, tant il complète ce que j'avais écrit de façon significative.

{% capture note %} **NOTE**  
Ce n'est pas la peine de venir me dire que les IA sont une gabegie écologique et économique, je suis au courant. Je m'intéresse au fait que ces outils sont, aujourd'hui, une réalité, et que cette réalité a des conséquences humaines et organisationnelles.

On peut parler d'à quel point il est difficile de se passer de cette technologie dans une réalité compétitive où elle est utilisée massivement, tout en sachant qu'elle n'est pas rentable à long terme. Mais ce n'est pas le sujet de ce billet spécifique.{% endcapture note %} {% include note.html.liquid content=note %}

### Le choc des systèmes probabilistes

Mon article parlait de la **surcharge cognitive liée à la validation**. Ce que je n'avais pas nommé, c'est une source bien spécifique de cette surcharge : le fait de collaborer avec un système fondamentalement imprévisible, alors que notre cerveau est câblé pour le déterminisme.

Siddhant le formule avec une précision que je n'avais pas eue :

> Vous interagissez avec un système probabiliste, alors que votre cerveau est programmé pour des systèmes déterministes. Ce décalage est une source constante et latente de stress.

Le fait que le modèle ait décidé d'aller dans une autre direction aujourd'hui, que le même prompt produise des résultats différents selon les jours, sans explication accessible, sans log consultable, c'est terrible. Pour quelqu'un dont le métier repose sur la capacité à raisonner sur des systèmes déterministes, c'est une source d'anxiété discrète mais permanente.

Alors je sais, ce n'est pas une fatalité. Il existe des moyens de réduire cette variabilité des LLMs, de les rendre plus prévisibles. Mais c'est un travail de longue haleine, et il est facile de sous-estimer à quel point cette imprévisibilité est une source de stress pour les équipes.

### Le tapis roulant des nouveaux outils

D'autant que la pression est constante pour rester "à jour" dans un fonctionnement des équipes qui se réinvente chaque semaine, chaque jour.

> Je suis tombé dans ce piège sans hésiter. Je passais mes week-ends à évaluer de nouveaux outils. Je lisais chaque note de service. Je regardais chaque démo. J'essayais de rester à la pointe car j'avais une peur bleue d'être à la traîne.

Des semaines entières à configurer un nouvel outil, pour le voir dépassé la semaine d'après. Des workflows construits minutieusement, obsolètes en trois mois après une mise à jour du modèle. Siddhant appelle ça le <strong lang="en">Knowledge Decay</strong>, la dépréciation du savoir accumulé. J'était passé à côté de ça, mais c'est réel.

Ce n'est pas seulement de la fatigue. C'est une **destruction régulière de notre investissement cognitif**, sans garantie de retour. Et cette destruction est systémique, pas individuelle.

### Le piège du "aller, j'essaie encore un truc"

Mon article portait sur des dysfonctionnements organisationnels. Siddhant descend à l'échelle du geste de travail quotidien.

> Tu avais un objectif clair au départ. Trente minutes plus tard, tu débogues l'invite de commande au lieu de déboguer ton code. Tu optimises tes instructions pour un modèle de langage au lieu de résoudre le problème lui-même.

Il appelle ça le <strong lang="en">Prompt Spiral</strong> et je serais malhonnête en disant que je ne l'ai pas ressenti. On commence avec un objectif clair. La première réponse est bonne à 70 %. À partir de là, on affine le prompt. La deuxième itération est bonne à 75 %, mais elle a cassé quelque chose que la première avait réussi.

Et ainsi de suite. Quarante-cinq minutes plus tard, on a perdu de vue l'objectif initial, on est dans un cercle vicieux, et on n'a pas avancé d'un pouce.

Ce que je trouve remarquable dans son texte, c'est que Siddhant ne s'arrête pas au diagnostic. Il propose des règles concrètes, issues de sa propre expérience : trois tentatives maximum, puis on écrit soi-même ; des sessions limitées à trente minutes. La première heure du matin sans IA, pour "échauffer" sa propre pensée avant de déléguer quoi que ce soit.

Il y a quelque chose de tristement fascinant à voir à quel point ces règles sont devenues nécessaires à une bonne hygiène mentale, et à quel point elles sont difficiles à respecter.

**Mon article s'adressait aux managers et aux organisations. Le sien s'adresse aux praticien·nes, directement.** Ce n'est pas la même altitude. Les deux sont nécessaires. Les deux sont terribles.

Bref, je vous invite à lire "<a href="https://siddhantkhare.com/writing/ai-fatigue-is-real" hreflang="en" lang="en">AI fatigue is real and nobody talks about it</a>" parce qu'il le complète tout ce que j'avais laissé de côté : l'anxiété du déterministe face au probabiliste, l'épuisement de la veille permanente, les micro-décisions qui s'accumulent jusqu'au burn-out.

Et si vous avez vécu ce qu'il décrit, sachez que vous n'êtes pas seul·e. Et que ce n'est pas une question de compétence ou de discipline. Ce que nous vivons, ce qui est imposé aujourd'hui par le marché est dur, et aura des conséquences notables sur notre santé mentale, notre capacité à faire du bon travail, et notre plaisir à faire ce métier. Et ce, même si la bulle éclate.

## Je suis tombé par terre… 🎶

Entre deux articles s'interrogeant sur le **comment** (comment mieux utiliser ces outils, comment réorganiser les processus, comment préserver sa santé mentale), j'ai aussi récemment lu un autre texte qui, lui, pose une question différente : celle du **pourquoi**.

Mon article et celui de Siddhant analysent des **effets** : surcharge, érosion des compétences, fatigue individuelle et collective. Nous décrivons ce qui se passe sur le pont du navire. "<a href="https://www.stvn.sh/writing/programming-still-sucks-fqffhyp" hreflang="en">Programming Still Sucks</a>", de Steven Langbroek, décrit comment le navire a été construit, qui a décidé de jeter le manuel par-dessus bord, et qui a signé la liste des postes supprimés en se convainquant que "les juniors s'adapteront" (indice : non).

> L'IA n'a pas volé nos emplois. C'est la cupidité qui l'a fait. Cette même cupidité qui a délocalisé les usines au Bangladesh et qui maintient l'exploitation des mineurs de cobalt au Congo sous un nouveau masque.

Le texte est plus littéraire, plus politique, délibérément plus en colère (autant dire que je l'aime). C'est une excellente illustration de ce que l'obsession productive à court terme détruit sans le voir, sans même savoir ce qu'elle détruit. Là où mon article demande "comment mieux déléguer ?" et celui de Siddhant demande "comment survivre à ce rythme ?", ce troisième texte demande : **qui a décidé que c'était acceptable, et pourquoi ?**

Le tableau est assez complet, et malheureusement assez sombre.

## Et malheureusement, nous avons raison

Histoire d'enfoncer le clou, une dernière lecture : la note de conjoncture de l'INSEE pour mars 2026, intitulée "[Éclairage – Avec l’essor de l’intelligence artificielle générative, l’investissement numérique tire davantage la croissance aux États-Unis qu’en France, tandis que l’emploi recule dans les activités informatiques des deux côtés de l’Atlantique](https://www.insee.fr/fr/statistiques/8907419?sommaire=8907467)".

On y lit notamment que :

> En particulier, les indicateurs sectoriels suggèrent un retournement de l’emploi depuis deux ans dans les segments les plus exposés, notamment dans les activités de programmation informatique, et pour lesquels la valeur ajoutée est orientée à la hausse, aux États-Unis comme en France. En outre, dans les deux pays, l’ajustement de l’emploi de ce secteur serait concentré sur les jeunes entrants.

"Retournement de l'emploi", au cas où vous ne seriez pas sûr de ce que ça veut dire, c'est une façon élégante de dire que des emplois sont détruits. C'est explicité plus loin dans la légende d'un graphique :

> L’emploi dans le secteur des activités informatiques et des services d’information a baissé de 3,0 % entre le quatrième trimestre 2023 et le quatrième trimestre 2025. La contribution des 15-29 ans (hors alternants) a été de -3,8 points, contre +1,4 point pour les 30-54 ans.

Car dans ce contexte difficile, les plus âgé·es, qui sont en mesure de puiser dans leur expérience pour prendre le nécessaire recul émotionnel dont nous parlons tous·tes, sont plus à même de faire face à la situation (enfin, en tout cas, d'y faire face le moins mal). Les jeunes, eux, sont plus vulnérables. Ils n'ont pas encore eu le temps de construire une carrière, de développer des compétences transférables, de se forger une expérience qui les rendrait plus résilient·es face à ce genre de choc.

Bref, les chiffres sont là, et ils ne sont pas bons. Nous avons raison d'être inquiet·es. Nous avons raison de nous sentir fatigué·es. Nous avons raison de nous demander comment nous allons faire pour continuer à faire du bon travail dans ces conditions.
