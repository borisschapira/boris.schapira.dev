---
title: 'Scrumbuts et Cargo Cult'
date: '2017-04-02'
lang: fr
type: post
categories:
    - web
publishDate: '2017-04-02'
locale: fr_FR
---

Les <em lang="en">Scrumbuts</em> désignent l'ensemble des entorses à <span lang="en">Scrum</span> auxquelles les équipes recourent lorsqu'elles n'arrivent pas à appliquer correctement cette fameuse méthodologie Agile.

<!-- more -->

## <em lang="en">We use Scrum, but…</em>

Les équipes concernées prennent donc sur elles, **parce qu'elles pensent bien faire**, de modifier la méthodologie pour faire disparaitre cette incompatibilité, ce point de friction et ainsi aller de l'avant. Cela commence une petite entorse, puis une autre… À chaque fois, des excuses justifient la modification "maison" : 

> — On est en <span lang="en">Scrum</span> mais on ne fait pas la mêlée quotidienne. Si quelqu'un a quelque chose à signaler, il envoie un mail.
> — On est en <span lang="en">Scrum</span>  mais nos sprints durent six semaines, car la majorité d'entre nous est à temps partiel !
> — On est en <span lang="en">Scrum</span> mais comme on communique bien tout le temps, on n'a pas besoin de faire de rétro.
> — On est en <span lang="en">Scrum</span> mais l'équipe est divisée en deux groupes qui ne se parlent pas.
> — Bien sûr qu'on fait du <span lang="en">Scrum</span>, on a des post-it plein le mur [mais c'est à peu près tout] !

Quand je rencontre une entreprise me disant qu'elle a échoué à mettre en place Scrum, je me demande dans quelle mesure sa mise en place était "adaptée" par l'entreprise à son besoin.

## Pensée magique

Le <em lang="en">Cargo Cult</em> désigne l'attitude des habitants des archipels Vanuatu (et, plus largement, de Mélanésie), témoins de l'installation des américains sur leur sol pendant la seconde guerre mondiale et, surtout, l'arrivée des avions et des navires de ravitaillement qui leurs livraient de nombreuses marchandises. Eux qui n'avaient jamais connu de système économique comparable, de production industrielle, ne pouvaient pas deviner que ces produits étaient le fruit de la production d'autres hommes. Pour eux, ce ravitaillement était **magique, divin**.

Ils se mirent, peu à peu, à **reproduire ce qu'ils voyaient**, adoptant des comportements qu'ils observaient dans l'espoir de voir arriver de nouveaux bateaux ou avions. Certains se sont mis à couper des fleurs pour les mettres dans des vases pendant que d'autres ont carrément construit de fausses cabines radio ou de fausses pistes d'atterissage, espérant que cela ferait revenir les cargos.

Ce phénomène anthropologique est souvent utilisé en informatique pour moquer les développeurs qui copient du code d'autres et le réutilisent sans pleinement maitriser son impact[^tzi].

[^tzi]: Si vous ne l'avez jamais vue, je vous conseille la conférence "[Le culte du cargo](https://vimeo.com/70060075)" par [Thomas Zilliox](https://twitter.com/iamtzi "Compte Twitter de Thomas Zilliox") à Sud Web 2013.

Il a clairement une attitude similaire dans de nombreuses structures qui cherchent à adopter l'Agile, choisissent Scrum, puis enchainent les <em lang="en">Scrumbuts</em>.

## Agile contraint

L'Agile porte souvent très mal son nom. Prenons <span lang="en">Scrum</span> (qui n'est qu'une des dizaines de façons de faire de l'Agile) : chaque rôle, chaque règle, chaque temps est défini pour apporter un certain bénéfice à l'équipe et lui permettre de déjouer des situations problématiques bien connues. Chaque <em lang="en">Scrumbut</em> est une entaille à ce mécanisme, une épine dans le pied de l'équipe qui l'empêche de marcher et qui détruit à chaque pas la confiance que l'équipe pourrait avoir placé dans la méthodologie.

Quand vous multipliez les <em lang="en">Scrumbuts</em>, souvent parce que vous pensez que cela permet de "mieux adapter" <span lang="en">Scrum</span> à votre entreprise, vous négligez en réalité les apports de la méthodologie et espérez qu'en reproduisant quelques artefacts qui vous arrangent (souvent, les plus visibles et qui coûtent le moins cher), vous en tirerez les même avantages que ceux qui vous en disent du bien.

Sortez de ce <em lang="en">Cargo Cult</em> ou vous gâcherez de manière irrémédiable le potentiel Agile de vos équipes.

{% capture img_alt %}Deux post-its, comparant l'Agile façon Cargo Cult et les vraies livraisons successives{% endcapture %}
{% capture img_caption %}"<a href="https://www.flickr.com/photos/psd/9588038559" title="Lien vers la photo sur Flickr">Doing Agile, being Agile</a>", par <a href="https://www.flickr.com/photos/psd/" title="Profil Flickr de Paul Downey">Paul Downey</a> — <a href="https://creativecommons.org/licenses/by/2.0/" class="photo-license-url" rel="license cc:license" target="_newtab" ><span>Certains droits réservés</span></a>{% endcapture %}
{% include rwd-image.html.liquid 
    path="/assets/images/2017-04-02/doing_vs_being_agile.jpg"
    alt=img_alt
    caption=img_caption 
%}