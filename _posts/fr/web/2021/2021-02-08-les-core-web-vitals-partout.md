---
title: Les Core Web Vitals partout
tags:
    - 'Performance Web'
slug: les-core-web-vitals-partout
---

[Comme prévu](/notes/2020-05-core-web-vitals-qu-en-penser/), de plus en plus de structures basent leurs efforts de Web Performance sur les Signaux Web Essentiels, ou <span lang="en">Core Web Vitals</span>. En France, par exemple, [la méthodologie du classement JDN&#8239;/&#8239;Fasterize](https://journaldunet.com/solutions/dsi/1497377-methodologie-du-classement-webperf-fasterize-jdn/) évolue pour adopter les CWV à la place d'analyses et d'indicateurs synthétiques.

Ce changement de paradigme va être un séisme pour beaucoup d'acteurs, mais je suis content de voir que mes client·es ont tendance à bien tirer leur épingle du jeu.

Pour les autres, prenez le recul nécessaire. Un mauvais classement n'implique pas nécessairement une mauvaise expérience pour vos utilisateur·ices. Je sais que ce n'est pas évident à comprendre, donc voici quelques éléments d'explications.

D'une part, **les CWV ne sont pas l'alpha et l'omega de l'UX**.

Prenez le <span lang="en">First Input Delay</span> (FID), par exemple. D'après [les données HTTP Archive sur plusieurs millions de pages d'accueil](https://almanac.httparchive.org/fr/2020/performance#core-web-vitals-le-first-input-delay), il est globalement bon partout. Bien sûr, si vous proposez une web application qui repose sur beaucoup sur JavaScript, alors il est possible qu'il le soit moins. Mais pour la plupart des sites de ce classement, ce n'est pas le cas.

Je ne m'attarderai pas sur le <span lang="en">Cumulative Layout Shift</span> (CLS), car [j'ai déjà dédié un article à cet indicateur](/notes/2020-09-cumulative-layout-shift-stabilite-page/) et [d'autres, comme Myriam, en parlent aussi très bien](https://www.youtube.com/watch?v=J_UO2ax2MQw). Le CLS est biaisé par tellement de choses que <a href="https://web.dev/better-layout-shift-metric/" hreflang="en">Google imagine déjà son remplaçant</a>.

Enfin, le <span lang="en">Largest Contentful Paint</span> (LCP) s'intéresse au contenu le plus important visuellement, sauf que ce contenu peut parfaitement être décoratif. On se retrouve donc avec un indicateur qui dévalorise des expériences d'utilisation qui ne sont pas dégradées.

D'autre part, le <span lang="en">Chrome UX Report</span>, d'où sont tirées les valeurs remontées la <span lang="en">Search Console</span> ou le classement JDN, ne délivre **qu'une vision partielle des usages du Web**.

Sa base de collecte est limitée aux utilisateurs et utilisatrices authentifiées de Chrome, sans <span lang="en">passphrase</span>, qui ont optée pour la synchronisation d'historique et l'envoi de rapports d'usages statistiques. Nous n'avons à ce jour pas d'information sur les **biais de sélection** que cela représente, mais on peut déjà souligner qu'aucun usage sur un autre navigateur n'est pris en compte (ce qui exclut d'emblée toustes les utilisateur·ices d'iPhone, par exemple).

On se retrouve donc régulièrement avec des origines (domaines) absentes de la base de données Chrome UX Report parce qu'elles n'emmagasinent pas assez de visites. C'est le cas de plusieurs de mes client·es qui ont disparu du classement JDN parce que leur audience utilise plutôt des produits Apple.

Sachez donc garder du recul par rapport à ce référentiel qui n'est qu'une projection imparfaite et partielle de la performance. Elle n'est pas mauvaise en soi, toutes les projections sont imparfaites. Il faut juste le garder en tête.

Si vous souhaitez vraiment améliorer votre vision de la performance réelle, vous aurez besoin d'investir dans une solution de <span lang="en">Real User Monitoring</span> ou, à minima, dans [un mécanisme de témoignages issus de vos utilisateurs et utilisatrices](https://www.youtube.com/watch?v=G-XJgn7A3iQ).

Sachez prendre du recul sur les impacts, également. J'aimerais pouvoir dire autre chose et "vendre" de la performance web à tours de bras, mais en réalité, je suis convaincu que l'impact de la Page Experience dans la mise à jour du ranking en mai sera réduit. Cela ne veut pas dire que la mise-à-jour de mai ne changera rien, mais peut-être qu'elle correspond tout simplement à un réajustement nécessaire, finalement assez éloigné de la web performance.

Google fait d'ailleurs évoluer sa communication avec le temps, puisqu'on est passé d'une réthorique de la prise en compte, interprété librement et _sans contradiction_ par le monde du SEO technique comme un risque de pénalité, à une réthorique du boost de classement, mais uniquement quand les trois indicateurs sont bons, et uniquement dans le classement mobile…

En réalité, c'est une prophétie auto-réalisatrice qui se joue dans le monde du SEO technique. Les équipes qui sont en train de faire des optimisations interpréteront une absence de pénalité ou un meilleur classement comme étant un gain lié à leur travail alors qu'en réalité, ces équipes travaillent tout simplement à l'amélioration de l'expérience d'utilisation, ce qui va mécaniquement entrainer de meilleurs conversions.

Réciproquement, celles qui ne verront pas de gain remetteront en cause leur travail, principalement sur les <span lang="en">Landing Pages</span>, alors qu'il est peut-être très bon et que le problème se situe plus loin, dans le tunnel, ce qui est très difficile à savoir sans une approche plus précise de la donnée.

Parce qu'il est peut-être utile de le rappeler mais **la performance web, ce n'est que de l'UX**. C'est travailler techniquement à assurer une navigation de qualité, qui permet aux utilisateurs et utilisatrices d'atteindre leurs objectifs sur le site.

Si vous commencez à faire de la web performance parce que qu'un tiers vous "menace" (ici, Google), vous risquez de vous y mettre vite, et mal. Profitez plutôt du <i lang="latin">momentum</i> actuel pour investir dans une équipe qualité transverse (pas que webperf, donc), qui se chargera de porter le sujet au long cours, sur toutes les fonctionnalités et de manière pérenne.
