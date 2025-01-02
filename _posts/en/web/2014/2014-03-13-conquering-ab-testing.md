---
layout: post
title: 'Conquering A/B Testing'
canonical: 'https://blog.clever-age.com/en/2015/12/14/conquering-ab-testing/'
canonical_title: "Clever Age's Blog"
cloudinary_logo: clever-logo
translations:
    fr: a-la-conquete-des-tests-a-b
---

Matthew is not the kind of person who takes decisions lightly, especially when it is likely to impact his company's revenue. He likes to try before he buys. This is why he decided to get into A/B testing.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

## A Story About A/B Testing

Matthew is not the fussy type, really, but his responsibilities and professionalism command him to monitor any evolution of his company's website, in order to ensure that all key indicators improve with each delivery.

{% capture img_alt %}A pen writing a question mark on a paper{% endcapture %} {% capture img_caption %}"Questioned Proposal" by Ethan Lofton - CC BY 2.0{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/1.jpg"
alt=img_alt
caption=img_caption
%}

But sometimes, let's face it, Matthew is not sure. He hesitates. He wonders: will this new feature improve user experience? Will this new communication strategy motivate more customers to visit our website? And this new payment funnel, is it really more efficient than the old one?

## A/B Testing Is Simple and Objective

To improve his decision-making process, he does some research and discovers a methodology widely adopted by Internet giants : **A/B testing**. He reads [the Wikipedia article](https://fr.wikipedia.org/wiki/Test_A/B) with great attention and immediately understands the principle, which consists of three steps:

1.  First, he will need to deliver two versions of his feature and direct some users to the first one (version A), and the other users to the second one (version B);
2.  At the same time, he will need to make sure he can collect user experience data on both versions. For Matthew, this means adapting his analytics markup to be able to differentiate measurements from each version;
3.  Finally, the analysis of these figures will allow Matthew to establish statistical facts regarding both versions and determine which one provides the best results according to his criteria.

Full of confidence, Matthew looks for a few examples to help convince senior management. For example, he discovers [the incredible but true story](http://www.nytimes.com/2009/03/01/business/01marissa.html) of Marissa Mayer (then a Google executive), who had asked her teams to deploy 41 shades of blue on a website in order to determine which one was the most effective with users. If Google can do it, then Matthew should be able to do it too. It even looks easy.

## A/B Testing Is Complex and Subjective

Matthew is thinking about concrete implementation steps. His first constraint is the difficulty to set up two simultaneous versions. It is a strong constraint for Matthew, who realizes that he will not be able to run as many A/B tests as necessary: his company's IT infrastructure is limited and he cannot request new servers and gateways to extend the architectural framework as much as he would need to. Nevermind that, he decides to make the move anyway and sets his development team to work. He specifically chooses an alteration that does not require any change in infrastructure: a visual variation within a page.

{% capture img_alt %}A wireframe of the product page of an ecommerce website{% endcapture %} {% capture img_caption %}Product page template: the yellow area will feature either a picture of the product (version A) or a video (version B){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/2.png"
alt=img_alt
caption=img_caption
%}

After hesitating for a while, he finally decides to evaluate the display of the product image on the "Product Page" template of the e-commerce website. The current version, with the product image to the left of the description, will be considered as the control version (version A). On version B, a video of the product will be displayed instead. The Marketing Department has been insisting that we should use more video, the time has come to verify these claims! But an analytical problem then arises: how can the effectiveness of one version over the other be measured? Many indicators can be used to evaluate user experience: successful sales, abandoned carts, time-based measurements, bounce rate measurements... After careful consideration, the team makes a choice: the add-to-cart action will be the criterion for a successful version. The more a product gets added to cart, the more effective the version. Next arises a technical problem: for the sake of consistency, Matthew wants that users who have been directed to a specific version stay on that version for the entire duration of the test — displaying either a picture or a video completely at random is out of the question! So the team creates a cookie that will store the appropriate version for the current visitor at the time when that version is assigned. For each visitor, the system will then test whether the cookie exists and if it does, it will display the relevant version. The last step is to decide which version will be displayed on a customer's first visit. Again, a choice must be made regarding the way users are handled: What proportion of visitors will see version B? Based on what criteria will they be selected? What area of the website will be affected by the test: all product pages or only some of them? To avoid influencing the results, A/B testing methodology requires using a completely independent criterion, but finding one is not so easy! Matthew and his team finally decide to use a random assignment approach and display the control version to 99% of users and version B to only 1% of them, on the entire site. This means that if version B does not fulfill expectations, the impact on business will be limited. Matthew realizes that, under the guise of objectivity, the team has made a number of highly subjective choices:

- the nature of the test itself;
- the way of measuring how successful each version is;
- the way in which visitors are sorted and distributed.

In the end, A/B testing is not that easy. Oh well, too late to stop now!

## A/B testing starts where it ends

Matthew decides to run a test over a few days. The results are as follows:

<table>
  <thead>
    <tr>
      <th>Version</th>
      <th>Number of visitors</th>
      <th>Number of add-to-cart clicks</th>
      <th>Add-to-cart clicks / visitors ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Version de contrôle (A)</td>
      <td class="numeric ">34 217</td>
      <td class="numeric ">6234</td>
      <td>18,21 %</td>
    </tr>
    <tr>
      <td>Version avec vidéo (B)</td>
      <td class="numeric ">327</td>
      <td class="numeric ">68</td>
      <td>20,79 %</td>
    </tr>
  </tbody>
</table>

A quick look at the ratio between the number of add-to-cart clicks and the number of visitors seems to suggest that version B was more effective than version A. Unfortunately, traffic was lower than expected and the sample is very small. Hard to say if this sample is sufficient to draw general conclusions from these results... On top of that, one of Matthew's team members brings in new information: due to an error in the random assignment algorithm, visitors entering the website from the "High-Tech" section were selected for version B more often than other visitors. However, the "High-Tech" section has one of the best conversion rates on the entire site. This means that the nearly 3-percentage-point difference they observed may not be related at all to the modified product page. Matthew and his team are skeptical. Finally, over the few days during which the test took place, the site's overall conversion rate dropped. Since he did not include A/B markers in his indicators all the way to the payment stage (only add-to-cart clicks stored this distinction), Matthew is struggling to determine whether version B is in any way responsible... What if people added more items to their carts but ended up leaving the site without purchasing anything? This is a risk the team cannot take lightly. Matthew is learning a lot of things... about how to run A/B tests. But regarding the product page, no conclusion can be drawn: the experiment must be conducted again, this time with more control.

## A/B testing, when more people get involved

Eventually, Matthew and his team perform a new test with better measurements and a more significant volume, allowing them to isolate the results. Contrary to their initial impressions, version B is less effective. The website is completely rolled back to the version displaying a product image. Even though Matthew is frustrated about not understanding the reasons behind this result — since he thought video could only be more appealing — he is still satisfied with what he has achieved and he receives praise from his superiors. As they are reveling in their success, Matthew's team starts receiving an increasing amount of test requests, mostly from their marketing colleagues who have found in these tests a great way for measuring visitor activity. But many technical problems emerge because some of these tests, which seem rather straightforward on paper, actually require maintaining multiple software architectures that are not compatible with each other. Matthew and his team have to put these tests on hold while they rewrite parts of the code to be able to inject dependencies. At the same time, other requests — also on hold for an unspecified period of time — require changes to the technical infrastructure. So many expenditures that were not budgeted... Fortunately, it is still possible to run some of the tests. Among them, the marketing team is asking for a split test on the home page of the corporate site. This means that entirely different versions of the page will be tested. Well, why not, thinks Matthew...

{% capture img_alt %}A street name on a wall, stating 'Rue d'enfer', french for Hell's street{% endcapture %} {% capture img_caption %}"Rue d’Enfer" by Frédéric Bisson - CC BY 2.0{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/3.jpg"
alt=img_alt
caption=img_caption
%}

Unfortunately, this request adds to the pile of other requests, some of which actually concern similar pages. Potentially, users could unknowingly undergo several A/B tests within a single page. On the product page, for example:

- one A/B test relating to the font for the product name;
- one A/B test relating to the call-to-action text for the add-to-cart feature;
- one last test that would influence the real-time display of product data.

While it is technically possible (by stretching the concepts that are already in place for single tests), this multivariate analysis does raise the issue of the increasing complexity of statistical analysis, which was already a delicate task. Because with all these tests, the number of versions of the site increases exceedingly fast. Matthew is now in charge of:

- one A/B/C split test on the home page;
- three A/B tests on the product page;
- one A/B test involving a variation of the navigation structure...

... this means 18 different possible combinations for each visitor and a significant increase in maintenance costs (because now, to reproduce a bug you have to use the exact same configuration as the client browser on which it occurred). The issue of tracking must also be added to these costs, because the last test has the direct consequence of distorting existing analytics, which until now were based on URLs.

## A/B testing, getting the right tools

Doing some research, Matthew discovers a few companies offering products that facilitate A/B testing. Most of them internalize two of the major issues: statistical analysis and campaign management. Some products can even automate campaigns and end them once a meaningful result has been obtained. Unfortunately it is very difficult to determine the value of a solution over another, since each of them seems to be adapted to a particular need:

- For commercial teams, some solutions come on top of the Front End to modify the page viewed by the customer on the fly. The concept seems appealing at first, but users sometimes end up experiencing slowdowns, page flashes and even, in the most extreme cases, SPOF situations (Single Point of Failure: a situation in which the site relies heavily on one or more external resources; if these resources are not available or a technical problem makes it impossible to access them from the client — network problem, unreliable gateways — then the page can no longer be viewed);
- other more "injection-oriented" solutions make it possible to easily create switches between multiple software architectures;
- finally, other solutions make it possible to quickly switch from one architecture to another, but they introduce additional gateways into the system, leading to increased risks and decreased performance.

So Matthew knows that he will need to do some more research on these products and select the best solution to address the issues he faces. But beyond that, he is also starting to get the impression that...

## A/B testing has many limitations

The first of these limitations lies in the adaptation capability. Any optimization project consists in getting closer to the best solution by comparing several variations. But it does not mean that the most successful one is the absolute best of all variations. Just because a local optimum is reached (around the original conditions) does not mean that there is no other, very different variation producing better results.

{% capture img_alt %}Une représentation mathématique en 3D présentant un maximum local{% endcapture %} {% capture img_caption %}Parfois, on a l'illusion de l'optimisation. Alors que le sommet est plus loin.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2014-03-13/5.png"
alt=img_alt
caption=img_caption
%}

For instance, let us imagine that we proceed to a multivariate analysis consisting of two tests, each with about fifteen variations (the scenario is extreme, but it serves the demonstration well). In this case, experimenting with the variations of both tests consists in moving along the yellow plane of [the graph](https://blog.clever-age.com/wp-content/uploads/sites/2/2014/03/WebPerf-Waterfall.png), in search of the best possible performance. Once at the highest point of the yellow peak, nothing tells us that there is actually a higher peak elsewhere and that we would have found it, had we continued our tests with a greater number of variations. Moreover, an A/B test will never say what we want it to say. In Matthew's example with the product image vs. product video, the test's result was that product images were the most effective solution, but Matthew has no clue that this is probably the consequence of two factors: on the one hand, users are accustomed to viewing videos in landscape rather than portrait mode, and on the other hand, they are unable to stay focused when presented with an interactive medium. Promoting A/B testing is certainly a good thing... as long as you ask professionals to help you understand how to interpret their results! In addition, there are a number of other obvious limitations:

- A/B testing knows nothing about your visitors. It does not know whether they are old, young, tech-savvy, loyal... yet different profiles can have entirely different behaviors and decision-making processes, and you will only get an overall view of this. You will need to complete your A/B testing system with a quality analytics tool or a tracker, allowing you to properly segment feedback from these different types of visitors;
- Running an extravagant number of multivariate analyses requires an increasing amount of visitors: for this reason, it is not possible to "test everything" in the hope of finding the right formula, especially considering that calculating the conversion rate is probably more complex than simply adding up all scenarios;
- A/B testing is a short-termist solution that does not take into account the learning curve of your visitors. Therefore it does not have the same relevance for mass retailers and for companies with sophisticated products and a thoroughly planned sales process.

## A/B Testing, in the end

Consulted by senior management, Matthew tells them all about his experience with A/B tests. Initially seen as a magical decision-making tool, A/B testing is actually more complex and costly than expected. In fact, just like all tools, A/B Testing must be handled by experts with the best possible knowledge of the context. Well, that is until an A/B test proves the opposite!
