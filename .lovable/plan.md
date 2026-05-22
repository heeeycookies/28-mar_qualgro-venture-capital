# Rename + rebuild: Qualgro's Value Add

Rename the existing page and rebuild its body around the five value-add capabilities, each paired with founder quote cards on the right — taking compositional cues from First Round's "How We Work" (tilted colored quote cards, oversize numerals, editorial split layout) while staying inside Qualgro's institutional design system.

## Renames & routing

- `src/pages/WhyQualgro.tsx` stays as the file (avoid breaking imports); update internal copy + hero only.
- Nav label in `src/components/Navbar.tsx`: `"Why Qualgro"` → `"Qualgro's Value Add"`.
- Route `/why-qualgro` kept (no link rot). Hero title becomes "Qualgro's Value Add".

## Page structure (top → bottom)

1. **Hero** — Light themed `PageHero` (consistent with Portfolio/Team/News).
   - Eyebrow: "Qualgro's Value Add"
   - H1: "More than a decade investing in Southeast Asia and globally"
   - Subline: "Alongside 50+ founders on their building journey — from early traction to full exit."

2. **Origin / Narrative band** — short two-column editorial.
   - Left: small "Our story" eyebrow + 2 short paragraphs (placeholder founding story, marked for client copy).
   - Right: pull-quote-style narrative block ("Building a company is hard… That is where we support founders.") set large, navy, on `bg-surface-alt`.

3. **Post-Investment stats strip (KEPT, moved to top of value-add section)** — the existing `33+ / 4 / 9 / 10%` card, restyled as a full-width horizontal band with stats inline (no left/right split). Sits right under the narrative as proof.

4. **"What you get when partnering with Qualgro"** — the centerpiece. Five numbered capability rows, alternating layout, dark band for visual punch.
   - Section background: dark navy (`hsl(217 91% 11%)` — already used in Methodology), with subtle emerald radial glow. This becomes the page's dark variation the user asked for.
   - Each row:
     - Left 5/12: oversize numeral **shifted to top** (`01` … `05`, 8xl/9xl, ultra-bold, low-opacity emerald or hero-text-light), capability title (3xl/4xl, white, 800), capability description (max 520px, hero-text-light).
     - Right 7/12: stack of 1–2 **tilted founder quote cards** (rotate ±2–3°, rounded-2xl, thick solid-color background, dark navy text, founder name + company in small caps at bottom, small numeral watermark in corner). Each capability gets a distinct card color drawn from a curated palette below.
   - Capabilities (numbered, in order):
     1. Dedicated partnerships and advisory → Supermom (Luke), Appier (Chih-Han) — emerald card + sky card
     2. Strong domain expertise in Data, AI, Software → Hevo (Manish), NoBroker (Amit) — soft lavender + warm peach
     3. More than a decade building alongside extraordinary founders → Shopback (Henry), Funding Societies (Kelvin) — pale mint + butter yellow
     4. Committed capital to see through the next stages → Patsnap (Jeffrey), Brighte (Katherine) — coral + periwinkle
     5. Access to proprietary networks and relationships → Sirion (Ajay), Wavecell (Olivier Gerhardt) — sage + dusty rose
   - Quote cards use the First Round visual idiom (flat solid color, slight tilt, generous padding, serif-feeling Inter weight 500 italic-style) but constrained to a single palette family per row and kept readable.
   - Tiny numeral "1" in the card's bottom-right corner like the reference.

5. **Existing sections kept**:
   - Thesis themes (AI/Data/Impact/Innovation) — *removed* per "remove how we work section"? Confirm: user said remove "how we work section" only. Current page doesn't have one literally named that — the existing "How We Support Our Founders" block is replaced entirely by section 4 above. Thesis themes + criteria sections kept as supporting context below the value-add band.
   - `FounderTestimonials` infinite marquee kept near bottom.
   - `methodology` section kept.
   - Bottom CTA: still no bottom CTA (per memory).

## Visual treatment

- Numbered capability rows on dark navy = the "dark variation" the user asked for. Hero, narrative, stats, thesis, methodology stay on light `#FBF9F8` so dark band reads as a deliberate hero moment, not a theme switch.
- Numerals shifted to top of each row (explicit user request).
- Quote cards: `rotate-[-2deg]` / `rotate-[2deg]` alternating, `rounded-[20px]`, `shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]`, ~`p-10`, max-width ~`420px`. Stacked vertically with `-mt-8` overlap when 2 quotes for that capability.
- All text Inter, headings 800 weight, solid colors only (no gradients) — per design system.
- Hover on quote cards: subtle `translateY(-6px)` lift (per card-interactions memory). No scale.
- Container: `max-w-[1320px]` for the dark band, `py-32`.

## Files touched

- `src/pages/WhyQualgro.tsx` — rewrite body; replace `How We Support`, restructure into the 5 numbered rows; keep imports/parallax scaffold.
- `src/components/Navbar.tsx` — label rename.
- New small data file `src/data/value-add.ts` — 5 capability objects with `{ number, title, description, quotes: [{ company, founder, text, color }] }` so copy is editable in one place.
- `src/data/impact.ts` — untouched.

## Open items I'll assume unless you say otherwise

- Use placeholder for the "short story of how Qualgro was founded" — one editable paragraph, clearly marked.
- "Wavecell" quote in the source appears to repeat the Appier text — I'll insert a single-line placeholder so it's obvious to swap.
- Keep route URL `/why-qualgro` (only label changes) to avoid breaking external links.
