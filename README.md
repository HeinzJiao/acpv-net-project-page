# ACPV-Net Project Page

This website is now built directly on top of the downloaded `nerfies.github.io-main` template, with ACPV-Net content substituted into the Nerfies-style layout.

## Main files that matter

- `index.html`
  - The full page structure and most of the paper content now live here.
- `static/css/index.css`
  - The Nerfies template stylesheet plus a small number of ACPV-Net-specific additions for PDF panels and qualitative tabs.
- `static/js/index.js`
  - Minimal page interaction: mobile navbar and qualitative tab switching.
- `../paper_materials/`
  - All paper PDFs, teaser figure, network figure, and qualitative result PDFs are loaded from here.
- `teaser.png` and `network_architecture.png`
  - The teaser and method figures now load directly from these cropped PNG files in `website/`.

## Preview locally

- Open `website/index.html`

If your browser blocks some local embedded content, run a simple local server from `acpv-net_project_page`:

- `py -3 -m http.server 8000`

Then open:

- `http://localhost:8000/website/`

## What to edit later

- Change title, authors, buttons, abstract, acknowledgements, and BibTeX in `index.html`
- Change typography, spacing, and PDF crop settings in `static/css/index.css`
- Change qualitative tab behavior in `static/js/index.js`

## Figure loading

- `teaser.png` is used directly in the teaser section
- `network_architecture.png` is used directly in the method section
- The qualitative comparisons still load from the PDFs in `../paper_materials/additional_qualitative/`

## Attribution

The page is adapted from the Nerfies website source:

- https://github.com/nerfies/nerfies.github.io

The footer attribution has been kept accordingly.
