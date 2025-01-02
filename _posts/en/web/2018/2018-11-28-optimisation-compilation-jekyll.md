---
title: 'Optimizing Jekyll build time'
thumbnail_background: /assets/images/2018-11-28/jekyll.png
tags:
    - Jekyll
    - JAMStatic
    - Outils
slug: jekyll-build-optimization
translations:
    fr: optimisation-compilation-jekyll
---

Being more and more tired of WordPress and its galaxy of dubious-quality plugins, I decided to migrate to a static site generator three years ago. After a few tries with other solutions, I decided to migrate to Jekyll, whose community seemed more mature to me.

After three years working on Jekyll, I’m starting to understand the strengths and weaknesses of the solution, but I am far from mastering its mysteries. I tweaked it to publish multilingual content, developed my own plugins, integrated pieces of architecture I discovered in some of my friends' repos… Let’s say I’m quite used to it now.

But nowadays, my Jekyll build looked less like the famous doctor than the Frankenstein monster: a patchwork of code roughly tied together by delicate strings, slowly moving as it moans.

<!-- more -->

---

## TL;DR

- Noting that my Jekyll compilation was very slow, I asked the French JAMstack community for advice.
- Several things have emerged, each tip allowing me to optimize the compilation time.
- The biggest gain comes from Jekyll's own evolutions, because the Core Team is doing a huge amount of work.

---

To generate my site, I developed a set of rake commands to clean the workspace, determine the destination environment and configure the build accordingly, check the integrity of the front-matter headers of my posts, generate the site with Jekyll and, finally, control what’s produced using [the `html-proofer` gem](https://rubygems.org/gems/html-proofer/). I don't run all this on my computer: instead, I delegate this task to Netlify, connected to my GitHub repository to compile and deploy my branches.

All these tasks obviously take time, but the part dedicated to the generation with Jekyll remained the most CPU-consuming. For months, my Netlify builds had been over 10 minutes. Every build was slower than the previous one.

A few days ago, Netlify stopped deploying the website altogether. The build took too long and exceeded the limit imposed by Netlify's continuous deployment system[^netlimit].

It was time to act.

---

An African proverb says:

> If you want to go fast, go alone. If you want to go far, go together.

I don't think that's entirely true. I believe that when we surround ourselves with the right people, we can go elsewhere, towards possibilities we had not even considered.

---

So when I thought I was reaching the limit of my skills, I asked for help from the community I know best: the JAMstatic Slack members. And among them, a member of the Jekyll’s core team, [Frank](https://github.com/DirtyF). He helped me a lot (and still does) by pointing out possibilities that I hadn't contemplated.

## Includes: to be consumed in moderation

Experience has taught me that it is often more difficult to maintain a project than to carry it out in the first place. To increase your chances of success, it is better to find techniques for organizing the code that are adapted to your long-term understanding. In my opinion, dividing the code into significant portions is one of the most effective maintenance tips.

In Jekyll, this is achieved via the `{% raw %}{% include %}{% endraw %}` tag. However, be careful, an overly ambitious code break-down will have a cost on your compilation time, which you can view with [the Liquid profiler](https://jekyllrb.com/docs/configuration/options/#build-command-options).

According to [Pat Hawks](https://github.com/pathawks/), a member of the Jekyll <span lang="en">Core Team</span>:

> Every time you use an `{% raw %}{% include %}{% endraw %}` tag, Jekyll has to open the included file, read its contents into memory, and then parse the template with Liquid. This happens once per `{% raw %}{% include %}{% endraw %}` tag not per file! This means that using the same include on 100 pages will cause that include to be loaded/parsed 100 times. The problem gets worse very quickly if you start including includes in your includes…

One way to overcome this additional cost is to cache the blocks compiled during the interpretation of your `{% raw %}{% include %}{% endraw %}` and there’s a plugin for that: [Ben Balter’s jekyll-include-cache](https://github.com/benbalter/jekyll-include-cache). But beware of two very important things:

1. Be sure to pass all the data necessary for your `{% raw %}{% include %}{% endraw %}` as parameters, because they will be used as keys for the cache.
2. use includes only to generate reusable portions or code. If the parameters of the include make it so specific that it’s not reusable, the `{% raw %}{% include %}{% endraw %}` cache will have been built for nothing.

These two constraints are strong enough to force me to reintegrate more than half of my includes into layouts. I am not entirely satisfied with this situation (because, as a result, maintenance capacities are degraded) but I must admit that I saved nearly **10%** of compilation time[^parole] by sacrificing this little comfort.

And with liquid comments (`{% raw %}{% comment %}This is a comment{% endcomment %}{% endraw %}`), I can still efficiently organize my code, even if it’s in a single file.

## Trust the gems compiled in C

Out of the box, Jekyll is based on a set of gems written in Ruby. Recently, new gems have appeared, partially written in C, thus, more efficient. The Jekyll team was kind enough to add conditional tests in the generator to use these gems if they are referenced in your Gemfile.

So far, I’ve heard about two of them:

There are undoubtedly others, but I heard about at least two of them:

- [the `liquid-c` gem](https://github.com/Shopify/liquid-c), to optimize the liquid compilation.
- [the `sassc` gem](https://github.com/sass/sassc-ruby), if you need Jekyll to compile SASS files more efficiently.

I don't need Jekyll for my SASS files but by using `liquid-c`, I saved **9%** of compilation time.

## If you can avoid it, don’t use LSI

Jekyll comes with a very handy option called Latent Semantic Indexing (LSI) which role is to parse all the content before generating the site, in order to feed, for each post, a qualitative collection of related posts (instead of the ten most recent posts). LSI does a very good job but if you have hundreds of posts like I do, it will run slowly, very slowly.[^gsl]

After a very quick non-analysis of the analytics I don't have[^analytics], I decided to part with the related articles and save **17%** of compilation time.

## Markdown, choose the right flavor

Markdown is a really nice light markup language but it's missing one thing very badly: standardization. There are dozens of Markdown parsers, each with their own specific features. For some time now, a standardization initiative has been emerging around [CommonMark](https://commonmark.org/), and projects implementing it are flourishing.

By default, Jekyll uses [kramdown](https://kramdown.gettalong.org/), a Markdown superset developed in Ruby that does a very good job. To replace it with CommonMark, I used [commonmarker](https://github.com/gjtorikian/commonmarker) which is, again, a Ruby wrapper for a C implementation. To take advantage of it in Jekyll, you can use [Pat Hawks' jekyll-commonmark plugin](https://github.com/jekyll/jekyll-commonmark).

Be careful, the transition may require adaptations. kramdown and CommonMark are quite different: while switching from one to the other, I had to sacrifice some syntaxic sugars.

For example, CommonMark does not support block attributes such as `{% raw %}{ :.myclass}{% endraw %}` to decorate a content paragraph. You will need to use good old HTML tags. Don't forget to enable the `UNSAFE` option in your Jekyll configuration (`_config.yml`) if you don't want to generate a lot of `<!-- raw HTML omitted -->` comments:

```
markdown: CommonMark
commonmark:
  options: ["SMART", "FOOTNOTES", "UNSAFE", "HARDBREAKS"]
  extensions: ["strikethrough", "autolink", "table"]
```

You may also notice that CommonMark is less tolerant than kramdown. Switching to this parser helped me to detect problems in my post that I had never noticed before because kramdown was fixing them for me. If you have a significant amount of content, be prepared to fix a few typos.

A small price to pay to save another **9%** of compilation time.

## Trust the team for going in the right direction

Finally, one of the last improvements made was to switch to the `main` version of Jekyll. Since 3.8.5 (my previous version), many improvements have been made, and the performance gain is really considerable: **93%**.

I versioned my `_site` folder and checked that nothing was breaking when switching versions because I couldn't believe in such a gain and yet, it's real.

If you were to retain – or test – only one optimization, it is this one: trust the Core Team, performance is on the way.

## What about my multilingual mess?

After all these optimizations, my Jekyll compilation went from more than 15 minutes to about a minute. That's still a lot, and I know why: my "homemade" management of internationalization, and more particularly of the translation of my articles, is suboptimal.

It is based on an `i18n-key` value that I place in the front-matter of my content files to match them across languages, as well as on a home-made plugin that, for each content, scans all the other contents to find which ones are translations of the current content. This O(n²) strategy, while easy to implement, is not effective at all and penalizes my build performance.

[Ashwin Maroli](https://github.com/ashmaroli), one of the Jekyll Plugin Core Team member, is working on a filepath-convention-based plugin that should considerably improve i18n: [jekyll-locale](https://github.com/ashmaroli/jekyll-locale). I tried to implement the plugin on my blog but encountered some drawbacks. I will come back to this later, especially when some plugins have been modified to be compatible, such as [Sverrir Sigmundarson’s jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2).

I'll be sure to mention it when everything will work out as it should!

---

## Experimental protocol

Since the above optimizations also require to modify the content, I did not carry out a benchmark during the optimizations. I waited until I was completely finished and then, I went back and evaluated the gains step by step.

Here’s my test protocol: I started from an installation without any of these optimizations, then I wrote a script implementing the optimizations one by one (except the removal of the includes, because… I was too lazy to script the modification of my layouts) and, each time, compiled the website. I scheduled the script to be executed 10 times and went to bed while my computer spent nearly 16 hours benchmarking all this.

Here is the raw data:

| Run     | Step                     | Done in… (s) |
| ------- | ------------------------ | ------------ |
| Test 1  | 1 - Before               | 1337,872     |
| Test 1  | 2 - Switch to liquid-c   | 1509,997     |
| Test 1  | 3 - Remove LSI           | 1264,981     |
| Test 1  | 4 - Switch to CommonMark | 1282,607     |
| Test 1  | 5 - Switch to main       | 64,949       |
| Test 2  | 1 - Before               | 1510,356     |
| Test 2  | 2 - Switch to liquid-c   | 1457,161     |
| Test 2  | 3 - Remove LSI           | 1239,278     |
| Test 2  | 4 - Switch to CommonMark | 1058,934     |
| Test 2  | 5 - Switch to main       | 72,335       |
| Test 3  | 1 - Before               | 2148,253     |
| Test 3  | 2 - Switch to liquid-c   | 1465,446     |
| Test 3  | 3 - Remove LSI           | 1253,785     |
| Test 3  | 4 - Switch to CommonMark | 886,152      |
| Test 3  | 5 - Switch to main       | 92,384       |
| Test 4  | 1 - Before               | 1621,322     |
| Test 4  | 2 - Switch to liquid-c   | 1506,737     |
| Test 4  | 3 - Remove LSI           | 1225,414     |
| Test 4  | 4 - Switch to CommonMark | 1057,497     |
| Test 4  | 5 - Switch to main       | 87,943       |
| Test 5  | 1 - Before               | 1589,323     |
| Test 5  | 2 - Switch to liquid-c   | 1607,33      |
| Test 5  | 3 - Remove LSI           | 1261,815     |
| Test 5  | 4 - Switch to CommonMark | 914,124      |
| Test 5  | 5 - Switch to main       | 77,526       |
| Test 6  | 1 - Before               | 1643,596     |
| Test 6  | 2 - Switch to liquid-c   | 1481,98      |
| Test 6  | 3 - Remove LSI           | 1237,843     |
| Test 6  | 4 - Switch to CommonMark | 1336,47      |
| Test 6  | 5 - Switch to main       | 69,099       |
| Test 7  | 1 - Before               | 1456,432     |
| Test 7  | 2 - Switch to liquid-c   | 1487,558     |
| Test 7  | 3 - Remove LSI           | 1268,737     |
| Test 7  | 4 - Switch to CommonMark | 1106,233     |
| Test 7  | 5 - Switch to main       | 69,562       |
| Test 8  | 1 - Before               | 2943,453     |
| Test 8  | 2 - Switch to liquid-c   | 1492,383     |
| Test 8  | 3 - Remove LSI           | 1229,34      |
| Test 8  | 4 - Switch to CommonMark | 1321,156     |
| Test 8  | 5 - Switch to main       | 70,332       |
| Test 9  | 1 - Before               | 1587,532     |
| Test 9  | 2 - Switch to liquid-c   | 1586,698     |
| Test 9  | 3 - Remove LSI           | 1264,424     |
| Test 9  | 4 - Switch to CommonMark | 950,634      |
| Test 9  | 5 - Switch to main       | 69,907       |
| Test 10 | 1 - Before               | 1643,22      |
| Test 10 | 2 - Switch to liquid-c   | 1581,063     |
| Test 10 | 3 - Remove LSI           | 1229,119     |
| Test 10 | 4 - Switch to CommonMark | 1332,547     |
| Test 10 | 5 - Switch to main       | 69,022       |

[^parole]: You're going to have to take my word for it, because my experimental protocol didn't contain a test with and without inclusions. It is therefore a personal estimate.

[^rake]: Rake is a make-like orchestrator, in Ruby ([learn more](https://rubygems.org/gems/rake/)).

[^gsl]: It seems that [the gem gsl](https://rubygems.org/gems/gsl) is improving this, but I haven't tested it. I am interested in your feedback.

[^netlimit]: 15 minutes, as confirmed by Chris McCraw in "[How Our Build Bots Build Sites](https://www.netlify.com/blog/2016/10/18/how-our-build-bots-build-sites/)".

[^analytics]: Because I don’t need them to learn about my readers, as they often interact with me on Twitter or through comments
