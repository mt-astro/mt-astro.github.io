# Michael A. Tucker website

Jekyll site for the professional pages that were on https://u.osu.edu/tucker-957/. The public copy is https://mt-astro.github.io. Hosting is [al-folio](https://github.com/alshedivat/al-folio) v0.16.3.

## Preview

Use the Homebrew Ruby, not the system Ruby 2.6.

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve
```

Open the URL it prints, usually http://127.0.0.1:4000. Save a file, then reload the browser. A wrong image path shows a broken image.

## Pages

- Home card grid: `_pages/home.md` and `_projects/`
- Research essays: `_projects/*.md`
- SCAT publications: `_pages/rare-transients-publications.md`
- All publications: `_pages/publications.md`
- About, conferences, outreach, contact, and CV: the matching files in `_pages/`, plus `_conferences/`, `_outreach/`, and `assets/pdf/cv.pdf`

The publication pages are generated from [papers.xlsx](../papers.xlsx). See [Publications](#publications).

How to edit the site is in this file.

## How to add photos and content

Put every image in the repo. Do not paste a `u.osu.edu` link or another website’s image address. Use lowercase filenames with hyphens and no spaces, for example `assets/img/conferences/2026-aas-poster.jpg`. JPG, JPEG, PNG, and GIF all work. A card photo looks best as a landscape picture about 1200 pixels wide. Phone photos are fine. If a page feels slow, shrink that photo.

### Conferences and workshops

One meeting is one file in `_conferences/`. The conferences page lists them newest first as blocks: title, place, date, a short paragraph, and up to three photos. The `date` field is only for sorting. `when` is the date people see, so a meeting known only by year can say `when: "2024"` while `date` is a full day used to place it in the list.

1. Save photos in `assets/img/conferences/`, lowercase names with hyphens.
2. Copy `_conferences/_example.md` to a new file whose name does not start with an underscore, for example `_conferences/2026-01-15-aas.md`.
3. Fill in the header and write the paragraph under it. Add a photo row only for the pictures you have. One photo uses `col-sm-6`. Two use `col-sm-6`. Three use `col-sm-4`.

### Outreach

The outreach page is a list of events, then one photo gallery. Edit `_pages/outreach.md`. Add a bullet for a new event. Add a photo under the gallery with `figure.liquid` and a file in `assets/img/outreach/`. Caption it with the event name.

### A photo inside an existing essay

The card thumbnail and the pictures inside the essay are different. The thumbnail is the `img` line at the top of the project file in `_projects/`. Changing that line changes the home-grid card only.

Pictures in the essay body use this line, on its own:

```liquid
{% include figure.liquid path="assets/img/research/spectrum.png" title="SNIFS spectrum of SN 2024abvb" caption="Early spectrum. The narrow lines are marked." class="img-fluid rounded z-depth-1" %}
```

`path` is the file. `title` is the alt text when `alt` is omitted. `caption` is the visible sentence under the picture and can be omitted. To replace a figure, swap the file or point `path` at the new file, and update the alt text and caption so they still describe it.

A second photo side by side is a Bootstrap row. Copy one of those rows from a research essay and change the paths. Widths are `col-sm-4` (one third), `col-sm-6` (half), `col-sm-8` (two thirds), and `col-sm-12` (full width).

A new local `.mp4` goes in `assets/video/`. Copy the video block on the Type Ia page and change the path.

### Publications

Edit `_pages/publications.md` and `_pages/rare-transients-publications.md` directly. [papers.xlsx](../papers.xlsx) is an old export and does not list every paper. Running `scripts/build_publications.py` rewrites both pages from that spreadsheet and drops papers that were added by hand.

The spreadsheet columns, if you do use it later, are:

- `bibcode`, the ADS bibcode. The site links it at scixplorer.org.
- `scat`, `y` or `n`. `y` also puts the paper on the SCAT publications page
- `first_author`
- `date`
- `title`

The other columns are kept for your own sorting and are not shown on the site.

A new line follows the existing ones: `First Author et al. YEAR, "Title," [SciX](https://scixplorer.org/abs/BIBCODE/abstract)`. Put it under the right year, newest first. A SCAT paper goes on both pages. The full list is `_pages/publications.md`. The SCAT list is `_pages/rare-transients-publications.md`.

### About, contact, and the CV

About is `_pages/about.md`. Contact is `_pages/contact.md`. A new About photo uses `figure.liquid` and a file in `assets/img/about/`.

To replace the CV, put the new PDF at `assets/pdf/cv.pdf`, overwriting the old file, and change the “PDF dated …” line on `_pages/cv.md` to the new date.

### Research card order

Each research essay is a file in `_projects/`. The `importance` number controls the home grid: 1 is first, then 2, and so on. The title in that header is the card title. Body text under the header is the essay.

## Publishing

The public site is https://mt-astro.github.io. The repository is [mt-astro/mt-astro.github.io](https://github.com/mt-astro/mt-astro.github.io). A push to `main` runs the deploy workflow, which publishes the built site.
