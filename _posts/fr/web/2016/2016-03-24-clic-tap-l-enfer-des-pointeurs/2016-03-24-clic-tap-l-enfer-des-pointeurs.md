---
title: 'Clic, Tap, l''enfer des pointeurs'
date: '2016-03-24'
type: post
locale: fr_FR
---

## Le problème

Vous devez réaliser une interface <abbr title="Responsive Web Design" lang="en">RWD</abbr>, capable de déclencher des méthodes JavaScript au clic comme au toucher. Traditionnellement, nous faisions un test de support pour savoir si le toucher était disponible. Si oui, nous nous abonnions aux événements tactiles : `touchdown`, `touchstart`… et sinon, aux événements de la souris (`click`).

Cette approche est valable sur les périphériques qui ne proposent que le clic (les ordinateurs de bureau, par exemple), ou que le tactile (comme les téléphones portables). Par contre, sur un périphérique qui proposerait les deux (comme un ordinateur portable à écran tactile), elle exclut du clic les utilisateurs (puisque le tactile est disponible, c'est lui qui prend le pas).

Sur d'autres matériels, un appui sur l'écran produit un `click` **ET** un `touchend`.

### Note : comment tester ?

Sur Chrome : il est possible d'activer les évènements tactiles en utilisant les DevTools **et**, sur les versions récentes de Chrome, en activant un _flag_ (allez sur [chrome://flags/](chrome://flags/), cherchez "touch").

Je n'ai pas essayé avec Firefox, IE et Edge.

## Solution

Le W3C a normalisé une nouvelle famille d'événement : les événements de pointeurs ([Pointer Events](https://www.w3.org/TR/pointerevents/)). Il s'agit non plus de se demander si nous sommes en présence d'un clic ou d'un toucher mais de dire que les deux sont des événements de pointeurs. Plutôt que de s'abonner à ces événements, nous allons donc nous abonner aux événements de pointeurs, et le navigateur se débrouille pour gérer l'hétérogénéité des pointeurs en question (souris, toucher, pointeur laser… on peut imager plein de choses).

Du coup, plutôt que de faire ça (qui n'est pas idéal puisque certains ordis produiront deux fois "Coucou" quand on appuie sur l'écran, si vous avez suivi) :

```
$('selector').on('click touchend',function(){
   alert('Coucou');
})
```

On fera :

```
$('selector').on('pointerdown',function(){
   alert('Coucou');
})
```

Évidemment, comme d'habitude, il faut faire attention à la compatibilité navigateur qui, au moment où j'écris ces lignes, est assez balbutiante : [http://caniuse.com/#feat=pointer](http://caniuse.com/#feat=pointer)

Mais heureusement, il existe un _polyfill_ maintenu par la fondation jQuery : [https://github.com/jquery/PEP](https://github.com/jquery/PEP), qui fera ce qu'on lui demande dès IE10.

