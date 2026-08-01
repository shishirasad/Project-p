# Porsion Studio Testing & QA Bible

## Purpose

This document defines testing, QA, release gates, and quality standards for the Porsion Studio frontend and future platform surfaces.

## Status

v1 Ready for Phase 2 component verification.

## Core Rule

No production release should bypass accessibility, performance, SEO, responsive, and critical user-flow checks.

No Phase 3 homepage assembly should begin until Phase 2 components pass their completion gate.

## Required Verification Commands

Before a sprint is marked done:

- `pnpm install`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm test`
- `pnpm build`
- `pnpm storybook`
- `pnpm storybook:build`

## Component QA Gate

Every reusable component must pass:

- TypeScript strict mode.
- Storybook coverage.
- Unit tests for meaningful behavior.
- Token usage check.
- No hardcoded customer-facing text.
- No hardcoded colors outside token definitions.
- No page-specific logic.
- Bundle budget check or documented exception.
- Responsive QA matrix review.
- Accessibility review.

## Accessibility Gate

Accessibility target: WCAG 2.2 AA intent.

Required checks:

- Keyboard-only interaction.
- Visible focus state.
- Accessible name for controls.
- Label and description association for form controls.
- Error association with `aria-describedby` and `aria-invalid` where relevant.
- Screen-reader-safe loading, success, and error states.
- Focus trap for Modal, Drawer, Dialog, Popover, Bottom Sheet, and Command Palette.
- Escape key handling where safe.
- Reduced motion support.
- Touch target minimum of 44 by 44 px.
- RTL-ready structure for future internationalization.

## Responsive QA Matrix

Review every reusable component at:

- 360 px.
- 390 px.
- 768 px.
- 1024 px.
- 1280 px.
- 1536 px.

Pass criteria:

- No text overflow.
- No controls below 44 by 44 px when interactive.
- No layout shift between loading and loaded states.
- No clipped focus ring.
- No overlapping elements.
- Long translated labels remain usable.

## Browser Support Matrix

Public storefront support:

- Chrome latest 2 versions.
- Edge latest 2 versions.
- Firefox latest 2 versions.
- Safari latest 2 versions.
- iOS Safari current supported versions.
- Android Chrome current supported versions.

## Visual Regression

Storybook is the source for visual regression baselines.

Baseline requirements before Phase 3:

- Primitive components.
- Form components.
- Navigation components.
- Feedback components.
- Overlay components.
- Commerce components.
- Editorial components.
- Layout components.
- House theme.
- Faris theme.
- Laaj theme.
- Approved responsive viewports.

Current approach:

- Use Storybook static build as the render source.
- Use Playwright screenshots for baseline capture when visual regression automation is introduced.
- Do not add a hosted visual regression vendor without dependency approval.

## Bundle And Performance QA

Initial gzip budgets:

- Primitive component: <= 5 KB.
- Form component: <= 10 KB.
- Heavy interactive component: separate chunk where practical.
- Admin or builder component: excluded from public storefront bundle.

Performance checks:

- Tree-shakeable exports.
- Lazy-load friendly heavy components.
- Minimal client JavaScript.
- No unnecessary rerenders.
- No layout shift.
- Reduced motion support.

## Dependency QA

A new package requires a dependency proposal covering:

- Need.
- Bundle impact.
- Alternative.
- Maintenance risk.
- Security risk.
- Accessibility impact.

## Sprint 2.2.5 QA & Stabilization

This sprint runs after Form System and before Navigation System.

Scope:

- Component audit.
- Accessibility audit.
- Bundle analysis.
- Design token audit.
- Storybook review.
- Public API consistency check.
- Responsive QA matrix review.
- Visual regression baseline plan.
- Dependency audit.

Exit criteria:

- All required verification commands are green.
- Sprint 2.1 and 2.2 components meet the Component QA Gate.
- No page-specific logic exists.
- No unapproved dependency exists.

## Phase 2 Completion Gate

Phase 2 is complete only when:

- 60-80 reusable components exist.
- 100 percent TypeScript strict verification is green.
- 100 percent Storybook component coverage exists.
- Unit tests cover meaningful component behavior.
- Accessibility pass is complete.
- Responsive QA pass is complete.
- Build is green.
- Bundle budget is within limits or exceptions are documented.
- Visual regression baseline exists.
- No page-specific logic exists.

## Future QA Areas

After component foundation:

- E2E tests for homepage, Faris, Laaj, product, search, cart, and checkout shell.
- SEO validation.
- Broken link scanning.
- Checkout QA.
- Payment QA.
- Staging approval.
- Rollback testing.