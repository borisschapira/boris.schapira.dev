---
layout: page
title: About this site
permalink: /en/about/site/
i18n-key: about-site
---

I am the main author and the only person responsible for the contents published on this site. On the other hand, the brands mentioned on this site are the property of the companies that have registered them. This entire site is subject to French law.

The views and opinions expressed on this blog are mine only, and in no way those of my employers or clients, my hosting provider or any other entity or individual.

If you wish to copy, modify or redistribute certain content, you must comply with the terms of the [creative commons CC-BY license](https://creativecommons.org/licenses/by/3.0/).

## Under the hood

Specialized in Web Performance for a few years, I decided one day not to be the barefoot cobbler. Since then, in a healthy competition with my former colleague[Nicolas Hoizey](https://nicolas-hoizey.com/), I've never ceased to improve the web performance of the website.

### Server side

I started by throwing away my Wordpress blog and replacing it with a static site generator[^static] developped in node, [Hexo](https://github.com/hexojs/hexo). After having determined the limits of the tool and contributed to some plugins, I decided to migrate to [Jekyll](https://jekyllrb.com/) whose community seemed more mature to me.

[^static]: Frank Taillandier has beautifully sketched the [static movement [FR]](http://frank.taillandier.me/2016/03/08/les-gestionnaires-de-contenu-statique/) on his blog.

My Ruby dependencies are managed by [Bundler](http://bundler.io/) :

- for the archive management : `jekyll-archives` ;
- to generate responsive images layout : `jekyll-cloudinary` ;
- for the `sitemap.xml` : `jekyll-sitemap` ;
- regarding pagination : `jekyll-paginate-v2` ;
- the micro-typography is managed by : `jekyll-microtypo`.

I probably forget some of them, but you can find all the dependencies [on my Github repo](https://github.com/borisschapira/boris.schapira.dev/blob/main/Gemfile 'Jekyll code for boris.schapira.dev').

Internationalization is enabled by `i18n` and the `i18n_filter`[^2].

[^2]: The localization technique is detailed in the [Thomas Brelet's Jekyll Starter Guide [FR]](http://www.toam.fr/20-05-2013-guide-demarrage-jekyll/#localiser-jekyll).

I use [node](https://nodejs.org/) to compile my CSS and JS static resources.

### Compilation and deployment

My pages and articles are written in [CommonMark](https://commonmark.org/), a light syntax which is ideal for writing[^3]. I use the Github hooks to interface my repository with [Netlify](https://www.netlify.com/), that executes some tests with [rspec](http://rspec.info/) and compiles the site.

The generated site is then tested via [html-proofer](https://github.com/gjtorikian/html-proofer) to check that the pages are error-free.

If all goes well then Netlify deploys the generated site on its <abbr title="Content Delivery Network">CDN</abbr>.

The last deployment was carried out on {{ site.time | l: '%A %-d %B %Y' }}.

Netlify is also in charge of capturing comments and sending them to a private Slack channel via [Netlify Forms](https://www.netlify.com/docs/form-handling/), using [a technique popularized by Phil Hawksworth](https://github.com/philhawksworth/jamstack-comments-engine).

[^3]: On this subject, you should read [this excellent article by Romy on light syntaxes [FR]](http://romy.tetue.net/syntaxes-legeres-pour-rediger)

### Client side

Part of my CSS and JS code is dedicated to accessibility and I also try to contribute responsibly, to be as inclusive as possible, keeping both people and contexts in mind (for example, I use the [abbr-touch library](http://www.growingwiththeweb.com/2014/09/making-abbr-elements-touch-accessible.html) that gives mobile users the ability to read the definition of an abbreviation or acronym.

In order to control what is happening on my site (including detecting attempted injections), I have configured specific directives in my [Content Security Policy](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9curit%C3%A9/CSP)[^7].

A daily monitoring via [Dareboost](https://www.dareboost.com/) on several pages informs me of possible performance regressions through configured alerts.

[^7]: Thanks to [Nicolas Hoffman](https://twitter.com/Nico3333fr) for making me aware of this issue during [his talk at Paris Web 2015](http://www.nicolas-hoffmann.net/content-security-policy-parisweb-2015/ 'CSP: Content Security Policy').
