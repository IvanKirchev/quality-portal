# The Quality Portal — pitch page

A single-page, no-build pitch site for The Quality Portal. Light, minimalist editorial — oat paper, near-black ink, vermillion as the sole signal accent. Borders carry the composition.

```
static/
  index.html       – semantic single-page document
  styles.css       – full stylesheet (tokens, layout, motion)
  script.js        – scroll reveals, demo placeholder, year stamp
  assets/
    favicon.svg    – ruled-page mark with red proofreader's tick
    noise.svg      – paper grain (feTurbulence, dark)
```

## Run

No tooling required. Either open `index.html` directly in a browser, or serve the directory:

```bash
# from the repo root
python3 -m http.server 8000 --directory static
# or
npx serve static
```

Then open http://localhost:8000.

## Theme

A specimen-sheet aesthetic: oat paper canvas, deep ink, vermillion as the only signal color. Hard rules carry the structure — no surface tints, gradients, or shadows. Italic emphasis is conveyed through the typeface's italic forms alone, in vermillion.

### Palette

| Token | Value | Role |
|---|---|---|
| `--paper`        | `#efe6ce` | Oat canvas |
| `--paper-2`      | `#e7decf` | Faint inset surface (hover, demo inner) |
| `--ink`          | `#0c0a06` | Near-black, primary text |
| `--ink-2`        | `#3b362a` | Secondary text |
| `--ink-dim`      | `#6b6450` | Tertiary / metadata |
| `--accent`       | `#d2381c` | Vermillion accent |
| `--rule-strong`  | `rgba(12,10,6,.78)` | Primary structural rule |
| `--rule-ink`     | `var(--ink)` | Heaviest border (frames, section dividers) |

### Typography

All-serif body, **no sans whatsoever**, with mono only for marginalia and CTAs.

- **Display:** Fraunces — variable, with optical sizing, SOFT and WONK axes for characterful italics
- **Body:** Newsreader — variable Google editorial serif
- **Marginalia & CTAs:** JetBrains Mono

All loaded from Google Fonts CDN.

### Signature details

- **Hard rules everywhere.** The composition is carried by `1.5px` ink frames around major content blocks (capabilities grid, use-cases grid, pricing grid, demo) and `1px` strong rules between cells.
- **Restraint in italic.** Italic accent words use color alone (no underline, no flourish) and the display titles are set with stock optical sizing — no `WONK`/`SOFT` axes.
- **One use-case card** breaks the rhythm: the KYC card is marked with a `2px` accent top stripe and a small `DIFFERENTIATOR` caption — no fill, no surface change.
- **Flat featured tier** in pricing: `3px` accent top edge, flat ink-on-paper "Most popular" tab above the card, no rotation, no shadow.
- **Paper grain** — feTurbulence noise blended with `multiply`. The only texture on the page.

## Swap the demo embed

The demo section uses an `<iframe>` with an empty `src` and shows a "DEMO COMING SOON" overlay until you fill it in.

Open `index.html` and find the comment block in the demo section:

```html
<iframe
  class="demo__frame"
  id="demo-frame"
  src=""
  title="The Quality Portal — demo"
  ...
></iframe>
```

Set `src` to one of:

- **Loom**: `https://www.loom.com/embed/YOUR_VIDEO_ID`
- **YouTube**: `https://www.youtube.com/embed/YOUR_VIDEO_ID`
- **Vimeo**: `https://player.vimeo.com/video/YOUR_VIDEO_ID`

The placeholder hides automatically once `src` is non-empty (handled by `script.js` via a `MutationObserver`).

## Adjust pricing

Tier amounts are indicative. Edit them directly in the pricing section of `index.html`:

```html
<p class="tier__price">$49<span class="tier__price-unit">/mo</span></p>
```

The four tiers are: **Free** (`$0`), **Basic** (`$49`), **Pro** (`$199`, featured), **Enterprise** (`Custom`). To highlight a different tier, move both the `tier--featured` class and the `<span class="tier__badge">Most popular</span>` element to the desired `<article class="tier">`.

## Notes

- All colors and typography flow from CSS variables at the top of `styles.css` — change those and the whole page re-themes.
- Respects `prefers-reduced-motion` (all animation suppressed).
- Fully keyboard-navigable; visible focus ring in `--accent`.
- Color contrast: `--ink` on `--paper` ≈ 13:1.
- Two breakpoints: 960px (grid collapse, rail rotates horizontal) and 768px (mobile single-column).
