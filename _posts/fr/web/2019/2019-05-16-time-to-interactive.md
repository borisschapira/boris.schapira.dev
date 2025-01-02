---
title: 'Mesurer l’interactivité avec le TTI'
subtitle: 'Time To (consistently) Interactive'
canonical: 'https://blog.dareboost.com/fr/2019/05/mesurer-interactivite-time-to-interactive/'
canonical_title: 'le blog de Dareboost'
canonical_dismissed: true
description: >-
    Depuis quelques années, Google met en avant un indicateur ambigu : le Time To Interactive (TTI). De quoi s’agit-il ? C’est ce que nous allons définir, avant d’expliquer comment et quand l’utiliser (ou non).


cloudinary_logo: dareboost-logo
thumbnail_background: /assets/images/2019-05-16/carnival.jpg
tags:
    - 'Performance Web'
    - JavaScript
slug: mesurer-interactivite-time-to-interactive
translations:
    en: measuring-interactivity-time-to-interactive
---

L’objectif de la mesure de la Performance Web est de déterminer le moment à partir duquel une personne visitant la page peut accomplir son objectif efficacement. Cela implique qu’elle puisse consulter le contenu qu’elle cherchait et qu’elle soit en mesure d’interagir avec la page de manière satisfaisante. Certains indicateurs mesurent les étapes du rendu par le navigateur, d’autre la progression de ce rendu par le biais de vidéos. Mais quand il s’agit de mesurer efficacement l’interactivité, le mystère reste entier.

Depuis quelques années maintenant, Google met en avant un indicateur ambigu : le Time To Interactive. De quoi s’agit-il ? C’est ce que nous allons définir, avant d’expliquer comment et quand l’utiliser (ou non).

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

{% capture img_alt %} Photo d'un manège qui tourne. Le mouvement de rotation créé un effet de flou : il est impossible de déterminer avec certitude la vitesse du manège. {% endcapture %} {% capture img_caption %} Mesurer l’interactivité, c’est comme monter sur un manège en marche. Quand peut-on considérer que le manège a suffisamment ralenti pour qu’on puisse monter dessus. Il n’y a pas de réponse précise. {% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-05-16/carnival.jpg"
alt=img_alt
caption=img_caption
%}

## Synthèse

La mesure de l’interactivité est un [véritable défi](#pourquoi) pour les experts de la Performance Web. Les éditeurs de solutions de monitoring synthétique, en particulier, rencontrent des difficultés puisque leurs solutions ne reposent pas sur des interactions d’utilisateurs.

Le Time To Interactive de Google est un indicateur sophistiqué, construit pour déterminer les conditions idéales d’interaction en surveillant à la fois l’activité du fil d’exécution principal de JavaScript et l’activité réseau. Il permet de déterminer avec efficacité [un moment à partir duquel on peut être sûr·e qu’une interaction pourra avoir lieu de manière fluide](#comment-utiliser-le-tti).

Néanmoins, le Time To Interactive est un indicateur dont la construction est compliquée à comprendre et à exploiter, et [qui ne mesure pas ce que la plupart des gens pensent qu’il mesure](#malentendus) : le moment à partir duquel une page devient interactive.

La seule manière de capturer des actions utilisateurs est d’en disposer, donc d’utiliser du Real User Monitoring (RUM). Mais même là, [il n’existe pas un unique KPI](#alternatives) qui décrit simplement la relation entre le comportement des utilisateurs et l’interactivité de la page dans le temps.

---

## <span id="pourquoi">En quête d’un nouvel indicateur</span>

### Qu’essayons-nous de mesurer ?

Accéder à une page web est une expérience que le monde de la performance web décrit généralement comme étant composée de 4 "moments" :

1.  L’utilisateur a la confirmation que le chargement a commencé.
2.  L’utilisateur dispose de suffisamment d’informations pour penser qu’il peut interagir avec la page.
3.  L’utilisateur peut interagir avec la page (ce moment particulier étant dépendant du type d’interaction effectuée).
4.  L’interaction de l’utilisateur avec la page est sans effort et intuitive, sans délai et sans agitation.

Plusieurs signaux peuvent indiquer à l’utilisateur que le chargement a commencé : la mise-à-jour du titre et de l’URL, une éventuelle animation de l’onglet ou du favicon, l’apparition des premiers pixels non blancs, puis du reste de la page…

Pour estimer la perception visuelle des visiteurs, on peut utiliser le [Speed Index](https://blog.dareboost.com/fr/2018/02/speed-index-performance-web/) et le <a href="https://www.w3.org/TR/paint-timing/#first-contentful-paint" hreflang="en">First Contentful Paint</a>, deux indicateurs qui aident à comprendre la manière dont un utilisateur perçoit le chargement de la page. Comme leurs modes de calcul sont liés à la manière dont les éléments sont affichés, leurs limitations peuvent être identifiées en un clin d’œil par un être humain.

En revanche, lorsqu’il s’agit de mesurer l’interactivité – les points 3 et 4 – ça devient plus difficile. Nous ne savons pas vraiment comment la mesurer. La seule chose que nous savons bien faire est de recueillir des informations qui nous permettent de déduire ces moments particuliers.

Par exemple, Akamai cherche depuis des années de nouvelles manières de mesurer l’activité des utilisateurs. Ils s’appuient sur la bibliothèque Boomerang, créée par Philip Tellis [qui est venu à We Love Speed 2018](https://www.welovespeed.com/2018/programme/#ux-and-performance-metrics-that-matters) pour présenter de nouvelles mesures d’UX. Ces nouveaux indicateurs permettent de mesurer la réactivité des pages : clics "de rage", clics manqués, clics morts et secouage du curseur. En analysant la distribution de ces données qui expriment toutes la frustration de l’utilisateur, nous pouvons approximativement déduire le moment où l’utilisateur s’attend à ce que la page, ou un composant particulier, soit interactive.

{% capture img_alt %} Clics de rage en fonction de la Première Interaction et du Visuellement Complet : il y a une corrélation linéaire nette ; la pente varie entre 1.2 and 1.5. {% endcapture %} {% capture img_caption %} Il y a une corrélation linéaire évidente entre les clics "de rage" et les clics situés 1,2 à 1,5 fois après le Visually Ready (le moment où l’utilisateur perçoit que la page est prête pour une interaction – <a href="https://akamai.github.io/boomerang/BOOMR.plugins.Continuity.html#toc10__anchor" hreflang="en">voir la définition complète sur la documentation Boomerang</a>).{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-05-16/rage.png"
alt=img_alt
caption=img_caption
%}

Ce type de corrélation nécessite de grandes quantités de données collectées auprès d’utilisateurs réels, soit par le biais de bibliothèques JavaScript comme Boomerang, soit via du RUM intégré au navigateur comme le Chrome UX Report. Ces données ne peuvent être collectées que sur des environnements de Production accueillant un grand nombre de visites.

Tester des optimisations dans un environnement de ce type est risqué. Sans tests préalables, le déploiement en Production peut entraîner des régressions et/ ou des ralentissements, et nuire à votre entreprise. De plus, vous devrez attendre d’avoir recueilli un volume de données suffisamment important avant de pouvoir déduire quoi que ce soit. Et même là, il sera difficile d’évaluer ce jeu de données, car les données RUM ne sont pas si faciles à analyser.

Les solutions de surveillance synthétique, elles, peuvent effectuer des mesures de performance précises sur tous les environnements, tout en contrôlant les contextes de test. Et elles seraient encore plus utiles si elles pouvaient fournir une mesure de l’interactivité.

Mais comme elles n’impliquent pas de vrais utilisateurs, les solutions de mesure synthétique sont obligées de ruser…

### Arrive le Time To (Consistently) Interactive

{% capture note %} **NOTE**  
Bien qu’il en existe plusieurs définitions, nous nous concentrerons sur la définition proposée par Google par le biais de ses outils et sites Web.{% endcapture note %} {% include note.html.liquid content=note %}

L’interactivité peut être envisagée de deux manières : soit comme un passage entre deux états (non interactif et interactif), soit comme un continuum. Savoir quand une page devient interactive pour la première fois est intéressant mais si l’interface ne répond pas rapidement, l’UX ne sera pas très qualitative. Quand nous parlons "d’interactivité", nous considérons donc à la fois le fait que la page est interactive et le fait que les interactions aient eu lieu de manière satisfaisante.

Le **Time To Interactive**, anciennement connu sous le nom de "Time To Consistently Interactive", est un indicateur synthétique expérimental qui tente de mesurer quand votre application web est à la fois rendue visuellement et interactive.

{% capture img_alt %} Superposition de plusieurs photos d'un danseur en mouvement. Chaque mouvement est capturé et pourtant il est impossible de saisir le continuum sur une image statique. {% endcapture %} {% capture img_caption %} Comme les choses en mouvement sont difficiles à appréhender, nous nous appuyons souvent sur des approximations et des modèles. {% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-05-16/danse.jpg"
alt=img_alt
caption=img_caption
%}

Le TTI est une mesure de l’interactivité qui ne repose pas sur les interactions réelles des utilisateurs. L’algorithme fait plutôt une approximation en considérant qu’une interaction satisfaisante ne peut se produire que dans des conditions spécifiques et s’intéresse à déterminer la survenue de ces conditions.

Pour déterminer le TTI, l’algorithme avance le long de la ligne de temps, effectue des vérifications et redéfinit son estimation du TTI jusqu’à ce qu’il trouve un moment où toutes les conditions sont remplies. Il choisit d’abord, comme limite inférieure, le moment où l’utilisateur estime que le contenu primaire de la page est visible. Plusieurs indicateurs sont disponibles pour cela : le "[Time To Interactive Explainer](https://github.com/WICG/time-to-interactive#definition)" parle du First Meaningful Paint, mais on peut également utiliser le First Contentful Paint, [comme le fait WebPageTest](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/TimeToInteractive.md).

Ensuite, l’algorithme du TTI vérifie que le navigateur est disponible, en mesure de prendre en compte l’interaction. La plupart des actions sont gérées côté client par du code JavaScript tournant dans un unique fil d’exécution, donc l’algorithme doit ensuite s’assurer qu’aucune tâche JavaScript de longue durée n’occupe actuellement ce fil (thread, en anglais), ce qui empêcherait le JS de gérer les entrées utilisateur immédiatement. Pour le W3C, une tâche est "longue" ([Long Task](https://github.com/w3c/longtasks)) si elle dure plus de 50 ms. Par la suite, l’algorithme cherchera une fenêtre de 5 secondes sans Long Tasks.

Si le code JS nécessaire pour gérer l’interaction n’est pas encore téléchargé, tout ceci est inutile. Plutôt que d’observer finement chaque réponse HTTP pour savoir si les ressources JavaScript sont téléchargées, l’algorithme du Time To Interactive va se servir d’un signal : il va attendre une période d’au moins 5 secondes pendant laquelle il n’observe pas plus de 2 ressources (tous types confondus) chargées en parallèle.

Si l’une des conditions (Long Task et Réseau) n’est pas remplie, l’algorithme fait avancer son estimation du TTI et reprend l’observation pour trouver une autre Long Task et une autre fenêtre de faible activité réseau de 5 secondes après la dernière Long Task observée. À ce stade, l’estimation du TTI correspond à la fin de la dernière Longue Tâche observée.

Mais nous n’avons pas fini ! L’algorithme ne considère pas qu’une page est interactive avant que le navigateur n’ait fini d’analyser le document donc si l’événement DOMContentLoadedEnd se produit après cette estimation, ce moment est choisi comme valeur définitive du Time To Interactive.

{% capture img_alt %} A graph summarizing the above explanations. {% endcapture %} {% capture img_caption %} Schéma de principe de la définition, dans le "Time To Interactive Explainer". {% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-05-16/tti_w.png"
alt=img_alt
caption=img_caption
%}

### <span id="comment-utiliser-le-tti">Comment utiliser le TTI ?</span>

Un des premiers indicateurs que l’on découvre quand on s’intéresse aux performances d’affichage est le Visuellement Complet, c’est-à-dire le moment où le rendu de la zone visible de la page est terminé.

Le Time To Interactive est comme le Visuellement Complet : un marqueur de la fin de quelque chose. Mais la question est "de quoi ?". Tim Dresser a probablement trouvé la meilleure manière de l’exprimer "a ‘no jank past this point’ metric". Cela signifie que le Time To Interactive détermine un moment à partir duquel nous avons la certitude que les interactions seront fluides. C’est évidemment quelque chose qu’il est important de surveiller et d’optimiser ou, du moins, ne pas détériorer sans avoir de bonnes raisons.

En effet, le TTI est calculé à partir de l’observation indirecte du CPU – par le biais des Long Tasks JS – et de l’activité réseau. Si le TTI augmente, cela implique qu’une Long Task JS s’est produite plus tardivement qu’avant, pendant le chargement de la page, et qu’il est important de savoir pourquoi. Une nouvelle Long Task a-t-elle été introduite ? S’agit-il d’une tâche déjà connue, repoussée par une modification apportée au code ? Est-ce une conséquence d’une dépendance tierce récemment implémentée ?

Comme nous le démontrerons plus loin dans l’article, cette Long Task n’est pas nécessairement nuisible à votre UX (par exemple, si vous différez vos scripts, alors les Long Task qu’ils ont produites se produiront plus tard) mais vous pouvez certainement optimiser pour vous assurer qu’elle ne se produise pas (par exemple, vous pouvez déléguer des algorithmes JavaScript complexes aux Web Workers, les faisant exécuter en tâche de fond sans occuper le thread principal JavaScript).

## <span id="malentendus">Quelques malentendus fréquents concernant le Time To Interactive</span>

### Le Time To Interactive n’est pas le temps qui s’écoule avant qu’une page soit interactive.

"Time To Interactive" est un nom vraiment ambigu.

Même dans la <a href="https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive" hreflang="en">documentation de Lighthouse</a>, vous pouvez lire de courtes définitions trompeuses comme :

> Le paramètre Time to Interactive (TTI) mesure le temps qu’il faut à une page pour devenir interactive.

Heureusement, la phrase est suivie d’une définition de ce qu’on entend ici par "interactif", mais pour quelqu’un qui ne lirait pas davantage, le mal est fait.

Parce qu’en réalité, le Time To Interactive ne mesure pas le temps qu’il faut pour qu’une page devienne interactive, il mesure le temps qu’il faut pour s’assurer que toutes les conditions soient réunies, pendant au moins 5 secondes, pour qu’une interaction puisse se produire de manière satisfaisante. C’est pourquoi la mesure était auparavant connue sous le nom de Time To **Consistently** Interactive.

Il est totalement possible d’avoir une page très rapide et utilisable qui, malgré cela, a un TTI important. Il suffit que la page exécute des Long Tasks de courtes durées (la plus courte possible), à un rythme suffisant pour interrompre la fenêtre d’observation du TTI. [Cette page](https://tests.boris.schapira.dev/longtask/), par exemple, exécute une tâche de 51 ms toutes les 2 secondes, pendant un total de 20 secondes et son TTI est supérieur à 19 secondes.

Néanmoins, la page est parfaitement interactive bien avant que le TTI ne le suggère.

### Dans l’algorithme du TTI, la sous-fenêtre de "silence réseau" n’est qu’un signal

Le Time To Interactive est toujours lié à la dernière Long Task JS. L’heuristique "activité réseau réduite" n’est qu’un signal. J’ai vu des gens demander s’ils avaient besoin d’améliorer leur Waterfall pour qu’elle contienne moins de deux requêtes simultanées à chaque instant. Si aucune de ces requêtes n’engendre une Long Task, pas d’inquiétude, votre TTI ne souffrira pas.

Cependant, comme il ne s’agit que d’un signal, cet algorithme ne garantit pas que le code JS requis pour gérer l’interaction soit vraiment disponible. Vous pouvez avoir un Time To Interactive très correct et pourtant une page qui n’est pas du tout interactive – du moins de la manière dont l’utilisateur s’y attend.

### Le TTI de Google n’est pas le même que celui des autres

Chaque fois que Google introduit un nouveau concept, il y a une forte demande du marché. Mais attention, le Time To Interactive n’est pas un standard !

Akamai Boomerang, l’une des solutions de Real User Monitoring les plus célèbres, a [sa propre définition du Time To Interactive](https://developer.akamai.com/tools/boomerang/docs/BOOMR.plugins.Continuity.html#toc10__anchor), qui diffère fortement de celle de Google. Ils utilisent divers signaux comme le Frame Rate, les Long Tasks, la disponibilité de la page ("Page Busyness", mesuré via des `setInterval`) et les délais mesurés dans les interactions utilisateur. Même s’ils conservent la définition à 50 ms d’une Long Task (comme le W3C), leur fenêtre d’observation n’est que de 500 ms (au lieu de 5 secondes), ce qui empêche les valeurs de Time To Interactive de se disperser en raison de tâches isolées.

Des solutions de Monitoring Synthétique prétendent supporter l’indicateur de Time To Interactive mais, comme pour [le temps de chargement](https://blog.dareboost.com/fr/2017/11/le-temps-de-chargement-est-mort/), il faut toujours vérifier leur définition. Au cours de mes recherches, j’ai constaté que certaines d’entre elles n’hésitent pas à apposer une étiquette "TTI" sur d’autres indicateurs (comme <a href="https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domInteractive" hreflang="en">l’événement domInteractive</a>), qui n’ont rien à voir.

### Le Time to Interactive manque de stabilité

Un indicateur qui n’est pas prévisible est difficile à comprendre. En faisant des recherches pour cet article, nous avons rassemblé ces éléments qui suggèrent que le TTI est l’une de ces mesures dont la nature complexe le rend difficile à stabiliser.

> Je l’ai essayé et c’était un indicateur trop instable pour mesurer Wikipedia. En voici un exemple : [https://phabricator.wikimedia.org/T176369](https://phabricator.wikimedia.org/T176369)
>
> <cite>Peter Hedenskog, ingénieur logiciel pour la Fondation Wikimedia</cite>

### Nous avons peu de retours d’expérience sur le TTI

Il y a peu de données concernant sur la corrélation des mesures du TTI et ce qui est observé chez les utilisateurs, en tout cas aucune qui n’indique que l’indicateur soit plus intéressant que les existants.

Basé sur une première étude de Deepanjan Roy ([une scoresheet concernant 28 sites Web](https://docs.google.com/spreadsheets/d/14xVEkk0yUV9kCaPERLzUpB057hjdV66KP24AyExayh0/edit#gid=0)), le Time To Interactive a par la suite été [qualifié par Tim Dresser](https://docs.google.com/document/d/1g0J5JIcICFyXYM6ifBF6vNd_qUPIfpf6YAfFHE1TYRE/edit#heading=h.g1vxo77py7yu), sans grand succès. Pour être honnête, ces corrélations sont très difficiles à obtenir : comme nous pouvons le voir dans l’analyse de Tim, même sur des indicateurs plus stables comme le FCP, la corrélation entre les données de terrain et de tests n’est pas bonne.

J’ai trouvé <a href="https://www.slideshare.net/nicjansma/reliably-measuring-responsiveness" hreflang="en">une étude de 2017, de Nic Jansma</a>, <a href="https://addyosmani.com/blog/usability/" hreflang="en">citée récemment par Addy Osmani</a>, où il explique que l’amélioration du TTI a un impact réel sur le taux de conversion dans un cas d’utilisation réel. Malheureusement, les diapositives ne donnent pas accès aux données ni aux conditions expérimentales.

D’autres cas d’utilisation, disponibles en ligne, consistent souvent à supprimer tout le JavaScript des Landing Pages. Une modification assez drastique, là où d’autres solutions (comme le téléchargement et le byte-caching du JS dans un Service Worker pour une utilisation future) auraient pu être préférables. Ne vous méprenez pas, je suis toujours partant pour réduire le JavaScript au maximum, mais jamais au détriment du [parcours utilisateur](https://www.dareboost.com/fr/service/monitoring-parcours-utilisateur).

Le Time To Interactive intervient dans un paysage de la Performance Web qui offre déjà de multiples indicateurs, dont certaines sont plus faciles à comprendre et à commenter. La plupart des cas d’utilisation que j’ai lus sur le Time To Interactive ne précisent pas si les indicateurs existants étaient suffisants pour qualifier la situation. Or la plupart des propriétaires de sites ne veillent que sur 3 ou 4 indicateurs de performance Web. Avant de leur demander de laisser tomber l’un d’entre eux pour celui-ci, je pense qu’il est important qu’ils puissent se faire une idée détaillée de leur pertinence respective.

### La définition d’une Long Task à 50ms crée un effet de seuil

Les seuils du Time To Interactive ont le mérite de sensibiliser à l’importance des [budgets de performance](https://blog.dareboost.com/fr/2014/12/definir-un-budget-de-performance-web/). En effet, le TTI est un budget de performance en lui-même : "L’indisponibilité du fil d’exécution principal ne doit jamais dépasser 50 ms".

Toutefois, à chaque fois qu’on définit un seuil, cela a un impact.

{% capture img_alt %} Capture de WebPageTest. L'évaluation du "Page Interactive" est verte très tôt dans la page, mais perturbée par une partie rouge beaucoup plus tard dans le chargement. {% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-05-16/wpt.png"
alt=img_alt
%}

Prenons une page de blog très simple, et testons-la sur avec WebPageTest en Desktop. La page est visuellement prête et complètement interactive dès 1,2 secondes. À ce moment et pendant quelques secondes, un visiteur peut lire et faire défiler la page librement. À environ 3,5 secondes, une exécution de script reCaptcha crée une Long Task de 150 ms (en rouge, sur la barre inférieure) qui décale le Time To Interactive. Cette exécution serait-t-elle perçue par un visiteur qui interagirait avec la page à ce moment précis ? D’ailleurs, combien de temps faudrait-il pour qu’un visiteur ressente un délai ?

According to [the RAIL performance model](https://developers.google.com/web/fundamentals/performance/rail) (Response, Animation, Idle, Load), the user perception of performance delays depends on the nature of the delay. Interaction delays are perceived after ~100ms. A value consistent with [Nielsen’s 1993 post, based on Miller & Card et al. studies](https://www.nngroup.com/articles/response-times-3-important-limits/).

Mais si un délai n’est remarqué quà partir de 100 ms, pourquoi considérer une tâche JS longue à partir de 50 ms ? L’explication se trouve dans la spécification Long Task API :

> Le modèle de performance RAIL suggère que les applications doivent répondre en moins de 100 ms à une sollicitation utilisateur (pour le touch tactile et le défilement, en moins de 16 ms). Notre but avec cette API est de faire apparaître des notifications sur les tâches qui peuvent empêcher l’application d’atteindre ces objectifs. Nous mettons en valeur les tâches qui prennent 50 ms ou plus. Un site Web qui n’a pas de tâches de ce type devrait répondre aux sollicitations des utilisateurs en moins de 100 ms : il faudra moins de 50 ms pour terminer la tâche en cours d’exécution lorsque l’action utilisateur sera reçue et moins de 50 ms pour exécuter la tâche qui réagit à cette sollicitation.
>
> <cite><a href="https://w3c.github.io/longtasks/#intro" hreflang="en" lang="en">Long Task API 1</a>, traduction</cite>

En d’autres termes : la gestion d’une interaction nécessite à la fois que le navigateur soit capable de gérer l’entrée utilisateur en n’étant pas déjà occupé (interactivité) et qu’il puisse traiter l’exécution potentielle du code JS déclenché par cette action de manière rapide (réactivité). Comme nous ne connaissons pas le temps de réponse réel du navigateur pour exécuter le traitement déclenché, nous considérons que ce temps devrait être inférieur à 50 ms. Cela laisse 50 ms pour que le navigateur ait le temps de réagir.

En réalité, tous les navigateurs et les contextes de navigation sont différents et de nombreux facteurs peuvent influer sur le temps pris par le navigateur pour traiter une tâche.

## <span id="alternatives">Mesure de l’interactivité : le TTI suffit-il</span> ?

### Le TTI comme nouvel indicateur de référence ?

Créer et promouvoir un indicateur est un acte performatif, surtout lorsque cet indicateur est défini comme LA référence pour l’interactivité : mis en avant par Google, il ne se contente pas d’évaluer le Web, il le modèle. Les experts SEO/SEM s’empressent de le recommander à leurs clients, des entreprises l’utilisent dans des classements. Rapidement, tout le monde considère l’indicateur comme une référence, sans remettre en cause sa logique interne.

Cependant, ses nombreuses limitations, toutes cohérentes avec sa définition basée sur de nombreuses approximations, font du TTI un indicateur plutôt binaire. Soit votre TTI est très bas et vous pouvez être heureux·se parce que vous êtes absolument certain·e que la page web offre les meilleures conditions pour des interactions de qualité ; soit ce n’est pas le cas, et vous devez enquêter en profondeur pour savoir ce qui se passe car il est possible que certaines Long Task retardent le TTI sans déranger les utilisateurs mais la page peut tout aussi bien être inutilisable. Le TTI ne vous donne pas les outils pour distinguer ces deux possibilités sans faire de recherches approfondies.

{% capture img_alt %} Un microscropt zoomant sur un échantillon. {% endcapture %} {% capture img_caption %} Un mauvais TTI est un signe que toutes les conditions ne sont pas parfaites pour l’interactivité. Cela ne signifie pas que les interactions seront forcément dégradées. Une analyse approfondie est toujours nécessaire. {% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-05-16/observe.jpg"
alt=img_alt
caption=img_caption
%}

### Un jalon plus qu’une évaluation d’un continuum

Le Time To Interactive est à l’interactivité ce que le Visuellement Complet est à l’affichage : un jalon final. Ce qui nous manque, c’est "Speed Index des interactions" où, pour déduire la frustration de l’utilisateur, chaque Long Task serait pondérée par sa durée et le moment où elle se produit, en relation avec d’autres indicateurs (par exemple, les indicateurs de rendu).

Nic Jansma, dans l’étude mentionnée précédemment, a observé la distribution des durées des Long Tasks et a trouvé une corrélation avec la conversion. J’espère que nous progresserons sur ce point dans les années à venir.

{% capture img_alt %} Temps de la première LongTask vs. Taux de conversion (gauche) ; Temps de la première LongTask vs. Durée de session (droite) {% endcapture %} {% capture img_caption %} L’étude de Nic n’a pas observé de diminution de la conversion tant que les Long Task de la première page étaient plus courtes que… 100 ms (et pas 50 ms). Intéressant, non ? {% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-05-16/nic.png"
alt=img_alt
caption=img_caption
%}

En attendant, il existe beaucoup d’autres mesures concernant l’interactivité, principalement en RUM où l’activité réelle des utilisateurs peut être observée. Par exemple, je pense que la distribution des <a href="https://developers.google.com/web/updates/2018/05/first-input-delay" hreflang="en" lang="en">First Input Delay</a> est une information extrêmement pertinente, facile à comprendre, mais ce serait un vaste sujet, digne d’un autre article de blog.

N’oubliez pas : si vous avez besoin de comprendre ce qui se passe avec JavaScript dans du Monitoring Synthétique, vous pouvez toujours [utiliser les Custom Timings](https://blog.dareboost.com/fr/2018/05/dareboost-custom-timings/) pour instrumenter votre code. C’est la meilleure façon de comprendre ce qui compte vraiment pour votre entreprise.

---

## En savoir plus sur l’interactivité et le Time To Interactive :

### Une touche d’archéologie

- \[1993\] "[Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/)", Jakob Nielsen
- \[2015\] "[Measure Performance with the RAIL model](https://developers.google.com/web/fundamentals/performance/rail)", Meggin Kearney, Addy Osmani, Kayce Basques, Jason Miller
- \[Juillet 2016\] "[Time To Interactive](https://docs.google.com/document/d/11sWqwdfd3u1TwyZhsc-fB2NcqMZ_59Kz4XKiivp1cIg/edit#heading=h.f294oh9v0jlx)", Tim Dresser, Paul Irish, Brendan Kenny
- \[Décembre 2016\] "[Update on defining firstInteractive](https://docs.google.com/document/d/1jbvwxj_GJtiTTqFM8dsVzCIy5XeKL5qtIAvuimcXb1o/edit)", Deepanjan Roy
- \[Janvier 2017\] "[Evaluating definitions of firstInteractive](https://docs.google.com/document/d/1pZsTKqcBUb1pc49J89QbZDisCmHLpMyUqElOwYqTpSI/edit)", Deepanjan Roy
- \[Août 2017\] "[First Interactive and Consistently Interactive](https://docs.google.com/document/d/1GGiI9-7KeY3TPqS3YT271upUVimo-XiL5mwWorDUD4c/edit#heading=h.k1h25blerz3i)", Deepanjan Roy (anchor to the [definition of the TTI](https://docs.google.com/document/d/1GGiI9-7KeY3TPqS3YT271upUVimo-XiL5mwWorDUD4c/edit#bookmark=id.1d8nplewhcab))
- \[Février 2018\] "[Time To Interactive Explainer](https://github.com/WICG/time-to-interactive#definition)", Tim Dresser, Deepanjan Roy
- \[Mai 2018\] "[First Input Delay: Correlation with TTI](https://docs.google.com/document/d/1g0J5JIcICFyXYM6ifBF6vNd_qUPIfpf6YAfFHE1TYRE/edit#heading=h.g1vxo77py7yu)", Tim Dresser
- \[Janvier 2019\] "[Web Page Usability Matters](https://addyosmani.com/blog/usability/)", Addy Osmani
- \[Février 2019\] "[User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics)", Philip Walton

---

Merci à [Henri](https://twitter.com/henrihelvetica), [Phillip](https://twitter.com/bluesmoon), [Peter](https://twitter.com/soulislove) et [Tim](https://twitter.com/tkadlec) qui m'ont aidé à organiser mes idées, et [Damien](https://twitter.com/DamienJubeau) pour ses conseils et multiples relectures.
