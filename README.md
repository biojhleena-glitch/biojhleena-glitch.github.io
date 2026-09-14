# Jinhyung Lee — academic website

A personalized academic website based on [Academic Pages](https://github.com/academicpages/academicpages.github.io), built with Jekyll for GitHub Pages. The original MIT license is retained in `LICENSE`.

## Included

- Home, Research, Publications, Mentoring, CV, and Contact pages.
- Seven publication records with DOI links and a BibTeX download.
- Search and publication-type filters; readable content when JavaScript is disabled.
- Responsive navigation, keyboard access, and a light/dark appearance switch.
- A public CV PDF and automated GitHub Pages deployment.

Live website: https://biojhleena-glitch.github.io

See **SETUP.md** for publishing and editing. Review your biography and CV before publishing.

## Edit your website

| What to change | Where to edit |
| --- | --- |
| Site name, email, ORCID, website address | `_config.yml` |
| Navigation | `_data/navigation.yml` |
| Homepage | `_pages/about.html` |
| Research | `_pages/research.md` |
| Publications list | `_data/publications.json` |
| Individual publication pages | `_publications/` |
| Teaching and mentoring | `_pages/mentoring.md` |
| CV webpage | `_pages/cv.md` |
| Downloadable CV | `files/Jinhyung-Lee-CV.pdf` |
| Contact | `_pages/contact.md` |
| Colors and layout | `assets/css/custom.css` |

When adding a publication, update its record, detail page, and `files/publications.bib`. Update the publication count on the Publications page as needed. The homepage is intentionally brief and links to the full publication list.

## Design and research illustration

The current design uses bold Helvetica-style headings, white surfaces, navy text, and a restrained gold accent. Inspired by the spacious image-led layout of Choi Lab, it uses original typography proportions, the researcher’s own artwork, and an overlapping introduction with a portrait. Approved biography and research content are preserved. The homepage presents experience, a visual research narrative, three published studies, future directions, and mentoring. The research narrative now shows the published PNAS Movie S1; the banner retains a decorative crop of the conceptual artwork. All active styles are in `assets/css/custom.css`. The original Academic Pages stylesheet remains in `assets/css/main.css` but is not loaded.

The homepage banner uses `images/rna-delivery-illustration.png`, selected from the user-supplied journal cover illustration folder (Version 2.png). It is conceptual artwork, not a published journal cover. Its display is controlled in `assets/css/custom.css`. The earlier generated banner remains in `images/research-banner.png` but is not displayed.

The research-question section plays `files/pnas-2021-movie-s1.mp4`, the original 10-second PNAS Movie S1 supplied by the author. This is a 3D confocal z-stack showing nanopiece-delivered AF488-siRNA (green), late endosomes (red), and nuclei (blue). It plays automatically, muted and looping, with native pause and full-screen controls. Visitors who prefer reduced motion can start it manually. The adjacent caption and source links appear in `_pages/about.html`. The video is unchanged and credited under CC BY 4.0.

The homepage and footer contain the displayed biography and affiliation. Edit `_pages/about.html`, `_includes/masthead.html`, and `_includes/footer.html` when changing those details.

## Published research figures

The Research page features three unaltered figures from peer-reviewed publications: PNAS (2021), Figure 1; Journal of Controlled Release (2025), Figure 1; and Materials Today Advances (2026), Figure 1. Each figure includes a source link, author attribution, CC BY 4.0 license link, and a full-size view. Images are stored locally in `images/`; captions and research summaries are in `_pages/research.md`. The homepage also features the same three credited published figures, with the PNAS movie in the research narrative and conceptual artwork in the banner.

The downloadable CV uses the user-supplied PDF, with previously excluded material removed from the public copy. Preserve this version when updating other website content.

## Local preview

Requires Ruby 3.3 and Bundler:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open http://127.0.0.1:4000. Content is maintained in Markdown, HTML, and JSON; no database or paid service is required.
