# Porsion Studio Multi-Surface Storefront Build Brief

Status: Canonical direction, locked on 2026-08-15

Purpose: Define how Porsion Studio builds awareness for Faris and Laaj, routes retail customers into the right experience, operates a unified Shop, supports wholesale relationships, and later serves three public website faces from one shared commerce platform.

This brief is the active source of truth for storefront scope. Where an older implementation note conflicts with this brief, this brief wins.

## 1. Locked Business Model

~~~
Porsion Studio
|-- House identity and brand builder
|-- Wholesale and business partnerships
|-- Faris: complete menswear retail brand
|-- Laaj: complete womenswear retail brand
+-- Shop: unified curated commerce channel
~~~

- Porsion Studio is the parent house, shared trust layer, brand builder, wholesale identity, and operating company.
- Faris is a distinct menswear brand and a complete retail website experience.
- Laaj is a distinct womenswear brand and a complete retail website experience.
- Shop is a channel, not a third brand. It combines approved products across Faris, Laaj, beauty, cosmetics, innerwear, accessories, footwear, and future lifestyle categories.
- Womens innerwear belongs inside Laaj and the unified Shop. Mens innerwear belongs inside Faris and the unified Shop.
- Porsion Studio must make unfamiliar customers understand Men / Faris and Women / Laaj before expecting recognition of the brand names alone.

## 2. Surface Responsibilities

### Porsion Studio House

- Build awareness and trust for the parent house.
- Introduce Faris as the menswear brand.
- Introduce Laaj as the womenswear brand.
- Route customers to Men/Faris, Women/Laaj, or Shop.
- Explain the house standard without duplicating full brand catalogues.
- Route wholesale buyers, retailers, press, and partners to the correct enquiry path.
- Present the company, brand portfolio, journal, policies, and verified business information.

### Faris

- Operate as a complete menswear storefront.
- Own menswear campaigns, categories, search context, product storytelling, recommendations, and conversion.
- Preserve Faris identity from advertisement or domain entry through product, bag, and checkout.
- Default recommendations to Faris products unless the customer explicitly enters Shop or changes context.

### Laaj

- Operate as a complete womenswear storefront.
- Own womenswear, modest wear, innerwear, campaigns, product storytelling, recommendations, and conversion.
- Preserve Laaj identity from advertisement or domain entry through product, bag, and checkout.
- Default recommendations to Laaj products unless the customer explicitly enters Shop or changes context.

### Unified Shop

- Provide broad product discovery with the calm visual discipline of Porsion Studio.
- Sell all approved categories through one search, one bag, one checkout, and one account.
- Support contextual filters, recommendations, cross-sell, upsell, recently viewed items, and saved preferences.
- Offer marketplace-level breadth without marketplace clutter, unrelated sellers, duplicate listings, or promotion noise.
- Remain a curated Porsion channel unless a separate marketplace and vendor-governance decision is approved later.

## 3. Public Website Faces

### Current same-domain structure

~~~
/                 Porsion Studio House
/faris            Men / Faris storefront
/laaj             Women / Laaj storefront
/collection       Unified Shop during the current frontend phase
/shop             Future preferred alias for the unified Shop
/wholesale        Wholesale and partnership enquiries
/journal          House and brand editorial
/the-house        Company and brand portfolio
~~~

Navigation labels teach category and brand together:

~~~
Men / Faris | Women / Laaj | Shop | Wholesale | Journal
~~~

The Porsion Studio logo returns to the House homepage. Company and About content remain available on the House homepage and in the footer, so a duplicate The House primary-navigation item is unnecessary.

### Future independent domains

~~~
Porsion Studio domain -> House, Shop, wholesale, shared trust
Faris domain          -> Faris root experience
Laaj domain           -> Laaj root experience
~~~

The exact Faris and Laaj domains remain pending business approval.

A domain-aware frontend may render the same route and component system under different hosts. Each host receives its own wordmark, tokens, navigation, metadata, sitemap, analytics context, and canonical URL.

## 4. Shared Platform Contract

All public faces share:

- One company and commerce backend.
- One product and category source of truth.
- One inventory system with brand and channel availability.
- One pricing and promotion engine.
- One customer profile and CRM.
- One order, return, refund, gift, and loyalty system.
- One search index with brand-aware ranking.
- One media library and content system.
- One analytics event model.
- One payment and courier integration layer.
- One component library with House, Faris, and Laaj theme tokens.

Brand presentation changes. Commerce truth does not.

Independent domains cannot safely share ordinary browser cookies. Future cross-domain account and cart continuity therefore requires a central identity flow and server-backed cart token. A central checkout host is the preferred default until a final authentication architecture is approved.

## 5. Porsion Studio Homepage

The House homepage is a brand-awareness and routing experience, not a full catalogue.

It must answer within five seconds:

1. What is Porsion Studio?
2. What are Faris and Laaj?
3. Where does a menswear customer go?
4. Where does a womenswear customer go?
5. Where does a customer shop everything?
6. Where does a wholesale buyer enquire?

### Required sequence

1. House hero.
2. Short House statement.
3. Men / Faris and Women / Laaj brand gateways.
4. Compact unified Shop gateway.
5. House standards or verified proof.
6. Wholesale and partnership gateway.
7. Selected journal or brand-building story.
8. Contact, policies, and footer.

### Hero content contract

- H1: Porsion Studio.
- Supporting identity: a house building distinct fashion brands.
- Primary actions: Explore Men / Faris and Explore Women / Laaj.
- Secondary actions: Shop all and Wholesale enquiries.
- Use one House image or film only. Do not repeat the same hero elsewhere on the page.
- Keep a visible hint of the next section.
- Do not show a large product grid before the customer understands the brand architecture.

### Brand gateway contract

~~~
MEN
FARIS
Modern menswear. Quiet confidence.

WOMEN
LAAJ
Refined womenswear. Modest ease.
~~~

Over time the brand names may become more prominent, but category clarity must remain available.

## 6. Brand Identity and Transition

### House

- Neutral, authoritative, quiet, and architectural.
- House bronze, black, ivory, and restrained natural texture.
- Content focuses on portfolio, standards, trust, partnership, and direction.

### Faris

- Structured, precise, confident, and composed.
- Distinct wordmark, menswear imagery, copy rhythm, category navigation, and campaign system.
- Motion target: 160-220ms for interface transitions.

### Laaj

- Refined, graceful, calm, and feminine without becoming ornamental or generic.
- Distinct wordmark, womenswear imagery, copy rhythm, category navigation, and campaign system.
- Motion target: 200-280ms for interface transitions.

### House-to-brand transition

- Use a short wordmark, color, and image transition when entering Faris or Laaj.
- Prefer View Transitions or opacity/transform fallbacks.
- Never delay route content behind a logo intro.
- Never autoplay a long brand film.
- Respect prefers-reduced-motion.
- Keep an unobtrusive A Porsion Studio brand relationship and an easy route back to the House or Shop.

## 7. Unified Shop Experience

Shop may carry broad categories while preserving a curated fashion-house standard.

### Initial taxonomy

~~~
New and Best
Men / Faris
Women / Laaj
Innerwear
Beauty and Cosmetics
Accessories
Footwear
Gift
Future Lifestyle
~~~

Only active categories with real products appear publicly. Inactive category data remains available for future activation.

### Product discovery

- Universal search across product, brand, category, material, occasion, and editorial terms.
- English and Bangla query readiness.
- Autocomplete, typo tolerance, synonyms, recent searches, and trending searches.
- Brand labels on mixed search results.
- Search result groups when useful: Products, Categories, Brands, and Journal.
- Graceful no-result recovery with spelling help, related categories, and concierge access.

### Contextual filters

Global filters:

- Brand.
- Category.
- Price.
- Availability.
- New arrival.
- Best seller.

Fashion filters:

- Size.
- Colour.
- Fit.
- Fabric.
- Occasion.
- Season.
- Modesty or coverage attributes where relevant.

Beauty filters:

- Product type.
- Skin or hair concern only when product data supports it.
- Finish, shade, or formulation where relevant.

Do not show every filter for every category. Filters are generated from the active category and available product attributes.

### Sorting

~~~
Recommended
Newest
Best sellers
Price: low to high
Price: high to low
~~~

Recommended ranking must have a deterministic fallback when behavioral data is absent.

## 8. Behavioral Personalization

Personalization changes order, emphasis, and recommendations. It does not change product truth.

Allowed signals:

- Explicit Men, Women, Both, or Shop preference.
- Entry route, campaign, and UTM context.
- Search terms.
- Product and category views.
- Wishlist and bag activity.
- Recently viewed products.
- Completed purchases and returns after consent and backend approval.
- Language, currency, and country selection.

Allowed adaptations:

- Place Faris or Laaj first in a mixed Shop result.
- Continue the last meaningful category.
- Reorder homepage gateways for returning visitors while keeping both visible.
- Show Continue exploring, Recently viewed, and For your wardrobe.
- Prioritize relevant sizes, colours, categories, and editorial guidance.
- Preserve the active brand from campaign landing through checkout.

Guardrails:

- Never infer or expose sensitive personal traits.
- Never hide the other brand completely.
- Always provide a visible reset or context switch.
- Never change the base price for an individual based on inferred behavior.
- Never use false scarcity, fake countdowns, or manipulative urgency.
- Do not activate marketing personalization before consent.
- Explain recommendation labels in plain language when needed.

## 9. Upsell and Cross-Sell

Relevant placements:

- Product page: Complete the look.
- Product page: compatible care, accessory, or beauty item.
- Bag: one or two relevant additions only.
- Shop: Pairs well with, Often chosen together, and Continue your routine.
- Post-purchase: care, replenishment, or complementary category.
- Gift flow: gift wrapping, note, and suitable add-ons.

Rules:

- Faris context stays Faris-first.
- Laaj context stays Laaj-first.
- Mixed-brand recommendations belong mainly in Shop.
- A recommendation must have a clear relationship to the selected item.
- Never obstruct checkout with an upsell.
- Do not present a discount unless it is real and centrally priced.
- Keep recommendations callback-driven until backend recommendation services exist.

## 10. Customer Journeys

### New House visitor

~~~
Porsion Studio
-> Understand House
-> Choose Men/Faris, Women/Laaj, or Shop
-> Discover product
-> Product confidence
-> Bag
-> Guest checkout
~~~

### Faris advertisement visitor

~~~
Faris campaign or Faris domain
-> Matching Faris landing
-> Faris product or edit
-> Faris-first recommendations
-> Shared bag and checkout
~~~

### Laaj advertisement visitor

~~~
Laaj campaign or Laaj domain
-> Matching Laaj landing
-> Laaj product or edit
-> Laaj-first recommendations
-> Shared bag and checkout
~~~

### Unified Shop visitor

~~~
Shop
-> Search or category
-> Contextual filters
-> Product comparison and recommendations
-> Shared bag and checkout
~~~

### Wholesale visitor

~~~
Porsion Studio
-> Wholesale
-> Select enquiry type
-> Review verified capabilities
-> Submit business enquiry or contact the House
~~~

Paid social traffic should enter the matching brand or campaign, not the generic House homepage.

## 11. Contact, Concierge, and Wholesale

Customer support and business enquiries are separate.

Customer paths:

- Product question.
- Size and fit.
- Delivery and return.
- Order support.
- Intentional WhatsApp handoff.

Business paths:

- Wholesale.
- Retail supply.
- Distribution.
- Collaboration.
- Press.
- General partnership.

The contact surface first asks what the visitor needs, then routes them to the right form or WhatsApp context. Do not mix wholesale enquiries into ordinary order support.

Use verified response times and capabilities only. Do not display invented partner counts, production numbers, markets, or animated counters.

## 12. Motion and Impact

Motion gives meaning to the brand architecture.

- Hero content is visible immediately.
- Men/Faris and Women/Laaj gateways reveal with restrained stagger.
- Hover or focus introduces the brand wordmark and accent without resizing the layout.
- Route transition carries the selected brand color or image into the destination for 180-320ms.
- Product cards use subtle image and information transitions only.
- Search and filter changes keep the result grid stable.
- Add-to-bag motion confirms the action and points toward the Bag without forcing navigation.
- Reduced-motion mode removes nonessential transforms and route choreography.
- Avoid bounce, heavy parallax, endless marquee, auto-rotating carousels, and blocking animations.

Impact should come from clear content, approved photography, hierarchy, and movement with purpose.

## 13. Content Required Before Final Design

House content:

- Approved one-sentence Porsion Studio definition.
- House story and Bangladesh origin.
- Verified standards and operating principles.
- Wholesale model and factual capabilities.
- Contact and business information.
- Approved photography showing the House without copying Faris or Laaj.

Faris content:

- Brand promise.
- Menswear positioning.
- Category introductions.
- Fit, fabric, care, and campaign language.

Laaj content:

- Brand promise.
- Womenswear and modest positioning.
- Category introductions, including innerwear.
- Fit, comfort, fabric, care, and campaign language.

Shop content:

- Category taxonomy.
- Product attribute standards.
- Search synonyms.
- Recommendation relationships.
- Filter data.
- Gift and cross-sell rules.

## 14. Analytics Contract

House events:

~~~
house_view
brand_gateway_view
enter_faris
enter_laaj
enter_shop
wholesale_open
wholesale_submit
~~~

Commerce events:

~~~
search_submit
search_result_click
filter_apply
sort_change
product_view
wishlist_add
add_to_bag
cross_sell_view
cross_sell_click
checkout_start
purchase
~~~

Every event includes the current surface, brand context, campaign context, and consent state where applicable. Porsion receives a unified view; Faris, Laaj, Shop, and Wholesale remain segmentable.

## 15. Trust, SEO, and Performance

- Porsion homepage uses Organization and brand-portfolio structured data.
- Faris and Laaj use separate Brand and storefront metadata.
- Product schema belongs to the canonical selling URL.
- Each independent domain must have one canonical URL, sitemap, robots policy, and social image system.
- Domain migration requires approved redirects and duplicate-content checks.
- One priority image per first viewport. All below-fold media lazy loads.
- Preserve fixed image dimensions and responsive sizes.
- Keep shared customer, payment, delivery, legal, privacy, return, and DBID information truthful and accessible.
- Guest checkout, COD, SSLCommerz-supported payments, gift options, and order confirmation remain shared commerce functions.

## 16. Small-Step Frontend Sequence

1. Lock the Porsion Studio homepage information architecture.
2. Lock the exact House, Faris, Laaj, Shop, and Wholesale homepage copy.
3. Reduce and assign unique House homepage media.
4. Implement and review the Porsion Studio homepage only.
5. Build Men/Faris as a complete brand experience.
6. Build Women/Laaj as a complete brand experience.
7. Build the unified Shop taxonomy, search, filters, and mixed catalogue.
8. Add deterministic recommendations, upsell, and cross-sell.
9. Add consent-aware behavioral ranking.
10. Prepare independent-domain routing, canonical rules, central identity, and cart continuity.
11. Run responsive, accessibility, performance, SEO, link, and conversion QA.

Do not start multi-domain deployment or AI personalization before the core three faces and shared Shop journeys are stable.

## 17. Pending Business Decisions

These are intentionally not assumed:

- Final Faris domain.
- Final Laaj domain.
- Whether Shop sells only Porsion-owned products or approved third-party products.
- Wholesale model: finished-goods supply, distribution, private label, manufacturing, or a combination.
- Central checkout host for independent domains.
- Customer identity and cross-domain session strategy.
- Exact beauty, cosmetics, innerwear, and lifestyle launch categories.
- Recommendation consent and retention policy.
- Approved House story, factual capability claims, and wholesale contact process.

## 18. Acceptance Criteria

- A first-time visitor understands Porsion Studio, Men/Faris, Women/Laaj, Shop, and Wholesale within five seconds.
- Porsion Studio builds brand recognition without duplicating full Faris and Laaj homepages.
- Faris and Laaj feel independent to customers while using one platform.
- Shop supports broad discovery without marketplace clutter.
- Behavior changes ranking and suggestions, never personal price or factual product information.
- Search and filters remain useful for the active category.
- Upsell and cross-sell are relevant, limited, and do not block checkout.
- Customer support and wholesale enquiries have separate paths.
- Current same-domain routes work before future independent domains are activated.
- Shared inventory, pricing, bag, checkout, account, policies, and analytics remain consistent across all surfaces.
