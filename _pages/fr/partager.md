---
layout: page
title: Partager, encore et toujours
permalink: /partager/
---

Je suis convaincu que le partage de l'information est bénéfique à tous·tes. J'ai enseigné ([ECV Digital](https://www.ecvdigital.fr/), [Ingésup](https://www.ingesup.com/ 'Ingesup')). Je ne dis jamais non à [un sandwich](https://www.brownbaglunch.fr/baggers.html#Boris_Schapira_Bordeaux 'BrownBagLunch France'). Je me rends à des conférences pour y participer, ou y intervenir. Et parfois, j'organise ([Sud Web](https://sudweb.fr/ 'SudWeb.fr') ou [We Love Speed](https://www.welovespeed.com/ 'We Love Speed')).

<section class="sharing">
{% assign sortedSharing = site.community|sort: 'last_date'|reverse -%}
{%- for conf in sortedSharing %}
  <article>
    <h2><a href="{{ conf.url }}" title="{{conf.title}}">{{ conf.title }}{%- if conf.events %}</a></h2>
    {% endif -%}<p>{{ conf.subtitle }}<br><small>({{ conf.events | map: 'name' | join:', ' }})</small></p>
  </article>
{% endfor %}
</section>
