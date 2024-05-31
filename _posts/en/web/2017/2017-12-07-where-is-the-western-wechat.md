---
title: 'Where is the Western WeChat?'
canonical: 'https://blog.clever-age.com/en/2017/12/06/where-is-the-western-wechat/'
canonical_title: "Clever Age's Blog"
tags:
    - 'Performance Web'
    - 'User eXperience'
    - Images
publishDate: '2017-10-29'
cloudinary_logo: clever-logo
translations:
    fr: ou-est-le-wechat-occidental
---

China is unquestionably changing the way Internet integrates our daily lives with its mobile app [WeChat](https://blog.clever-age.com/en/2017/05/19/10-ways-to-leverage-wechat-for-your-business/). How does this impact the web in the Western world?

{% capture img_alt %}A hand holding a phone in front. There are many Android apps listed in a menu.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-12-07/pexels-photo-50614.jpg"
alt=img_alt
%}

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

## WeChat is reinventing the way we use the web

WeChat is not your typical social network. It works as a platform connecting the user to a large set of services: discovery of new products, B2B, B2C or C2C interactions, reservation booking, access to information, payment, etc. WeChat offers a wide array of possibilities, as it aims to act as a single locus for a variety of micro apps, each offering a specific specialized service. WeChat is basically a service center running on top of the mobile phone’s OS.

{% include media/video_iframe.html.liquid url="https://static01.nyt.com/video/players/offsite/index.html?videoId=100000004574648" width="480" height="321" title="How China is changing the Internet – New York Times" %}

## Why hasn’t anybody developed a similar service on this side of the planet?

Facebook has tried and failed on several accounts, due to multiple factors. First of all, our market is subject to much more constraints. China’s access to the rest of the world may be limited by the Great Firewall[^1], but its internal market is fairly liberal. Privacy protection is in its infancy, control standards are extremely low and the occasional regulations are quite lax (contrary to the EU, whose approach is antithetical)[^2].

Besides, the app stores present a number of limitations. Apple’s business model, the App Store, implemented about 10 years ago and imitated by Google for Android, is the norm today and generates several billion dollars of annual revenue. It enables developers to distribute and sell their apps while also allowing them to charge their users through in-app purchases. The app store’s owner guarantees the diversity of offers while providing a coherent user experience, all the while taking a commission for paid apps sold through the store.

## The rigidity of app stores

Despite its assets, the app store system is reaching its limits. The user is buried under an overwhelming offering sorely lacking context. In quite a few emerging markets, the number of alternative stores is going through to the ceiling, with some stores offering apps adapted to lower-end devices on which ‘regular’ apps cannot run.

In addition, in such a centralized system, service discovery becomes problematic. By gathering the applications offering, the app stores are making it less circumstantial, less local and less targeted. As a result, service proposal is less efficient. By offering local services based on the user and their network, WeChat provides a better system: often, instead of searching through an app store, WeChat users will directly scan a QR code giving them access to a service they need then and there.

## The western wechat may already be in your pocket

So where is the Western WeChat? Well, turns out it may already be out there. We already have apps that can host other apps, create interconnections between services and Web content, offer services without having to go through the app store middle man and its unnecessary hurdles. Are you thinking of Facebook? Well, actually, I meant browsers. Google has taken advantage of its browser Chrome’s supremacy to jump on the bandwagon by massively enabling native-like web apps, and even invented "[Progressive Web Apps](https://blog.clever-age.com/en/2017/03/23/progressive-web-apps-to-boost-your-services-ux/)" (PWAs), thereby disrupting its own business model – something Apple seems reluctant to do. Alphabet, Google’s parent company, finally found a way to make PWAs actual applications, including in terms of user experience ([Twitter Lite](https://mobile.twitter.com/), for instance, is a PWA version of Twitter which is every bit as good as its native counterpart).

## The end of app stores?

Appealing as it may be, the disappearance of app stores would raise a couple of issues. It would mean the dilution of brand presence, i.e. the ability for a user to find their favorite brands in a service directory. What’s more, PWAs’ payment module capabilities are not as elaborate and comprehensive as those of app stores. That being said, Apple or Google could easily turn their app stores into PWA directories. They could keep automated quality control mechanisms (such as [Lighthouse](https://developers.google.com/web/tools/lighthouse/)) while delegating the inventory aspect to editors. As for QR codes, which are much less successful in Western countries, they will very likely be supplemented by other discovery modes: fine geolocation, digital assistance potentially integrated into a chatbot platform, and so on. Google is also at the forefront of these issues with services such as Google Now and Google Allo.

## What about payment?

Say you’re into running and looking to track your runs. Not knowing which app to install, you make a Google research and find a specialized website. Upon your third visit to the website, your browser suggests you try the corresponding app. In the app, you find a tracking tool that suits your needs. A few months later, the app warns you that an analysis of your running data revealed you may be an underpronator. In partnership with a major sports brand, the app recommends a new pair of running shoes that fits your pronation type. With your Google profile, it has access to your banking and shipping information; you smoothly proceed with payment directly through the app.

{% capture img_alt %}A person is sitting on the floor, she is in sportswear. The goal is focused on his right shoe, which is a running shoe.{% endcapture %} {% capture img_caption %}Web, application and purchase combined into one frictionless, transparent experience for the user.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-12-07/pexels-photo-260290.jpg"
alt=img_alt
caption=img_caption
%}

This topic will certainly define the web in the coming months, if not the coming years. It is [one of the hot topics being discussed at the W3C](https://www.w3.org/Payments/ 'Web Payments at W3C: Making Payments Easy on the Web'). Soon, OS companies will likely introduce PWAs containing a set of libraries in order to facilitate and supervise payment in exchange for a commission, under a standard such as the [Payment Request API](https://developers.google.com/web/fundamentals/payments/). It is a substantial market and the key players will fiercely fight for their share.

Google may try penetrating this market by playing the web performance card with its AMP technology[^3]: this alternative to HTML could be an indirect way to take control of the web and its monetization strategies (while guaranteeing better indexing capabilities at a cheaper cost, which is crucial when data is the primary resource of your activity and bandwidth is one of your largest cost centers). Unsurprisingly, payment is one of the main themes of the AMP [roadmap](https://www.ampproject.org/roadmap/) this quarter.

All these factors strongly suggest that PWAs will gradually be integrated into Google Play’s applications offering.

## TL;DR: Google has entered the race, and is moving fast

WeChat is revolutionizing the web and mobile scenes in China, but repeating the same formula in the West is not an easy task. Many players (starting with Facebook) have tried and subsequently failed. The growing presence of Chinese companies will most likely initiate a new software evolution for the web through browsers, PWAs, search engines and geolocated services – and Google (Alphabet) is at the cutting edge of these four fields.

And this new revolution cannot take place without significant progress being made in terms of web payment standards, a topic the W3C is actively working on.

[^1]: See Clever Age's article: "[How to operate in China?](https://blog.clever-age.com/en/2014/07/28/how-to-operate-in-china/)".
[^2]: See Clever Age's article: "[General Data Protection Regulation: Small guide for Business](https://blog.clever-age.com/en/2017/01/19/general-data-protection-regulation-small-guide-for-business/)".
[^3]: On this topic, also see: "[AMP Project booste le chargement des pages web](https://blog.clever-age.com/fr/2016/02/08/amp-project-booste-le-chargement-des-pages-web/)" (In french).
