---
layout: page
title: Conferences and workshops
nav_title: Conferences
permalink: /conferences/
nav: true
nav_order: 4
description: Talks, conferences, and workshops
---

<!-- How to add an entry: docs/README.md#conferences-and-workshops -->

{% assign events = site.conferences | sort: "date" | reverse %}
{% if events.size == 0 %}
Conference talks and workshops will be listed here.
{% else %}
{% include event_blocks.liquid %}
{% endif %}
