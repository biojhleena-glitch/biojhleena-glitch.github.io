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

The current design uses Helvetica-style typography, a horizontal navigation menu, and a navy introduction with research artwork beside the title. The artwork retains its full square composition on desktop and mobile. All active styles are in `assets/css/custom.css`. The original Academic Pages stylesheet is retained as `assets/css/main.css` but is not loaded by this design.

The homepage and endosomal-escape research section use `images/rna-delivery-illustration.png`, selected from the user-supplied journal cover illustration folder (Version 2.png). It is displayed unchanged and labeled as a conceptual research illustration; the site does not claim that it was a published journal cover. To replace it, update the image references, dimensions, alt text, and captions in `_pages/about.html` and `_pages/research.md`. The earlier AI-generated banner is retained as `images/research-banner.png` but is no longer displayed.

The homepage and footer contain the displayed biography and affiliation. Edit `_pages/about.html`, `_includes/masthead.html`, and `_includes/footer.html` when changing those details.

## Local preview

Requires Ruby 3.3 and Bundler:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open http://127.0.0.1:4000. Content is maintained in Markdown, HTML, and JSON; no database or paid service is required.
