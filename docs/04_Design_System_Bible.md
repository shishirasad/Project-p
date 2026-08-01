# Porsion Studio Design System Bible

## Status

Version: v1.0 execution-ready draft

This document is ready to guide Figma setup, token creation, Storybook, and frontend component implementation.

## Purpose

This document defines the shared design system used by designers, developers, marketers, and AI agents.

The design system must support:

- One domain
- Multiple brand experiences
- Quiet luxury positioning
- Bangladesh-first launch
- International expansion
- Fast implementation
- Accessible components
- Token-driven theming

## Design System Principles

1. **Luxury through restraint:** spacing, typography, product imagery, and material details should carry the experience.
2. **One component library:** do not duplicate components for Faris and Laaj.
3. **Theme through tokens:** brand variation must come from tokens, imagery, copy, and context.
4. **Accessible by default:** Radix/shadcn primitives must be configured with strong focus states and keyboard support.
5. **Performance aware:** visual polish must not add unnecessary JavaScript.
6. **Marketing ready:** components must support campaign pages, UTM context, and personalization zones.

## Brand Themes

### House

Use for parent Porsion Studio surfaces.

Mood:

- Timeless
- Editorial
- Architectural
- Calm
- Premium

### Faris

Use for menswear.

Mood:

- Timeless quiet luxury for men
- Structured
- Confident
- Old-money restraint
- Refined materials

### Laaj

Use for womenswear.

Mood:

- Refined womenswear
- Elegant
- Graceful
- Modern
- Soft strength

## Token Architecture

Token layers:

1. **Core tokens:** raw values such as color, spacing, type size.
2. **Semantic tokens:** purpose-based values such as background, text, border, accent.
3. **Component tokens:** button height, card padding, nav height, modal width.
4. **Brand tokens:** House, Faris, Laaj overrides.

Token output targets:

- Figma variables
- CSS variables
- Tailwind CSS v4 theme mapping
- Storybook theme switcher
- JSON repository

## Color Tokens

### Core Palette

| Token | Value | Use |
| ----- | ----- | --- |
| `ink` | `#141414` | Primary text |
| `charcoal` | `#242424` | Secondary dark text, dark UI |
| `paper` | `#F7F6F1` | Warm page background |
| `white` | `#FFFFFF` | Clean surface |
| `stone` | `#D9D6CE` | Dividers, soft borders |
| `smoke` | `#8F8C84` | Muted text |
| `silk` | `#ECE7DF` | Soft Laaj surface |
| `brass` | `#9B7A4A` | Luxury accent |
| `forest` | `#24342B` | Faris accent |
| `oxblood` | `#5B2530` | Laaj accent |
| `mineral` | `#D9E3E2` | Faris hover/soft surface |
| `error` | `#B42318` | Error |
| `success` | `#1E6B45` | Success |
| `warning` | `#A15C07` | Warning |
| `info` | `#245B7A` | Informational |

### Semantic Color Tokens

| Token | House | Faris | Laaj |
| ----- | ----- | ----- | ---- |
| `background` | paper | white | white |
| `surface` | white | paper | paper |
| `text` | ink | ink | ink |
| `text-muted` | smoke | smoke | smoke |
| `border` | stone | stone | stone |
| `accent` | brass | forest | oxblood |
| `accent-secondary` | forest | brass | brass |
| `hover-surface` | silk | mineral | silk |

## Typography Tokens

### Font Roles

- Display: hero, campaign, editorial moments
- UI Sans: navigation, product data, buttons, forms
- Editorial Serif: selective storytelling and luxury contrast
- Mono: code/admin technical values only

### Type Scale

| Token | Desktop | Mobile | Use |
| ----- | ------- | ------ | --- |
| `display-xl` | 88 | 52 | Cinematic hero |
| `display-lg` | 72 | 46 | Campaign hero |
| `display-md` | 56 | 40 | Page hero |
| `heading-xl` | 44 | 34 | Page title |
| `heading-lg` | 36 | 30 | Section title |
| `heading-md` | 28 | 24 | Card/section heading |
| `body-lg` | 18 | 17 | Editorial body |
| `body` | 16 | 16 | Default text |
| `body-sm` | 14 | 14 | Product meta, helper text |
| `label` | 12 | 12 | UI labels |
| `micro` | 11 | 11 | Badges, small metadata |

Rules:

- Do not use negative letter spacing.
- Do not scale type directly with viewport width.
- Limit font weights to what the design truly needs.
- Body copy must remain readable on mobile.

## Spacing Tokens

Use a 4 px base scale.

| Token | Value |
| ----- | ----- |
| `space-1` | 4 |
| `space-2` | 8 |
| `space-3` | 12 |
| `space-4` | 16 |
| `space-6` | 24 |
| `space-8` | 32 |
| `space-12` | 48 |
| `space-16` | 64 |
| `space-24` | 96 |
| `space-32` | 128 |

## Layout Tokens

| Token | Value |
| ----- | ----- |
| `container-max` | 1440 px |
| `container-editorial` | 1120 px |
| `container-reading` | 720 px |
| `container-checkout` | 1180 px |
| `gutter-mobile` | 16 px |
| `gutter-tablet` | 24 px |
| `gutter-desktop` | 40 px |
| `nav-height-mobile` | 60 px |
| `nav-height-desktop` | 76 px |

## Breakpoints

| Token | Range |
| ----- | ----- |
| `mobile` | 360-767 px |
| `tablet` | 768-1023 px |
| `laptop` | 1024-1279 px |
| `desktop` | 1280-1535 px |
| `wide` | 1536 px and above |

## Radius Tokens

| Token | Value | Use |
| ----- | ----- | --- |
| `radius-none` | 0 | Editorial images, full-width media |
| `radius-xs` | 2 | Tiny controls |
| `radius-sm` | 4 | Buttons, inputs |
| `radius-md` | 6 | Product cards |
| `radius-lg` | 8 | Modals, drawers |
| `radius-full` | 999 | Swatches, avatars only |

Do not use large rounded cards as the default luxury pattern.

## Shadow And Elevation Tokens

Luxury UI should not rely heavily on shadows.

| Token | Value | Use |
| ----- | ----- | --- |
| `shadow-none` | none | Default |
| `shadow-hairline` | `0 0 0 1px rgba(20,20,20,.08)` | Subtle border substitute |
| `shadow-soft` | `0 8px 28px rgba(20,20,20,.08)` | Drawer/modal |
| `shadow-overlay` | `0 18px 60px rgba(20,20,20,.16)` | Important overlays |

## Z-index Tokens

| Token | Value | Use |
| ----- | ----- | --- |
| `z-base` | 0 | Base |
| `z-sticky` | 20 | Sticky product CTA |
| `z-nav` | 40 | Navigation |
| `z-drawer` | 60 | Drawer |
| `z-modal` | 80 | Modal |
| `z-toast` | 100 | Toast |
| `z-command` | 120 | Command palette/admin command |

## Motion Tokens

| Token | Value |
| ----- | ----- |
| `duration-fast` | 120 ms |
| `duration-base` | 180 ms |
| `duration-slow` | 280 ms |
| `duration-page` | 420 ms |
| `ease-standard` | cubic-bezier(.2, .0, .0, 1) |
| `ease-out` | cubic-bezier(.16, 1, .3, 1) |
| `ease-in` | cubic-bezier(.32, 0, .67, 0) |

Rules:

- Prefer opacity and transform.
- Avoid layout-changing animation.
- Respect `prefers-reduced-motion`.
- Motion must communicate quality, not noise.

## Icon System

Default icon library: `lucide-react`.

Rules:

- Icon stroke should be 1.5-2 px depending on size.
- Icon-only buttons require accessible labels.
- Use standard icons for standard actions.
- Do not draw custom icons unless brand-specific.
- Logo mark is not a generic icon.

Common icons:

- Search
- User
- Heart
- ShoppingBag
- Menu
- X
- ChevronDown
- ChevronRight
- SlidersHorizontal
- ArrowLeft
- ArrowRight
- Check
- AlertCircle
- Info

## Button System

### Variants

- `primary`: key action such as Add to Bag
- `secondary`: lower emphasis action
- `ghost`: navigation and subtle action
- `outline`: secondary commerce action
- `link`: inline editorial action
- `danger`: destructive admin action only

### Sizes

- `sm`: compact UI
- `md`: default
- `lg`: checkout/product CTA
- `icon`: square icon button

### States

- Default
- Hover
- Focus-visible
- Active
- Disabled
- Loading

Rules:

- Buttons must not resize when loading.
- Primary buttons should be quiet, not neon or overly glossy.
- Use icons where the action is familiar.

## Input System

Input types:

- Text
- Email
- Password
- Phone
- Search
- Select
- Textarea
- Checkbox
- Radio
- Switch
- OTP/passkey support later

States:

- Default
- Focus
- Filled
- Error
- Success
- Disabled
- Read-only
- Loading

Rules:

- Labels should remain visible.
- Error text must be human and specific.
- Checkout forms must be mobile-friendly.
- Bangladesh address fields need district, thana/area, address details.

## Form System

Form patterns:

- Auth form
- Newsletter form
- Checkout form
- Address form
- Contact/support form
- Review form
- Admin create/edit form
- Landing builder settings form

Rules:

- React Hook Form + Zod.
- Validate on blur or submit depending on context.
- Do not overwhelm users with premature errors.
- Keep helper text short.

## Card System

Card types:

- Product card
- Journal card
- Campaign card
- Trust card
- Admin stat card
- Empty state card

Rules:

- Product cards must have stable dimensions.
- Avoid nesting cards inside cards.
- Avoid decorative card-heavy pages.
- Use cards for repeated items, not page sections.

## Navigation System

Components:

- Navbar
- Mega menu
- Mobile drawer
- Bottom navigation
- Search overlay
- Breadcrumb
- Footer

Rules:

- Navigation must be brand-aware.
- Desktop nav can be transparent over hero only with safe contrast.
- Mobile bottom nav must remain simple.
- Search must be fast and accessible.

## Modal And Drawer System

Use Radix primitives where possible.

Rules:

- Trap focus.
- Restore focus on close.
- Escape key closes when safe.
- Overlay contrast must be sufficient.
- Drawer should be preferred for mobile filters/cart.
- Modal should be used for focused tasks.

## Table System

Tables are mainly for admin surfaces.

Table requirements:

- Sort
- Filter
- Pagination
- Bulk action
- Empty state
- Loading state
- Row action menu
- Responsive fallback

Storefront should avoid dense tables except size guides and order details.

## Empty State System

Empty states must be calm and useful.

Required elements:

- Short title
- Helpful explanation
- Clear action
- Optional secondary link

Examples:

- Empty wishlist
- Empty cart
- No search results
- No orders
- No campaign data

## Loading State System

Use skeletons for:

- Product cards
- Product gallery
- Search results
- Admin tables
- Analytics cards

Rules:

- Skeletons must preserve layout dimensions.
- Avoid large spinners on storefront pages.
- Loading should not cause layout shift.

## Feedback System

Feedback types:

- Toast
- Inline alert
- Form error
- Success confirmation
- Admin notification

Rules:

- Toasts should not hide critical actions.
- Checkout errors must be inline and specific.
- Success messages should be calm.

## Product UI System

Key components:

- ProductCard
- ProductGrid
- ProductGallery
- VariantSelector
- ColorSwatch
- SizeSelector
- SizeGuide
- FabricStory
- StickyAddToBag
- RecommendationRail

Rules:

- Product imagery comes first.
- Product data must be scannable.
- Variant selectors must be accessible.
- Upsell/cross-sell must be subtle.

## Marketing UI System

Key components:

- CampaignHero
- BrandGateway
- LandingHero
- CampaignBanner
- Newsletter
- TrustStrip
- EditorialBlock
- ProductStoryBlock

Rules:

- Campaign pages can be more cinematic.
- Public landing pages must stay lightweight.
- Campaign content must preserve brand context.

## Admin UI System

Admin UI should feel calm, dense, and operational.

Key components:

- StatCard
- DataTable
- FilterBar
- CommandSearch
- StatusBadge
- ActivityTimeline
- ApprovalPanel
- MetricChart

Rules:

- Admin must prioritize clarity and scanning.
- Avoid marketing-style hero sections in admin.
- Use restrained color for status.

## Accessibility Standards

- WCAG 2.2 AA target.
- All interactive elements keyboard accessible.
- Visible focus states required.
- Color contrast must be checked.
- Icon-only actions require labels.
- Reduced motion supported.
- Form errors must be announced.

## Figma Requirements

Figma must include:

- Variables for tokens
- House/Faris/Laaj modes
- Component variants
- Auto layout
- Responsive frames
- Published library
- Usage notes
- Component status labels
- Dev Mode-friendly names

## Storybook Requirements

Every production component should have:

- Default story
- Variants
- States
- Responsive preview
- House/Faris/Laaj examples where relevant
- Accessibility notes
- Usage guidance

## Design Review Checklist

- Does it feel premium and restrained?
- Does it match House/Faris/Laaj context?
- Does it avoid generic marketplace patterns?
- Is it responsive?
- Is it accessible?
- Is it fast to implement?
- Does it support SEO where relevant?
- Does it support marketing/personalization without noise?
