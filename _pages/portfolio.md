---
layout: secondary
browser-title: Work of
title: Work
permalink: /portfolio/
order: 1
---

<ul class="project-list">
{% for project in site.projects %}
  <li>

    <h2>
      <a class="project-link" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a>
    </h2>
  </li>
{% endfor %}
</ul>