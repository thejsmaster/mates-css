# Chart & Graph Support for Mates CSS

**Goal:** Let anyone build bar charts, stacked bars, horizontal bars, donuts/pies, progress rings, and sparklines with zero JS and zero custom CSS — data is supplied via inline custom properties (same pattern the repo already uses for `--m-range-progress`). This delivers on the README's existing (currently unfulfilled) claim that "you can even build tables, layouts, graphs or charts just by using css classes."

Per your choices: all charts go in the **same `mates.css` file**, v1 scope is **bars + stacked bars, donut/pie, progress ring + sparkline** (line/area charts deferred), and we add a **new 6-color palette token set**.

---

## 1. New tokens (mates.css `:root` + dark blocks)

```css
/* chart palette: c1–c4 alias the semantic colors, so rebranding
   --m-primary etc. recolors charts automatically */
--m-c1: var(--m-primary);
--m-c2: var(--m-success);
--m-c3: var(--m-warning);
--m-c4: var(--m-danger);
--m-c5: #7c66dc;          /* violet (new standalone hue) */
--m-c6: #0ea5b7;          /* teal (new standalone hue) */
--m-chart-h: 12rem;       /* default bar-chart plot height */
```

Because c1–c4 are `var()` aliases, they adapt to dark mode automatically. Only c5/c6 need dark-mode overrides (brightened, e.g. `#9b8cff` / `#2ed3e0`) — added to both existing dark token blocks per the repo's duplicated-dark-mode convention.

## 2. New `/* charts */` section in mates.css

Placed after `/* progress */`, before `/* layout */`. Class names verified collision-free against the existing file. Series colors are picked with tiny helper classes `.s1`–`.s6` (set `--m-c`, consumed by bars/spark/legend), avoiding the taken `.c-1`–`.c-12` names.

**Vertical bar chart** — `.chart-bars` > `.bar` (2 elements per data point):
```html
<div class="chart-bars" role="img" aria-label="Sales by day">
  <div class="bar" style="--v: 65"><i></i><span>Mon</span></div>
  <div class="bar s2" style="--v: 40"><i></i><span>Tue</span></div>
</div>
```
`.bar` is a grid with rows `1fr auto`: the `<i>` fill's `height: calc(var(--v) * 1%)` resolves against the plot track, `<span>` is the axis label. Optional `data-v="65"` on `<i>` renders a small value bubble above the bar.

**Stacked bars** — `.bar.stacked`: the fill `<i>` becomes a flex column whose `<u>` segments split it by `--sv` (share of 100), each segment colorable with `.s1–.s6`.

**Horizontal bars** — one row per item:
```html
<div class="chart-hbars">
  <div class="hbar" style="--v: 80"><span>Design</span><i></i><b>80</b></div>
</div>
```
`.hbar` grid = `label | track | value`; the track `<i>` draws its fill via `::before { width: calc(var(--v) * 1%) }` (same gradient-free approach as the range input, rounded ends preserved).

**Donut / pie** — up to 6 segments via `--v1…--v6`:
```html
<div class="donut" style="--v1:45; --v2:30; --v3:15; --v4:10">
  <b>1,204</b>
</div>
```
`background: conic-gradient(...)` with cumulative `calc()` stops; the hole is a `::before` circle sized by `--m-donut-w` (center content sits above it). `.donut.pie` sets the hole to 0 for a solid pie. Custom colors per segment = inline `--m-c1` override, documented.

**Progress ring** — single-value conic:
```html
<div class="ring" style="--v: 72"><b>72%</b></div>
```
Shares the donut hole geometry; track color is `--m-border`.

**Sparkline** — tiny bars for dashboard cards:
```html
<div class="spark"><i style="--v:30"></i><i style="--v:55"></i><i style="--v:42"></i></div>
```

**Legend** — pairs with donut/stacked:
```html
<div class="legend"><span><i class="s1"></i>Organic</span><span><i class="s2"></i>Paid</span></div>
```

**Niceties:** `@property` registration for `--v` so value transitions animate (progressive enhancement; inert where unsupported), guarded by the existing `--m-dur` token and `prefers-reduced-motion`. Real text labels everywhere; docs will recommend `role="img"` + `aria-label` on containers. Estimated added weight: ~3kb raw / ~1kb gzipped.

## 3. demo.html

- Add a `#charts` nav link and section: bar chart, stacked, horizontal bars, donut + legend, rings, sparkline cards — each inside a `.card` so it doubles as a layout recipe.
- Implement the currently **empty** `cycleTheme()` script (3 lines) so the existing theme-toggle button actually works — needed to verify charts in dark mode.

## 4. README.md

- Add a "Charts" section with the markup examples above and the new tokens (`--m-c1..6`, `--m-chart-h`).
- Add chart rows to the Components table; fix the "laouts" typo on line 5; refresh the Size table with real measured numbers.

## 5. Version + build

- Bump version to **0.4.0** in the CSS header and package.json (also fixes the existing 0.1.0/0.3.0 drift).
- Run `npm run build` (esbuild) to regenerate `mates.min.css`; keep the repo's size story honest in the README.

## 6. Verification

1. `npm run build`, then measure raw/min/gzip sizes and update the README table.
2. Open `demo.html` in a browser; render the charts section (and spot-check existing sections for regressions) to PNGs in both light and dark themes and run the visual judge pass on them.
3. Sanity-check the maintainer-agent invariants: `--m-*` token naming preserved, dark mode covered for new tokens, README updated for all new public classes.
