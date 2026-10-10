# ProjectsSection Specification

## Overview
- **Target file:** `src/components/ProjectsSection.tsx` (server; uses `<Reveal>` client wrapper and `<SeeAllLink>`)
- **Screenshot:** `docs/design-references/fullpage-desktop.png` (y 3380–5731)
- **Interaction model:** scroll-triggered entrance animations (fadeInLeft / fadeInRight, 2s, once)

## Global
bg #191919 for every block. Data: PROJECTS from `@/data/site` (title, description, images[0], images[1]).
Project title text: Heebo 400 27px/40.5px color #989898. Description: Roboto 300 15px/22.5px #fff.
Content column = 950px (padding 0 244.8px at 1440 → x 245..1195), inner padding 10px → x 255..1185 (930).

## Block A — intro (top 3380)
- padding-top 57.6px. Eyebrow "Dự án gần đây" (Prata 26/26 #b5b5b5 ls1.8 mb20); row: h2 "Thành tựu của chúng tôi" (Prata 50/50, ls 4px, #fff, max-w 70%, 2 lines) + `<SeeAllLink href="https://lgp-blacksmith.com/vi/du-an/" width={140}/>` right (max-w 30%).
- Text "Danh mục các dự án gia dụng cũng như thương mại chúng tôi tham gia thực hiện gần đây." (Roboto 300 16/24 #fff, margin-top 18.6px)

## Project 1 — Tropic Garden Penthouse (margin-top 55.8px; row 930 wide, 581 tall)
- Columns: left 44.04%, right 55.96% (≥768). Left padding-right 16.4px; right padding-left 20.8px, flex col justify center.
- Left: Reveal fadeInLeft → img tropic-1.png 393×581 (it's a very dark image, nearly black — that is correct).
- Right: Reveal fadeInRight (disableOnMobile) → img tropic-2.png 500×317, mb 20px; title (margin-top 20px) ; description (pulled up: margin-top -20px).
- Left column hidden on mobile (Elementor hidden-phone on 52ffa87).

## Separator row (b133f1e) — after project 1 and 2
- padding 0 172.8px (→ 1094 wide, inner padding 10 → x 183..1257). See-all right-aligned `<SeeAllLink width={114}/>` (img 114×20), margin-bottom 20px; then a 1px line `border-top: 1px solid #686868` full width of that box (with 2px padding above/below). Total height 69px. See-all hidden on mobile (line remains, width 60% left on mobile).

## Project 2 — Villa (padding 43.2px 244.8px; row 446 tall)
- Columns: left 66.952% (padding-right 24.9) / right 33.048% (padding-left 12.3, items center).
- Left: Reveal fadeInLeft (disableOnMobile) → villa-1.png 598×383.
- Right: Reveal fadeInRight → villa-2.png 295×196 mb 20 (hidden on mobile); title "Biệt thự tại đường Trần Ngọc Diện, Q.2" (margin-top 11.8px, wraps 2 lines); description (margin-top -17.7px).

## Project 3 — Penthouse Quận 3 (padding 43.2px 244.8px; bg overlay url(/images/overlay-2.png) position 50% 0 / cover with filter brightness(2) contrast(2) saturate(2) — faint "BLACKSMITH" letters right side)
- Columns: left 61.958% (padding-right 23; flex items center) / right 38.042% (padding-left 14.2).
- Left: Reveal fadeInLeft → penthouse-d3-1.png 553×369 mb 20 (hidden on mobile); title text-align right (margin-top 5.5px); description text-align right (margin-top -22px).
- Right: Reveal fadeInRight (disableOnMobile) → penthouse-d3-2.png 340×510.

## Final see-all row (53ea799): padding 0 172.8px, see-all right (114 wide), 44px tall, NO line.
## Closing divider (87a973a): padding-top 57.6px, then line 1px #686868 within 930-wide box (x 255..1185) with 10px column padding; total 83px.

## Responsive
- Tablet (≤1024): blocks padding 5% 6% / 2% 6% / 0 6% ; columns stay side-by-side ≥768.
- Mobile (≤767): all padding 0 (block A 26px top); columns stack 100%; eyebrow 18px/1.2em, h2 26px/1.2em, intro text 14px; title line-height 1.2em, desc 14px; text-align start for project 3.
