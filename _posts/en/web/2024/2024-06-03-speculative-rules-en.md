---
title: Speculative Rules API
subtitle: a new iteration in the pre-loading journey
translations:
    fr: speculative-rules-fr
---

In web performance, there comes a stage when you have maxed out all options for boosting the speed of the current webpage. This could be because you have applied all the enhancements you had planned, or perhaps the constraints of your tech stack just don't allow for more. When you reach this point, your focus will usually shifts to speeding up the load time of the _next_ webpage.

I've seen _a lot_ of experiences around this along the years, and I'm looking very close to the new iteration, the **Speculative Rules API**.

## My story of loading the next page

In the early 2000s, when internet usage was time-limited in France, I, as a teenager, used the FasterFox, a Firefox extension that preloaded all possible links on a webpage while I was reading the main content, allowing me to read others pages offline. This was particularly useful for content-rich websites, such as those with song lyrics and video game tips!

Firefox eventually introduced support for the `<link rel="next">` tag, which allowed the browser to prefetch a page it predicted the user would navigate to next. I found this feature especially handy for creating multi-page articles on my first blogs.

There was a period when I shifted my focus to .NET and didn't engage much with preloading (I mostly used Wordpress for content creation, and learned jQuery, then JavaScript, along the way). I returned to it in earnest around 2012.

A couple years later, Alexandre Dieulot proposed an interesting concept: he noticed that there's typically **a 200 to 300 millisecond delay between a user hovering over a link and clicking on it**. He wondered if this time could be used to preload the page, so it would be ready as soon as the user clicked. This idea, though it required defining what a preload is (an XHR open) and excluding download links, was relatively straightforward and led to the creation of the [InstantClick.io](http://instantclick.io/) library.

Other libraries followed, offering additional capabilities. The most notable [turbolinks](https://github.com/turbolinks/turbolinks). They aimed to provide the same user experience with Multiple Page Apps (MPAs) as with Single Page Apps (SPAs). They leverage [Resource Hints capabilities](/notes/2020-05-preload-prefetch-preconnect-resource-hints/) and the then-new HTML5 History API to **preserve the functionality of the Back and Reload buttons**. It was possible to use both a SPA-like solution and InstantClick, as I did on this blog for a while. However, I eventually decided that the benefits were too slight given the already fast native response time of my blog.

Considering the effectiveness of these solutions and their minimal need for updates over time (InstantClick has barely changed in 10 years), it seemed logical to develop a new browser API that would natively enhance performance for future navigations.

## Introducing Speculative Rules API

The Speculative Rules API introduces a new, declarative method for instructing the browser on what content should be prefetched and/or prerendered on behalf of the site designer.

The speculation rules includes a parameter called `eagerness` that determines when the browser should download the content. Should it do so immediately (as FasterFox did), or should it wait for an additional signal, such as a hover (like InstantClick), or even the mouse pointer moving _toward_ the link?

I find that the rules set by this API are **elegantly designed** and easy to comprehend. For instance, consider the following example, at the end of `<body>`:

```
<script type="speculationrules">
  {
    "prefetch": [
      { "where":
        { "href_matches": "/*" },
        "eagerness": "moderate"
      }
    ]
  }
</script>
```

Or in the form of a snippet to be integrated into your tag manager (for an A/B test, for example)

```
(function () {
  if (HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')) {
    const script = document.createElement("script");
    script.type = "speculationrules"
    script.textContent = JSON.stringify({
      prefetch: [
        {
          where: { 'href_matches': '/*' },
          eagerness: 'moderate'
        }
      ]
    });
    document.body.appendChild(script);
  }
})()
```
{% capture note %} **NOTE**  
Adding a custom HTML snippet in Google Tag Manager will not trigger the speculation rules. Prefer the JS snippet option.{% endcapture note %} {% include note.html.liquid content=note %}

Tell the browser that for all the URLs in the current domain `/*`, it can prefetch if it thinks the user is going to need the content. With a `moderate` eagerness, mostly when the user is going to hover the link.

Is it that simple? It is.

You also have the option to use `prerender` instead of `prefetch`. However, let me emphasis that if the `prerender` rule is applied, it would fetch **and process** the resource in advance, which includes _fetching sub-resources_ as well, whether they're from first or third parties.

## Should We Hold Your Horses?

First of all, it's worth pointing out that even though the functionality has been deployed in Chrome for a few months, **it's still new**. Certain alchemies, such as the `prefetch` speculation coupled with a Service Worker, don't work yet. Nothing dramatic, but caution is the better part of valour.

Speculative prefetching and prerendering, while beneficial for some users' experience, **carries the risk of wasting resources**: bandwidth and server resources if the prefetched data isn't used because the user doesn't navigate to the prefetched page.

If your goal is to enhance your website's sustainability or if you're required to report on it (for instance, due to the European corporate sustainability reporting directive), it might not be the best strategy to artificially inflate the number of pages your servers compute and deliver and your users load.[^press]

[^press]: Conversely, you might have a specific interest in inflating these numbers. In France, for example, state aid to the press is calculated based on the number of page views. It’s clear that some entities will exploit these rules to "generate page views", just as some media did before with excessive refreshes.

From the server side, the use of Speculative Rules can potentially pose a risk to your website. If a rule is too eager, it could trigger a large number of page and resources loads from each user. **This increased load** could significantly strain your server's capacity to swiftly deliver content to all users, particularly if you haven't established caching capabilities beforehand. In extreme cases, this could even lead to a **self-inflicted Distributed Denial of Service (DDoS)**.

Using the Speculative Rules API is therefore not just about enhancing UX, but should be the fruit of an informed decision-making. We can also optimise the rules: as website administrators, we can use behavioral analytics to gain insights into popular pages and user navigation patterns. This information can help us determine whether prefetching would enhance or detract from our users' experience.

Last but not least, the use of the Speculative Rules API can be likened to a form of user hover tracking. If hovering over a link or dragging the mouse pointer over a link triggers a `prefetch` or a `prerender` then all we need to do is consult the server logs to find out what interested a user, or users, whether they visit the page... or not[^gdpr].

[^gdpr]: If the data is processed in this way, it should –at least in the European Union– be subject to consent.

## So, do we use it?

The Speculative Rules API is **the latest development in a long-standing narrative**. The issues I've discussed were already inherent in previous solutions. The Speculative Rules API merely incorporates this behavior directly into the browser, which has certain advantages over JavaScript.

Firstly, the browser is better equipped to determine the position of elements and understand user mouse movement patterns than a developer might be. As such, it currently stands as the most effective option for this type of optimization. Secondly, the browser is aware of the connection status and battery level, and can choose not to speculatively load resources if conditions aren't favorable. If the browser detects that server responses to this origin are too slow, it could also disable this behaviour.

That being said, **the public demand for a more sustainable and privacy-friendly web has never been greater**. So be careful with your rules and don't exceed the rights you have over the logs. Keep in mind that the most sustainable resource load is the one that never happened.
