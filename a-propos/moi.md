---
layout: page
title: Bonjour, je suis Boris
date: 2015-10-05 17:15:20
i18n-key: about-me
---

## ravi de vous rencontrer

Ingénieur de formation[^1], je travaille pour [Clever Age](http://www.clever-age.com/fr/ "Clever Age"). J'y accompagne mes clients lors de missions de conseil, de gestion de projets, de formation et parfois (mais de plus en plus rarement) de développements.

Vous avez pu me rencontrer autour de problématiques liées au Service Design, à la Finance de Marché, à l'e-Commerce, à la Qualité et la Performance Web ou au choix d'une solution référentielle (<abbr lang="en" title="Content Management System">CMS</abbr>, <abbr lang="en" title="Digital Asset Management">DAM</abbr>, <abbr lang="en" title="Online Video Platform">OVP</abbr>) ou logicielle (choix d'un <i lang="en">framework</i>).

La plupart du temps, j'accompagne mes clients sur des projets mais ma vraie passion, c'est de comprendre leurs mécaniques de création de valeur pour les optimiser à l'aide d'outils numériques et leur permettre d'améliorer leur(s) service(s) et produit(s).

J'aime les chocolatines[^choc] le matin, une pizza à midi et un énorme câlin avec mes deux garçons et ma femme le soir. Je n'aime pas les discussions qui n'avancent pas, les processus qui les favorisent et les choux fleurs.

[^choc]: Mais si vous appelez ça autrement, c'est bien aussi.

[^1]: Mon CV complet est disponible [sur LinkedIn](https://www.linkedin.com/in/borisschapira CV de Boris SCHAPIRA sur LinkedIn")

## Partager, encore et toujours

Je suis convaincu que le partage de l'information est bénéfique à tous : j'enseigne à [Ingésup Bordeaux](http://www.ingesup.com/ "Ingesup") ; je serais aussi ravi de [venir discuter avec vous contre un sandwich](http://www.brownbaglunch.fr/baggers.html#Boris_Schapira_Bordeaux "BrownBagLunch France") ; vous pouvez m'avoir croisé dans plusieurs conférences, de Barcelone à Paris, mais ma petite préférence reste [Sud Web](http://sudweb.fr/ "SudWeb.fr").

Il y a plusieurs sujets dont j'aimerai parler : si cela vous intéresse aussi, parlons-en et organisons des conférences ensemble.

<div class="conf-subjects">
{% for conf in site.confs %}
  <article class="conf-subject">
    <h3><a href="{{ conf.url }}">{{ conf.title }}</a></h3>
    {{ conf.content }}
  </article>
{% endfor %}
</div>
