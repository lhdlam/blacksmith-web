# Behaviors

- **Header**: position relative, gradient bg `linear-gradient(rgba(0,0,0,.6) 0%, rgba(255,255,255,0) 100%)`; scroll does NOT change it (verified at scrollY 0 and 600). Nav link hover: color #c5c5c5 → #fff, transition 0.4s.
- **Mobile header (≤1024)**: hamburger button 45×27, bg #715c41, 3 bars; offcanvas menu panel bg #f7f7f7, max-width 350px, links color #000 padding 15px 30px, hover/active #715c41. Close button 45px round.
- **Hero slideshow**: 3 images, fade transition 3000ms, slide duration 3500ms, loop, Ken Burns zoom-in: active slide scales 1 → 1.3 over 20s linear. Black overlay opacity .45.
- **Entrance animations** (IntersectionObserver once): fadeInLeft/fadeInRight/fadeInUp translate 100% + opacity, fadeIn opacity; duration 2s. Elements with `_animation_mobile: none` don't animate on mobile.
- **Products gallery**: tabs "Grand Forge" (default) / "Eurokorten"; active tab #fff, inactive #c5c5c5, 0.3s. Items animate: hidden ones scale(0)+opacity 0, 0.35s. Justified layout: ideal row height 300px, gap 18px (tablet/mobile 150px, 10px). Items link to full image.
- **Partners carousel**: swiper, 4 slides per view, spaceBetween 20, autoplay 5000ms, speed 500ms, infinite, pause on hover.
- **Thanks section**: background-attachment fixed on ≥1025px.
- **Buttons**: outline (1px #fff), bg #292929, white text; hover color #fff (no visible change).
- No smooth-scroll library; no scroll-snap.
