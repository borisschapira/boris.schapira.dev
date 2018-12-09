---
layout: page
title: Tags
permalink: /tag/
description: "Tags"
---
<ul>
{% for tag in site.tags %}{% assign tagname=tag[0]%}{% assign tagsize=tag[1].size%}
{% if tag[1].size > 1 %}<li>{% include tag_link.html.liquid tag=tagname nb=tagsize %}</li>{% endif %}
{% endfor %}
</ul>