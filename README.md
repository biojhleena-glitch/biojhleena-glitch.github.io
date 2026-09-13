# Jinhyung Lee — academic website

A personalized academic website based on [Academic Pages](https://github.com/academicpages/academicpages.github.io), built with Jekyll for GitHub Pages. The original MIT license is retained in `LICENSE`.

## Included

- About, Research, Publications, Mentoring, CV, and Contact pages.
- Seven publication records with DOI links and a BibTeX download.
- Search and publication-type filters; readable content when JavaScript is disabled.
- Responsive navigation, keyboard access, and a light/dark appearance switch.
- A public CV PDF and automated GitHub Pages deployment.

Live website: https://biojhleena-glitch.github.io

See **SETUP.md** for publishing and editing. Review your biography and CV before publishing.

## Edit your website

| What to change | Where to edit |
| --- | --- |
| Name, email, ORCID, portrait, website address | `_config.yml` |
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

When adding a publication, update its record, detail page, and `files/publications.bib`. Mark `selected: true` to show it on the homepage. Update the publication count on the homepage and Publications page as needed.

For a portrait, add a square photograph to `images/portrait.jpg` and set `author.avatar` to `portrait.jpg` in `_config.yml`. The initials design appears until a portrait is added.

The original Academic Pages theme styles are included as `assets/css/main.css`. Personal styling is in `assets/css/custom.css`; both are editable.

## Local preview

Requires Ruby 3.3 and Bundler:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open http://127.0.0.1:4000. Content is maintained in Markdown, HTML, and JSON; no database or paid service is required.
