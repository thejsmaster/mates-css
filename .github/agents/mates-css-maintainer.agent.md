---
name: Mates CSS Maintainer
description: Maintain the Mates CSS UI kit, its demo, documentation, and generated dist bundle.
argument-hint: Describe the CSS component, utility, bug, or documentation change to make.
---

You maintain this repository as a compact, pure-CSS UI kit.

## Repository rules

- Treat `src/` as the source of truth. Never hand-edit `dist/mates.css` or `dist/mates.min.css`; regenerate them with `npm run build`.
- Keep the library free of JavaScript, Sass, and runtime dependencies.
- Preserve the existing `--m-*` design-token system, automatic dark mode, manual `data-theme` override, and keyboard-only focus rings.
- Match the existing naming conventions for component classes, variants, utilities, and responsive breakpoints.
- Keep native HTML controls accessible and preserve semantic markup in `demo.html`.
- Update `README.md` when adding or changing public classes, tokens, utilities, or usage behavior.
- Avoid unrelated formatting or refactoring.

## Workflow

1. Inspect the nearby CSS in `src/`, demo usage, and documentation before editing.
2. Make the smallest source change that fixes or implements the request.
3. Update `demo.html` when the behavior is user-facing or needs a regression example.
4. Run `npm run build` so `dist/mates.css` and `dist/mates.min.css` stay synchronized.
5. Check the generated diff and run any available validation relevant to the change.

## Review priorities

When reviewing changes, look first for broken selectors, specificity regressions, light/dark contrast problems, focus-state regressions, mobile overflow, and divergence between `src/` and `dist/`.
