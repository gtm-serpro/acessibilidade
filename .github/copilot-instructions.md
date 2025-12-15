## Purpose

This file gives immediate, actionable facts to help an AI coding agent be productive in this repository.

## Quick facts

- Project: Create React App (React 19) single-page app.
- Routing: `react-router-dom` (routes defined in `src/App.js`).
- UI framework: GOV.BR design system via `@govbr-ds/core` CSS and runtime (`core-init.js`).
- Entry: `src/index.js` imports `@govbr-ds/core/dist/core.min.css` and `core-init.js`.

## Big-picture architecture

- App shell: `src/App.js` — renders `Header`, `Routes` and `Footer`.
- Pages: placed under `src/pages/*` and referenced in `App.js` (e.g., `Beneficios`, `Ferias`).
- Main layout/content: `src/components/Main.js` composes menu, breadcrumb and action cards.
- UI primitives: `src/components/ui/` contains small reusable pieces (e.g., `ActionCard.js`, `Breadcrumb.js`).
- Styles & behavior: visual classes use GOV.BR naming (`br-header`, `br-menu`, `br-card`); interactive behavior relies on `data-` attributes consumed by `@govbr-ds/core` runtime (e.g., `data-toggle`, `data-target`).

## Key integration points to know

- GOV.BR CSS: `src/index.js` imports `@govbr-ds/core/dist/core.min.css` — do not remove this import.
- GOV.BR JS runtime: either imported globally (`core-init.js`) or lazily via `src/utils/initDSGOV.js` which calls `window.BRCore.default()` after dynamic import.
- Icons: Font Awesome is used across components (see imports in `src/components/*`).
- Routing vs anchors: many components use plain `<a href="/...">` (e.g., `Header.js`, `Main.js`) rather than `Link` from `react-router-dom`. Be aware this can trigger full page reloads. When adding internal navigation, prefer using `react-router-dom` constructs for SPA behavior — but keep changes consistent with the surrounding files unless intentionally changing behavior.

## Developer workflows (commands)

- Start dev server: `npm start` (CRA default) — opens at http://localhost:3000
- Run tests: `npm test` (react-scripts test; interactive watch by default)
- Build for production: `npm run build`

These are standard Create React App scripts (see `package.json`).

## Project-specific conventions & patterns

- Component style: functional React components with default or named exports. Examples:
  - Default exports: `src/components/Breadcrumb.js`, `src/components/Header.js`.
  - Named export: `ActionCard` is exported as a named export (`src/components/ui/ActionCard.js`).
- GOV.BR classes: use `br-*` class names and `data-*` attributes for interactive elements. Example: `Header.js` uses `data-toggle="menu"` and `id="main-navigation"` to wire the menu behavior.
- Accessibility patterns: project includes `src/components/SkipLinks.js` and uses ARIA attributes and `aria-label` on buttons. Preserve these patterns when adding interactive elements.

## Adding a page or route (example steps)

1. Create `src/pages/MyPage.js` exporting a default React component.
2. Import and add a `<Route path="/my-page" element={<MyPage/>} />` to `src/App.js` alongside existing routes.
3. Add navigation UI where appropriate (use `Link` from `react-router-dom` if you want SPA navigation).

## Where to look for examples

- App & routing: `src/App.js`
- Entry & GOV.BR integration: `src/index.js`, `src/utils/initDSGOV.js`
- Layout: `src/components/Header.js`, `src/components/Main.js`, `src/components/Footer.js`
- UI primitives: `src/components/ui/ActionCard.js`, `src/components/ui/Breadcrumb.js`
- Accessibility helpers: `src/components/SkipLinks.js`

## Do / Don't (short)

- Do: follow existing GOV.BR class names and `data-` attributes for UI behavior.
- Do: check `package.json` for dependency versions (React 19, react-router-dom v7) before upgrading APIs.
- Don't: remove the `@govbr-ds/core` imports or break `window.BRCore` initialization without updating `initDSGOV` usage.

## Questions for the maintainer (when unclear)

- Should internal navigation be migrated to `react-router-dom` `Link` components (currently many anchors are used)?
- Are there preferred testing targets or CI steps not in the repository?

---
If anything here is unclear or you want different emphasis (tests, CI, refactor guidance), tell me which areas to expand and I will iterate.
