---
layout: page
title: "Low Surface Brightness"
description: "The low surface brightness sky with a decade of ASAS-SN"
img: assets/img/research/avg_F0014-1.png
alt: "The ~1.4-degree light echo from Cas A (left) and its movement across the sky over time (right)."
importance: 4
permalink: /research/low-surface-brightness/
---

<!-- How to edit this essay, including photos: docs/README.md#a-photo-inside-an-existing-essay -->

## The ASAS-SN Low Surface Brightness Project

The All-Sky Automated Survey for SuperNovae (ASAS-SN) has been surveying the entire sky for over a decade now. Originally designed for the unbiased discovery of supernovae and other explosive phenomena, the long baseline has opened new avenues for studying faint and diffuse structures across the Galaxy and beyond.

Surface brightness is the brightness of an object, divided by its (projected) size. Point sources, like stars, have formal surface brightnesses of infinity, although in practice their size is set by the point spread function (PSF) of the optical system in question. The “low surface brightness” threshold generally refers to objects fainter than the moonless night sky. Even when the Moon is down, the night sky faintly glows from atoms in the atmosphere. Thus, multiple images are needed to push into the low surface brightness sky, as random fluctuations begin to cancel out and reveal faint, diffuse structures from a variety of origins.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/PaperETMap-1.jpg" alt="Total g-band ASAS-SN exposure time across the sky." class="img-fluid rounded z-depth-1" caption="Total g-band ASAS-SN exposure time across the sky." %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/PaperSBMap-1.png" alt="Corresponding 3-sigma surface brightness limits in the stacked image fields. The degradation towards the Galactic plane is due to source crowding." class="img-fluid rounded z-depth-1" caption="Corresponding 3-sigma surface brightness limits in the stacked image fields. The degradation towards the Galactic plane is due to source crowding." %}
  </div>
</div>

The above figures show the cumulative exposure times and corresponding surface-brightness limits. Overall, the deep ASAS-SN stacks are sensitive to dedicated low surface brightness projects except towards the Galactic plane, where source crowding begins to dominate the large (PSF~16″) ASAS-SN pixels. Even in the worst cases, the ASAS-SN stacks are 10-20x more sensitive to diffuse structure than the Digital Sky Survey (DSS). Read the full story [here](https://scixplorer.org/abs/2025arXiv250614873J/abstract).

### Light Echoes from Cas A and Tycho’s SN (SN1572)

We recently used the ASAS-SN stacks to derive new, and more precise, distances to two historical supernovae that exploded within our own Milky Way: Cas A and Tycho’s SN (SN1572). We identify light echoes from these explosions in the ASAS-SN stacks, where light from the event scatters off of interstellar dust back into our line-of-sight. By subtracting stacks created over different timespans, we can search for diffuse structures that evolve with time.

{% include figure.liquid path="assets/img/research/avg_F0014-1.png" alt="The ~1.4-degree light echo from Cas A (left) and its movement across the sky over time (right)." class="img-fluid rounded z-depth-1" caption="The ~1.4-degree light echo from Cas A (left) and its movement across the sky over time (right)." %}

Light echoes are a fun geometry problem because the explosion, the dust, and the Earth create a triangle.

{% include figure.liquid path="assets/img/research/LE_diagram-1.png" alt="Geometry of a light echo." class="img-fluid rounded z-depth-1" caption="Geometry of a light echo." %}

The angle, theta, is measured directly from measuring the offset of the light echo from the explosion, which can be quite large – both Cas A and Tycho’s SN have echoes several degrees (multiple full Moons) from where the explosion occurred.

We use recent 3D dust maps of our own Milky Way to estimate D, the distance between Earth and the dust causing the echo. This can be joined with the time-delay of the echo, the time between explosion (i.e., 1572 for Tycho’s SN) and when we see the echo (~today) which gives us the total light-travel time (i.e., how much extra distance was traversed relative to X, the distance between us and the explosion). The speed of light is constant, so this time-delay is essentially providing the combined distance, Z+D.

Combining all of this together, we can use trigonometry to directly solve for X, providing a new distance estimate to these explosions that is *independent* of any knowledge of the explosion or surrounding environment. These are the usual hurdles in estimating distances to supernova remnants, as something must be assumed about the explosion symmetry and/or the shape of the nearby interstellar medium. Moreover, the distances are also more precise than previous estimates in the literature, and we expect future improvements to the 3D dust maps which are our largest source of uncertainty.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/horiz_Tycho-1.png" alt="Distance estimates to Tycho’s SN (SN1572). Our new estimates are shown in black." class="img-fluid rounded z-depth-1" caption="Distance estimates to Tycho’s SN (SN1572). Our new estimates are shown in black." %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/horiz_Cass-1.png" alt="Distance estimates to Cas A." class="img-fluid rounded z-depth-1" caption="Distance estimates to Cas A." %}
  </div>
</div>

Read the full story [here](https://scixplorer.org/abs/2024OJAp....7E..98N/abstract).
