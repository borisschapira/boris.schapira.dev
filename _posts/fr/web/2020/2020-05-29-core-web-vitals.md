---
title: 'Que penser des Core Web Vitals ?'
description: >-
    Au travers des Core Web Vitals, Google explicite, pour la première fois, les indicateurs qui lui serviront à évaluer Performance Web et Expérience Utilisateur. Cela change-t-il le paysage de la Performance Web ?


tags:
    - 'Performance Web'
    - Google
slug: core-web-vitals-qu-en-penser
last_modified_at: 2020-11-10 12:48:00 +0000
---

Il y a quelques semaines, Google a créé une nouvelle appellation pour un jeu d'indicateurs de mesure de l'expérience utilisateur : les [<em lang="en">Core Web Vitals</em>](https://web.dev/vitals/), ou **Signaux Web Essentiels**. La nouvelle fait grand bruit dans le monde du <abbr title="Search Engine Optimization" lang="en">SEO</abbr>, car Google souhaite [faire de ces indicateurs des critères de <em lang="en">ranking</em>](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html) l'année prochaine.

Le déploiement est prévu <a href="https://webmasters.googleblog.com/2020/11/timing-for-page-experience.html" lang="en" title="Timing for bringing page experience to Google Search">en mai 2021</a>.

Prenons un peu de recul.

<div class="emphasis">
Ceci est un avis personnel sur les Core Web Vitals. Retrouvez un avis complémentaire sur <strong>le blog de Dareboost</strong>&nbsp;: <a href="https://blog.dareboost.com/fr/2020/06/signaux-web-essentiels-core-web-vitals/">Signaux Web essentiels (Core Web Vitals) : un nouveau facteur SEO axé sur la vitesse des pages web</a>.
</div>

**Préambule 1** : qu'est-ce qu'un bon indicateur pour le marché ? À mon sens, c'est un indicateur qui mesure ce qu'il dit mesurer et qui, une fois cette mesure effectuée et les valeurs connues, aide à prendre des décisions pour améliorer l'expérience utilisateur.

---

**Préambule 2** : les <em lang="en">Web Vitals</em> ne sont pas figés. Ce sont juste les indicateurs que Google met _pour l'instant_ en avant dans ses outils de mesure de la performance. Comme ils le disent eux-mêmes :

> […] these signals are not perfect and future improvements or additions should be expected.

Rien ne garantit donc, même si c'est probable, que les indicateurs mis en avant aujourd'hui soient, l'année prochaine, toujours d'actualité. Pour rappel, Google a auparavant fait la promotion d'autres indicateurs, comme le <em lang="en">Time To Interactive</em>, avant d'en revoir l'appréciation à la baisse dans des itérations ultérieures de leurs outils ([à raison](https://boris.schapira.dev/2019/05/mesurer-interactivite-time-to-interactive/)).

De ce que j'ai vu du <a href="/notes/2020-09-cumulative-layout-shift-stabilite-page/">Cumulative Layout Shift</a>, je pense qu'il sera également remplacé à moyen terme par un indicateur de meilleure qualité.

Suite aux critiques des équipes de développement de SPAs, <a href="https://web.dev/better-layout-shift-metric/" hreflang="en">la réflexion semble avoir commencé</a>.

---

**Préambule 3** : bien que la Performance Web soit mise en avant depuis des années par Google comme critère de <em lang="en">ranking</em>, et encore plus [depuis la Speed Update](https://blog.dareboost.com/fr/2018/01/google-speed-update-vitesse-ranking/), très peu de [retours de terrain](https://wpostats.com/) le confirment. Il semblerait que [la Performance Web est plutôt, pour l'instant, un signal faible utilisé éventuellement pour de la pénalisation](https://www.abondance.com/20200505-42675-un-point-sur-la-vitesse-de-chargement-des-pages-et-le-seo-video-seo-abondance-n155.html).

Cela ne veut pas dire que la Performance n'est pas utile : elle bénéficie au <em lang="en">crawl</em> et à l'expérience des personnes qui visitent vos sites, réduisant vos rebonds, améliorant votre conversion… C'est déjà énorme.

En revanche, **c'est la première fois que Google communique explicitement sur des indicateurs utilisés**. C'est très intéressant parce qu'on a vu plusieurs indicateurs être mis en avant au fil des années, notamment le Speed Index, et il a fallu attendre d'avoir un jeu d'indicateurs faciles à collecter pour eux (ne nécessitant pas l'usage d'une vidéo) pour que cette annonce soit faite.

Il y a donc fort à parier que le Speed Index n'a jamais été un indicateur calculé à l'échelle par Google, pour évaluer le <em lang="en">ranking</em>.

---

**Dernier préambule** : je pense que cette nouvelle dénomination de Signaux Essentiels ne va pas constituer une opportunité pour le monde du SEO. Comme le dit Olivier Andrieu :

> L'UX ne sera jamais un critère SEO majeur. <cite>"[Core Web Vitals : l’UX bientôt pris en compte par Google ? Prenons du recul…](https://www.abondance.com/20200529-42880-core-web-vitals-lux-sera-t-il-bientot-pris-en-compte-par-google-prenons-du-recul.html)"</cite>

En revanche, c'est une opportunité intéressante pour les professionnels de l'Expérience Utilisateur, qui pourrait y voir une première phase peu coûteuse d'approche quantitative, préliminaire à une phase d'étude qualitative plus spécifique à l'usage étudié.

Et si c'est une clé pour l'UX, c'est donc aussi une clé pour le SXO (<em lang="en">Search Experience Optimization</em>).

---

Fin de la mise en bouche, parlons des Web Vitals en eux-mêmes !

Le **<em lang="en">First Contentful Paint (FCP)</em>** est facile à collecter (puisque fourni directement par Chrome), son nom correspond à sa définition et celle-ci est simple à comprendre, même si elle présente un petit souci dès qu'on utilise des Web Fonts. [En savoir plus](https://blog.dareboost.com/fr/2019/09/first-contentful-paint-fcp-2/).

Le **<em lang="en">LCP (Largest Contentful Paint)</em>** indique le moment où est rendu le plus grand élément de contenu réellement visible dans le <em lang="en">viewport</em>. C’est un indicateur dont l’objectif est de mesurer ce que ressent l’utilisateur du chargement visuel de la page, à l’instar du [Speed Index](https://blog.dareboost.com/fr/2018/02/speed-index-performance-web/).

Le nom du LCP est explicite, correspond à sa définition et l'indicateur est facile à collecter. Nous allons donc le croiser de plus en plus. Je lui préfère le Speed Index, qui s'intéresse à la progressivité du rendu de l'ensemble de la page mais c'est sans importance : sur la très grande majorité des pages, les deux indicateurs sont très fortement corrélés.

Cela permet néanmoins de savoir que si le Speed Index n'est pas disponible dans l'outil de votre choix, le LCP sera probablement une très bonne alternative pour répondre à la question :

> Quand la personne utilisant le site a-t-elle l'impression que la page est suffisamment chargée pour être utilisée ?

Le **<em lang="en">FID (First Input Delay)</em>** est une mesure réalisée auprès de vrais utilisateurs et utilisatrices (Real User Metric, RUM). Elle correspond au délai d’attente subi lors de la première interaction avec la page, quel qu’en soit le moment.

Le FID est facile à comprendre mais comme toutes les mesures "réelles", il présente l'inconvénient d'être peu utilisable sans l'observer dans sa distribution. Dit autrement : un FID "moyen" ne porte pas d'information en soi. Un point bien abordé [dans cet article](https://blog.dareboost.com/fr/2019/11/search-console-rapport-vitesse/), qui montre deux distributions avec des valeurs agrégées similaires. Pourtant, l'expérience est très différente.

C'est la force **ET** la faiblesse du RUM : être capable de retranscrire la diversité des usages, mais ne pas faciliter la prise de décision et accompagner le suivi. Tout l'inverse de l'analyse Synthétique. RUM et synthétiques sont donc complémentaires. [Gilles vous en dira plus](https://www.youtube.com/watch?v=9PBeqHXk7zw).

En synthétique, trois indicateurs d'interactivit pris ensemble peuvent pallier l'absence du FID : le **<em lang="en">Max Potential FID</em>** (le pire FID possible), et le **<em lang="en">Total Blocking Time (TBT)</em>** (qu'on peut résumer de manière inexacte mais simple comme la somme des temps de frustration potentiels pendant le chargement) et le **<em lang="en">Time to Interactive</em>** (qui est, comme son nom ne l'indique pas du tout, le moment du dernier ralentissement notable durant le chargement).

À défaut d'avoir la répartition du <em lang="en">First Input Delay</em> en synthétique, nous pourrons bientôt disposer de sa valeur potentielle maximale, de l'espérance d'une frustration en divisant le TBT par la durée de la période sur laquelle il est agrégé (entre le <em lang="en">First Contentful Paint</em> et le <em lang="en">Time To Interactive</em>) et du moment après lequel le FID est négligeable à nul (le <em lang="en">Time To Interactive</em>).

Enfin, les <em lang="en">Core Web Vitals</em> intègrent le **<em lang="en">Cumulative Layout Shift (CLS)</em>**. Son algorithme s’intéresse au déplacement des éléments durant le chargement, afin de détecter les modifications visuelles susceptibles de tromper ou frustrer l’utilisateur parce qu'elles déplacent des éléments. Si l’intention derrière le CLS est géniale – et que des propriétés CSS commencent à apparaitre pour limiter ces mouvements ([comme `contain`](https://css-tricks.com/lets-take-a-deep-dive-into-the-css-contain-property/)) – je pense que nous manquons collectivement de recul sur l’algorithme, et donc sur l'indicateur lui-même.

Des choses seraient à creuser sur sa sensibilité à l'orientation, son rapport aux interactions et aux animations. J'ai en tête des exemple de pages très désagréables en termes de déplacement d'éléments, mais qui auraient un bon CLS. Le sujet est très complexe. Je ne suis pas certain que l'algorithme soit suffisament complexe pour être pertinent dans un contexte de <em lang="en">ranking</em>.

Depuis, j'ai pris le temps de décortiquer l'indicateur et son algorithme pour en liver une analyse : "[Cumulative Layout Shift, l’indicateur de stabilité de la mise en page](/notes/2020-09-cumulative-layout-shift-stabilite-page/)".

---

Je ne sais pas ce que l'avenir nous réserve, mais d'autres mesures existent déjà, notamment du côté de la surveillance du curseur des utilisateurs (agitation frustrée, clics frénétiques…). Il y a donc encore un gros potentiel concernant l'expérience utilisateur. [Philip en parle très bien](https://youtu.be/nEHsHioWY1U).

Mais concrètement, **on cherche toujours les mêmes informations depuis des années**. On veut que l'utilisateur ait l'impression que la page :

1. est disponible ;
2. commence à s'afficher rapidement ;
3. affiche vite les informations pertinentes ;
4. est utilisable, correctement, peu de temps après l'affichage du contenu pertinent.

En regardant uniquement le Premier Octet et le <em lang="en">Speed Index</em>, on observe déjà bien les 3 premiers jalons temporels. Si ces métriques sont mauvaises, s'intéresser à l'interactivité est parfois prématuré, notamment en termes de maturité de l'équipe d'optimisation. D'expérience, excessivement peu de sites parviennent à déjà contrôler les trois premiers points…

Mais alors pourquoi inventer de nouveaux indicateurs alors qu'on pourrait continuer avec des indicateurs existants et des [indicateurs personnalisés](https://boris.schapira.dev/2019/09/custom-timing-prochaine-frame/) ?

Tout simplement, pour rendre le domaine de la Performance Web plus vivant, pour l'intégrer toujours davantage dans l'Expérience Utilisateur et créer de nouvelles dynamiques. Concrètement, **les équipes chargées d'optimiser la Performance Web vont pouvoir négocier de nouveaux budgets**.

Si ce n'est pas votre cas, pas de panique. Les fondamentaux de la Performance Web sont solides, et n'ont pas changé avec ces nouveaux signaux. Ce n'est pas parce que vous voyez des publications sur [la corrélation entre de bons <em lang="en">Core Web Vitals</em> et des taux d'abandons réduits](https://blog.chromium.org/2020/05/the-science-behind-web-vitals.html) que [cette corrélation n'existait pas déjà avant](https://webmasters.googleblog.com/2019/04/user-experience-improvements-with-page.html), avec les outils et indicateurs que vous utilisez peut-être déjà au quotidien.

Le cap est donc le même. Si vous n'arriviez pas à mobiliser des compétences pour corriger vos problèmes existants, il y a fort à parier que ces nouveaux signaux ne vous faciliteront pas la tâche. Mais si vous alliez déjà dans la bonne direction, vous continuerez probablement.

Dans les deux cas, je serais ravi de vous accompagner sur un bout du chemin.
