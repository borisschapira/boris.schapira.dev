---
layout: page
title: Partager, encore et toujours
permalink: /partager/
---

Je suis convaincu que le partage de l'information est bénéfique à tous :
j'enseigne ([ECV Digital](https://www.ecvdigital.fr/),
[Ingésup](https://www.ingesup.com/ 'Ingesup')),
[j'aime les sandwichs](https://www.brownbaglunch.fr/baggers.html#Boris_Schapira_Bordeaux 'BrownBagLunch France'),
je vais aux conférences tant comme participant que
[comme orateur](#les-sujets-d%C3%A9j%C3%A0-abord%C3%A9s). Parfois, j'organise
aussi [Sud Web](https://sudweb.fr/ 'SudWeb.fr') ou
[We Love Speed](https://www.welovespeed.com/ 'We Love Speed').

{% assign done = ''|split:''%} {% assign todo = ''|split:''%}
{% for conf in site.community %} {% if conf.last_date %}
{% assign done = done|push:conf%} {% else %} {% assign todo = todo|push:conf%}
{% endif %} {% endfor %}

## <span id="les-sujets-jamais-abord%C3%A9s">Les sujets jamais abordés</span> <small>(mais j'aimerais bien)</small>

<ul class="conf-subjects">
{% for conf in todo %}
<li class="conf-subject">
<a href="{{ conf.url }}" title="{{conf.title}}">{{ conf.title }}</a><br/><small>{{ conf.subtitle }}</small>
</li>
{% endfor %}
</ul>

## <span id="les-sujets-d%C3%A9j%C3%A0-abord%C3%A9s">Les sujets déjà abordés</span>

{% assign done_sorted = done|sort: 'last_date'| reverse %}

<ul class="conf-subjects">
{% for conf in done_sorted %}
<li class="conf-subject">
<a href="{{ conf.url }}" title="{{conf.title}}">{{ conf.title }}</a><br/><small>{{ conf.subtitle }}<br/>({% for event in conf.events %}{{ event.name }}{% unless forloop.last %}, {% endunless %}{% endfor %})</small>
</li>
{% endfor %}
</ul>
