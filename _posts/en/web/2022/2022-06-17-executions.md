---
title: 'Executions'
tags:
    - Client-side Errors
---

Friendly reminder that on the web, you don't control the execution. There are millions of contexts of device, browser, bandwidth, extensions, and support is a beautiful mess… if you don't measure, you are blind.

specially, I see a lot of people migrating from back-end compiled-code culture to component-based JS frameworks and never ever question the total absence of client-side logs collection. I'm not saying it's simple. Privacy is crucial and you'll need to think about the mechanics of anonymization and the legal (and ethical) best practices of data minimization. But if you don't, how do you detect errors and ensure that your product works as intended?

I'm talking about analytics, of course, but also JS errors collections and reporting, and also CSP violations (I'm rooting for `report-to` to reach a large support pretty soon). And I don't know Web Assembly enough but I guess we'll need logs there too!
 
Obviously, there's also a question of ecological footprint. Not only do we ship a lot of JS when, most of the time, HTML and CSS can do the job perfectly but when we don't measure what happen, we artificially increase our page views… because people reload the page whenever they're frustrated, or go to an alternative/competitor and load more pages… When you lose efficiency, all of society pays for it.

So: less code, more instrumentation, and a real focus on every signal the real users experience can provide, to optimize their usage so that they don't have to click twice or reload a page for the content or service to be available. Agreed?