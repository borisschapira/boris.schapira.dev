---
title: 'Netflix: how to increase video brightness'
i18n-key: bookmark-netflix-brightness
date: '2018-08-08'
type: post
tags:
    - Netflix
locale: en_US
---

My kids are on vacation with their grandmothers, which leaves me a lot of free time to binge-watch TV shows on Netflix. Except I often get the impression that the Netflix videos are darker than they ought to be, aren't they?

<!-- more -->

So, between a PS4 game[^ps4] and a novel chapter[^lire] (because there's a life outside Netflix), I made a little bookmarklet that increases the brightness of the current video by 50%. To use it:

[^ps4]: I am playing "Arkham Knight" by Rocksteady, and it's a blast. I have a great time and I think a lot about my former colleague Stéphane, [brilliant inventor of the famous "Batou" that the Joker uses to address Batman – the French equivalent to "Bats" –](https://nota-bene.org/Trois-jolis-souvenirs-de-traduction), which gives the game a special flavor.
[^lire]: I'm reading "[The Golden Fool](https://en.wikipedia.org/wiki/The_Golden_Fool)" by Robin Hobb, second volume of the "Tawny Man Trilogy", which itself is part of the "The Realm of the Elderlings" series from which I have already read the seven previous books. And I plan to also read the next eight right within a year.

{:.canonical}
Click and drag the following link in your bookmarks bar : <!-- nomicrotypo --><a href="javascript:(function(){[...document.getElementsByTagName('video')].forEach(function(video){video.setAttribute('style',video.getAttribute('style')%7C%7C''+'filter: brightness(150%);');})})()" title="Increase Video Brightness">Netflix☀️</a><!-- endnomicrotypo -->

Then go to Netflix, launch your favorite series or movie and click on "Netflix☀️"!

Pleas note that this bookmarklet should work everywhere, not just on Netflix. One click on the bookmarklet and your browser will increase the brightness of all the videos on the current page.

I tested on Firefox and Chrome, latest versions, on Mac. I will not go any further, nor will I provide support. Consider this snippet of code as being under [WTFPL license](https://en.wikipedia.org/wiki/WTFPL).