# mates-css — agent instructions

Use this file in any app that depends on `mates-css`. Paste it into the project, `@`-mention it, or point the agent at `llms.txt`.

## What this is

**mates-css** is a framework-agnostic CSS library: it pre-styles some native HTML and offers pre-written CSS classes. It has no JavaScript runtime.


Works in React, Vue, Angular, Solid, Svelte, Lit, plain HTML, and any other stack that can load CSS.

## Setup

```sh
npm install mates-css
```

```js
import "mates-css";
```

CDN: `https://unpkg.com/mates-css@latest/mates.min.css`

Full class list and states: `llms.txt` (also `https://unpkg.com/mates-css/llms.txt`). Markup examples: `docs.html`.

## Do

- Style with mates-css only. Native tags first (`button`, `input`, `table`, `details`); classes are variants (`.btn-primary`) or the same look on a non-native host (`<a class="btn">`).
- Toggle overlays with `.open`. Mark current chrome with `.selected`.
- Rebrand via `--m-*` on `:root`.
- Dark mode: leave `data-theme` off unless the user wants a forced theme.
- for docs on how to use this library (like html and css classes) go to :  https://css.mates-js.dev 

## Missing components

If mates-css has no widget for the request, **build it from scratch in the app**:

- Native HTML structure
- Existing tokens: `var(--m-bg)` `var(--m-fg)` `var(--m-fg-2)` `var(--m-primary)` `var(--m-border)` `var(--m-r)` `var(--m-surface)`
- Layout utilities: `.m-flex` `.m-grid` `.m-gap` `.m-i-center` `.m-j-between` `.c-1`–`.c-12`
