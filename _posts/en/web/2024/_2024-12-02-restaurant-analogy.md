---
title: Your website is a restaurant
canonical: 'https://calendar.perfplanet.com/2024/your-website-is-a-restaurant/'
canonical_title: 'the Web Performance Calendar'
translations:
    fr: analogie-restaurant
---

In most organizations, even before creating a website, teams select the technologies to use, often without having defined the functional scope and desired user experience. I won’t infer here on their motivations, but the fact is that they present this to stakeholders who often do not know what it is about, and validate from a lack of skills.

Before you delve into the latest trends championed by major companies, thinking you have the same needs and capabilities as them, let me take a moment to explain how a website is built using a metaphor you will understand: restaurants.

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

---

{% capture img_alt %}Vegetable salad on white ceramic plate.{% endcapture %}{% capture img_caption %}Photo by Iina Luoto on Pexels{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-iina-luoto-460132-1211887.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## How to serve a restaurant dish?

If you ever want to serve a dish, you will need a precise list of ingredients and their attributes (that can depend on the ingredient). A carrot can be steamed, an egg poached. This list of cooked ingredients adds depth and flavor to the dish.

{% capture note %}This is HTML.{% endcapture note -%} {%- include note.html.liquid content=note %}

Cooked ingredients alone do not create a dish; presentation is key. To truly engage diners, you must showcase these ingredients in a manner that reflects the essence of a restaurant's culinary artistry.

{% capture note %}This is CSS.{% endcapture note -%} {%- include note.html.liquid content=note %}

However, a beautifully presented plate does not solely define a restaurant dish. To achieve this, you need attentive wait staff who take orders, communicate them to the kitchen, and then serve the plates back to the dining room.

{% capture note %}This process represents your browser, interacting with the web.{% endcapture note -%} {%- include note.html.liquid content=note %}

{% capture note %}You now know the basics.

Let’s create a restaurant that will later become a franchise.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}Cheerful diverse colleagues working on laptop in cafe{% endcapture %}{% capture img_caption %}Photo by Ketut Subiyanto{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-ketut-subiyanto-4350066.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Creating the concept

To bring this project to fruition, the owners assemble a dedicated team. This includes a designer who envisions the customer experience, a chef responsible for crafting the kitchen processes, and skilled craftsmen tasked with building the furniture and partition walls. Although the owners cannot afford to hire a full-time designer, chef, and craftsmen initially, they plan to do so once the franchise is established to optimize costs.

The startup phase of the site quickly involves meetings among the stakeholders because certain kitchen decisions impact the organization of the dining area, as well as the design choices. Serving fusion food in a cowboy-themed decor might not be the best choice\!

The steering committee relies on input from craftsmen and the brigade; however, it frequently makes decisions independently of them. Therefore, it is essential that the information shared with them is of high quality and that they possess sufficient experience to make informed decisions.

{% capture note %}Many web projects begin with contractors tasked with forming a small steering committee to define the project's vision and governance. During this phase, decisions are made that may not take into account the teams responsible for supporting these initiatives over the coming months or even years.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}Man Taking Photo With Woman Holding Drink{% endcapture %}{% capture img_caption %}Photo by ELEVATE{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-elevate-3009800.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Mock service and soft openings

Once everything is in place, the owners organize mock services, aka practice runs that allow wait staff to simulate real service scenarios, helping them to refine their skills and identify any operational issues before the official launch. It is often the first occasion all the staff have to work together.

_In web projects, we call that Integration environment._

Once the owners are satisfied, they invite friends and family for soft openings, to allow the team to test the service and gather feedback from customers in a real-world environment, making adjustments as necessary.

{% capture note %}This is the staging or pre-production environment.{% endcapture note -%} {%- include note.html.liquid content=note %}

At some point, the owners will decide to increase the number of people testing the scalability of the service. How many customers can we accommodate in one night? And how many can we serve in a week? And if we reach our limit, what will break first and what will be the customer experience?

{% capture note %}On the web too, we do Load Testing.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}Unrecognizable man serving yummy sandwiches in diner{% endcapture %}{% capture img_caption %}Photo by Rachel Claire{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-rachel-claire-5490926.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## The Simplest Offer

The first diner is now officially open\! The dining experience is straightforward yet highly effective. The menu features a carefully selected and very limited array of dishes, ensuring that each order is prepared swiftly, provides satisfaction, and is beautifully presented. Customers can order à la carte, or even ask for customized dishes, but most don’t. Waitstaff can efficiently move between the kitchen and the tables, enhancing the overall efficiency of service. After a few years of operation, the owners decide to invest to multiply the number of restaurants. The franchise is in place.

{% capture note %}Very simple HTML+CSS websites, with limited server-side personalization are often the fastest (they have a very small Time To First Bite\!). Scalability is often as simple as multiplying the front-end servers.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}A modern and vibrant lounge area with colorful upholstered seating, wooden paneled walls, and pendant lighting fixtures.{% endcapture %}{% capture img_caption %}Photo by MR PHOTOGRAPHER{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-mr-photographer-549209752-27605495.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Fast Food

At a certain stage, the owners conclude that the concept can be optimized by investing in a more efficient mass production process. As a result, customers lose the ability to customize their dishes and must choose from standardized menus. The brigade only needs to review a new recipe once to master its preparation instantly. Consequently, the speed of service is determined by how quickly the waitstaff can deliver the plates, as space allows. The new bottleneck is payment, as you can’t really mass-produce per-table-checks.

{% capture note %}On the web, too, you can get instant answers if you serve the same content to every customer: this is caching. However, no matter how fast your website is, speed will always be limited by personalized steps, such as payment funnels. Ensuring a great UX is crucial to avoid frustration.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}A man in a red uniform is holding a clipboard and standing in front of stacked cardboard boxes in what appears to be a storage area.{% endcapture %}{% capture img_caption %}Photo by Kampus Production{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-kampus-7843990.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Quality Audits

To achieve an ISO standards certification and comply with the regulatory frameworks in all locations where the franchise operates, the owners have chosen to conduct comprehensive audits across the entire chain. This includes everything from customer access to the dining area, food production processes, and ingredient sourcing.

The themes can vary significantly. For instance, auditors may point out the absence of handrails in the restrooms for disabled customers or highlight that the type of carrots used in the kitchen is not sourced locally. They provide checklists of tests and controls that owners can carry out before each service to avoid any regression in Quality.

{% capture note %}Quality Assurance (QA) in web development ensures that websites function correctly and meet specified requirements through systematic testing and validation processes. Auditing involves reviewing and assessing web applications for compliance with standards and best practices, identifying areas for improvement. Some automated tools to perform repetitive tests efficiently, enhancing reliability and speed. Certain issues, particularly Accessibility, require a thorough manual evaluation to ensure compliance with guidelines such as the Web Content Accessibility Guidelines (WCAG).{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}Waiter Presenting Bottle of Wine in Restaurant.{% endcapture %}{% capture img_caption %}Photo by Fabrizio Velez{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-fabriziovelez-15270300.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Room Service

To enhance engagement, the owners have decided to introduce a dedicated customer support team known as the Jolly Servants. Some of these Jolly Servants specialize in beverages, while others focus on seasoning. At times, they offer in-room services by providing recommendations; however, there are occasions when they require assistance from the kitchen, requesting items from the regular waitstaff. Some are clumsy and destabilize the service when they fall.

Although the user experience is increasingly personalized, the room can become somewhat crowded, leading to slower service than usual. As a result, some customers may find themselves waiting before they can enjoy a contentful experience. Additionally, the waitstaff occasionally needs to move plates to make space for new ones, which can be frustrating.

{% capture note %}JavaScript (JS) enhances native browser capabilities by delivering an advanced user experience that can depend (or not) on server-side data. However, an excessive amount of JS can lead to Long Tasks –periods when the browser becomes unresponsive– which may result in a slower or less engaging experience. Moving visual elements can cause Layout Shifts, further diminishing the overall user experience.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}A smiling young woman wearing a pink shirt and apron stands, taking notes, in front of a colorful, graffiti-covered restaurant wall.{% endcapture %}{% capture img_caption %}Photo by Andrea Piacquadio{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-olly-3801649.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Measure to Optimize

To enhance the restaurant's operations, the owners hired two contractor headwaiters. One headwaiter focuses on assessing the kitchen and office, identifying bottlenecks in the storage and preparation areas, as well as in the accountability. The other headwaiter observes the waitstaff and customer interactions at their tables and the cash register.

Both meticulously take notes, which are subsequently sent to their company, that generates a live report detailing the restaurant's performance, complete with troubleshooting data and actionable recommendations for improvement.

Their presence can slow things down, especially in an already cluttered kitchen or dining room.

The owners recognize that this is just one aspect of their investment. They have also tasked the steering committee with the responsibility of implementing improvements, as observability alone is ineffective without a commitment to continuous enhancement.

{% capture note %}To fuel improvements on website performance, stakeholders frequently rely on telemetry. Some services specialize in monitoring the back-end, such as Application Performance Management (APM) tools, while others focus on the front-end, including (Behavioral) Analytics and Real User Monitoring (RUM). These tools facilitate continuous optimization by observing customer interactions but most websites have to select their tools judiciously, as incorporating too many third-party services can lead to a slower user experience.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}A waiter holds both a salad and a plate of hors d'oeuvres in a cozy, warmly lit restaurant.{% endcapture %}{% capture img_caption %}Photo by Pixabay{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-pixabay-262978.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Switching Plates

To gain deeper insights into customer preferences, the owners implemented a series of tests. Initially, various restaurants within the franchise offered distinct menus, while the head staff analyzed how these variations impacted customer experiences. However, they soon realized that drawing conclusions from a diverse population with varying cultural habits was problematic. Consequently, they decided to conduct the tests within a single restaurant, tasking the Jolly Servants to present different menus to different tables.

Conducting tests to evolve a restaurant's menu presents significant challenges. Determining which tables qualify for specific menu options requires considerable time, which can negatively impact the overall customer experience. Some regulars may find it perplexing that their menu changes from one day to the next, leading to a sense of inconsistency that adds to the slower service.

{% capture note %}A/B tests, mostly orchestrated by JS code, are widely regarded as the most dependable method for assessing how changes to a website affect user experience. However, conducting these tests can be challenging and may result in a suboptimal experience for users during the evaluation period. Web professionals typically advise exercising caution when implementing A/B tests, clearly defining the scope and duration of the tests and ensuring that the solutions are deactivated once they are no longer necessary.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}Gelato ice creams on display.{% endcapture %}{% capture img_caption %}Photo by Roman Odintsov{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-roman-odintsov-5061192.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Delegating features

Certain sections of the menu are entrusted to partners with whom the owner has established agreements. For instance, the sundaes will be crafted by a local ice cream parlor. Additionally, some in-house Jolly Servants have been substituted with contractors; specifically, a wine merchant from across the street will handle the wine selection and provide recommendations.

By redirecting the staff's focus to their core business, the owner has enhanced both efficiency and reliability. However, this shift has resulted in some experiences becoming slower and even riskier, particularly when the sommelier must navigate traffic while crossing the street during peak hours.

The owners now need to monitor their partners. As the nuts and bolts of this partnership, their roles are crucial to the success of the venture.

{% capture note %}The use of third-party JavaScript can be very effective in providing services that would otherwise be out of reach or that we know will be better performed by professionals. However, their use requires rigorous control to ensure that the services function correctly and do not encounter failures that could degrade the user experience. Telemetry/Observability services can help with capturing errors and assessing their impact on the user experience.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}A wooden surface displays an array of fresh vegetables, including chopped red peppers, sliced cucumbers, and leafy greens, alongside various cooking utensils and ingredients, creating a vibrant and inviting scene.{% endcapture %}{% capture img_caption %}Photo by Maarten van den Heuvel{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-mvdheuvel-2284166.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Chef’s tables

To stand out from the competition, the owners decide that one of their franchises will deliver a unique, signature experience: chef’s tables. Directly at the table, a specialized chef prepares a personalized menu for the guests, based on their preferences, dietary restrictions and the availability of ingredients brought in by the wait staff and Jolly Servants.

Chef's tables occupy a significant amount of space in the dining room, necessitating frequent movement by wait staff as they gather or replace ingredients. This can lead to delays in starting the meal. Typically, this immersive experience begins with guests enjoying a delightful cocktail while they wait.

Once everything is set up, the table operates autonomously, reducing the demand on the kitchen, which may even become unnecessary. The service provided is both personalized and immediate. However, this exclusive experience is typically only accessible to the wealthiest of customers or those with the biggest address book.

In a bid to elevate their status, nearby restaurants have begun offering chef's tables as well, including even the fast-food joint just two blocks away. Long waiting times and disappointing experiences result in customers not returning for a second visit.

{% capture note %}In the web industry, Single Page Applications (SPAs) are especially well-suited for creating immersive and engaging journeys for users. They often take longer to load, and even longer on entry-level devices so the stakeholders need to strongly think about their engagement strategies and visual tricks for managing waiting times.{% endcapture note -%} {%- include note.html.liquid content=note %}

{% capture note %}Many smaller websites adopt SPAs, drawn by the trend set by larger web players, even when their needs are simple and standardized. This often results in a misallocation of resources, as they utilize a technical stack that does not align with their requirements, and they fail to invest adequately in its proper implementation.{% endcapture note -%} {%- include note.html.liquid content=note %}

---

{% capture img_alt %}Three people sitting at a table in what appears to be a restaurant or bar, enjoying drinks and food together.{% endcapture %}{% capture img_caption %}Photo by ELEVATE{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/web/2024-12-02/pexels-elevate-3009797.jpg"
alt=img_alt
caption=img_caption
containerAttributes='aria-hidden="true"'
%}

## Diverse Websites for Great Experiences

As we conclude this imperfect and incomplete metaphor, it's essential to recognize that just as there are various types of restaurants, there should also be a diverse range of websites. From the casual indie diner to the exclusive chef's table, each can offer a unique experience, albeit with its own set of challenges.

Often, the most straightforward solutions prove to be the most effective. However, a lack of personalization can lead to diminished profit margins and hinder the development of a robust brand identity. Conversely, more complex solutions require meticulous consideration of user experience, necessitating significant investments in frustration analysis and ongoing optimizations.

Temporarily downgrading an experience can be a strategic decision aimed at enhancing it in the long run. Investing in processes is essential, and particularly, the implementation of Quality Assurance plays a vital role in mitigating significant risks.

---

_Thanks to Meryem, who put up with my extended metaphor experiments for over a year, and Morgan, Luke and Natacha for read proofing\!_
