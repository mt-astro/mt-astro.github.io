# Notes for later edits

- The live OSU site is WordPress at https://u.osu.edu/tucker-957/. This folder is a local al-folio v0.16.3 copy. Do not start from the unreleased al-folio main branch; v1 changes the theme layout.
- System Ruby on this Mac is 2.6 and cannot build the site. Use Homebrew Ruby 4 (`/opt/homebrew/opt/ruby/bin`) and `vendor/bundle`.
- SCAT and the rare-transient object stories are one essay, titled Rare and Exotic Transients with SCAT. Do not split them into two cards.
- `papers.xlsx` is the publication source. `scat` = `y` feeds the SCAT list. Regenerate with `python3 scripts/build_publications.py`. The sheet has the first author only, so the pages say “et al.”
- Paper links use `https://scixplorer.org/abs/<bibcode>/abstract`. ADS abstract URLs redirect there starting 16 November 2026. Do not switch them back to `ui.adsabs.harvard.edu`.
- The SCAT DR1 essay link uses the published bibcode `2026OJAp....969213T` from the spreadsheet, not the arXiv bibcode that was on the OSU page.
- Tucker et al. 2018 on the GALEX page is `2018MNRAS.475.4768T` (white-dwarf pulsators). Do not attach a different 2018 Tucker paper.
- Office on the contact page is 4034 McPherson, from the CCAPP people page. astronomy.osu.edu lists 4055, which is the department address. Confirm before publishing.
- ORCID on the contact page is 0000-0002-2471-8442, the record on the OSU/CCAPP nebular-spectra and SN 2023ufx papers. No ADS library or GitHub profile was added. `zappamat` is a different Michael Tucker.
- The low-surface-brightness survey section links to Jennerjahn et al. 2025. The Cas A and Tycho section links to Neumann et al. 2024, “Echo Location.”
- The stray WordPress post `2026/08/12/88/` was not migrated.
- `figure.liquid` uses `alt` for the alt attribute, and falls back to `title`, so the editing guide’s `title=` examples still work.
- Files in `_conferences/` and `_outreach/` whose names start with `_` are not published. That is how the example entries stay off the site.
- Imagemagick is enabled and rewrites images under `assets/img/` into width variants at build time. `convert` must be on `PATH`.
- Do not hotlink `u.osu.edu`. The old URLs will not redirect after that site goes away.
