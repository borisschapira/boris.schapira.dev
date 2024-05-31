---
title: AI and LLMs, uses I see in 2024
translations:
    fr: des-usages-des-llms
---

When the hype started to build around what is commonly referred to as "Artificial Intelligence" (AI), I wrote <a href="/notes/2023-02-des-questions/" hreflang="fr">a first article to highlight some of the opportunities and risks I saw in it</a>. The market has matured, and so has our perception of the world. What more can I say in 2024 from what I can see (a very limited vision, I'm aware).

**In terms of communication**, the general and specialized press continues to wallow in confusion by naming everything and anything "AI", which generates an invitation to companies to jump on the bandwagon and, in turn, announce that they are doing AI without it really being clear whether they are using algorithms, machine learning or deep learning.

The public understands "software that makes decisions without us being able to question its inner workings". I suppose that once a certain lack of transparency is reached, it doesn't matter how the sausage is made.

> Any sufficiently advanced technology is indistinguishable from magic. <cite>Arthur C. Clarke</cite>

**Image description**, we're there. Cloudinary automatically generates captions for images for which descriptions have not been provided at upload ([demo](https://ai.cloudinary.com/demos/captions)). Ice Cubes, Mastodon's iOS client ([in the App Store](https://apps.apple.com/app/ice-cubes-for-mastodon/id6444915884)), offers on-the-fly image caption at upload time, to help with entering alternatives. The official Mastodon Web app does it too.

**Translation**, we're there too. With all the unfortunate consequences that entails: the giant Duolingo, for example, has massively shed its contract staff. No need for translators when you can rely more heavily on a software layer providing an output that is probably less qualitative, but so much cheaper.

All professions involved in **the production of graphic and textual content for the general public** are undergoing profound changes, and therefore are in crisis. Workers are, even more than before, competing on their ability to develop the most precise prompts to generate relevant content, carrying a recognizable message and style. Freelance or commissioned production is disappearing, replaced by automated generation just good enough to create advertising opportunities.

On the B2B and government side, tools for **reformulating and summarizing files** are beginning to appear. Without masking the complexity of a file, and by providing references to the elements it summarizes, hence enabling verification, these tools could rapidly improve the performance of all economic agents: real estate, property management, accounts management, consulting, and so on.

On **e-commerce marketplaces** and content sites for netlinking, thousands of external references are integrated and reformulated on the fly, ensuring that search engines don't label the content as duplicated. And **search engines** themselves are getting in on the act, reserving their indexing capacity for sites that accept that their content be stolen and never displayed, since it will have been reformulated by a conversational program that, if it's polite enough, will add a link as a footer reference.

After years of believing in the Net Promoter Score when every serious study confirms its invalidity[^nps], **web operational teams** are gradually moving away from the concept and returning to verbatim analysis, but above all to behavioral analysis. User frustration doesn't necessarily translate into feedback (verbatim or note), but it can be collected and correlated with friction in the achievement of objectives.

[^nps]: Amoung other issues, NPS is based on the principle that a person cannot be both a promoter and a detractor. But when someone takes the time to leave you a rating and a negative review when they have the choice not to, it's clearly because they like your brand. Your NPS is only ever a reflection of the people who are not indifferent to your brand. Other people are not taken into account. Learn more : "<a href="https://hbr.org/2019/10/where-net-promoter-score-goes-wrong">Where Net Promoter Score Goes Wrong</a>", Christina Stahlkopt.

A number of design aids are emerging within **prototyping or A/B testing solutions**. Based on an automatically identified of a deviation from the norm, they try to suggest ways of optimizing the UI. I have my doubts about this approach. At best, guided by an obfuscated internal rule engine, this Computer-Aided Design (CAD) would influence the neutralization of the brand image, by proposing highly consensual UIs that are not necessarily more usable or accessible. In the worst case scenario, proposals resulting from automated learning without business context will be in total contradiction with the design system and the organization's objectives.

The situation is a little different for the **training, advanced business support and technical documentation** professions. Having always had a niche clientele, they are not interested in producing huge volumes of answers, but in accurate content. Reducing LLM training to a very small documentary base, they can quickly benefit from conversation aids. As a user of a support feature, you're not necessarily talking to a conversational bot, but the person handling your need is sure to have a writing aid that enables them to gain in productivity, while validating answers. Some highly specialized conversational bots may even provide precise answers to niche thematic questions.

Once properly trained, these assistants can operate with little supervision. Thus, 2024 should see the return of **shopping assistants** triggered on demand or after a frustration signal is given. By re-engaging users, they can only save a few sales.

The qualification of these **signals** is a major emerging theme in e-commerce. Supported by data collection that is _necessarily consented to_ (at least in Europe), it is now the basis for a **personalization** of experiences, made technically possible by the **composability of the e-commerce experience**. This evolution should explode the well-established UI norms (the home page, the product list page, the product page) to allow for more audacious compositions. We're dealing here with an in-depth evolution rather than a passing fad, which began years ago with [the static movement and headless e-commerce](/notes/2018-02-static-website-web-performance/) and continues today with custom composable architectures (MACH) or solutions from Adobe or Salesforce that are constantly pulling the market towards personalization.

Of course, in this galaxy of "signals", there are both wheat and chaff. I'm very skeptical about differentiating users on the basis of **behavioral profiles** determined by analyzing a few actions at the start of a session. I'm not saying it's not possible, but I'd very much like to read the scientific research attesting to the correlations between the models constructed and another form of perception of reality. It sells very well, web operators really want it to be true, but I've never seen the data to back it up.

In any case, the market is probably getting too carried away with personalization. Before being fully automated with dynamic signals, dimensions will certainly be chosen manually, probably by merchandising teams. Among emerging uses, I foresee the acceleration of **product image personalization during campaigns**. I expect to quickly find sites where my "For You" selection will contain products whose image will have a predominantly pink palette. Once again, Cloudinary dominates the market with a proposal for on-the-fly modification of packshots from an instruction, but other Digital Assets Management companies should quickly follow suit _if the proof of value is consistent with the cost_. Indeed, the production of personalized images remains an energy-intensive task, and who can say if the small number of retailers able to afford these tools will make them _profitable_.

The last area I see emerging, driven by "AIs": **in-demand personalization**. Today, natural language analysis tools make it possible to understand a sentence like :

> I want to consume products made in France and produced in an eco-responsible way.

and not only filter the catalog accordingly, but also generate part of the product description in an adapted manner. For example:

> Manufactured at Choulat-Le-Tréfon, in the heart of the French Champignois region, from recycled tire inner tubes, this belt is delivered according to the EcoStandard®.

A good way for huge marketplaces in need of an image to recreate a link with their customers, while at the same time showing a form of respect for their specific expectations.
