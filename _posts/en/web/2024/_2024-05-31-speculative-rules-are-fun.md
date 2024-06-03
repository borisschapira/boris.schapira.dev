---
title: Speculative Rules API
subtitle: a new iteration in the pre-loading journey
---

In web performance, there comes a stage when you have maxed out all options for boosting the speed of the current webpage. This could be because you have applied all the enhancements you had planned, or perhaps the constraints of your tech stack just don't allow for more. When you reach this point, your focus will usually shifts to speeding up the load time of the _next_ webpage.

I've seen _a lot_ of experiences around this along the years, and I'm looking very close to the new iteration, the **Speculative Rules API**.

## My story of loading the next page

In the early 2000s, when internet usage was time-limited in France, I, as a teenager, used the FasterFox, a Firefox extension that preloaded all possible links on a webpage while I was reading it. This was particularly useful for content-rich websites, such as those with song lyrics and video game tips. Firefox eventually introduced support for the `<link rel="next">` tag, which allowed the browser to prefetch a page it predicted the user would navigate to next. I found this feature especially handy for creating multi-page articles on my first blogs.

There was a period when I shifted my focus to .NET and didn't engage much with the web at this level (I mostly used Wordpress for content creation, and learned jQuery, then JavaScript, along the way). However, I returned to it in earnest around 2012. 

A couple years later, Alexandre Dieulot proposed an interesting concept: he noticed that there's typically a 200 to 300 millisecond delay between a user hovering over a link and clicking on it. He wondered if this time could be used to preload the page, so it would be ready as soon as the user clicked. This idea, though it required defining what a preload is (an XHR open) and excluding download links, was relatively straightforward and led to the creation of the [InstantClick.io](http://instantclick.io/) library.

Other libraries followed, offering additional capabilities. The most notable [turbolinks](https://github.com/turbolinks/turbolinks). They aimed to provide the same user experience with Multiple Page Apps (MPAs) as with Single Page Apps (SPAs). They leverage [Resource Hints capabilities](/2020-05-preload-prefetch-preconnect-resource-hints/) and the then-new HTML5 History API to maintain the functionality of the Back and Reload buttons. It was possible to use both a SPA-like solution and InstantClick, as I did on this blog for a while. However, I eventually decided that the benefits were too slight given the already fast native response time of my blog.

But considering the effectiveness of these solutions and their minimal need for updates over time (InstantClick has barely changed in 10 years), it seemed logical to develop a new browser API that would natively enhance performance for future navigations.

## Introducing Speculative Rules API

The Speculative Rules API introduces a new, declarative method for instructing the browser on wat content should be prefetched and/or prerendered on behald of the site designer.

The API includes a parameter called `eagerness` that determines when the browser should download the content. Should it do so immediately (as FasterFox did), or should it wait for an additional signal, such as a hover (like InstantClick), or even the mouse pointer moving _toward_ the link?

The rules set by this API are elegantly designed and easy to comprehend. For instance, consider the following example:

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

Tell the browser that for all the URLs in the current domain `/*`, it can prefetch if it thinks the user is going to need the content. With a `moderate` eagerness, mostly when the user is going to hover the link.

Is it that simple? It is.

You also have the option to use `prerender` instead of `prefetch`. However, let me emphasis that if the `prerender$ rule is applied, it would fetch **and process** the resource in advance, which includes _fetching subresources_ as well, whether they're from first or third parties.

## SHould We Hold Your Horses?

Speculative prefetching and prerendering, while beneficial for some users' experience, carries the risk of wasting bandwidth and server resources if the prefetched data isn't used because the user doesn't navigate to the prefetched page. If your goal is to enhance your website's sustainability or if you're required to report on it (for instance, due to the European corporate sustainability reporting directive), it might not be the best strategy to artificially inflate the number of pages you compute and your users load. It's important to balance performance optimization techniques like prefetching with the overall sustainability and efficiency of your website.[^press]

[^press]: Conversely, you might have a specific interest in inflating these numbers. In France, for example, state aid to the press is calculated based on the number of page views. It’s clear that some entities will exploit these rules to "generate page views", just as some media did before with excessive refreshes.

From the server side, the use of Speculative Rules can potentially pose a risk to your website. If a rule is too eager, it could trigger a large number of page and resources loads from each user. This could significantly strain your server's capacity to swiftly deliver content to all users, particularly if you haven't established caching capabilities beforehand. In extreme cases, this could even lead to a self-inflicted Distributed Denial of Service (DDoS) situation.

Using the Speculative Rules API is therefore not just about enhancing performance, but also about sustainability and informed decision-making. As website administrators, we can use behavioral analytics to gain insights into popular pages and user navigation patterns. This information can help us determine whether prefetching would enhance or detract from our users' experience.

## So Why Is It Better?

The Speculative Rules API is the latest development in a long-standing narrative. The issues I've discussed were already inherent in previous solutions. The Speculative Rules API merely incorporates this behavior directly into the browser, which has certain advantages over JavaScript.

Firstly, the browser is better equipped to determine the position of elements and understand user mouse movement patterns than a developer might be. As such, it currently stands as the most effective option for this type of optimization. Secondly, the browser is aware of the connection status and battery level, and can choose not to speculatively load resources if conditions aren't favorable. If the browser detects that server responses to this origin are too slow, it could also disable this behaviour.

That being said, the public demand for a more sustainable web has never been greater. Therefore, it would be quite inappropriate to be too greedy in your Speculative Rules. Keep in mind that the most sustainable resource load is the one that never happened.
