# Porsion Studio Frontend Design Bible v2.0

## Purpose

Canonical documentation index: docs/00_Documentation_Index.md.

This root copy is mirrored in docs/02_Frontend_Design_Bible.md for the numbered documentation system.

This document defines the frontend design direction for Porsion Studio as a digital flagship store and future luxury fashion operating system.

The frontend must be:

- Premium
- Fast
- Lightweight
- SEO-friendly
- Accessible
- Marketing-optimized
- Bangladesh-first
- International-ready
- Multi-brand aware
- Behavior-aware without becoming noisy

## Enterprise v2.0 Structure

This v2.0 structure makes the Design Bible a single source of truth for Codex, future AI builders, developers, designers, marketers, and operators.

### Part 1 - Foundation

1. Vision & Philosophy
2. Design Principles
3. Brand Architecture
4. Brand Experience Model
5. Target Audience
6. UX Principles
7. Luxury Commerce Principles
8. Bangladesh Launch Strategy
9. International Expansion Strategy

### Part 2 - Design Language

10. Logo System
11. Color System
12. Typography System
13. Grid System
14. Layout System
15. Spacing System
16. Elevation & Shadow System
17. Border Radius System
18. Iconography
19. Illustration Style
20. Photography Direction
21. Video Direction
22. Editorial Direction

### Part 3 - Motion System

23. Motion Principles
24. Transition Library
25. Hover States
26. Scroll Behaviors
27. Page Transitions
28. Loading Experience
29. Skeleton System
30. Micro-interactions
31. Reduced Motion Rules

### Part 4 - Navigation

32. Information Architecture
33. Desktop Navigation
34. Mobile Navigation
35. Mega Menu
36. Search Overlay
37. Breadcrumb
38. Footer
39. Global Search
40. Command Palette for future admin and power-user workflows

### Part 5 - Homepage Experience

41. Hero
42. Brand Story
43. Faris Gateway
44. Laaj Gateway
45. Campaign Section
46. Featured Collections
47. Journal
48. Trust Section
49. Newsletter
50. Footer

### Part 6 - Brand Experiences

51. House Theme
52. Faris Theme
53. Laaj Theme
54. Campaign Theme
55. Seasonal Themes

### Part 7 - Commerce Experience

56. Collection Pages
57. Product Pages
58. Search Experience
59. Wishlist
60. Cart
61. Checkout
62. Order Success
63. Order Tracking
64. Account
65. Returns & Exchanges

### Part 8 - Marketing Experience

66. Landing Page System
67. Campaign Templates
68. Editorial Pages
69. Journal
70. Storytelling
71. Conversion Rules
72. Trust Rules
73. Social Traffic Journey

### Part 9 - Personalization

74. Anonymous Visitor
75. Returning Visitor
76. Known Customer
77. Brand Preference
78. Recommendation Rules
79. AI Personalization Limits

### Part 10 - Component Library

80. Design Tokens
81. Buttons
82. Forms
83. Cards
84. Product Components
85. Navigation Components
86. Overlay Components
87. Feedback Components
88. Commerce Components
89. Editorial Components
90. Marketing Components

### Part 11 - Responsive System

91. Mobile
92. Tablet
93. Laptop
94. Desktop
95. Wide Screens
96. Foldables for future readiness

### Part 12 - Accessibility

97. WCAG Rules
98. Keyboard Navigation
99. Screen Readers
100. Focus System
101. Color Contrast
102. Reduced Motion
103. Accessible Forms

### Part 13 - Performance

104. Core Web Vitals
105. Image Optimization
106. Font Optimization
107. JavaScript Budget
108. CSS Budget
109. Caching
110. Lazy Loading
111. Streaming & SSR

### Part 14 - SEO

112. Metadata
113. Structured Data
114. Open Graph
115. Canonical Rules
116. hreflang
117. Internal Linking
118. Product SEO
119. Journal SEO

### Part 15 - Bangladesh Experience

120. BDT
121. Payment UI
122. Courier Tracking
123. Address System
124. Bangla Support
125. Low-bandwidth Mode

### Part 16 - Future Global Experience

126. Multi-language
127. Multi-currency
128. Multi-country
129. Region-aware Campaigns
130. International Checkout

### Part 17 - Frontend Engineering

131. Folder Structure
132. Component Architecture
133. Naming Convention
134. Code Style
135. State Management
136. API Integration Rules
137. Error Boundaries
138. Logging

### Part 18 - Testing

139. Storybook
140. Unit Tests
141. Integration Tests
142. E2E Tests
143. Accessibility Tests
144. Visual Regression
145. Performance Testing

### Part 19 - Governance

146. Frontend Rules
147. Review Checklist
148. Design Review
149. QA Checklist
150. Release Checklist

### Part 20 - Appendices

151. Component Inventory
152. Route Map
153. Analytics Event Map
154. Design Token Reference
155. Glossary
156. Version History
157. ADR References
158. Future Roadmap

## Bible Goal

This document must allow a new developer, an AI coding agent such as Codex, or a future product team to follow the same frontend rules and build the same level of brand experience. Porsion Studio's design, UX, performance, and brand experience may evolve over time, but the core principles must remain consistent.
## Core Frontend Principle

Porsion Studio uses one domain, one company platform, one inventory, and one CRM, but presents distinct brand experiences.

- Parent house: `porsionstudio.com`
- Faris menswear: `porsionstudio.com/faris`
- Laaj womenswear: `porsionstudio.com/laaj`
- Campaign landing pages: `porsionstudio.com/campaign/[slug]`
- Marketing landing pages: `porsionstudio.com/l/[slug]`
- Journal: `porsionstudio.com/journal`

A visitor coming from a Faris ad should feel they are inside Faris. A visitor coming from a Laaj ad should feel they are inside Laaj. The platform remains unified behind the scenes.

## Locked Frontend Stack

- Next.js 16 App Router
- React 19.2 stable line
- TypeScript strict mode
- Tailwind CSS v4
- Turbopack
- pnpm
- shadcn/ui as a controlled starting point
- Radix UI primitives
- lucide-react icons
- Motion only where needed
- React Hook Form
- Zod
- TanStack Query only for interactive client-heavy surfaces
- Zustand only for small UI state
- next-intl
- MDX
- Vitest
- Testing Library
- Playwright
- axe-core
- Storybook

React 20 remains a future upgrade path, not a current lock.

## Current Brand Asset Direction

Reference assets saved in workspace:

- `brand-assets/porsion-studio-logo-mark.jpg`
- `brand-assets/porsion-studio-old-money-polo-campaign.png`

### Logo Mark Direction

The current mark uses a gold unicorn head inside a triangular frame on a black circular field. It communicates premium, mythical, sharp, and memorable brand energy.

Logo usage rules:

- Use the unicorn mark as a premium seal, not as a large decorative background.
- Keep enough clear space around the triangle so it feels intentional.
- Use it in navigation, product labels, hang tags, campaign seals, loading mark, favicon/app icon, and packaging-inspired UI moments.
- Avoid stretching, recoloring randomly, adding glow effects, or placing it on busy imagery without contrast protection.
- On light backgrounds, use a dark or gold controlled version.
- On dark backgrounds, use the gold version.

Recommended logo sizes:

- Favicon/app icon: simplified mark
- Mobile navbar mark: 28-34 px high
- Desktop navbar mark: 34-44 px high
- Footer brand mark: 48-72 px high
- Campaign seal: 64-120 px high depending on composition

### Campaign Visual Direction

The uploaded campaign banner defines a strong Faris/Porsion menswear reference: black and gold palette, folded polo, tailored trouser, marble/heritage setting, premium icon claims, and old-money styling.

This direction is useful for:

- Faris campaign pages
- Polo collection launch
- Menswear product storytelling
- Facebook/Instagram ad landing pages
- Premium product hero scenes
- Brand trust sections

Use with restraint:

- Black and gold should be a premium campaign mode, not the entire website UI.
- Product photography must remain clear enough for customers to inspect fabric, fit, and color.
- Gold text should be used for accent and hierarchy, not long reading copy.
- Campaign layouts can feel cinematic, while product pages must remain clean and practical.

### Current Visual Signals To Preserve

- Premium black/gold identity
- Quiet luxury language
- Old-money menswear feeling
- Product-first composition
- Heritage materials such as marble, stone, garden, leather, cotton, and metal
- Icon-based trust attributes
- Clear CTA with restrained styling

### Improvements For Frontend Execution

- Increase breathing room around typography on responsive layouts.
- Ensure gold-on-black contrast passes accessibility checks.
- Avoid making all pages dark; use dark cinematic sections selectively.
- Build separate Faris and Laaj campaign systems instead of forcing one visual mood on both brands.
- Keep product detail pages lighter and more inspectable than campaign banners.
- Create a full logo system later: primary lockup, horizontal lockup, mark-only, monochrome, reversed, favicon.
## Locked Sub-Brand Positioning

### Faris

Official spelling: **Faris**.

Faris is the men's clothing and menswear label of Porsion Studio. Its positioning is **timeless quiet luxury for men**.

Faris should communicate:

- Quiet confidence
- Timeless menswear
- Premium essentials
- Old-money restraint
- Excellent fit
- Refined fabrics
- Everyday versatility

Faris design language:

- Structured layouts
- Dark neutral accents
- Clean product presentation
- Subtle gold or forest accents
- Strong fabric and fit storytelling
- Calm, masculine, editorial photography

### Laaj

Official spelling: **Laaj**.

Laaj is the refined womenswear label of Porsion Studio. Its positioning is **elegant, refined, modern womenswear**.

Laaj should communicate:

- Elegance
- Confidence
- Femininity
- Refined modesty where relevant
- Premium occasion and everyday dressing
- Soft strength
- Timeless wardrobe value

Laaj design language:

- Graceful editorial layouts
- Light, breathable spacing
- Refined contrast
- Oxblood, silk, brass, and soft neutral accents
- Fabric, silhouette, and occasion storytelling
- Feminine but not decorative or loud
## Brand Experience Model

### House Theme

The Porsion Studio house theme should feel timeless, architectural, and editorial.

Use it for:

- Homepage
- Brand story
- The House
- Parent collections
- Journal index
- Cross-brand experiences

Mood:

- Quiet
- Refined
- Intentional
- Spacious
- Editorial

### Faris Theme

Faris should feel like timeless quiet luxury for men's clothing and modern menswear.

Use it for:

- `/faris`
- Faris collection pages
- Faris product pages
- Faris landing pages
- Faris campaign journeys

Mood:

- Structured
- Precise
- Confident
- Calm
- Masculine without being loud

### Laaj Theme

Laaj should feel like refined womenswear: elegant, graceful, modern, and premium.

Use it for:

- `/laaj`
- Laaj collection pages
- Laaj product pages
- Laaj landing pages
- Laaj campaign journeys

Mood:

- Elegant
- Softly confident
- Feminine without being decorative
- Modern
- Premium

## Color System

Use a restrained multi-tone palette. Avoid a single beige, blue, brown, purple, or pink-dominated interface.

### Global Tokens

- `--color-ink`: #141414
- `--color-charcoal`: #242424
- `--color-paper`: #F7F6F1
- `--color-white`: #FFFFFF
- `--color-stone`: #D9D6CE
- `--color-smoke`: #8F8C84
- `--color-silk`: #ECE7DF
- `--color-brass`: #9B7A4A
- `--color-forest`: #24342B
- `--color-oxblood`: #5B2530
- `--color-mineral`: #D9E3E2
- `--color-error`: #B42318
- `--color-success`: #1E6B45

### House Theme Tokens

- Background: paper, white
- Text: ink, charcoal
- Accent: brass
- Secondary accent: forest
- Divider: stone

### Faris Theme Tokens

- Background: white, paper
- Text: ink, charcoal
- Accent: forest
- Secondary accent: brass
- Product hover: mineral

### Laaj Theme Tokens

- Background: white, paper
- Text: ink, charcoal
- Accent: oxblood
- Secondary accent: brass
- Product hover: silk

## Typography System

Typography should be premium but lightweight.

Recommended approach:

- Use self-hosted variable fonts.
- Subset fonts by language and weight.
- Avoid loading unnecessary font weights.
- Use `font-display: swap` or equivalent.
- Keep body text highly readable on mobile.

### Type Roles

Display:

- Used for hero headlines, campaign titles, editorial story moments.
- Large, calm, never compressed.

Sans/UI:

- Used for navigation, product data, buttons, filters, forms, checkout.
- Crisp, neutral, readable.

Serif/Editorial:

- Used sparingly for luxury editorial contrast.
- Never used for dense UI controls.

### Type Scale

- Hero: 48-88 px desktop, 38-52 px mobile
- Page title: 36-56 px desktop, 30-40 px mobile
- Section title: 26-38 px desktop, 24-30 px mobile
- Product name: 15-18 px
- Body: 15-17 px
- Small: 12-14 px
- Micro label: 11-12 px

No negative letter spacing. No viewport-width font scaling.

## Layout System

### Containers

- Max content width: 1440 px
- Editorial content width: 1120 px
- Reading content width: 720 px
- Product detail width: 1440 px
- Checkout width: 1180 px

### Breakpoints

- Mobile: 360-767 px
- Tablet: 768-1023 px
- Laptop: 1024-1279 px
- Desktop: 1280-1535 px
- Wide: 1536 px and above

### Spacing

Use a restrained 4 px based scale.

- 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

Luxury does not mean empty. Use whitespace to create calm hierarchy, not to hide missing content.

### Border Radius

- Small controls: 4 px
- Cards/product tiles: 6-8 px max
- Modals/drawers: 8 px max
- Avoid pill-shaped UI unless it is a tag, swatch, or segmented control.

## Navigation System

### Desktop Navigation

Primary items:

- Logo
- The Collection
- Faris
- Laaj
- The Journal
- The House
- Search
- Account
- Wishlist
- Bag

Behavior:

- Transparent over hero only when contrast is safe.
- Solid background after scroll.
- Mega menu for collections and brands.
- Search opens a focused overlay.
- Wishlist and bag use icons with accessible labels.

### Mobile Navigation

Bottom nav:

- Home
- Search
- Collection
- Wishlist
- Bag

Drawer:

- Porsion Studio
- Faris
- Laaj
- The Journal
- The House
- Account
- Support

Search overlay:

- Instant search
- Recent searches
- Popular searches
- Product suggestions
- Brand-aware suggestions

## Route And Theme Rules

Every route must resolve a `brandContext`.

Possible values:

- `house`
- `faris`
- `laaj`
- `campaign`

Theme resolution priority:

1. Explicit route brand, such as `/faris` or `/laaj`
2. Campaign metadata
3. Product brand
4. Collection brand
5. User preference
6. Default house theme

Marketing traffic should preserve context through UTM and campaign metadata.

## Homepage Scene Specification

The homepage must communicate within 5 to 10 seconds:

- This is a premium fashion house.
- Faris and Laaj exist.
- The visitor knows where to go next.

### Scene 1: Hero

Purpose:

- Establish digital flagship feeling.
- Show real fashion imagery, not abstract graphics.

Rules:

- Full-bleed image or cinematic visual.
- H1 should be brand or collection-led.
- CTA should be minimal.
- Hint of next section must be visible.

### Scene 2: Brand Story

Purpose:

- Explain quiet luxury and timeless fashion.

Rules:

- Short copy.
- Editorial layout.
- No generic marketing claims.

### Scene 3: Faris Gateway

Purpose:

- Route menswear visitors into Faris.

Rules:

- Confident image.
- Clear Faris identity.
- CTA: Explore Faris.

### Scene 4: Laaj Gateway

Purpose:

- Route womenswear visitors into Laaj.

Rules:

- Elegant image.
- Clear Laaj identity.
- CTA: Explore Laaj.

### Scene 5: Campaign

Purpose:

- Highlight current seasonal story.

Rules:

- Campaign-specific imagery.
- Minimal copy.
- Strong landing page connection.

### Scene 6: Collections

Purpose:

- Show products without feeling like a marketplace grid.

Rules:

- Curated product selection.
- Editorial rhythm.
- No discount-heavy visual language.

### Scene 7: Journal

Purpose:

- Build authority and brand depth.

Rules:

- Use editorial cards.
- Link stories to collections/products.

### Scene 8: Trust

Purpose:

- Support purchase confidence.

Rules:

- Delivery, returns, payment, support.
- Calm presentation.
- No noisy badges.

### Scene 9: Footer

Purpose:

- Navigation, trust, legal, social, newsletter.

Rules:

- Compact and elegant.
- Strong information architecture.

## Collection Experience

Required sections:

- Editorial hero
- Brand/category story
- Filters
- Sort
- Product grid
- Load more
- Recently viewed
- Related editorial content

Filter rules:

- Size
- Color
- Fabric
- Fit
- Availability
- Price
- Brand

Product grid rules:

- Stable card dimensions.
- Fast image loading.
- Swatches visible when useful.
- Wishlist action available.
- No layout shift.

## Product Experience

Required sections:

- Large gallery
- Optional product video
- Product title
- Price
- Variant selector
- Size selector
- Fit guide
- Size guide
- Fabric story
- Care instructions
- Delivery and returns
- Sticky add to bag
- Reviews
- Related products
- Upsell and cross-sell

### Product Page Mood

Product pages should feel like a private showroom, not a crowded marketplace page.

### Upsell And Cross-Sell Rules

Use subtle, useful recommendations:

- Complete the look
- Similar fabric
- Matching color story
- Frequently styled with
- Recently viewed
- You may also like
- Care products or accessories when relevant

Never use aggressive popups or countdown pressure for luxury pages.

## Marketing Landing Pages

Landing pages must be connected to campaigns, ads, analytics, products, collections, and UTM data.

Landing page context:

- Brand
- Campaign
- Source
- Medium
- Ad creative
- Audience
- Device
- Country
- Language

Examples:

- Faris Facebook ad traffic sees a Faris-specific campaign page.
- Laaj Instagram ad traffic sees a Laaj-specific campaign page.
- Eid campaign traffic sees campaign-specific hero, copy, products, and offers.

Live landing pages must be fast SSR/static experiences. Builder scripts must never load on public storefront pages.

## Personalization Rules

Personalization should feel like good service, not surveillance.

### Anonymous Visitor

Signals:

- UTM source
- Campaign
- Device
- Country
- Referrer
- Viewed product
- Search behavior

Allowed personalization:

- Campaign-aware hero
- Brand-aware product order
- Recently viewed
- Popular in this collection

### Returning Visitor

Signals:

- Recently viewed
- Wishlist
- Cart
- Search history
- Preferred brand

Allowed personalization:

- Continue browsing
- Saved size reminder
- Matching products
- Restock alerts

### Known Customer

Signals:

- Orders
- Size
- Returns
- Loyalty
- LTV
- Preferred categories

Allowed personalization:

- Size-first product suggestions
- Personalized recommendations
- Loyalty-aware offers
- Reorder or complete-the-look suggestions

## Bangladesh-First Requirements

Start with Bangladesh as the launch market.

Frontend must support:

- BDT currency display
- bKash, Nagad, SSLCommerz, card-ready checkout UI
- Cash on delivery readiness
- District, thana, area-friendly address form
- Courier tracking UI for Pathao, RedX, SteadFast, Paperfly
- WhatsApp support entry
- Bangla-ready content structure
- Low-bandwidth mobile optimization

## International Readiness

Future-ready support:

- Multi-currency
- Multi-language
- Country-specific shipping
- Country-specific payment methods
- International SEO
- hreflang
- Region-specific campaigns

## Motion Rules

Use motion to add polish, not distraction.

Allowed:

- Soft fade
- Image reveal
- Gentle page transition
- Menu open/close
- Product gallery transition
- Button feedback

Avoid:

- Heavy parallax
- Scroll hijacking
- Constant movement
- Large animation libraries for simple effects
- Motion that harms INP or mobile smoothness

## Performance Rules

Targets:

- LCP under 1.8 seconds
- INP under 150 ms
- CLS under 0.05
- 60 FPS animation

Rules:

- Server Components first.
- Client components only when interaction requires them.
- Lazy load below-the-fold media.
- Use AVIF/WebP.
- Preload only critical fonts and hero image.
- Load marketing scripts only after consent or clear business need.
- Keep landing pages static/SSR and lightweight.

## SEO Rules

Every public page needs:

- Semantic HTML
- Metadata
- Canonical URL
- Open Graph
- JSON-LD where relevant
- Breadcrumb structure
- Descriptive image alt text
- Clean URL
- Internal links

Product pages need:

- Product schema
- Breadcrumb schema
- Review schema when real reviews exist
- Availability
- Price
- Brand

## Accessibility Rules

Target WCAG 2.2 AA.

Required:

- Keyboard navigation
- Visible focus states
- Proper labels
- Accessible dialogs and drawers
- Screen reader-friendly forms
- Reduced motion support
- Color contrast checks
- No text over image without contrast safety

## Component Library v1

Initial components:

- Navbar
- MegaMenu
- MobileDrawer
- BottomNavigation
- SearchOverlay
- Hero
- BrandGateway
- CampaignBanner
- ProductCard
- ProductGrid
- ProductGallery
- VariantSelector
- SizeGuide
- FabricStory
- FilterDrawer
- SortMenu
- Button
- IconButton
- Tabs
- Accordion
- Modal
- Drawer
- Carousel
- Breadcrumb
- Pagination
- EmptyState
- ErrorState
- LoadingSkeleton
- Footer
- Newsletter

## Frontend Build Order

1. Design Tokens
2. Layout System
3. Typography
4. Navigation
5. Homepage
6. Faris Experience
7. Laaj Experience
8. Collection
9. Product
10. Search
11. Cart
12. Checkout
13. Account
14. Journal
15. Landing Builder Templates
16. Storybook
17. Testing
18. Performance Optimization
19. SEO Validation
20. Production Release

Supporting tracks that must progress alongside the build:

- Analytics Event Map
- Accessibility Checklist
- Performance Checklist
- Component Inventory
- Route Map
- Design Token Reference
- ADR References
- Version History
## Non-Negotiables

- One domain, multi-brand experience.
- One inventory and one CRM behind all brands.
- Frontend must stay lightweight.
- Luxury UX comes before aggressive conversion tactics.
- Marketing landing pages must be campaign-aware.
- Personalization must be subtle and useful.
- Bangladesh launch must be excellent on mobile.
- International expansion must not require frontend rewrite.




