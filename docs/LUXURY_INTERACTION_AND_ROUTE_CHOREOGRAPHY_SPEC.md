# Porsion Studio Luxury Interaction and Route Choreography Specification

Version: 1.0

Status: Locked for frontend implementation

Purpose: Turn the existing design system into one coherent customer-experience system across Porsion Studio, Faris, and Laaj.

## 1. Document Authority

This document does not create a second design system.

- `02_Frontend_Design_Bible.md` defines page intent and visual philosophy.
- `04_Design_System_Bible.md` defines canonical color, spacing, typography, elevation, z-index, and motion token values.
- `05_Component_Specification_Bible.md` defines individual component contracts.
- `LUXURY_INTERACTION_AND_ROUTE_CHOREOGRAPHY_SPEC.md` defines how those components behave together across a customer journey.
- `FRONTEND_COMPLETION_WORKLIST.md` defines implementation order and acceptance gates.

If a raw duration or color differs, the Design System Bible and machine-readable tokens remain authoritative. This specification is authoritative for orchestration, route transitions, customer feedback, and state continuity.

## 2. Experience Sequence

Every important journey follows this order:

```text
Entry
-> Orientation
-> Discovery
-> Desire
-> Confidence
-> Purchase
-> Reassurance
-> Retention
```

### Entry

Answer where the customer arrived: House, Faris, Laaj, campaign, search, or product.

- Show the requested content immediately.
- Preserve campaign and brand context.
- Never block entry with an intro, modal, newsletter, account request, or animation.

### Orientation

Answer three questions within the first view:

1. Where am I?
2. Is this Men/Faris, Women/Laaj, or the House?
3. What can I do next?

Use wordmark, active navigation, page title, imagery, and one dominant action. Do not add instructional paragraphs.

### Discovery

Expose a small number of meaningful paths: category, edit, product, search, or filter. Use progressive disclosure instead of a wall of links.

### Desire

Use photography, styling, material, silhouette, craft, and editorial context. Desire must never hide price, variant, or availability truth.

### Confidence

Resolve size, fit, fabric, opacity/lining where relevant, delivery, payment, return, support, and final-price questions.

### Purchase

Keep one dominant action. Preserve selected product, variant, quantity, gift state, brand context, and order total.

### Reassurance

After submission, explain status, order reference, payment state, delivery expectation, support, and next action. Never leave a customer wondering whether an order was created.

### Retention

Offer order tracking, account creation, wishlist, recently viewed, relevant recommendations, and Journal content only after the immediate task is complete.

## 3. Interaction Principles

1. Immediate first, elegant second. Content must never wait for decoration.
2. Motion explains state, hierarchy, continuity, or feedback. Otherwise it is removed.
3. One screen has one dominant action.
4. Customer input and context survive recoverable errors.
5. Faris and Laaj differ through rhythm, photography, typography use, copy tone, and material storytelling, not only color.
6. House-level commerce remains stable while brand expression changes.
7. Hover is an enhancement; touch, keyboard, and screen reader journeys remain complete without it.
8. No interaction may create false scarcity, forced urgency, hidden cost, or accidental consent.

## 4. Motion Grammar

Use the canonical motion tokens from the Design System Bible:

| Role | Canonical token | Usage |
| --- | --- | --- |
| Immediate feedback | `duration-fast` | Press, icon state, checkbox, small status |
| Control transition | `duration-base` | Header surface, menu, drawer, button fill |
| Content reveal | `duration-slow` | Below-fold editorial/image reveal |
| Route continuity ceiling | `duration-page` | Optional non-blocking route context transition |

### Allowed properties

- `opacity`
- `transform: translate`
- Very small scale change for image/media emphasis only
- Color and background-color for state transitions

### Prohibited properties for routine animation

- Layout width/height
- Margin/padding
- Large scale zoom
- Letter-spacing animation
- Blur animation over text
- Filter-heavy animation
- Continuous parallax

### Distance

- Control/menu entrance: 4-8 px.
- Editorial reveal: 8-12 px maximum.
- Product and CTA feedback: 0-2 px.
- No content should travel across a large portion of the screen.

### Reduced motion

- Remove translate and scale.
- Use immediate state changes or a short opacity change.
- Never hide content until an animation completes.
- Preserve focus, status, and context announcements.

## 5. Brand Interaction Language

### House

Character: neutral, assured, architectural.

- Rhythm: balanced and symmetrical.
- Motion: `duration-base` for controls, `duration-slow` only for editorial content.
- Copy: direct and inclusive of both brands.
- Visual purpose: orientation and trust.

### Faris

Character: composed, precise, quietly confident.

- Rhythm: structured grids and decisive alignment.
- Motion: 160-220ms feeling, using fast/base tokens.
- Image behavior: clean crop changes and controlled detail reveals.
- Copy: concise, material-led, no exaggerated masculinity.
- CTA feedback: firm color/fill change, no flourish.

### Laaj

Character: refined, graceful, self-possessed.

- Rhythm: more breathing room and softer editorial sequencing.
- Motion: 220-280ms feeling, using base/slow tokens without delaying action.
- Image behavior: gentle opacity/translate reveal and fabric/silhouette emphasis.
- Copy: elegant, specific, respectful, never body-shaming or over-romanticized.
- CTA feedback: soft surface transition with the same response speed as Faris.

### What remains shared

- Header geometry
- Search behavior
- Bag and checkout behavior
- Account and wishlist logic
- Error and offline recovery
- Consent
- Trust, policy, delivery, payment, and support
- Accessibility and performance budgets

## 6. Header Choreography

### Announcement bar

- Maximum one message.
- It may contain one link.
- It scrolls away with the document and does not remain stacked above the sticky header.
- Hide it when there is no factual, current announcement.
- Never rotate messages automatically.

### Transparent state

- Allowed only on approved image-led House/Faris/Laaj/campaign heroes.
- Hero art direction must provide safe contrast for logo, links, icons, and focus rings.
- The header occupies its final height from first paint; transparent mode must not pull content upward later.

### Solid state

- Default for collection, search, product, Journal article, Bag, checkout, order, account, policy, error, and text-led pages.
- Transparent header becomes solid when the hero boundary crosses the header.
- Use an Intersection Observer or equivalent low-cost signal; do not attach unthrottled scroll work.
- Transition background, border, logo variant, and icon color together with `duration-base`.
- No header height, logo size, or navigation-position change during the transition.

### Sticky behavior

- Header remains predictably visible in launch v1.
- Do not hide on downward scroll and reappear on upward scroll.
- Sticky summary/filters must account for header height and must not cover focused content.

## 7. Mega-Menu Choreography

### Desktop anatomy

```text
Category group(s) | Featured edit/New Arrival | One editorial image
```

- Shop uses the neutral House context.
- Men uses Faris wordmark, copy, and one Faris image.
- Women uses Laaj wordmark, copy, and one Laaj image.
- Limit each menu to the approved launch taxonomy.
- Show one highlighted collection and one direct New Arrivals path, not several competing promotions.

### Open and close behavior

- Open on click, Enter, or Space.
- Pointer opening requires deliberate intent; an accidental pass does not trigger it.
- Escape closes and returns focus to the trigger.
- Outside click closes.
- Moving between top-level triggers updates the panel without closing/reopening the entire surface.
- Use opacity plus 4-8 px translate. Do not animate panel height.
- The panel overlays content without shifting the page.

### Performance

- Menu text is available without a client-heavy bundle.
- The editorial image loads only when likely to be used and has fixed dimensions.
- Search, personalization, and analytics logic do not load with the mega menu.

### Mobile equivalent

- Use a drawer with nested accordions.
- Show the same hierarchy, not the same desktop columns.
- Preserve current route, focus, close control, and bottom safe area.

## 8. House to Faris/Laaj Transition

Brand transition is a context change, not a cinematic scene.

### Transition contents

Change these together:

- Active brand wordmark
- Theme tokens
- Active navigation state
- Hero/editorial media
- Copy tone
- Recommendation context

Do not change these:

- Header and page geometry
- Bag contents
- Wishlist contents
- Account state
- Checkout and policy behavior
- Support availability

### Route behavior

- Navigation starts immediately.
- Destination content can render before an optional transition completes.
- No full-screen overlay, black frame, logo intro, or artificial loading delay.
- A non-blocking opacity transition may run for 180-280ms.
- New forward navigation starts at the destination orientation point.
- Browser Back restores the previous route and expected scroll position.
- Focus follows normal route-navigation semantics; overlays explicitly restore focus.

### Progressive enhancement

The View Transition API may be used only when:

- It does not delay navigation.
- Unsupported browsers receive the complete immediate route.
- Reduced-motion mode disables decorative movement.
- Shared-element names cannot collide across product grids.

## 9. Scroll and Reveal Language

- Use native scrolling. Do not add Lenis for launch.
- Do not scroll-jack, snap long pages, or change wheel/touch acceleration.
- First-viewport content is visible immediately.
- Below-fold editorial blocks may reveal once when entering the viewport.
- Product grids, prices, filters, forms, policies, and checkout content do not wait for scroll reveal.
- Reveal sequence is container-level, not an animation on every word or card.
- Stagger is limited to a few editorial items and must finish quickly.
- Anchor navigation accounts for sticky header height.

## 10. Typography and CTA Behavior

### Typography

- Do not animate letter spacing or split headlines into animated characters.
- Headline reveals use a single block opacity/translate at most.
- Body copy never fades line by line.
- Dynamic text reserves enough space or updates without moving adjacent controls.

### Primary CTA

- One dominant CTA per decision surface.
- Hover: controlled fill/contrast change.
- Press: immediate visual state, at most 1 px movement.
- Loading: preserve width, show status, block duplicate action.
- Success: communicate the result near the action and through an appropriate live region.

### Secondary CTA

- Lower contrast than primary but fully accessible.
- Do not place three equal-weight buttons side by side.

### Destructive CTA

- Use explicit text and confirmation only when the effect is hard to reverse.
- Wishlist removal uses Undo instead of a blocking confirmation.

## 11. Product Image Language

### Loading

- Reserve the final aspect ratio before request.
- LCP imagery is visible immediately and is not held behind a reveal animation.
- Below-fold/product-grid imagery may use a low-cost blur placeholder or surface skeleton.
- Transition from placeholder after decode with a short opacity change.
- Do not pulse after the real image has loaded.

### Gallery

- Primary image loads first.
- Remaining images load near intent.
- Thumbnail selection updates the main image without moving purchase controls.
- Zoom opens on explicit action, has a close control, supports Escape, and restores focus.

### Failure

- Keep the reserved ratio.
- Show a quiet branded media fallback and meaningful label.
- Keep title, price, variant, and purchase actions usable when commercially safe.
- If accurate product judgment is impossible without media, disable purchase with an honest message rather than showing a misleading placeholder.

## 12. Route Choreography

### House homepage

```text
Entry: House hero
Orientation: Porsion Studio + Men/Women actions
Discovery: Faris and Laaj gateways
Desire: Old Money pair + craft/editorial
Confidence: House trust strip
Next action: relevant brand or product
```

### Faris/Laaj landing

```text
Entry: brand hero
Orientation: wordmark + active brand navigation
Discovery: launch categories/edits
Desire: material or silhouette story
Confidence: selected product truth and service
Next action: collection or product
```

### Collection/search

```text
Orientation: H1 + result count + active filters
Discovery: categories/filter/sort
Desire: stable product imagery
Confidence: price, color, status
Next action: PDP or Quick Add size sheet
```

### Product

```text
Orientation: product, brand, price
Desire: gallery + concise story
Confidence: color, size, fit, material, delivery, return
Purchase: Add to Bag
Reassurance: Bag drawer feedback
Retention: Complete the Look / You May Also Like
```

### Bag

```text
Orientation: selected item/variant
Confidence: quantity, gift, subtotal, delivery note
Purchase: Checkout now
Recovery: edit/remove/continue shopping
```

### Checkout

```text
Orientation: item summary and step
Confidence: total, delivery, payment, policy
Purchase: one payment-specific submit action
Recovery: preserve draft and offer truthful retry
```

### Confirmation

```text
Reassurance: order number + status + summary + next step
Support: contact/Concierge
Retention: tracking or optional account creation
```

## 13. Checkout State and Recovery Contract

```text
editing
-> validating
-> submitting
-> redirecting (online payment only)
-> succeeded

redirecting -> cancelled | failed | timed_out
cancelled | failed | timed_out -> editing | submitting
```

### Rules

- The first valid submission disables the submit control and announces progress.
- A unique backend idempotency key will ultimately prevent duplicate orders; the frontend also blocks repeat taps.
- Product, variant, quantity, gift state, non-sensitive delivery draft, method, and totals remain available during recovery.
- Never claim success based only on a client redirect or query parameter.
- Payment failure explains that the charge/order status is being checked when confirmation is uncertain.
- Retry does not create a second draft without explicit backend confirmation.
- Back navigation returns to a populated checkout, not an empty form.
- Online-payment cancellation offers Retry, choose COD if eligible, return to Bag, and support.

## 14. Order Confirmation Contract

Show only backend-confirmed facts:

- Order number
- Received/confirmed/payment-pending state
- Item, variant, quantity, and gift state
- Paid/amount-due summary
- Delivery address summary
- Realistic delivery expectation
- Confirmation channel
- Support action
- Tracking action only when available

Do not fabricate an order number, payment success, courier, or date in a frontend-only demo. Label preview data clearly in non-production environments.

## 15. Error, Empty, Offline, and Loading Language

### 404

- House-branded by default.
- Explain briefly without blaming the customer.
- Offer Search, Shop Men, Shop Women, and Return Home.
- Do not say a missing route is still being prepared on production.

### Runtime error

- Preserve known brand context.
- Offer Try again and one safe navigation route.
- Log the diagnostic separately; do not expose stack, digest, account, or order details.

### Offline

- State that the connection is unavailable.
- Keep safe cached/read-only content visible when available.
- Never report an order as placed until server confirmation exists.
- Offer Retry when connectivity returns.

### Loading

- Use route-shaped skeletons with final geometry.
- Do not replace an already streamed header/footer with a blank screen.
- Loading text uses `status`; urgent errors use `alert` only when immediate attention is required.

### Empty

- Explain the state, not the implementation.
- Provide one primary recovery action.
- Examples: no wishlist items, no orders, no search results, no available size.

## 16. Wishlist Experience

### Guest

- Save/remove without forced account creation.
- Local persistence is acceptable for frontend launch when clearly device-specific.
- Header count, product card, PDP, and wishlist route update together.
- Removal offers Undo.

### Wishlist route

- Group or filter Faris and Laaj without creating separate wishlists.
- Show selected/current price, color availability, stock, and size requirement.
- `Move to Bag` opens size/color selection when needed.
- Sold-out items remain identifiable and can offer back-in-stock later.

### Future account merge

- Merge guest and account items by product/variant identity.
- Never silently delete a newer choice.
- Resolve unavailable variants with an explicit customer state.

## 17. Account UI Foundation

Required UI states:

- Signed out
- Authenticating
- Authenticated
- Session expired
- Loading
- Partial data
- Recoverable error
- Empty orders/addresses/wishlist

Required navigation contracts:

- Overview
- Orders
- Order detail
- Addresses
- Profile
- Wishlist
- Security/devices when supported

Authentication methods are capability-driven. Do not show passkey, social, magic-link, or password controls until the corresponding service is operational. Preserve the intended destination after sign-in.

## 18. Cookie and Consent Choreography

### First layer

- Compact, non-blocking surface after usable content appears.
- Explain necessary, analytics, and marketing purposes briefly.
- `Accept optional` and `Reject optional` receive equal visual weight.
- `Manage choices` opens details.

### Detailed layer

- Per-category controls.
- Necessary is always on with explanation.
- Identify purposes and vendors when known.
- Save and close without forcing optional consent.

### Behavior

- Shopping, search, Bag, checkout, and policies work without optional consent.
- Analytics and marketing scripts load only after matching consent.
- Choice persists with policy/version metadata.
- Footer `Cookie settings` reopens controls and allows withdrawal.
- No preselected optional consent, countdown, guilt copy, or accept-colored/reject-hidden pattern.

## 19. Premium Conversion Modules

### Recently Viewed

- Private, factual label.
- Device/session scope is transparent when not account-synced.
- Do not use language implying surveillance.

### Complete the Look

- Maximum three compatible products.
- Explain relationship visually, not with long copy.
- Preserve current brand context unless the stylistic pairing genuinely crosses brands.

### You May Also Like

- Same-brand and same-intent by default.
- Must not duplicate Complete the Look or the current product.

### Product video

- Loads on intent.
- No audio autoplay.
- Poster image and non-video fallback required.
- Use video to show drape, movement, detail, or construction, not as decoration.

### Concierge/WhatsApp

- One support launcher, not two floating buttons.
- Never auto-open.
- Product/brand/route context transfers only after intentional action.
- Agent availability wording must be operationally true.

## 20. Responsive Choreography

### Mobile

- Bottom navigation and sticky purchase action never overlap.
- Sheets rise above safe areas and virtual keyboards.
- Mega menu becomes drawer/accordion.
- Product gallery and order summary appear before long forms.
- No hover-dependent information.

### Tablet

- Do not force desktop mega-menu density into an intermediate width.
- Use the mobile drawer when navigation cannot retain safe spacing.

### Desktop

- Use whitespace for hierarchy, not empty decorative height.
- Overlay menus and sticky summaries do not cover focused elements.
- Wide screens preserve readable content and intentional media crops.

Test at 360, 390, 768, 1024, 1280, and 1536 px, plus content stress and 200% zoom.

## 21. Accessibility Contract

- WCAG 2.2 AA.
- Focus is always visible and theme-safe.
- Route title/heading changes are understandable to assistive technology.
- Menu, drawer, dialog, zoom, consent, and payment recovery support full keyboard operation.
- Live regions are polite for routine feedback and assertive only for urgent blocking errors.
- Color and motion never carry the only meaning.
- Touch targets meet 44 x 44 px for primary mobile actions.
- Reduced motion preserves every task and state.

## 22. Performance Contract

- Header state logic must not cause continuous React renders while scrolling.
- Route transition JavaScript is optional and small.
- The LCP image is never hidden behind animation.
- Mega-menu, video, chat, reviews, and consent vendor scripts load on relevance/intent.
- Skeletons reserve final geometry and do not increase CLS.
- Target LCP below 1.8s, CLS below 0.05, and INP below 150ms; release ceilings remain defined in the worklist.

## 23. Analytics Touchpoints

Track outcomes, not animation frames:

```text
header_state_not_required
mega_menu_opened
mega_menu_destination_selected
brand_context_selected
wishlist_item_added
wishlist_item_removed
checkout_submit_started
checkout_submit_blocked_duplicate
payment_redirect_started
payment_cancelled
payment_failed
payment_retry_selected
order_confirmation_viewed
consent_choice_saved
error_recovery_selected
offline_retry_selected
```

`header_state_not_required` is explicitly not an event to implement; header scroll/animation telemetry would be noise. It appears here to prevent accidental tracking of low-value interaction frames.

Do not send addresses, body measurements, payment details, gift notes, free-form support messages, or personal error content to analytics.

## 24. Prohibited Patterns

- Full-screen logo intro
- Route transition that delays content
- Scroll hijacking or mandatory smooth-scroll library
- Autoplay audio/video hero
- Multiple floating support buttons
- Newsletter popup on entry
- Rotating announcement ticker
- Bounce, elastic, confetti, or celebration animation during commerce
- Hidden reject-consent action
- Payment success inferred only from the browser URL
- Empty review, account, tracking, or loyalty modules presented as functional
- Brand context that changes price truth, policy, or checkout access

## 25. Release Acceptance

- Header transition has zero measurable layout shift.
- Mega menus are fast, keyboard-complete, and visually distinct by context.
- House -> Faris/Laaj change feels coordinated without delaying route display.
- Every core route follows the experience sequence and has one dominant action.
- Image loading/failure preserves geometry and purchase clarity.
- Wishlist works as a full guest journey.
- Account UI represents every required state honestly.
- Payment failure/cancel/timeout/retry and duplicate submission are recoverable.
- Order confirmation shows only server-confirmed facts.
- 404, runtime error, offline, loading, and empty states are branded and actionable.
- Consent is non-blocking, reversible, and free of dark patterns.
- Reduced motion, keyboard, screen reader, mobile, SEO, and performance gates pass.
