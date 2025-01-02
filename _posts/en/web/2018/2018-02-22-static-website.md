---
title: 'Back to static with JAMStack: a paradigm shift for better UX and web performance'
canonical: 'https://blog.dareboost.com/en/2018/02/static-website-web-performance/'
canonical_title: "Dareboost's Blog"
canonical_dismissed: true
tags:
    - 'Performance Web'
    - JAMStack
cloudinary_logo: dareboost-logo
slug: static-website-web-performance
translations:
    fr: site-statique-performance-web
---

For several years now, a new range of solutions have emerged in the web technologies landscape. Static site generators, headless CMS, content infrastructure... these solutions contribute to a global trend. "Static trend", "JAMStack", several names exist but none really covers what is an overall new proposal for web application architecture, and somehow a comeback to the roots of the Web.

{% capture img_alt %}Large nested metal gears{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-02-21/0_rouages.jpg"
alt=img_alt
%}

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

## Where do we come from?

When a user tries to access a web page, their browser makes a request to the server that hosts it. Either the server answers the page immediately, exactly as it is stored, or the server generates it by executing code on demand.

Although the Web was conceived as an entanglement of static files, server-side programming languages appeared very early and are now widely used. [According to W3Techs](https://w3techs.com/technologies/overview/programming_language/all), more than 80% of servers that use server-side language are running PHP. And hosting providers offering servers without dynamic language support are almost non-existent.

Yet, the dynamic generation of HTTP responses presents significant disadvantages in terms of web performance. A dynamic webpage is often built around a web server that loads an execution language that analyzes the HTTP request, often requests a database (sometimes located on another server in the datacenter) and third-party services, populates a logical model that reveals itself through an aggregate of templates to generate the HTML response. Quite logically so, [Time To First Byte](https://www.dareboost.com/en/glossary#ttfb) (TTFB) is longer.

{% capture img_alt %}Dareboost graph of Pages Timings monitoring. Peaks on the TTFB imply peaks on the Speed Index.{% endcapture %} {% capture img_caption %}A high TTFB penalizes the Speed Index of a page.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-02-21/1_ttfb_en.png"
alt=img_alt
caption=img_caption
%}

To optimize server response time, many caching solutions have appeared over the years. The first user who requests the page undergoes the cost of generation, but the result is stored on one or more proxy servers and sometimes synchronized over different locations, all around the World. These cached pages are then responded to all similar requests, ensuring a quick and consistent delivery. Nowadays, it is possible to find software caching solutions (like [Varnish](https://varnish-cache.org/)), platforms and infrastructures (Content Delivery Networks). All of them ensure that what's dynamic can become static again. The leopard can’t change its spots.

## However, the use of static content has other advantages.

If you want to deliver your static pages, you must have compiled them up front. This fact, as trivial as it may seem, changes everything. Indeed, compilation turns out to be the main advantage of static: shift the complexity from the Production environment to the integration process.

If your pages are served by a web server without being generated first, you have no need for a server-side language to be executed. As a consequence, many attack vectors disappear. You can't steal confidential data by injecting malicious code if you have neither a database nor a server-side execution language.

Not executing code on the server also means that CPU consumption is very low for each HTTP response, giving you a much better scalability. Be warned, though: as we'll see, deployment is a key factor and can consume CPU time. Resilience is another advantage. In the worst situation, an error may occur during generation but can be detected before deployment. Technical problems resulting from a bad contribution, for instance, no longer have an impact on the site browsed by visitors. In the worst scenario, the website is not broken. Its content is simply not up-to-date.

However, these advantages are only the tip of the iceberg. The static trend allows you to completely transform the way a site is published. No wonder [Smashing Magazine already migrated](https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/)!

## Static is a distribution modality. What's its technical stack?

A static site generator (SSG) is a software executed locally or as a service that produces (and sometimes deploys) a static website using some data sources for model and configuration, and templates containing the business logic.

The SSG market is booming, with [a new product launching twice a month](https://www.staticgen.com/). Most of them generate a website from a set of files, often written with a lightweight syntax like [Markdown](https://daringfireball.net/projects/markdown/) or Asciidoc. The responsibility for the conversion to HTML is assigned to both a templating engine (Liquid, Go Template, Nunjucks) – responsible for the logic – and a converter ([kramdown](https://kramdown.gettalong.org/), [commonmark](https://commonmark.org/), [blackfriday](https://github.com/russross/blackfriday), [Asciidoctor](https://asciidoctor.org/)…) responsible for transforming the markup into HTML. SSGs are nothing more than the technical orchestrators of the website's generation and, therefore, are mainly a playground for front-end developers who know how they tick.

Indeed, SSGs are technical tools, not substitutes for Content Management Systems. However, they become really interesting when you follow the lead of external data sources because then, we can talk about CMS that would not be used to render HTML, but only to store and expose data. They are called Headless CMS.

Headless CMS are:

> A way to store data A CRUD UI An API to the data <cite>"[What is a Headless CMS?](https://css-tricks.com/what-is-a-headless-cms/)", Chris Coyier</cite>

And they can often be obtained by using your usual systems. Wordpress, for instance, has a [REST API](https://developer.wordpress.org/rest-api/). Drupal has a whole [working group](https://groups.drupal.org/headless-drupal) working on Headless. However, here again, the market is booming with [software and services](https://www.headlesscms.org/).

Why on earth would we want to separate the contributive environment and the generation tool? Because of the separation of concerns.

The development team, liberated from the burden of maintaining a database, can focus on the platform's technical evolution and the assets pipeline while the contribution team can sharpen its content.

Contributors can work on flat files which are easy to store and modify. Their only common language with developers becomes the metadata passed in each file, often written with [Front-Matter](https://jekyllrb.com/docs/frontmatter/). They can use the editing tool or service of their choosing, even one that ensures collaboration. They also can benefit from source code versioning whenever they want to consult the history of their files, merge several versions or branch to write content they don't want to publish right away.

{% capture img_alt %}A diagram of the contribution and development flow of a site that clearly shows the separation of concerns between developers and contributors.{% endcapture %} {% capture img_caption %}Carrot (a digital agency) static CMS workflow, as described [on their blog](https://carrot.is/coding/static_cms.html){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-02-21/2_carrot.png"
alt=img_alt
caption=img_caption
%}

After the contribution of the contents, the generation of the website and the deployment are often operated by the same component of the infrastructure. To monitor the performance of this step, you need to evaluate performance of the compilation server during the generation and the deployment (duration, CPU consumption, memory). But that's not all: remember to also monitor the targeted infrastructure (consisting of one or more servers), because copying tasks can be demanding.

This means that we are no longer in a system where the main metric of scalability is the number of simultaneous visitors. DevOps must completely change their thinking to create a system that can adapt to the frequency of generation and deployment requested by contributors.

Here again, [actors have emerged](https://www.thenewdynamic.org/tools/hosting-deployment/). Actually, the best known and probably the most effective may be Netlify. Its clean and simple interface will help you connect your source code repository in a few clicks. Then, Netlify will generate and deploy your website for each commit, on the fly.

A Headless CMS, an SSG, and a deployment orchestrator: we now have our full back-end stack. Yet, we still generate a static website with no personalized content. As the users' demand for dynamism or personalization has never been so strong, aren't we making a mistake?

## Static? Not so much.

We have seen that this static stack produces a very standardized markup. In order to introduce dynamism and personalization, we will need to import data - delivered through APIs - and process it on the client side - hence rely on Javascript.

This new "**J**avaScript + loosely coupled **A**PI + **M**arkup" stack has a name: the [JAMStack](https://jamstack.org/) and several leading actors, each of those featuring a specific set of services: [Stripe](https://stripe.com/) for the payment, [Algolia](https://www.algolia.com/) for instant search, [Disqus](https://disqus.com/) or [IntenseDebate](https://www.intensedebate.com/) for comments, [Snipcart](https://snipcart.com/) for e-commerce, [Cloudinary](https://cloudinary.com/) or [Twicpics](https://www.twicpics.com/) for media management, [Formspree](https://formspree.io/) or [Staticman](https://staticman.net/) for forms… Note that not all of those products are designed for the JAMStack: you can perfectly use Algolia blazing fast API from the server-side.

JAMStack is a real paradigm shift. The website being served to the visitor becomes, more than ever, a shell in which services, whether self-hosted or third parties, are dynamically injected. It is even possible to rely on several services for the same purpose and switch to a fallback if the main service is not available.

And since you're shifting a lot of your efforts to the Front End, why not go further and build your site with a Single Page App (SPA) framework like Vue, Angular or React, or transform it into a complete Progressive Web App (PWA), designed to be "offline first"? This is not inherent to JAMStack, but facilitated by the change of development paradigm.

For the user, however, the difference is small. Try to search a product [on this website](https://community.algolia.com/instantsearch.js/v2/examples/e-commerce/). Do you experience something different than from a PHP website?

For contributors, the paradigm shift changes everything as it separates the contribution platform from the one that hosts the website. Some of them will prefer to use software that features writing aids (correction, suggestions, documentary contributions). Others will be satisfied with customizable online contribution platforms. Assuming that the storage of the content is independent of the solution, each of them can use their favorite tool without interfering with others’.

{% capture img_alt %}Forestry.io editing interface{% endcapture %} {% capture img_caption %}Forestry.io editing interface. The edited contents are saved in the files of a git repository and can also be edited with a text editor.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-02-21/3_forestry.png"
alt=img_alt
caption=img_caption
%}

But some products go further and turn the contribution into a first-class experience. Contributors can take advantage of tailor-made solutions, with rich and multimedia contribution options, without any impact on the publication flow or the targeted website performance.

{% capture img_alt %}Prismic.io slices{% endcapture %} {% capture img_caption %}[Prismic.io](https://prismic.io/) is one of the most customizable Content Platform (here, reusable slices). Contents or layouts, everything is contributed on the platform. During the build, the SSG requests the Prismic.io API to retrieve the information.{% endcapture %} {% include video_as_a_gif.html.liquid
url="/assets/images/2018-02-21/4_prismic"
alt=img_alt
caption=img_caption
%}

## Static or dynamic? Tomayto, tomahto

Although the JAMStack approach has many advantages, including safety, performance, scaling, development and contribution experiences, it also implies new risks that would be dangerous to ignore.

The first risk is to get lost in the plethora of Headless CMS, generators and service platforms. Take the time to evaluate your needs because each solution has its advantages and drawbacks. [Jekyll](https://jekyllrb.com/), for example, is a well-known SSG, developed in Ruby, well documented but fairly slow. [Hugo](https://gohugo.io/), on the other hand, is a much faster SSG but is also more complex to handle if you are a novice. If you don't publish content at high-frequency, does the generation time matter so much, for an equivalent result?

Please also pay attention to the terms of use of the chosen services. At Dareboost, we often warn our users against third-party script abuses. If you need comments and use Disqus, do you agree to dynamically inject their ads? If you've followed [our advice on Content Security Policies](https://blog.dareboost.com/en/2016/08/how-to-implement-content-security-policy/), you shouldn't be concerned with that, hopefully.

<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">Disqus started injecting adverts into pages that use their comment system, like my blog. Their problem is that my CSP doesn&#39;t allow their adverts to be included 😎 <a href="https://t.co/c3lTAhCjS7">pic.twitter.com/c3lTAhCjS7</a></p>&mdash; Scott Helme (@Scott_Helme) <a href="https://twitter.com/Scott_Helme/status/961612668992966656?ref_src=twsrc%5Etfw">8 février 2018</a></blockquote>

Another risk but not the least: even if your website is less prone to security issues, it can still be attacked through the API it relies on. You absolutely need to ensure the scripts you use [have not been tampered with](https://blog.dareboost.com/en/2017/01/website-analysis-new-checkpoints-dareboost/#third-party-content-loading) and that every exchange with a third-party service is secure over HTTPS. Make sure that your self-hosted APIs comply with all the security best practices and do not hesitate to scrutinize the SLAs of the third-party services you depend on.

Finally, these APIs will also have to be carefully selected according to the sustainability of the organizations that support them. If you transfer responsibility for your key features to third-party services, you’d better make sure they will stick and maintain a constant level of quality. A good way to do this is to [monitor User Journeys](https://www.dareboost.com/en/tool/user-journey-monitoring) that are able to simulate functional interactions with your website.

## A new land of opportunity

Once you have fully grasped the specific risks and put in place appropriate workflows, the JAMStack nonetheless presents its share of opportunities. The cost of migrating from Headless CMS or SSG solution to another is often quite low. You can easily switch from a local contribution on files to content infrastructure like Netlify CMS, Forestry, Contentful or Prismic, which allows you to quickly evaluate the solution that best suits your needs. Creating a static site takes time and requires an architecture that involves orchestrating several solutions. Today, it may seem complex but remember your first dynamic site: choose a host, master FTP, juggle the web server logs... none of it was easy. You will learn this logic step by step. For the experienced JAMStack users, it becomes natural.

Unified platforms such as Netlify, while presenting a risk of centralization, nevertheless offer an impressive catalog of services: website generation and deployment, DNS registration, SSL certificates and forms management, serverless functions, Content Delivery Network…

Enough out-of-the-box features to allow your Front-End team to focus on front-end development and web performance optimization. With such a low Time To First Byte, the team can fully focus on UX through the measurement of the [Speed Index](https://blog.dareboost.com/en/2018/02/speed-index-web-performance/)!

---

_Thanks to Erin Symons, [Frank Taillandier](https://twitter.com/dirtyf) and the whole [jamstatic.fr community](https://jamstatic.fr/), [Bud Parr](https://twitter.com/budparr), [Nicolas Hoffmann](https://twitter.com/Nico3333fr) and my colleagues [Philippe Guilbert](https://twitter.com/GuilbertPhil) and [Damien Jubeau](https://twitter.com/DamienJubeau) for their time and advice._

---

## Additional Resources

- "[Why Static Site Generators Are The Next Big Thing](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/)", Matt Biilmann
- "[Don’t Call Contentful’s Content Infrastructure a ‘CMS’](https://thenewstack.io/dont-call-contentfuls-content-infrastructure-cms/)", Michelle Gienow
