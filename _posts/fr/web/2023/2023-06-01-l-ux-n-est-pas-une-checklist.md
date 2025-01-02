---
title: L'UX n'est pas une checklist
translations:
    en: ux-is-not-a-checklist
---

Je discutais hier avec un client qui souhaite trouver un équivalent à Largest Contentful Paint sur Safari.

> _Du point de vue SEO_, même si vous avez un tout petit peu de trafic sur Chrome, _c'est ce trafic qui détermine la façon dont Google perçoit la performance web de la page_. Mais si vous souhaitez mesurer et améliorer l'expérience de vos utilisateurs, alors je dirais : **pourquoi se limiter au LCP ?**
>
> Le LCP a été créé en tant que mesure de substitution pour répondre à une question beaucoup plus intéressante : "Quand les utilisateurs voient-ils _suffisamment_ d'éléments pour commencer à interagir avec la page ? Et ce "_suffisamment_" dépend de la nature et du contenu de la page, ainsi que des intentions de l'utilisateur.
>
> Les LCP est rarement la meilleure mesure pour répondre à cette question. C'est juste la plus générique, calculable pour la plupart des pages, par Chromium et les navigateurs basés sur Chromium, donc parfaite pour une évaluation générique et très large dans l'optique du référencement de milliards de pages web.
>
> […]
>
> Si j'essaie d'évaluer une page web en particulier, que je connais très bien, je ne mesurerais pas le LCP mais j'utiliserais plutôt des indicateurs personnalisés, qui répondront mieux aux défis de la page et qui m'aideront à comprendre son fonctionnement :
>
> - Le moment où l'autocomplétion de recherche est fonctionnelle et affichée (dans cet ordre, espérons-le)
> - Sur une liste de produits, le moment où les utilisateurs peuvent voir la première ligne de produits et commencer à interagir avec les filtres.
> - Le moment où le spinner de chargement apparaît et le moment où il disparaît pour afficher le contenu final (utile pour les "splash" d'accueil et les interstitiels du tunnel de conversion).
> - Dans une page composée de modules récupérant leur contenu à partir d'une API, les temps d'affichage spécifiques de chaque composant
> - etc.

C'est l'une des raisons pour lesquelles je pense que l'acquisition de Dareboost par Contentsquare a donné un nouveau souffle à ma carrière dans le domaine de la qualité Web. Plus encore qu'auparavant, je me suis impliqué dans les questions d'utilisabilité, dont la performance web n'est qu'une partie. Cela m'aide à garder à l'esprit que les indicateurs que nous mesurons en web performance ne sont souvent que les projections les plus génériques et les plus imparfaites de l'expérience technique d'une page web, et qu'ils ne sont pas nécessairement alignés sur les objectifs des clients et des organisations.

Hier soir, je suis tombé sur un article de Tim qui résume très élégamment la situation (traduction maison) :

> Les organisations ont parfois tendance à considérer les performances comme une sorte de checklist, d'autant plus que les Core Web Vitals attirent plus que jamais l'attention sur les performances. On essaie de cocher les cases de ces indicateurs pour qu'ils passent au vert, puis on s'arrête là.
>
> […]
>
> Mais tout cela est sans importance si ces mesures ne donnent pas une image exhaustive de la manière dont les utilisateurs interagissent avec nos sites.
>
> La performance, comme l'accessibilité, n'est pas une question de conformité.
>
> […]
>
> Il s'agit d'offrir une meilleure expérience aux personnes qui utilisent nos sites et nos applications afin qu'elles puissent atteindre leurs objectifs de manière efficace. Pour ce faire, nous devons être très attentifs à la nature de ces objectifs et à la manière dont ils sont atteints, et nous assurer que la manière dont nous mesurons les performances correspond à ces objectifs. <cite>"<a href="https://timkadlec.com/remembers/2023-06-01-performance-is-not-a-checklist/" hreflang="en">Performance Is Not a Checklist</a>", Tim Kadlec</cite>

En tant que personne impliquée depuis des années dans [Opquast, la checklist de référence de la Qualité Web](https://checklists.opquast.com/fr/assurance-qualite-web/), la critique du concept de checklist me touche. Mais elle est très juste. Les checklist ne sont que le début d'une approche de la qualité web, une ligne directrice. C'est un moyen de faire les choses correctement dès la première itération et d'ainsi réduire immédiatement l'exposition au risque de non-qualité. Mais ce n'est pas une réponse parfaite à l'UX, ça ne l'a jamais été et ça ne le sera jamais.
