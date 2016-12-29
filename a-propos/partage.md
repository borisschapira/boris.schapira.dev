---
layout: page
title: Partager, encore et toujours
date: 2015-10-05 17:15:20
i18n-key: about-share
permalink: /a-propos/partage/index.html
---

Je suis convaincu que le partage de l'information est bénéfique à tous : j'enseigne à l'[ECV Digital](http://www.ecvdigital.fr/) mais nous avons pu nous croiser auparavant à [Ingésup Bordeaux](http://www.ingesup.com/ "Ingesup") ; je me déplace [pour discuter d'un sujet technique en échange d'un sandwich](http://www.brownbaglunch.fr/baggers.html#Boris_Schapira_Bordeaux "BrownBagLunch France") ; vous pouvez m'avoir croisé dans plusieurs conférences, de Barcelone à Paris, mais ma <del>petite</del> grosse préférence reste [Sud Web](http://sudweb.fr/ "SudWeb.fr").

## Les sujets dont j'aimerais parler

Il y a plusieurs sujets dont j'aimerai parler : si cela vous intéresse aussi, parlons-en et organisons des conférences ensemble.

{% assign the_subjects=site.confs %}
<div class="conf-subjects">
{% for conf in the_subjects %}
  {% unless conf.events %}
    <article class="conf-subject">
      <h3>{{ conf.title }}<br/><small>un sujet pour tous les {{ conf.target }}</small></h3>
      {{ conf.description | raw }}
    </article>
  {% endunless %}
{% endfor %}
</div>

## Les sujets dont j'ai déjà parlé

Il y a plusieurs sujets dont j'ai déjà parlé, n'hésitez pas à jeter un œil aux contenus.

{% assign the_subjects=site.confs %}
<div class="conf-subjects">
{% for conf in the_subjects %}
  {% if conf.events %}
    <article class="conf-subject">
      <h3><a href="{{ conf.url }}">{{ conf.title }}<br/><small>un sujet pour tous les {{ conf.target }}</small></a></h3>
      {{ conf.description | raw }}
    </article>
  {% endif %}
{% endfor %}
</div>
