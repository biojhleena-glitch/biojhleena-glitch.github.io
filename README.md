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

## Design and banner

The current design uses Helvetica-style typography, a horizontal navigation menu, a wide conceptual research banner, and a single-column layout. All active styles are in `assets/css/custom.css`. The original Academic Pages stylesheet is retained as `assets/css/main.css` but is not loaded by this design.

The homepage banner is `images/research-banner.png`, an original AI-generated conceptual illustration of rod-shaped molecular assemblies. It is decorative, not a chemical structure or experimental result. To replace it, upload a landscape image and update the image reference and dimensions in `_pages/about.html`. The banner caption should identify conceptual art when appropriate.

The homepage and footer contain the displayed biography and affiliation. Edit `_pages/about.html`, `_includes/masthead.html`, and `_includes/footer.html` when changing those details.

## Local preview

Requires Ruby 3.3 and Bundler:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open http://127.0.0.1:4000. Content is maintained in Markdown, HTML, and JSON; no database or paid service is required.
