# Porsion Studio Frontend Completion Worklist

Status: Ready for execution

Source: `COMPETITOR_FRONTEND_AUDIT_2026.md`, `LUXURY_INTERACTION_AND_ROUTE_CHOREOGRAPHY_SPEC.md`, and the current storefront implementation

Target: Launch-ready Bangladesh frontend in 25-33 working days, assuming approved content and usable creative assets are available.

## Working Rules

- Improve the existing storefront; do not rebuild the component platform.
- Compose existing shared components before proposing a new one.
- Keep one domain, one Bag, one checkout, and separate Faris/Laaj experience contexts.
- No placeholder product, zero price, invented review, false scarcity, or unapproved policy copy may reach launch.
- Every task must work at 360, 390, 768, 1024, 1280, and 1536 px.
- All customer-facing routes require keyboard access, reduced motion support, metadata, and valid internal links.
- Every route follows the same customer-experience sequence: Entry -> Orientation -> Discovery -> Desire -> Confidence -> Purchase -> Reassurance -> Retention.
- Interaction behavior follows `LUXURY_INTERACTION_AND_ROUTE_CHOREOGRAPHY_SPEC.md`; do not invent page-specific motion.

## Delivery Summary

| Workstream | Estimate | Priority |
| --- | ---: | --- |
| Navigation and context | 1.5-2 days | P0 |
| Header, mega menu, and brand transitions | 2-3 days | P0 |
| Creative assets and homepage | 3-4 days | P0 |
| Faris and Laaj experiences | 2-3 days | P0 |
| Collection and search | 3-4 days | P0 |
| Product experience | 3-4 days | P0 |
| Bag and checkout | 2-3 days | P0 |
| Checkout recovery and order reassurance | 2-3 days | P0 |
| Wishlist and account foundation | 2-3 days | P0 |
| Error, offline, image-failure, and consent UX | 2-3 days | P0 |
| Trust, SEO, accessibility, performance | 4-6 days | P0 |
| Conversion enhancements | 5-8 days | P1 |

## Phase 0: Input and Content Lock

- [ ] `FE-001` Confirm final public spelling: `Porsion Studio`, `Faris`, and `Laaj`.
- [ ] `FE-002` Approve global navigation: `Shop | Men | Women | Journal | About`.
- [ ] `FE-003` Approve the Faris and Laaj category lists in this document.
- [ ] `FE-004` Provide or approve product names, final BDT prices, color names, sizes, inventory state, fabric, care, and fit data.
- [ ] `FE-005` Provide verified business name, address, mobile, email, support hours, delivery terms, and return/refund rules.
- [ ] `FE-006` Approve the real gift-wrap fee and customer-facing gift presentation copy.
- [ ] `FE-007` Confirm the official WhatsApp Business number and availability wording.

Completion gate: No frontend section depends on invented business facts.

## Phase 1: Navigation and Brand Context

Estimated time: 1.5-2 days

- [ ] `FE-101` Keep the global desktop navigation to five primary items.
- [ ] `FE-102` Build the Shop menu: New Arrivals, Bestsellers, Old Money Edit, Occasion, Gifts, All Products.
- [ ] `FE-103` Build the Faris menu: New Arrivals, Old Money Edit, Shirts, Polos & T-Shirts, Trousers, Denim, Panjabi, Knitwear, Outerwear, Essentials.
- [ ] `FE-104` Build the Laaj menu: New Arrivals, Refined Edit, Dresses, Co-ords, 1/2/3 Piece, Tops, Bottoms, Modest Wear, Occasion, Essentials.
- [ ] `FE-105` Place innerwear discreetly under Laaj as `Comfort & Essentials`, not as a global brand.
- [ ] `FE-106` Preserve the existing mobile actions: Home, Shop, Search, Bag, Account.
- [ ] `FE-107` Keep Search, Account, Wishlist, and Bag as utility actions on desktop.
- [ ] `FE-108` Add route-aware Faris, Laaj, and neutral House context.
- [ ] `FE-109` Preserve explicit campaign/UTM brand context through product, Bag, and checkout.
- [ ] `FE-110` Keep an obvious Men/Women switch; never auto-redirect a returning visitor.
- [ ] `FE-111` Confirm all navigation, logo, breadcrumb, CTA, footer, and mobile links resolve internally.

Completion gate: A customer can move Home -> Faris/Laaj -> Product -> Bag -> Checkout without a broken or unrelated route.

## Phase 1A: Header, Mega Menu, and Brand Transition

Estimated time: 2-3 days

### Header experience

- [ ] `FE-151` Make the announcement bar a single factual message that scrolls away and never stacks with another promotion.
- [ ] `FE-152` Start the header transparent only over an approved contrast-safe hero.
- [ ] `FE-153` Transition transparent -> solid when the hero leaves the header boundary, with no header-height or content shift.
- [ ] `FE-154` Start the header solid on collection, search, PDP, Bag, checkout, account, policy, error, and text-led routes.
- [ ] `FE-155` Keep the sticky header predictably visible; do not use a hide-on-scroll pattern in the launch version.
- [ ] `FE-156` Define light/dark logo, icon, border, and focus-color behavior for every header state.
- [ ] `FE-157` Verify safe-area, mobile bottom-navigation, keyboard, and reduced-motion behavior.

### Mega-menu visual system

- [ ] `FE-161` Compose each desktop mega menu from category groups, one featured edit, one optimized image, and one New Arrival path.
- [ ] `FE-162` Give Shop a neutral House menu, Men a Faris menu, and Women a Laaj menu without duplicating commerce logic.
- [ ] `FE-163` Open by click/keyboard and deliberate pointer intent; never open from an accidental cursor pass.
- [ ] `FE-164` Support Escape, outside click, focus return, active route, and complete keyboard traversal.
- [ ] `FE-165` Keep mega-menu media out of the critical request path until the menu is likely to open.
- [ ] `FE-166` Keep the mobile equivalent as an accordion/drawer with the same information hierarchy, not a compressed desktop menu.

### Brand transition

- [ ] `FE-171` Swap House/Faris/Laaj wordmark, tokens, copy tone, and editorial media as one coordinated context change.
- [ ] `FE-172` Use a restrained 180-280ms opacity/transform transition without a blank screen or full-page loader.
- [ ] `FE-173` Make Faris transitions precise and composed; make Laaj transitions softer without becoming slower to use.
- [ ] `FE-174` Start newly selected brand routes at a clear orientation point and restore scroll only on browser Back.
- [ ] `FE-175` Make reduced-motion brand changes immediate while preserving context and focus.
- [ ] `FE-176` Preserve Bag, wishlist, account, support, and policy continuity when the visual brand context changes.

Completion gate: Header state, mega-menu content, focus, and House/Faris/Laaj transitions feel intentional without delaying navigation or causing layout shift.

## Phase 2: Creative Asset Production

Estimated time: 2-4 days for generated/provisional assets; professional photography may take 1-2 additional weeks in parallel.

- [ ] `FE-201` Produce one House hero in desktop and mobile art direction.
- [ ] `FE-202` Produce one clearly masculine Faris hero in desktop and mobile art direction.
- [ ] `FE-203` Produce one clearly feminine Laaj hero in desktop and mobile art direction.
- [ ] `FE-204` Produce the paired campaign: `Old Money, Two Expressions`.
- [ ] `FE-205` Produce category imagery for every launch category that has sellable inventory.
- [ ] `FE-206` Prepare five product views per launch product: front, back, fit/side, detail, and fabric macro.
- [ ] `FE-207` Prepare one craftsmanship/material story sequence for Faris and one for Laaj.
- [ ] `FE-208` Export responsive AVIF/WebP derivatives and lightweight blur placeholders.
- [ ] `FE-209` Keep HTML text out of raster artwork and preserve safe text zones in every hero crop.
- [ ] `FE-210` Keep House, Faris, and Laaj SVG wordmarks replaceable through configuration.

Completion gate: No launch page relies on the current temporary/generic campaign image set.

## Phase 3: House Homepage

Estimated time: 1.5-2 days after assets are ready.

- [ ] `FE-301` Add one factual announcement message only.
- [ ] `FE-302` Make Porsion Studio the first-viewport brand signal.
- [ ] `FE-303` Implement the responsive House hero with `Shop Men` and `Shop Women`.
- [ ] `FE-304` Place immediate Faris and Laaj gateways with distinct photography and tone.
- [ ] `FE-305` Add context-aware New Arrivals without mixing unrelated products.
- [ ] `FE-306` Add `Old Money, Two Expressions`: Faris Quiet Confidence and Laaj Refined Grace.
- [ ] `FE-307` Add one material/craft story instead of another product grid.
- [ ] `FE-308` Add one seasonal campaign and a compact Journal preview.
- [ ] `FE-309` Add delivery, payment, return, and support reassurance near the footer.
- [ ] `FE-310` Ensure the next section remains visible below the first viewport.
- [ ] `FE-311` Remove repeated CTAs, repeated collection sections, and nonessential homepage UI.

Completion gate: A first-time visitor understands Porsion Studio, Faris, Laaj, and the next shopping action within five seconds.

## Phase 4: Faris and Laaj Landing Experiences

Estimated time: 2-3 days

### Faris

- [ ] `FE-401` Use a structured ink/stone/brass visual system without making the entire page black and gold.
- [ ] `FE-402` Add category entry cards for the approved launch inventory.
- [ ] `FE-403` Add the Old Money edit, selected products, and a material/fit story.
- [ ] `FE-404` Keep product recommendations inside Faris by default.
- [ ] `FE-405` Use short, precise copy and composed motion.

### Laaj

- [ ] `FE-411` Use a refined ivory/rosewood/pearl visual system with restrained accent colors.
- [ ] `FE-412` Add intent-based entry: 1 Piece, 2 Piece, 3 Piece, Co-ords, Dresses, Modest, Occasion, Essentials.
- [ ] `FE-413` Add the Refined Edit, selected products, and silhouette/fabric storytelling.
- [ ] `FE-414` Keep product recommendations inside Laaj by default.
- [ ] `FE-415` Present `Comfort & Essentials` privately and respectfully inside the Laaj context.
- [ ] `FE-416` Avoid over-sexualized imagery, body-shaming copy, and awkward public labels.

Completion gate: Faris and Laaj feel unmistakably different while Bag, checkout, service, and trust remain one Porsion system.

## Phase 5: Collection and Product Discovery

Estimated time: 3-4 days

- [ ] `FE-501` Add one H1, short editorial introduction, result count, and category chips.
- [ ] `FE-502` Implement canonical filters: category, size, color family, fit/silhouette, material, price, availability, and brand where relevant.
- [ ] `FE-503` Normalize duplicate/misspelled color, size, category, and material labels before rendering.
- [ ] `FE-504` Build mobile Filter and Sort controls as compact bottom-sheet actions.
- [ ] `FE-505` Preserve filter and sort state in the URL.
- [ ] `FE-506` Use a stable two-column mobile product grid and fixed 4:5 card imagery.
- [ ] `FE-507` Keep product cards to image, short title, final price, swatches, one status, and wishlist.
- [ ] `FE-508` Remove SKU, category lists, long descriptions, Compare, and repeated actions from product cards.
- [ ] `FE-509` Use crawlable pagination or Load More; do not render hundreds of products at once.
- [ ] `FE-510` Add empty, loading, no-result, and filter-zero-result states.

### Search

- [ ] `FE-521` Add recent searches, trending searches, useful categories, current campaign, and popular products to the empty state.
- [ ] `FE-522` Group results into Products, Categories, Collections, and Journal.
- [ ] `FE-523` Rank Faris first in Faris context and Laaj first in Laaj context.
- [ ] `FE-524` Add an explicit `Search all Porsion Studio` action.
- [ ] `FE-525` Prepare frontend contracts for typo tolerance and synonyms without adding mock AI claims.

Completion gate: Customers can find an item by brand, category, product type, size, color, or search without seeing a marketplace-like wall of controls.

## Phase 6: Product Detail Experience

Estimated time: 3-4 days

- [ ] `FE-601` Load the primary image first and defer the remaining gallery media.
- [ ] `FE-602` Add accessible zoom/detail viewing without layout shift.
- [ ] `FE-603` Show title, short product code, final BDT price, color, size, stock, and Add to Bag in one purchase hierarchy.
- [ ] `FE-604` Place `Find your fit` beside the size selector.
- [ ] `FE-605` Add a sticky mobile Add to Bag action after size selection.
- [ ] `FE-606` Add delivery estimate, COD/online payment, and return/exchange links near the action.
- [ ] `FE-607` Add Details, Fit, Materials, Care, and Delivery & Returns accordions.
- [ ] `FE-608` Render composition, construction, stretch, GSM/weight where useful, garment measurements, fit, and model measurements.
- [ ] `FE-609` Add Faris-specific fields: collar, cuff, placket, rise, leg, structure, and finish where applicable.
- [ ] `FE-610` Add Laaj-specific fields: silhouette, length, lining, opacity, sleeve, set contents, stretch, and drape where applicable.
- [ ] `FE-611` Keep related products in the same brand context by default.
- [ ] `FE-612` Hide ratings/reviews until genuine verified data exists.
- [ ] `FE-613` Add intentional product-aware Concierge/WhatsApp handoff UI.

Completion gate: A customer can judge appearance, fit, fabric, price, delivery risk, and return conditions before adding the item.

## Phase 7: Bag and Checkout

Estimated time: 2-3 days

- [ ] `FE-701` Open a compact Bag drawer after Add to Bag.
- [ ] `FE-702` Show item, selected color/size, quantity, price, `Checkout now`, and `Continue shopping`.
- [ ] `FE-703` Keep guest checkout as the default path.
- [ ] `FE-704` Limit checkout fields to name, mobile, district/city, area, address, optional email, and optional delivery note.
- [ ] `FE-705` Validate Bangladesh mobile numbers and mobile input keyboards.
- [ ] `FE-706` Offer Cash on Delivery and SSLCommerz as the two primary payment choices.
- [ ] `FE-707` Explain that SSLCommerz includes bKash, Nagad, Rocket, supported cards, and banks.
- [ ] `FE-708` Preserve product, quantity, gift-wrap choice, fee, and gift note from Bag to confirmation.
- [ ] `FE-709` Show the complete order total before the final action.
- [ ] `FE-710` Use payment-specific final CTA copy.
- [ ] `FE-711` Keep compact help access available without blocking checkout.
- [ ] `FE-712` Offer account creation only after order confirmation.

Completion gate: A mobile customer can complete the frontend order flow without registration, hidden fees, or losing selected options.

## Phase 7A: Checkout Recovery and Order Reassurance

Estimated time: 2-3 days

- [ ] `FE-751` Define checkout states: editing, validating, submitting, redirecting, payment cancelled, payment failed, timed out, duplicate blocked, and succeeded.
- [ ] `FE-752` Disable repeat submission after the first valid submit and show calm progress feedback.
- [ ] `FE-753` Preserve non-sensitive order selections when the customer uses Back, cancels SSLCommerz, or retries after failure.
- [ ] `FE-754` Never store payment credentials or sensitive free text in analytics/local persistence.
- [ ] `FE-755` Add a payment-failed/recovery experience with Retry payment, choose COD where allowed, return to checkout, and support actions.
- [ ] `FE-756` Add timeout and offline recovery without creating a second order request.
- [ ] `FE-757` Keep the item, variant, quantity, gift choice, address state, and total visible during recovery.
- [ ] `FE-758` Upgrade order confirmation with backend-provided order number, item summary, payment state, delivery expectation, address summary, gift state, and support CTA.
- [ ] `FE-759` Add `Track order` only when a real tracking destination exists; otherwise show the truthful next confirmation step.
- [ ] `FE-760` Offer optional post-purchase account creation without blocking order confirmation.

Completion gate: Payment cancellation, failure, timeout, Back navigation, refresh, and repeat taps cannot silently lose the order draft or create an accidental duplicate.

## Phase 7B: Wishlist and Account Foundation

Estimated time: 2-3 days for frontend behavior and states; identity/order APIs remain a backend dependency.

### Wishlist

- [ ] `FE-771` Replace the placeholder wishlist with saved, empty, loading, unavailable, sold-out, and removed states.
- [ ] `FE-772` Let a guest save/remove items locally and explain account sync only when identity services exist.
- [ ] `FE-773` Add `Move to Bag` through color/size confirmation rather than silently choosing a variant.
- [ ] `FE-774` Add Undo after removal and keep wishlist state consistent across product card, PDP, header count, and wishlist route.
- [ ] `FE-775` Keep mixed Faris/Laaj wishlist items grouped or filterable without splitting the account.
- [ ] `FE-776` Define guest-to-account wishlist merge conflict behavior for the future identity connection.

### Account UI foundation

- [ ] `FE-781` Replace the account placeholder with signed-out, signing-in, authenticated, loading, error, and session-expired shells.
- [ ] `FE-782` Prepare account navigation for Overview, Orders, Order detail, Addresses, Profile, Wishlist, and Security.
- [ ] `FE-783` Add useful no-orders, no-address, and incomplete-profile states.
- [ ] `FE-784` Keep passkey, social login, magic link, and password methods capability-driven; do not display a method before it is operational.
- [ ] `FE-785` Preserve the intended return route after authentication.
- [ ] `FE-786` Hide or truthfully disable account actions that have no connected backend rather than presenting a dead premium surface.

Completion gate: Wishlist is a complete guest frontend journey, and every future account state has a usable, honest UI contract.

## Phase 7C: Branded Resilience, Image States, and Consent

Estimated time: 2-3 days

### Error and offline states

- [ ] `FE-791` Refine 404 with House branding, Search, Shop Men, Shop Women, and one return action.
- [ ] `FE-792` Add route-level error recovery that preserves the active Faris/Laaj context where known.
- [ ] `FE-793` Add offline detection with retry, cached-navigation guidance, and no false claim that checkout completed.
- [ ] `FE-794` Add branded loading shells for collection, search, PDP, Bag, checkout, wishlist, account, and order status.
- [ ] `FE-795` Ensure error diagnostics are logged without exposing technical or personal details to customers.

### Image loading and failure

- [ ] `FE-801A` Reserve final aspect ratio before every image request.
- [ ] `FE-802A` Use blur/skeleton only where it improves perceived loading; do not animate an already available LCP image.
- [ ] `FE-803A` Fade decoded images in once, using the interaction spec and reduced-motion fallback.
- [ ] `FE-804A` Replace failed product media with a stable branded fallback, meaningful label, and gallery continuity.
- [ ] `FE-805A` Never publish a broken image icon, collapsed card, or layout jump.

### Cookie and consent UX

- [ ] `FE-811A` Separate necessary, analytics, and marketing consent categories.
- [ ] `FE-812A` Provide equally visible Accept and Reject nonessential choices without a dark pattern.
- [ ] `FE-813A` Keep first paint and shopping functional before consent is answered.
- [ ] `FE-814A` Load analytics/marketing scripts only after the relevant consent state.
- [ ] `FE-815A` Persist the consent decision, expose `Cookie settings` in the footer, and support later withdrawal.
- [ ] `FE-816A` Keep consent copy short on first view and provide detailed purpose/vendor information on demand.

Completion gate: Missing pages, runtime errors, offline state, failed images, and consent decisions remain calm, useful, accessible, and honest.

## Phase 8: Trust, Legal, and Contact

Estimated time: 1-2 days after business facts are approved.

- [ ] `FE-801` Publish approved Terms and Conditions.
- [ ] `FE-802` Publish approved Privacy Policy.
- [ ] `FE-803` Publish approved Delivery Policy.
- [ ] `FE-804` Publish approved Return and Refund Policy.
- [ ] `FE-805` Publish Contact with permanent address, mobile, official email, and support hours.
- [ ] `FE-806` Add verified business identity and policy links to the footer.
- [ ] `FE-807` Keep policies available inside PDP, Bag, and checkout where relevant.
- [ ] `FE-808` Remove placeholder legal copy and unsupported delivery/refund promises.
- [ ] `FE-809` Verify HTTPS behavior and prevent mixed-content assets before production.

Completion gate: The storefront is ready for business/legal review and does not present invented compliance claims.

## Phase 9: SEO and Structured Data

Estimated time: 1-1.5 days

- [ ] `FE-901` Verify a unique title and meta description on every indexable route.
- [ ] `FE-902` Verify one visible H1 and one semantic main landmark per route.
- [ ] `FE-903` Add canonical URLs and prevent faceted-filter duplicate indexing.
- [ ] `FE-904` Add Organization, WebSite/SearchAction, Product, Breadcrumb, Article, and ItemList JSON-LD where applicable.
- [ ] `FE-905` Verify sitemap and robots behavior for all launch routes.
- [ ] `FE-906` Add useful alt text and decorative-image handling.
- [ ] `FE-907` Ensure campaign and product copy remains server-rendered and crawlable.
- [ ] `FE-908` Verify Open Graph and social image output for House, Faris, Laaj, campaign, product, and Journal routes.

Completion gate: Every public route has valid metadata, canonical behavior, semantic hierarchy, internal links, and appropriate structured data.

## Phase 10: Accessibility and Responsive QA

Estimated time: 1.5-2 days

- [ ] `FE-1001` Verify keyboard-only navigation and visible focus on every interactive control.
- [ ] `FE-1002` Verify menus, drawers, dialogs, filters, gallery, and Bag focus management.
- [ ] `FE-1003` Verify labels, names, live regions, errors, and screen-reader order.
- [ ] `FE-1004` Enforce a 44 x 44 px minimum touch target for primary mobile controls.
- [ ] `FE-1005` Verify reduced-motion behavior and no motion-blocked content.
- [ ] `FE-1006` Verify no horizontal overflow at every supported viewport.
- [ ] `FE-1007` Verify text wrapping, sticky UI, safe areas, and virtual keyboard behavior.
- [ ] `FE-1008` Verify House, Faris, and Laaj color contrast against WCAG 2.2 AA.

Completion gate: Automated accessibility checks pass and all critical journeys work with keyboard and mobile touch.

## Phase 11: Performance and Stability

Estimated time: 2-3 days

- [ ] `FE-1101` Set exactly one high-priority LCP image per route.
- [ ] `FE-1102` Add intrinsic dimensions and responsive sizes to every image.
- [ ] `FE-1103` Lazy-load below-fold images and defer secondary product-gallery media.
- [ ] `FE-1104` Remove unused/heavy assets and duplicate font weights.
- [ ] `FE-1105` Defer chat, analytics, review, zoom, and other noncritical JavaScript until intent.
- [ ] `FE-1106` Prevent layout shifts from headers, banners, filters, product media, fonts, and sticky actions.
- [ ] `FE-1107` Verify mobile LCP below 1.8s target and 2.5s release ceiling.
- [ ] `FE-1108` Verify CLS below 0.05 and INP below 200ms release ceiling.
- [ ] `FE-1109` Keep mobile initial transfer near 1.2 MB for home/campaign and 1.5 MB for PDP before interaction.
- [ ] `FE-1110` Run production-build profiling, not only development-server checks.

Completion gate: Core Web Vitals budgets pass on representative mobile throttling without blank or delayed hero content.

## Phase 12: Analytics Hooks

Estimated time: 1 day for frontend contracts only.

- [ ] `FE-1201` Add vendor-neutral event hooks for brand context and navigation.
- [ ] `FE-1202` Add search, filter, sort, and result-selection event hooks.
- [ ] `FE-1203` Add product, gallery, size guide, fit, Add to Bag, and Bag event hooks.
- [ ] `FE-1204` Add checkout, payment choice, gift wrap, and order-complete event hooks.
- [ ] `FE-1205` Add campaign/UTM and intentional WhatsApp handoff context.
- [ ] `FE-1206` Exclude body measurements, addresses, gift notes, and other sensitive text from analytics.

Completion gate: Components expose typed callbacks/events without directly embedding GA4, Meta, TikTok, or another vendor SDK.

## Phase 13: Final Release QA

Estimated time: 2 days

- [ ] `FE-1301` Run typecheck, lint, unit tests, Storybook build, and production build.
- [ ] `FE-1302` Run Playwright journeys for Home -> Faris -> PDP -> Bag -> checkout.
- [ ] `FE-1303` Run Playwright journeys for Home -> Laaj -> PDP -> Bag -> checkout.
- [ ] `FE-1304` Run campaign landing -> relevant brand -> PDP -> checkout.
- [ ] `FE-1305` Test empty, loading, error, sold-out, missing-product, and no-search-result states.
- [ ] `FE-1306` Test COD, SSLCommerz selection, gift wrap, note, and order summary states.
- [ ] `FE-1307` Run internal-link and broken-image scans.
- [ ] `FE-1308` Update desktop/mobile visual baselines after design approval.
- [ ] `FE-1309` Verify Chrome, Edge, Firefox, Android Chrome, and real or hosted Safari/iOS Safari.
- [ ] `FE-1310` Complete final content, price, inventory, route, policy, and asset review.

Completion gate: All automated checks are green, all launch content is approved, and no P0 defect remains.

## P1 Conversion Enhancements

Start after the P0 release gate, unless a P1 item is required for the launch campaign.

- [ ] `FE-1401` Rule-based `Find your fit` recommendation.
- [ ] `FE-1402` Quick Add size-selection bottom sheet.
- [ ] `FE-1403` Back-in-stock request UI.
- [ ] `FE-1404` Recently viewed and Continue exploring.
- [ ] `FE-1405` Delivery-area estimate and COD eligibility UI.
- [ ] `FE-1406` Porsion Concierge guided chat and intentional WhatsApp handoff.
- [ ] `FE-1407` Reusable Faris, Laaj, and Old Money campaign landing templates.
- [ ] `FE-1408` Genuine verified-review presentation when real data exists.
- [ ] `FE-1409` `Complete the Look` with a maximum of three genuinely compatible pieces.
- [ ] `FE-1410` `You May Also Like` with same-brand relevance and no duplicate of Complete the Look.
- [ ] `FE-1411` Editorial product storytelling for material, making, silhouette, and occasion.
- [ ] `FE-1412` Optional product drape/detail video that loads on intent and always has a poster/fallback.
- [ ] `FE-1413` Advanced gift experience: recipient context, presentation preview, note, and post-purchase reassurance.

## Deferred Beyond Current Frontend Scope

- Live inventory and order APIs.
- Live SSLCommerz transaction processing.
- Real-time courier pricing and tracking.
- Meilisearch/semantic search backend.
- CRM/CDP personalization.
- AI recommendation ranking, AI stylist, and visual search.
- Admin, Landing Experience Builder, and campaign automation.

The frontend may expose stable contracts and honest disabled/demo states for these capabilities, but it must not claim they are operational before their backend services exist.

## Weekly Execution Order

### Week 1

- Phase 0 input lock
- Phase 1 navigation/context
- Phase 1A header/mega-menu/brand transition
- Phase 2 provisional creative assets
- Phase 3 homepage

### Week 2

- Phase 4 Faris/Laaj
- Phase 5 collection/search
- Begin Phase 6 PDP

### Week 3

- Complete Phase 6
- Phase 7 Bag/checkout
- Begin Phase 7A checkout recovery/order reassurance

### Week 4

- Complete Phase 7A
- Phase 7B wishlist/account foundation
- Phase 7C resilience/image/consent
- Phase 8 trust/legal
- Phase 9 SEO

### Week 5

- Phase 10 accessibility/responsive
- Phase 11 performance
- Phase 12 analytics contracts
- Phase 13 release QA

### Week 6-7 Buffer

- Final photography/content replacement
- Business approval corrections
- Cross-browser fixes
- P0 bug closure and launch review

## Final Definition of Done

- [ ] Faris and Laaj are visually distinct but operationally one Porsion Studio.
- [ ] Header, mega menu, and brand transitions follow one approved interaction grammar.
- [ ] Every paid campaign can land in the correct brand context.
- [ ] Product truth, size confidence, payment, delivery, and return information are visible before purchase.
- [ ] Guest checkout supports COD and the SSLCommerz frontend choice without hidden totals.
- [ ] Gift presentation and note survive the complete checkout journey.
- [ ] Wishlist, account states, order confirmation, and payment recovery form complete customer journeys rather than placeholders.
- [ ] 404, runtime error, offline, image failure, loading, and consent states are branded and recoverable.
- [ ] Every public page is responsive, accessible, internally linked, SEO-ready, and fast.
- [ ] No placeholder asset, mock legal claim, test taxonomy, zero price, fake urgency, or empty trust module is public.
- [ ] Production build and all required QA gates are green.
