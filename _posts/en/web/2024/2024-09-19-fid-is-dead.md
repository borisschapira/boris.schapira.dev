---
title: FID is Dead
subtitle: Long Live INP
---

**It’s official, Chrome ends support for First Input Delay (FID).**

FID was unlikely to be a significant concern for many websites. Since the majority of websites effortlessly meet Google's standards, only a small number of site speed specialists have found it necessary to fine-tune their optimization strategies for this particular metric.

To close this final chapter, I wanted to say a few word.

In 2019 the field was notably deficient in a genuine interactivity metric. Time To (Consistently) Interactive (TTI) served as an inadequate alternative, as it merely assessed the final slowdown during the loading phase. This discrepancy left me feeling personally disappointed, [as I expressed in my notes](/notes/2019-05-measuring-interactivity-time-to-interactive/), and the poor naming of the metric created more ambiguity than relief.

So when First Input Delay (FID) was introduced, I was very excited. Having the ability to measure actual interactivity latency, even if it only was for the first interaction on the page, was very new!

The initial recommendation threshold for FID was to have "99% of users experiencing a FID under 300ms". Achieving this was quite challenging, leaving little room for optimizing experiences on poor devices or during the loading of immersive, experiential landing pages.

This recommandation, however quickly aligned with other Core Web Vitals metrics, on the value of the 75st percentile. As a result, First Input Delay lost its relevance, creating space for a more refined metric now known as Interaction to Next Paint.

👋 Bye FID and thanks for paving the way!
