# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx` (client component — mobile menu state)
- **Screenshot:** `docs/design-references/fullpage-desktop.png` (top 110px), `fullpage-mobile.png` (top)
- **Interaction model:** static on scroll (NOT sticky, no scroll change); hover on nav links; click hamburger (≤1024px) opens offcanvas menu

## DOM Structure
`<header>` → `<section>` (gradient bg, relative, z above hero, **margin-bottom: -110px** so it overlays the next section) → container (max-w 1140, mx 150px at 1440 ⇒ effectively centered 1140px, min-h 90px, flex items-center) → 2 columns:
- Left column (30% at ≥768, 50% mobile): padding 10px; logo link `<a href="/">` with `<img src="/images/logo.png">` natural 160×90 rendered 160×90 (mobile: img width 80% of column ⇒ 124×70).
- Right column (70% / 50% mobile): padding 10px; nav `<ul>` flex, justify-end, wrap.

## Computed Styles
### Header section
- height 110px (container min-height 90 + 10px column padding top/bottom), background-image: linear-gradient(rgba(0,0,0,0.6) 0%, rgba(255,255,255,0) 100%)
- position relative; z-index 10 (so it sits above the hero)
- ≤1024px: padding 10px 20px
### Nav link `<a>` (each li)
- font: Roboto (var --font-roboto) 13px / 19.5px, weight 500, letter-spacing 2px, uppercase
- color: #c5c5c5 (active "Trang chủ" = #ffffff); hover → #ffffff; transition 0.4s
- padding: 0 30px 0 20px; height 60px; display flex; align-items center
- Item widths at 1440: Trang chủ 140, Dịch vụ 114, Dự án 99, Sản phẩm 132, Liên hệ 111, flag 66
### Language flag item
- `<a href="https://lgp-blacksmith.com/">` containing `<img src="/images/flag-en.png" alt="English" width=16 height=11>` (display block), same padding as links

## Mobile/Tablet (≤1024px)
- Nav `<ul>` hidden; show hamburger `<button>`: 45px wide × 27px tall, padding 8px, bg #715c41 (var --bronze), border 0, radius 0; contains 3 bars (each ~ 100% width, 1px tall, color #000 (rgb 0,0,0)… render as 3 spans height 1px bg black with 4px gap, like elementskit). Positioned right in the column (at 390: x=315, y=41).
- Clicking opens offcanvas: fixed panel from the left/right, full height, width 100% max-width 350px, bg #f7f7f7, z-index 1000; overlay behind it. Contains close button (45px, padding 8px, margin 12px, border-radius 50px; hover bg #715c41 color #fff) and the vertical list of links: color #000, padding 15px 30px, font as above; hover/active (current item) color #715c41. Panel slides in (transform translateX) 0.4s.

## Hover states
- Nav link: color #c5c5c5 → #fff, transition 0.4s

## Text Content (verbatim)
TRANG CHỦ (href "/"), DỊCH VỤ, DỰ ÁN, SẢN PHẨM, LIÊN HỆ — use `NAV_ITEMS` from `@/data/site` (label is sentence case; CSS uppercases).

## Responsive
- Desktop 1440: logo left at x=160, nav right ending x=1280
- Tablet 768: hamburger, header height ~130 (padding 10px 20px)
- Mobile 390: logo 124×70 at x=30, hamburger right
