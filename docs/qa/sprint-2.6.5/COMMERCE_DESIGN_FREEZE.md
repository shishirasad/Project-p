# Sprint 2.6.5 Commerce Design Review & API Freeze

Date: 2026-08-01
Status: Passed and frozen
Scope: Commerce UI API, design contract, naming, duplication, and lightweight verification

## Decision

Commerce Components are v1 Stable for Phase 3 page assembly.

This sprint intentionally did not repeat the full Storybook QA matrix. Sprint 2.6 already captured the accessibility, responsive, touch-target, and visual baseline gate. Sprint 2.6.5 focused on design/API freeze value.

## API Freeze

ProductCard public API is frozen for Phase 3 with these additions:

- `variant`: `standard`, `compact`, `editorial`
- `imageRatio`: `portrait`, `square`, `wide`
- Optional `viewProductLabel`, `addToBagLabel`, `wishlistLabel`, and `compareLabel`
- Callback-only actions: `onProductSelect`, `onAddToBag`, `onWishlist`, `onCompare`

ProductCard still contains no business logic, API calls, analytics vendor code, price calculation, inventory fetch, cart flow, or checkout flow.

## Design Review

Accepted:

- Product image ratios are locked through `CommerceImageRatio`.
- ProductImage reserves layout space and lazy-loads by default.
- Skeleton loading UX is acceptable for Phase 3 assembly.
- ProductCard variants are enough for collection grids, homepage product strips, and editorial commerce placements.
- Token usage remains stable and brand-theme driven.
- RelatedProductsStrip and RecentlyViewedStrip are semantic wrappers over ProductCarousel, not duplicate logic.
- QuantityStepper remains reused from the Form System.

Refinements made:

- Fixed ProductCard non-link fallback to avoid nesting headings inside a native button.
- Added ProductCard `variant` and `imageRatio` props.
- Made ProductCard action labels optional and action rendering conditional.
- Added reduced-motion behavior to ProductCarousel scroll.
- Declared `lucide-react` as a peer dependency for `@porsion/ui` because commerce action icons import it at runtime.

## Lightweight Verification

Passed:

- `pnpm typecheck`
- `pnpm lint`
- `pnpm test`: 84 test files, 108 tests passing
- `pnpm build`

Static audit passed:

- No API calls in `packages/ui/src/commerce`
- No cart or checkout flow in `packages/ui/src/commerce`
- No local/session storage in `packages/ui/src/commerce`
- No hardcoded hex/rgb/hsl colors in `packages/ui/src/commerce`

## Next

Sprint 2.7 Editorial Components should start next. No additional foundation sprint is planned before Sprint 2.7, Sprint 2.8, and Phase 3 Homepage.