---
layout: page
title: "GALEX and gPhoton"
description: "New science with the GALEX UV photon archive"
img: assets/img/research/example_lc.png
alt: "Example of a stellar flare observed in both NUV and FUV filters."
importance: 3
permalink: /research/galex/
---

<!-- How to edit this essay, including photos: docs/README.md#a-photo-inside-an-existing-essay -->

## Repurposing the GALEX Archive with gPhoton

### The GALEX Mission

Back in 2015, I helped with the scientific implementation of gPhoton, a new, open-source Python package for accessing data from the Galaxy Evolution Explorer (GALEX, Martin et al. 2005) mission. GALEX operated from 2003-2013 in low Earth orbit, imaging ~80% of the sky in two ultraviolet (UV) filters simultaneously: the near-UV (NUV, 1700–3000Å) and the far-UV (FUV, 1300–1800Å), with the latter failing in 2009. GALEX was a survey mission, providing the first (and thus far, only) UV imaging for most of the sky to understand star formation, white dwarf stars, and quasars.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/galex_expt_NUV.png" alt="Cumulative GALEX NUV exposure map" class="img-fluid rounded z-depth-1" caption="Cumulative GALEX NUV exposure map" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/galex_expt_FUV.png" alt="Cumulative GALEX FUV exposure map" class="img-fluid rounded z-depth-1" caption="Cumulative GALEX FUV exposure map" %}
  </div>
</div>

Each GALEX pointing is called a *visit*. Due to GALEX’s orbit, a visit could last up to 30 minutes as the spacecraft passed through Earth’s shadow. GALEX generally avoided the Galactic Plane due to count-rate restrictions designed to protect the sensitive UV detectors.

GALEX completed three main surveys over its mission lifetime, each designed to balance depth against coverage:

All-Sky Survey: covered ~27,000 deg^2 to a depth of ~20.5 AB mag (total exposure times of ~100-200 s)
Medium Survey: covered ~5,000 deg^2 to a depth of ~23.5 AB mag (total exposure times of ~2000-3000 s)
Deep Survey: covered nearby galaxies (~300 deg ^2) to a depth of ~25 AB mag (total exposure times reaching up to 10,000 s)

GALEX imaging was originally released to the community in large data releases, the last being DR7, and primarily consisted of coadded images from all visits. Yet the temporal capabilities of the GALEX’s photon-counting detectors, which recorded the time each photon was detected to a typical precision of 5 milliseconds, were largely ignored due to the high computing requirements involved.

### The gPhoton software

Enter [**gPhoton**](https://archive.stsci.edu/prepds/gphoton/) ([Million et al. 2016](https://scixplorer.org/abs/2016ApJ...833..292M/abstract)), a new Python package for querying and retrieving individual events in the trillion-photon (~130 TB) GALEX data archive hosted at the Mikulski Archive for Space Telescopes ([MAST](http://mast.stsci.edu)). gPhoton enabled the construction of custom images *and* light curves from the GALEX photon archive at arbitrary time resolution, opening a new frontier in the time-variable UV sky with no current or planned mission offering such capabilities.

I helped with the scientific verification of gPhoton during my Research Experience for Undergraduates (REU) at the Space Telescope Science Institute (STScI) back in 2015 studying pulsating white dwarfs ([Tucker et al. 2018](https://scixplorer.org/abs/2018MNRAS.475.4768T/abstract)). I now use GALEX for various student projects because the data is already available, and I am always devising new ways to use GALEX and gPhoton for new, exciting science. I outline some below, with a full publication list on the [publications](/publications/) page and in my [CV](/cv/).

### Science Highlights

#### **The Temperature of Stellar Flares**

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/example_lc.png" alt="Example of a stellar flare observed in both NUV and FUV filters." class="img-fluid rounded z-depth-1" caption="Example of a stellar flare observed in both NUV and FUV filters." %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/flare_kde.png" alt="Distribution of NUV/FUV flare energies, as a function of the star’s spectral type." class="img-fluid rounded z-depth-1" caption="Distribution of NUV/FUV flare energies, as a function of the star’s spectral type." %}
  </div>
</div>

Low-mass stars (M ≤ 0.5 Msun) flare often, which may help or hinder the chance of life surviving on planets orbiting them. The brief impulse of high-energy photons from stellar flares could assist in microbial development, or if too frequent, could instead strip away planetary atmospheres, exposing any organisms on the planet’s surface to the harmful UV rays (think of sunburn here on Earth). Most studies attempting to quantify the “helpfulness” of stellar flares on the habitability of low-mass stars assume a constant flare temperature of 9000 Kelvin from early studies at optical wavelengths.

Yet we show that the high-cadence UV light curves of flares on nearby stars are highly inconsistent with this assumption. Most flares show temperatures exceeding 15,000 K, especially near peak brightness when most photons are emitted. This has severe consequences for planetary habitability, as the total flare energy increases as T^4, in addition to increasing the total number of atmosphere-destroying UV photons. Read the full story [here](https://scixplorer.org/abs/2024MNRAS.532.4436B/abstract).

#### **Type Ia Supernova Interacting with Circumstellar Material**

{% include figure.liquid path="assets/img/research/limits.png" alt="UV observations of Type Ia supernova from GALEX in our search for SNe Ia-CSM." class="img-fluid rounded z-depth-1" caption="UV observations of Type Ia supernova from GALEX in our search for SNe Ia-CSM." %}

As I discuss on the [Type Ia supernovae](/research/type-ia-supernovae/) page, we still lack a genuine understanding of how and why some white dwarf stars explode as Type Ia supernovae (SNe Ia). A particularly enigmatic sub-class of SNe Ia are those interacting with large quantities of circumstellar material (CSM), dubbed SNe Ia-CSM. Their original discovery was considered confirmation of the `single-degenerate scenario’ for producing SNe Ia, but their occurrence rates are well below the rate of “normal” SNe Ia that never show signatures of CSM interaction. Given that SNe Ia almost certainly originate in mass-transferring binary systems, it is possible that any CSM interaction happens later due to the material being ejected from the progenitor system in the centuries to millennia before explosion.

Using GALEX and gPhoton, we searched for SNe Ia showing bright UV emission months to years after explosion, but found none (shown below). We quantified our efficiency with injection-recovery tests, and placed the most stringent limits thus far in the fraction of SNe Ia interacting with CSM. Such limits further solidified the idea that SNe Ia-CSM are a distinct class of events with unique progenitor/formation pathways. Read the full story [here](https://scixplorer.org/abs/2022ApJ...926...98D/abstract).

#### Variable White Dwarfs

{% include figure.liquid path="assets/img/research/CMDplot.png" alt="Gaia color-magnitude diagram of variable white dwarfs discovered in our GALEX survey." class="img-fluid rounded z-depth-1" caption="Gaia color-magnitude diagram of variable white dwarfs discovered in our GALEX survey." %}

White dwarf stars are more than just the progenitors of SNe Ia – they represent the endpoint of stellar evolution for ~95% of all stars, past, present, and future. They can show intrinsic brightness variations due to g-mode pulsations in the non-degenerate H/He surface layers. Asteroseismology, the study of stellar pulsations, can even infer the core structure and composition by tracing the evolution of the pulsation periods and amplitudes over time. White dwarfs also show *extrinsic* brightness variations from eclipses by binary companions, where the companion star blocks some of the UV photons when it moves in front of the white dwarf.

My group conducted the natural extension of my initial survey of white dwarfs with gPhoton, except with a much improved sample from Gaia. We confirmed more than a dozen known pulsating white dwarfs and found many more new pulsators, the largest haul of new discoveries from a single survey. Among these is one of the most massive pulsators known, opening a new opportunity to test theories of white dwarf core crystallization. Other notable discoveries include several white dwarfs in eclipsing binaries, several of which show *grazing* eclipses, where the white dwarf is only partially occulted by the passing companion, a statistical rarity given the small sizes (~few Earth radii) of white dwarfs. Finally, we reported stringent limits on the fraction of white dwarfs with disintegrating planetesimals around them, thought to trace surviving planetary systems after the primary star evolves through the red-giant and AGB phases of stellar evolution. Read the full story [here](https://scixplorer.org/abs/2019MNRAS.486.4574R/abstract).
