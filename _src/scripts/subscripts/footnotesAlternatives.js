/************************************************
  My markdown to HTML Engine does not add
  alternatives to the footnotes return arrows so
  I decided to add them myself, in JS.
************************************************/
var lang = document.getElementsByTagName('html')[0].getAttribute('lang'),
  alternatives = {
    to: {
      en: 'footnote',
      fr: 'note de bas de page',
    },
    back: {
      en: 'return to the text',
      fr: 'retour au texte',
    },
  };

var i,
  textnotes = [...document.querySelectorAll('.footnote-ref a')],
  footnotes = [...document.getElementsByClassName('footnote-backref')];
for (i = 0; i < textnotes.length; i++) {
  textnotes[i].setAttribute('title', alternatives.to[lang]);
}
for (i = 0; i < footnotes.length; i++) {
  footnotes[i].setAttribute('title', alternatives.back[lang]);
}
