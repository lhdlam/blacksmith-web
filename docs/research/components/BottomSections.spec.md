# PartnersSection, ContactSection, SiteFooter Specification

## Overview
- **Target files:** `src/components/PartnersSection.tsx` (client — carousel), `src/components/ContactSection.tsx` (client — form state), `src/components/SiteFooter.tsx` (server)
- **Screenshot:** `docs/design-references/fullpage-desktop.png` (y 6990–8454)

## PartnersSection (top 6990, 451 tall)
- Interaction: time-driven autoplay carousel + entrance fadeInUp (wrap the card in `<Reveal animation="fadeInUp">`).
- section bg #191919, padding 86.4px 244.8px 72px.
- Card: bg #2d2d2d, border-radius 6px, padding 47.5px 47.5px 38px, margin-top -9.5px; content width 855.
- h2 "Đối tác chiến lược": Prata 26/26, ls 1.8px, color #cecece, center, padding-bottom 20px, mb 20px.
- Carousel: 4 slides visible (mobile ≤767: 1), spaceBetween 20px ⇒ slide 199×124 at 855 width; img width 100% (320×200 natural, aspect 1.6), mb 20px. Infinite loop, autoplay every 5000ms, slide transition 500ms ease (translateX), pause on hover. No arrows/dots.
- Data: PARTNERS from `@/data/site` (6 logos). Implement loop by rendering list 3× or cloning, translating by (slideW+20)*index; on reaching clone end, jump without transition.
- Mobile: section padding 0; card padding 30px 0 20px; title 22px/1.2em; one slide ~256 wide centered (image displayed ~256×160).

## ContactSection (top 7369, 608 tall; margin-top -72px so it overlaps the partners' bottom padding)
- background url(/images/contact-bg.png) center/cover; overlay linear-gradient(180deg, #191919 17%, rgba(25,25,25,0.48) 100%).
- padding 0 244.8px 86.4px; container min-height 522px, flex items-end; two 50% columns, each padding 10px.
- Left: eyebrow "Liên hệ" (Prata 26/26 #b5b5b5 ls 1.8 mb 20), h2 "Hãy để chúng tôi giúp bạn!" (Prata 50/60 ls 4 #fff; wraps "Hãy để chúng / tôi giúp bạn!").
- Right: `<form>` fields stacked, gap 10px (wrapper margin 0 -5px, each field padding 0 5px, mb 10px):
  - inputs: Heebo 15px/21px, bg rgba(255,255,255,0.73), border 1px solid #69727d, radius 0, padding 8px 16px, min-height 40px, color #333 (placeholder #666ish). Placeholders: "Tên" (text), "Email" (email), textarea "Nội dung tin nhắn" (4 rows → 96px tall, padding 5px 14px).
  - submit row justify-end: button "GỬI" Heebo 300 16px/16px ls 2px, #fff, bg #292929, border 1px solid #fff, min-h 40, width 181px (padding 4.5px 72.8px), transition .3s.
  - No backend: on submit preventDefault and show a small "Cảm ơn bạn đã liên hệ!" message (#fff, Roboto 300 14px) below.
- Mobile: padding 58px 0 24px; columns stack; eyebrow 18px/1.2em, h2 26px/1.2em.

## SiteFooter (top 7977, 477 tall)
- footer bg #000, padding 80px 0 10px; container max-w 1290 (margin 0 75px at 1440 → x 75..1365), column padding 10 → 85..1355.
- 3 equal columns (33.33%):
  1. padding-right 60px; centered footer-logo.png 250×142 (mb 20); text Heebo 300 16/24 #8f8f8f centered: "**Sáng tạo từ thép –**<br/>**Kiến tạo nên giá trị độc bản**" second line color #ff6600 (strong weight 400).
  2. padding-left 40px; h2 "Điện thoại" Prata 400 20px/20px #d1c8bb mb 20; text Roboto 300 16/24 #8f8f8f: "+84 982 202 139 (Mrs. Dung – Giám đốc)<br/>+84 937 899 678 (Mr. Tân – Quản lý sản xuất)" mb 20; h2 "Email"; "Giám đốc: dungpham@lgp-blacksmith.com<br/>Quản lý sản xuất: tanle@lgp-blacksmith.com<br/>Kinh doanh: hoanghoa@lgp-blacksmith.com; ngoctrinh@lgp-blacksmith.com".
  3. h2 "Địa chỉ" (mb 30 total); p "CÔNG TY TNHH LGP BLACKSMITH AND DESIGN"; p "Số 51/37 đường Châu Thới, Khu Phố Châu Thới, Phường Bình An, TP Dĩ An, Tỉnh Bình Dương." (p mb 14.4); social icons row gap 18px: Facebook (https://www.facebook.com/blacksmithanddesign) and LinkedIn (https://www.linkedin.com/company/blacksmith-design/), icons 25px color #d1c8bb, transition .3s (hover opacity .9). Use inline SVGs (Font Awesome 5 brands paths: facebook circle "f" and linkedin square) — put them in `src/components/icons.tsx` as `FacebookIcon` and `LinkedinIcon`.
- Divider: margin-top 60px, 1px solid rgba(139,139,139,0.31), full 1270 width, mb 20px.
- Bottom row: left "2021 ® Blacksmith & Design. All Rights Reserved." Heebo 300 13px/13px #8f8f8f; right "Design & Development by Knok Studios" (link http://www.knok-studios.com, same style, color inherit) right-aligned with padding-right 12.7px.
- Tablet: padding 40px 20px 10px; Mobile: padding 24px 0 0; columns stack; col 2 margin-top 61px; col3 mt 20; headings 16px; bottom row centered, right one padding 12px 0 24px.
