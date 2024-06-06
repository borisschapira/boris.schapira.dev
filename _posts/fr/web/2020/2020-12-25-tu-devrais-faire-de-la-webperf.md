---
title: >-
    Tu devrais faire de la WebPerf


tags:
    - 'Performance Web'
slug: tu-devrais-faire-de-la-webperf
canonical: https://www.24joursdeweb.fr/2020/tu-devrais-faire-de-la-webperf/
canonical_title: '24 Jours de Web'
translations:
    en: you-should-look-into-webperf
---

Cher confrère, chère consœur, tu devrais t’intéresser à la Performance Web. C’est un sujet qui se trouve au cœur du web, qui a besoin de spécialistes, et est en plein essor. Je sais que tu ne me crois pas, ou que tu penses que ce n’est pas simple et tu as bien raison. Alors laisse-moi t’expliquer où on en est et pourquoi on a besoin de toi.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

De la Performance Web, ou webperf, j’en fais depuis plus de dix ans. J’en ai parlé publiquement la première fois en 2012 [^1]. Je disais qu’il fallait aborder le sujet en quatre temps : prendre conscience de l’enjeu, puis apprendre à optimiser, faire un suivi des performances et enfin, en parler en interne pour éviter de futures dégradations.

Huit ans plus tard, je pense toujours que c’est la meilleure manière d’aborder le sujet. Mais autour de moi, ça ne parle pas forcément beaucoup de performance web. Pour toutes celles et ceux qui n’ont pas forcément suivi où nous en sommes, faisons un tour d’horizon du sujet.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_Loving_it_re_jfh4.png"
alt=""
%}

Le sujet est dense, mais mon but n’est pas de t’étouffer sous les informations. Si tu veux aller plus loin, tu trouveras plein de notes de bas de page menant à des lectures additionnelles.

## Un point sur la situation

On va commencer par un peu de **définitions**.

La webperf, c’est tout ce que tu vas pouvoir faire pour que ton site soit **ressenti** comme plus performant par une personne l’utilisant. Ça part de <span lang="en">l’expérience d’utilisation</span> de ton site ou de ta <span lang="en">web app</span> (y compris les animations), puis on redescend dans les couches, avec du code HTML, CSS et JS, de la configuration de serveurs et enfin une analyse des infrastructures et services tiers que tu t’autorises à utiliser, et de leur configuration.

Attention, dans la mesure où un site performant **consomme moins de ressources**, la performance web partage 90 % de son ADN avec l’éco-conception. Mais certaines bonnes pratiques de performance web, comme l’utilisation de <abbr title="Content Delivery Network">CDN</abbr>, ne collent pas aux attentes écologiques [^2].

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_Eco_conscious_re_r2bs.png"
alt=""
%}

On a généralement l’intuition qu’une application plus rapide est plus agréable. Avec la webperf, **on a des chiffres qui le confirment**. Beaucoup de marques ont commandité des missions d’optimisation et témoignent des gains obtenus, notamment sur la conversion [^3]. C’est un point important parce que ça veut dire que la webperf est un domaine de la Qualité Web dont le retour sur investissement est démontrable. Cela facilite les investissements.

Quand il y a des rémunérations à la clé, il est plus facile d’attirer **des compétences**. Il y a une bonne dynamique dans la communauté, qui s’alimente d’articles sur différentes expertises au sein de la web performance. Ça permet à l’ensemble de la communauté de progresser.

La « <span lang="en">Front-End Performance Checklist</span> » de Vitaly Friedman est une des ressources les plus complètes. C’est un généreux dossier remis à jour chaque année sur le Smashing Magazine. Le problème, c’est qu’on ne peut pas envoyer n’importe qui vers ce type de dossier : 53 pages se traduisant par une <span lang="en">checklist</span> opérationnelle de 13 pages [^4], c’est pas à la portée de tout le monde : ça fait quand même une sacrée marche à monter.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_track_and_field_33qn.png"
alt=""
%}

Pour aller plus vite au cœur du sujet, on peut utiliser à la place un des nombreux **outils et services d’analyse** disponibles dans les navigateurs ou en ligne. Ces outils, qu’on appelle « synthétiques », sont super pratiques : ils analysent le chargement d’une page et produisent instantanément un rapport d’audit contextualisé permettant d’attaquer les points essentiels [^5]. On peut souvent leur demander de faire des tests avec des contraintes sur-mesure. Ça permet de faire des hypothèses comme « je crois que c’est ce fichier JS qui ralentit l’affichage », puis de tester en bloquant ce fichier et voir si l’affichage se produit vraiment plus vite. Ça permet aussi de mesurer la performance d’un site face à ses concurrents.

Mais la force de ces services est aussi leur faiblesse : ils ne mesurent que ce qu’on leur demande de mesurer. Ils ne peuvent pas dire si les sites sont rapides **chez les gens**. Si tu as besoin d’obtenir ces infos, il faudra te tourner vers des outils de télémétrie (des <span lang="en">analytics</span>). La télémétrie que tu utilises d’habitude peut suffire [^6], mais pour aller plus loin dans l’évaluation de la frustration des utilisatrices, il faudra te tourner vers des solutions plus élaborées [^7]. En revanche, un peu d’implémentation sera nécessaire.

À l’inverse, si ton site web est public et reçoit beaucoup de visites, tu peux utiliser **des données de terrain collectées par d’autres**. Ces jeux de données sont pratiques, parce qu’ils sont accessibles sans rien installer sur les sites (et du coup, comme avec les outils synthétiques, tu peux faire des comparaisons entre sites). Les données ne sont pas forcément difficiles à récupérer, mais peuvent être incomplètes (par exemple, ne concerner que Chrome [^8]).

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_Data_re_80ws.png"
alt=""
%}

Dans l’absolu, dès que tu utilises des données de terrain, prends du recul. L’interprétation des résultats est très compliquée parce que beaucoup de facteurs peuvent affecter la performance mesurée [^9]. Si tu as l’intuition de quelque chose, n’hésite pas à valider cette hypothèse en recoupant avec d’autres données, ou via des tests synthétiques.

### Pour résumer

Aujourd’hui, les connaissances techniques sur la performance web sont largement consensuelles et testables via des outils d’analyse automatisés. Des données de terrains génériques sont facilement accessibles et permettent d’avoir un retour sur les optimisations apportées, dont le coût n’a pas de mal à être financé et le gain à être mesuré.

Et pourtant… si on regarde les données de terrain, on peut voir que la performance des sites ne s’améliore pas franchement.

{% capture img_alt %}Évolution de l'indicateur First Contentful Paint de janvier 2017 à août 2020, mesuré en contextes Mobile et Bureau. Dans un cas comme dans l'autre, des fluctuations sont présentes et souvent corrélées entre les deux contextes, mais dans l'ensemble, la valeur moyenne varie peu voire se dégrade.{% endcapture -%}{% capture img_caption %}Évolution de l'indicateur First Contentful Paint de 2017 à 2020. Source : <a href="https://httparchive.org/reports/loading-speed#fcp" hreflang="en" lang="en">HttpArchive</a>{% endcapture -%} {% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/timeseries_fcp.png"
alt=img_alt
caption=img_caption
%}

Du coup, le paysage ne doit pas être si rose que ça. Faisons un petit tour des choses qui sont encore difficiles.

## Le chemin qu’il nous reste à parcourir

Comme beaucoup de sujets de la Qualité Web, la performance web est l’affaire de toutes et tous. Pour améliorer les performances d’un site, il faut non seulement comprendre d’où viennent les problèmes mais également être capable de déterminer qui sont les personnes à contacter pour les résoudre. Comme la webperf concerne tous les corps de métier du Web, tu vas vite te retrouver à devoir parler à des gens très différents. Même sur des problèmes qui ont l’air simple.

Prenons l’exemple de l’optimisation des images. Dis comme ça, ça a l’air simple et beaucoup de gens auront l’impression de comprendre. Mais pour aborder le sujet dans sa globalité, il faut :

-   former les personnes à choisir le meilleur format en fonction de l’image ;
-   encadrer la contribution (pour éviter les images trop grosses) et déclencher l’optimisation et la génération de plusieurs variantes d’images en fonction du contexte et de la direction artistique ;
-   modifier le code HTML permettant d’insérer les images et éventuellement mettre en place un proxy d’images avec une négociation de contenu (interne ou externe), afin que chaque personne reçoive une image adaptée à son contexte

Et je n’ai même pas encore parlé de <a href="https://www.smashingmagazine.com/2019/05/hybrid-lazy-loading-progressive-migration-native/" lang="en" hreflang="en">lazy loading</a>.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_image_viewer_wxce.png"
alt=""
%}

Tu l’auras compris, quand tu commences à parler de performance web en entreprise, **le plus dur n’est pas forcément la technique**. C’est aussi de faire parler ensemble différents métiers afin d’avoir une vue d’ensemble de la situation et des actions à mener.

D’autant que c’est parfois difficile de parler de la même chose. Il y a vraiment **beaucoup d’indicateurs différents** et comme si ça ne suffisait pas, de nouveaux indicateurs apparaissent régulièrement. Il y a certains indicateurs qui sont vraiment pérennes, comme le <span lang="en">Speed Index</span> [^10], un indicateur de référence depuis près de 10 ans. D’autres sont mal nommés, ou ne permettent pas de prendre des décisions, ou informent sur quelque chose qui n’est pas forcément primordial. Il faut donc sans cesse s’interroger sur les mesures, mais aussi sur la manière dont on mesure.

Mais le top du top, c’est quand on utilise ses propres indicateurs, **des jalons temporels sur-mesure**. Côté serveur, on appelle ça des <span lang="en">Server Timings</span> [^11]. Côté navigateur, on parle de <span lang="en">User Timings</span> [^12]. Contrairement aux autres indicateurs, ils correspondent à ce que ton équipe choisit elle-même de surveiller. On peut les retrouver quand on analyse la page dans les outils de développement de son navigateur et ils sont collectables par tous les outils d’analyse. Pourquoi s’en priver ?

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_speed_test_wxl0.png"
alt=""
%}

Quand tu vas vouloir optimiser la performance d’un site, tu vas parfois te heurter aux librairies utilisées par d’autres pour répondre à des besoins métiers. Ces librairies répondent souvent à une liste d’objectifs mais n’ont pas en vue la webperf. Du coup les gens qui les utilisent n’ont parfois jamais entendu parler de performance. Et rien n’est prévu, dans ces solutions, pour les optimiser.

Concrètement, ça veut souvent dire qu’optimiser va être difficile, techniquement ou parce que les gens avec qui tu vas parler ne comprennent pas ce besoin. Quand l’optimisation n’est vraiment pas possible, n’oublie pas de l’écrire dans **un référentiel de la dette technique**, en espérant que celle-ci sera résolue à la prochaine refonte.

## Pourquoi on a besoin de toi

Tu l’auras compris, le sujet de la Performance Web, comme tous les sujets de la Qualité Web, est un sujet technique. Mais cette technique, en fait, elle s’apprend assez bien.

Je ne vais pas te mentir : monter en compétence, c’est long. Mais les compétences acquises ne dépendent d’aucun framework, d’aucune solution du marché, d’aucune tendance. Il s’agit de comprendre comment fonctionnent les standards du web : HTTP, HTML, JS et CSS. On peut difficilement faire plus réutilisable et crois-moi : ça vaut le coup.

Tu verras que quel que soit ton rôle dans la chaîne de production du web, tu peux acquérir ces compétences et les mettre au service d’une meilleure performance des sites web.

Bien sûr, il nous faut des gens prêts à **optimiser des sites web**. Il y a une vraie demande à ce sujet. Mais c’est loin d’être la seule manière de participer. C’est même la fin de la chaîne.

Pour déjà comprendre le problème, on a besoin de <span lang="en">Data Analysts</span> capables d’analyser les données d’utilisation et d’affiner les mesures, pour **mieux mettre en balance les investissements et les gains**. Savoir qu’un sujet est pertinent parce que d’autres le disent, ce n’est pas pareil que de pouvoir ajuster son investissement au fil de ses besoins et de **ses gains à soi**.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_Business_plan_re_0v81.png"
alt=""
%}

Il faut que le sujet de la Performance infuse dans le développement des librairies de tous types. Qu’il s’agisse de <span lang="en">Back-End</span> ou de <span lang="en">Front-End</span>, il faut que ces projets intègrent **la performance comme un besoin fondamental**, de la même manière que la sécurité ou l’accessibilité.

On a besoin de <span lang="en">designers</span> qui pensent à la manière dont leurs interfaces sont progressivement affichées et priorisent les éléments les plus attendus par les utilisateurs et utilisatrices afin **d’améliorer leur ressenti** [^13].

Tes compétences sont plutôt liées au <span lang="en">Back-End</span> ? Parfait. Nous avons aussi besoin de gens comme toi pour optimiser l’exécution du code, configurer des systèmes de cache serveur, ou aider au développement de serveurs intermédiaires de performance qui peuvent aider à optimiser un site rapidement en attendant que des corrections de fond soient réalisées [^14].

Enfin, il nous faut aussi des personnes pour **assurer la médiation** de tous ces métiers, nourrir et encadrer le dialogue, permettre les conditions du succès et notamment la formation à un **socle commun de compétence** (en commençant par Opquast [^15], par exemple).

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_building_websites_i78t.png"
alt=""
%}

Pour toutes ces raisons, tu devrais faire de la Performance Web.

Et, si ça se trouve, tu en fais déjà.

---

Les illustrations présentes dans cet article sont issues du [projet Undraw](https://undraw.co/illustrations), créé par [Katerina Limpitsoun](https://twitter.com/ninaLimpi). Vous pouvez les utiliser dans n’importe quel projet, qu’il soit commercial ou personnel, sans attribution ni frais.

Merci à [Carine Sobisiak](https://twitter.com/CarineSobisiak), Olivier Rundstadler et [Nicolas Goutay](https://twitter.com/Phacks) pour leurs relectures et leurs suggestions.

[^1]: « [Mettre en place une stratégie de performance web](https://boris.schapira.dev/community/performance-web/) » lors de Sud Web 2012.

[^2]: Romuald Priol en parle très bien dans l’article « [Les impacts du numérique : bonnes pratiques pour un Web plus écologique](https://news.infomaniak.com/web-ecologique/) ».

[^3]: [WPOStats.com](https://wpostats.com/) recense des études de cas et expériences démontrant l’impact de l’optimisation des performances web sur l’expérience d’utilisation et le succès commercial.

[^4]: « [Front-End Performance Checklist 2020: the PDF](https://www.dropbox.com/s/k1oxe5vyrli83zf/performance-checklist-1.3.pdf?dl=0) », 166 Ko.

[^5]: [Dareboost](https://www.dareboost.com), sur lequel je travaille, est un de ces outils et j’en suis très fier, mais c’est loin d’être le seul. <a href="https://calibreapp.com/" lang="en" hreflang="en">Calibre</a>, <a href="https://speedcurve.com/" lang="en" hreflang="en">Speedcurve</a>, <a href="https://gtmetrix.com/" lang="en" hreflang="en">GTMetrix</a>, <a href="https://www.pingdom.com/" lang="en" hreflang="en">Pingdom</a>, entre autres, proposent également des rapports instantanés et du suivi. Les équipes de développement peuvent également utiliser <a href="https://developers.google.com/web/tools/lighthouse/" lang="en" hreflang="en">Lighthouse</a> ou <a href="https://webhint.io/" lang="en" hreflang="en">WebHint</a> sur leurs postes.

[^6]: Exemple avec « [Analyser la vitesse de chargement d’un site web via Google Analytics](https://www.fasterize.com/fr/blog/analyser-la-performance-dun-site-web-via-google-analytics/) » par Anthony Barré mais personnellement, je collecte avec Matomo.

[^7]: Voir à ce sujet « [User Experience & Performance: Metrics that Matter](https://www.youtube.com/watch?v=nEHsHioWY1U&feature=youtu.be) », par Philip Tellis.

[^8]: Il s’agit ici du [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report), ou CrUX pour les intimes.

[^9]: « [Comment interpréter les mesures de performance réelles (RUM metrics)](https://www.youtube.com/watch?reload=9&v=9PBeqHXk7zw&feature=youtu.be) », par Gilles Dubuc.

[^10]: « [Speed Index : tout savoir sur cet indicateur majeur de la performance web](https://blog.dareboost.com/fr/2018/02/speed-index-performance-web/) », par Damien Jubeau.

[^11]: « [MDN Server-Timing Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing) ».

[^12]: « [Custom Timing : attendez la prochaine frame quand vous utilisez la User Timing API](https://boris.schapira.dev/notes/2019-09-custom-timing-prochaine-frame/) ».

[^13]: « [Mind over Matter: Optimize Performance Without Code](https://stephaniewalter.design/blog/mind-over-matter-optimize-performance-without-code-csscamp-2019/) », par Stéphanie Walter.

[^14]: La solution française de référence, c’est [Fasterize](https://www.fasterize.com/fr/comment-ca-marche/).

[^15]: [Opquast](https://www.opquast.com/), la certification des <abbr title="professionels" aria-hidden="true">professionnel·les</abbr> du Web.
