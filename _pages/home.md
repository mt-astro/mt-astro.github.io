---
layout: page
title: Research
permalink: /
nav: true
nav_order: 2
description: ""
---

<div class="row align-items-start">
  <div class="col-md-4 mb-3">
    {% include figure.liquid path="assets/img/main.jpg" alt="Michael Tucker giving a talk" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-8">
    <p>Welcome to my website! I am currently a CCAPP Fellow at OSU’s Center for Cosmology and AstroParticle Physics (CCAPP) studying all things in the time domain: supernovae, variable stars, accreting supermassive black holes, and more.</p>
    <p>See <a href="/about/">About</a> for some personal information. The cards below are what I have been working on recently.</p>
  </div>
</div>

We live in a revolutionary time for data-driven astronomy research. The modern landscape of observational facilities and instrumentation provides unprecedented opportunities for studying the Universe. I use a combination of ground- and space-based observatories to answer novel questions about the time-variable Universe. Click below to see more details about my interests and projects.

A full list of my publications is on the [publications](/publications/) page and in my [CV](/cv/).

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="row row-cols-1 row-cols-md-2">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
</div>
