---
title: 'Netflix: how to increase video speed'
tags:
    - Netflix
translations:
    fr: bookmark-netflix-vitesse
---

A few month ago, I published a blog post about [increasing Netflix videos' brightness](/notes/2018-08-bookmark-netflix-brightness/) and people seems to really dig it. But what if you really need to speed up your current episode to finish it before your bae arrives or slow down Beyoncé's moves to better learn one of her routine in HOMECOMING? No problem.

<!-- more -->

**Click and drag the following link in your favorites**:

<!-- nomicrotypo -->

<a href="javascript:(function(){var b=Number(prompt('Video playback rate?','1'))%7C%7C1;Array.from(document.getElementsByTagName('video')).forEach(function(a){a.playbackRate=b;a.play()})})();" title="Manage Video Playback Rate">Manage Video Playback Rate</a>

<!-- endnomicrotypo -->

Then go to Netflix, HBO Now, Hulu, or pretty much any streaming service using HTML videos[^1], launch your favorite series or movie, and click it!

[^1]: As explained in [the previous post](/notes/2018-08-bookmark-netflix-brightness/), if the website has defined a Content-Security-Policy blocking bookmarks, this won't work, sorry!

And if you want to manage both brightness and video playback rate without multiplying bookmarks, here's one that do both:

<!-- nomicrotypo --><a href="javascript:(function(){var c=Number(prompt('Video playback rate?','1'))%7C%7C1,a=prompt('Video brightness?','100%');a=/^\d+(\.\d+)?%$/.test(a)?a:'100%';Array.from(document.getElementsByTagName('video')).forEach(function(b){b.playbackRate=c;b.play();b.setAttribute('style',b.getAttribute('style')+'filter: brightness('+a+');')})})();" title="Manage Video Brightness and Playback Rate">Manage Video Brightness and Playback Rate</a><!-- endnomicrotypo -->

Feel free to rename the bookmark with shorter labels. For example, I use the ☀️ (sun) and 🏃‍ (running) emojis (and only that).

{% include video_as_a_gif.html.liquid
url="/assets/images/2019-04-17/bqueen"
alt="Beyoncé, dressed as a Queen she is on the Mrs. Carter Wordl Tour"
caption="Now you're the Queen."
%}
