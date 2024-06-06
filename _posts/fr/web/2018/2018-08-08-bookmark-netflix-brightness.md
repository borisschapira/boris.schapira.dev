---
title: 'Netflix : augmenter la luminosité des vidéos'
tags:
    - Netflix
slug: bookmark-netflix-luminosite
last_modified_at: 2019-04-18
translations:
    en: bookmark-netflix-brightness
---

Mes enfants sont en vacances chez leurs grand-mères, ce qui me laisse beaucoup de temps libre pour binge-watcher des séries TV sur Netflix. Sauf que je trouve que sur Netflix, l'image est souvent trop sombre. Pas vous ?

<!-- more -->

Du coup, entre une partie de PS4[^ps4] et un chapitre de roman[^lire] (parce qu'il y a une vie en dehors de Netflix), j'ai préparé un petit bookmarklet qui augmente la luminosité des vidéos de la page courante. Pour en profiter :

[^ps4]: Je joue à "Arkham Knight", de Rocksteady, et c'est une tuerie. Je passe d'excellents moments et je pense énormément à mon ex-collègue Stéphane, [auteur génial du célèbre "Batou" que le Joker utilise pour s'adresser à Batman](https://nota-bene.org/Trois-jolis-souvenirs-de-traduction), ce qui donne au jeu une saveur particulière.

[^lire]: Je lis en anglais "The Golden Fool" de Robin Hobb, deuxième tome de la "Tawny Man Trilogy" (en français, le découpage est différent. D'après Wikipédia, je suis en train de lire "[Serments et Deuils](https://fr.wikipedia.org/wiki/Serments_et_Deuils)"), qui elle-même fait partie de la saga "The Realm of the Elderlings" dont j'ai déjà lu les sept livres précédents (en français, cela fait 18 livres). Et je compte bien lire les huit suivant aussi (soit l'équivalent de 17 livres français) dans l'année !

Cliquez-glissez le lien suivant dans votre barre de favoris[^rename] :

<!-- nomicrotypo -->

<a href="javascript:(function(){var a=prompt('Video brightness?','100%');a=/^\d+(\.\d+)?%\$/.test(a)?a:'100%';Array.from(document.getElementsByTagName('video')).forEach(function(b){b.setAttribute('style',b.getAttribute('style')+'filter:brightness('+a+');')})})();" title="Gérer la luminosité des vidéos">Gérer la luminosité des vidéos</a>

<!-- endnomicrotypo -->

[^rename]: N'hésitez pas à renommer le favori avec un libellé plus court. Par exemple, j'utilise l'émoji ☀️ (soleil).

Ensuite rendez-vous sur Netflix, lancez votre série ou film préféré et cliquez sur "☀️" !

{% include video_as_a_gif.html.liquid
url="/assets/images/2018-08-08/joker"
alt="Le Joker applaudit"
%}

Notez que cela doit marcher un peu partout, pas que sur Netflix. Un clic sur le bookmarklet et votre navigateur augmentera la luminosité de toutes les vidéos présentes sur la page, à condition que la page [ne verrouille pas les injections de style à l'aide d'une Content-Security-Policy](https://blog.dareboost.com/fr/2016/08/content-security-policy-securiser-site-web-xss/).

J'ai testé sur Firefox et Chrome, dernières versions, sur Mac. Je n'irai pas plus loin et n'assurerai pas le support ; considérez ce petit bout de code comme étant sous [licence WTFPL](https://fr.wikipedia.org/wiki/WTFPL).

<ins datetime="2019-04-18">Pressé·e ? Il y a aussi un bookmark pour [accélerer votre vidéo Netflix](/notes/2019-04-bookmark-netflix-vitesse/) ?</ins>
