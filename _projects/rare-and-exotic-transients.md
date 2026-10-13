---
layout: page
title: "Rare and Exotic Transients with SCAT"
description: "Rare supernovae, tidal disruption events, interstellar objects, and more"
img: assets/img/research/spectra_mosaic.png
alt: "Mosaic of SCAT classification spectra"
importance: 2
permalink: /research/rare-and-exotic-transients/
---

<!-- How to edit this essay, including photos: docs/README.md#a-photo-inside-an-existing-essay -->

[SCAT publications](/research/rare-and-exotic-transients/publications/)

## The Spectroscopic Classification of Astronomical Transients (SCAT) Survey

{% include figure.liquid path="assets/img/research/spectra_mosaic.png" alt="Mosaic of SCAT classification spectra" class="img-fluid rounded z-depth-1" %}

Our collective ability to survey the night sky has progressed significantly over the past 3 decades thanks to advancements in detector technology and computing capabilities. Now, imaging surveys like ASAS-SN, ZTF, and LSST regularly survey thousands of square degrees per night. Supernovae (SNe) are the canonical transients, but the term has grown to encompass extreme stellar variability and flares from accreting supermassive black holes (SMBHs).

Imaging surveys currently report ~50 new supernovae per night, and LSST is projected to (at least!) double that number. This has required recalibrating our approach to studying the explosive and eruptive Universe. No longer do we monitor bright nearby galaxies waiting for a SN to explode. Instead, we must sift through the thousands of events to find the few worth detailed study.

The science objectives of SCAT are two-fold: classify bright transients, and conduct follow-up of the most exciting discoveries. All classifications are released to the public as quickly as possible through the Transient Name Server (click [here](https://www.wis-tns.org/search?&reported_within_last_value=&reported_within_last_units=months&unclassified_at=0&classified_sne=0&classified_tde=0&include_frb=0&name=&name_like=0&isTNS_AT=yes&public=yes&unreal=no&ra=&decl=&radius=&coords_unit=arcsec&reporting_groupid%5B%5D=&groupid%5B%5D=&classifier_groupid%5B%5D=51&objtype%5B%5D=&at_type%5B%5D=&discovery_date_start=&discovery_date_end=&discovery_mag_min=&discovery_mag_max=&internal_name=&discoverer=&classifier=&spectra_count=&redshift_min=&redshift_max=&hostname=&ext_catid=&ra_range_min=&ra_range_max=&decl_range_min=&decl_range_max=&discovery_instrument%5B%5D=&classification_instrument%5B%5D=&associated_groups%5B%5D=&associated_classifying_groups%5B%5D=&official_discovery=0&official_classification=0&auto_classification_algorithm%5B%5D=&auto_classification_objtypeid%5B%5D=&auto_classification_prob=&at_rep_remarks=&class_rep_remarks=&frb_repeat=&frb_repeater_of_objid=&frb_measured_redshift=0&frb_dm_range_min=&frb_dm_range_max=&frb_rm_range_min=&frb_rm_range_max=&frb_snr_range_min=&frb_snr_range_max=&frb_flux_range_min=&frb_flux_range_max=&num_page=50&display%5Bredshift%5D=1&display%5Bhostname%5D=1&display%5Bhost_redshift%5D=1&display%5Bsource_group_name%5D=1&display%5Bclassifying_source_group_name%5D=1&display%5Bdiscovering_instrument_name%5D=0&display%5Bclassifing_instrument_name%5D=0&display%5Bprograms_name%5D=0&display%5Binternal_name%5D=1&display%5BisTNS_AT%5D=0&display%5Bpublic%5D=1&display%5Bend_pop_period%5D=0&display%5Bspectra_count%5D=1&display%5Bdiscoverymag%5D=1&display%5Bdiscmagfilter%5D=1&display%5Bdiscoverydate%5D=1&display%5Bdiscoverer%5D=1&display%5Bremarks%5D=0&display%5Bsources%5D=0&display%5Bbibcode%5D=0&display%5Bext_catalogs%5D=0&display%5Bunreal%5D=0) for an up-to-date list of SCAT classifications).

Our instrumentation, the SuperNova Integral Field Spectrograph (SNIFS) on the UH2.2m telescope, is perfect for transient classification and follow-up. A 30-minute SNIFS exposure reaches ~20 mag at optical wavelengths, matching imaging surveys like ATLAS and ZTF. Moreover, SNIFS is an integral field unit (IFU) specifically designed by the [SNfactory/LBL](https://snfactory.lbl.gov/) for precise observations of SNe Ia for cosmology. IFUs provide spatial and spectral information simultaneously, enabling the accurate removal of contaminating host-galaxy light in all but the most extreme cases, and the calibration of absolute fluxes because slit losses are not a factor. The spectral resolution of SNIFS (R≡λ/δλ=1200~250 km/s) is high enough to identify and remove narrow host-galaxy emission lines. All told, SNIFS is a powerhouse for precise spectrophotometry of extragalactic transients.

#### Rare and Exotic Transients

SCAT sifts through the thousands of transients discovered per year to find the few exciting enough to warrant additional study and publication. Here are some highlights from the past few years.

##### The Most Metal-poor Type II Supernova

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/panstarrs.png" alt="Pan-STARRS color image of the host of SN2023ufx." class="img-fluid rounded z-depth-1" caption="Pan-STARRS color image of the host of SN2023ufx." %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/MvsZ.png" alt="The mass-metallicity relation of galaxies showing the location of SN2023ufx’s dwarf host (gold star). Included for comparison are SDSS galaxies (gray), other SN II hosts (light blue), local dwarfs (dark blue), and high-redshift galaxies from JWST (red)." class="img-fluid rounded z-depth-1" caption="The mass-metallicity relation of galaxies showing the location of SN2023ufx’s dwarf host (gold star). Included for comparison are SDSS galaxies (gray), other SN II hosts (light blue), local dwarfs (dark blue), and high-redshift galaxies from JWST (red)." %}
  </div>
</div>

Type II supernovae (SNe II) originate from the core-collapse of massive red supergiants (RSGs) that retain some or all of their H envelope until explosion. In the local Universe (z&lt;&lt;1), this generally corresponds to stars born with masses ~ 10-20Msun. SNe II are empirically divided into a few sub-classes: SNe IIP with plateau-like optical light curves, SNe IIL with “linear” (i.e., steadily declining) optical light curves, SNe IIb with very thin H envelopes (M_env < 1Msun), and SNe IIn interacting with large quantities of circumstellar material (CSM). Some combination of winds and binary interaction is thought to produce the diverse landscape of SNe II.

Metallicity plays an important role in the evolution of massive stars, primarily through their radiatively-driven stellar winds. Massive stars are so luminous and hot that their UV photons essentially push off the outermost layers. Consequently, radiatively-driven winds carry a steep dependence on metallicity because metal species, especially iron, have many atomic transitions in the UV. More metal atoms in the stellar atmosphere increase interactions between photons and atoms, converting stellar luminosity into momentum.

Yet determining the aggregated effect of metallicity on supernova explosions is complicated by the inherent rarity of local metal-poor environments, which are restricted to the smallest dwarf galaxies. Galaxy-wide metallicity is primarily determined by the number of supernovae that have exploded, so more massive galaxies generally have higher metallicities (the mass-metallicity relation). The mass of a galaxy is related to its brightness, leading to the secondary luminosity-metallicity relation. The Small and Large Magellanic Clouds (SMC, Z~0.2Zsun; LMC, Z~0.5Zsun) are the nearest examples of metal-poor environments, but even these galaxies have metallicities several times higher than the earliest galaxies seen by JWST.

Enter the unique SN 2023ufx, one of the most metal-poor supernovae ever. Two lines of evidence confirm the extremely metal-poor nature of 2023ufx. First, it exploded in a very tiny dwarf host, just ~1kpc across and hosting a ~million stars. For contrast, our own Milky Way galaxy is ~30kpc across and hosts ~100 billion stars. The tiny size of the host galaxy suggested a metallicity of, at most(!), 10% of Zsun.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/zdep_models.png" alt="Comparing the plateau-phase spectrum of SN2023ufx (black) to metallicity-dependent spectra models (red: 10% Zsun; blue: 40% Zsun)." class="img-fluid rounded z-depth-1" caption="Comparing the plateau-phase spectrum of SN2023ufx (black) to metallicity-dependent spectra models (red: 10% Zsun; blue: 40% Zsun)." %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/evolFeII5018.png" alt="The depth of the metallicity-dependent FeII absorption line in SN2023ufx (blue) compared to theoretical spectra (gray)." class="img-fluid rounded z-depth-1" caption="The depth of the metallicity-dependent FeII absorption line in SN2023ufx (blue) compared to theoretical spectra (gray)." %}
  </div>
</div>

The second piece of the puzzle actually comes from the spectra of the SN itself. The H envelope of RSGs is ionized by the shock front during the explosion, and the H-rich material begins recombining once the ejecta has expanded and cooled to ~10,000 K. This leads to a plateau in the optical light curve as the recombination wave recedes through the H-rich envelope, maintaining a (quasi-)constant luminosity.

Metal absorption features, typically Fe II, Ba II, and Ti II, appear during the plateau from metal atoms originally present in the RSG atmosphere. Importantly, these metals have nothing to do with the explosion, as nucleosynthetic metals are limited to the inner core. The H envelope of the RSG remains relatively unaltered by the explosion, and thus the metal absorption lines seen during the plateau phase of the light curve trace the metal content of the progenitor star itself. Again, the Fe II absorption lines in 2023ufx suggest a progenitor metallicity of, at most, 10% Zsun. Read the full story [here](https://scixplorer.org/abs/2024ApJ...976..178T/abstract), and stay tuned for more!

##### The Interstellar Comet 3I/ATLAS

{% include figure.liquid path="assets/img/research/scat_3IATLAS_orbits.png" alt="Trajectories of the interstellar objects `Oumuamua, 2I/Borisov, and 3I/ATLAS relative to (some of) the planets." class="img-fluid rounded z-depth-1" caption="Trajectories of the interstellar objects `Oumuamua, 2I/Borisov, and 3I/ATLAS relative to (some of) the planets." %}

Interstellar objects – asteroids and comets from outside our Solar System – are a relatively new phenomenon, at least observationally. The first, ‘Oumuamua, was only discovered in October 2017, followed by 2I/Borisov in 2019 and now the third, 3I/ATLAS in 2025. Dry and rocky interstellar objects (that is, similar to asteroids) are likely ejected during the messy end stages of planet formation around other stars as their own gas giants (similar to Jupiter or Saturn) moved into their final orbits. The icy, comet-like interstellar objects are more likely to originate from the outer parts of extra-Solar systems, allowing them to retain their surface volatiles. These outer bodies are likely ejected during red-giant and AGB evolutionary phases when episodic mass-loss imparts small kicks to orbiting bodies, gently releasing them into space.

I actually co-authored a [paper](https://scixplorer.org/abs/2018ApJ...855L..10D/abstract) on ‘Oumuamua after it was discovered, noting that the dry, rocky surface composition was very strange. Icy comet-like bodies are generally more luminous and thus much easier to find, suggesting a drying mechanism for ‘Oumuamua. Instead, it turns out ‘Oumuamua was a statistical fluke – the second and third interstellar objects are both similar to comets, possessing surface volatiles and producing significant dusty comas as they pass by the Sun.

{% include figure.liquid path="assets/img/research/scat_3IATLAS_spex.png" alt="Evolution of optical emission lines from the coma of 3I/ATLAS as it approached perihelion." class="img-fluid rounded z-depth-1" caption="Evolution of optical emission lines from the coma of 3I/ATLAS as it approached perihelion." %}

Fast-turnaround IFU spectroscopy from SCAT played a major role in characterizing the evolution of the dust coma as 3I/ATLAS made its closest approach to our Sun. The surface composition sets the optical and near-infrared continuum as sunlight is reflected back towards us, whereas emission lines trace the mass and composition of the volatiles sublimating off of the surface. Read the full stories [here](https://scixplorer.org/abs/2025ApJ...989L..36S/abstract), [here](https://scixplorer.org/abs/2026OJAp....965099H/abstract), and [here](https://scixplorer.org/abs/2026AJ....172...25M/abstract).

##### The Enigmatic Type Icn Supernova 2024abvb

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/24abvb_host.png" alt="The local environment of the Type Icn 2024abvb, with its host-galaxy marked with an arrow." class="img-fluid rounded z-depth-1" caption="The local environment of the Type Icn 2024abvb, with its host-galaxy marked with an arrow." %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/2024abvb_early_spex.jpg" alt="Pre-maximum spectroscopic evolution of 2024abvb (black) compared to other SNe Ibn and Icn." class="img-fluid rounded z-depth-1" caption="Pre-maximum spectroscopic evolution of 2024abvb (black) compared to other SNe Ibn and Icn." %}
  </div>
</div>

First, we need to unpack the term “Type Icn supernova”, a relatively new addition to the taxonomy of supernovae. Type Ic supernovae are a subset of stripped-envelope supernovae, the explosions of massive stars that have lost their outer hydrogen envelopes due to winds or binary mass transfer. Massive stars exploding without hydrogen envelopes but retaining their helium envelopes are Type Ib supernovae, whereas the progenitors of Type Ic supernovae have also lost their helium layers.

The second part of the term “Icn” comes from Type IIn supernovae, where the “n” suffix denotes that the supernova shows narrow emission lines from the high-speed ejecta crashing into nearby circumstellar material (CSM). For Type Icn supernovae, the narrow lines are not from hydrogen as in SNe IIn, but instead narrow emission lines of carbon. The CSM must be distinct from the ejecta for narrow lines to form, so Type Icn supernovae require some mechanisms for producing carbon-rich but hydrogen-poor material above the stellar surface, something that is supposedly impossible for single-star evolution. To date, only a handful of SNe Icn have been discovered.

Yet the SN Icn 2024abvb showed something even more unusual – it exploded far into the outskirts (22 kpc!) of its parent galaxy. This strongly disfavors a massive-star progenitor, or at least any “normal” massive star. Essentially no massive stars have formed at this location in the galaxy for longer than the lifetimes of massive stars, and 2024abvb is so distant that even a massive star somehow ejected from closer in to the host is not feasible. Instead, we find that the progenitor must be a lower-mass star, or perhaps the explosion of a white dwarf merger, but the limited census of SNe Icn precludes meaningful comparisons to theoretical models. Read the full story [here](https://scixplorer.org/abs/2026arXiv260216227S/abstract).

#### A New Look into the Diversity of Transients

Yet these unique objects warranting specific publications represent just the tip of the data iceberg. SCAT classifies several hundred transients per year, with the vast majority being “normal” events where a single spectrum has limited usefulness. Yet these spectra, together, provide a novel view into the *diversity* of transient phenomena – sampling hundreds of objects across different phases, intrinsic properties, and environments. Moreover, the modern era of astronomy research abounds with multi-wavelength archival data, vastly expanding the science content of a single classification spectrum. Imaging surveys like ASAS-SN and ZTF provide light curves for “free” while surveys like GALEX, WISE, and Pan-STARRS provide multi-wavelength imaging of the local environment. We combine all of this into “summary plots” of each object:

{% include figure.liquid path="assets/img/research/2019nvm_summary.png" alt="The “summary plot” for the Type II supernova 2019nvm." class="img-fluid rounded z-depth-1" caption="The “summary plot” for the Type II supernova 2019nvm." %}

These recently came together as part of SCAT’s first data release (DR1!) which includes all observations from our inception in March 2018 to the end of the 2022B observing semester (2023-01-01). DR1 includes more than 1800 spectra of ~1300 individual objects.

Roughly 80% of the transients in DR1 are supernovae, including the thermonuclear Type Ia, the H-rich massive-star Type II, and the H-poor massive-star Type Ibc supernovae, and their subtypes (e.g., Ia-91bg, Ic-BL). The remaining ~20% are nuclear transients (active galactic nuclei, tidal disruption events) and stellar sources (cataclysmic variables, young stellar objects).

We include light curves from imaging surveys (ASAS-SN, ATLAS, ZTF) and archival multi-wavelength imaging (Pan-STARRS, GALEX, WISE) alongside the SNIFS spectra. We fit the early light curves with simple models to estimate the times of explosion, rise times, and peak brightnesses. Hosts are associated to the extragalactic transients where possible, and we include basic host-galaxy properties (r-band luminosity, projected offset) where possible.

Below, we show some of the plots from the DR1 release paper. Read the full story [here](https://scixplorer.org/abs/2026OJAp....969213T/abstract), or check out the data release [here](https://zenodo.org/records/19188201).

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/quality_examples.png" alt="Examples of the quality scores we assign to each spectrum." class="img-fluid rounded z-depth-1" caption="Examples of the quality scores we assign to each spectrum." %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/sneibc_examples.png" alt="Example spectra of stripped-envelope supernovae (SESNe, SNe Ibc)." class="img-fluid rounded z-depth-1" caption="Example spectra of stripped-envelope supernovae (SESNe, SNe Ibc)." %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/sneii_examples.png" alt="Example spectra of H-rich Type II supernovae (SNe II)" class="img-fluid rounded z-depth-1" caption="Example spectra of H-rich Type II supernovae (SNe II)" %}
  </div>
</div>

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/sneii_waterfall.png" alt="Time series of “normal” SNe II, from top to bottom." class="img-fluid rounded z-depth-1" caption="Time series of “normal” SNe II, from top to bottom." %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/sneia_examples.png" alt="Example spectra of Type Ia supernovae (SNe Ia)." class="img-fluid rounded z-depth-1" caption="Example spectra of Type Ia supernovae (SNe Ia)." %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/all_sneia_waterfall.png" alt="Time series of “normal” SNe Ia." class="img-fluid rounded z-depth-1" caption="Time series of “normal” SNe Ia." %}
  </div>
</div>

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/nuclear_examples.png" alt="Example spectra of nuclear transients." class="img-fluid rounded z-depth-1" caption="Example spectra of nuclear transients." %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/stellar_examples.png" alt="Example spectra of stellar transients." class="img-fluid rounded z-depth-1" caption="Example spectra of stellar transients." %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/lcfit_examples.png" alt="Randomly-selected example light curve fits for each class of transients." class="img-fluid rounded z-depth-1" caption="Randomly-selected example light curve fits for each class of transients." %}
  </div>
</div>

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/tdiff_dist.png" alt="Days between the object's discovery, reported to TNS, and our first spectrum. This gives an idea of how quickly we observe most transients after they are discovered." class="img-fluid rounded z-depth-1" caption="Days between the object's discovery, reported to TNS, and our first spectrum. This gives an idea of how quickly we observe most transients after they are discovered." %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/absmag_distr.png" alt="Cumulative distribution function (CDF) of the host-galaxy r-band luminosities. Dotted lines show the distributions when tentative host associations are included." class="img-fluid rounded z-depth-1" caption="Cumulative distribution function (CDF) of the host-galaxy r-band luminosities. Dotted lines show the distributions when tentative host associations are included." %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/proj_offsets_cdf.png" alt="CDF of the projected separations of SNe, by type." class="img-fluid rounded z-depth-1" caption="CDF of the projected separations of SNe, by type." %}
  </div>
</div>

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/research/sneia_hostz.png" alt="SN Ia host-galaxies separated by those with (green) and without (purple) pre-existing redshifts in NED. The dashed line shows an r-band detection limit of ~24 mag." class="img-fluid rounded z-depth-1" caption="SN Ia host-galaxies separated by those with (green) and without (purple) pre-existing redshifts in NED. The dashed line shows an r-band detection limit of ~24 mag." %}
  </div>
</div>
