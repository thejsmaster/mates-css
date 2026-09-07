# Mates CSS

A compact pure-CSS UI kit — **64.1kb raw (11.1kb gzipped)**. No JS, no SCSS. Framework-agnostic: drop the stylesheet into any HTML, React, Vue, Svelte, or plain page.

Styled via **native tags** when possible (`button`, `label`, `input`, `table`…). **Classes** are variants (`.btn-primary`) or the same look on a non-native host (`<a class="btn">`). Overlay open state is the `.open` class — your app toggles it.

Sources live in `src/`. `npm run build` bundles them into `mates.min.css` at the repo root. `import "mates-css"` resolves to that single minified file.

## Use it

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/mates-css@0.5.0/mates.min.css">
```

### npm

```sh
npm install mates-css
```

```js
import "mates-css";
```

```html
<link rel="stylesheet" href="node_modules/mates-css/mates.min.css">
```

Unminified bundle: `mates-css/css` or `mates.css`. Copy that file if you don't want a bundler.

## Dark mode

Automatic via `prefers-color-scheme`. Force it per page:

```html
<html data-theme="dark">
```

Toggle at runtime:

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

## Open states

Menus, popovers, modals, drawers, sheets, and search panels stay closed until you add **`.open`** on the root. Nothing auto-opens on focus or via a hidden checkbox — toggle the class from your click, focus, or framework handler.

```js
el.classList.add('open');
el.classList.remove('open');
el.classList.toggle('open');
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

Stacking, low to high: `--m-z-sticky` (20) → `--m-z-menu` (40, also popover and search) → `--m-z-drawer` (90, also sheet) → `--m-z-modal` (100) → `--m-z-toast` (110) → `--m-z-tooltip` (120) → `--m-z-skip` (200).

## Component index

| Component | How you get it |
|---|---|
| [Buttons](#buttons) | bare `<button>` (`.btn` on links) |
| [Tags](#tags) | `.tag` |
| [Forms](#forms) | bare `<label>` / inputs / `.switch` / `.fgroup` |
| [Form extras](#form-extras) | `.field`, `.input-wrap`, `.chip`, `.rate`, `.seg`, `.drop`, `.search` |
| [Cards](#cards) | `.card` + parts |
| [Tables](#tables) | bare `<table>` (+ `.table-wrap`, `.sticky`) |
| [Tabs](#tabs) | `.tabs` + `.tab` |
| [Alerts & toasts](#alerts--toasts) | `.alert` / `.toast` / `.toasts` / `.banner` |
| [Skeleton, spinner, empty](#skeleton-spinner-empty) | `.skel` / `.spin` / `.empty` |
| [Tooltips](#tooltips) | `.tooltip` + `data-tip` |
| [Modal](#modal) | `.modal` + `.open` |
| [Menu](#menu) | `.menu` + `.open` |
| [Drawer & sheet](#drawer--sheet) | `.drawer` / `.sheet` + `.open` |
| [Popover](#popover) | `.pop` + `.open` |
| [Accordion](#accordion) | bare `<details>` |
| [Nav](#nav) | `.nav` |
| [Breadcrumbs, pager, steps](#breadcrumbs-pager-steps) | `.crumbs` / `.pager` / `.steps` |
| [Sidenav](#sidenav) | `.sidenav` |
| [Avatar, status, badge](#avatar) | `.avatar` / `.status` / `.badge` |
| [Progress](#progress) | bare `<progress>` |
| [Lists & timeline](#lists--timeline) | `.list` / `.timeline` |
| [Stats & definition list](#stats--definition-list) | `.stat` / bare `<dl>` |
| [Code & prose](#code--prose) | bare `<code>` / `<pre>` / `.prose` |
| [Charts](#charts) | `.chart-bars`, `.donut`, `.ring`, `.spark`, `.meter`, `.heat`, `.gauge` |
| [Shell & layout blocks](#shell--layout-blocks) | `.shell`, `.board`, `.split`, `.media`, `.aspect` |
| [Layout utilities](#layout-flex--grid) | `.m-flex`, `.m-grid`, `.m-row`, … |

---

## Zero-class styling

These tags are styled with **no class**:

- `<button>`, `<input type="submit|button|reset">`
- `<label>` (field captions; checkbox/radio wraps stay inline)
- `<input>`, `<select>`, `<textarea>`
- `<table>`, `<fieldset>`, `<legend>`, `<details>`, `<progress>`
- `<code>`, `<pre>`, `<dl>`
- headings, links, `hr`, `blockquote`, `kbd`, `mark`, lists

```html
<button>Default</button>
<button class="btn-primary">Primary variant</button>
<label for="email">Email</label>
<input type="text" placeholder="…">
<input type="checkbox"> Remember me
```

Use `.btn` / `.input` / `.check` / `.label` / `.table` / `.acc` / `.progress` when you need the same look on a non-native element (e.g. `<a class="btn">`).

---

## Buttons

**Required:** bare `<button>` **or** class `.btn` on a link/span.

**Optional variants** (on the same element):

| Class | Role |
|---|---|
| `.btn-primary` `.btn-dark` `.btn-light` `.btn-success` `.btn-warning` `.btn-danger` | solid fills |
| `.btn-outline` `.btn-soft` `.btn-ghost` `.btn-link` | quiet styles |
| `.btn-sm` `.btn-lg` `.btn-block` | size / full width |
| `.btn-elevated` | faint rest shadow (not a 3D bevel) |
| `.btn-spin` | loading spinner (`::after`) |
| `.btn-close` | icon-only close control |
| `.btn-group` | **on the parent** wrapping sibling buttons |

```html
<button>Default</button>
<button class="btn-primary">Primary</button>
<button class="btn-soft">Soft</button>
<a class="btn btn-outline" href="#">Link as button</a>

<button class="btn-sm btn-spin">Loading</button>
<button class="btn-elevated btn-primary">Elevated</button>
<button class="btn-close" aria-label="Close"></button>

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

Bare `<label>` is the field caption. Use `.label` on a `<span>` if you need the same look without a `<label>`. `.hint` is the sibling under the field.

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
<label for="email">Email</label>
<input id="email" type="email" placeholder="you@example.com">
<span class="hint">We'll never share it.</span>

<div class="m-error">
  <label for="user">Username</label>
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

**Required:** `.fgroup` on the flex row. Put `.fgroup-label` on the prefix/suffix span; nest the input and button as siblings.

```html
<div class="fgroup">
  <span class="fgroup-label">https://</span>
  <input type="text" value="example.com">
  <button class="btn-primary">Go</button>
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
    <button class="btn-primary btn-sm">Action</button>
    <button class="btn-sm">Cancel</button>
  </div>
</div>
```

---

## Tables

| Class | Where |
|---|---|
| `.table-wrap` | optional outer wrapper (horizontal scroll) |
| *(none)* | bare `<table>` is styled |
| `.table` | same look on a non-table wrapper |
| `.striped` / `.bordered` / `.sticky` | on the `<table>` |
| `.selected` | on a `<tr>` |

```html
<div class="table-wrap">
  <table class="striped">
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
<button class="tooltip" data-tip="Top tooltip">Top</button>
<button class="tooltip tooltip-b" data-tip="Bottom">Bottom</button>
<button class="tooltip tooltip-r" data-tip="Right">Right</button>
```

---

## Modal

Add `.open` on `.modal` to show it. Remove `.open` to hide.

| Class | Where |
|---|---|
| `.modal` | overlay root |
| `.modal-overlay` | full-screen dismiss layer |
| `.modal-box` | dialog panel |
| `.modal-head` / `.modal-title` / `.modal-body` / `.modal-foot` | structure inside the box |

```html
<button type="button" class="btn-primary" onclick="document.getElementById('m1').classList.add('open')">Open modal</button>

<div id="m1" class="modal">
  <div class="modal-overlay" onclick="this.parentElement.classList.remove('open')"></div>
  <div class="modal-box">
    <div class="modal-head">
      <p class="modal-title">Modal title</p>
      <button type="button" class="btn-close" aria-label="Close" onclick="this.closest('.modal').classList.remove('open')"></button>
    </div>
    <div class="modal-body">
      <p>Add <code>.open</code> on <code>.modal</code> from your handler.</p>
    </div>
    <div class="modal-foot">
      <button type="button" onclick="this.closest('.modal').classList.remove('open')">Close</button>
    </div>
  </div>
</div>
```

---

## Accordion

Bare `<details>` + `<summary>`. Use `.acc` only on a non-`details` host.

```html
<details>
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

**.avatar** — optional `.avatar-sm` / `.avatar-lg`.

**Status:** `.status` + `.status-dot` with `.online` / `.away` / `.busy` / `.offline` on the status or the dot.

**Badge:** wrap a control in `.badge`. Child `.badge-dot` or `.badge-n` with `data-n="8"`.

```html
<span class="avatar">AL</span>
<span class="status online"><i class="status-dot"></i> Online</span>
<span class="badge">
  <button class="btn-sm">Inbox</button>
  <i class="badge-n" data-n="8"></i>
</span>
```

---

## Progress

Bare `<progress>`. Use `.progress` on a non-native host.

```html
<progress value="65" max="100"></progress>
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
<div class="legend legend-v">…</div>
```

### Meter, heatmap, gauge, comparison

```html
<div class="meter">
  <i class="s1" style="--sv:45"></i>
  <i class="s2" style="--sv:30"></i>
  <i class="s3" style="--sv:15"></i>
</div>

<div class="heat" style="--cols:7">
  <i style="--v:10"></i><i style="--v:80"></i>
</div>

<div class="gauge" style="--v:72"><b>72</b></div>

<div class="cmp-row" style="--a:62;--b:38"><span>Us</span><i></i><span>Them</span></div>
```

`--sv` is segment share on `.meter > i`. `--v` is 0–100 intensity on `.heat > i`. `--a` / `--b` are the two sides of a comparison bar.

---

## Form extras

### Field stack

**Required:** `.field` wrapping `<label>` + control + `.hint`.

```html
<div class="field">
  <label for="nm">Name</label>
  <input id="nm" type="text">
  <span class="hint">Public.</span>
</div>
```

### Fieldset

**Required:** `<fieldset>` + native `<legend>`.

### Input with icons

**Required:** `.input-wrap`. Put `.input-ico` on leading/trailing slots.

```html
<div class="input-wrap">
  <span class="input-ico">@</span>
  <input type="text">
</div>
```

### Search results

**Required:** `.search` wrapping the field. Add `.open` to show `.search-panel` (on focus, input, or your own trigger).

```html
<div class="search" id="search">
  <input type="search" placeholder="Search…" onfocus="this.parentElement.classList.add('open')">
  <div class="search-panel">
    <a class="menu-item" href="#">Result</a>
  </div>
</div>
```

### Dropzone

**Required:** `.drop` on a `<label>`. Add `.active` from JS on `dragover`.

```html
<label class="drop">
  <input type="file" hidden>
  <span>Drop files</span>
  <span class="hint">or click to browse</span>
</label>
```

### Chips

**Required:** `.chip`. Use a checkbox inside, or toggle `.selected` from JS.

```html
<label class="chip"><input type="checkbox" checked> Design</label>
<button class="chip selected">Filter</button>
```

### Rating

**Required:** `.rate` with radios in **reverse** order (5 → 1) so CSS sibling selectors fill stars.

```html
<span class="rate">
  <input type="radio" name="stars" value="5">
  <input type="radio" name="stars" value="4">
  <input type="radio" name="stars" value="3" checked>
  <input type="radio" name="stars" value="2">
  <input type="radio" name="stars" value="1">
</span>
```

### Segmented control

**Required:** `.seg` parent, `.seg-item` children. Active via `.selected` or a checked radio inside.

```html
<div class="seg">
  <label class="seg-item"><input type="radio" name="p" checked> Day</label>
  <label class="seg-item"><input type="radio" name="p"> Week</label>
</div>
```

---

## Skeleton, spinner, empty

```html
<div class="skel skel-avatar"></div>
<div class="skel skel-text"></div>
<div class="skel skel-card"></div>

<i class="spin"></i>
<div class="spin-block"><i class="spin spin-lg"></i></div>

<div class="empty">
  <p class="empty-title">No projects</p>
  <p class="muted">Create one to get started.</p>
  <div class="empty-actions"><button class="btn-primary">New</button></div>
</div>
```

---

## Menu

**Required:** `.menu` wrapping a trigger (`<button>`) and `.menu-panel`. Items are `.menu-item` (use links or buttons). Optional `.menu-r`, `.menu-sep`, `.menu-danger`.

Add `.open` on `.menu` to show the panel. Toggle it from a click handler; close it on outside click if you want that.

```html
<div class="menu" id="actions">
  <button type="button" aria-haspopup="menu" onclick="this.parentElement.classList.toggle('open')">Actions</button>
  <div class="menu-panel" role="menu">
    <a class="menu-item" href="#" role="menuitem">Edit</a>
    <hr class="menu-sep">
    <button type="button" class="menu-item menu-danger" role="menuitem">Delete</button>
  </div>
</div>
```

---

## Drawer & sheet

Add `.open` on `.drawer` or `.sheet`. Optional `.drawer-r` docks the drawer to the right.

| Class | Where |
|---|---|
| `.drawer` / `.sheet` | overlay root |
| `.drawer-overlay` / `.sheet-overlay` | dismiss layer |
| `.drawer-panel` / `.sheet-panel` | sliding panel |
| `.drawer-r` | on `.drawer` to dock right |
| `.sheet-handle` | grabber bar inside the sheet |

```html
<button type="button" onclick="document.getElementById('d1').classList.add('open')">Open drawer</button>

<div id="d1" class="drawer">
  <div class="drawer-overlay" onclick="this.parentElement.classList.remove('open')"></div>
  <aside class="drawer-panel">…</aside>
</div>
```

---

## Popover

**Required:** `.pop` wrapping a trigger + `.pop-panel`. Add `.open` to show the panel. Direction: `.pop-t` `.pop-l` `.pop-r`.

```html
<div class="pop" id="more">
  <button type="button" onclick="this.parentElement.classList.toggle('open')">More</button>
  <div class="pop-panel">Extra content</div>
</div>
```

---

## Breadcrumbs, pager, steps

```html
<nav class="crumbs">
  <a href="#">Home</a>
  <a href="#">Docs</a>
  <span class="current">Here</span>
</nav>

<nav class="pager">
  <a class="disabled">Prev</a>
  <a class="selected">1</a>
  <a>2</a>
  <a>Next</a>
</nav>

<ol class="steps">
  <li class="step done"><span class="step-dot"></span><span class="step-label">Account</span></li>
  <li class="step current"><span class="step-dot"></span><span class="step-label">Plan</span></li>
  <li class="step"><span class="step-dot"></span><span class="step-label">Pay</span></li>
</ol>
```

Toggle `.done` / `.current` / `.selected` / `.disabled` from JS as the user moves.

---

## Sidenav

**Required:** `.sidenav` + `.sidenav-item`. Active: `.selected`.

```html
<nav class="sidenav">
  <a class="sidenav-item selected" href="#">Home</a>
  <a class="sidenav-item" href="#">Docs</a>
</nav>
```

---

## Lists & timeline

```html
<div class="list">
  <a class="list-item selected" href="#">Inbox <span class="list-meta">12</span></a>
  <a class="list-item" href="#">Sent</a>
</div>

<div class="timeline">
  <div class="tl-item">
    <i class="tl-dot"></i>
    <div class="tl-content">Shipped v0.5</div>
  </div>
</div>
```

---

## Stats & definition list

```html
<div class="stat">
  <span class="stat-label">Revenue</span>
  <span class="stat-val">$24k</span>
  <span class="stat-delta up">+12%</span>
</div>

<dl>
  <dt>Plan</dt><dd>Pro</dd>
</dl>
```

---

## Code & prose

Bare `<code>` and `<pre>`. Use `.code` / `.code-block` on a non-native host. `.prose` is an optional reading-width wrapper.

```html
<code>import "mates-css"</code>
<pre>npm install mates-css</pre>
<article class="prose">…</article>
<span class="kbd-row"><kbd>⌘</kbd><kbd>K</kbd></span>
```

Banner: `.banner` (optional `.banner-warn` / `.banner-danger`). Toast stack: `.toasts` (corner `.toasts-tl/tr/bl`) wrapping `.toast` children.

---

## Shell & layout blocks

| Class | Role |
|---|---|
| `.shell` | app grid: `.shell-top` + `.shell-side` + `.shell-main` |
| `.collapsed` | on `.shell` to shrink the side (`--m-side`) |
| `.sticky-t` / `.sticky-b` | sticky top/bottom |
| `.split` + `.split-a` / `.split-b` | split panes; width via `--split` |
| `.board` + `.board-col` + `.board-head` | kanban columns |
| `.media` + `.media-img` + `.media-body` | media object |
| `.aspect` + `.aspect-1x1/4x3/16x9` | aspect boxes |

```html
<div class="shell">
  <header class="shell-top">…</header>
  <aside class="shell-side">…</aside>
  <main class="shell-main">…</main>
</div>

<div class="split" style="--split: 35%">
  <div class="split-a">A</div>
  <div class="split-b">B</div>
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

`.container` · `.c-1`–`.c-12` · `.divider` · `.center` · `.muted` · `.subtle` · `.overline` · `.mono` · `.hidden`

**Surface:** `.surface` `.elev-1/2/3` `.border` `.radius-sm` `.radius` `.radius-full`  
**Text:** `.truncate` `.clamp-2/3` `.text-sm/lg` `.fw-500/700` `.tabular`  
**Position:** `.rel` `.abs` `.fixed` `.inset-0` `.z-10/20/50` `.sticky-t/b`  
**A11y:** `.sr-only` `.skip-link`  
**State:** `.is-disabled` `.is-loading` (also `.open` / `.selected` / `.collapsed` / `.active` on components)  
**Print:** `.print-only` `.no-print`

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
| Raw | 64.1kb |
| Minified | 52.5kb |
| **Min + gzip** | **11.1kb** |

## Source

Edit files in `src/`. Entry is `src/index.css`. Do not hand-edit `mates.css` or `mates.min.css`.

```sh
npm run build   # mates.css + mates.min.css
npm run watch
```

## Demo

Open `demo.html` — every component, light and dark.

## License

MIT
