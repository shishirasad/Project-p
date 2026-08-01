# Porsion Studio Frontend Technical Bible

## Status

Version: v1.0 execution-ready draft

This document is ready to guide the first frontend implementation phase. Update it only through deliberate technical decisions or ADRs.

## Purpose

This document defines how developers and AI coding agents must build the Porsion Studio frontend.

The frontend must be:

- Premium
- Extremely fast
- Lightweight
- SEO-first
- Accessible
- Marketing-aware
- Multi-brand aware
- Bangladesh-first
- International-ready

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

React 20 remains a future upgrade path only after it is officially stable and ecosystem-ready.

## Architecture Principles

### Server-first Storefront

Use React Server Components by default. Public storefront pages should render with minimal client JavaScript.

Server-first surfaces:

- Homepage
- Brand pages
- Collection pages
- Product pages
- Journal pages
- Static landing pages
- SEO content
- Policy pages

Client interactivity is allowed only where needed:

- Search overlay
- Filters
- Sort
- Cart drawer
- Wishlist actions
- Checkout forms
- Account forms
- Product gallery controls
- Variant selection
- Landing builder admin UI
- Command Center modules

### One Domain, Multi-brand Context

The frontend must support one domain with multiple brand experiences.

Brand contexts:

- `house`
- `faris`
- `laaj`
- `campaign`

Brand context affects:

- Theme tokens
- Navigation emphasis
- Hero language
- Product ordering
- Recommendation zones
- Campaign copy
- Metadata
- Analytics context

Brand context must not duplicate component code.

### Lightweight By Default

Avoid client-heavy patterns unless a user interaction requires them.

Do not default to:

- Redux
- Heavy UI kits
- Global client providers for every page
- Client-only storefront rendering
- Large animation libraries for simple effects
- Marketing scripts loaded before consent or business need

## Enterprise Frontend Gates

### Dependency Rule

Codex or any AI coding agent must not add a new package without a dependency proposal.

The proposal must include:

- Why the dependency is needed.
- Bundle impact and whether it affects the public storefront.
- Alternative approaches using existing dependencies or platform APIs.
- Maintenance risk.
- Accessibility, security, and performance considerations.

Approved dependency behavior:

- Use existing platform APIs first.
- Use existing workspace utilities first.
- Use existing UI primitives before adding a UI package.
- Keep admin/builder dependencies out of public storefront bundles.

### Browser Support Matrix

The public storefront must support:

- Chrome latest 2 versions.
- Edge latest 2 versions.
- Firefox latest 2 versions.
- Safari latest 2 versions.
- iOS Safari current supported versions.
- Android Chrome current supported versions.

Admin and builder tools may use newer browser capabilities when they are clearly documented and do not affect the storefront.

### Responsive QA Matrix

Reusable components and public page sections must be reviewed at:

- 360 px.
- 390 px.
- 768 px.
- 1024 px.
- 1280 px.
- 1536 px.

Text must not overflow controls, cards, nav items, drawers, forms, or CTA areas at any approved viewport.

### Internationalization Rule

The Bangladesh launch is first, but every component must be international-ready.

Rules:

- No customer-facing text hardcoded inside reusable components.
- Text must enter components through translation keys, props, children, or slots.
- Components must support longer translated labels without layout breakage.
- Currency, date, number, size, and address formatting belong in feature/domain layers.
- RTL-ready structure is required where layout direction could matter later.

### Analytics Hook Rule

Reusable UI components must not contain analytics vendor logic.

Allowed:

- Stable event callbacks: `onPress`, `onClick`, `onValueChange`, `onOpenChange`, `onSubmit`.
- Optional metadata props such as `analyticsId` only when the feature layer consumes them.

Not allowed:

- Calling GA4, Meta Pixel, TikTok Pixel, Clarity, PostHog, or ad APIs inside primitives/forms.
- Importing analytics SDKs into `packages/ui`.

### Visual Regression Rule

Storybook must expose screenshot-ready states for every reusable component. Visual regression baselines are required before Phase 3 homepage assembly begins.

### Bundle Budget Rule

Initial gzip budgets:

- Primitive component: <= 5 KB.
- Form component: <= 10 KB.
- Heavy interactive component: separate chunk where practical.
- Admin or builder component: public storefront bundle exclusion required.

Bundle exceptions must be documented with the reason and mitigation.
## Project Structure

Recommended root structure:

```text
apps/
  web/
    app/
    components/
    config/
    content/
    features/
    lib/
    messages/
    styles/
    tests/
    types/
    middleware.ts
packages/
  design-tokens/
  ui/
  eslint-config/
  typescript-config/
docs/
brand-assets/
```

For a single-app first build, `apps/web` may be the root Next.js app. Keep package boundaries ready for future monorepo extraction.

## App Router Structure

Recommended App Router structure:

```text
app/
  (storefront)/
    page.tsx
    faris/
      page.tsx
    laaj/
      page.tsx
    collection/
      [slug]/
        page.tsx
    product/
      [slug]/
        page.tsx
    journal/
      page.tsx
      [slug]/
        page.tsx
    l/
      [slug]/
        page.tsx
    campaign/
      [slug]/
        page.tsx
  (checkout)/
    cart/
      page.tsx
    checkout/
      page.tsx
    order-success/
      page.tsx
    order-tracking/
      page.tsx
  (account)/
    account/
      page.tsx
      orders/
      wishlist/
      addresses/
      settings/
  (admin)/
    command-center/
      page.tsx
      products/
      orders/
      customers/
      marketing/
      landing-builder/
      analytics/
      ai-workspace/
  api/
    health/
      route.ts
  layout.tsx
  not-found.tsx
  error.tsx
  global-error.tsx
```

Route groups must separate storefront, checkout, account, and admin surfaces.

## Folder Structure Rules

```text
components/
  primitives/
  layout/
  navigation/
  commerce/
  product/
  marketing/
  editorial/
  feedback/
  overlays/
  forms/
features/
  brand-context/
  cart/
  wishlist/
  search/
  personalization/
  analytics/
  landing-pages/
  checkout/
lib/
  api/
  cache/
  config/
  env/
  seo/
  schema/
  analytics/
  format/
  validation/
types/
  brand.ts
  product.ts
  collection.ts
  customer.ts
  cart.ts
  order.ts
```

Rules:

- `components/primitives` contains reusable low-level UI only.
- `features/*` contains domain behavior and feature composition.
- `lib/*` contains framework-agnostic utilities where possible.
- Do not import feature internals across unrelated feature folders.
- Public components export through stable `index.ts` files only when it improves ergonomics.

## Component Architecture

Component layers:

1. **Primitive:** Button, Input, IconButton, Badge, Dialog primitives.
2. **Pattern:** ProductCard, FilterDrawer, SearchOverlay, ProductGallery.
3. **Section:** HeroSection, BrandGatewaySection, CampaignSection.
4. **Page Composition:** Route-level page files composing server data and sections.

Rules:

- Primitive components can be client components only if interaction requires it.
- Product and marketing sections should be server components unless interactive.
- Do not put data fetching inside generic primitives.
- Do not make a large component client-side because one child needs interaction. Isolate the client child.

## Server Components

Use Server Components for:

- Data fetching for public pages
- SEO metadata composition
- Product and collection content
- Journal content
- Static landing pages
- Layout sections without direct interaction

Server Component rules:

- No browser APIs.
- No hooks like `useState`, `useEffect`, or `useRef`.
- Use server-side fetch wrappers.
- Pass only serializable props to client children.
- Keep data shaping close to the route or feature layer.

## Client Components

Use Client Components for:

- Search overlay input behavior
- Cart drawer
- Wishlist toggle
- Product gallery controls
- Variant selector
- Filter drawer
- Checkout forms
- Account forms
- Admin dashboards
- Landing builder editor

Client Component rules:

- Add `'use client'` only at the smallest useful boundary.
- Keep props small and serializable.
- Avoid importing heavy dependencies into shared client components.
- Use dynamic import for expensive admin/builder components.

## Data Fetching

### Public Storefront

Use server-side fetch wrappers:

- `getHomePageData()`
- `getBrandPageData(brand)`
- `getCollection(slug, filters)`
- `getProduct(slug)`
- `getJournalEntry(slug)`
- `getLandingPage(slug, context)`

### Interactive Surfaces

Use TanStack Query for:

- Search suggestions
- Account data refresh
- Wishlist mutation feedback
- Cart mutation feedback
- Admin dashboard data
- Landing builder preview state

Do not use TanStack Query for static SEO-critical page content unless it is truly client-only.

## API Layer

Create a typed API layer in `lib/api`.

Recommended structure:

```text
lib/api/
  client.ts
  endpoints.ts
  errors.ts
  storefront.ts
  admin.ts
  search.ts
  cart.ts
  customer.ts
  types.ts
```

Rules:

- API responses must be validated with Zod where risk is meaningful.
- Keep API errors normalized.
- Use versioned API paths when backend is connected.
- Keep mock data shape aligned with future API contracts.

## Mock Data Strategy

Before backend is ready:

- Use typed mock data.
- Keep mock data in `content/mock` or `features/*/mock-data.ts`.
- Use realistic Bangladesh-first values.
- Include Faris and Laaj examples.
- Include enough variants for responsive and empty states.

Mock data must never create API shapes that backend cannot support.

## State Management

### Zustand

Allowed for small UI state:

- Cart drawer open/closed
- Wishlist UI state
- Search overlay state
- Mobile drawer state
- Theme preview state
- Landing builder canvas state

Do not store server-owned product catalog data in Zustand.

### React State

Use local state for component-only interaction:

- Tabs
- Accordions
- Product gallery selected image
- Size guide open state

### URL State

Use URL state for:

- Filters
- Sort
- Search query
- Pagination/load-more cursor when shareable
- Campaign tracking context when appropriate

## Caching Rules

Use caching based on content type:

- Homepage: cache with short revalidation during active campaigns.
- Product pages: cache but revalidate on product/inventory/price changes.
- Collection pages: cache by filters and sort where practical.
- Journal: cache aggressively unless scheduled content changes.
- Landing pages: cache public output, not builder/editor state.
- Cart/account/checkout: no public cache.

Respect backend cache headers when connected.

## Metadata And SEO

Every public route must define metadata.

Required:

- Title
- Description
- Canonical URL
- Open Graph
- Twitter/X card
- Robots rules where needed
- JSON-LD where relevant

Use dedicated helpers:

- `buildProductMetadata(product)`
- `buildCollectionMetadata(collection)`
- `buildBrandMetadata(brand)`
- `buildLandingMetadata(page)`

## Error Handling

Use layered error handling:

- Route `error.tsx` for recoverable route errors.
- `global-error.tsx` for app-level failures.
- Component-level empty/error states for expected missing data.
- API error normalization for client actions.

Error copy must be calm and useful.

Do not expose raw backend messages to customers.

## Logging

Frontend logging levels:

- `debug`: local only
- `info`: non-sensitive flow events
- `warn`: recoverable issues
- `error`: failed actions, rendering issues, API failures

Rules:

- Never log secrets, tokens, payment data, or private customer data.
- Client logs should be minimal and sampled in production.
- Admin and builder errors can include richer debugging context after permission checks.

## Environment Variables

Use a typed env module.

Example groups:

- Public app URL
- API base URL
- Search base URL
- Analytics IDs
- Feature flags
- Brand preview flags
- Build metadata

Rules:

- Only expose `NEXT_PUBLIC_*` values that are safe for browsers.
- Validate env at startup/build time.
- Keep local, staging, preview, and production separate.

## Security Rules

- Sanitize and validate external content.
- Never render raw HTML unless from trusted CMS pipelines with sanitization.
- Use CSP-ready script loading.
- Load analytics conditionally and consent-aware.
- Protect admin routes with authentication and authorization.
- Avoid exposing API keys in client bundles.
- Use signed URLs for private media later.
- Keep checkout forms strict and accessible.

## Performance Budget

Targets:

- LCP under 1.8 seconds
- INP under 150 ms
- CLS under 0.05
- 60 FPS interaction and animation

Budgets:

- Public page client JS should be minimal.
- Avoid large client providers in root layout.
- Hero image must be optimized and sized correctly.
- Fonts must be subset and preloaded only when critical.
- Marketing pixels must not block rendering.
- Builder/admin bundles must not leak into storefront bundles.

## Image Rules

- Use `next/image` for product, campaign, editorial, and brand imagery.
- Use AVIF/WebP where possible.
- Use blur placeholders for important product imagery.
- Provide accurate alt text.
- Use priority only for first-viewport hero/product image.
- Avoid oversized source images on mobile.

## Animation Rules

- CSS transitions first.
- Motion only for premium interactions that need it.
- Respect reduced motion.
- Avoid scroll hijacking.
- Avoid animation that changes layout.
- Keep hover/focus feedback subtle and quick.

## Testing Rules

Required before production release:

- Unit tests for utilities and formatting.
- Component tests for critical interactive components.
- Playwright tests for homepage, Faris, Laaj, product, search, cart, checkout shell.
- axe accessibility checks for core pages.
- Visual smoke checks for responsive layouts.

## CI/CD Rules

Minimum CI gates:

- Install
- Type check
- Lint
- Unit tests
- Build
- Playwright smoke tests
- Accessibility checks where available

Preview deployments are required for design review before production.

## Naming Conventions

- Components: PascalCase, e.g. `ProductCard.tsx`.
- Hooks: camelCase with `use`, e.g. `useCartDrawer.ts`.
- Utilities: camelCase, e.g. `formatPrice.ts`.
- Types: PascalCase, e.g. `Product`, `BrandContext`.
- Route segments: kebab-case for public URLs.
- CSS variables: kebab-case with category prefix.

## AI Coding Agent Rules

When an AI agent edits frontend code:

1. Read the relevant Bible first.
2. Keep client components small.
3. Do not introduce heavy libraries without approval.
4. Do not invent brand styles outside tokens.
5. Add/adjust tests for meaningful behavior.
6. Verify responsive layout.
7. Preserve SEO and accessibility.
8. Summarize changed files and validation.

## Implementation Order

1. Project scaffold
2. Design tokens
3. Layout shell
4. Navigation framework shell
5. Sprint 2.1 primitive components
6. Sprint 2.2 form system
7. Sprint 2.2.5 QA and stabilization
8. Sprint 2.3 navigation system
9. Sprint 2.4 feedback system
10. Sprint 2.5 overlay system
11. Sprint 2.6 commerce components
12. Sprint 2.7 editorial components
13. Sprint 2.8 layout components
14. Phase 2 completion gate
15. Homepage assembly
16. Faris page assembly
17. Laaj page assembly
18. Collection page assembly
19. Product page assembly
20. Search overlay integration
21. Cart shell
22. Checkout shell
23. Account shell
24. Journal shell
25. Landing templates
26. Performance pass
27. SEO pass
28. Production readiness review