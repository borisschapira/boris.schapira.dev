---
title: 'Premier Test de mise en forme'
subtitle: 'un test de suivi'
sitemap: false
norobots: true
slug: test-typo
last_modified_at: 2019-04-09
translations:
    en: typo-test
---

Ceci est un article destiné à tester le respect de certaines règles microtypographiques par mon site.  
Ne tenez pas compte du contenu ci-dessous.

<!-- more -->

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

Lorem ipsum dolor sit amet, consectetur adipiscing elit. A primo, ut opinor, animantium ortu petitur origo summi boni. Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Esse enim quam vellet iniquus iustus poterat inpune. Duo Reges: constructio interrete. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. A primo, ut opinor, animantium ortu petitur origo summi boni. Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Esse enim quam vellet iniquus iustus poterat inpune. Duo Reges: constructio interrete. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. A primo, ut opinor, animantium ortu petitur origo summi boni. Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Esse enim quam vellet iniquus iustus poterat inpune. Duo Reges: constructio interrete. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

### Jekyll microtypo

**Thin spaces**

Hello ! 4 px, 5 % ?

**Median point (french)**

Il·Elle est intéressé·e.  
Ils·Elles sont intéressé·es.

**Numeral**

She's n°3.

**Ellipsis**

I'm good...

**Ordinals (french)**

Si je double le 2ème, je deviens 1er.

**Non-break spaces**

2001 : l'odysée de l'espace

**Currencies**

- 599\$, donc 599 €.
- \$599, so € 599

**Multiply**

Resolution: 1024x768.

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.
>
> <cite>"[Book](#the-book)", Author</cite>

<a id="the-book">The book</a>.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
        - Ac tristique libero volutpat at
        * Facilisis in pretium nisl aliquet
        - Nulla volutpat aliquam velit
- Very easy!

Ordered

1.  Lorem ipsum dolor sit amet
2.  Consectetur adipiscing elit
3.  Integer molestie lorem at massa

4)  You can use sequential numbers...
5)  ...or keep all the numbers as `1.`

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
    return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| --- | --- |
| data | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| --: | --: |
| data | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext | extension to be used for dest files. |

## Links

https://www.autolink.com

[link text](https://boris.schapira.dev)

[link with title](https://boris.schapira.dev 'title text!')

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

[^second]: Footnote text can be long lorem ipsum dolor sit amet, consectetur adipiscing elit. Primum cur ista res digna odio est, nisi quod est turpis? Ita nemo beato beatior. Duo Reges: constructio interrete. Sed tu istuc dixti bene Latine, parum plane. Polemoni et iam ante Aristoteli ea prima visa sunt, quae paulo ante dixi

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1 with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1 ~ Definition 1

Term 2 ~ Definition 2a ~ Definition 2b

### Abbreviations

This is <abbr title="Hypertext Markup Language">HTML</abbr> abbreviation example.

### Insertion

Lorem ipsum dolor sit amet, <ins datetime="2018-12-26">consectetur</ins> adipiscing elit. Addebat etiam se in legem Voconiam iuratum contra eam facere non audere, nisi aliter amicis videretur. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Amicitiam autem adhibendam esse censent, quia sit ex eo genere, quae prosunt.

<ins class="bloc" datetime="2018-12-26">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Addebat etiam se in legem Voconiam iuratum contra eam facere non audere, nisi aliter amicis videretur. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Amicitiam autem adhibendam esse censent, quia sit ex eo genere, quae prosunt.</ins>

## Rich figcaptions

{% capture img_alt %}Deux post-its, comparant l'Agile façon Cargo Cult et les vraies livraisons successives{% endcapture %} {% capture img_caption %}"[Doing Agile, being Agile](https://www.flickr.com/photos/psd/9588038559)", par [Paul Downey](https://www.flickr.com/photos/psd/) — [Certains droits réservés](https://creativecommons.org/licenses/by/2.0/){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-04-02/doing_vs_being_agile.jpg"
alt=img_alt
caption=img_caption
%}
