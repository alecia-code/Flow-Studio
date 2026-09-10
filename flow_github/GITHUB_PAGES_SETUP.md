# Flow Studio: GitHub Pages Setup

This export has been prepared to deploy the Flow Studio React/Vite site on GitHub Pages.

## What was added

- Dynamic Vite `base` configuration for GitHub Pages project repositories.
- React Router `basename` tied to Vite's deployment base.
- `.github/workflows/deploy-pages.yml` for automatic deployment.
- SPA fallback (`dist/404.html`) so direct visits to `/about`, `/field-note`, and nested Field Note routes can load the app.

## First deployment

1. Create a GitHub repository, for example `flow-studio`.
2. Put the contents of this project at the repository root.
3. Push/commit to the `main` branch.
4. In GitHub open **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Open the **Actions** tab and watch `Deploy Flow Studio to GitHub Pages`.
7. After the deploy job succeeds, GitHub will show the public Pages URL.

The workflow automatically detects the repository name, so renaming the repository does not require hard-coding a Vite base path.

## First-live-test checklist

Test these URLs and interactions after deployment:

- `/` homepage
- `/about`
- `/field-note`
- `/field-note/lumen-pilates`
- `/field-note/thanks`
- homepage `#work` anchor
- Work nav from `/about` and `/field-note`
- Request a Field Note CTAs
- mobile navigation open/close, Escape, focus return
- desktop 1440-ish width
- tablet around 768px
- mobile around 390px

Also verify there are no missing Figma assets, font fallbacks, horizontal scrolling, or console errors.

## Before sharing publicly

Confirm or replace placeholder social links and verify that `hello@flowstudio.co` is an inbox Jenna controls.
