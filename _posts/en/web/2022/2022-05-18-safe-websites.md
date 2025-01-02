---
title: 'Safe Websites'
tags:
    - Client-side Errors
---

Today, I audited four very recent sites.

- one had a server time of ~6 seconds for each resource
- another had lots of front-end components and absolutely no Server-Side Rendering (SSR)
- the third one did not work on WKWebView (the engine used by non-Safari browsers on iOS)
- the last one had a 12 MB image on the homepage

Each of these errors could have been avoided easily. Devs: we should do better. I don't mean that those errors should never happen, only that we should make sure they don't happen that much, like:

- test en staging/preprod environments, with the right devices/contexts
- adopt a stack that make sense according to the User Experience (UX), not only the Developper Experience (DX)
- implement controls to prevent common mistakes

So, I get it. You're building incredible experiences with {insert a JS framework name}. Good for you. I guess it's fast on your computer. But never forget that if you can't broadcast this experience to your targeted demographics, you will fail the users.

Because from a user perspective, most websites are commodities, not space rockets. Use standards to create stable, efficient and **safe** experiences.
