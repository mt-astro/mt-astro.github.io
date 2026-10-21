# Codebase

al-folio v0.16.3, with the demo content removed. Theme files that were not edited are still the upstream theme.

## Content

- `_pages/home.md` is the landing page (`/`). It is the research card grid plus the short welcome.
- `_projects/` holds the four research essays. `importance` sets card order. `img` is the card thumbnail.
- `_pages/rare-transients-publications.md` is the SCAT paper list, linked from the rare-transients essay. It is not a card. Edit it by hand.
- `_pages/publications.md` is the full publication list. Edit it by hand.
- `_pages/about.md`, `_pages/contact.md`, `_pages/cv.md`, `_pages/conferences.md`, `_pages/outreach.md` are the other nav pages.
- `_conferences/_example.md` and `_outreach/_example.md` are unpublished templates.
- `papers.xlsx` is a stale publication export. `scripts/build_publications.py` still rewrites the two publication pages from it, which drops hand-added papers.
- `assets/img/research/`, `assets/img/about/`, `assets/pdf/cv.pdf`, and `assets/video/rg_SYMB_d.mp4` are the migrated media.
- `docs/README.md` is the editing guide. `docs/agent_notes.md` and `docs/codebase.md` describe how the site is organized.

## Theme edits

- `_config.yml` sets the name, local URL, empty `baseurl`, collections for projects, conferences, and outreach, and turns project categories off.
- `_sass/_themes.scss` uses a deep blue accent on the light theme. Dark mode still uses the theme’s cyan accent.
- `_includes/header.liquid` shows the name on the home page as well as the other pages.
- `_includes/projects.liquid` uses a card’s own alt text, and shows venue and date when those fields exist.
- `_includes/figure.liquid` copies `title` into `alt` when `alt` is omitted.
- `_layouts/about.liquid` uses `profile.alt` for the portrait.
- `_data/socials.yml`, `_data/repositories.yml`, `_data/cv.yml`, and `_bibliography/papers.bib` no longer contain the theme’s sample person. The CV page links the PDF instead of rendering a generated CV.
