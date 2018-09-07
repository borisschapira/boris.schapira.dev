---
title: 'One hosts file to block them all'
i18n-key: hosts
date: '2018-09-07'
type: post
tags:
    - WebPerf
locale: en_US
---

As a web performance specialist, people often ask me how to improve the performance of websites, and that's ok. Sometimes, they also ask me how to improve the performance of the Web on their own machine, for their own browsing experience. In that case, my answer is always the same: the lowest hanging fruit is most certainly the **hosts file**.

{% capture img_alt %}Gollum, holding the One ring in the Peter Jackson's adaptation{% endcapture %}
{% capture img_caption %}Yeah, well, I could have found a sexier illustration…{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2018-09-07/gollum.jpg"
alt=img_alt
caption=img_caption
%}

<!-- more -->

## Keeping the dirt away

Today's web is full of dirt. Most sites are full of trackers, ads, and lots of other nasty stuff that penalizes the loading of websites. To avoid this, AdBlockers are blooming[^pr]. They offer a quick and simple solution (most of the time, a browser extension) that blocks most of the unsolicited content.

[^pr]: Adblocking penetration rate in the US is ~30% on Desktop, ~12% on mobile, according to this [eMaketer study on Ad Blocking from March 2017](https://www.statista.com/statistics/351862/adblocking-usage/).

Unfortunately, as for the UX, AdBlockers don't deliver. They often increase the amount of memory and CPU cycles used by your web browser, slowing your browsing experience instead of boosting it. Some are doing better than others, and whole browsers[^brave] have been conceived over the idea of blocking unsolicited content, and are doing an incredible job. But the web is not confined to your browser, is it?

[^brave]: If you've never tested [Brave Browser](https://brave.com/), I can only encourage you to do so, and join the 4 million people that trust it to fix the web.

The Web is requested from everywhere in your computer. Most mainstream applications are as crammed with trackers as your next media website. Sometimes, you can even see the ads displayed in your UI (_Hello, Skype. Yes, I'm talking about you, naughty boy_).

The AdBlockers can't do anything about that. But a simple hosts file does.

## Hosts… what?

> The computer file **hosts** is an operating system file that maps hostnames to IP addresses. It is a plain text file.
> <cite>"[hosts (file)](https://en.wikipedia.org/wiki/Hosts_%28file%29)", on Wikipedia</cite>

Whenever your browser interacts with a website, it actually requests a server, located through its IP address, like 185.31.40.11 (IPv4) or 2a00:b6e0:1:20:2::1 (IPv6). Think about a postal address, it's pretty similar.

Now think about accessing a webpage, like <https://borisschapira.com>. How does your browser know which IP address to contact? Simple, the browser asks the Internet phone book. Well, one of them. And the phone book, called a <abbr title="Domain Name Server">DNS</abbr>, resolves the IP address for the browser.

I don't know about you, but I never use a phone book. Most of the times, I've collected the address of the people to whom I want to write to in my personal address book. That's the **hosts file** for you. Every time a process on your computer needs to access a resource on the Internet, it first goes through the hosts file to find out where to find it.

Now, let's say that you **don't want** this process to find the resource on the `badthings.com` domain. _Easy peasy lemon squeezy_, throw it on the wrong track by associating the `badthings.com` domain to an unspecified address like 0.0.0.0.

So basically, if someone makes a list of all the domains where bad things happen, we can redirect them all to 0.0.0.0 in our hosts file, and make **our own Web** a much cooler place.

## One project to gather them all

There is nothing new in what I am describing here. Cool people have been doing this for years, sharing their host files. Fake news websites, gaming platforms, pornographic hubs, encryption pages, fraud attempts, and scams are all patiently identified and listed in open access files.

I use [Steven Black's "hosts" project](https://github.com/StevenBlack/hosts), a python script, to cram them into [a single 2MB hosts file](https://raw.githubusercontent.com/borisschapira/hosts/master/hosts) containing more than 70k domains. If you're not familiar with the command line and use Windows, don't panic: the [hostsman](http://www.abelhadigital.com/hostsman/) app will help you achieve the same goal.

{% capture img_alt %}A screencapture from hostsman sources manager{% endcapture %}
{% capture img_caption %}You can manage Update Sources in hostsman{% endcapture %}
{% include rwd-image.html.liquid
path="/assets/images/2018-09-07/hostsman.png"
alt=img_alt
caption=img_caption
%}

In case you're wondering, I can and do alter the result with my own whitelist (otherwise blocked domains whose requests I don't want to prevent) and redirections (which allows me to write this article and check the result on https://borisschapira-dev.com:10443/, which actually points to my own machine).

I have been using this technique for years now and sometimes I forget that my hosts file protects me so much. Whenever I need to use someone else's computer, or temporarily disable my hosts file (for example, when I need to help a Dareboost clients understand the impact of third-party scripts on their pages), I realize the level of comfort it provides me.

Tweaking its own hosts file is a good but technical solution. It doesn't completely replace an AdBlocker (or I haven't aggregated enough files yet) but it's an incredible performance gain, which I highly recommend for everyday browsing.

Try it for yourself, and tell me what you think!

***

## Summary

Hosts files are your computer internal address books that guide Web requests to the right servers. Fill your hosts file with domains pointing to nothingness, and those requests will quickly and surely fail. People are sharing their hosts file for years. Solutions now exist to concatenate them, and crowdsource a solution to the dirty Web we've to deal with everyday.