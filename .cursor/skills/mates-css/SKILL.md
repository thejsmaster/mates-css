---
name: mates-css
description: Build UI with mates-css — a framework-agnostic CSS library that pre-styles native HTML and ships class variants, .open overlays, and --m-* tokens. Use when writing pages, components, or layouts, or when the user mentions mates-css, CSS UI, buttons, forms, modals, cards, or a design system. Never call it Mates; Mates is a separate JS framework.
---

# mates-css

**mates-css** is a CSS library (no JS). It is not the Mates JS framework. Always name it **mates-css**.

Before writing markup, read the class contract:

- This repo: [llms.txt](../../../llms.txt)
- App with the package: `node_modules/mates-css/llms.txt`
- Remote: https://unpkg.com/mates-css/llms.txt

Live markup: `docs.html`. Kitchen sink: `demo.html`. Playground: `playground.html`.

## Install

```js
import "mates-css";
```

Or: `<link rel="stylesheet" href="https://unpkg.com/mates-css@0.5.0/mates.min.css">`

## Rules

1. Only class names from `llms.txt`. Do not invent `.mates-*` or extra variants.
2. Native tags first (`button`, `input`, `table`, `details`). mates-css already styles them. Classes are variants (`.btn-primary`) or the same look on a link/span (`.btn`).
3. Overlays stay closed until the app adds `.open` on `.modal` `.menu` `.pop` `.drawer` `.sheet` `.search`.
4. Current item is `.selected`, not `.active` (`.active` is only drag-over on `.drop`).
5. No Tailwind, Bootstrap, or a second UI kit.
6. If mates-css has no component: build it from native HTML + `var(--m-*)` + `.m-*` utilities. Extra CSS lives in the app. Do not fake kit class names.
