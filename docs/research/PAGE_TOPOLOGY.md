# Page Topology — lgp-blacksmith.com (vi homepage)

WordPress + Elementor (hello-elementor theme). Single scroll page, native scrolling (no Lenis/Locomotive).
Desktop 1440 total height ≈ 8454px. Elementor breakpoints: tablet ≤1024, mobile ≤767.

| # | Section (Elementor id) | Component | Top/Height @1440 | Interaction model |
|---|---|---|---|---|
| 0 | header 3e13fa8 | `SiteHeader` | 0 / 110, overlays hero (margin-bottom -110px), NOT sticky | static; hover nav; mobile hamburger → offcanvas |
| 1 | ab5bbc6 | `HeroSection` | 0 / 900 (100vh), hidden on mobile | time-driven bg slideshow (fade 3s, 3.5s/slide, Ken Burns zoom in) |
| 2 | 42a8a13 | `AboutSection` | 900 / 684 | static |
| 3 | e87801f | `ServicesSection` | 1584 / 684 | static; button hover |
| 4 | bf029fe + 790e0a9 | `ProductsSection` | 2268 / 982 + 130 | click tabs (Grand Forge / Eurokorten) filter a justified gallery |
| 5 | 2a458e9 … 53ea799 | `ProjectsSection` | 3380 / ≈2270 | scroll-triggered entrance (fadeInLeft/Right, 2s, once) |
| 6 | 87a973a | divider inside `ProjectsSection` end | 5648 / 83 | static |
| 7 | 1c09853 | `QuoteSection` | 5730 / 630 | entrance fadeIn |
| 8 | 8730bb9 | `ThanksSection` | 6360 / 630 | fixed-attachment bg (desktop ≥1025 only) |
| 9 | 7d6ca68 | `PartnersSection` | 6990 / 451 | autoplay carousel 5s, 500ms slide, 4 visible (1 on mobile), entrance fadeInUp |
| 10 | 3c9995f | `ContactSection` | 7369 / 608 (margin-top -72px overlapping partners padding) | form (no backend) |
| 11 | footer 68da4c39 | `SiteFooter` | 7977 / 477 | hover on social icons |
