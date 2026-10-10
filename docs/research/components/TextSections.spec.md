# AboutSection, ServicesSection, QuoteSection, ThanksSection Specification

## Overview
- **Target files:** `src/components/AboutSection.tsx`, `src/components/ServicesSection.tsx`, `src/components/QuoteSection.tsx`, `src/components/ThanksSection.tsx` (server components; QuoteSection uses `<Reveal animation="fadeIn">` from `@/components/Reveal`)
- **Screenshot:** `docs/design-references/fullpage-desktop.png` (About y 900–1584, Services 1584–2268, Quote 5730–6360, Thanks 6360–6990)
- **Interaction model:** static (Quote has entrance fadeIn 2s)

## Shared tokens
- Section bg #191919. Eyebrow h2: Prata 26px/26px, letter-spacing 1.8px, color #b5b5b5, mb 20px. Big h2: Prata 50px/60px, letter-spacing 4px, #fff, mb 20px. Body: Roboto 300, 16px/24px, #fff; `<strong>` = weight 400; `<p>` margin-bottom 14.4px.
- Inner column padding 10px. Container max-w 1140px centered (at 1440 the content box is x=160..1280, 1120 wide).

## AboutSection (684px tall at 1440)
- `<section>` relative bg #191919, min-height 684px, flex align-items center. Background overlay: absolute inset-0, background-image url(/images/overlay-1.png), size cover, center (this image contains the faint vertical "BLACKSMITH" letters at left and big "BL" at right).
- Heading (centered, text-center): "Giới thiệu về<br/>LGP Blacksmith and Design" (2 lines, 120px tall)
- Text block: text-align justify, padding 0 112px (10% of 1120) — content box x=272..1168 (896 wide). Paragraphs (strong = weight 400 portions shown in **bold markers**):
  1. "Chào mừng đến với **LGP Blacksmith and Design** – Nơi Nghệ thuật  gặp gỡ và kiến tạo nên những thiết kế độc bản”"
  2. "Tại **LGP Blacksmith and Design**, chúng tôi không chỉ rèn nên những sản phẩm bằng thép, mà còn thổi hồn nghệ thuật vào từng chi tiết. Kết hợp giữa tay nghề thủ công tinh xảo và sự sáng tạo trong thiết kế, chúng tôi mang đến những tác phẩm từ cổ điển đến hiện đại không chỉ bền đẹp với thời gian mà còn mang đậm dấu ấn cá nhân cho mỗi khách hàng. Với đội ngũ thợ rèn lành nghề và các nhà thiết kế tài năng cùng nhà xưởng khép kín, chúng tôi tạo ra  những sản phẩm từ thép với nét đặc trưng riêng:"
  3. `<ul>` list-disc, padding-left 40px: "Cầu thang , lan can, cửa cổng, canopy…;" / "Nội ngoại thất;" / "Những sản phẩm decor;" / "Tay nắm, chân tủ, khung gương…" followed by two `<br/>` (adds 24px space)
  4. "**Nét riêng của LGP thay thế các sản phẩm làm bằng vật liệu inox , đồng với công nghệ xi mạ riêng và làm màu hoàn chỉnh tạo nên những sản phẩm chất lương ngang bằng, bền màu và giá thành tối ưu.** **LGP BLACK SMITH AND DESIGN** không ngừng đổi mới và sáng tạo để mang lại giải pháp toàn diện cho mọi nhu cầu của khách hàng."
  5. "Tại **LGP Blacksmith and Design**, mỗi sản phẩm chúng tôi gởi đến khách hàng là một tác phẩm nghệ thuật đậm chất cá nhân."
  6. "**Hãy cùng LGP BLACKSMITH AND DESIGN biến ý tưởng của bạn thành hiện thực – Vững chắc, đẳng cấp, và trường tồn!**"
- Mobile ≤767: section padding 22px 0 0; overlay background-size contain; heading text-left 26px/1.2em; text text-left 14px, padding 0. Tablet ≤1024: padding 5% 6%.

## ServicesSection (684px)
- Same bg + overlay-1.png cover, min-height 684, items center, all centered text.
- Eyebrow "Tất cả trong Một" (text-center)
- h2: "Dịch vụ hoàn chỉnh,<br/>từ Kiến trúc & Thiết kế,<br/>đến Thi công & Sản xuất." (3 lines, 180px)
- Paragraph (text-center, padding 0 112px, margin-bottom 20px): "Dù làm theo yêu cầu của các kiến trúc sư, người thiết kế nội thất hay bất cứ yêu cầu cụ thể nào của khách hàng, trong mọi trường hợp các bạn đều có thể tin tưởng vào chuyên môn của chúng tôi. Sau khi thống nhất phương hướng cho dự án, chúng tôi tôi sẽ lo mọi thứ từ bản vẽ kỹ thuật cho đến việc thiết kế để phù hợp nhất với yêu cầu của khách hàng."
- Button `<a href="https://lgp-blacksmith.com/vi/dich-vu/">` "Xem tất cả dịch vụ": inline-block, Roboto 300 16px/16px, letter-spacing 2px, uppercase, #fff, bg #292929, border 1px solid #fff, padding 11.2px 33.6px (rendered 259×40), transition .3s; hover keeps color #fff.
- Mobile: section padding 22px 0 0; eyebrow left 18px/1.2em; h2 left 26px/1.2em; paragraph left 14px padding 0; button padding 12px 30px; button stays centered.

## QuoteSection (630px)
- bg #191919, padding 0 244.8px (≈17% each side at 1440 → content 950 wide, x=245..1195; inner column padding 10 → text x=255..1185), min-height 630, items center.
- Overlay: absolute inset-0, background url(/images/overlay-4.png) center/cover, `filter: brightness(2) contrast(2) saturate(2)` (shows the big faint "AC" letters at left).
- Quote `<p>` wrapped in `<Reveal animation="fadeIn">`: Roboto 400 30px/45px, color #ccc, text-align right (end): "“Chúng tôi biến bản thiết kế thành sản phẩm hoàn chỉnh. Blacksmith nổi tiếng với khả năng hoàn thành những dự án phức tạp từ nhiều vật liệu khác nhau.”"
- Tablet: padding 0 6%. Mobile: padding 0; text stays right-aligned (≈26px).

## ThanksSection (630px)
- background-image url(/images/sebastien-sicot.jpg) center/cover, background-attachment fixed at ≥1025px (use `lg:bg-fixed`), padding 0 244.8px, min-height 630, items center. Overlay #000 opacity .65.
- Eyebrow "Lời cảm ơn" (center). h2 "Bí quyết độc đáo tại Việt Nam" (center, single line at 1440).
- Text (center, color #cbcbcb, Roboto 300 16/24, all wrapped in strong weight 400, margin-top 9.3px):
  p1: "Chúng tôi đặc biệt biết ơn sự dẫn dắt và đào tạo tận tâm của thầy  Sebastien SICOT, một chuyên gia có 30 năm kinh nghiệm trong lĩnh vực rèn đúc và thiết kế."
  p2: "Dưới sự hướng dẫn tinh tế của thầy Sebastien, đội ngũ của chúng tôi đã không chỉ nắm vững các kỹ thuật rèn truyền thống mà còn học cách kết hợp nghệ thuật vào từng chi tiết sản phẩm. Những kiến thức và kinh nghiệm thầy chia sẻ đã giúp chúng tôi hiểu sâu hơn về sự quan trọng của tính thẩm mỹ, sự cân bằng giữa độ bền và vẻ đẹp trong mỗi tác phẩm, từ những chiếc cổng sắt nghệ thuật, lan can, đến các món đồ nội thất tinh xảo."
- Tablet padding 4% 6%. Mobile padding 34px 0; bg-position -384px 0; eyebrow 18px, h2 26px/1.2em, text 14px.
