# Flow Studio — Code QA + About V1

## Completed in this pass

- Preserved the approved homepage narrative and removed the redundant legacy `FinalCTA` render.
- Removed dead legacy V1 components that were no longer imported by the application.
- Rebuilt `/about` as a complete editorial About V1 page consistent with the current Flow visual system.
- Kept `/about` as a real route and kept Field Note routing at `/field-note`.
- Improved `Work` navigation so cross-route navigation uses `/#work` rather than a timing-based route/scroll workaround.
- Added mobile-navigation focus management:
  - focus moves into the open menu,
  - Tab focus is trapped inside the menu,
  - Escape closes the menu,
  - focus returns to the menu button,
  - page scrolling is locked while the menu is open.
- Added `aria-controls`, `aria-modal`, `aria-current`, and clearer navigation labeling where appropriate.
- Added a visible global `:focus-visible` treatment for keyboard users.
- Added horizontal overflow protection at the document level.

## Routes checked in source

- `/` — homepage
- `/about` — About V1
- `/field-note` — Field Note request
- `/field-note/lumen-pilates` — existing sample Field Note
- `/field-note/thanks` — existing thank-you route
- `/#work` — featured case study anchor

## Remaining items before public deployment

- The exported package does not include installed dependencies, and the current working environment could not complete `npm install`, so an actual Vite production build could not be executed in this pass. Run `npm install` followed by `npm run build` once the repository is in an internet-connected development environment.
- Footer social links are still placeholders (`href="#"`) in the exported design. Replace them with real LinkedIn/Instagram URLs or remove them before launch.
- Confirm that `hello@flowstudio.co` is an active mailbox before using the site publicly.
- GitHub Pages deployment will need a hosting-specific routing/base-path pass after the GitHub repository name is known.
