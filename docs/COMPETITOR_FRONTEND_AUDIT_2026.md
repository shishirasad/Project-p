# Porsion Studio Competitor Frontend Audit 2026

Status: Actionable frontend research

Audit date: 2026-08-11

Scope: ILLIYEEN / ILYN, YELLOW, ARJO, and AMIRA. The audit covers the current public homepage, representative category or collection pages, representative product pages, navigation, search/discovery, trust content, responsive behavior, semantic signals, and directional loading metrics.

This is not a request to copy another brand. It identifies proven Bangladesh-market patterns, their weaknesses, and the version Porsion Studio should build for the House, Faris, and Laaj.

## 1. Executive Decision

Porsion Studio should combine four strengths without inheriting their clutter:

- ILLIYEEN: product information depth, fabric technology storytelling, house-of-collections structure, and payment/trust completeness.
- YELLOW: search discovery, popular/trending prompts, concise service reassurance, and broad customer-service visibility.
- ARJO: immediate category access, uncomplicated price visibility, and fast movement from homepage to product grid.
- AMIRA: women-specific shopping language, shop-by-piece discovery, rich product imagery, size chart visibility, and direct Buy Now intent.

Porsion should be calmer and easier than all four. The strategic advantage is not a larger mega menu. It is a clear five-item global navigation, separate Faris and Laaj contexts, deeper product confidence, faster media, cleaner data, and a shorter route to guest checkout.

## 1.1 Unique Strengths Worth Preserving

### ILLIYEEN: product truth and collection technology

- The most complete material story: composition, GSM, treatment, construction, fit, care, and product code.
- Memorable fabric-benefit systems such as CottoCool instead of only generic marketing copy.
- A credible house/collection portfolio that shows how identities can share one retail platform.
- Find-in-store and rich service/payment information near the buying journey.

### YELLOW: guided discovery and reassurance

- The clearest empty-search inspiration through trending searches and popular products.
- A useful, factual service strip for shipping, delivery expectation, and exchange.
- Seasonal editorial copy that gives a collection a visual and emotional reason to exist.
- Strong visibility of customer-service hours, email, policies, wishlist, account, and Bag.

### ARJO: direct local shopping

- The shortest mental route from header to a familiar Bangladesh menswear category.
- Prices and sold-out states can be understood with little effort.
- Category pages feel catalogue-first rather than forcing a customer through a long brand story.
- Hotline, outlet, policy, and checkout links remain easy to locate.

### AMIRA: female shopping intent and fit confidence

- `Shop by piece` matches how many Bangladesh customers ask for womenswear: 1 PC, 2 PC, 3 PC, and 4 PC.
- Useful intent families: Ready to Wear, Fusion, Western Wear, Beyond Casual, and Separates.
- A product-specific `Size & Shape` table communicates chest/bust, shoulder, waist, hip, and length.
- The sampled PDP uses six product views, direct Buy Now intent, color/size choices, fabric detail, color note, and Ask about product.
- `Collection over the years` offers a useful editorial archive pattern for campaigns without keeping every past campaign in global navigation.

### The Porsion combination

```text
ILLIYEEN product depth
+ YELLOW search and trust clarity
+ ARJO category directness
+ AMIRA female shopping vocabulary
= a simpler, faster Faris and Laaj experience
```

## 2. Sources Reviewed

### ILLIYEEN / ILYN

- Storefront: https://ilyn.global/bd/en
- Men: https://1v2.ilyn.global/bd/en/c/men
- Women: https://ilyn.global/bd/en/s/women
- Representative PDP: https://ilyn.global/bd/en/p/luxury-cottocool-panjabi-262562

The legacy `illiyeen.com` endpoint was not consistently available during the audit. The active public experience appears under `ilyn.global`, with some category pages also exposed through the `1v2` host. This host and route inconsistency is itself a lesson: Porsion must keep one canonical domain and stable route family.

### YELLOW

- Storefront: https://www.yellowclothing.net/
- New In: https://www.yellowclothing.net/collections/new-in
- Representative PDP: https://www.yellowclothing.net/products/w-set-mystika-17

### ARJO

- Storefront: https://arjobd.com/
- Shirts category: https://arjobd.com/product-category/Shirts
- Representative PDP: https://www.arjobd.com/product/light-olive-green-with-white-pinstripes-shirt

### AMIRA

- Storefront: https://amirabd.com/
- Women: https://amirabd.com/product-category/woman/
- Men: https://amirabd.com/product-category/cat-men/
- Representative PDP: https://amirabd.com/product/tahfeem-1-pc/

## 3. Comparative Scorecard

Scores are design judgments from this audit, not market-share or revenue scores.

| Dimension | ILLIYEEN | YELLOW | ARJO | AMIRA | Porsion decision |
| --- | ---: | ---: | ---: | ---: | --- |
| Brand/portfolio architecture | 9 | 7 | 4 | 6 | Keep one house and two obvious brand worlds |
| Navigation clarity | 5 | 6 | 8 | 5 | Five global items; progressive disclosure |
| Category discovery | 8 | 7 | 6 | 8 | Brand-aware categories plus intent-based edits |
| Product information depth | 9 | 7 | 6 | 8 | Match ILLIYEEN depth with cleaner hierarchy |
| Search inspiration | 6 | 9 | 5 | 7 | Adopt trending, recent, and popular suggestions |
| Trust/service visibility | 8 | 9 | 7 | 8 | Keep delivery, return, payment, contact visible |
| Editorial luxury restraint | 7 | 7 | 4 | 6 | Fewer sections, stronger photography and copy |
| Data/UI cleanliness | 5 | 6 | 5 | 4 | Treat taxonomy and content QA as release gates |
| Mobile stability observed | 6 | 4 | 4 | 3 | Porsion target: CLS below 0.05 on every core page |

## 4. Brand-by-Brand Findings

### 4.1 ILLIYEEN / ILYN

#### What works

- The broad portfolio demonstrates how one parent retail system can hold multiple collections and identities.
- Men and Women are separated clearly, with culturally relevant categories such as Panjabi, Kabli, Abaya, dress sets, and scarves.
- PDP content is the strongest of the group: product code, color, size, stock state, multiple images, Find in store, details, material composition, GSM, fabric treatment, care, and recommendations.
- Fabric technologies such as CottoCool make material benefits easier to remember than a generic fabric paragraph.
- Payment, size guide, exchange/refund, loyalty, store locations, and service contacts are visible in the trust layer.

#### What should not be copied

- The mega menu is too deep: product type, quality tier, collection, technology, campaign, and sub-brand all compete at once.
- Premium, Luxury, Platinum, Sahara, Ambassador, Legends, and technology labels create decision fatigue when they are all navigation levels.
- The audit found category-state inconsistencies, including a 200 response that rendered an app-level 404, placeholder imagery, BDT 0 examples, and repetitive filter values.
- Sale percentages and low-stock language can dominate the luxury presentation.
- The active-host inconsistency weakens canonical clarity and customer trust.

#### Porsion interpretation

Adopt the PDP information model and the house architecture. Adapt collection/technology storytelling into curated edits. Avoid deep tier taxonomies, unstable routes, and merchandising data reaching the storefront without validation.

### 4.2 YELLOW

#### What works

- Search opens with trending categories and popular products, helping customers who do not know exact product names.
- A compact reassurance strip communicates countrywide shipping, estimated delivery time, and exchange terms early.
- Wishlist, cart, account, policies, customer-service hours, email, and payment information are easy to find.
- Campaign copy and seasonal color stories create a clear editorial reason for the current collection.

#### What should not be copied

- The New In collection mixes women, men, kids, and home products into one long discovery stream.
- Full product descriptions inside listing cards make scanning slow and make the page feel denser than a premium catalogue.
- Repeated trending/popular content appears multiple times in the document structure.
- The audited collection and product pages had large resource counts and visible horizontal overflow at some desktop/mobile states.
- Product price presentation should state the final payable amount clearly; Porsion should not surprise users with tax or fee ambiguity.

#### Porsion interpretation

Adopt search inspiration and the factual service strip. Split New Arrivals by active Faris/Laaj context. Keep product cards to image, short title, price, swatches, one truthful status, and one clear action.

### 4.3 ARJO

#### What works

- The customer can immediately enter T-Shirt, Shirts, Knit Polos, Pant, Panjabi, Katua, or Winter.
- Category pages expose price and size filters without requiring a complex discovery model.
- Product price and sold-out status are visible at scan speed.
- Cart access, contact details, outlet details, policies, and checkout links exist in the core structure.

#### What should not be copied

- Product titles frequently concatenate many color names and pattern descriptions, reducing scan speed and SEO readability.
- The homepage becomes a long sequence of product rows rather than a composed brand experience.
- `RECENTLY STALKED` is not suitable customer language for a calm premium brand; use `Recently viewed`.
- PDP copy is comparatively generic and gives less material, fit, and construction confidence.
- The sampled pages lacked consistent semantic `main` and heading structure, and image decoding was unreliable during parts of the browser run.

#### Porsion interpretation

Adopt ARJO's directness, not its visual density. Faris should offer immediate category entry but then use editorial restraint, shorter product names, richer fit/material data, and stronger semantics.

### 4.4 AMIRA

#### What works

- Women's navigation reflects how customers actually shop: 1 PC, 2 PC, 3 PC, 4 PC, co-ords, printed, embroidered, solids, western wear, and separates.
- The campaign-first navigation and `Collection over the years` model show useful ways to preserve seasonal stories.
- The sampled PDP includes six images, product code, exact stock, color, broad size range, size guide, quantity, Add to cart, Buy Now, Ask about product, shipping threshold, fabric, color note, and a full measurement chart.
- Store locations and direct customer-care information strengthen an omnichannel feeling.

#### What should not be copied

- The Women listing exposes 467 results and more than 600 links, making selection expensive on mobile.
- Filters contain duplicate or inconsistent values such as Gray/Grey, Multi Color/Multi Colour, misspellings, campaign categories mixed with product categories, and an irrelevant price range.
- `There is no brand`, repeated price/SKU text, and empty review modules are implementation leakage, not customer content.
- Wishlist, Quick view, Compare, Select options, categories, SKU, and price are repeated on every card, producing severe card noise.
- The browser run observed no semantic `main` landmark, duplicate H1 on the Women page, and very high mobile layout shift on the sampled PDP.

#### Porsion interpretation

Adopt Laaj-specific shop-by-piece vocabulary, rich imagery, direct purchase intent, and visible size guidance. Use controlled vocabulary and a clean filter index. Do not expose dormant modules or raw commerce metadata.

## 5. Directional Technical Audit

Method: headless Chrome, fresh context, 390 x 844 mobile and 1440 x 1000 desktop, representative public routes, one synthetic run per route. LCP, CLS, transfer, broken-image, and control-size observations are directional diagnostics, not a replacement for Lighthouse CI or field Core Web Vitals. CDN state, bot handling, personalization, and campaign assets can change the result.

### Representative findings

| Page | View | Observed LCP | Observed CLS | Transfer | Notable signal |
| --- | --- | ---: | ---: | ---: | --- |
| ILLIYEEN home | Mobile | 4.46s | 0.110 | 1.85 MB | High initial JS and many small targets |
| ILLIYEEN PDP | Mobile | 1.07s | 0.000 | 0.86 MB | Strong visual stability in sampled state |
| YELLOW home | Mobile | 0.66s | 0.466 | 1.71 MB | Fast paint but severe layout movement |
| YELLOW New In | Desktop | 3.76s | 0.035 | 1.76 MB | Large collection DOM and overflow observed |
| YELLOW PDP | Desktop | 2.88s | 0.028 | 4.81 MB | Image-heavy payload |
| ARJO home | Mobile | 2.70s | 0.294 | 4.16 MB | Heavy image payload and unstable first view |
| ARJO category | Mobile | 0.44s | 0.014 | 0.46 MB | Fast direct catalogue route |
| AMIRA home | Mobile | 1.32s | 0.188 | 2.51 MB | Fast enough paint, unstable layout |
| AMIRA Women | Desktop | 1.32s | 0.219 | 2.63 MB | Large taxonomy/DOM and layout movement |
| AMIRA PDP | Mobile | 1.72s | 1.116 | 3.03 MB | Severe sampled mobile layout shift |

### Porsion performance budgets

- Mobile LCP: target below 1.8s, release ceiling 2.5s.
- CLS: target and release ceiling below 0.05.
- INP: target below 150ms, release ceiling 200ms.
- Mobile initial page transfer: target below 1.2 MB for campaign/home, below 1.5 MB for PDP before interaction.
- Initial JavaScript: route-specific and minimal; heavy search, review, chat, and gallery behavior loads on intent.
- LCP image: responsive AVIF/WebP, correct intrinsic size, ideally 180-300 KB on mobile.
- Exactly one eager/high-priority visual per route. Everything below the first viewport lazy loads.
- Product gallery loads the primary image first; later images load near intent, not all at page start.
- Third-party marketing scripts load after consent or interaction and must not block the storefront.

## 6. Final Porsion Information Architecture

### Global navigation

```text
Shop | Men | Women | Journal | About
```

Utility actions:

```text
Search | Account | Wishlist | Bag
```

This should remain simpler than all four competitors. Men opens Faris; Women opens Laaj; Shop is the neutral house catalogue. The active brand context changes content, recommendations, wordmark, accent, and campaign imagery, but not the shared commerce logic.

### Men / Faris menu

```text
New Arrivals
The Old Money Edit
Shirts
Polos & T-Shirts
Trousers
Denim
Panjabi
Knitwear
Outerwear
Essentials
```

Featured editorial tile: `Quiet Confidence`.

### Women / Laaj menu

```text
New Arrivals
The Refined Edit
Dresses
Co-ords
Tops
Bottoms
Modest Wear
Occasion
Essentials
```

Featured editorial tile: `Refined Grace`.

Innerwear remains a discreet `Comfort & Essentials` route inside Women/Laaj. It should not be a global-navigation brand and should not use an unnecessary public sub-brand name.

### Shop menu

```text
New Arrivals
Bestsellers
The Old Money Edit
Occasion
Gifts
All Products
```

Only expose a category when sellable inventory and approved imagery exist. Never ship empty taxonomy, `uncategorized`, placeholder images, zero-price products, or test collections.

## 7. Homepage Composition

The homepage remains a house gateway, not a giant mixed catalogue.

1. Factual announcement bar: one message only.
2. Global header with Porsion Studio as the first-viewport brand signal.
3. House campaign hero with `Shop Men` and `Shop Women`; use separate mobile art direction.
4. Faris and Laaj gateways with visibly different photography, typography rhythm, and copy.
5. Context-aware New Arrivals: Faris, Laaj, or neutral based on explicit journey context.
6. `Old Money, Two Expressions`: Faris Quiet Confidence and Laaj Refined Grace.
7. Material or craftsmanship story, not another product grid.
8. One seasonal/editorial campaign.
9. Journal preview.
10. Compact delivery, return, payment, and support reassurance.
11. DBID-ready footer and legal routes.

Do not use autoplay hero video, entry animations, stacked promotional popups, more than one announcement, or repeated product grids.

## 8. Collection and Search Experience

### Collection page

- One H1, a one-sentence editorial introduction, result count, and useful category chips.
- Desktop: restrained filter rail or popover. Mobile: filter bottom sheet and a paired Sort control.
- Default mobile grid: two columns with fixed 4:5 imagery and stable card height.
- Filters: category, size, color family, fit/silhouette, material, price, availability, and brand only where relevant.
- Controlled data vocabulary: one canonical color family plus a customer-facing shade name.
- Preserve filters in the URL and expose a clear reset action.
- Use load more or crawlable pagination. Do not render hundreds of products at once.

### Search

- Empty search state: recent searches, trending searches, categories, current campaign, and three popular products.
- Results grouped into Products, Categories, Collections, and Journal.
- Brand-aware ranking: Faris visitors see Faris first; Laaj visitors see Laaj first.
- Never hide cross-house access; provide an explicit `Search all Porsion Studio` control.
- Typo tolerance and synonyms belong in the search service later, but the frontend contract should exist now.

## 9. Product Card and PDP

### Product card

Show only:

- 4:5 product image and alternate image on hover where pointer/connection permits.
- Short product title: product type plus distinguishing name, not a sentence of color names.
- Final BDT price and a real compare-at price only when valid.
- 1-4 color swatches, then `+N`.
- One truthful badge: New, Limited, Bestseller, or Sold out.
- Wishlist icon with an accessible label.

Quick Add opens a size-selection sheet. Do not add size-dependent apparel directly without confirming size. Do not display description, SKU, category list, compare, and multiple CTAs on every listing card.

### PDP core

- Five approved product views: front, back, side/fit, detail, and fabric macro. Add video only when it materially demonstrates drape or construction.
- Product name, short product code, price, color, size, `Find your fit`, stock, and one dominant Add to Bag action.
- Short confidence row: delivery estimate, COD/online payment, exchange/return link.
- Details, Fit, Materials, Care, Delivery & Returns in a clean accordion below purchase controls.
- Fabric composition, GSM where meaningful, construction, stretch, opacity/lining where relevant, garment measurements, fit type, and model measurements.
- Faris fields: collar, cuff, placket, rise, leg, structure, and finish as relevant.
- Laaj fields: silhouette, length, lining, opacity, sleeve, set contents, stretch, and drape as relevant.
- Related products stay in the same brand context by default.
- WhatsApp or Porsion Concierge receives product URL, selected color, and selected size only after intentional customer action.

Do not show a review module until genuine reviews exist. An empty five-star distribution is visual debt, not trust.

## 10. Behavioral Context Without Creepiness

Use explicit journey signals before inferred behavior:

1. Campaign route and UTM source.
2. Men/Women choice.
3. Current brand route.
4. Viewed categories and products.
5. Search and filter choices.

Rules:

- Never auto-redirect a returning customer. Restore context visually and keep Men/Women switching obvious.
- Faris routes recommend Faris by default; Laaj routes recommend Laaj by default.
- The neutral Shop and Bag remain house-level and can contain both brands.
- Use a session or consented first-party preference, not invasive fingerprinting.
- Personalize ordering and recommendations, not legal information, price truth, checkout access, or return rights.
- Never expose behavior with copy such as `We saw you looking at...`; use `Recently viewed` or `Continue exploring`.
- Start rule-based. Add AI ranking only after sufficient consented behavioral and transaction data exists.

## 11. Cart, Checkout, and Trust

- Add to Bag opens a small drawer with item, selected variant, quantity, price, `Checkout now`, and `Continue shopping`.
- Keep guest checkout as the default. Account creation follows order confirmation, not before payment.
- Collect only name, Bangladesh mobile number, district/city, area, address, optional email, and delivery note.
- Payment choices: Cash on Delivery or SSLCommerz. Explain that SSLCommerz includes bKash, Nagad, Rocket, supported cards, and bank channels.
- Preserve gift presentation, paid gift-wrap fee, optional note, and preview from Bag into checkout.
- Show complete order total before the final action. No late fee surprises.
- Keep delivery, returns/refund, privacy, terms, contact, HTTPS, and factual business identity available from every page.

## 12. Creative Asset Requirement

Competitor structure cannot compensate for weak photography. Before final visual polish, produce:

- One Porsion Studio house hero, desktop and mobile crops.
- One Faris hero and one Laaj hero, each with desktop and mobile art direction.
- `Old Money, Two Expressions` campaign pair.
- Category imagery for each launch category.
- Five images per launch product and at least one fabric/detail macro.
- One craftsmanship/material story sequence per brand.
- Journal covers and social/landing derivatives from the same approved campaign source.

Product images use a stable 4:5 master. Hero media must leave safe text zones; text should remain HTML, not baked into images. Logos and wordmarks remain replaceable SVG assets referenced through configuration. Faris and Laaj may use distinct wordmarks; separate symbols are optional and should wait for an approved identity system.

## 13. Adopt / Adapt / Avoid Matrix

| Source | Adopt | Adapt | Avoid |
| --- | --- | --- | --- |
| ILLIYEEN | PDP materials/GSM/care, house logic, trust links | Collection and fabric-tech storytelling | Deep tier menus, unstable hosts, zero-price/placeholder data |
| YELLOW | Trending/popular search, service strip | Seasonal editorial and New In | Mixed-department feed, long card copy, overflow/heavy PDP |
| ARJO | Direct category entry and price scan | Faris category-first path | Long color-chain names, generic PDP copy, `Recently Stalked` |
| AMIRA | Shop by piece, size chart, rich imagery, Buy Now intent | Laaj taxonomy and campaign archive | Dirty filters, 600-link PLP, repeated card actions, empty modules |

## 14. Prioritized Implementation Backlog

### P0: Launch-critical

1. Freeze the five-item global navigation and Faris/Laaj mega-menu content.
2. Add responsive house, Faris, and Laaj hero assets with stable image dimensions.
3. Keep homepage as a two-brand gateway with a short conversion path.
4. Upgrade collection filters to canonical category, size, color, fit, material, price, and availability data.
5. Upgrade PDP data and UI for fit, garment measurements, material, GSM/weight where useful, care, delivery, and returns.
6. Add inspired search states: recent, trending, categories, campaign, and popular products.
7. Preserve Faris/Laaj context from ad landing through PDP, Bag, and checkout.
8. Finalize add-to-bag drawer, guest checkout, COD/SSLCommerz copy, gift presentation, and order totals.
9. Enforce image budgets, lazy loading, intrinsic sizes, one priority image, and zero horizontal overflow.
10. Enforce one H1, one main landmark, labelled controls, 44px touch targets, metadata, canonical URLs, and JSON-LD.
11. Publish approved DBID trust and legal content with real company data.
12. Add a merchandising publication gate for price, inventory, image, taxonomy, route, and copy quality.

### P1: Conversion and confidence

1. `Find your fit` rule-based recommendation and garment chart.
2. Quick Add size bottom sheet and back-in-stock UI.
3. Delivery-area estimate and clear COD eligibility.
4. Recently viewed and same-brand recommendations.
5. Porsion Concierge and intentional WhatsApp handoff.
6. Product media zoom, detail view, and restrained drape video.
7. Campaign landing templates for Faris, Laaj, and the Old Money edit.
8. Genuine review display after verified review data exists.

### P2: Post-launch learning

1. Personalized ranking based on consented events.
2. Loyalty, gift card, store credit, and find-in-store.
3. Visual search, semantic search, and AI stylist.
4. A/B testing and campaign experience versioning.
5. Advanced gifting and occasion recommendations.

## 15. Analytics Contract

At minimum, prepare these frontend events without embedding vendor-specific code in components:

```text
brand_context_selected
navigation_category_selected
campaign_landing_viewed
search_opened
search_submitted
search_result_selected
filter_applied
sort_changed
product_viewed
gallery_media_viewed
size_guide_opened
fit_recommendation_completed
add_to_bag
bag_opened
gift_wrap_selected
checkout_started
payment_method_selected
order_frontend_completed
whatsapp_handoff_selected
```

Events require brand, route, campaign/UTM where available, product/variant, and anonymous consent state. No sensitive body measurement or free-text gift note should enter analytics.

## 16. Final Design Position

Porsion Studio should not look like a black-and-gold catalogue, a large marketplace, or a copy of any audited brand. The House layer should feel neutral, quiet, and trusted. Faris should feel structured and confident. Laaj should feel refined and graceful. The experience remains visibly one company through the shared header logic, Bag, checkout, service, policy, and account layers.

`Old Money` is a curated campaign and style language, not a permanent claim stamped across every route. Its strongest use is one shared campaign with two expressions:

```text
OLD MONEY, TWO EXPRESSIONS
Faris: Quiet Confidence
Laaj: Refined Grace
```

The winning frontend will have fewer choices per screen, better photography, more useful product truth, faster media, and a clearer next action than every audited competitor.
