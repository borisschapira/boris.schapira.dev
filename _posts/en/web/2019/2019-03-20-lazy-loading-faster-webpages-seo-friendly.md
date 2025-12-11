---
title: 'Lazy Loading, faster webpages, SEO friendly'
canonical: 'https://blog.dareboost.com/en/2019/03/lazy-loading-faster-webpages-seo-friendly/'
canonical_title: "Dareboost's Blog"
canonical_dismissed: true
cloudinary_logo: dareboost-logo
tags:
    - 'Performance Web'
    - Images
    - SEO
translations:
    fr: lazy-loading-des-pages-web-plus-rapides-sans-risque-seo
---

Images are a key content on your website? If you’re serious about your website performance, you have probably optimized them. But have you considered to lazy load your images? Lazy loading images improves the user experience by saving bandwidth for important content first.

Some reject the technique for SEO considerations. But properly lazy loading your images does not prevent them from being indexed. Let’s find out why you should implement lazy load, and how to make sure you build it in a SEO friendly way.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

Images are everywhere on the Web. Serving the right image in the right context can be really challenging. [Images need to be optimized](/notes/2017-10-optimize-images-to-reduce-page-weight-file-formats-tools-and-rwd/), adapted to its rendering area, and only loaded if required.

**Images Lazy Loading** is a set of techniques designed to answer this last requirement. An image will be loaded only if it is useful for the visitor: the download of an image is triggered when it’s needed: after a specific interaction, as a result of a scroll… or never.

[According to HTTPArchive](https://httparchive.org/reports/state-of-images#offscreenImages), 420 KB (median value) could be saved per page by lazy-loading offscreen and hidden images.

{% capture img_alt %}Graph showing the amount of data that could be saved by not loading off-screen images.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-03-20/offscreen-images.png"
alt=img_alt
%}

## Some use cases

There are many concrete cases where Lazy Loading is involved. Let us take a few minutes to cite a few examples.

**E-Commerce Search Results**. These pages often contain so many results that a lot of products are outside the viewport. Is it useful to download their images? With Lazy Loading, you can delay their loading until the page is scrolled.

**Carousels**. You know about them, right? Why should the user load all of the images whereas it will only showcase the first one during several seconds… Lazy load them! Load the first one, and trigger the download of the next when in the background a couple of seconds before the carousel animation.

**Menus and tabs.** Images contained in a menu or a tab are often hidden, only displayed after a click. With Lazy Loading, you can delay the loading of the images until the button displaying the element is hovered or clicked.

Depending on the nature of your page, other cases are possible. No images should be included on your pages without previously asking yourself the question of delaying their download. Because at the end of the day, there are significant performance gains.

## The bare necessities

By postponing the loading of images that are not immediately required – or, in some cases, not loading them at all – the browser saves resources (bandwidth as well as CPU). The page loads faster and the user experience is improved as saved resources can be affected to more critical content. There are also server-side gains. The CPU and bandwidth required to delivered the resources are subjected to less stress, reducing the hosting and/or CDN costs.

As said in the introduction, Lazy Loading do not prevent your images from being indexed by search engines. But it can be tricky and all the techniques are not equals, as all the best practices are not implemented by the various libraries and plugins available on the market. To preserve your organic SEO, you need to understand how Lazy Loading works, and how to use it safely.

## LazyLoad with JavaScript

In a perfect world, the browser would automatically lazy load the images. This may be the case in the future, as a [Lazyload Feature Policy](https://github.com/w3c/webappsec-feature-policy/issues/193) is under study, but we’re not there yet. In the meantime, we have to explore other solutions, every one of them implying a modification of the HTML markup and the addition of a JavaScript (JS) dependency.

{% capture note %} **IMPORTANT**  
You don’t need to – and **shouldn’t** – lazy load all your images. If you know that some images will be displayed most of the time , let them be loaded and rendered normally. Lazy Loading is only recommended for the other images. Do not add complexity when it’s not required! {% endcapture note %} {% include note.html.liquid content=note %}

The most traditional solution consists of using JS to reassess, at regular intervals and for each image (or each element displaying an image as a background), if it needs to be loaded. High-performance libraries such as [lazysizes](https://github.com/aFarkas/lazysizes) are built on this paradigm and are compatible with older browsers. lazysizes can even detect if the User-Agent is able to scroll and, if not, load the images right away.

However, running those tests so regularly has a cost. This cost can be avoided for web browsers supporting the Intersection and Mutation Observer APIs (that provide the ability to react to specific DOM situations rather than having to test continuously). [yall.js](https://github.com/malchata/yall.js) and [lozad.js](https://apoorv.pro/lozad.js/) are good examples of this condition-based technique (they are only compatible [with modern browsers](https://caniuse.com/#feat=intersectionobserver), but you can use [a polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) to emulate the missing feature for older browsers).

{% capture note %} **TIP**  
As the browser may interpret any omission of `src` as an error, I strongly recommend that you still define the `src` attribute value, using a really small transparent image placeholder, even inline, like: {% endcapture note %} {% include note.html.liquid content=note %}

```html
<img
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
…
```

Whichever JavaScript solution you choose on the client side, you must modify your backend to return the right HTML code. The HTML markup for the lazy-loading of an image is always similar: the final value of the `src` attribute is temporarily placed in a `data-src` attribute which prevents the `<img>` element from loading the final image right away.

```html
<!-- Lazy loaded image: before -->
<img data-src="garden.jpg" src="placeholder.jpg" class="js-lazyload" src="data…" />

<!-- Lazy loaded background image: before -->
<div data-class="bg-image-garden" class="container js-lazyload">…</div>
```

The library identifies its target images through an attribute, quite often using a specific class (for example, here, we are using the `js-lazyload` class). When the library detects it’s time to load the image, the `data-src` attribute is used to populate the `src` attribute and the browser starts loading the image. The technique is the same for other media types (video, iframes) or images adapted for responsive web design (for example, the `data-srcset` attribute can be used to temporarily retain the final value of the `srcset` attribute).

```html
<!-- Lazy loaded image: after -->
<img src="garden.jpg" class="js-lazyload" … />

<!-- Lazy loaded background image: after -->
<div class="container js-lazyload bg-image-garden">…</div>
```

## No JavaScript? Fallback with style (and `<noscript>`).

Search engine bots, such as Googlebots, are crawlers that browse the web for the purpose of content indexing. No one knows for sure when the Googlebots will execute JavaScript on their pages, and at what capacity. As [demonstrated by Stephan Boyer in 2016](https://www.stephanboyer.com/post/122/does-google-execute-javascript) and later confirmed by [Tom Greenaway at Google IO 2018](https://youtu.be/PFwUbgvpdaQ?t=845), Googlebots do not execute JavaScript during their first visit. The final render can actually arrive several days later.

> Because Googlebots actually runs two waves of indexing across web content, it’s possible some details might be missed. <cite>Tom Greeaway</cite>

Like some images.

Because if JavaScript properly executed, lazy loaded images will not be handled by it and the `src` attribute is never populated, preventing the browser from starting the download and displaying the images.

How to serve these images despite the absence of JavaScript? There’s a specific HTML element you can use: `<noscript>`. The content of an `<noscript>` element is displayed only if scripting features are not supported or are disabled. That’s exactly what we need!

So if your HTML response contains:

```html
<img
    data-src="garden.jpg"
    src="data/…"
    alt="A spacious garden dominated by a large pine tree."
    class="lazyload"
/>
<noscript>
    <img src="garden.jpg" alt="A spacious garden dominated by a large pine tree." … />
</noscript>
```

then:

- when JavaScript is available, only the first `<img>` element will be displayed;
- when JavaScript is not available, both `<img>` elements are considered during the page display. The second one (in the `<noscript>` element), is displayed and indexable by search engines. The technique, [confirmed by John Mueller](https://www.youtube.com/watch?time_continue=4308&v=7m-cd8XXovQ), Webmaster Trends Analyst at Google, is exactly the same for background images:

```html
<div data-class="bg-image-garden" class="container js-lazyload">…</div>
<noscript>
    <div class="container bg-image-garden">
        … A spacious garden dominated by a large pine tree. …
    </div>
</noscript>
```

Beware: don’t miss adding a specific style that will be applied when JavaScript is not available, hiding the non-lazy-loaded images.

You may be afraid of the resulting verbose HTML related to code duplication. Don’t worry, your HTML documents have to be compressed with gzip or brotli before being sent on the network, hence a marginal impact in transfer size (if you’re not sure your website is properly using compression, [audit your pages on Dareboost](https://www.dareboost.com/)).

Of course, it remains true that entering all these tags is tedious. When managing responsive images, artistic direction… the markup of images can be very, very complex. So anyway, you should not enter this HTML code manually: dealing automatically with this kind of complexity should be the work of your CMS or a task of your contribution workflow whatever it is.

{% capture img_alt %}About fifty lines of very dense HTML.{% endcapture %}{% capture img_caption %}Mark-up an image from The Guardian, even before the implementation of a Lazy Loading{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2019-03-20/guardians_rwd_image.png"
alt=img_alt
caption=img_caption
%}

## Testing the implementation

Once you’ve implemented Lazy Loading, you’ll need to test that it works. The simplest solution is, of course to run a [full web performance diagnosis](https://www.dareboost.com/en/tool/website-analysis) with Dareboost to detect if all the images outside of the viewport are lazyloaded. If it’s not the case, we’ll tell you and give you the URLs of the images for which loading can be postponed.

If you have conditioned the loading of your images to a browser or a custom event, feel free to use [your report’s Waterfall](https://www.dareboost.com/en/doc/analysis-report/timeline-waterfall) to check that the loading of images follows the correct sequence. In the case of a custom event, feel free to also use a [Custom Timing](https://blog.dareboost.com/en/2018/05/custom-timings-monitoring/): you’ll be able to find the event in the Waterfall.

It may also need to do manual tests. Open your browser on the concerned webpage, open the Developper Tools and select the Network tab (every modern browser features it). Empty the network stack to better visualize new calls, then provoke the interaction meant to start the lazy loading.

Here is an example on Chrome, with the Lazy Loading activated during scrolling:

{% include media/youtube.html.liquid id="Z4jRe3KRcf4" title="Visualization of lazyloading during scrolling in the Chrome DevTools Network tab" %}

You may consider automating these tests by using browser-based tools to perform tests. Puppeteer is one of them and [can be used to test](https://github.com/GoogleChromeLabs/puppeteer-examples/blob/master/lazyimages_without_scroll_events.js) the behavior of your lazy loading on Chrome or Chromium, to make sure that your real users will see your images.

To verify that crawler bots will also see your images, you can ask Google itself, using the URL Inspector tool of the [Google Search Console](https://search.google.com/search-console). You will view your page exactly as fetch by Google. Just insert your URL for Googlebot to test your page and screenshot the result to confirm that your `<noscript>` fallback is working.

---

Here we are, you now know everything there is to know about Images Lazy Load, its SEO impact and the best way to get around it. Let’s trim some pages!
