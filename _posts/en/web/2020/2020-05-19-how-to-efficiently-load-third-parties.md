---
title: 'How to Optimize Third-Party Services Performance'
thumbnail_background: '/assets/images/2020-05-20/swimmers-on-body-water-3772419.jpg'
canonical: 'https://blog.dareboost.com/en/2020/05/optimize-third-parties-performance/'
canonical_title: "Dareboost's Blog"
canonical_dismissed: true
description: >-
    Why and how to use the preload directive and the Resource Hints to optimize the load of your third party resources (fonts, videos, analytics…) and speed up your web pages.


tags:
    - 'Performance Web'
    - 3p
    - 'Third Parties and Resource Hints'
cloudinary_logo: dareboost-logo
slug: optimize-third-parties-performance
serie: 'Third Parties and Resource Hints'
translations:
    fr: optimiser-parties-tierces
last_modified_at: 2020-05-20 07:26:00 +0000
---

Embedding an existing library or service as a third party can increase productivity, but often has a cost on perceived performance. Once you embed external code, how can you ensure that this code will not affect the performance and interactivity of your site? Here are some ideas for a more efficient third party code.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

<figure>
{% capture img_alt %}A white water swimming race. No lanes, all the participants rush to the finish at the same time, even if it means colliding.{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/2020-05-20/swimmers-on-body-water-3772419.jpg"
alt=img_alt
caption="If nothing distinguishes your resources from third-party resources, they compete with each other."
%}
</figure>

Building a Front-End Web project is about fulfilling a set of business requirements through code. You can produce this code yourself or transfer this responsibility to libraries or services that have already proven themselves on the market.

When you reference one of these libraries or services from a web page rather than embedding it in your code, neither you nor the browser of the visitor has control over this resource, since it is produced, managed and hosted by a third party vendor. These are called "Third Party" (or "3p") resources.

## How does it work?

Using third-party resources, in HTML, is usually done through the `<script>` tag (which allows you to load and execute a script), `<link>` tag (which references resources later needed by the page) and `<iframe>` tag (which creates a completely different navigation context within the page). They are very commonly used.

According to [the Web Almanac 2019](https://almanac.httparchive.org/en/2019/third-parties),  93% of desktop pages include at least one third-party resource and nearly 76% of these pages query an analytics domain (such as Google Analytics, for example).

Third parties can concern a wide variety of areas: advertising, analytics, customer relationship, social network integration, marketing, user management, videos... Very often, references to these resources are gathered in a [tag manager](https://blog.dareboost.com/en/2018/04/how-tag-managers-impact-web-performance/), which centralizes their management and provides an entry point for [discussions about the third parties](https://blog.dareboost.com/en/2018/06/tag-manager-web-performance-best-practices/) used on the page.

Using third parties increases the productivity of your development teams (who delegate some features to these third parties). On the other hand, this will increase your operational cost, since you may have to pay for a software license, and most certainly monitor the proper functioning of this software component that you no longer have control over.

Note that you generally cannot request any changes to the way the third-party resources or services you use work: the fact that these resources are used by a very large number of sites means that the publisher is sheltered from individual pressures.

## What about performance?

While often criticized, third parties have an impact on rendering and usage performance that it is important to balance. If we take, for example, the most common JS libraries, served as third parties by CDNs: they are among the most efficiently delivered resources, with efficient minification and obfuscation, often coupled with low-latency CDNs. Although their use often degrades the Start Render, this is more often because [these scripts are loaded synchronously](/notes/2017-12-defer-script-to-speed-up-rendering/) rather than to their third-party status.

The biggest impact on performance comes from ads and social network scripts which cost on the network and performance is rarely outweighed by the features they provide to users, at least during the initial page loading phase.

One example is Facebook's "Like" button. Its interest from a user experience perspective is debatable, and it is certainly not relevant until the user has seen the content of the page. You should therefore always load it "lazyly" (late, in the process of loading the page).

Quite often, once you have assessed the relevance of your third parties and their respective loading modalities, you will certainly discover that the way you load your third parties can be optimized.

## Delaying a resource or service loaded too soon.

When a third-party resource (or several) is loaded before all the critical elements of the page have been displayed and became interactive, you may want to delay them. An example would be the loading of Youtube videos, located below the fold, consuming bandwidth even when they are not visible.

In this case, it will be necessary to revise the declaration of the `<script>`, `<link>` or `<iframe>` responsible for the inclusion of the third party resource in the site, so that this inclusion occurs later, deferred: either in reaction to an event raised during the loading of other resources or after an event provoked by the user (an issue of Lazy-Loading already discussed for [the loading of images](/notes/2019-03-lazy-loading-faster-webpages-seo-friendly/)).

## Prioritizing a resource or service that is too late in the queue

If you are using third parties to define or improve the design (fonts, JS scripts that define the dimensions of elements in the layout), or even to retrieve part of the content to be displayed, you will want to prioritize their loading and usage. However, very often, the use of these resources is slowed down by:

- the **DNS resolution** of the origin that hosts them
- the **connection** to this origin
- the **downloading** of these resources

How to tell the browser the behavior to adopt to optimize their loading? Have a look at [my previous article on Preload and Resource Hints](/notes/2020-05-preload-prefetch-preconnect-resource-hints/)!

## The Googles Fonts case

When it comes to web fonts, Google Fonts are predominant: according to the Web Almanac 2019 (["Fonts" chapter](https://almanac.httparchive.org/en/2019/fonts)), at least 74% of web font requests come from Google Fonts, and 29% of pages contain a link to a Google Fonts CSS style sheet.

This type of request presents a real risk because the loading of a CSS stylesheet is synchronous. The browser interrupts the rendering of the page while it requests, downloads, and analyzes the CSS file. The request represents a Single Point of Failure (SPOF): if there is no response, then the page remains frozen. It is very easy to [simulate such a failure with Dareboost](https://www.dareboost.com/en/doc/website-speed-test/settings/dns-mapping-blackhole) (targeting fonts.googleapis.com).

To mitigate this, you can use asynchronous loading techniques based on [attribute alterations](https://www.filamentgroup.com/lab/load-css-simpler/) or [JavaScript libraries](https://github.com/filamentgroup/loadCSS) that expose the life cycle of your fonts.

A simpler optimization is to download Google Fonts. A feature offered natively on the Google Fonts site but also available via [Mario Ranfti's Google Webfont Helper tool](https://google-webfonts-helper.herokuapp.com/fonts) which will help you generate the CSS file to declare them.

By doing so, however, you will lose the benefit of Google Fonts content negotiation, [detailed in this article by Barry Pollard](https://www.tunetheweb.com/blog/should-you-self-host-google-fonts/). In short: Google Fonts optimizes the CSS file it delivers to provide the right font formats and character sets for the requesting browser.

At the moment, the best solution may be to use a resource proxy. On the surface, these are **your** sub-domains that serve the third-party resources you need. Under the hood, they are web applications that perform resource fetching and caching on external domains, filtering the information sent to those domains ( forwarding what is relevant for content negotiation but not privacy-related data). With such a tool, you serve fonts from your domain, while benefiting from Google Fonts content negotiation. This technique, also available for JavaScript scripts, is well described in this article from Decitre Tech team: "[Limiting the damage of third party JS loading [FR]](https://tech.decitre.fr/posts/optimiser-chargement-js-tiers)".

Cette technique, complexe, n’est pas à la portée de tout le monde. Une alternative est donc d’utiliser un mélange de `preload` (pour la feuille de style CSS) et de `preconnect` (au domaine servant les polices) pour bénéficier de la meilleur optimisation possible. Harry Roberts traite ce sujet en détail dans un article paru aujourd’hui-même : "[The Fastest Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/)".

## Conclusion

Third-party resources or services provide features to your site, but the way they are loaded may negatively impact the user experience. To optimize their usage, start by determining the tradeoffs that need to be made to prioritize each item. Once these priorities are determined, then you can delay or prioritize third-party loading to get the most out of it, sometimes by delivering them through your domain (first-party), either directly or through a proxy.
