---
title: 'Preload, Prefetch and Preconnect: Speed Up your Website with Resource Hints'
thumbnail_background: '/assets/images/2020-04-29/people-doing-swim-race-1263349.jpg'
canonical: 'https://blog.dareboost.com/en/2020/05/preload-prefetch-preconnect-resource-hints/'
canonical_title: "Dareboost's Blog"
canonical_dismissed: true
description: >-
    Use preload and the Resource Hints to increase the perception of speed by influencing the order in which these resources are fetched and executed.


tags:
    - 'Performance Web'
    - Network
    - 'Third Parties and Resource Hints'
cloudinary_logo: dareboost-logo
slug: preload-prefetch-preconnect-resource-hints
serie: 'Third Parties and Resource Hints'
translations:
    fr: preload-prefetch-et-preconnect-resource-hints
---

Loading a web page requires fetching a whole set of resources which collectively allow the page to be displayed and interacted with. To increase the user’s perception of speed, you may need to influence the order in which these resources are fetched and executed. And that’s where `preload` and Resource Hints come in.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

<figure>
{% capture img_alt %}A swimming race{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/2020-04-29/people-doing-swim-race-1263349.jpg"
alt=img_alt
caption="Need to alter the priorities set by the browser? Act with caution."
%}
</figure>

A web page consists of a main HTML document and optional additional resources designed to format it, add media, or behaviors. According to the Web Almanac  2019 (chapter "[Page Weight](https://almanac.httparchive.org/en/2019/page-weight#page-requests)"), more than half the pages contain more than 68 resources added to the main document.

Hence we can assume that under normal circumstances, downloading a resource is a recurring task for the browser. This task can be broken down into several steps, including:

- **Resolve the DNS** of the resource’s origin  
  (if necessary, i.e. if the browser has not already done so);
- **Connect** to the origin server  
  (if necessary, i.e. if the browser is not already connected);
- **Fetch the resource**  
  (if necessary, i.e. if the resource is not already in the user agent cache and still valid);
- And – according to the type of resource and the reason for which it was fetched – its evaluation and use.

For the browser to download resources more efficiently, you can indicate how to optimize these different steps.

You can even tell (ask?) the browser to download some resources in advance, to [improve future browsing experience on your site](https://blog.dareboost.com/en/2019/01/synthetic-monitoring-user-journey-scenario/).

## The directives and how to use them

To leverage resource loading, you can use `preload`, `dns-prefetch`, `preconnect`, and `prefetch`. We'll call all of these directives "Resource Hints" in the following, but be aware that `preload` has [its own specification](https://www.w3.org/TR/preload/), while the other Resource Hints are defined in [a separate specification](https://www.w3.org/TR/resource-hints/), mostly because `preload' is not just a hint to the browser, but rather a command.

To write these directives, you can use either the `<link>` HTML tag or the `Link` HTTP response header. As for [specifying the character set](/notes/2018-11-content-encoding-how-why/), we recommend you to use the HTTP header, since it will be taken into account by the browser before it starts interpreting the HTML code for the page.

In the HTML page body:

```html
<link href="resource-url" rel="directive" as="ressource-type" crossorigin="value" />
```

Through an HTTP header:

```
Link: <ressource-url>; rel="prefetch"; as="ressource-type"; crossorigin="value"
```

Whichever syntax you choose, the parameters are always the same:

- **The URL** of the resource, of course
- **The directive** to use
- **The type** to consider for the resource, which allows you to adapt the Content-Security-Policy to the nature of the resource ([learn more](https://blog.dareboost.com/en/2016/08/how-to-implement-content-security-policy/))
- The `crossorigin` attribute, which we'll discuss later

These settings can be used to define 4 directives supported by most modern browsers:

- `dns-prefetch`: indicates to the browser that it should perform the resolution of a given domain name (determining the IP to contact) before that domain is used to download resources
- `preconnect`: indicates to the browser that it should connect a given origin, before that domain is used to download resources. Preconnecting involves, like - `dns-prefetch`, the DNS resolution, but also the TCP handshake and TLS negotiation (if the page is secure)
- `prefetch`: indicates to the browser that it can download a given resource, even if it is not detected in the page. The resource is downloaded with a low priority
- `preload`: tells the browser that it **must** download a given resource as soon as possible, with high priority.

Using `dns-prefetch` can be interesting in the context of critical third parties: by resolving the domain upstream, a few milliseconds can be saved cost-effectively.  
However, in most cases, you may want to use `preconnect' instead of`dns-prefetch', so as to anticipate the whole connection.

If your site must be compatible with Internet Explorer, which does not support `preconnect`, you can use the `rel="preconnect dns-prefetch"` syntax .

Use `preload` for resources that you know will be useful very early in the page load but that would not naturally be prioritized by the browser. This makes `preload` useless for synchronous scripts present in your `<head>`, which are already considered by the analyzer to have a high priority. You can use it to increase the priority of execution of an asynchronous script declared in your `<head>`. `preload` is also used to load resources referenced by other resources (such as web fonts, images, or other stylesheets referenced using `@import`) to retrieve them while the parent resource is fetched and parsed.

`prefetch` is a directive that sets a very low priority, don’t use it for essential resources. Actually, it can be very relevant for improving navigation on subsequent pages. One of the great use case is to include some `prefetch` directives during the authentication of a user, to take advantage of the time it takes them to input their login and password to preload the static resources needed to render the page they will see once authenticated.

## The `crossorigin` attribute

The `crossorigin` attribute – which is optional – is used when fetching resources from origins that are different from the main origin ([CORS](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)).  
For many resources (such as CSS, or images), you don't need to specify it, unless you want to request these resources by passing authentication headers, cookies, etc. (with the `use-credentials` value).

For other types of resources, defined in more recent specifications, `crossorigin` must be explicitly stated. This is the case, for example, for fonts ([see the specification](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)), **even when they come from the main origin**.

But be aware of the implications: for example, if you are using `preconnect` on a third party domain from which you are retrieving images **and** fonts, make two declarations in order to create two connections: one without `crossorigin`, for the images, and the other with it, for the fonts.

## Consume in moderation

Reading this article, you might assume it’s relevant to declare many Resource Hints so that the browser loads the page as quickly as possible to. That is not the case.

Since it sets a low download priority, you can use `prefetch` without any real impact on the current page load. Be careful though: its use will increase data consumption on your site, which can present issues both for you (increased traffic on your server), and your users (unnecessary over-consumption of resources).

Use `preload` sparingly, as it overrides the priorities set by the browser’s analyzer, both in terms of download and execution. For example, imagine that you have an `async` script in your `<head>`. Thanks to the `async` attribute, its download priority is low. However, once fetched, like any non-deffered script, its parsing and execution interrupt the main thread (you need to use the `defer` attribute to change that). If you add a `preload` directive matching this resource URL, the browser will fetch it faster, so it will parse it faster, negating the effect of your `async` attribute by interupting the main thread very early in the page load).

Though `preconnect` cost is low, it is not null. If the open connection is not used quickly, then the `preconnect` directives only add extra CPU usage (both client and server) and unnecessary network competition.

> […] use it wisely: each open socket incurs costs both on the client and server, and you want to avoid opening sockets that might go unused. As always, apply, measure real-world impact, and iterate to get the best performance mileage from this feature. <cite>"<a href="https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/">Eliminating Roundtrips with Preconnect [EN]</a>", Ilya Grigorik</cite>

This advice from 2015 is still relevant, particularly for connections to secure origins, for which the validation of certificates adds some CPU and network overhead.

The same kind of recommendations can be found [in the work of Ivan Akulov](https://3perf.com/blog/link-rels/), who even advises to switch to `dns-prefetch`, which is cheaper, if more than 4 to 6 domains are concerned.

As you can see, _with great power comes great responsibility_. If you want to get your hands on the priorities generated natively by the browser, then you must proceed in a moderate and responsible way, in order to avoid reproducing network congestion and CPU consumption that would affect your users. This can be very profitable, especially to [optimize third party services (analytics, web fonts, etc.)](https://blog.dareboost.com/en/2020/05/optimize-third-parties-performance/).  
Like many web performance topics: test, measure and iterate!
