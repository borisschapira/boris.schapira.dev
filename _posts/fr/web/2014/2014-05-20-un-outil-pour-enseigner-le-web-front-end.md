---
title: 'Un outil pour enseigner le Web Front-End'
tags:
    - Education
    - Outils
    - Front-End
    - Conférences
    - 'Sud Web 2014'
serie: 'Sud Web 2014'
subtitle: "suite d'un atelier Sud Web 2014"
---

[Romy](http://romy.tetue.net/ 'Romy, conceptrice web, parisienne et têtue'), [Delphine](http://nissone.com/ 'Delphine, responsable qualité Web') et [Rémi](http://www.hteumeuleu.fr/ 'Rémi, intégrateur Web passionné') ont animé un atelier en deuxième journée de [Sud Web 2014](http://sudweb.fr/2014/ 'Sud Web 2014') sur l'enseignement de l'intégration Web dont Rémi a déjà fait [un résumé sur son blog](http://www.hteumeuleu.fr/comment-enseigner-integration-web/ '"Comment enseigner l’intégration web ?" ", HTeuMeuLeu'). J'ai moi aussi été interpellé par la question, ayant déjà enseigné le développement Front-End auprès de jeunes adultes comme de professionnels en formation continue.

<!-- more -->

Les pièges à éviter, selon moi :

- Pas la peine d'enseigner le développement Front-End comme on le pratique professionnellement aujourd'hui. Les étudiants le pratiqueront plus tard, dans un autre contexte et avec un jeu de contraintes qui aura sûrement changé. Si vous êtes intégrateur (ce qui n'est pas mon cas), cela veut simplement dire que vos préoccupations du moment ne sont pas les centres autour desquels doivent tourner vos cours. Très facile à dire, très difficile à faire. De mon côté, je préfère me concentrer sur les valeurs fondamentales du Web et appuyer chaque brique de nouveau savoir soit par ces valeurs, soit par une explication économique (pour expliquer les préfixes navigateurs, par exemple). C'est pourquoi je commence systématiquement mes cours par une introduction rapide (et souvent drôle, ça s'y prête plutôt bien) à l'histoire du Web, depuis sa création jusqu'à la lutte des navigateurs et des standards d'aujourd'hui.
- Les MOOC comme [OpenClassRooms](http://openclassrooms.com/ 'OpenClassRooms, le meilleur MOOC pour les métiers du numérique et bien plus') sont formidables, mais ils ne fonctionnent pas sur les mêmes enjeux qu'une formation en salle. Ils peuvent être suivis indépendamment d'autres élèves, sans contrainte de rythme ; sont souvent destinés à des gens déjà passionnés et ne se préoccupent pas du niveau. Un cours en salle se heurte à un public de motivations différentes, de niveau variable, n'ayant pas une perméabilité homogène au savoir et régi par des phénomènes de groupe (adhésion, alliance, défiance, opposition). Rien à voir.
- De nombreux enseignants ne supportent pas de mettre des étudiants en échec ou plus généralement, de s'opposer à eux. Pourtant, [Daniel Kahneman](http://www.ted.com/talks/daniel_kahneman_the_riddle_of_experience_vs_memory '"The riddle of experience vs. memory" ", Daniel Kahneman ", TED') l'explique très bien : notre perception d'une expérience après qu'elle a eu lieu est très différente de notre ressenti instantané. En d'autres termes : un élève en situation d'échec peut vous détester à un instant T, mais surmonter ses difficultés et apprécier l'ensemble d'un enseignement _a posteriori_. D'ailleurs, si vous pensez à vos enseignements les plus marquants : étiez-vous toujours en phase avec vos professeurs ? Ceci étant dit, l'enseignement par l'échec seul n'est pas nécessairement un bon angle d'attaque : pour apprécier l'échec, encore faut-il connaitre l'objectif raté, sinon l'analyse de l'échec ne ramènera que du ressentiment. Il est donc nécessaire d'alterner phases d'explications et phases d'applications, fussent-elles difficiles pour les étudiants.

Mais revenons-en au développement Front-End. Depuis des années, les formations se suivent et se ressemblent en proposant d'utiliser un quelconque éditeur de texte pour écrire des pages Web. C'est plutôt une bonne chose mais il faudrait intégrer rapidement des périmètres et des outils car le développement Front-End d'aujourd'hui et de demain se compartimente de plus en plus (compétences générales, spécialisations dans des domaines spécifiques comme Canvas, WebGL, l'accessibilité, la sémantique…) et s'outille également (plugins pour éditeurs de texte, IDEs, gestion des dépendances et automatisation, tests multi-navigateurs/solution mail…).

Mais j'ai quand même l'impression qu'entre l'éditeur de texte "de base" et les outils complexe de Production, il y a un chaînon pédagogique manquant, une espèce d'environnement de développement coloré mais limité qui permettrait, en jonction des modules chargés, de servir un objectif pédagogique. S'il existait, cet outil devrait être :

- Simple : cet outil serait léger et délibérément très simple au niveau de l'UX pour laisser le plus de place possible au code, et n'hésiterait pas à utiliser de la couleur pour faciliter la compréhension de l'imbrication (naturelle pour nous autres, moins pour les plus jeunes) ;
- Fait pour enseigner : cet outil devrait être délibérément développé avec en tête l'objectif pédagogique. L'utiliser pour produire serait probablement une erreur, voire impossible ;
- Interactif : non seulement cet outil permettrait la création de contenus Front-End, mais il serait en parallèle à même de donner des informations qualitatives et des conseils d'implémentation ("Attention : ce sélecteur est probablement trop long. Regardez bien la structure du document pour trouver un sélecteur plus efficace."). Un peu à l'image des notes de [WebPageTest ](http://www.webpagetest.org 'WebPageTest.org')ou des Best Practices de [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/ 'PageSpeed Insights'), mais en plus simple ;
- Portable : tous les enseignants ayant eu une classe à l'équipement hétérogène vous le diront : unifiez au maximum pour éviter les élèves qui ont toujours "le comportement différent" du reste de la classe ;
- Innovant : si je pense qu'il manque un outil, c'est qu'à mon sens aucun des IDE ou des librairies CSS existantes n'offrent les fonctionnalités voulues.

Plus concrètement, je verrais bien quelque chose qui se lancerait de manière similaire sur tous les OS et qui afficherait un éditeur Web offline qui pourrait ressembler à [Mozilla Thimble](https://thimble.webmaker.org/ 'Mozilla Thimble') (je ne sais pas s'il est utilisable _offline_ ou dépendant d'un back-end, mais si [ungit ](https://github.com/FredrikNoren/ungit 'Ungit sur GitHub.com')peut offrir une UI pour Git avec une simple dépendance à node, alors un IDE Web devrait pouvoir le faire aussi).

Cet éditeur serait complété d'un framework HTML/CSS/JS et d'un ensemble de templates HTML et de Web Components dédiés à la pédagogie. Une brique serait par exemple dédiée à l'apprentissage des formulaires, de leur intégration à leur contrôle en JS. Une autre à l'utilisation des grilles typographiques ; une autre à l'importance de la sémantique, avec possibilité depuis l'éditeur pédagogique de lancer un scrapper qui présenterait le "sens" qu'il aurait compris de la page ; une autre à la performance Web, avec un test rapide des bonnes pratiques (rien d'exhaustif, encore une fois : enseigner et pratiquer sont deux choses vraiment différentes)… vous avez compris l'idée.

On pourrait ensuite introduire ces briques dans le cadre d'exemple concrets de plus en plus complexes à la fois en terme de techniques pures, d'environnement (au début, on travaillerait pour la cible locale, puis à terme pour différentes cibles avec de plus en plus de contraintes) et d'UX (permettant d'introduire les problématiques de positionnement et d'innovation typographique).

Je vais me rapprocher de WebMaker.org. Quand je vois [ce genre de chose](https://webmaker.org/make-your-own 'Teaching Templates ", WebMaker.org'), j'ai vraiment l'impression qu'il y a des trucs à creuser de ce côté-là…

Ci-dessous mon petit croquis pendant l'atelier SudWeb :

<blockquote class="twitter-tweet" lang="fr"><p lang="fr" dir="ltr">Enseigner l&#39;intégration ? <a href="https://twitter.com/hashtag/SudWeb?src=hash">#SudWeb</a> <a href="http://t.co/yhe6nAMxRN">pic.twitter.com/yhe6nAMxRN</a></p>&mdash; Boris (@borisschapira) <a href="https://twitter.com/borisschapira/status/467696288885379072">17 Mai 2014</a></blockquote>
