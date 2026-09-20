# Porsion Studio Documentation System

This folder is the long-term documentation architecture for Porsion Studio as an AI-native luxury fashion ecosystem and business operating platform.

## Phase Status

| Phase | Document | Status |
| ----- | -------- | ------ |
| 01 | Master Vision | Done |
| 02 | Frontend Design Bible | Done |
| 03 | Frontend Technical Bible | v1 Ready |
| 04 | Design System Bible | v1 Ready |
| 05 | Component Specification Bible | v1 Ready |
| 06 | UX Writing Bible | Next |
| 07 | Content & CMS Bible | Next |
| 08 | Landing Experience Builder Bible | Next |
| 09 | Admin Frontend Bible | Next |
| 10 | Backend Architecture Bible | Next |
| 11 | Database Architecture Bible | Next |
| 12 | API Bible (OpenAPI) | Next |
| 13 | AI Platform Bible | Next |
| 14 | Business OS Bible | Next |
| 15 | DevOps & Infrastructure Bible | Next |
| 16 | Security Bible | Next |
| 17 | QA & Testing Bible | v1 Ready |
| 18 | Analytics & Event Tracking Bible | Next |
| 19 | Design Tokens Repository | v1 Ready |
| 20 | Storybook Component Library | v1 Ready |

## Canonical Documents

1. `01_Master_Vision.md` - Master brand, business, architecture, and OS vision
2. `02_Frontend_Design_Bible.md` - Enterprise frontend design, UX, brand, and experience specification
3. `03_Frontend_Technical_Bible.md` - Frontend engineering rules for developers and AI coding agents
4. `04_Design_System_Bible.md` - Design tokens, UI primitives, motion tokens, and visual system
5. `05_Component_Specification_Bible.md` - Component-by-component specification and Storybook/test rules
6. `06_UX_Writing_Bible.md` - Voice, tone, microcopy, errors, checkout copy, AI copy guardrails
7. `07_Content_CMS_Bible.md` - CMS content model, editorial workflow, journal, policies, campaigns
8. `08_Landing_Experience_Builder_Bible.md` - LEB, EVC, AI Builder, experiments, publishing, analytics
9. `09_Admin_Frontend_Bible.md` - Command Center and admin dashboard UX
10. `10_Backend_Architecture_Bible.md` - Laravel, FastAPI, Redis, PostgreSQL, Meilisearch architecture
11. `11_Database_Architecture_Bible.md` - ERD, tables, relationships, indexes, migrations
12. `12_API_Bible_OpenAPI.md` - REST, OpenAPI, auth, pagination, webhooks, errors, rate limits
13. `13_AI_Platform_Bible.md` - AI Builder, Copilot, Search, SEO, Analytics, agents, RAG
14. `14_Business_OS_Bible.md` - Commerce, CRM, CMS, inventory, marketing, finance, integrations
15. `15_DevOps_Infrastructure_Bible.md` - deployment, environments, CI/CD, observability, scaling
16. `16_Security_Bible.md` - security architecture, auth, permissions, WAF, audit, compliance
17. `17_QA_Testing_Bible.md` - unit, E2E, accessibility, visual regression, performance, QA gates
18. `18_Analytics_Event_Tracking_Bible.md` - analytics events, UTM, pixels, server-side tracking, attribution
19. `19_Design_Tokens_Repository.md` - token naming, storage, export, Tailwind/CSS variable mapping
20. `20_Storybook_Component_Library.md` - Storybook structure, stories, docs, variants, visual testing

## Active Implementation Brief

- `STOREFRONT_EXPERIENCE_BUILD_BRIEF.md` - Canonical House/Faris/Laaj/Shop/Wholesale model, multi-surface journeys, future domain strategy, personalization, search, recommendations, conversion, and shared-platform rules.
- `COMPETITOR_FRONTEND_AUDIT_2026.md` - ILLIYEEN, YELLOW, ARJO, and AMIRA frontend findings with Porsion-specific Adopt/Adapt/Avoid decisions.
- `FRONTEND_COMPLETION_WORKLIST.md` - Prioritized, estimated, execution-ready frontend launch checklist.
- `LUXURY_INTERACTION_AND_ROUTE_CHOREOGRAPHY_SPEC.md` - Locked customer-experience grammar for header, mega menu, brand transitions, route choreography, recovery, consent, wishlist, and account states.

## Frontend Documentation Flow

For frontend work, only these 9 documents are required. After these are complete, the next step is Figma design and coding, not more frontend documentation.

```text
01. Frontend Design Bible
          ->
02. Frontend Technical Bible
          ->
03. Design System Bible
          ->
04. Component Specification Bible
          ->
05. Landing Experience Builder Bible
          ->
06. Admin Frontend Bible
          ->
07. UX Writing Bible
          ->
08. Design Token Repository
          ->
09. Storybook Documentation
```

### Frontend Core Documents

1. `02_Frontend_Design_Bible.md` - Done
2. `03_Frontend_Technical_Bible.md` - v1 Ready
3. `04_Design_System_Bible.md` - v1 Ready
4. `05_Component_Specification_Bible.md` - v1 Ready
5. `08_Landing_Experience_Builder_Bible.md` - Next
6. `09_Admin_Frontend_Bible.md` - Next
7. `06_UX_Writing_Bible.md` - Next
8. `19_Design_Tokens_Repository.md` - v1 Ready
9. `20_Storybook_Component_Library.md` - v1 Ready

### Frontend Documentation Rule

Do not add more frontend Bible documents after these 9 unless a real implementation blocker appears. The goal is to finish the frontend specification, then move into Figma design and coding.

## Frontend Development Assets

| Asset | File/Folder | Status |
| ----- | ----------- | ------ |
| Figma Design System Asset | `FIGMA_DESIGN_SYSTEM.md` | v1 Ready |
| Machine-readable Design Tokens | `../design-tokens/` | v1 Ready |

## Development Sequence

1. Phase 1 Foundation
2. Sprint 2.1 Primitive Components
3. Sprint 2.2 Form System
4. Sprint 2.2.5 QA & Stabilization
5. Sprint 2.3 Navigation System
6. Sprint 2.4 Feedback System
7. Sprint 2.5 Overlay System
8. Sprint 2.6 Commerce Components
9. Sprint 2.7 Editorial Components
10. Sprint 2.8 Layout Components
11. Phase 2 Completion Gate
12. Phase 3 Homepage Assembly
13. Faris Page Assembly
14. Laaj Page Assembly
15. Product and Checkout Experiences
16. Landing Builder
17. Admin
## Phase 2 Gate Note

Sprint 2.2.5 QA & Stabilization runs after Form System and before Navigation System. Phase 3 homepage work must not begin until Phase 2 completion gates are green.

## Documentation Rule

Do not ask a developer or AI agent to build a large feature before the relevant Bible is at least drafted. Large implementation work should point to the exact document and section it follows.

## Archive

The previous 15-document scaffold is preserved in `_archive_15_doc_structure` for reference only. The 20-phase list above is the canonical structure going forward.