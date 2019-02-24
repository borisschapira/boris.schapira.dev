---
layout: page
title: Partager, encore et toujours
permalink: /partager/
i18n-key: about-share
---

Je suis convaincu que le partage de l'information est bénéfique à tous : j'enseigne à l'[ECV Digital](http://www.ecvdigital.fr/) mais nous avons pu nous croiser auparavant à [Ingésup Bordeaux](https://www.ingesup.com/ "Ingesup") ; je me déplace [pour discuter d'un sujet technique en échange d'un sandwich](http://www.brownbaglunch.fr/baggers.html#Boris_Schapira_Bordeaux "BrownBagLunch France") ; vous pouvez m'avoir croisé dans plusieurs conférences, de Barcelone à Paris, mais ma <del>petite</del> grosse préférence reste [Sud Web](https://sudweb.fr/ "SudWeb.fr").

{% assign the_subjects = site.confs %}
<div class="conf-subjects">
{% for conf in the_subjects %}
<article class="conf-subject">
<h3>{% if conf.events %}<a href="{{ conf.url }}" title="{{conf.title}}">{% endif %}{{ conf.title }}<br/><small>un sujet pour tous les {{ conf.target }}</small>{% if conf.events %}</a>{% endif %}</h3>
{{ conf.description | raw }}
</article>
{% endfor %}
</div>
