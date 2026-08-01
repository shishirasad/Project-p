# Porsion Studio Figma Design System

## Status

Version: v1.0 setup specification

This is not a new Bible. It is the Figma execution plan for the Frontend Design Bible, Design System Bible, Component Specification Bible, and Design Tokens Repository.

## Purpose

The Figma Design System must give designers, developers, and AI agents one shared visual source of truth before coding begins.

## Figma File Structure

Recommended Figma pages:

1. Cover
2. Brand Foundations
3. Design Tokens
4. Typography
5. Color System
6. Grid & Layout
7. Icons
8. Primitives
9. Forms
10. Navigation
11. Product Components
12. Commerce Components
13. Marketing Components
14. Editorial Components
15. Admin Components
16. Landing Builder Blocks
17. Page Templates
18. Faris Theme
19. Laaj Theme
20. Prototypes
21. Handoff Notes
22. Archive

## Library Modes

Use Figma variables and modes for:

- House
- Faris
- Laaj
- Campaign dark
- Campaign light

Modes must map back to design token names.

## Required Variables

### Color Variables

- background
- surface
- text
- text-muted
- border
- accent
- accent-secondary
- hover-surface
- error
- success
- warning
- info

### Typography Variables

- display-xl
- display-lg
- display-md
- heading-xl
- heading-lg
- heading-md
- body-lg
- body
- body-sm
- label
- micro

### Spacing Variables

- space-1
- space-2
- space-3
- space-4
- space-6
- space-8
- space-12
- space-16
- space-24
- space-32

### Radius Variables

- radius-none
- radius-xs
- radius-sm
- radius-md
- radius-lg
- radius-full

### Effect Variables

- shadow-none
- shadow-hairline
- shadow-soft
- shadow-overlay

## Component Sets

### Primitives

- Button
- Icon Button
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Badge
- Tag
- Tooltip

### Navigation

- Navbar
- Mobile top bar
- Mobile bottom navigation
- Mobile drawer
- Mega menu
- Search overlay
- Breadcrumb
- Footer

### Product And Commerce

- Product card
- Product grid
- Product gallery
- Variant selector
- Size selector
- Color swatch
- Size guide
- Fabric story
- Sticky add to bag
- Cart item
- Cart drawer
- Checkout step
- Order summary

### Marketing And Editorial

- Hero
- Brand gateway
- Campaign banner
- Journal card
- Editorial section
- Newsletter
- Trust strip
- Landing block

### Admin

- Stat card
- Data table
- Filter bar
- Status badge
- Approval panel
- Activity timeline
- AI diff viewer

## Component Variant Requirements

Each Figma component must include:

- Default
- Hover where visualized
- Focus where visualized
- Disabled
- Loading where relevant
- Error where relevant
- Empty where relevant
- House mode
- Faris mode
- Laaj mode
- Mobile variant where layout changes

## Auto Layout Rules

- Use Auto Layout for all reusable components.
- Avoid manual absolute positioning unless required for specific imagery.
- Define min/max widths for responsive components.
- Use component properties for icons, labels, states, and variants.

## Responsive Frames

Required frames:

- Mobile 390 x 844
- Tablet 768 x 1024
- Laptop 1280 x 900
- Desktop 1440 x 1100
- Wide 1728 x 1117

## Page Templates To Design First

1. Homepage
2. Faris brand page
3. Laaj brand page
4. Collection page
5. Product page
6. Search overlay
7. Cart drawer
8. Checkout
9. Journal article
10. Landing page template
11. Admin dashboard shell

## Handoff Requirements

For every component/page:

- Name matches code component name where possible.
- Tokens are used instead of one-off values.
- States are documented.
- Responsive behavior is shown.
- Accessibility notes are included.
- Storybook ID is referenced.
- Any non-token value is explained.

## Figma To Code Rule

Figma is the design source of truth, but code implementation must still follow:

- Frontend Technical Bible
- Design System Bible
- Component Specification Bible
- Design Tokens Repository
- Storybook Documentation

## Review Checklist

- Does it feel like quiet luxury?
- Does it support House, Faris, and Laaj?
- Are tokens used correctly?
- Are components reusable?
- Are mobile layouts complete?
- Are states complete?
- Are accessibility notes present?
- Is handoff clear for Codex/developers?

## First Figma Milestone

Milestone 1 is complete when Figma includes:

- Variables for color, typography, spacing, radius, shadow
- House/Faris/Laaj modes
- Button, input, product card, navbar, hero, footer components
- Homepage desktop and mobile frames
- Faris and Laaj gateway sections
- Product card and product page frame
- Handoff notes
