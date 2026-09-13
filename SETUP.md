# Publish on GitHub Pages

The site is ready to publish. A GitHub account and access to its repository are required for the final upload.

1. Sign in to GitHub and create a **public, empty repository** named `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with your exact GitHub username. Do not add a README or license during creation; this folder already includes both.
2. Upload the **contents** of this website folder to the repository root, including the hidden `.github` folder. The `_config.yml`, `Gemfile`, `_pages`, and `.github` entries should be directly at the root, not inside another folder.
3. In `_config.yml`, set `url` to `https://YOUR-USERNAME.github.io`, `repository` to `YOUR-USERNAME/YOUR-USERNAME.github.io`, and `author.github` to your username. Leave `baseurl` empty for this repository name. The included workflow also detects the correct published address automatically.
4. In the repository, open **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source.
5. Open **Actions → Build and publish academic website → Run workflow**. When the build and publish jobs finish, your site will be at `https://YOUR-USERNAME.github.io`.

For a project repository with a different name, the workflow automatically sets the correct path. For local previews of that arrangement, also update `baseurl` to `/REPOSITORY-NAME`.

## Easiest upload with GitHub Desktop

Choose **File → Add Local Repository** and select this folder. If prompted, create a repository here. Publish it using the name above, with “Keep this code private” unchecked, then complete steps 3–5.

## Terminal upload, if preferred

Run these inside the website folder after replacing YOUR-USERNAME:

```sh
git init -b main
git add .
git commit -m "Create Jinhyung Lee academic website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

These commands assume an empty destination repository. If you already have a website repository, review and back it up before replacing anything.

## After publication

- Confirm the homepage, Publications filter, CV download, and email links work.
- Add a portrait when ready; the site currently uses your initials.
- Update the public CV PDF and CV webpage together when your experience changes.
- Use **Actions** to diagnose a failed build. The **Settings → Pages** screen shows the official published URL.

Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
