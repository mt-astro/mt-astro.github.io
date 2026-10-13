---
layout: page
title: "Type Ia Supernovae"
description: "The progenitors and origins of Type Ia supernovae"
img: assets/img/research/DD-SNIa-NASA.jpg
alt: "General idea of double-degenerate progenitors."
importance: 1
permalink: /research/type-ia-supernovae/
---

<!-- How to edit this essay, including photos: docs/README.md#a-photo-inside-an-existing-essay -->

## The Elusive Progenitors of Type Ia Supernovae

Type Ia supernovae (SNe Ia) played a pivotal role in the discovery of the accelerating Universe 3 decades ago, and remain key extragalactic distance indicators and cosmological probes. We know they originate from the thermonuclear explosion of relatively massive (> 1 Msun) white dwarfs with carbon and oxygen (C/O) cores, and know that a nearby companion or donor star is needed to push the white dwarf to ignition. Yet critical details about how the white dwarf reaches the necessary conditions for ignition remain debated, in large part because we have yet to conclusively identify the progenitor systems of SNe Ia.

The still-unknown progenitors of SNe Ia have become the limiting factor in using these cosmic explosions for precise cosmological constraints. Kelly et al. and Sullivan et al. discovered, now over a decade ago, an apparent correlation between the standardized SN Ia luminosity and the stellar mass of their parent galaxies. This correlation has been confirmed repeatedly since then, and is now refined to a correlation between SN luminosity and the specific star formation rate (sSFR), the star-formation rate (SFR) of the galaxy divided by its total stellar mass.

Yet galaxies have no direct knowledge of their stellar constituents, just as a country’s census does not provide information on a single individual. Instead, the correlations between SN Ia and their hosts must trace some deeper difference in how the white dwarf ignites and explodes. The refined correlation with sSFR can be attributed to three possible physical aspects of the galaxy itself: age, metallicity, or dust. Unfortunately, all of these are difficult to disentangle for even the most nearby and well-studied galaxies, much less distant galaxies hosting the SNe Ia used for cosmology.

### A Longstanding Misconception

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/SD-SNIa-NASA.jpg" alt="General idea of single-degenerate progenitors." class="img-fluid rounded z-depth-1" caption="General idea of single-degenerate progenitors." %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/DD-SNIa-NASA.jpg" alt="General idea of double-degenerate progenitors." class="img-fluid rounded z-depth-1" caption="General idea of double-degenerate progenitors." %}
  </div>
</div>

For many years, the origins of SNe Ia were thought to be a solved problem. If a C/O white dwarf reaches a mass of ~1.37 Msun, carbon fusion begins. The electron-degenerate gas cannot expand to regulate the temperature, so the carbon burning cannot be quenched by expansion, and instead spreads throughout the star. If the initial (subsonic) deflagration transitions to a (supersonic) detonation, the white dwarf is destroyed as a SN Ia.

However, white dwarfs must be pushed to the carbon-burning limit. If the progenitor star was massive enough to fuse carbon, it would have done so before reaching the white dwarf stage. This is why a binary companion is needed – for the white dwarf to steal enough matter to reach the necessary densities for carbon fusion. Moreover, we know of white dwarfs accreting matter from their nearby companion stars throughout our own Milky Way galaxy, either as cataclysmic variables (a main-sequence donor) or symbiotic stars (a red-giant donor). The gradual accumulation of mass on the white dwarf could, in principle, push it to the carbon fusion limit and explosion. This scenario, dubbed the ‘single-degenerate scenario’ due to the presence of one degenerate star (the white dwarf) and one non-degenerate star (the main-sequence or red-giant donor), was so widely accepted that my introductory astronomy textbook presented it as fact.

Crucially, the donor must be relatively close to the white dwarf – within ~3 donor radii – for mass transfer to occur via Roche Lobe overflow. This places the donor perilously close to one of the most energetic explosions in the Universe, ejecting ~1 Msun of metal-rich material at 30,000 km/s. This high-speed ejecta impacts the donor within moments of explosion, depositing ~0.1% of the explosion energy into the outer layers of the companion. 0.1% may not seem like a lot, but it corresponds to ~10^48 erg of energy — approximately the same energy emitted by the Sun for 10 million years — deposited into the donor’s envelope in the span of minutes.

<video controls preload="metadata" poster="{{ '/assets/img/research/Screenshot-2026-08-21-at-4.25.32-PM.png' | relative_url }}" style="max-width: 100%;">
  <source src="{{ '/assets/video/rg_SYMB_d.mp4' | relative_url }}" type="video/mp4">
</video>

The above video from Marietta et al. (2000) shows the effect of high-speed SN Ia ejecta crashing into a red-giant donor. Unsurprisingly, the impact of the SN ejecta has pushed the donor out of hydrostatic equilibrium. The star (or rather, the star’s envelope) must respond and start the process of returning to equilibrium, and several observational signatures emerge during this gradual return to normalcy.

### The Search for Post-impact Donors

{% include figure.liquid path="assets/img/research/SN2011by.png" alt="Example non-detection of H-alpha in the nebular spectrum of SN2011by, showing the data (black), continuum fit (red), and simulated 10-sigma detection (blue)." class="img-fluid rounded z-depth-1" caption="Example non-detection of H-alpha in the nebular spectrum of SN2011by, showing the data (black), continuum fit (red), and simulated 10-sigma detection (blue)." %}

The first effect of the ejecta’s impact on the companion star is the shock-heating and subsequent cooling, occurring within hours (main-sequence donors) to a few days (red giants), with the most prominent signatures in the soft X-ray and ultraviolet from the high gas temperatures. Such signatures are difficult to detect due to the necessary depth and timing soon after discovery, and the few nearby SNe Ia with multi-wavelength early-time photometry paint a complicated picture. There are non-linearities in some of the rising light curves, but none match the predictions for a shock-heated companion. Instead, outward mixing of radioactive 56Ni during the explosion can heat the outer layers and produce irregularities in the rising SN light curves. Debates still rage over what exactly these early-time irregular SN Ia light curves are actually probing.

Searching for signatures of a potential companion star requires (at least) coarse knowledge of the SN itself, which itself depends on both time after explosion (“phase”) and the wavelengths involved. My searches for non-degenerate donors in SNe Ia often wait months to years after explosion. This avoids having to disentangle potential signatures of a donor star from intrinsic differences in SNe Ia, which arise from a combination of progenitor mass, metallicity, rotation, and our viewing angle to the explosion, in addition to the (still unknown!) explosion mechanism. Waiting 6 months or more after explosion allows the supernova ejecta to expand and, very gradually, become transparent to photons from the inner metal-rich core. This is the “nebular phase” where high-energy photons and particles emitted by the radioisotopes efficiently heat the inner material, producing a spectrum dominated by forbidden emission lines of heavy iron-group elements like iron, cobalt, and nickel.

Importantly, the radioactive-decay energy is indifferent to the material it is heating. This is important because some of the superheated envelope from the impact of the supernova on the donor is lost to the surroundings by stripping (mass transfer) or ablation (heating). The amount of material is significant – typically 20-50% of the donor’s total mass, depending on the evolutionary state (i.e., 20% for dwarfs, 50% for giants). This H-rich material absorbs and re-radiates the radioactive-decay energy, producing luminous Balmer and Paschen emission lines.

I searched for these emission lines in a large sample of SN Ia spectra, still the largest to-date. No evidence for donor-star material was found, but the resulting non-detections were stringent enough to exclude single-degenerate systems with main-sequence and red-giant donors.

Only compact donors with high surface gravities could evade meaningful constraints from the lack of hydrogen in the nebular spectra. Such stars, like He stars stripped of their H envelope by binary interaction, have sufficiently high surface gravities to retain most of their envelope after the SN impact. Yet they still must respond to the excess energy deposited into their envelopes, leading to puffed-up and luminous post-impact remnants for ~10-1000 years after explosion. Such remnants are a ~million times fainter than the supernova explosions themselves, but evolve much slower and thus should start to outshine the supernova after a few years.

{% include figure.liquid path="assets/img/research/apjad1b4ef1_hr.jpg" alt="Monitoring the nearby SN Ia 2011fe with the Hubble Space Telescope for over a decade constrains explosive nucleosynthesis and post-impact donors." class="img-fluid rounded z-depth-1" caption="Monitoring the nearby SN Ia 2011fe with the Hubble Space Telescope for over a decade constrains explosive nucleosynthesis and post-impact donors." %}

We used the Hubble Space Telescope to monitor the nearby SN Ia 2011fe for almost 12 years. By this time, any compact companion (i.e., a stripped He star) would be easily visible in the latest *Hubble Space Telescope* images, yet nothing is seen.

Read the full stories [here](https://scixplorer.org/abs/2020MNRAS.493.1044T/abstract), [here](https://scixplorer.org/abs/2022MNRAS.517.4119T/abstract), and [here](https://scixplorer.org/abs/2024ApJ...962...74T/abstract).

### Evidence for Merger-driven Explosions

Given the continuous non-detections for predicted signatures of single-degenerate companions to SNe Ia, we must turn to the alternative, the “double-degenerate” scenario, as the primary formation path for SNe Ia.

Now, the question shifts from “*what type of star is the companion*?” to “*how do the two white dwarfs actually ignite*?”

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/bimodal_example_inset.png" alt="Example nebular spectra of a bimodal SN Ia, SN2007on (red), and one without bimodality, SN2012cg (blue), at similar phases. The inset shows the velocities of the isolated [CoIII]5889A lines." class="img-fluid rounded z-depth-1" caption="Example nebular spectra of a bimodal SN Ia, SN2007on (red), and one without bimodality, SN2012cg (blue), at similar phases. The inset shows the velocities of the isolated [CoIII]5889A lines." %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/z0mgs_mstar_sfmr_simple.png" alt="SNe Ia with bimodal nebular emission lines (red) strongly prefer older stellar populations relative to SNe Ia with smooth ejecta velocities (blue)." class="img-fluid rounded z-depth-1" caption="SNe Ia with bimodal nebular emission lines (red) strongly prefer older stellar populations relative to SNe Ia with smooth ejecta velocities (blue)." %}
  </div>
</div>

To that end, I recently published the most compelling evidence thus far that dynamical (“violent”) mergers produce the “delayed” population of SNe Ia that explode in older stellar populations. A subset (~30%) of SNe Ia show bimodal or double-peaked emission lines in their nebular spectra, and I show that these bimodal SNe Ia strongly prefer the older stellar populations of passive/elliptical galaxies. Roughly half of the SNe Ia in passive galaxies show bimodal emission lines, and viewing-angle effects will obscure asymmetry in another ~30%, requiring almost all SNe Ia in passive galaxies to be asymmetric explosions. Moreover, the peak-to-peak velocity separation of the bimodal nebular lines correlates with the peak luminosity of the SN – a third, independent prediction of merger-driven explosions. As the total mass of the binary increases, so does the orbital velocity and the radioactive 56Ni yield.

On the contrary, SNe Ia exploding in star-forming hosts (i.e., younger progenitors) exhibit smooth, single-peaked emission profiles. Such a strong dichotomy between passive and active galaxies is somewhat puzzling because stellar populations mix within galaxies on timescales shorter than the SN Ia delay-time. Even if a few bimodal SNe Ia are missed in active hosts due to viewing-angle effects, there is still a ~20:1 ratio of asymmetric vs symmetric SNe Ia in their respective host environments.

Read the full story [here](https://scixplorer.org/abs/2025MNRAS.538L...1T/abstract).
