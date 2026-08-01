# Porsion Studio Component Specification Bible

## Status

Version: v1.0 execution-ready draft

This document defines the component specification standard and the first production component set for Porsion Studio.

## Purpose

This is the most implementation-critical frontend document. Every component must have a precise specification before production build.

## Component Specification Standard

Every component must define:

- Purpose
- Anatomy
- Public API
- Props interface
- Controlled or uncontrolled mode where relevant
- Compound component pattern where relevant
- Variants
- States
- Responsive rules
- Accessibility contract
- Animation and reduced motion behavior
- Performance budget
- Bundle budget
- Dependency notes
- Storybook ID
- Test cases
- Analytics hook surface where relevant
- Internationalization behavior
- Deprecation strategy
- AI generation rules

## Enterprise Component Contract

A component is not production-ready until its public contract is explicit.

Required contract fields:

- Public API: import path, exported component names, exported types, and stable usage examples.
- Props interface: typed props, defaults, required props, event callbacks, and extension points.
- Controlled mode: required for value-driven inputs, selectors, toggles, and navigation state where the parent owns state.
- Uncontrolled mode: allowed where native form behavior is useful and state does not need to be externally synchronized.
- Compound component pattern: allowed for complex families such as Tabs, Accordion, Select, Combobox, Modal, Drawer, and DataTable.
- Deprecation strategy: public prop changes require a compatibility period, migration note, and Storybook example update.

## Accessibility Gate

Every component must be designed to meet WCAG 2.2 AA intent.

Required checks:

- Keyboard-only operation for all interactive behavior.
- Screen-reader-safe accessible names, descriptions, validation messages, and loading states.
- Focus-visible state using tokens.
- Focus trap for Modal, Drawer, Dialog, Popover, Bottom Sheet, and Command Palette.
- Escape-key behavior where safe.
- Reduced motion support for animated components.
- RTL-ready structure for future internationalization.
- Touch target minimum of 44 by 44 px for interactive controls.

## Performance And Bundle Gate

Components must preserve the public storefront performance budget.

Rules:

- Components must be tree-shakeable from `@porsion/ui`.
- Heavy or rarely used components must be lazy-load friendly.
- Components must avoid layout shift by reserving stable dimensions.
- Components must avoid unnecessary rerenders, derived state loops, and unstable callback patterns.
- Primitive components must not import heavy dependencies.
- Admin, analytics, chart, builder, and editor dependencies must not enter the public storefront bundle.

Initial gzip budgets:

- Primitive component: <= 5 KB.
- Form component: <= 10 KB.
- Heavy interactive component: separate chunk where practical.
- Public storefront section: must not pull admin/builder dependencies.

## Dependency Rule

An AI coding agent must not add a new package by default.

A new dependency requires a proposal that includes:

- Why the package is needed.
- Bundle impact.
- Alternative approaches using existing code or platform APIs.
- Maintenance risk.
- Security and accessibility considerations.

## Browser Support Matrix

Components must support:

- Chrome latest 2 versions.
- Edge latest 2 versions.
- Firefox latest 2 versions.
- Safari latest 2 versions.
- iOS Safari current supported versions.
- Android Chrome current supported versions.

## Responsive QA Matrix

Components must be reviewed at:

- 360 px.
- 390 px.
- 768 px.
- 1024 px.
- 1280 px.
- 1536 px.

## Internationalization Rules

- Components must not hardcode customer-facing strings.
- Text must come from children, props, slots, or translation keys.
- Components must tolerate longer translated text without overflow.
- Currency, number, date, size, and address formatting must be passed in from feature/domain layers.

## Analytics Hook Rules

- Primitive and form components must not contain analytics vendor code.
- Components may expose stable event hooks such as `onPress`, `onValueChange`, `onOpenChange`, or `onSubmit`.
- Feature layers may pass analytics metadata such as `analyticsId`, but the component must not call GA4, Meta, TikTok, or other vendors directly.

## Visual Regression Rule

Every component must have Storybook states that are suitable for screenshot baselines. Visual regression baselines are required before Phase 3 homepage work begins.
## Global Component Rules

- Components must support House, Faris, and Laaj contexts through tokens.
- Components must not hard-code brand-specific colors unless they are logo/asset exceptions.
- Components must be accessible by default.
- Components must be responsive from 360 px mobile upward and reviewed at the approved viewport matrix.
- Components must avoid layout shift and reserve stable dimensions.
- Components must not load heavy client JavaScript unless required.
- Storefront components should be Server Components unless interactive.
- Interactive children should be isolated as Client Components.

## Storybook ID Convention

Use this format:

```text
category/component-name
```

Examples:

- `navigation/navbar`
- `commerce/product-card`
- `product/product-gallery`
- `feedback/empty-state`

## Prop Naming Rules

- Use clear descriptive names.
- Boolean props should read naturally: `isLoading`, `isDisabled`, `isActive`.
- Prefer `variant`, `size`, `tone`, `brandContext` for repeated patterns.
- Avoid vague props such as `custom`, `type2`, `data`, or `content` unless the object is typed clearly.

## Performance Budgets

- Primitive components: no heavy dependencies.
- Product card: must not cause layout shift.
- Navbar: must not block LCP.
- Search overlay: lazy load heavy search logic.
- Product gallery: lazy load non-active media.
- Admin charts: lazy load chart library.
- Landing builder: admin-only bundle, never in public storefront bundle.

## Accessibility Baseline

Every interactive component must support:

- Keyboard access
- Focus-visible state
- Accessible name
- ARIA only when semantic HTML is insufficient
- Reduced motion where animated
- Screen-reader-safe loading and error states

## AI Generation Rules

AI agents must:

- Use this spec before generating components.
- Prefer existing primitives.
- Avoid inventing new visual styles.
- Add Storybook stories for new components.
- Add tests for meaningful states.
- Keep brand theming token-based.

# Core Component Specs

## 1. Navbar

Storybook ID: `navigation/navbar`

### Purpose

Global navigation for desktop storefront routes.

### Anatomy

- Logo/mark
- Primary nav links
- Brand links: Faris, Laaj
- Search trigger
- Account trigger
- Wishlist trigger
- Bag trigger
- Mega menu trigger

### Props

- `brandContext: 'house' | 'faris' | 'laaj' | 'campaign'`
- `isTransparent?: boolean`
- `cartCount?: number`
- `wishlistCount?: number`
- `activePath?: string`
- `navigationItems: NavigationItem[]`

### Variants

- House
- Faris
- Laaj
- Transparent hero
- Solid scrolled
- Campaign landing minimal

### States

- Default
- Hover
- Active link
- Search open
- Mega menu open
- Scrolled
- Loading counts

### Responsive Rules

- Desktop: full nav.
- Tablet: reduce secondary links.
- Mobile: hidden in favor of top bar + drawer + bottom nav.

### Accessibility

- Use `nav` landmark.
- Icon buttons require labels.
- Mega menu must be keyboard navigable.
- Escape closes overlays.

### Animation

- Background transition on scroll: 180 ms.
- Mega menu open: opacity + translate, no layout shift.

### Performance Budget

- No search engine bundle loaded until search opens.
- No mega menu images above critical hero unless optimized.

### Test Cases

- Renders correct brand context.
- Opens/closes mega menu by keyboard.
- Shows cart count.
- Transparent mode has contrast-safe fallback.

## 2. Mobile Bottom Navigation

Storybook ID: `navigation/mobile-bottom-navigation`

### Purpose

Primary mobile navigation for core shopping flows.

### Anatomy

- Home
- Search
- Collection
- Wishlist
- Bag

### Props

- `activeItem`
- `cartCount`
- `wishlistCount`
- `brandContext`

### Variants

- House
- Faris
- Laaj

### States

- Default
- Active
- Badge count
- Disabled during checkout if needed

### Accessibility

- Use labels with icons.
- Minimum tap target 44 px.

### Performance Budget

- Static lightweight component.

## 3. Mobile Drawer

Storybook ID: `navigation/mobile-drawer`

### Purpose

Mobile expanded navigation and account/support access.

### Anatomy

- Header
- Close button
- Brand links
- Collection links
- Account links
- Support/legal links

### Props

- `open`
- `onOpenChange`
- `brandContext`
- `items`

### Accessibility

- Use Radix Dialog/Drawer primitive.
- Trap focus.
- Restore focus on close.

## 4. Search Overlay

Storybook ID: `navigation/search-overlay`

### Purpose

Fast search entry with instant, AI-ready, and brand-aware suggestions.

### Anatomy

- Search input
- Recent searches
- Popular searches
- Suggestions
- Product results
- Empty state
- Loading state

### Props

- `brandContext`
- `initialQuery?`
- `popularTerms`
- `recentTerms`

### States

- Empty
- Typing
- Loading
- Results
- No results
- Error

### Accessibility

- Input auto focus when opened.
- Results announced politely.
- Keyboard navigation for results.

### Performance Budget

- Lazy load overlay.
- Debounce search.
- Keep result images optimized.

## 5. Hero

Storybook ID: `marketing/hero`

### Purpose

Cinematic first impression for homepage, brand page, campaign page, or landing page.

### Anatomy

- Background image/video
- Eyebrow optional
- H1
- Supporting copy
- Primary CTA
- Secondary CTA optional
- Scroll/next-section hint optional

### Props

- `brandContext`
- `media`
- `title`
- `eyebrow?`
- `description?`
- `primaryAction?`
- `secondaryAction?`
- `tone: 'light' | 'dark'`

### Variants

- Homepage hero
- Faris hero
- Laaj hero
- Campaign hero
- Landing hero

### Responsive Rules

- Text must not overflow image area.
- Next section hint must be visible.
- Mobile crop must preserve product/person focus.

### Accessibility

- Text contrast required.
- Avoid text embedded inside image.
- Media needs alt or decorative handling.

### Performance Budget

- Hero image may be priority if first viewport.
- Video must not autoplay with sound.
- Provide poster image.

## 6. Brand Gateway

Storybook ID: `marketing/brand-gateway`

### Purpose

Route visitors into Faris or Laaj with clear brand identity.

### Anatomy

- Brand name
- Brand description
- Image
- CTA
- Optional featured categories

### Props

- `brand: 'faris' | 'laaj'`
- `title`
- `description`
- `image`
- `href`
- `categories?`

### Variants

- Split layout
- Full-bleed editorial
- Compact mobile

### Test Cases

- Faris content links to `/faris`.
- Laaj content links to `/laaj`.
- Theme tokens match brand.

## 7. Campaign Banner

Storybook ID: `marketing/campaign-banner`

### Purpose

Promote seasonal or product campaign without noisy discount language.

### Anatomy

- Campaign image
- Campaign name
- Short copy
- CTA
- Optional product links

### Variants

- Dark cinematic
- Light editorial
- Product launch
- Eid campaign

### Performance Budget

- Must support SSR/static landing page output.

## 8. Product Card

Storybook ID: `commerce/product-card`

### Purpose

Display a product in grids, rails, recommendations, and collection pages.

### Anatomy

- Product image
- Secondary hover image optional
- Brand label
- Product name
- Price
- Variant swatches
- Wishlist button
- Badge optional

### Props

- `product: ProductSummary`
- `brandContext`
- `showWishlist?: boolean`
- `showSwatches?: boolean`
- `priorityImage?: boolean`

### Variants

- Default grid
- Compact rail
- Editorial large
- Recommendation
- Skeleton

### States

- Default
- Hover
- Image loading
- Wishlist selected
- Sold out
- New arrival
- Low stock

### Responsive Rules

- Stable aspect ratio.
- No text overflow.
- Swatches wrap safely.

### Accessibility

- Product link includes product name.
- Wishlist has label.
- Color swatches need accessible names.

### Performance Budget

- Use optimized images.
- Avoid client component unless wishlist interaction is isolated.

## 9. Product Grid

Storybook ID: `commerce/product-grid`

### Purpose

Responsive product layout for collections and search.

### Props

- `products`
- `columns?`
- `brandContext`
- `loading?`
- `emptyState?`

### Responsive Rules

- Mobile: 2 columns when product photography supports it; otherwise 1 for editorial sections.
- Tablet: 3 columns.
- Desktop: 4 columns or editorial rhythm.

## 10. Product Gallery

Storybook ID: `product/product-gallery`

### Purpose

Show product images and video clearly for inspection.

### Anatomy

- Main media
- Thumbnails
- Video item optional
- Zoom control
- Swipe controls on mobile

### States

- Image loading
- Video loading
- Zoom open
- Error fallback

### Accessibility

- Keyboard thumbnail navigation.
- Alt text for each media item.
- Zoom modal focus trap.

### Performance Budget

- Load active image first.
- Lazy load non-visible images.

## 11. Variant Selector

Storybook ID: `product/variant-selector`

### Purpose

Select size, color, fabric, or other product variant.

### Props

- `options`
- `selectedValue`
- `onChange`
- `type: 'size' | 'color' | 'fabric' | 'fit'`

### Accessibility

- Use radio group behavior where appropriate.
- Disabled variants must explain availability.

## 12. Size Guide

Storybook ID: `product/size-guide`

### Purpose

Help customers choose correct size and reduce returns.

### Anatomy

- Size table
- Measurement instructions
- Fit notes
- Brand-specific guidance
- Unit toggle optional

### Variants

- Faris menswear
- Laaj womenswear
- Generic accessories

## 13. Fabric Story

Storybook ID: `product/fabric-story`

### Purpose

Explain fabric quality, feel, durability, and care in a premium editorial way.

### Anatomy

- Fabric title
- Short story
- Composition
- Care instructions
- Detail image optional

### Rule

Fabric story must strengthen luxury perception without becoming long or technical beyond customer value.

## 14. Sticky Add To Bag

Storybook ID: `commerce/sticky-add-to-bag`

### Purpose

Keep primary purchase action available on product pages.

### Responsive Rules

- Desktop: sticky side or bottom depending layout.
- Mobile: bottom sticky bar above mobile nav where appropriate.

### Accessibility

- Must be reachable by keyboard.
- Disabled state explains missing selection.

## 15. Filter Drawer

Storybook ID: `commerce/filter-drawer`

### Purpose

Filter collections/search results.

### Anatomy

- Filter groups
- Apply button
- Clear all
- Result count

### Props

- `filters`
- `selectedFilters`
- `onApply`
- `onClear`

### Accessibility

- Drawer focus trap.
- Checkbox/radio groups labeled.

## 16. Sort Menu

Storybook ID: `commerce/sort-menu`

### Purpose

Sort product listings.

Options:

- Featured
- Newest
- Price low to high
- Price high to low
- Best selling

## 17. Cart Drawer

Storybook ID: `commerce/cart-drawer`

### Purpose

Show current cart and route to checkout.

### Anatomy

- Items
- Quantity controls
- Remove action
- Subtotal
- Delivery note
- Checkout CTA
- Empty state

### Performance Budget

- Lazy load drawer logic.
- Keep product images small.

## 18. Checkout Shell

Storybook ID: `checkout/checkout-shell`

### Purpose

Structure checkout into calm, low-friction steps.

### Anatomy

- Contact
- Delivery address
- Shipping method
- Payment method
- Review
- Order summary

### Bangladesh Rules

- BDT display.
- bKash/Nagad/SSLCommerz/card-ready UI.
- District/thana/area address support.

## 19. Account Dashboard

Storybook ID: `account/dashboard`

### Purpose

Customer account home.

Sections:

- Recent orders
- Wishlist
- Addresses
- Loyalty/store credit future
- Settings

## 20. Journal Card

Storybook ID: `editorial/journal-card`

### Purpose

Preview editorial stories, lookbooks, and campaign content.

### Rules

- Image-first.
- Calm typography.
- Link to products when relevant.

## 21. Footer

Storybook ID: `navigation/footer`

### Purpose

Global footer for navigation, trust, legal, support, social, and newsletter.

### Anatomy

- Brand mark
- Shop links
- Brand links
- Support links
- Legal links
- Social links
- Newsletter

## 22. Button

Storybook ID: `primitives/button`

### Purpose

Reusable action primitive.

### Variants

- Primary
- Secondary
- Outline
- Ghost
- Link
- Danger admin-only

### States

- Default
- Hover
- Focus-visible
- Active
- Disabled
- Loading

### Accessibility

- Must preserve accessible name during loading.

## 23. Icon Button

Storybook ID: `primitives/icon-button`

### Purpose

Compact icon action.

### Required Prop

- `ariaLabel`

## 24. Input

Storybook ID: `forms/input`

### Purpose

Base input for forms.

### States

- Default
- Focus
- Error
- Success
- Disabled
- Loading

## 25. Select

Storybook ID: `forms/select`

### Purpose

Accessible option selection.

Use Radix Select where appropriate.

## 26. Modal

Storybook ID: `overlays/modal`

### Purpose

Focused overlay task.

### Accessibility

- Focus trap.
- Escape close when safe.
- Label and description.

## 27. Drawer

Storybook ID: `overlays/drawer`

### Purpose

Mobile-friendly overlay panel.

Used for:

- Menu
- Filters
- Cart
- Size guide on mobile

## 28. Tabs

Storybook ID: `primitives/tabs`

### Purpose

Switch related content sections.

Use for product details, admin modules, and account sections.

## 29. Accordion

Storybook ID: `primitives/accordion`

### Purpose

Progressively disclose content.

Use for FAQ, product details, delivery/returns.

## 30. Breadcrumb

Storybook ID: `navigation/breadcrumb`

### Purpose

Show location and support SEO.

### Rules

- Use semantic links.
- Add breadcrumb JSON-LD on relevant pages.

## 31. Pagination / Load More

Storybook ID: `navigation/pagination`

### Purpose

Navigate product lists.

Rules:

- Prefer load more for product browsing where SEO remains covered.
- Keep canonical URLs correct.

## 32. Empty State

Storybook ID: `feedback/empty-state`

### Purpose

Guide users when no data exists.

Examples:

- Empty cart
- Empty wishlist
- No search results
- No orders

## 33. Error State

Storybook ID: `feedback/error-state`

### Purpose

Recover from failed loading or failed actions.

Rules:

- Calm copy.
- Retry where useful.
- No raw technical messages to customers.

## 34. Loading Skeleton

Storybook ID: `feedback/loading-skeleton`

### Purpose

Preserve layout during loading.

Rules:

- Match final dimensions.
- Avoid layout shift.

## 35. Newsletter

Storybook ID: `marketing/newsletter`

### Purpose

Collect email signups in a premium, non-intrusive way.

### Rules

- Short copy.
- Clear consent.
- No aggressive popups by default.

## 36. Landing Block

Storybook ID: `landing/block`

### Purpose

Reusable block primitive for Landing Experience Builder output.

### Variants

- Hero
- Product grid
- Editorial text
- Video
- CTA
- Testimonial/trust
- Campaign offer

### Performance Budget

Public landing block output must be SSR/static and lightweight.

## 37. Admin Stat Card

Storybook ID: `admin/stat-card`

### Purpose

Display key Command Center metrics.

### Rules

- Dense but calm.
- Avoid decorative dashboard styling.

## 38. Admin Data Table

Storybook ID: `admin/data-table`

### Purpose

Display products, orders, customers, campaigns, and logs.

### Features

- Sort
- Filter
- Pagination
- Row actions
- Bulk actions
- Loading state
- Empty state

## 39. Approval Panel

Storybook ID: `admin/approval-panel`

### Purpose

Human approval for AI-generated changes, campaigns, and publishing workflows.

### States

- Pending
- Approved
- Rejected
- Needs changes

## 40. AI Workspace Diff Viewer

Storybook ID: `admin/ai-workspace-diff-viewer`

### Purpose

Show code/content/design diffs before human approval.

### Rules

- Must be clear.
- Must show affected surface.
- Must support rollback context.

# Component Completion Checklist

A component is production-ready only when it has:

- Spec completed
- Token usage verified
- Responsive behavior checked
- Accessibility checked
- Loading/error/empty states where relevant
- Storybook stories
- Tests for meaningful interaction
- No unintended brand hard-coding
- No unnecessary client bundle weight
- Public API and props contract documented
- Accessibility gate passed
- Responsive QA matrix checked
- Bundle budget checked or exception documented
- Visual regression-ready Storybook state exists
