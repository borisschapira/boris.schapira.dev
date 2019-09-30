---
title: 'Performance timing: wait for the next frame'
subtitle: 'using the User Timing API'
i18n-key: user-timing-api-next-frame
tags:
    - 'Performance Web'
    - JavaScript
    - UX
slug: user-timing-api-next-frame
translations:
    fr: ~
---

The usual web performance metrics (First Byte, Speed Index…) are very interesting but I often use the User Timing API ([see on <abbr title="Mozilla Developer Network">MDN</abbr>](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API)) to create my own timestamps that belong to the browser's performance timeline. Using this API, I can create custom metrics, which are based on events that make sense from a business point of view, and [track their evolution over time](https://blog.dareboost.com/en/2018/05/custom-timings-monitoring/) in Dareboost.

<!-- more -->

Using the API in JavaScript is quite simple (and [broadly supported](https://caniuse.com/#feat=user-timing)), for example:

```js
    // The thing you want to monitor the occurrence of
    document.getElementById("content").classList.add("blue");
    // The timestamp
    performance.mark("mark-blue");
```

You can then retrieve the value in your browser developers tools, using:

```
console.dir(performance.getEntriesByType('mark'));
```


However, I recently[^1] realized that I often forgot something important: **just because the JavaScript code has been executed does not mean that the user can see the results of this execution**. The browser must update the display, and its ability to do so depends on the JavaScript code that follows the piece of code we're interested in.

[^1]: Reading "[Performance metrics for blazingly fast web apps](https://blog.superhuman.com/performance-metrics-for-blazingly-fast-web-apps-ec12efa26bcb)", by Conrad Irwin

In the following example, a whole second is injected between my performance mark and the browser update of the display.

```js
    // The thing you want to monitor the occurrence of
    document.getElementById("content").classList.add("blue");
    // The timestamp
    performance.mark("mark-blue-sync");

    // A snippet of code that consumes resources during 1 second
    let n = performance.now();
    while (performance.now() - n < 1000) {}
```

Of course, in real life, you won't have a simple loop. You will have some other time-consuming task. You won't even know what, because it could be in a library on which your code depends, and you have no idea.

As we're not going to analyze all the code that follows the stuff we're interested in to know when to put the timestamp, we need a workaround.

We can use `requestAnimationFrame()` to ask for our mark to be put set before the browser performs the next repaint:

```js
    // The thing you want to monitor the occurrence of
    document.getElementById("content").classList.add("blue");
    performance.mark("mark-blue-sync");
    // The timestamp, before the next repaint
    window.requestAnimationFrame(() => {
      performance.mark("mark-blue-frame");
    });

    // A snippet of code that consumes resources during 1 second
    // but we don't care anymore
    let n = performance.now();
    while (performance.now() - n < 1000) {}
```

***

If you want to see this for yourself, here's [a test page](https://tests.boris.schapira.dev/perfmark-animationframe/).

***

## In a nutshell

- Call the User Timings API to create custom business-related timestamps.
- Encapsulate them  inside `requestAnimationFrame()` callbacks to get to understand how the IU behaves, rather than the code execution. If you really want to understand the code, attach two marks: you will have an idea of the display latency.
