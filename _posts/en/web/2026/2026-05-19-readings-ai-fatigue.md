---
title: "Further Reading on AI Fatigue"
translations:
    fr: lectures-fatigue-ia
---

Last February, I wrote about [productivity and quality](/notes/2026-02-productivity-quality/): poorly thought-out delegation, the cognitive load on validators, the silent erosion of collective skills. A text built from an organizational perspective, drawing on my conversations with colleagues who ultimately hold roles peripheral to the code itself.

## What I had missed

One of them shared with me an article by Siddhant Khare, who lived that same reality up close. He builds AI agent infrastructure, meaning the tools other engineers use to run AI in production. And he still ended up hitting a wall. Not a performance wall. A human one.

His article, "[AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real)", haunts me, as it significantly completes what I had written.

{% capture note %} **NOTE**
There is no need to come tell me that AI is an ecological and economic waste; I am aware. What interests me is the fact that these tools are, today, a reality, and that this reality has human and organizational consequences.

We can talk about how difficult it is to do without this technology in a competitive landscape where it is used massively, while also knowing it is not profitable in the long run. But that is not the subject of this specific post.{% endcapture note %} {% include note.html.liquid content=note %}

### The clash of probabilistic systems

My article talked about **cognitive overload from validation**. What I had not named is a very specific source of that overload: the fact of collaborating with a fundamentally unpredictable system, while our brains are wired for determinism.

Siddhant puts it with a precision I had not achieved:

> you are collaborating with a probabilistic system, and your brain is wired for deterministic ones. That mismatch is a constant, low-grade source of stress.

The fact that the model decided to go a different direction today, that the same prompt produces different results from one day to the next, with no accessible explanation, no readable log, is terrible. For someone whose work depends on the ability to reason about deterministic systems, this is a source of quiet but constant anxiety.

I know, of course, that this is not inevitable. There are ways to reduce LLM variability, to make them more predictable. But it is a long-haul effort, and it is easy to underestimate just how much this unpredictability is a source of stress for teams.

### The treadmill of new tools

All the more so because the pressure is constant to stay "up to date" in a team dynamic that reinvents itself every week, every day.

> I fell into this trap hard. I was spending weekends evaluating new tools. Reading every changelog. Watching every demo. Trying to stay at the frontier because I was terrified of falling behind.

Entire weeks spent configuring a new tool, only to see it obsolete the following week. Carefully built workflows, outdated within three months after a model update. Siddhant calls this **Knowledge Decay**, the depreciation of accumulated knowledge. I had missed that one, but it is real.

This is not simply fatigue. It is a **regular destruction of our cognitive investment**, with no guarantee of return. And this destruction is systemic, not individual.

### The "come on, let me try one more thing" trap

My article focused on organizational dysfunctions. Siddhant zooms in to the level of the individual daily work gesture.

> You started with a clear goal. Thirty minutes later you're debugging your prompt instead of debugging your code. You're optimizing your instructions to a language model instead of solving the actual problem.

He calls this the **Prompt Spiral**, and I would be dishonest if I said I had never felt it. You start with a clear objective. The first response is 70% right. From there, you refine the prompt. The second iteration is 75% right, but it broke something the first one had gotten correct.

And so on. Forty-five minutes later, you have lost sight of the initial goal, you are in a vicious cycle, and you have not moved an inch.

What I find remarkable in his text is that Siddhant does not stop at the diagnosis. He proposes concrete rules, drawn from his own experience: three attempts maximum, then write it yourself; sessions capped at thirty minutes. The first hour of the morning without AI, to "warm up" his own thinking before delegating anything at all. 

There is something sadly fascinating in seeing just how necessary these rules have become for good mental hygiene, and how difficult they are to stick to.

**My article was addressed to managers and organizations. His is addressed to practitioners, directly.** They are not at the same altitude. Both are necessary. Both are unsettling.

In short, I invite you to read "[AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real)" because it completes everything I had left aside: the anxiety of the determinist facing the probabilistic, the exhaustion of permanent monitoring, the micro-decisions that accumulate until burnout.

And if you have lived what he describes, know that you are not alone. And that it is not a question of competence or discipline. What we are living through, what the market is imposing today, is hard, and will have significant consequences on our mental health, our ability to do good work, and our enjoyment of this profession. And this will hold true even if the bubble bursts.

## Blame It on the Boogie 🎶

Between two articles questioning the **how** (how to better use these tools, how to reorganize processes, how to preserve one's mental health), I also recently read another text that poses a different question: the question of **why**.

My article and Siddhant's analyze **effects**: overload, erosion of skills, individual and collective fatigue. We describe what is happening on the deck of the ship. "<a href="https://www.stvn.sh/writing/programming-still-sucks-fqffhyp" hreflang="en">Programming Still Sucks</a>", by Steven Langbroek, describes how the ship was built, who decided to throw the manual overboard, and who signed the list of eliminated positions while convincing themselves that "the juniors will adapt" (spoiler: no).

> AI didn't take our jobs. Greed did. Same greed that moved factories to Bangladesh and keeps slaves in cobalt mines in the Congo, wearing a new mask.

The text is more literary, more political, deliberately angrier (I love it all the more for it). It is an excellent illustration of how short-term productivity obsession destroys things without seeing it, without even knowing what it is destroying. Where my article asks "how to delegate better?" and Siddhant's asks "how to survive this pace?", this third text asks: **who decided this was acceptable, and why?**

The picture is fairly complete, and unfortunately fairly dark.

## And unfortunately, we are right

To drive the nail in further, one last piece of reading: the INSEE[^insee] economic outlook note for March 2026, titled "[Éclairage – Avec l'essor de l'intelligence artificielle générative, l'investissement numérique tire davantage la croissance aux États-Unis qu'en France, tandis que l'emploi recule dans les activités informatiques des deux côtés de l'Atlantique](https://www.insee.fr/fr/statistiques/8907419?sommaire=8907467)".

[^insee]: INSEE (<span lang="fr">Institut national de la statistique et des études économiques</span>) is France's official national statistics agency, responsible for producing and publishing economic, social, and demographic data. Its economic outlook notes are considered authoritative references in French public policy debates. When INSEE says employment is falling, it is not an op-ed; it is the scoreboard.

One can read in particular:

> In particular, sector-level indicators suggest an employment reversal over the past two years in the most exposed segments, notably in computer programming activities, and for which value added is trending upward, in both the United States and France. Furthermore, in both countries, employment adjustment in this sector would be concentrated among young entrants.

"Employment reversal", in case you are not sure what that means, is an elegant way of saying that jobs are being destroyed. This is made explicit further on in a chart caption:

> Employment in the information technology and information services sector fell by 3.0% between Q4 2023 and Q4 2025. The contribution of 15-29 year-olds (excluding apprentices) was -3.8 percentage points, compared to +1.4 points for 30-54 year-olds.

Because in this difficult context, older workers, who are able to draw on their experience to achieve the necessary emotional distance we are all talking about, are better positioned to cope with the situation (or at least, to cope with it the least badly). Young people are more vulnerable. They have not yet had time to build a career, develop transferable skills, or forge the experience that would make them more resilient in the face of this kind of shock.

In short, the numbers are there, and they are not good. We are right to be worried. We are right to feel tired. We are right to wonder how we are going to continue doing good work under these conditions.
