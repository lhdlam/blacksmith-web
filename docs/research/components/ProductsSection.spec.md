# ProductsSection Specification

## Overview
- **Target files:** `src/components/ProductsSection.tsx` (server wrapper) + `src/components/JustifiedGallery.tsx` (client — tabs + justified layout)
- **Screenshot:** `docs/design-references/fullpage-desktop.png` (y 2268–3380)
- **Interaction model:** click-driven tabs filter the gallery (default tab 0 "Grand Forge")

## Layout (1440)
- `<section>` bg #191919, padding 86px 244.8px 0 (content 950 wide x=245..1195; column padding 10px ⇒ content x=255..1185, 930 wide). Tablet ≤1024 padding 0 6%. Mobile padding 24px 0 0.
- Header row (flex wrap): eyebrow full width; then h2 (max-width 70%) + right-aligned "see all" (max-width 30%, text-align end) on the same row.
  - Eyebrow "Nhập khẩu những gì tốt nhất": Prata 26/26, ls 1.8px, #b5b5b5, mb 20px
  - h2 "Sản phẩm của chúng tôi": Prata 50px / 50px (line-height 1.0 here), ls 4px, #fff; wraps to 2 lines (651px wide box, 100px tall)
  - See-all: `<SeeAllLink href="https://lgp-blacksmith.com/vi/san-pham/" width={140} />` from `@/components/SeeAllLink`, top-aligned with h2
- Paragraph (Roboto 300 16/24, #fff, mb 20px, margin-top ~20px): "Chúng tôi là nhà nhập khẩu và phân phối độc quyền của **Grand Forge** và **Eurokorten** tại Việt Nam.<br/>Chúng tôi bán các sản phẩm của họ tại Việt Nam, cũng như tùy chỉnh chúng theo yêu cầu." (strong = weight 400)
- Gallery widget (margin-top 19px from paragraph).
- Bottom row (was a separate section 790e0a9): padding 14px 0 → `<SeeAllLink width={105} />` right-aligned (text-align end), section total height 130 at 1440 incl. ~86px bottom space? Use: wrapper pt 14px pb 86px? Measured: gallery ends y=3240, see-all img y=3279 (h 18), next section starts 3380. So: margin-top 39px, then image, then 83px bottom space.

## Tabs
- Container: flex wrap, justify-center, margin-bottom 50px.
- Tab `<button>`: Heebo 500 19px / 28.5px, letter-spacing 1.1px, padding 7px 14px; first tab margin-right 40px; color inactive #c5c5c5, active #fff; transition .3s. (Elementor pointer "underline" exists but renders nothing visible — no underline.)
- Labels: GALLERY_TABS from `@/data/site`.
- Mobile font-size 14px.

## Justified gallery
- Data: GALLERY_IMAGES (src,width,height,tag) from `@/data/site`; show items with tag === active.
- Algorithm (Elementor e-gallery justified): ideal row height H=300 (≤1024: 150), gap G=18 (≤1024: 10). Greedy rows: add images while row width at height H (sum of w/h*H + gaps) < container width; when it exceeds, scale the row down to exactly fill container width (row height = (W - gaps)/sum(aspect)). Last row: also justify-fill if it's ≥ ... Elementor fills the last row too (measured: GF rows both full). Measure container width with ResizeObserver.
- Expected @930px wide — Grand Forge: row1 4 imgs 219×261, row2 4 imgs (211,211,212,242)×252; total 531.6px tall. Eurokorten: row1 [142,377,376]×252, row2 [163,366,366]×244; total 513.5px.
- Render each item as `<a href={src} target="_blank">` absolutely positioned (or flex rows) with a div background-image cover center. Container height transition `padding-bottom/height .35s`.
- Switching tabs: items not in the active tag animate to scale(0)/opacity 0 then are removed; new ones appear with opacity/scale transition .35s. A simple fade+scale transition 350ms is enough.
- Item hover: none visible.

## Responsive
- Mobile (390): rows ~ 3 per row at height ~110 (H=150, gap 10, container 370 wide); heading/h2 sizes 18px / 26px line-height 1.2em; see-all img width 100% of its 30% column (~105px).
