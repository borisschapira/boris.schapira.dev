---
title: UX Is Not a Checklist
translations:
    fr: l-ux-n-est-pas-une-checklist
---

I was talking yesterday to a customer that was looking for an equivalent to Largest Contentful Paint on Safari.

> _From an SEO point of view_, even if you have a tiny bit of traffic on Chrome, _it's this traffic that shapes the way Google perceives the page's web performance_. But if you want to measure and improve your users’ experience, then I'd say: **why limit yourself to LCP?**
>
> LCP was created as a proxy measure to answer a much more interesting question: "when do users see _enough_ elements to start interacting with the page?". And this "_enough_" depends very page on the page nature and content, and the user's intentions.
>
> LCP is rarely the best metric to answer this. It's just the most generic, computable for most pages, by Chromium and Chromium-based browsers, hence perfect for generic, very wide SEO assessment of billions of pages.
>
> […]
>
> If I’m trying to measure a web page in particular, that I know very well, then I won’t measure the LCP but use custom timings instead. Specific indicators that will best meet the challenges of the page, and help understand how it works:
>
> - The moment the search input autocomplete is functional and displayed (hopefully in that order)
> - On a Product List, the moment users can see the first line of products and start to interact with filters
> - The moment the loading spinner appears and the moment it disappears to display the final content (useful for both splash screens and funnel interstitials)
> - In a page broken down into components retrieving their content from an API, the specific display times of each component
> - etc.

This is one of the reasons why I feel that Contentsquare's acquisition of Dareboost has breathed new life into my career in Web Quality. Even more than before, I've become involved in usability issues, of which web performance is only a part. It helps me keep in mind that the indicators we measure are often only the most generic and imperfect projections of the technical experience of a web page, and not necessarily aligned with clients and organizations' objectives.

Last night, I came across Tim's article that put it very elegantly:

> There’s an tendency at times for organizations to treat performance as a checklist of sorts, particularly as we’ve seen the core web vitals metrics bring more attention to performance than ever before. You try to tick the box on those metrics to get them green, then call it a day.
>
> […]
>
> But none of that matters if those metrics aren’t painting a complete picture of how users interact with our sites.
>
> Performance, like accessibility, is not about conformance.
>
> […]
>
> It’s about providing a better experience for the people using our sites and applications to make sure they can efficiently accomplish their goals. Doing that requires that we pay close attention to what those goals are, how they are trying to achieve them, and then making sure that the way we measure performance matches up. <cite>"<a href="https://timkadlec.com/remembers/2023-06-01-performance-is-not-a-checklist/">Performance Is Not a Checklist</a>", Tim Kadlec</cite>

As someone who has been involved with [Opquast Web Quality Assurance Checklists](https://checklists.opquast.com/en/web-quality-assurance/) for many years, the checklist's criticism obviously resonates with me. But it's fair. Checklists are just the beginning of a web quality approach, a backbone. It's a way of doing things right the first time, and immediately reducing exposure to the risk of non-quality. But it's not a perfect answer to UX, never was and never will be.
