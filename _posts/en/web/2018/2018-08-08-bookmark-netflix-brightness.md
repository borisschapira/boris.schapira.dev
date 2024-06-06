---
title: 'Netflix: how to increase video brightness'
tags:
    - Netflix
last_modified_at: 2019-04-18
translations:
    fr: bookmark-netflix-luminosite
---

My kids are on vacation with their grandmothers, which leaves me a lot of free time to binge-watch TV shows on Netflix. Except I often get the impression that the Netflix videos are too dark, or at least darker than they ought to be, aren't they?

<!-- more -->

So, between a PS4 game[^ps4] and a novel chapter[^lire] (because there's a life outside Netflix), I made a little bookmarklet that brightens the videos of the current page. To use it:

[^ps4]: I am playing "Arkham Knight" by Rocksteady, and it's a blast. I have a great time and I think a lot about my former colleague Stéphane, [brilliant inventor of the famous "Batou" that the Joker uses to address Batman – the French equivalent to "Bats" –](https://nota-bene.org/Trois-jolis-souvenirs-de-traduction), which gives the game a special flavor.

[^lire]: I'm reading "[The Golden Fool](https://en.wikipedia.org/wiki/The_Golden_Fool)" by Robin Hobb, second volume of the "Tawny Man Trilogy", which itself is part of the "The Realm of the Elderlings" series from which I have already read the seven previous books. And I plan to also read the next eight right within a year.

Click and drag the following link in your bookmarks bar[^rename] :

<!-- nomicrotypo -->

<a href="javascript:(function(){var a=prompt('Video brightness?','100%');a=/^\d+(\.\d+)?%\$/.test(a)?a:'100%';Array.from(document.getElementsByTagName('video')).forEach(function(b){b.setAttribute('style',b.getAttribute('style')+'filter:brightness('+a+');')})})();" title="Manage Video Brightness">Manage Video Brightness</a>

<!-- endnomicrotypo -->

[^rename]: Feel free to rename the bookmark with a shorter label. For example, I use the ☀️ (sun) emoji (and only that).

Then go to Netflix, launch your favorite series or movie and click on it!

{% include video_as_a_gif.html.liquid
url="/assets/images/2018-08-08/joker"
alt="The Joker is clapping."
%}

Please note that this bookmarklet should work widely, not just on Netflix. One click on the bookmarklet and your browser will increase the brightness of all the videos on the current page, provided that the page itself does not [prevent style injection with a Content-Security-Policy](https://blog.dareboost.com/en/2016/08/content-security-policy-secure-your-website).

I tested on Firefox and Chrome, latest versions, on Mac. I will not go any further, nor will I provide support. Consider this snippet of code as being under [WTFPL license](https://en.wikipedia.org/wiki/WTFPL).

<ins datetime="2019-04-18">In a hurry? There is also a bookmark to [speed up your Netflix video](/notes/2019-04-bookmark-netflix-speed/) ?</ins>
