---
title: 'Trackers on Your Domain, Revenue Risk'
tags:
    - 'Performance Web'
    - SEO
    - Security
    - 3p
slug: tracker-on-your-domain-revenue-risk
translations:
    en: trackers-sur-votre-domaine-ca-en-danger
---

News that may not seem related sometimes, in fact, are. If the law does not prevail, money will.

## 1<sup>st</sup> Party Trackers

> Collecting as much data as possible (and especially collecting it well) is one of the main issues for all brands. Nevertheless, faced with the growth of adblocking, the implementation of the General Data Protection Regulation (GDPR) and the ever-widening gap between the treatment of different types of cookies, some questions need to be asked.
>
> How to succeed **not to feel the impact of these elements** on its collection and therefore on its data-driven strategy? How to **preserve the quantity and the quality of its data**? And if, because of these elements, your Tag Management System (TMS) does not trigger? Have you wondered about the 1st party?

Here is the introduction you can read on the page "[How To Avoid Missing Out On Data Due to GDPR](https://www.eulerian.com/en/blog/tricks/avoid-missing-data-due-to-gdpr/)" on Eulerian's blog, one of the leading solutions for attribution (meaning, tracking).

If you didn't understand the rhetoric, it's simply a question of how to get around the lack of consent of Internet users (or even the clear expression of their non-consent when they install adblockers) to collect data anyways. The proposed "solution": hide the dirt under the carpet by hiding the script in a sub-domain of the brand.

For example, instead of sending data to `my_domain.eulerian.net`, the organization sends it to `43bdf.my_domain.com` and then ensures that `43bdf.my_domain.com` points to `my_domain.eulerian.net`.

The amount of ethical issues raised by this practice is significant, but it also raises security issues since, if not properly implemented, the manipulation can leak session data to a third party, leading to usurpation of the user session, critical data theft or defacing of the platform. A risk that tracking solutions providers don't highlight so much.

## A "Slow Page" Badge on Chrome?

Google has announced that they're going to experiment a badge to penalize slow sites.

Experiments of this type had already been carried out in 2015. "<span lang="en">Slow To Load</span>" and "<span lang="en">Red Slow Label</span>" badges have been [displayed on search results](http://www.redslowlabel.com/). This time, [Google advertises starting experiments in Chrome](https://blog.chromium.org/2019/11/moving-towards-faster-web.html).

{% capture img_alt %}Mobile screenshots{% endcapture %} {% capture img_caption %}Example of an experiment that could be carried out: when loading a slow moving page, the loading bar would be blue and the loading screen would display a warning badge. When loading a potentially fast page, the bar would be green.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-10-13/badge.png"
alt=img_alt
caption=img_caption
%}

Since the end of the 2000s, Google has multiplied initiatives around Web Performance. Since 2017, however, I have felt an acceleration, probably due to their desire to index the Web more accurately using probes [always equipped with the latest version of Chrome and running JavaScript](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html). A tendency around which new indicators have even been created, such as the [Time To (Consistently) Interactive](/notes/2019-05-measuring-interactivity-time-to-interactive/) which, while not being a good UX indicator, is an excellent end-of-load indicator for a bot.

## If the law does not prevail, money will

If you work in an organization that is considering masking third parties in a 1<sup>st</sup> Party domain, please **don't**, for ethical and security reasons.

If this is not enough for you, know that you will quickly lose experienced users who will develop and equip themselves with software that detect these scripts despite your manipulations, and will refuse to condone these schemes.

If you are still not convinced, I encourage you to [carefully monitor your Web Performance](https://www.dareboost.com/en/). If these third parties respond slowly, then it would slow Google's perception of your entire domain.

We already know that [the degradation of Web Performance impacts ranking](https://blog.dareboost.com/fr/2018/01/google-speed-update-vitesse-ranking/). With Chrome's experiments, it could impact visits to your entire _origin_. We are no longer talking about people who will think that their connection may be temporarily poor, but about people who **will be notified by Google that your site is slow**, and will leave.

Do you really want to take that risk?
