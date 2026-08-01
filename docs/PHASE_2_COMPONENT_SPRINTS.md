# Porsion Studio Phase 2 Component Sprints

## Rule

Do not build homepage, product pages, collection pages, or campaign pages during Phase 2. Build reusable components only.

No new package may be added by an AI agent without a written dependency proposal that explains why it is needed, expected bundle impact, alternatives, and maintenance risk.

## Enterprise Component Gate

Every component in Sprint 2 must pass this gate before it is considered complete.

### Component Contract

Each component must define:

- Public API
- Props interface
- Controlled or uncontrolled mode where relevant
- Compound component pattern where relevant
- Deprecation strategy for future breaking changes

### Accessibility Gate

Each component must support:

- WCAG 2.2 AA intent
- Keyboard-only use for interactive states
- Screen-reader-safe labels, descriptions, errors, and loading states
- Focus trap for modal, drawer, popover, and dialog surfaces
- Reduced motion support for animated states
- RTL-ready structure for future international expansion

### Performance Gate

Each component must be:

- Tree-shakeable
- Lazy-load friendly when heavy or rarely used
- Zero layout shift by default
- Minimal client JavaScript
- Free from unnecessary rerender patterns

### Bundle Budget

Initial budgets:

- Primitive component: <= 5 KB gzip
- Form component: <= 10 KB gzip
- Heavy interactive component: separate chunk where practical
- Admin/builder-only component: never included in public storefront bundles

### Responsive QA Viewports

Each reusable component must be reviewed at:

- 360 px
- 390 px
- 768 px
- 1024 px
- 1280 px
- 1536 px

### Internationalization Rule

Components must not hardcode customer-facing text. Text must come from props, slots, children, or translation keys.

### Analytics Hook Rule

Primitive and form components must not include analytics code directly. They may expose stable event hooks such as `onPress`, `onValueChange`, `onSubmit`, or `analyticsId` so analytics can be attached at the feature layer.

### Visual Regression Rule

Storybook must provide screenshot-ready states for baseline capture. Baselines are required before Phase 3 begins.

## Sprint 2.1 - Primitive Components

Status: Done and verified

Components:

- Button
- IconButton
- Link
- Badge
- Chip
- Divider
- Spinner
- Skeleton
- Avatar
- Logo
- Container
- Section
- Stack
- Grid
- Text
- Heading

Verification:

- Storybook stories exist
- Unit tests exist
- 17 unit tests pass
- TypeScript passes
- Storybook smoke-test passes
- Storybook static build passes

## Sprint 2.2 - Form System

Status: Done and verified

Core components:

- Input
- Textarea
- SearchInput
- PasswordInput
- OTPInput
- Select
- Combobox
- Autocomplete
- MultiSelect
- Checkbox
- Radio
- Switch
- Toggle Group
- Number Input
- Quantity Stepper
- Slider
- Date Picker
- Coupon Input
- Promo Code Input
- Gift Card Input

Future component:

- Time Picker

Required states:

- Default
- Focus
- Filled
- Hover
- Disabled
- Readonly
- Required
- Invalid
- Success
- Loading

Required component contracts:

- Controlled mode for value-driven controls
- Uncontrolled mode where native form behavior is useful
- `name`, `id`, `value`, `defaultValue`, `disabled`, `readOnly`, `required`, `aria-describedby`, and validation props where relevant
- Stable event hooks for form analytics at the feature layer

Accessibility rules:

- Proper label association
- `aria-describedby`
- `aria-invalid`
- Keyboard navigation
- Screen reader support
- Visible focus ring
- Error association
- Required and invalid state announcement

Mobile rules:

- Minimum touch target: 44 by 44 px
- Numeric keyboard for phone, OTP, quantity, and numbers
- Email keyboard where relevant
- Address autocomplete ready

Theme rules:

- House, Faris, and Laaj must use the same components
- Theme changes must come from design tokens only
- No hardcoded brand-specific component forks

Verification:

- Form Foundation Layer exists under `packages/ui/src/forms`
- 20 reusable form components exist
- 20 form Storybook story files exist
- 20 form unit test files exist
- Full workspace TypeScript passes
- Full workspace lint passes
- Full workspace tests pass
- Production build passes
- Storybook smoke-test passes
- Storybook static build passes
- No page-specific logic added
- No business logic or API calls added
- No new package added
- No hardcoded component colors outside token definitions
## Sprint 2.2.5 - QA & Stabilization

Status: Done and verified

Purpose:

Stabilize Sprint 2.1 and Sprint 2.2 before moving to Navigation System.

Scope:

- Component audit
- Accessibility audit
- Bundle analysis
- Design token audit
- Storybook review
- API consistency check
- Responsive QA at required viewports
- Visual regression baseline capture
- Dependency audit

Exit criteria:

- `pnpm install` green
- `pnpm typecheck` green
- `pnpm lint` green
- `pnpm test` green
- `pnpm build` green
- `pnpm storybook` green
- `pnpm storybook:build` green
- No page-specific logic
- No hardcoded component colors outside token definitions
- Automated Storybook QA report exists at `docs/qa/sprint-2.2.5/storybook-qa-report.json`
- Visual baseline manifest exists at `docs/qa/sprint-2.2.5/visual-baseline-manifest.json`
- Current Phase 2 visual baseline screenshots exist for 390 px and 1280 px
- Accessibility violations: 0
- Responsive overflow failures: 0
- Touch target failures: 0

Stabilization fixes:

- Tailwind v4 scans `packages/ui/src` for Storybook builds
- Storybook theme preview uses `data-brand`
- Muted text and on-accent tokens meet contrast requirements
- Compact interactive controls meet the 44 px touch target rule
- Native label-wrapped checkbox/radio/switch controls are handled correctly by the QA audit

## Sprint 2.3 - Navigation System

Status: Done and verified

Components:

- Desktop Navbar
- Mobile Navbar
- Mega Menu
- Breadcrumb
- Tabs
- Pagination
- Search Overlay
- Command Palette

Foundation:

- Shared navigation types in `packages/ui/src/navigation/types`
- Shared navigation utilities in `packages/ui/src/navigation/utils`
- Public barrel export from `packages/ui/src/navigation`
- Root UI export available from `@porsion/ui`

Stabilization fixes:

- Desktop navbar starts at the wider desktop breakpoint to avoid tablet overflow.
- Mobile navbar labels truncate safely while keeping 44 px touch targets.
- Breadcrumb links keep 44 px minimum touch targets.
- Pagination wraps on narrow screens instead of forcing horizontal overflow.
- Mega menu, search overlay, and command palette headings use contrast-safe text tokens.
- Navigation Storybook layouts reflect their real usage context.

Verification:

- 8 navigation component folders exist.
- 8 navigation Storybook story files exist.
- 8 navigation unit test files exist.
- Full workspace TypeScript passes.
- Full workspace lint passes.
- Full workspace tests pass: 44 test files, 57 tests passing.
- Production build passes.
- Storybook smoke-test passes.
- Storybook static build passes.
- Storybook QA passes across 44 default stories, 78 visual baseline stories, and 156 screenshots.
- Accessibility violations: 0.
- Responsive overflow failures: 0.
- Touch target failures: 0.
- No page-specific logic added.
- No business logic or API calls added.
- No new package added.
- No hardcoded component colors outside token definitions.

## Sprint 2.4 - Feedback System

Status: Done and verified

Components:

- Toast
- Alert
- InlineAlert
- Banner
- EmptyState
- ErrorState
- SuccessState
- LoadingState
- ProgressBar
- CircularProgress
- StepIndicator
- StatusBadge
- StatusPill

Foundation:

- Shared feedback tone types in `packages/ui/src/feedback/types`
- Shared tone, role, live-region, and progress utilities in `packages/ui/src/feedback/utils`
- Public barrel export from `packages/ui/src/feedback`
- Root UI export available from `@porsion/ui`

Design rules:

- Calm, low-noise surfaces for luxury UX.
- Info, success, warning, error, and neutral tone support where applicable.
- Copy remains prop-driven for i18n and marketing control.
- Icons are slot-based; no new icon dependency was added.
- Motion stays soft through standard transition classes and global reduced-motion handling.

Accessibility rules:

- Toast, Alert, InlineAlert, Banner, ErrorState, SuccessState, and LoadingState use appropriate live-region semantics.
- Error tone defaults to assertive alert behavior.
- Non-error feedback defaults to polite status behavior.
- Dismiss controls keep 44 px touch targets and screen-reader labels.
- Progress components expose `progressbar` semantics.
- StepIndicator marks the current step with `aria-current="step"`.

Verification:

- 13 feedback component folders exist.
- 13 feedback Storybook story files exist.
- 13 feedback unit test files exist.
- Full workspace TypeScript passes.
- Full workspace lint passes.
- Full workspace tests pass: 57 test files, 74 tests passing.
- Production build passes.
- Storybook smoke-test passes.
- Storybook static build passes.
- Storybook QA passes across 57 default stories, 91 visual baseline stories, and 182 screenshots.
- Accessibility violations: 0.
- Responsive overflow failures: 0.
- Touch target failures: 0.
- No page-specific logic added.
- No business logic or API calls added.
- No new package added.
- No hardcoded component colors outside token definitions.

## Sprint 2.5 - Overlay System

Status: Done and verified

Components:

- Modal
- Drawer
- BottomSheet
- Popover
- Tooltip
- Dialog
- ConfirmDialog

Foundation:

- Shared overlay types in `packages/ui/src/overlays/types`
- Shared overlay hooks in `packages/ui/src/overlays/hooks`
- Shared overlay placement and sizing utilities in `packages/ui/src/overlays/utils`
- Public barrel export from `packages/ui/src/overlays`
- Root UI export available from `@porsion/ui`

Accessibility rules:

- Modal, Drawer, BottomSheet, Dialog, and ConfirmDialog use `aria-modal` dialog semantics.
- ConfirmDialog can use `alertdialog` for danger/destructive confirmations.
- Focus trap support exists for modal-style overlays.
- Escape dismissal and backdrop dismissal are supported where `dismissible` is true.
- Scroll lock support exists for modal-style overlays.
- Popover trigger exposes `aria-expanded` and `aria-controls`.
- Tooltip trigger exposes `aria-describedby` while visible.
- Close controls keep 44 px touch targets and screen-reader labels.

Design rules:

- Calm surfaces with restrained backdrop contrast.
- Token-only borders, backgrounds, typography, radius, and focus states.
- No bundled icon dependency; icons/actions remain slot-based.
- No page-specific overlay behavior or commerce flow.

Verification:

- 7 overlay component folders exist.
- 7 overlay Storybook story files exist.
- 7 overlay unit test files exist.
- Full workspace TypeScript passes.
- Full workspace lint passes.
- Full workspace tests pass: 64 test files, 86 tests passing.
- Production build passes.
- Storybook smoke-test passes.
- Storybook static build passes.
- Storybook QA passes across 64 default stories, 98 visual baseline stories, and 196 screenshots.
- Accessibility violations: 0.
- Responsive overflow failures: 0.
- Touch target failures: 0.
- No page-specific logic added.
- No business logic or API calls added.
- No new package added.
- No hardcoded component colors outside token definitions.

## Sprint 2.6 - Commerce Components

Status: Done and verified

Components:

- ProductCard
- ProductImage
- ProductGallery
- ProductTitle
- ProductPrice
- ProductBadge
- VariantSelector
- ColorSwatch
- SizeSelector
- AddToBagButton
- WishlistButton
- CompareButton
- Rating
- ReviewSummary
- StockIndicator
- DeliveryBadge
- ReturnBadge
- ProductCarousel
- RelatedProductsStrip
- RecentlyViewedStrip

Reused component:

- QuantityStepper remains in the Form System and is reused for commerce quantity flows instead of being duplicated.

Foundation:

- Shared commerce types in `packages/ui/src/commerce/types`
- Shared commerce utilities in `packages/ui/src/commerce/utils`
- Public barrel export from `packages/ui/src/commerce`
- Root UI export available from `@porsion/ui`

Contract rules:

- ProductCard contains no add-to-cart, wishlist, inventory, analytics, pricing, coupon, or API logic.
- Commerce actions emit callback props only.
- Product copy, labels, prices, statuses, and review text are passed from props for i18n and marketing control.
- Product images reserve aspect-ratio space, lazy-load by default, support responsive image attributes, and can show skeleton loading.
- Selectors support controlled and uncontrolled usage.
- Quantity uses the existing reusable QuantityStepper from forms.

Accessibility rules:

- ProductCard keeps product navigation separate from action buttons to avoid nested interactive controls.
- ProductGallery thumbnails are keyboard-accessible listbox options.
- Variant, color, and size selectors use radio-group semantics.
- Rating exposes an accessible text label.
- Carousel controls have explicit labels and 44 px touch targets.

Verification:

- 20 commerce component folders exist.
- 20 commerce Storybook story files exist.
- 20 commerce unit test files exist.
- Full workspace TypeScript passes.
- Full workspace lint passes.
- Full workspace tests pass: 84 test files, 106 tests passing.
- Production build passes.
- Storybook smoke-test passes.
- Storybook static build passes.
- Storybook QA passes across 84 default stories, 118 visual baseline stories, and 236 screenshots.
- Accessibility violations: 0.
- Responsive overflow failures: 0.
- Touch target failures: 0.
- No page-specific logic added.
- No product page, collection page, cart page, checkout page, or homepage added.
- No business logic or API calls added.
- No new package added.
- No hardcoded component colors outside token definitions.

## Sprint 2.6.5 - Commerce Design Review & API Freeze

Status: Done and frozen

Purpose:

Freeze commerce UI contracts before Editorial Components. This is not a repeated full QA sprint.

Scope reviewed:

- ProductCard public API
- ProductCard variants
- Product image ratio contract
- Skeleton loading UX
- Commerce selector keyboard contract
- Product carousel reduced-motion behavior
- Commerce token usage
- Duplicate component risk
- Runtime dependency contract for Lucide-backed commerce action icons

Freeze decisions:

- Commerce UI is v1 Stable for Phase 3 page assembly.
- ProductCard variants are locked as `standard`, `compact`, and `editorial`.
- ProductCard exposes `imageRatio` for `portrait`, `square`, and `wide` image locks.
- ProductCard action labels are optional and only render when paired with callback props.
- ProductCard non-link fallback uses a semantic `role="button"` wrapper instead of nesting headings inside a native button.
- ProductCarousel respects reduced-motion users by switching smooth scroll to auto scroll.
- RelatedProductsStrip and RecentlyViewedStrip remain accepted semantic wrappers around ProductCarousel, not separate logic implementations.
- QuantityStepper remains owned by the Form System and is reused by commerce flows.
- No additional foundation sprint is planned before real page work.

Lightweight verification:

- `pnpm typecheck` green
- `pnpm lint` green
- `pnpm test` green: 84 test files, 108 tests passing
- `pnpm build` green
- No commerce business logic in `packages/ui/src/commerce`
- No page-specific logic in `packages/ui/src/commerce`
- No hardcoded commerce colors outside token-driven values

## Sprint 2.7 - Editorial Components

Status: Done and verified

Components:

- Hero
- BrandGateway
- CampaignBlock
- EditorialCard
- QuoteBlock
- SplitFeature
- ImageNarrative
- MediaBlock
- CTASection

Foundation:

- Shared editorial media types in `packages/ui/src/editorial/types`
- Shared editorial media rendering utilities in `packages/ui/src/editorial/utils`
- Public barrel export from `packages/ui/src/editorial`
- Root UI export available from `@porsion/ui`

Rules preserved:

- No homepage added.
- No Faris page added.
- No Laaj page added.
- No collection, product, cart, checkout, or account page added.
- No API calls, cart flow, checkout flow, or business logic added.
- Copy, links, actions, and media are prop-driven.
- Styling remains token-based through CSS variables.

Lean verification:

- `pnpm typecheck` green
- `pnpm lint` green
- `pnpm test` green: 93 test files, 117 tests passing
- `pnpm build` green
- `pnpm storybook` green
- `pnpm storybook:build` green
- No full Storybook visual QA was repeated in Sprint 2.7.
- Static editorial audit found no API calls, cart flow, checkout flow, storage usage, or hardcoded hex/rgb/hsl colors.

## Sprint 2.8 - Layout Components

Status: Done and verified

Purpose:

Close Phase 2 with only the minimum layout pieces needed for Phase 3 page assembly. This sprint intentionally did not create another layout framework.

Added components:

- PageShell
- SidebarLayout
- FooterLayout
- ResponsiveSlot

Reused existing primitives instead of duplicating them:

- Section
- Container
- Grid
- Stack

Rules preserved:

- No homepage added.
- No Faris page added.
- No Laaj page added.
- No collection, product, cart, checkout, account, or campaign page added.
- No business logic, API call, cart flow, checkout flow, storage usage, or analytics vendor code added.
- No new package added.
- Styling remains token-based through CSS variables.

Final QA fixes:

- Footer links now keep 44 px touch target width.
- PageShell skip link keeps a 44 px focusable footprint while staying visually hidden until focus.
- Editorial action labels use contrast-safe text tokens instead of small accent text.

Verification:

- `pnpm typecheck` green.
- `pnpm lint` green.
- `pnpm test` green: 97 test files, 121 tests passing.
- `pnpm build` green.
- `pnpm storybook` green.
- `pnpm storybook:build` green.
- `pnpm qa:storybook` green: 97 default stories, 131 visual baseline stories, 262 screenshots.
- Accessibility violations: 0.
- Responsive overflow failures: 0.
- Touch target failures: 0.
- Static layout/editorial audit found no API calls, cart flow, checkout flow, storage usage, or hardcoded hex/rgb/hsl component colors.

Phase 2 decision:

Sprint 2.8 is the final component sprint. Phase 3 Homepage implementation starts next.

## Phase 3 Rule - No New Shared Component

Default behavior during Homepage implementation is to compose existing components. If a new shared component appears necessary, first document why the existing primitives, navigation, commerce, editorial, and layout components cannot cover the need.

## Component Definition Of Done

Each component needs:

- Purpose
- Public API and props interface
- Controlled/uncontrolled rules where relevant
- Variants
- States
- Accessibility contract
- Responsive rules
- Animation and reduced motion behavior
- Design tokens
- Performance and bundle budget
- Storybook story
- Unit test
- Deprecation note when public API changes

## Phase 2 Completion Gate

Phase 2 is complete only when:

- 60+ reusable components exist, with expanded scope documented when a sprint requires more components
- TypeScript strict mode is green
- Storybook coverage exists for every component
- Unit tests cover meaningful behavior
- Accessibility pass is complete
- Responsive QA pass is complete
- Build is green
- Bundle budget is within limits or explicitly accepted
- Visual regression baseline exists
- No page-specific logic exists

