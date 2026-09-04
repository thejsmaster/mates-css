# Mates CSS

A compact pure-CSS UI kit — **21.9kb (5.4kb gzipped)**. No JS, no SCSS, no build step needed.

Same design system as the Cirrus fork it came from: blue primary with hover/active ramps, layered surface tokens, automatic dark mode with manual override, keyboard-only focus rings.

## Use it

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/mates-css@0.1.0/mates.min.css">
```

### npm

```sh
npm install mates-css
```

```html
<link rel="stylesheet" href="node_modules/mates-css/mates.min.css">
```

Or copy `mates.css` into your project. That's all.

## Dark mode

Automatic via `prefers-color-scheme`. Force it per page:

```html
<html data-theme="dark">
```

Toggle at runtime (the only JS you'd ever need, and only if you want a switch):

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

## Tokens

Everything is a `--m-*` CSS variable. Override on `:root` to rebrand:

```css
:root {
  --m-primary: #0172ad;
  --m-primary-h: #016091;   /* hover */
  --m-primary-a: #014e75;   /* active */
  --m-on-primary: #ffffff;  /* text on primary fills */
  --m-r: 8px;               /* reshape everything */
  --m-font: "Inter", sans-serif;
}
```

Semantic on-colors: `--m-on-primary`, `--m-on-success`, `--m-on-warning`, `--m-on-danger` flip per theme (white ink in light, dark ink in dark) so fills always stay readable.

## Components

| Class | Notes |
|---|---|
| `.btn` + `.btn-primary/dark/light/success/warning/danger/outline/ghost/link` | hover + darker active states |
| `.btn-elevated` | big resting shadow that shrinks when pressed |
| `.btn-sm/lg/block`, `.btn-group`, `.btn-spin`, `.btn-close` | |
| `.tag` + `.tag-primary/success/warning/danger/soft/soft-success/soft-danger/rounded` | `.tag-x` removable dot |
| `.input`, `.check`, `.switch`, `.range`, `.fgroup` | custom checkbox/radio SVGs, select arrow, search icon, success/error states |
| `.card`, `.card-body/bar/title/sub`, `.card-hover` | |
| `.table` + `.striped/.bordered/.selected` | |
| `.tabs` / `.tabs-line` | pill or underline, `.tab.selected` |
| `.toast-*`, `.alert-*` | neutral + semantic variants |
| `.tooltip` (all 4 directions) | pure CSS via `data-tip` |
| `.modal` | pure CSS, hidden-checkbox pattern |
| `details.acc` | native accordion |
| `.nav`, `.avatar`, `progress.progress` | |

## Flex & grid

```html
<div class="m-flex m-items-center m-justify-between m-gap-sm">…</div>

<div class="m-grid m-grid-cols-3 m-gap">…</div>
<div class="m-grid m-grid-cols-auto">…</div>  <!-- responsive auto-fit -->
```

- **Flex**: `.m-flex`, `.m-inline-flex`, `.m-flex-col`, `.m-flex-wrap/nowrap`, `.m-flex-1`, `.m-flex-auto`, `.m-flex-none`, `.m-grow`, `.m-shrink-0`, `.m-items-*` (start/center/end/stretch/baseline), `.m-self-*`, `.m-justify-*` (start/center/end/between/around/evenly), `.m-order-first/last`
- **Grid**: `.m-grid`, `.m-inline-grid`, `.m-grid-cols-2/3/4/auto/auto-sm/auto-lg`, `.m-grid-rows-2/3`, `.m-grid-flow-dense`, `.m-col-span-2/3/full`, `.m-row-span-2` (multi-column grids collapse to one column under 640px)
- **Gaps**: `.m-gap-0/xs/sm/(default)/lg/xl`, plus directional `.m-gap-x-*` / `.m-gap-y-*`
- **Helpers**: `.container`, `.row`, `.col`, `.c-1`–`.c-12`, `.divider`, `.center`, `.muted`, `.subtle`, `.overline`, `.mono`, `.hidden`

## Accessibility

- Focus rings are keyboard-only (`:focus-visible`) — no ring on mouse click, visible 2px primary ring on Tab
- Custom checkboxes/radios/switches are real inputs
- Contrast-checked: white on `#0172ad` is 5.2:1; dark ink on dark-mode fills 6–11:1

## Size

| | |
|---|---|
| Raw | 25.2kb |
| Minified | 21.9kb |
| **Min + gzip** | **5.4kb** |

## Demo

Open `demo.html` — every component, light and dark.

## License

MIT
