# Mates CSS

A compact pure-CSS UI kit — **37.9kb raw (7.4kb gzipped)**. No JS, no SCSS, no build step. Framework-agnostic: drop the stylesheet into any HTML, React, Vue, Svelte, or plain page.

Styled via **native tags** when possible, and **classes** when you need variants or non-semantic elements. Dark and light modes included. Tables, layouts, and charts are CSS-only.

## Use it

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/mates-css@0.4.0/mates.min.css">
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

Toggle at runtime (optional — the only JS you'd ever need):

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

Semantic on-colors (`--m-on-primary`, `--m-on-success`, `--m-on-warning`, `--m-on-danger`) flip per theme so fills stay readable.

## Component index

| Component | How you get it |
|---|---|
| [Buttons](#buttons) | bare `<button>` or `.btn` |
| [Tags](#tags) | `.tag` |
| [Forms](#forms) | bare inputs / `.input`, `.check`, `.switch`, `.fgroup` |
| [Cards](#cards) | `.card` + parts |
| [Tables](#tables) | `.table` (+ `.table-wrap`) |
| [Tabs](#tabs) | `.tabs` + `.tab` |
| [Alerts & toasts](#alerts--toasts) | `.alert` / `.toast` |
| [Tooltips](#tooltips) | `.tooltip` + `data-tip` |
| [Modal](#modal) | checkbox + `.modal*` |
| [Accordion](#accordion) | `details.acc` |
| [Nav](#nav) | `.nav` |
| [Avatar](#avatar) | `.avatar` |
| [Progress](#progress) | `progress.progress` |
| [Charts](#charts) | `.chart-bars`, `.donut`, `.ring`, `.spark`, … |
| [Layout utilities](#layout-flex--grid) | `.m-flex`, `.m-grid`, `.m-row`, … |

---

## Zero-class styling

These tags are styled with **no class**:

- `<button>`
- `<input>`, `<select>`, `<textarea>`
- checkboxes and radios
- headings, links, `hr`, `blockquote`, `kbd`, `mark`, lists

```html
<button>Default</button>
<button class="btn-primary">Primary variant</button>
<input type="text" placeholder="…">
<input type="checkbox"> Remember me
```

Use `.btn` / `.input` / `.check` when you need the same look on a non-native element (e.g. `<a class="btn">`).

---

## Buttons

**Required:** bare `<button>` **or** class `.btn` on a link/span.

**Optional variants** (on the same element):

| Class | Role |
|---|---|
| `.btn-primary` `.btn-dark` `.btn-light` `.btn-success` `.btn-warning` `.btn-danger` | fills |
| `.btn-outline` `.btn-ghost` `.btn-link` | quiet styles |
| `.btn-sm` `.btn-lg` `.btn-block` | size / full width |
| `.btn-elevated` | resting shadow that shrinks on press |
| `.btn-spin` | loading spinner (`::after`) |
| `.btn-close` | icon-only close control |
| `.btn-group` | **on the parent** wrapping sibling buttons |

```html
<button>Default</button>
<button class="btn-primary">Primary</button>
<a class="btn btn-outline" href="#">Link as button</a>

<button class="btn btn-sm btn-spin">Loading</button>
<button class="btn btn-elevated btn-primary">Elevated</button>
<button class="btn btn-close" aria-label="Close"></button>

<div class="btn-group">
  <button class="btn-primary">Left</button>
  <button class="btn-primary">Middle</button>
  <button class="btn-primary">Right</button>
</div>
```

---

## Tags

**Required on the tag element:** `.tag`

**Optional:** `.tag-primary` `.tag-success` `.tag-warning` `.tag-danger` `.tag-soft` `.tag-soft-success` `.tag-soft-danger` `.tag-rounded`

**Removable:** put `.tag-x` on a child `<span>` inside the tag.

```html
<span class="tag">Default</span>
<span class="tag tag-primary">Primary</span>
<span class="tag tag-soft-success">active</span>
<span class="tag tag-primary">Removable <span class="tag-x"></span></span>
```

---

## Forms

### Labels & hints

| Class | Where |
|---|---|
| `.label` | on `<label>` (or any label text) |
| `.hint` | sibling under the field |

### Text fields

Bare `<input>`, `<select>`, `<textarea>` are styled. Use `.input` to apply the same styles to custom elements, or to pair with width utilities.

| Class | Where |
|---|---|
| `.input` | on the control (optional for native tags) |
| `.input-success` / `.input-error` | on the control |
| `.m-error` / `.m-valid` | **on a wrapper** around label + field + hint |
| `.m-w-auto` `.m-w-xs` `.m-w-sm` `.m-w-md` `.m-w-lg` `.m-w-full` | on the control (width) |

Inputs default to `width: var(--m-input-w)` (`100%`). Override globally (`:root { --m-input-w: 24rem }`) or per field (`style="--m-input-w: 10rem"`).

```html
<label class="label" for="email">Email</label>
<input id="email" type="email" placeholder="you@example.com">
<span class="hint">We'll never share it.</span>

<div class="m-error">
  <label class="label" for="user">Username</label>
  <input id="user" type="text">
  <span class="hint">Only letters and numbers.</span>
</div>

<input class="input-success m-w-md" type="text" value="Looks good">
```

### Checkbox / radio

Bare `input[type=checkbox|radio]` are styled. Use `.check` on custom elements if needed.

```html
<label><input type="checkbox" checked> Checked</label>
<label><input type="radio" name="r" checked> Radio A</label>
```

### Switch

**Required:** `.switch` on a `<label>` wrapping a real checkbox + empty `<i>`.

```html
<label class="switch"><input type="checkbox" checked><i></i></label>
```

### Range

Bare `input[type=range]` is styled. The filled track reads `--v` (0–100). Default is `50`. Sync from JS on input if you want a live fill:

```html
<input type="range" min="0" max="100" value="50"
  oninput="this.style.setProperty('--v', this.value)">
```

### Form group (prefix / suffix)

**Required:** `.fgroup` on the flex row. Put `.fgroup-label` on the prefix/suffix span; nest `.input` and `.btn` as siblings.

```html
<div class="fgroup">
  <span class="fgroup-label">https://</span>
  <input class="input" type="text" value="example.com">
  <button class="btn btn-primary">Go</button>
</div>
```

---

## Cards

| Class | Where |
|---|---|
| `.card` | outer container |
| `.card-body` | padded content |
| `.card-title` / `.card-sub` | heading / subtitle inside body |
| `.card-bar` | footer action row |
| `.card-img` | full-bleed image |
| `.card-hover` | optional, on `.card` for lift on hover |

```html
<div class="card card-hover">
  <div class="card-body">
    <p class="card-title">Card title</p>
    <p class="card-sub">With subtitle</p>
  </div>
  <div class="card-bar">
    <button class="btn btn-primary btn-sm">Action</button>
    <button class="btn btn-sm">Cancel</button>
  </div>
</div>
```

---

## Tables

| Class | Where |
|---|---|
| `.table-wrap` | optional outer wrapper (horizontal scroll) |
| `.table` | on `<table>` |
| `.striped` / `.bordered` | on the same `<table>` |
| `.selected` | on a `<tr>` |

```html
<div class="table-wrap">
  <table class="table striped">
    <thead>
      <tr><th>Plan</th><th>Price</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td>Free</td><td>$0</td><td><span class="tag tag-soft-success">active</span></td></tr>
      <tr class="selected"><td>Pro</td><td>$20</td><td><span class="tag tag-primary">selected</span></td></tr>
    </tbody>
  </table>
</div>
```

---

## Tabs

| Class | Where |
|---|---|
| `.tabs` | parent |
| `.tabs-line` | optional on parent for underline style |
| `.tab` | each tab control |
| `.selected` | on the active `.tab` |

```html
<div class="tabs">
  <button class="tab selected">Overview</button>
  <button class="tab">Analytics</button>
  <button class="tab">Settings</button>
</div>

<div class="tabs tabs-line">
  <button class="tab selected">Underline</button>
  <button class="tab">Variant</button>
</div>
```

---

## Alerts & toasts

### Alert

**Required:** `.alert` on the box. Optional: `.alert-primary` `.alert-success` `.alert-warning` `.alert-danger`.

```html
<div class="alert">Neutral alert.</div>
<div class="alert alert-success"><strong>Done.</strong> Changes saved.</div>
<div class="alert alert-danger"><strong>Error.</strong> Please retry.</div>
```

### Toast

**Required:** `.toast`. Optional: `.toast-primary` `.toast-success` `.toast-danger`. Title via `.toast-title`.

```html
<div class="toast">
  <p class="toast-title">Toast</p>
  <p>Neutral dark toast.</p>
</div>
<div class="toast toast-success">
  <p class="toast-title">Success</p>
  <p>Saved.</p>
</div>
```

---

## Tooltips

**Required:** `.tooltip` on the trigger + `data-tip="…"`.

**Direction** (optional, on the same element): `.tooltip-b` (bottom), `.tooltip-r` (right), `.tooltip-l` (left). Default is top.

```html
<button class="btn tooltip" data-tip="Top tooltip">Top</button>
<button class="btn tooltip tooltip-b" data-tip="Bottom">Bottom</button>
<button class="btn tooltip tooltip-r" data-tip="Right">Right</button>
```

---

## Modal

Pure CSS via a hidden checkbox. Classes and wiring:

| Class | Where |
|---|---|
| `.modal-toggle` | on the hidden `<input type="checkbox">` (needs an `id`) |
| `.modal` | overlay root (must be a **sibling after** the checkbox) |
| `.modal-overlay` | full-screen dismiss layer — use `<label for="…">` |
| `.modal-box` | dialog panel |
| `.modal-head` / `.modal-title` / `.modal-body` / `.modal-foot` | structure inside the box |

Open/close with `<label for="same-id">` (any trigger, overlay, or close button).

```html
<label for="m1" class="btn btn-primary">Open modal</label>

<input type="checkbox" id="m1" class="modal-toggle" hidden>
<div class="modal">
  <label class="modal-overlay" for="m1"></label>
  <div class="modal-box">
    <div class="modal-head">
      <p class="modal-title">Modal title</p>
      <label class="btn btn-close" for="m1" aria-label="Close"></label>
    </div>
    <div class="modal-body">
      <p>Pure CSS modal — click overlay to close.</p>
    </div>
    <div class="modal-foot">
      <label class="btn" for="m1">Close</label>
      <label class="btn btn-primary" for="m1">Got it</label>
    </div>
  </div>
</div>
```

---

## Accordion

**Required:** `details` + class `.acc`. Use native `<summary>` for the header.

```html
<details class="acc">
  <summary>Accordion item one</summary>
  <p>Expand/collapse with native details — no JS.</p>
</details>
```

---

## Nav

| Class | Where |
|---|---|
| `.nav` | bar container |
| `.nav-brand` | brand text/link |
| `.selected` | on the active `<a>` |
| `.nav-space` | spacer that pushes trailing items right |

```html
<nav class="nav">
  <span class="nav-brand">Mates</span>
  <a href="#" class="selected">Home</a>
  <a href="#">Docs</a>
  <span class="nav-space"></span>
  <span class="avatar avatar-sm">AV</span>
</nav>
```

---

## Avatar

**Required:** `.avatar`. Optional size: `.avatar-sm` / `.avatar-lg`. Put initials as text content, or nest an `<img>`.

```html
<span class="avatar">AL</span>
<span class="avatar avatar-sm">SM</span>
<span class="avatar avatar-lg">LG</span>
```

---

## Progress

**Required:** class `.progress` on a native `<progress>`.

```html
<progress class="progress" value="65" max="100"></progress>
```

---

## Charts

Pure CSS — no JS, no SVG. Data lives in inline custom properties:

| Variable | Used by | Meaning |
|---|---|---|
| `--v` | bars, hbars, ring, spark | 0–100 |
| `--v1`…`--v6` | donut / pie | segment percents |
| `--sv` | stacked bar segments | share of the stack |

Series colors: `.s1`–`.s6` (set `--m-c`). Tokens `--m-c1`…`--m-c6` (c1–c4 alias primary/success/warning/danger).

Sizing: `--m-chart-h` (bars), `--m-donut-size` / `--m-donut-w` (donut/ring), `--m-spark-h` (sparkline).

Add `role="img"` + `aria-label` on chart containers for accessibility.

### Vertical bars

**Required:** `.chart-bars` > `.bar`. Each bar: set `--v` on `.bar`; `<i>` is the fill; optional `data-v` on `<i>` shows a value bubble; `<span>` is the label.

```html
<div class="chart-bars" role="img" aria-label="Sales by day">
  <div class="bar" style="--v: 65"><i data-v="65"></i><span>Mon</span></div>
  <div class="bar s2" style="--v: 90"><i data-v="90"></i><span>Tue</span></div>
</div>
```

### Stacked bars

**Required:** `.bar.stacked` with `--v` for total height. Inside `<i>`, each `<u style="--sv: …">` is a segment (color with `.s2`…).

```html
<div class="chart-bars">
  <div class="bar stacked" style="--v: 100">
    <i>
      <u style="--sv: 45"></u>
      <u class="s2" style="--sv: 30"></u>
      <u class="s3" style="--sv: 25"></u>
    </i>
    <span>Q1</span>
  </div>
</div>
```

### Horizontal bars

**Required:** `.chart-hbars` > `.hbar`. Structure: `<span>` label, `<i>` track, `<b>` value. Set `--v` on `.hbar`.

```html
<div class="chart-hbars">
  <div class="hbar" style="--v: 80"><span>Design</span><i></i><b>80</b></div>
  <div class="hbar s2" style="--v: 65"><span>Frontend</span><i></i><b>65</b></div>
</div>
```

### Donut / pie

**Required:** `.donut` with `--v1`…`--v6`. Optional center label in `<b>`. Add `.pie` for a solid pie (no hole).

```html
<div class="donut" style="--v1: 42; --v2: 28; --v3: 18; --v4: 12">
  <b>1,204</b>
</div>
<div class="donut pie" style="--v1: 60; --v2: 40"></div>
```

### Progress ring

**Required:** `.ring` + `--v` (0–100). Optional center text in `<b>`. Color with `.s1`–`.s6`.

```html
<div class="ring" style="--v: 72"><b>72%</b></div>
```

### Sparkline

**Required:** `.spark` with child `<i style="--v:…">` per point.

```html
<div class="spark">
  <i style="--v:30"></i><i style="--v:55"></i><i style="--v:42"></i><i style="--v:80"></i>
</div>
```

### Legend

**Required:** `.legend`. Each item: `<span><i class="s1"></i>Label</span>`.

```html
<div class="legend">
  <span><i class="s1"></i>Organic</span>
  <span><i class="s2"></i>Paid</span>
</div>
```

---

## Layout (flex & grid)

### Quick patterns

```html
<div class="m-flex m-items-center m-justify-between m-gap-sm">…</div>

<div class="m-grid m-grid-cols-3 m-gap">…</div>
<div class="m-grid m-grid-cols-auto">…</div>

<div class="m-row m-g-sm">
  <div>equal</div>
  <div>equal</div>
  <div>equal</div>
</div>

<div class="m-row">
  <div class="c-4">⅓</div>
  <div class="c-8">⅔</div>
</div>
```

### Directional stacks

| Class | Role |
|---|---|
| `.m-row` | horizontal flex; children share space |
| `.m-col` | vertical flex stack |
| `.m-row-nowrap` | no wrap |
| `.m-col-auto` | on a child of `.m-row` — don't grow |
| `.m-g-0` `.m-g-xs` `.m-g-sm` `.m-g-lg` | set `--m-gap` for row/col |

### Flex

`.m-flex` `.m-inline-flex` `.m-flex-col` `.m-flex-row` `.m-flex-wrap` `.m-flex-nowrap` `.m-flex-1` `.m-flex-auto` `.m-flex-none` `.m-grow` `.m-shrink-0` `.m-order-first` `.m-order-last`

**Align:** `.m-items-*` / short `.m-i-start|center|end|stretch|baseline` · `.m-self-*` · `.m-justify-*` / short `.m-j-start|center|end|between|around|evenly`

### Grid

`.m-grid` + `.m-grid-cols-2|3|4` · `.m-grid-cols-auto` / `.m-grid-auto` · `.m-grid-cols-auto-sm|auto-lg` · `.m-grid-rows-2|3` · `.m-grid-flow-dense` · `.m-col-span-2|3|full` · `.m-row-span-2`

Multi-column grids collapse to one column under 640px.

### Gaps

Named: `.m-gap-0|xs|sm` `.m-gap` `.m-gap-lg|xl`  
Numeric px: `.m-gap-5|10|15|20|30|40`  
Directional: `.m-gap-x-*` / `.m-gap-y-*` (same scales)

### Width / container helpers

`.container` · `.c-1`–`.c-12` (12-col flex widths) · `.divider` · `.center` · `.muted` · `.subtle` · `.overline` · `.mono` · `.hidden`

### Spacing (margin / padding)

`m-*` / `p-*` with `0|5|10|15|20|30|40` and sides `t|b|l|r|x|y`, e.g. `.m-b-10`, `.p-x-5`, `.m-x-auto`.

---

## Accessibility

- Focus rings are keyboard-only (`:focus-visible`) — no ring on mouse click
- Custom checkboxes / radios / switches are real inputs
- Contrast-checked: white on `#0172ad` is 5.2:1; dark-mode fills 6–11:1

## Size

| | |
|---|---|
| Raw | 37.9kb |
| Minified | 32.4kb |
| **Min + gzip** | **7.4kb** |

## Demo

Open `demo.html` — every component, light and dark.

## License

MIT
