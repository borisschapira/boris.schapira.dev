---
title: 'Netflix : augmenter la vitesse des vidéos'
i18n-key: bookmark-netflix-speed
tags:
    - Netflix
slug: bookmark-netflix-vitesse
---

Il y a quelques mois, j'ai publié un article sur
[l'augmentation de la luminosité des vidéos Netflix](/2018/08/bookmark-netflix-luminosite/)
et il a eu un certain succès. Mais que faire si vous avez vraiment besoin
d'accélérer votre épisode en cours pour le terminer avant que votre bae arrive
ou ralentir les mouvements de Beyoncé pour mieux apprendre une de ses chorés
dans HOMECOMING ? Pas de problème.

<!-- more -->

**Cliquez-glissez ce lien dans vos favoris**:
-><!-- nomicrotypo --><a href="javascript:(function(){var b=Number(prompt('Video playback rate?','1'))%7C%7C1;Array.from(document.getElementsByTagName('video')).forEach(function(a){a.playbackRate=b;a.play()})})();" title="Gérer la vitesse de lecture des vidéos">🏃</a><!-- endnomicrotypo --><-

Allez ensuite sur Netflix, OCS, Molotov, ou n'importe quel service de streaming
utilisant des vidéos HTML[^1], lancez votre série ou film préféré, et cliquez
dessus !

[^1]:

    Comme expliqué dans
    [le billet précédent](/2018/08/bookmark-netflix-luminosite/), si le site Web
    a défini une Content-Security-Policy bloquant les favoris, cela ne marchera
    pas, désolé !

Et si vous voulez gérer à la fois la luminosité et la vitesse de lecture vidéo
sans multiplier les signets, en voici un qui fait les deux à la fois:
-><!-- nomicrotypo --><a href="javascript:(function(){var c=Number(prompt('Video playback rate?','1'))%7C%7C1,a=prompt('Video brightness?','100%');a=/^\d+(\.\d+)?%$/.test(a)?a:'100%';Array.from(document.getElementsByTagName('video')).forEach(function(b){b.playbackRate=c;b.play();b.setAttribute('style',b.getAttribute('style')+'filter: brightness('+a+');')})})();" title="Gérer la luminosité et la vitesse de lecture des vidéos">☀️🏃</a><!-- endnomicrotypo --><-

{% include video_as_a_gif.html.liquid
url="/assets/images/2019-04-17/bqueen"
alt="Beyoncé, habillée en reine, pendant Mrs. Carter World Tour"
caption="À vous d'être Reine !"
%}
