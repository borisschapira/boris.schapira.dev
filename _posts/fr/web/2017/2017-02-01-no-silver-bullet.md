---
title: "(Web) Apps : il n'y a pas de balle en argent"
canonical: 'https://blog.clever-age.com/fr/2017/02/01/app-ou-web-apps-il-ny-a-pas-de-balle-en-argent/'
canonical_title: 'le blog de Clever Age'
slug: apps-vs-web-apps
translations:
    en: apps-vs-webapps-no-silver-bullet
---

Je suis encore tombé récemment sur un article qui annonçait calmement la fin des applications mobiles, en disant que le <abbr title="Responsive Web Design" lang="en">RWD</abbr> et les <span lang="en">Progressive Web Apps (PWA)</span> étaient la réponse à l’ensemble des besoins des organisations, chiffres d’installation des applications à la clé. Comme le disait Frederick Brooks, il n’y a pas de technique miraculeuse (<q lang="en">No silver bullet</q>) en génie logiciel. L’utilisation des chiffres n’est pas si évidente que ça et il existe de nombreux pièges qui peuvent nous inciter, par intuition, à conclure de manière erronée quant à la réalité.

Faisons ensemble un petit tour d’horizon des biais de logique liés à cette pratique.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

## Web ou natif ?

Imaginons que l'on mesure la satisfaction des utilisateurs d'applications de tous types : des applications natives pures, des applications cross-platform, des applications semi-hybrides à la React Native, des <abbr title="Progressive Web App" lang="en">PWA</abbr> "installées" sur Android 6, des <abbr title="Progressive Web App" lang="en">PWA</abbr> non-installées et des Web App non-progressive. Avec ces mesures, nous serions en mesure de réaliser un graphique avec en abscisse la mesure de satisfaction et en ordonnée, le degré de rapprochement avec les applications natives :

{% capture img_alt %}Un graphique présentant des points éparses avec une tendance vers plus d'applicatif = plus de satisfaction{% endcapture %} {% capture img_caption %}Notre premier graphique présentant la satisfaction des utilisateurs en fonction de leur rapprochement technique avec les applications natives{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-02-01/1.png"
alt=img_alt
caption=img_caption
%}

Difficile de déduire quelque chose de précis, mais on peut déterminer une tendance globale si on réalise la moyenne de la satisfaction de chaque groupe d'applications : plus on se rapproche du natif, plus on semble avoir des chances de dégager de la satisfaction.

## En fonction du type d'application ?

Imaginons désormais que l'on observe la satisfaction en fonction du type d'application, c'est à dire, simplement, en fonction de la catégorie dans laquelle vous placeriez chaque application sur une place de marché d'applications.

{% capture img_alt %}Le même graphique qu'au dessus sauf que désormais, les types d'applications sont présentés. Les tendances dépendent entièrement du type.{% endcapture %} {% capture img_caption %}Alors, c'est moins facile, là, non ?{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-02-01/2.png"
alt=img_alt
caption=img_caption
%}

Les tendances semblent clairement moins évidentes.

On se rend rapidement compte que les catégories affichées sont très limitées. Pas de réseaux sociaux, par exemple. Nous avons donc ici une vision extrêmement parcellaire du marché, qui peut considérablement modifier la pertinence des conclusions précédentes. Ce biais est très courant dans les études que je lis ça et là. Faites-y attention.

Supposons que ça ne soit pas un problème pour nous (on s'intéresserait exactement à ces types d'applications) et continuons l'analyse.

Suivant la catégorie, les satisfactions relatives au côté applicatif ne sont pas du tout comparables : les meilleurs outils de productivité et jeux, par exemple, semblent être proches du natif. En revanche, les applications de cuisine ne semblent pas du tout en tirer partie. En creusant un peu les besoins concernés, cela fait sens : les outils de productivités ont souvent besoin d'accéder aux fonctionnalités de manipulation de fichiers du système et les jeux ont besoin de puissance et d'une bonne maîtrise de la programmation parallèle, il est donc normal qu'ils soient développés au plus proche du système d'exploitation.

On a le sentiment qu'en appliquant des raisonnements de bon sens sur l'ensemble des catégories, on devrait pouvoir trouver des tendances. Un jeu serait alors toujours meilleur en natif, un site de cuisine n'en tirerait aucun avantage… mais rapidement, on se rend compte que cela ne marche pas pour toutes les catégories. Le e-commerce, par exemple, ne semble pas affecté par le type d'applications…

## Et les budgets ?

Et si les applications ne bénéficient pas du même niveau d'investissement en fonction de leur type et de leur plate-forme de développement ? Allons creuser de ce côté-là en visualisant également le budget de chaque type d'application.

{% capture img_alt %}Le même graphique qu'au dessus que la taille des points est relative au budget. Même si plus d'applicatif semble vouloir dire que le budget est plus important, il existe des exceptions{% endcapture %} {% capture img_caption %}Toujours pas évident, hein ?{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-02-01/3.png"
alt=img_alt
caption=img_caption
%}

Les applications natives semblent coûter plus cher, ce qui est compréhensible : il faut développer pour deux ou trois système là où les développements cross-platform ou Web adressent plus facilement de multiples matériels. Sauf que non, on trouve aussi un haut budget dans une application de bureautique semi-hybride. Impossible de savoir s'il s'agit d'un investissement choisi ou des conséquences d'un mauvais choix de technologie couplé à un entêtement[^ci].

[^ci]: Il est courant de voir des acteurs de tout niveau d'information se refuser à abandonner une technologie qui est pourtant manifestement inadaptée à un projet. Cela n'a rien d'étonnant et ce n'est pas simplement de la mauvaise foi. Il s'agit d'un mélange de biais comportementaux très connus : [le biais des coûts irrécupérables](https://fr.wikipedia.org/wiki/Co%C3%BBt_irr%C3%A9cup%C3%A9rable) et le [le biais de confirmation](https://fr.wikipedia.org/wiki/Biais_de_confirmation).

Autre tendance visible : on trouve des hauts budgets dans les applications e-commerce. Mais cela ne permet pas de savoir si ce sont les applications e-commerce qui coûtent plus cher à développer ou si ce sont les budgets qui sont, de base, plus importants parce que le retour sur investissement est plus prometteur.

## Mais alors, les chiffres ne disent rien ?

Les chiffres sont très difficiles à interpréter car les causes et les effets s'entremêlent quand on commence à mélanger une technologie sous-jacente et un besoin fonctionnel. Nous sommes en plein paradoxe de Yule-Simpson[^ys] : peu importe les groupes constitués (prix, objectif, satisfaction…), les corrélations observées en combiné ne sont pas cohérentes avec ce qui s'observe dans chacun des groupes. Il manque des informations qui influencent l'ensemble des facteurs.

[^ys]: Un paradoxe statistique très perturbant, très bien décrit par David Louapre dans [l'épisode 7 de Science Étonnante](https://www.youtube.com/watch?v=vs_Zzf_vL2I).

Un très bon exemple est _l'application impossible_ : cette application dont vous savez qu'elle va demander l'ensemble des compétences, des équipes, des accès aux fonctionnalités natives pour une UX parfaite. Vous mobilisez vos équipes, le développement est long et coûteux et… ça rate. L'application ne marche pas. Vous avez un parfait exemple de l'application qui coûte cher à développer, que vous n'auriez **jamais** tenté en hybride mais qui vient plomber les statistiques et donne l'impression que le natif n'était pas la bonne solution. En réalité : **on demande rarement la même chose à une application pour laquelle le natif a été choisi et à une application pour laquelle le développement s'est tourné vers de l'hybride**.

Un autre bon exemple est celui de ce client qui avait besoin d’un très grand contrôle sur l’interface de son application mais ne voulait pas croire à la pertinence d’un investissement sur du développement <span lang="en">cross-platform</span>, arguant que ⅔ des utilisateurs mobiles n'installent jamais d’applications autre que des réseaux sociaux… sauf que son application était destinée à une cible B2B incitée à installer l’application pour des besoins administratifs. Cette cible et cette stratégie d'acquisition spécifiques rendaient les statistiques citées complètement invalides.

## Une vision d’ensemble

Pour prendre de bonnes décisions, il faut aborder l’ensemble de chaque projet : spécifications fonctionnelles et technique, analyse de la cible (en âge, <abbr title="Catégorie Socio-Professionnelle">CSP</abbr>, emplacement, culture…), niveau d’information et de compétence des équipes, plate-forme de développement existante ou acquise, pérennité du développement, chiffre d’affaire espéré, stratégie de déploiement et de maintenance…

Pour l’instant, aucun algorithme <span lang="en">Big Data</span> n’est capable de prendre le recul nécessaire par rapport à un besoin que, souvent, le commanditaire lui-même ne sait pas formaliser. Il reste nécessaire de passer du temps à affiner ce besoin, le cadrer, et déterminer au cas par cas les solutions qui ne peuvent pas être que techniques.  
Si vous avez envie de dire que les <abbr lang="en" title="Progressive Web Apps">PWA</abbr> sont prometteuses et qu’il est temps de vous y intéresser, allez-y (j’y crois moi-même énormément). De là à dire qu’il faut abandonner les applications natives et les places de marché dans tous les cas, il y a un pas que je ne franchirai pas.

En cas de doute, faites-vous conseiller par des gens qui ont de l’expérience, qui sont compétents et indépendants des technologies employées. En cas d’absence de doutes : encore plus.
