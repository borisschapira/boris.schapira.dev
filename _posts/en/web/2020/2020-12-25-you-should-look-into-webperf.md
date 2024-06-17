---
title: You should look into WebPerf

tags:
    - 'Web Performance'
slug: you-should-look-into-webperf
canonical: https://calendar.perfplanet.com/2020/you-should-look-into-webperf/
canonical_title: 'the Web Performance Advent Calendar'
translations:
    fr: tu-devrais-faire-de-la-webperf
---

Dear fellow web professional, you should be interested in Web Performance. It's a topic that is at the heart of the web, which needs specialists, and is booming. I know you don't believe me, or that you think that this is not easy and you're right. So let me tell you where we stand. and why we need you to join us.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

I have been doing Web Performance, or webperf, for more than ten years. I have spoken publicly for the first time in 2012 [^1]. I was suggesting that it was necessary to approach the subject in four steps: first become aware of the stakes, then learn to optimize, monitor performance and finally, engage internal discussions about it internally in order to avoid future damage.

[^1]: "<a href="https://boris.schapira.dev/community/performance-web/" hreflang="fr">Mettre en place une stratégie de performance web</a>" during <span lang="fr">Sud Web 2012</span>.

Eight years later, I still think it's the best way to approach the subject. But around me, people don't necessarily talk a lot about web performance. For all those who have not necessarily followed where we are, let's take a look at the subject.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_Loving_it_re_jfh4.png"
alt=""
%}

The field knowledge is dense, but my goal is not to stifle you with information. If you want to go further, you'll find lots of footnotes leading to additional readings.

## A status update

Let's start with some _definitions_.

Webperf is all you can do to make your site be _feel_ as more efficient by a user. You start from the user experience of your site or web app (including animations), then you explore the underlying layers: HTML, CSS and JS code, the server configuration and finally an analysis of the infrastructures and third party services that you allow yourself to use, and their configuration.

Since a high-performance site _consumes less energy_, web performance shares 90% of its DNA with eco-design. But some good web performance practices, such as the use of <abbr title="Content Delivery Network">CDN</abbr>, are not compatible with ecological considerations [^2].

[^2]: Romuald Priol talks about it very well in his post "[The digital impact: best practices for a greener web](https://news.infomaniak.com/en/green-web/)".

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_Eco_conscious_re_r2bs.png"
alt=""
%}

It is usually implied that a faster application is more satisfying, but with web perf, _we have figures that confirm it_. Many brands have commissioned optimization projects and testify to the gains obtained, especially on the conversion. [WPOStats.com](https://wpostats.com/) provides case studies and experiences demonstrating the impact of web performance optimization on user experience and commercial success. This is an essential aspect because it means that webperf is an area of web quality whose return on investment is provable. As a result, investment is facilitated.

Optimising web performance is a skill, and by recognising that skill with the appropriate compensation, there is a better chance of attracting talent to this area. There is a good dynamic in the community, which is nourished by articles on different expertises within web performance. It helps the whole community to grow.

Vitaly Friedman's "Front-End Performance Checklist" is one of the most comprehensive resources. It's an in-depth review that is updated annually in Smashing Magazine. The problem is that you can't simply point anyone to this kind of file: 53 pages resulting in a 13-page operational checklist [^3] is not within everyone's reach: it’s a high barrier to entry.

[^3]: "[Front-End Performance Checklist 2020: the PDF](https://www.dropbox.com/s/k1oxe5vyrli83zf/performance-checklist-1.3.pdf?dl=0)", 166 Ko.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_track_and_field_33qn.png"
alt=""
%}

To get to the heart of the matter faster, you can use one of the many _analysis tools and services_ available in browsers or as services. These tools, called "synthetic" or "lab" tools, are very useful: they analyze a page load and instantly produce a contextualized audit report that helps you target the essential, potential issues [^4]. They can often be used to perform tests with custom constraints. You can make assumptions like "I think this JavaScript script execution slows down the page rendering", and then confirm it by blocking this file and seeing if the display really happens faster. You can also easily measure the performance of a page against the same page of competitors' website.

[^4]: [Dareboost](https://www.dareboost.com), which I work on, is one of those tools and I'm very proud of it, but it's far from being the only one. [Calibre](https://calibreapp.com/), [Speedcurve](https://speedcurve.com/), [GTMetrix](https://gtmetrix.com/), [Pingdom](https://www.pingdom.com/), among others, also offer instant reports and tracking. Development teams can also use [Lighthouse](https://developers.google.com/web/tools/lighthouse/) or [WebHint](https://webhint.io/) on their computers.

But the strength of these services is also their weakness: they only measure what they are asked to measure. They can't tell if the sites are fast _for people_. If you need to get this information, you will have to turn to analytics or real user metrics (RUM). The analytics services you already use, like Google Analytics, may track sufficient web performance Real User Metrics (RUM) [^5], but to go further in assessing user frustration, you will have to turn to more elaborate solutions [^6]. However, you'll often need to get your hands into your code to implement this.

[^5]: For example, [Google Analytics](https://support.google.com/analytics/answer/1205784?hl=en). Personally, I use Matomo.

[^6]: About this, see "[User Experience & Performance: Metrics that Matter](https://www.youtube.com/watch?v=nEHsHioWY1U&feature=youtu.be)", by Philip Tellis.

However, if your website is public and receives a lot of visits, you can use _field data collected by others_. These datasets are handy, because they are accessible without installing anything on the sites and therefore, as with synthetic tools, you can make comparisons between sites. The data is not necessarily difficult to retrieve, but may be incomplete (for example, only reporting the performance of Chrome's users, not the other browsers [^7]).

[^7]: I'm talking about the [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report), also known as CrUX.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_Data_re_80ws.png"
alt=""
%}

It can often take time to understand field data. Interpreting the results is very complicated because many factors can affect the measured performance [^8]. If you have a hunch about something, see if you can validate it by cross-checking with other data, or through synthetic tests.

[^8]: "<a href="https://www.youtube.com/watch?reload=9&v=9PBeqHXk7zw&feature=youtu.be" hreflang="fr">Comment interpréter les mesures de performance réelles (RUM metrics)</a>", by Gilles Dubuc.

### In a nutshell

Today, the technical knowledge on web performance is largely consensual and testable via automated analysis tools. Generic field data is relatively easily accessible if you know where to look, and provides feedback on the implemented optimizations, the cost of which is easy to finance and the gain to measure.

And yet... if you look at the field data, you can see that the performance of most sites isn't really improving, for example looking at First Contentful Paint, one of the well-known metrics for measuring when the page starts becoming useful, we see no real change over time:

{% capture img_alt %}Evolution of the First Contentful Paint metric from January 2017 to August 2020, measured in Mobile and Desktop contexts. In both cases, fluctuations are present and often correlated between the two contexts, but overall, the average value shows little variation or even deterioration.{% endcapture -%}{% capture img_caption %}Evolution of the First Contentful Paint metric from January 2017 to August 2020. Source: <a href="https://httparchive.org/reports/loading-speed#fcp">HttpArchive</a>{% endcapture -%} {% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/timeseries_fcp.png"
alt=img_alt
caption=img_caption
%}

This means that the situation must not improve, as you may think. Let's take a little tour of the things that are still difficult.

## The road ahead of us

Like many web quality topics, web performance is everyone's business. To improve the performance of a site, you must not only understand where problems come from, but also be able to determine who are the right people to contact to solve them. Since webperf concerns all the aspects of the web, you will soon find yourself having to talk to very different people. Even on seemingly simple issues.

Let's take the example of image optimization. When you say it like that, it sounds simple and a lot of people will feel like they understand. But in order to approach the topic in its entirety, you have to:

-   Train people to choose the best format based on the image
-   Control the addition of images and trigger the optimization and generation of several image variants depending on the context and artistic direction, to avoid oversized images
-   Modify the HTML markup and/or possibly set up an image proxy with content negotiation (internal or external), so that every user receives an image adapted to their own context.

And I haven't even talked about [lazy loading](https://www.smashingmagazine.com/2019/05/hybrid-lazy-loading-progressive-migration-native/) yet.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_image_viewer_wxce.png"
alt=""
%}

When you start talking about web performance in the enterprise, you’ll quickly find, _the hardest part is not necessarily the technique_: It's also about getting different professions to talk together to get an overview of the situation and the actions to be taken.

This is especially true, since it is sometimes difficult to talk about the same thing. There are really _a lot of different metrics_ and as if that wasn't enough, new metrics appear regularly. There are some metrics that have been used a long time, such as the Speed Index [^9], a reference indicator for almost 10 years. Others are misnamed, or do not allow for decision-making, or inform about something that is not necessarily paramount. It is therefore necessary to constantly question not only the metrics themselves, but also the way in which they are measured.

[^9]: "[Speed Index: what is it and how to properly use this performance metric?](https://blog.dareboost.com/en/2018/02/speed-index-web-performance/)", by Damien Jubeau.

Often the best way of addressing your own, specific needs is when you use your own metrics using _customized time milestones_. On the server side, these are called Server Timings [^10]. On the browser side, these are called User Timings [^11]. Contrary to other metrics, they correspond to what your team chooses to monitor. You can find them when you analyze the page in your browser's development tools and they are collectable by all the analysis tools. Why not use them?

[^10]: "[MDN Server-Timing Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)".

[^11]: "[Custom Timing : attendez la prochaine frame quand vous utilisez la User Timing API](https://boris.schapira.dev/notes/2019-09-custom-timing-prochaine-frame/)".

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_speed_test_wxl0.png"
alt=""
%}

When you want to optimize the performance of a site, you will sometimes come up against external libraries used by others to meet business needs. These libraries often address the business need in terms of functionality. but often do not consider their impact on web performance. As a result, the people who use them sometimes have never heard of performance. And require extra work to ensure they do not impact on performance.

Concretely, it often means that optimization is going to be difficult, technically or because the people you're going to talk to won't understand this need. When optimization is really impossible, don't forget to write it down in *a technical debt repository*so that it can be considered in the next sprint or redesign.

## Why we need you

The subject of Web Performance, like many subjects of web quality, is a technical subject. But the knowledge is available and the skills can be learned with time and investment.

I'm not going to lie to you: it takes a long time to become proficient. But the acquired skills often do not depend on any framework, any solution on the market, any trend. It's all about understanding how web standards work: HTTP, HTML, JS and CSS. It's hard to learn anything more reusable on the web and believe me: it's worth it.

You will see that whatever your role in the web production chain, you can acquire these skills and put them at the service of better web performance.

We need people ready to _optimize websites_ – there is a real demand for this. But it's far from being the only way to participate, in fact it's often at the end of the chain.

To begin to understand the challenge, we need Data Analysts capable of assessing usage data and refining metrics, to _better balance between investments and gains_. Knowing that a topic is relevant because others say so, is not the same as being able to adjust one's investment according to one's needs and _savings_.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_Business_plan_re_0v81.png"
alt=""
%}

Web Performance must be an integral part of the development of libraries of all types. Whether it is back-end or front-end, these projects must integrate _performance as a fundamental need_, in the same way as security or accessibility should be.

We need designers who think about the way their interfaces are progressively displayed and prioritize the elements most expected by users in order to _improve their experience_ [^12].

[^12]: See "[Mind over Matter: Optimize Performance Without Code](https://stephaniewalter.design/blog/mind-over-matter-optimize-performance-without-code-csscamp-2019/)", by Stéphanie Walter.

Are your skills more related to back-end? Great - we also need people like you to optimize code execution, set up server caching systems, or help develop edge proxies with a real-time optimization engine that can help optimize a site quickly while waiting for underlying fixes to be made [^14].

[^13]: The French reference solution is [Fasterize](https://www.fasterize.com/fr/comment-ca-marche/).

Finally, we also need people to "mediate" all these professions, to nurture and supervise dialogue, to provide the conditions for success and in particular training in a "common base of competence" (using something like Opquast [^14], for example).

[^14]: [Opquast](https://www.opquast.com/certification/?lang=en), the benchmark certification for all web professionals.

{% include rwd-image.html.liquid
path="/assets/images/web/2020-12-02/undraw_building_websites_i78t.png"
alt=""
%}

For all these reasons, you should look to improve web performance.

And, maybe, you already do it.

---

The illustrations in this article are from the [Undraw project](https://undraw.co/illustrations), created by [Katerina Limpitsoun](https://twitter.com/ninaLimpi). You can use them in any project, commercial or personal, without attribution or fees.

Thanks to [Barry Pollard](https://twitter.com/tunetheweb) who took the time to rewrite a good third of the article in an English that is a little more understandable than what I produce myself!
