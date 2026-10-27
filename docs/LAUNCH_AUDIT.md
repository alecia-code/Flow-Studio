# Jenna Alecia Studios pre-launch audit

Date: October 27, 2026 (America/Chicago). Branch: `rebrand/jenna-alecia-studios`.
Source baseline: `149af80369adcd77892e9125df97c8feb9a201f0`.

**Readiness: hold launch pending browser layout/interaction checks and downstream intake verification.**

## Scope and preservation

Reviewed all five routed pages: home, About, Field Note intake, Lumen Pilates sample, and confirmation. Preserved the existing components, visual design, route structure, and original Tally form `PdeLB5`, including its exact embed query parameters and direct-form fallback. No repository rename, main merge, live deployment, Tally edit, Airtable edit, or Make edit was performed.

## Changes

- Replaced visible Flow branding in homepage sections, About, and intake iframe title. Kept internal component names to avoid unnecessary refactoring.
- Confirmed the three service cards: Lead-to-Booking Systems, Business Pulse Dashboards, Retention & Reactivation Systems.
- Replaced implementation-focused intake copy with visitor-facing instructions; removed the unsupported promise that the downstream workflow was already verified.
- Fixed homepage Work navigation: React Router now maintains the GitHub Pages basename instead of replacing the URL with a domain-root path.
- Confirmation links now use Jenna’s supplied LinkedIn profile and email (`Jenna.hayes0110@gmail.com`), replacing the generic LinkedIn home page and old Flow mailbox. Inbox ownership/deliverability was not independently tested.
- Added route titles, descriptions, Open Graph text, a client-side noindex directive for the confirmation route, a keyboard skip link, section anchor offsets, and reduced-motion preferences (CSS and MotionConfig).
- Labeled the Lumen sample as illustrative / simulated data, consistent with the homepage concept-case-study disclosure.
- Added npm lockfile and ignore rules, switched Pages installation to `npm ci`, renamed the workflow display title, and restricted its build job to main even when manually dispatched. Development-branch pushes cannot deploy through this workflow.

## Verification results

| Check | Result | Evidence / limits |
| --- | --- | --- |
| Clean dependency install | PASS | `npm ci --no-audit --no-fund` after generating the lockfile |
| Default production build | PASS | `npm run build`; 1,083 modules transformed |
| GitHub Pages production build | PASS | `GITHUB_ACTIONS=true GITHUB_REPOSITORY=alecia-code/Flow-Studio npm run build`; generated asset URLs use `/Flow-Studio/` |
| Patch whitespace | PASS | `git diff --check` |
| Internal literal link targets | PASS, source only | Inspected href/to references against all five configured routes; no placeholder `href="#"` |
| Branding | PASS in routed website source | Remaining Flow identifiers are internal names/comments; original external Tally copy still contains Flow |
| Core services | PASS, source only | All three requested names and descriptions present |
| Exact Tally embed URL | PASS, browser | Existing embed URL opens and shows the original form with hidden title |
| Direct Tally form | PASS, browser | Progressed through existing form, exercised numeric validation, submitted synthetic labeled QA record; Tally reported `Form submitted` |
| Desktop/mobile site layout, navigation, CTA clicks, keyboard flow | NOT VERIFIED in browser | Cloud browser could not access local preview (`ERR_CONNECTION_REFUSED`); local Playwright browser download returned an invalid archive. Source audit does not establish visual/interaction pass |
| Airtable record / mapping | PENDING | Airtable connected during audit, but no callable record tool was exposed; provided CLI reports Not configured (no inherited CLI credentials) |
| Make scenario run | NOT VERIFIED | No connected Make execution-history capability available |
| Confirmation route | Source reviewed | Valid links fixed; actual Tally flow displays its own inline thank-you, not this route |
| Pages deployment configuration | Source reviewed | Vite base and Router basename agree; workflow copies index.html to 404.html; repository has Pages enabled and latest observed main Actions runs succeeded |
| SEO / accessibility | Partial | Improvements above; no browser accessibility scan or contrast certification performed |

The 866.5 kB JavaScript bundle (~248.1 kB gzip) produces Vite’s >500 kB chunk warning. This is a performance follow-up, not a build failure. Recharts 2.x also emits a deprecation notice; no broad dependency upgrades were attempted.

## Intake test trace

- Name: `TEST — Jenna Alecia Studios launch QA 2026-10-27`
- Business: `TEST ONLY — Jenna Alecia Studios launch QA 2026-10-27`
- Email: `jenna-studios-launch-test@example.com`
- Website: synthetic `https://example.com` value marked TEST ONLY.
- Synthetic answers repeatedly identify this as QA, not a customer inquiry. No file uploaded.
- The reserved example.com email intentionally does not test email delivery; an email action might fail even if intake routing succeeds.
- Tally showed its thank-you screen and `Form submitted`; this proves acceptance by Tally, not receipt in Airtable or successful Make execution.
- [Confirmation screenshot](field-note-test-confirmation-20261027.jpg).

## Outstanding launch checks

1. Restore callable access to the connected Airtable account (the exposed skill uses a separate CLI authentication configuration; no token was requested or logged). Match the exact QA marker/email in the intake Airtable table. Check mapped answers, timestamp, source, status, and duplicates. Do not manufacture a replacement record, because that would not prove the integration worked.
2. Inspect the intended Make scenario history and match this submission to its execution, module outputs, error routes, and final intended action. Email delivery requires a separate deliverable-address test if it is part of acceptance criteria.
3. Edit the existing Tally form’s Flow branding in place, with owner authorization. Introduction says “Flow Note”; thank-you says “If it looks like Flow can help.” Preserve form ID, field IDs, integrations, and automation mappings.
4. Keep or deliberately choose the Tally inline thank-you versus a website redirect. Current test stayed on Tally; the site’s `/field-note/thanks` page was not reached. Do not silently add a redirect or replace the form.
5. Run all five pages at desktop 1440, tablet 768, and mobile 390 and 320 widths in an environment with a working browser and preview. Test nav, same-page/cross-page Work anchor (URL must retain `/Flow-Studio/`), all intake CTAs, case-study links, back/forward, menu focus/Tab/Escape, skip link, visible focus, fixed-header overlap, horizontal overflow, and missing images/fonts.
6. Test the iframe in its actual site container through every step on mobile: it is still the original fixed-height iframe with dynamicHeight in the URL but no parent resize handler. Check for clipping, nested scrolling, and dropdown usability before deciding whether resizing support is needed.
7. Confirm contact inbox and response-time promises (website says 1–2 business days; sample offers five business days). Run a keyboard/contrast audit: pale-blue secondary text may need darker foregrounds while preserving the palette.
8. Validate external LinkedIn, Unsplash, and Google Fonts loading in the final browser. Tally URLs were browser-verified; other external destinations were reviewed in source only.
9. Confirm final public URL before adding canonical URLs, social preview image, sitemap, or richer structured data. Per-route metadata is client-side; non-JavaScript crawlers see the shared index metadata. Pages deep links use the existing 404 fallback and may return HTTP 404 even when the SPA renders; test the public behavior after approved deployment.

Merge or launch requires Jenna’s approval. The audit does not certify launch readiness while the outstanding checks remain open.
