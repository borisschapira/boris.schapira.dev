---
layout: page
title: Veille
permalink: /veille/
i18n-key: watch
---

{% assign bks = site.bookmarks|sort: 'date'| reverse %}
{% for bk in bks %}
<article class="colorized post">
    <h2 class="post-title" id="{{ bk._id }}">
      <a href="{{ bk.link }}">{{ bk.title }}</a>	
    </h2>
    {{ bk.content }}
</article>
{% endfor %}
