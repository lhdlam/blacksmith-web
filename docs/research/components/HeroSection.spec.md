# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx` (client component — slideshow timer)
- **Screenshot:** `docs/design-references/fullpage-desktop.png` (y 0–900)
- **Interaction model:** time-driven background slideshow; **hidden on mobile (≤767px: `hidden md:block`)**

## DOM Structure
`<section>` height 100vh (900 at 1440×900; Elementor "full height"), relative, overflow hidden, bg #191919
1. Slideshow layer: absolute inset-0, z-0. 3 slides stacked absolutely; each slide = div with background-image cover, center (50% 50%).
2. Overlay: absolute inset-0, bg #000, opacity 0.45.
3. Content container: relative, max-w 1140px, mx-auto, full height, flex, align-items flex-end. Inner column padding 10px, margin-bottom 100px.

## Slideshow behavior (from Elementor settings)
- slides: HERO_SLIDES from `@/data/site` = ["/images/hero-1.png", "/images/hero-2.jpg", "/images/hero-3.jpg"]
- slide duration 3500ms, fade transition 3000ms (opacity), loop
- Ken Burns zoom IN: inactive slide image transform scale(1) with `transition: transform 10s linear`; the active slide gets scale(1.3) with `transition-duration: 20s` (linear). Opacity transition 3000ms (ease).
- Implementation: useState index, setInterval(3500 + 3000?) → use 6500ms? NO — Swiper fade with autoplay delay 3500 and speed 3000: the next transition starts 3500ms after the previous one ended, so cycle = 6500ms. Use setTimeout chain of 6500ms.

## Content (computed styles)
### Eyebrow h2 "LGP Blacksmith and Design - Nét đẹp sáng tạo"
- font-family Prata; 26px / 26px; weight 500 (Prata only has 400 — just set font-normal ok); letter-spacing 1.8px; color #fff; margin-bottom 20px
### Divider
- wrapper padding 2px 0; line: width 78px, border-top 2px solid #fff; margin-bottom 20px
### Title h2 "Sáng tạo từ thép,<br/>Kiến tạo nên giá trị độc bản"
- Prata 59px / 73.75px (1.25), letter-spacing 4px, color #fff
- Positions at 1440×900: eyebrow top y=571, divider y=619, title y=643–791 (2 lines), x=160

## Responsive
- Tablet (768–1024): same layout, section 100vh, container padding per Elementor 5% 6% not applied here; keep 1140 max width with 10px column padding.
- Mobile ≤767: section hidden entirely (Elementor `hidden-phone`). (Mobile rules exist: padding-top 300px, eyebrow 18px/1.2em, title 38px — but the section is hidden, ignore.)
