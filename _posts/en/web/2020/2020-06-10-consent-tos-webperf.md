---
title: 'Punishing Loyalty'
description: >-
    What happens when your users give you consent for usages on their data? Quite often, their Quality of Service deteriorates…


tags:
    - 'Performance Web'
    - GDPR
slug: consent-tos-webperf
translations:
    fr: consentement-tests
last_modified_at: 2020-08-18
---

Let's imagine that you deploy on your site a consent collection mechanism tied to your Terms and Conditions of Use (TC). This consent is generally structured around different purposes: consent to telemetry, consent to advertising, consent to the transmission of information to third parties...

If you want to finely measure the impact of these different "levels of consent" on Web Performance, then you need to look at all the use cases, depending on the relationship the subject has with your site.

To measure the performance of these uses cases, you're going to need either Real User Metrics, or Synthetic Monitoring solutions. Most tools will ignore the cookie banner and so test without loading those extra dependencies, so you'll need to configure your tests so that they start with a specific configuration (often a cookie) to reproduce all the use cases:

1. The user blocks the consent request script (via an adblocker, for example).
2. The user has given their consent to this version of the TC.
3. This user has given their consent to a previous version of the TC, you need to ask for their consent again.
4. The user has explicitly refused their consent to this version of the TC.
5. The user has explicitly refused their consent; you could ask for their consent again (at your own risk).

Case number 3 can give rise to a significant amount of testing as you should ideally test all consent combinations: "telemetry", "telemetry + advertisements", "advertisements only" .

**To simplify**, you can focus on the two most extreme use cases:

1. What happens if the user refuses or does not consent?
2. What happens if the user consent to all usages?

Very often, the acceptance of all uses leads to a situation where the user experience is disastrous, and users are not offered any new feature to compensate for this degradation of their experience.

This is an opportunity for Product Managers to reflect on the ethics of this type of implementation. Is it normal that **we offer the most degraded experience to our most loyal users**?

This reflection may result in a
transformation of the offer, either towards a model where loyal users are
rewarded for their sacrifice (by gaining access to features that
are only available to those who accept third parties data collection), or
towards a paid model, more protective but less accessible to
all.

Philosophically, we then enter into very up-to-date considerations on
privacy as a capital or as a common. A fascinating subject.
