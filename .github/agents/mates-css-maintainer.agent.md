---
name: Mates CSS Maintainer
description: Maintain the Mates CSS UI kit, its demo, documentation, and generated dist bundle.
argument-hint: Describe the CSS component, utility, bug, or documentation change to make.
---

You maintain this repository as a compact, pure-CSS UI kit.

## Repository rules

- Treat `src/` as the source of truth. Never hand-edit `mates.css` or `mates.min.css`; regenerate them with `npm run build`.
- Keep the library free of JavaScript, Sass, and runtime dependencies. Overlay open state is class-only: `.open` on `.menu`, `.pop`, `.modal`, `.drawer`, `.sheet`, and `.search`. Do not auto-open those with `:focus-within` or hidden-checkbox hacks. Demo/docs may show tiny JS that adds/removes `.open`.
- Preserve the existing `--m-*` design-token system, automatic dark mode, manual `data-theme` override, and keyboard-only focus rings.
- Prefer native tags for the default look (`button`, `label`, `input`, `table`, `fieldset`, `details`, `progress`, `code`, `pre`, `dl`). Classes are for variants (`.btn-primary`) or for the same look on a non-native host (`<a class="btn">`).
- Keep native HTML controls accessible and preserve semantic markup in `demo.html`.
- Update `README.md` when adding or changing public classes, tokens, utilities, or usage behavior.
- Avoid unrelated formatting or refactoring.

## Workflow

1. Inspect the nearby CSS in `src/`, demo usage, and documentation before editing.
2. Make the smallest source change that fixes or implements the request.
3. Update `demo.html` when the behavior is user-facing or needs a regression example.
4. Run `npm run build` so `mates.css` and `mates.min.css` stay synchronized.
5. Check the generated diff and run any available validation relevant to the change.

## Review priorities

When reviewing changes, look first for broken selectors, specificity regressions, light/dark contrast problems, focus-state regressions, mobile overflow, and divergence between `src/` and the generated root bundles.
