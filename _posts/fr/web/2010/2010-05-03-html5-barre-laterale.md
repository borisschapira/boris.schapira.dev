---
title: '[HTML5] Barre latérale'
tags:
    - Front-End
    - Projets
---

Ces derniers jours, deux ouvrages alimentent mes temps libres: **Dive Into HTML
5** de Mark Pilgrim que je lis directement
[à cette adresse](http://diveinto.html5doctor.com/ '"Dive Into HMTL5" by Mark Pilgrilm')
et **Transcender CSS**, d'Andy Clarke, acheté
[chez Amazon](http://www.amazon.fr/Transcender-CSS-Sublimez-design-web/dp/2212121075/ref=pd_rhf_p_t_4 '"Transcender CSS" by Andy Clarke on Amazon.fr').

En commençant à réaliser une ébauche de thème Wordpress tirant partie d'HTML5,
je me suis posé quelques questions concernant la barre latérale.

<!-- more -->

HTML5 apporte son lot de nouvelles balises, dont `nav` et `aside`. L'élément
`nav` représente une section de la page qui contient des liens vers d'autres
parties du site, y compris dans la page courante. Il sera courant d'y placer les
liens de l'en-tête (qui définissent en général la navigation principale) ou du
pied de page (qui renvoient à des éléments secondaires ou légaux). L'élément
`aside` représente une section de contenu distinct mais néanmoins relié au
contenu englobant. Il peut être utilisé pour des effets typographiques comme les
citations incrustées, les barres latérales ou tout autre contenu pouvant être
séparé du contenu principal.

Après de telles définitions, le découpage est aisé : au sein d'une balise
`section` définissant le corps du site, la barre latérale sera contenue dans un
élément de type `aside`. Attention cependant, tout ce que contient votre barre
latérale n'a pas vocation à être contenu dans un élément `nav` !

{% capture img_alt %}Une capture de la sidebar du blog au moment où j'écris ces
ligne, avec des zones numérotées{% endcapture %} {% capture img_caption %}La
barre latérale de boris.schapira.dev{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2010-05-03/sidebar.png"
alt=img_alt
caption=img_caption
%}

Prenons l'exemple de la barre latérale de ce site au moment où j'écris ces
lignes. Les éléments 4 et 7 sont manifestement destinés à accueillir des
éléments de navigation mais cela n'est pas le cas des éléments 1, 2 et 6 qui
contiennent des sections indépendantes mais informatives sur le site. Plusieurs
`div` feront très bien l'affaire. Les sections 3 et 5, enfin, sont des listes de
liens. En tant que listes, elles seront contenues dans des éléments `ul`, `li`
et évidemment `a` auxquels auront été ajouté l'attribut `rel="external"`, dédié
aux liens externes.

Comme vous le voyez dans cet exemple très simple, HTML5 apporte de nouvelles
balises qui vous permettront de définir un meilleur découpage sémantique de vos
contenus, facilitant leur identification par les navigateurs et améliorant
l'accessibilité de votre site. Vivement demain !
