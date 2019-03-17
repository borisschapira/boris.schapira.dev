---
layout: page
title: Partager, encore et toujours
permalink: /partager/
i18n-key: about-share
---

Je suis convaincu que le partage de l'information est bénéfique à tous : j'enseigne à l'[ECV Digital](http://www.ecvdigital.fr/) mais nous avons pu nous croiser auparavant à [Ingésup Bordeaux](https://www.ingesup.com/ "Ingesup") ; je me déplace [pour discuter d'un sujet technique en échange d'un sandwich](http://www.brownbaglunch.fr/baggers.html#Boris_Schapira_Bordeaux "BrownBagLunch France") ; vous pouvez m'avoir croisé dans plusieurs conférences, de Barcelone à Paris, mais ma <del>petite</del> grosse préférence reste [Sud Web](https://sudweb.fr/ "SudWeb.fr").


{% assign done = ''|split:''%}
{% assign todo = ''|split:''%}
{% for conf in site.confs %}
    {% if conf.last_date %}
        {% assign done = done|push:conf%}
    {% else %}
        {% assign todo = todo|push:conf%}
    {% endif %}
{% endfor %}


## Les sujets jamais abordés

<div class="conf-subjects">
{% for conf in todo %}
<article class="conf-subject">
<h3>{% if conf.events %}<a href="{{ conf.url }}" title="{{conf.title}}">{% endif %}{{ conf.title }}<br/><small>{{ conf.subtitle }}</small>{% if conf.events %}</a>{% endif %}</h3>
{{ conf.description | raw }}
</article>
{% endfor %}
</div>

## Les sujets déjà abordés

{% assign done_sorted = done|sort: 'last_date'| reverse %}

<div class="conf-subjects">
{% for conf in done_sorted %}
<article class="conf-subject">
<h3>{% if conf.events %}<a href="{{ conf.url }}" title="{{conf.title}}">{% endif %}{{ conf.title }}<br/><small>{{ conf.subtitle }}</small>{% if conf.events %}</a>{% endif %}</h3>
{{ conf.description | raw }}
</article>
{% endfor %}
</div>
