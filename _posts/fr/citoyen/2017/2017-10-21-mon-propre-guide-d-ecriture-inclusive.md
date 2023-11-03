---
title: "Mon propre guide d'écriture inclusive"
tags:
    - guide
    - Égalité
last_modified: 2023-06-10T08:05:00Z
---

Cet article date de {{ page.date | l: "%B %Y" }}. Il me servira de note à moi-même ou d'explication vers laquelle pointer si j'ai besoin d'expliquer ma façon de procéder, et je n'hésiterai pas à le mettre à jour.  
_Dernière mise à jour : {{ page.last_modified | l: "%B %Y" }}_

<!-- more -->

-   Lorsque le masculin et le féminin sont présents, les ordonner selon l'ordre alphabétique "l'égalité femmes-hommes".
-   Utiliser l'accord de proximité : "les auditeurs et les auditrices ont été appelées à s'exprimer".
-   Recourir autant que possible aux épicènes et mots génériques qui permettent d'utiliser des formulations qui ne marquent pas le genre.  
    Exemple : "le personnel" plutôt que "les salariés". "L'équipe de développement" plutôt que "les développeurs".
-   Utiliser le point médian quand il peut être lu comme un féminin générique :  
    Exemple : "les invité·es"
-   Utiliser des néologismes si cela permet d'alléger la lecture, dans un contexte contraint.  
    Exemple : "celleux", "iels".

{% capture note %} **Sur ce blog**  
L'ensemble de ce blog ne respecte pas forcément ces règles. Certains articles ont été écrits avant que mes valeurs féministes ne m'emmènent sur ces contrées. Je ne m'interdis pas de reprendre certains articles récents pour y appliquer ces règles.{% endcapture note %} {% include note.html.liquid content=note %}

## Écriture inclusive ≠ Abbréviations inclusives

Je suis intimement convaincu que l'écriture inclusive n'est pas un problème pour la lecture d'un grand nombre de personnes… valides.

Les textes ci-dessous, par exemple, sont difficiles à lire, mais ce n'est pas impossible. Au fil de la lecture, le cerveau est en mesure de s'adapter et rapidement, oublie la graphie particulière :

> Ça mrahce tèrs bein aevc un txtee éicrt cmome ça. Du memomnt que la pmrerièe et la dreinère lrette snot les bnones.

D'ailleurs cela "marche" aussi en remplaçant certaines lettres par des chiffres :

> 4U D3P4R7, C3 73X73 V4 V0U5 P4R417R3 D1FF1C1L3 4 L1R3, PU15 V07R3 C3RV34U V4 R4P1D3M3N7 5'4D4PT73R 37 V07R3 L3C7UR3 V4 37R3 D3 PLU5 EN PLU5 FLU1D3.  
> 1L Y 4 M3M3 UN P3717 C073 EXC174N7, N'357-C3 P45 ?  
> V07R3 C3RV34U V0U5 PR0UV3 41NS1 QU3 R3FU53R L'3CR17URE 1NCLU5IVE 50U5 PR373X73 QU'3LL3 35T N0N L151BL3 357 UN F4UX 4RGUM3NT

Mais cela ne veut pas dire que je souhaite ignorer que la graphie particulière du point médian ("les utilisateur·ice·s"), du point de séparation ("les salarié.e.s"), des terminaisons néologiques épicènes ("æ") peuvent gêner certaines personnes, d'autant plus quand elles utilisent une synthèse vocale.

J'ai donc décidé d'utiliser avec parcimonie le point médian et quand je le fais, de "décorer" ces extensions inclusives d'un élément `span` ayant l'attribut `aria-hidden="true"` par le biais de mon [plugin de correction microtypographique pour Jekyll](https://github.com/borisschapira/jekyll-microtypo/).

De [toutes les possibilités](https://codepen.io/vincent-valentin/full/woGLVL 'Abbréviations inclusives, un CodePen par Vincent Valentin'), cela m'a semblé être la plus logique à mettre en œuvre _pour moi_, étant donné que j'étais capable d'en surmonter la complexité technique.

---

<span id="disambiguation">Pour éviter les malentendus</span> :

**Oui**, c'est une évolution de la langue française. Mais ce n'est pas une nouveauté, c'est plutôt un retour en arrière, où les deux pratiques coexistaient avait le XVIIe siècle. Racine employait souvent l'accord de proximité. Voltaire n'écrivait pas dans le français jugé "légitime" par les réactionnaires d'aujourd'hui. Vous-même l'employez probablement souvent, en disant par exemple "des chants et des danses bretonnes" plutôt que "des chants et des danses bretons" par habitude[^proximite].

[^proximite]: "[L'accord de proximité du déterminant en français](https://journals.openedition.org/discours/pdf/9542)", Anne Abeillé, Aixiu An, Aoi Shiraïshi, PDF (403 Ko)

**Non**, ça n'est pas parfait, ni dans l'usage ni dans la graphie, et je suis prêt à faire évoluer ma position si on me propose mieux.

**Oui**, c'est complètement idéologique donc ce n'est pas la peine de le souligner. Permettez-moi, en revanche, de souligner que continuer à utiliser une langue sexiste est également un choix, que vous le revendiquiez ou non.

**Non**, ce n'est pas absolu et je n'oblige personne à pratiquer ces techniques, pas plus que je ne m'y oblige moi-même dans d'autres contextes, notamment professionnel.

---

Je comprends la réticence de certain·es face à ces règles. Dès lors qu'on touche à la langue, les réactions sont violentes, on l'a vu il y a peu avec la réforme de l'orthographe.

Nous sommes attaché·es à notre langue car elle est, culturellement, un marqueur fort de notre patrimoine national et je comprends l'agacement de celles et ceux qui voient ici un danger.

J'y vois, au contraire, une opportunité d'utiliser ce que nous avons de plus fort pour porter une valeur juste. Et je compte bien m'en servir.
