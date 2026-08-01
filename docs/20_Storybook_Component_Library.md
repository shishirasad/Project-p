# Porsion Studio Storybook Component Library

## Purpose

This document defines Storybook structure, component documentation, examples, variants, accessibility checks, visual regression, and AI-safe generation examples.

## Status

v1 Ready for Phase 3 homepage assembly.

## Current Setup

- Storybook version: 10.5.5
- Framework: `@storybook/nextjs-vite`
- App config: `apps/web/.storybook/`
- Story source: `packages/ui/src/**/*.stories.@(ts|tsx)`
- Static assets: `apps/web/public`
- Global styles: `apps/web/app/globals.css`
- Accessibility addon: `@storybook/addon-a11y`

## Theme Switching

Storybook preview exposes a toolbar theme switch for:

- House
- Faris
- Laaj

The theme switch applies `data-brand` and relies on CSS variables. Components must not fork per brand unless the Component Specification Bible explicitly allows it.

## Story Rules

Each reusable component story must include:

- Default variant
- Major visual variants
- Disabled or loading state where relevant
- Error or success state where relevant
- Keyboard-relevant state where relevant
- Responsive-safe content
- Long translated text stress state where relevant
- Token-based styling only

## Component Contract In Stories

Each component story should make the public API understandable:

- Stable component name.
- Main props.
- Default values where useful.
- Controlled example where relevant.
- Uncontrolled example where relevant.
- Compound component example where relevant.
- Deprecation note if a public prop is being phased out.

## Accessibility In Stories

Storybook states must support accessibility review:

- Keyboard-only operation.
- Focus-visible state.
- Screen-reader-safe label and description.
- Invalid/error state for form controls.
- Loading state where relevant.
- Reduced motion behavior where relevant.
- Focus trap behavior for overlays.

## Responsive Viewports

Storybook QA must review components at:

- 360 px.
- 390 px.
- 768 px.
- 1024 px.
- 1280 px.
- 1536 px.

## Visual Regression Baseline

Visual regression baselines are required before Phase 3 homepage assembly begins.

Baseline coverage must include:

- Every reusable component.
- House, Faris, and Laaj themes where relevant.
- Required responsive viewports.
- Default, hover/focus-ready, disabled, loading, invalid, empty, and error states where relevant.

Current rule:

- Use Storybook static build as the render source.
- Use Playwright for screenshot baseline capture when automation is added.
- Do not add a visual regression SaaS or package without a dependency proposal.

## Verification

Current green commands:

- `pnpm storybook`
- `pnpm storybook:build`

## Core Rule

Storybook is the living proof that the component library matches the Design Bible, Design System Bible, Component Specification Bible, and QA Bible.
## Current Phase 2 QA Baseline

Run the release gate after `pnpm storybook:build`:

```bash
pnpm qa:storybook
```

The audit serves the static Storybook build and checks:

- Axe accessibility across 97 default component stories
- Horizontal overflow across 360, 390, 414, 768, 1024, 1280, and 1536 px
- 44 px touch target compliance for interactive controls
- Visual regression baseline screenshots at 390 and 1280 px

Current baseline:

- 131 visual baseline stories
- 262 screenshots
- 0 accessibility violations
- 0 responsive overflow failures
- 0 touch target failures

Artifacts live under `docs/qa/sprint-2.2.5/`.


