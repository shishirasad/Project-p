# Porsion Studio - 2026 Global Fashion House Platform Master AI Prompt

## Role

You are a world-class Product Designer, UX Architect, UI Designer, Frontend Engineer, Brand Strategist, SEO Specialist, Performance Engineer, AI Product Architect, and Enterprise Commerce Architect.

Your task is to design and build **Porsion Studio** as a premium, AI-first, enterprise-grade luxury fashion platform. It must feel like the digital flagship of a global fashion house, not a generic online store.

## Recovery Context

Some previous project files may have been deleted from the local filesystem. This document is the rebuilt source of truth for the product direction, brand identity, technical stack, frontend architecture, commerce features, AI roadmap, SEO, security, performance, and observability requirements.

If implementation files are missing, recreate them from this document while preserving the brand direction and architecture below.

Frontend design execution must follow Porsion_Studio_Frontend_Design_Bible.md as the dedicated Enterprise Frontend Design Bible v2.0 specification.
Documentation system: use `docs/00_Documentation_Index.md` as the canonical map for all platform Bible documents.

## Locked Direction From Previous Discussions

These items are considered locked direction for Porsion Studio unless explicitly changed later.

### Brand Identity

- Parent brand: Porsion Studio
- Men's brand: Faris
- Women's brand: Laaj
- Brand positioning: Quiet Luxury
- Online-first fashion house
- Bangladesh launch with global expansion intent
- Minimal, timeless, editorial identity

### Website Vision

- The website is the Digital Flagship Store, not a conventional e-commerce site.
- The homepage must be a cinematic premium gateway.
- Within the first 5 to 10 seconds, visitors should understand that Porsion Studio is a premium fashion house, that Faris and Laaj exist, and where they should go next.

### Design Direction

- Apple-level minimalism
- COS-inspired layouts
- Loro Piana feeling
- Brunello Cucinelli elegance
- Aesop-inspired calm interface
- Large whitespace
- Editorial layout
- Luxury typography
- Premium photography
- Calm animations

### Technology Stack Direction

- Next.js
- React
- TypeScript
- Tailwind CSS
- Laravel 12
- FastAPI
- PostgreSQL
- Redis
- Meilisearch
- Cloudflare R2

### Frontend Principles

- Mobile first
- SEO first
- SSR
- Core Web Vitals optimized
- Accessible to WCAG standards
- Reusable components
- Performance first

### Homepage Structure

- Hero
- Brand story
- Featured collections
- Campaign
- Journal
- Footer

### Navigation

Desktop navigation:

- Logo
- The Collection
- Faris
- Laaj
- The Journal
- The House
- Search
- Account
- Wishlist
- Bag

Mobile navigation:

- Home
- Search
- Collection
- Wishlist
- Bag

### Product Page Direction

- Large gallery
- Zoom
- Fabric details
- Size guide
- Delivery and returns
- Sticky add to bag
- Related products

### SEO Direction

- Semantic HTML
- Schema.org
- Open Graph
- Twitter Cards
- XML sitemap
- Canonical URLs
- Clean URLs
- Alt text
- Internal linking

### Business Direction

- Parent House architecture
- Separate brand identity for Faris and Laaj
- Website first, mobile app later
- Facebook and website integration
- Online-first operations

### Later Locked Architecture Direction

- AI-Native Architecture
- API-First Backend
- Headless Commerce
- Cloudflare-first infrastructure
- Open Source-first approach
- Multi-LLM ready with OpenAI, Anthropic, and Gemini
- MCP-compatible future architecture
- Luxury UX has higher priority than aggressive conversion tactics
- Bangladesh-centered launch with global scaling designed from the beginning
- Unified Marketing and Advertising Hub belongs inside Porsion Studio OS
- Customer Data Platform is a core business brain for unified customer identity and journey tracking
- Porsion Studio OS Command Center is the central operating surface for the business
- Command Center principle: One Login. Full Business Control.
- Integration Hub is required for connector-based external service expansion
- Porsion Studio should be designed as a modular operating system, not separate disconnected tools
- Landing Experience Builder is a core Porsion Studio OS feature
- Experience Version Control is required for landing pages, homepage states, seasonal campaigns, and frontend experiences
- AI Campaign Hub connects landing pages, ads, content, UTM links, QR codes, and analytics
- AI Builder Studio is the code, design, upload, prompt, preview, diff, and version-control surface for Porsion Studio OS
- AI Workspace combines chat, builder, IDE, preview, diff, tests, commits, and versioning
- Human Override and Approval Workflow are mandatory before AI-generated changes reach production
- Porsion Studio OS is a business platform, not only a website admin panel
- One strong Core Platform should power website, mobile app, AI, marketing, admin, analytics, retail, marketplace, and future services
- Frontend stack: Next.js 16, React 19.2 stable, TypeScript, Tailwind CSS v4, Turbopack
- React 20 should not be locked until it is officially stable and ecosystem-ready

## Open Decisions Before Architecture Specification v1.0

These items have been discussed but are not formally locked yet. They must be resolved before declaring **Porsion Studio Architecture Specification v1.0** complete.

- Final payment gateway selection
- CMS strategy: Filament-only or dedicated headless CMS
- Authentication strategy: Laravel Sanctum, Auth.js, Passkeys, or combined model
- Hosting provider: Vercel plus Hetzner, AWS, or another backend host
- AI vector database: Qdrant or pgvector
- Message queue: Redis Queue or RabbitMQ
- Production object storage configuration
- Observability stack: Grafana, Prometheus, Sentry, and related services
- ERP and CRM integration strategy
- CDP build strategy: custom, open-source, hosted, or hybrid
- Advertising platform integration launch order
- Server-side tracking and consent architecture
- Integration connector architecture and governance
- OAuth token storage and rotation strategy
- Courier, accounting, social, AI, and storage integration priorities
- Landing Experience Builder content model and block schema
- Experience Version Control storage, diff, restore, rollback, and publishing model
- Experiment Hub attribution, traffic allocation, and winner-selection model
- AI Campaign Hub generation guardrails, approval flow, and brand-safety rules
- AI Builder Studio permission model, sandboxing, file limits, and supported import/export formats
- AI Workspace diff, preview, test, commit, version-save, and publish-preparation workflow
- Human Override workflow and production publishing governance
- Core OS module ownership and MVP sequencing
- Visual builder strategy for database, API, forms, tables, workflows, notifications, email, PDF, QR, barcode, and release tools
## Porsion Studio

### The House of Timeless Fashion

**Porsion Studio** is a premium fashion house founded on the philosophy that true luxury is quiet, intentional, and timeless. Rather than chasing trends, Porsion Studio creates refined essentials and enduring collections designed to become part of everyday life.

The company is built as a **House of Brands**, where each label has its own identity while sharing the same commitment to craftsmanship, quality, and understated elegance.

Porsion Studio is not only a clothing brand. It is a luxury fashion ecosystem with the long-term ambition to become a globally respected fashion house originating from Bangladesh.

## Brand Philosophy

Luxury is not defined by loud logos or seasonal hype. It is expressed through thoughtful design, exceptional materials, perfect proportions, and uncompromising attention to detail.

Every collection is created with purpose.

Every product is designed to last.

Every interaction is crafted to feel calm, premium, and effortless.

## Mission

To build one of the world's most respected modern fashion houses by creating timeless clothing and digital experiences that combine craftsmanship, technology, and refined design.

## Vision

To transform Porsion Studio into an internationally recognized luxury fashion house originating from Bangladesh, known for timeless design, exceptional quality, and a world-class customer experience.

## Core Values

- Timeless over Trend
- Quality over Quantity
- Craftsmanship over Mass Production
- Simplicity over Complexity
- Experience over Transaction
- Sustainability through Longevity
- Innovation with Purpose
- Customer Trust Above Everything

## Brand Structure

### Parent House

**Porsion Studio** is the parent fashion house responsible for design direction, technology, operations, branding, retail experience, and future brand expansion.

### Menswear: Faris

**Faris** is the men's clothing and menswear label of Porsion Studio, positioned around timeless quiet luxury and quiet confidence.

Collections include:

- Shirts
- Polo
- T-Shirts
- Trousers
- Denim
- Knitwear
- Outerwear
- Accessories

### Womenswear: Laaj

**Laaj** is the refined womenswear label of Porsion Studio, celebrating elegance, confidence, femininity, and timeless modern dressing.

Collections include:

- Dresses
- Modest Fashion
- Co-ords
- Tops
- Bottoms
- Occasion Wear
- Accessories

## Digital Philosophy

Porsion Studio is digital-first. The website is not simply an online store. It is the digital flagship store.

Visitors should feel they have entered a luxury fashion house rather than browsing a conventional e-commerce website.

Technology exists to make the experience invisible. The platform should be extremely fast, secure, accessible, SEO-first, AI-ready, mobile-first, cloud-native, and scalable worldwide.

## Architecture Philosophy

Porsion Studio must be built as an **AI-Native, API-First, Headless, Cloud-Native, Open Source-first Luxury Fashion Platform**.

### AI-Native

Every feature should be AI-ready from the beginning.

AI capabilities must support:

- Multi-LLM providers: OpenAI, Anthropic, Gemini, and local models
- MCP compatibility through Model Context Protocol-ready service boundaries
- Agent-ready architecture
- AI stylist
- AI search
- AI content generation
- AI customer support
- AI analytics
- AI product assistant
- AI recommendation engine
- AI memory layer

### API-First

Frontend and backend must remain fully separated.

The API surface should support:

- REST API for core commerce
- GraphQL readiness for future flexible clients
- Public API
- Admin API
- Mobile API
- Webhook API

### Headless Commerce

Each major capability should remain independently replaceable and scalable.

The platform must keep these layers separate:

- Frontend
- Backend
- CMS
- Search
- CDN
- Storage
- AI services
- Analytics

### Cloud-Native

The platform should be designed for global scale from the start.

Cloud-native principles:

- Containerized services
- CDN-first delivery
- Edge caching
- Queue workers
- Event-driven jobs
- Horizontal scaling
- Multi-region readiness
- Secrets management
- Observability by default

### Open Source-first

Prefer open, portable, self-hostable technologies when they do not harm customer experience or operational reliability.

## Customer Experience

Every touchpoint should communicate calmness, confidence, and refinement.

From homepage to checkout, the experience must be:

- Fast
- Minimal
- Beautiful
- Accessible
- Human
- Trustworthy

## Product Philosophy

Every garment should satisfy five principles:

- Timeless Design
- Premium Materials
- Excellent Fit
- Long-term Durability
- Everyday Versatility

## Design Language

Inspired by:

- Apple
- COS
- Loro Piana
- Brunello Cucinelli
- Aesop

Characteristics:

- Large whitespace
- Editorial layouts
- Quiet typography
- Minimal interface
- Cinematic photography
- Natural textures
- Slow luxury feeling

The experience should feel calm, refined, editorial, premium, tactile, and high-trust. Prioritize brand perception before conversion pressure.

## Future Ecosystem

Porsion Studio is designed to expand beyond apparel into a complete lifestyle house.

Future categories may include:

- Footwear
- Leather Goods
- Bags
- Fragrances
- Watches
- Eyewear
- Home & Living
- Lifestyle Objects
- Beauty & Grooming

## Long-Term Goal

Porsion Studio aims to become a globally respected fashion house where thoughtful design, timeless products, and exceptional digital experiences define every interaction.

Rather than competing on trends or volume, the brand seeks to earn lasting trust through consistent quality, refined aesthetics, and a customer experience that feels premium from the first visit to years of ownership.

## Platform Foundation

These foundations must exist from the beginning, even when every related feature is not launched on day one.

- AI-Native Architecture
- API-First
- Headless Commerce
- Multi-brand support
- Multi-language support
- Multi-currency readiness
- Multi-country readiness
- Event-driven architecture
- Feature flag system
- Environment configuration
- Versioned API
- Experience Management Platform readiness
- Brand Operating System readiness
- Unified Marketing and Advertising Hub readiness
- Customer Data Platform readiness
- Porsion Studio OS Command Center readiness
- Integration Hub readiness
- Modular connector architecture readiness
- Landing Experience Builder readiness
- Experience Version Control readiness
- AI Campaign Hub readiness
- AI Builder Studio readiness
- AI Workspace readiness
- Human Override and Approval Workflow readiness
- Core OS module boundary readiness
- Enterprise platform utility readiness

## Porsion Studio OS Module Taxonomy

Porsion Studio OS must be designed as a modular business platform, not only as a website admin panel. Each OS module should have clear ownership, permissions, APIs, events, audit logs, and integration points.

The same Core Platform should power the website, mobile apps, AI surfaces, marketing operations, admin workflows, analytics, future physical stores, marketplace channels, and international expansion.

### Business OS

- Business settings
- Multi-company readiness for future expansion
- Multi-brand
- Multi-warehouse
- Multi-country
- Multi-language
- Multi-currency
- Tax rules

### Commerce OS

- Product Information Management
- Digital Asset Management
- Order Management System
- Inventory Management System
- Returns Management
- Pricing engine
- Promotion engine

### Customer OS

- Customer 360-degree profile
- CRM
- Loyalty
- Membership
- Referral
- Wishlist
- Gift cards
- Store credit

### Experience OS

- Landing Builder
- Homepage Builder
- Theme Builder
- Navigation Builder
- Header and Footer Builder
- Campaign Builder
- Seasonal Experience

### Marketing OS

- Ad Hub
- Email Hub
- WhatsApp Hub
- SMS Hub
- Push Notification Hub
- UTM Manager
- SEO Manager

### AI OS

- AI Builder
- AI Copilot
- AI Chat
- AI Search
- AI Translation
- AI SEO
- AI Product Writer
- AI Image Analysis
- AI Analytics

### Media OS

- Image optimization
- Video streaming
- CDN manager
- Asset versioning
- Auto AVIF and WebP generation
- Watermark rules

### Content OS

- Headless CMS
- Journal
- Lookbook
- Policy pages
- FAQ
- Brand story

### Analytics OS

- Executive dashboard
- Sales analytics
- Marketing analytics
- Funnel analytics
- Heatmaps
- Session replay
- Customer journey
- Profit dashboard

### Operations OS

- Task manager
- SOP manager
- Approval workflow
- Calendar
- Notifications
- Internal chat

### Finance OS

- Expense tracking
- Profit and loss
- Cash flow
- Invoice
- Vendor payments
- Tax reports

### Shipping OS

- Courier integration
- Shipping rules
- Delivery zones
- Tracking
- Cash on delivery rules

### Developer OS

- API manager
- Webhooks
- Logs
- Feature flags
- Version control
- Environment manager
- Secrets manager

### Security OS

- Role and permission
- Audit logs
- Login history
- Device management
- Passkeys
- WAF
- Fraud detection

### Testing OS

- A/B testing
- Multivariate testing
- Visual regression
- Performance testing
- Accessibility testing
- Broken link scanner

### Automation OS

- Workflow Builder
- Event Engine
- Queue Monitor
- Scheduled Tasks
- AI Automation

### Integration OS

- Meta
- Google
- TikTok
- WhatsApp Business
- Cloudflare
- Payment gateways
- Courier APIs
- ERP
- CRM
- Email providers

### Knowledge OS

- Documentation
- Brand guidelines
- Design system
- Training center
- SOP library

### Enterprise Platform Utilities

These are enterprise-grade platform capabilities that should be planned early, even when implemented gradually.

- Visual Database Designer
- Visual API Builder
- Dynamic Form Builder
- Dynamic Table Builder
- Dynamic Workflow Builder
- Notification Template Builder
- Email Template Builder
- PDF and Invoice Builder
- QR Code Manager
- Barcode Generator
- Bulk Import and Export
- Data Migration Tools
- Cache Manager
- Search Index Manager
- Error Center
- Health Monitor
- Release Manager
- Backup and Restore Center
- Sandbox and Staging Environment
- Rollback System
- System Status Dashboard

### Core Platform Decision

Porsion Studio OS must be treated as a long-term business platform. If the company launches a new brand, builds a mobile app, opens a physical store, sells through marketplaces, or starts international shipping, the same backend and operating system should remain usable.

This is the enterprise approach: one strong Core Platform, with website, mobile app, AI, marketing, admin, analytics, retail, integrations, and future services built on top.
## Enterprise Capability Map

Porsion Studio must be planned as a 10 to 20 year luxury fashion ecosystem. Not every capability needs to launch on day one, but the architecture must reserve clear extension points for each domain.

### 1. Business Foundation

- Parent brand management
- Multi-brand management for Porsion Studio, Faris, Laaj, and future labels
- Company settings
- Legal documents
- Trade license, VAT, and TIN support
- Brand guidelines

### 2. Product Management

- Product Information Management
- Categories
- Collections
- Variants for size, color, fit, fabric, and other attributes
- Fabric library
- Care instructions
- Product lifecycle
- Dynamic attributes
- Slug system
- Metadata framework
- Version history

### 3. Digital Asset Management

- Image library
- Video library
- Brand assets
- Media library
- CDN management
- AI-generated media support

### 4. Customer Platform

- Customer accounts
- Unified customer profile
- Guest checkout
- Wishlist
- Saved addresses
- Order history
- Loyalty
- Gift cards
- Store credit
- Consent management
- Device management
- Session management

### 5. Commerce

- Cart
- Checkout
- Orders
- Returns with RMA
- Refunds
- Shipping
- Coupons
- Promotions
- Pricing engine
- Promotion engine
- Tax engine
- Shipping engine

### 6. Payments

- bKash
- Nagad
- SSLCommerz
- Cards
- Stripe for future international payments
- PayPal for future international payments

### 7. Inventory

- Stock management
- Warehouses
- Purchase orders
- Low stock alerts
- Inventory forecasting
- Inventory analytics

### 8. Marketing

- Email marketing
- SMS and WhatsApp automation
- Push notifications
- Referral program
- Affiliate program
- Campaign manager
- Landing Experience Builder integration
- Coupon engine
- A/B testing
- Personalization engine

### 9. Content

- Headless CMS
- Editorial system
- Journal
- Lookbook
- Brand story
- FAQ
- Policy pages
- Reusable content blocks

### 10. AI Platform

- AI search
- AI stylist
- AI product descriptions
- AI translation
- AI SEO
- AI recommendations
- AI customer support
- AI size recommendation
- AI outfit builder
- AI demand forecasting
- AI insights

### 11. Analytics

- Sales dashboard
- Customer dashboard
- Marketing dashboard
- Inventory dashboard
- Business dashboard
- Funnel analytics
- Heatmaps
- Cohort analysis
- Conversion tracking
- AI insights

### 12. Admin System

- Roles and permissions
- Audit logs
- Activity logs
- Approval workflow
- Notifications
- Admin roles and permissions

### 13. Security

- Passkeys
- Two-factor authentication
- Zero Trust principles
- WAF
- Bot protection
- Encryption at rest and in transit
- Backup and disaster recovery
- Secrets management
- Rate limiting
- Fraud detection
- Security headers
- Dependency scanning

### 14. Performance

- Edge caching
- Image optimization
- CDN
- Queue workers
- Core Web Vitals optimization
- Streaming SSR
- Partial Prerendering

### 15. SEO

- Schema.org
- Open Graph
- XML sitemap
- Canonical URLs
- Structured data
- International SEO
- hreflang readiness

### 16. Infrastructure

- Docker
- CI/CD
- Monitoring
- Logging
- Auto scaling
- Background jobs
- Scheduler
- Backup and restore
- Disaster recovery plan

### 17. Developer Platform

- Monorepo
- Design system
- Design tokens
- Component library
- Storybook
- API documentation with OpenAPI
- Automated testing
- Coding standards
- Infrastructure as Code

### 18. Future Expansion

- Mobile apps for iOS and Android
- POS system
- B2B wholesale portal
- Marketplace integration
- ERP integration
- CRM integration
- Franchise and retail store support
- Warehouse management
- Native iOS app
- Native Android app

### 19. Experience Management Platform

The Experience Management Platform controls the full customer experience, not only content.

- Personalized homepage
- Dynamic banners
- A/B testing
- Feature flags
- Seasonal campaign switching
- Region-specific experience
- Personalized collection surfaces
- Brand-specific experience rules for Porsion Studio, Faris, Laaj, and future labels

### 20. Brand Operating System

The Brand Operating System is the long-term operating layer for Porsion Studio as a luxury house.

- Brand guidelines
- Asset approval
- Campaign calendar
- Product release workflow
- Vendor and supplier management
- Quality control
- Internal documentation
- Standard Operating Procedures
- Brand governance
### 21. Unified Marketing And Advertising Hub

The Unified Marketing And Advertising Hub is the central dashboard for advertising, tracking, analytics, creative assets, campaign operations, automation, and AI optimization.

The goal is to control every major advertising and performance marketing workflow from one place.

#### Advertising Channels

Meta:

- Facebook Ads
- Instagram Ads
- Messenger Ads

Google:

- Google Ads
- Shopping Ads
- Performance Max
- YouTube Ads

Other paid channels:

- TikTok Ads
- Pinterest Ads
- Snapchat Ads
- LinkedIn Ads for future B2B and hiring campaigns
- X Ads for future campaigns

Marketplace ads for future expansion:

- Amazon Ads
- Etsy Ads
- Daraz Ads

#### Advertising Analytics

The hub should report:

- Total spend
- ROAS
- CPA
- CPC
- CTR
- CPM
- Revenue
- Orders
- Conversion rate
- Customer acquisition cost
- Lifetime value

#### Tracking And Attribution

Tracking should be controlled from one place:

- Meta Pixel
- Meta Conversions API
- Google Tag Manager
- Google Analytics 4
- Google Ads Conversion
- TikTok Pixel
- Pinterest Tag
- Microsoft Clarity
- Server-side tracking
- UTM governance
- Consent-aware attribution

#### AI Optimization

AI optimization should support:

- AI budget allocation
- AI audience suggestions
- AI campaign optimization
- AI creative analysis
- AI performance prediction
- AI auto pause for low performance ads
- AI auto scale for winning ads

#### Creative Library

The hub should centralize:

- Images
- Videos
- Reels
- Copy
- Headlines
- Calls to action
- UTM templates
- Campaign templates

#### Campaign Manager

Campaign states:

- Draft
- Scheduled
- Running
- Paused
- Archived

#### Advertising Automation

Automation should support:

- Budget rules
- Bid rules
- Auto scaling
- Auto pause
- Auto restart
- Alerts through email, WhatsApp, and Telegram

#### Command Dashboard Metrics

The main marketing dashboard should show:

- Today's sales
- Today's ad spend
- ROAS
- Revenue
- Profit
- Best campaign
- Worst campaign
- Top product
- Top audience
- Top creative

### 22. Customer Data Platform

The Customer Data Platform is the business brain for unified customer identity, customer journey tracking, segmentation, personalization, AI recommendations, and lifecycle marketing.

It should unify:

- Website visitors
- Facebook leads
- Instagram messages
- WhatsApp chats
- Email subscribers
- Orders
- Returns
- Support history
- Loyalty points
- AI customer profile

The CDP must allow the team to understand a complete customer journey, such as a person seeing a Facebook ad, sending an Instagram message, returning through the website, and finally placing an order.

The CDP should provide:

- Unified customer timeline
- Identity resolution
- Segmentation
- Consent-aware profiles
- Channel preferences
- Purchase intent signals
- Lifecycle stage
- Personalization inputs
- AI customer profile memory

### 23. Porsion Studio OS Command Center

The Porsion Studio OS Command Center is the central control room for the entire business.

Operating principle: **One Login. Full Business Control.**

A single secure login should give authorized team members access to every operating surface they need, based on role, permission, brand, region, and responsibility.

The Command Center should prevent dashboard sprawl by bringing core business control into one coherent operating experience. The website, mobile apps, admin, AI, advertising, customer support, orders, inventory, finance, and automation must all feel like parts of the same platform.

#### 1. Executive Dashboard

- Live sales
- Revenue
- Profit
- Orders
- Visitors
- Conversion rate
- Inventory health
- AI business insights

#### 2. Brand Management

- Porsion Studio
- Faris
- Laaj
- Future new brands
- Brand-specific settings
- Brand governance

#### 3. Product And Catalog

- Products
- Collections
- Pricing
- Inventory
- Media
- Size charts
- Product lifecycle

#### 4. Marketing And Advertising Hub

- Meta Ads
- Google Ads
- TikTok Ads
- Email marketing
- WhatsApp campaigns
- AI campaign optimizer

#### 5. Customer Hub

The Customer Hub must provide a 360-degree view of each customer.

- Customer profile
- Orders
- Messages
- Wishlist
- Loyalty
- Returns
- Lifetime value
- Consent status
- AI customer profile

#### 6. Orders And Fulfillment

- Order processing
- Shipping
- Tracking
- Returns
- Refunds
- Fulfillment status

#### 7. Finance

- Sales reports
- Expenses
- Profit and loss
- Taxes
- Payment reconciliation
- Refund reconciliation

#### 8. CMS And Content

- Homepage
- Journal
- Landing pages
- Campaigns
- SEO content
- Policy pages

#### 9. AI Center

- AI copywriter
- AI stylist
- AI search
- AI customer support
- AI analytics
- AI automation
- AI agents
- AI Builder Studio
- AI Workspace
- AI review and approval queue

#### 10. Team And Security

- Roles and permissions
- Audit logs
- Activity logs
- API keys
- Security center
- Device and session management

#### 11. Analytics

- GA4
- Microsoft Clarity
- Custom dashboards
- Funnel analysis
- Cohort analysis
- Business intelligence

#### 12. Integrations

- Payment gateways
- Couriers
- ERP
- CRM
- Accounting
- Social platforms
- AI providers
- Storage providers

### 24. Integration Hub

The Integration Hub is one of the most important parts of Porsion Studio OS. It allows the platform to connect external services through API, OAuth, webhook, scheduled sync, or event-driven connectors without changing the whole system.

The goal is simple: when a new service is needed, the team should add a new **Integration Connector** instead of rebuilding core architecture.

#### Connector Categories

Social and advertising:

- Facebook
- Instagram
- Google
- TikTok
- WhatsApp Business
- YouTube

Payments:

- Stripe
- bKash
- Nagad
- SSLCommerz

Couriers and logistics:

- Pathao
- RedX
- SteadFast
- Paperfly

Marketplaces and commerce:

- Daraz
- Amazon
- Shopify if ever needed

Team communication:

- Slack
- Discord
- Telegram

Developer and AI platforms:

- GitHub
- OpenAI
- Anthropic
- Gemini
- Cloudflare

Files and productivity:

- Google Drive
- Dropbox

#### Integration Hub Requirements

- OAuth connection flow
- API key management
- Webhook registration
- Connector health status
- Sync history
- Error logs
- Retry controls
- Rate-limit handling
- Permission scopes
- Secret rotation
- Sandbox and production modes
- Event-driven connector jobs
- Connector versioning
- Audit logs for integration changes

#### Modular OS Principle

Porsion Studio must be designed as a modular operating system. Website, mobile app, admin, AI, advertising, customer support, orders, finance, shipping, content, automation, and analytics should belong to one connected platform rather than becoming separate disconnected software stacks.
### 25. Landing Experience Builder

The Landing Experience Builder is a core feature of Porsion Studio OS. It must be more than a Shopify-style drag-and-drop page builder. It should combine visual editing, reusable experience blocks, AI generation, version control, publishing workflows, analytics, and experimentation.

The Landing Experience Builder belongs inside the Experience Management Platform and connects directly with the Unified Marketing And Advertising Hub, Customer Data Platform, AI Campaign Hub, Creative Library, Product Catalog, and Analytics Platform.

#### Visual Builder

- Drag and drop
- Reusable sections
- Reusable blocks
- Global components
- Device preview
- Responsive editing
- Live preview
- Brand-safe component constraints
- Role-based editing permissions

#### Landing Page Templates

- Product launch
- Collection
- Facebook Ads
- Instagram Ads
- TikTok Ads
- Eid campaign
- Flash sale
- New arrival
- Brand story
- Journal landing
- Influencer landing
- Affiliate landing

#### Page Version Control

Every landing page should support:

- V1
- V2
- V3
- V4
- Current live
- Draft

Version actions:

- Compare
- Restore
- Rollback
- Duplicate
- Branch
- Schedule
- Publish
- Archive

#### Experiment Hub

The same landing page should support multiple test variants.

Experiment variants:

- Version A
- Version B
- Version C

Experiment analytics:

- Conversion rate
- Bounce rate
- Time on page
- ROAS
- Revenue
- Heatmap
- Scroll depth
- Click map
- Session recording

AI should be able to allocate traffic, monitor performance, and suggest the winning version while keeping humans in control of final approval.

#### Publishing Workflow

- Draft
- Review
- Approved
- Scheduled
- Published
- Archived

#### AI Landing Builder

A user should be able to write a campaign brief such as **Premium Linen Shirt Facebook Campaign**, and AI should generate a complete landing experience.

AI-generated outputs:

- Hero
- Images
- Copy
- CTA
- Layout
- SEO
- Meta tags
- Schema
- Mobile optimization
- Experiment variants

All AI output must follow brand guidelines, approval workflows, and audit logging.

#### History Timeline

The timeline must show:

- Who changed the page
- When the change happened
- What changed
- Why it changed through a change note
- Which campaign, product, or ad was affected

#### Rollback

Rollback should support one-click restore for:

- Yesterday's version
- Last week's version
- A specific saved version
- A previous live version
- A seasonal campaign version

#### Asset Linking

Landing pages should link to:

- Images
- Videos
- Products
- Collections
- Campaigns
- Ads
- UTM links
- QR codes
- Creative assets

#### Landing Page Analytics

Each landing page should report:

- Visitors
- Orders
- Revenue
- ROAS
- Conversion rate
- Funnel
- Heatmap
- Click map
- Session recording
- Scroll depth
- Traffic source
- Device performance

#### AI Insights

AI should identify experience issues such as:

- Hero image is weak
- CTA is too low
- Mobile scroll is too long
- Video drop-off is high
- Section 3 is being skipped
- Button contrast may reduce conversion
- Product block should move higher
- A different image or CTA may improve conversion

#### Campaign Link Distribution

The same landing page link should be usable across:

- Facebook Ads
- Instagram Ads
- TikTok Ads
- Google Ads
- Email campaigns
- WhatsApp
- SMS
- QR codes
- Influencer campaigns
- Affiliate campaigns

### 26. Experience Version Control

Experience Version Control extends versioning beyond individual landing pages to the full frontend experience.

It should version homepage states, campaign states, page layouts, content blocks, theme settings, merchandising rules, and seasonal experiences.

Experience examples:

- Homepage V1
- Homepage V2
- Eid Homepage
- Black Friday Homepage
- Winter Campaign
- Ramadan Campaign
- New Arrival Campaign
- Faris campaign experience
- Laaj campaign experience

Experience Version Control should support:

- Compare
- Restore
- Rollback
- Duplicate
- Branch
- Schedule
- Publish
- Archive
- One-click seasonal switching
- Brand-specific experience rules
- Region-specific experience rules
- Device-specific preview
- Change notes
- Approval workflow
- Audit logs

Experience Version Control is not a replacement for code Git. It is a business-facing version control layer for website experiences, campaigns, content, personalization, and merchandising configuration.

### 27. AI Campaign Hub

The AI Campaign Hub connects campaign planning, landing pages, ad creatives, content, tracking, analytics, and optimization into one workflow.

When a team creates a campaign such as **Eid Premium Collection 2027**, the system should be able to generate and manage the full marketing stack from one place.

Campaign outputs:

- Landing page
- Facebook ad creative
- Instagram Story
- Instagram Feed
- TikTok creative
- Email template
- WhatsApp template
- SEO metadata
- UTM links
- QR code
- Analytics dashboard
- Creative variants
- Audience suggestions
- Budget suggestions

Campaign workflow:

- Brief
- AI draft
- Human review
- Brand approval
- Schedule
- Publish
- Monitor
- Optimize
- Archive
- Learnings

The AI Campaign Hub must connect with:

- Landing Experience Builder
- Experience Version Control
- Unified Marketing And Advertising Hub
- Customer Data Platform
- Creative Library
- Product Catalog
- CMS
- Analytics Platform
- Integration Hub

The goal is to make campaign creation, launch, measurement, and optimization feel like one connected operating system workflow.
### 28. AI Builder Studio

AI Builder Studio is a core Porsion Studio OS feature where prompt, code, design, upload, live preview, version control, review, and export workflows come together.

It is not only a prompt box. It is a controlled AI product-building environment for Porsion Studio experiences, components, landing pages, campaigns, admin modules, and future internal tools.

#### Prompt Builder

- Natural language prompt
- Template prompt
- Saved prompt
- Prompt library
- Prompt version
- Brand-aware prompt presets
- Campaign-aware prompt presets

#### Upload Center

The Upload Center should accept:

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Tailwind
- Laravel
- Python
- JSON
- Markdown
- ZIP project
- Figma export
- Images
- Videos
- Fonts
- SVG
- Icons
- PDF
- DOCX

#### AI Code Understanding

After upload, AI should be able to perform:

- Full project scan
- Dependency scan
- Component tree detection
- API detection
- Route detection
- Database detection
- SEO scan
- Accessibility scan
- Performance scan
- Security scan
- Design system scan
- Brand consistency scan

#### AI Refactor

AI refactor actions:

- Clean code
- Modernize
- Optimize
- Convert JavaScript to TypeScript
- Convert React to Next.js where appropriate
- Improve performance
- Improve accessibility
- Improve SEO
- Align UI with Porsion Studio design standards

#### AI Merge

When a new component or project is uploaded, AI should detect conflicts and present clear choices:

- Conflict
- Merge
- Replace
- Duplicate
- Create new version
- Keep both
- Request human decision

AI should never silently overwrite important work.

#### Visual Builder And Code Editor

AI Builder Studio should support a synchronized split workspace:

- Visual Builder on the left
- Live Code Editor on the right
- Two-way sync between visual edits and code edits
- Component selection
- Style editing
- Responsive layout controls
- Brand-safe constraints

#### Live Preview

Preview modes:

- Desktop
- Tablet
- Mobile
- Landscape
- Dark
- Light
- Reduced motion
- High contrast

#### AI Explain

When a user selects code, AI should explain:

- What it does
- Why it is needed
- Performance implications
- Security implications
- Accessibility implications
- A better version when useful

#### AI Generate

A user should be able to ask for an experience such as **Create Premium Product Page**, and AI should generate:

- Layout
- React component
- Tailwind styles
- Animation
- SEO metadata
- Accessibility improvements
- Responsive behavior
- Test suggestions

#### Import

Import sources:

- GitHub repository
- ZIP file
- Local folder
- Figma design
- Storybook
- OpenAPI specification

#### Export

Export targets:

- Next.js project
- React project
- HTML
- ZIP
- GitHub commit
- Docker package
- Component package

#### AI Review

Before publish, AI must check:

- Bugs
- Accessibility
- SEO
- Performance
- Responsive behavior
- Security
- Best practices
- Brand consistency
- Broken links
- Missing metadata

#### Component Library

Reusable components should be saved and versioned:

- Hero
- Navbar
- Footer
- Product card
- Checkout
- Banner
- Campaign block
- Editorial section
- Size guide
- Fabric story

Components should be reusable across projects, landing pages, campaigns, and future brands when permissions allow.

#### Smart Asset Linking

When a new asset is uploaded, AI should suggest relevant destinations:

- Homepage hero
- Faris campaign
- Laaj collection
- Landing page
- Product gallery
- Journal story
- Ad creative
- Email campaign

AI should ask before applying asset changes.

### 29. AI Workspace

AI Workspace is a Chat + Builder + IDE experience for controlled AI-assisted product work.

Example instruction:

**Faris product page-er Size Guide-er niche Fabric Story jog koro. Animation Apple-er moto hobe. Mobile layout noshto korbe na.**

AI Workspace should then:

- Understand the request
- Locate affected code and content
- Propose an implementation plan
- Change code in a controlled branch or version
- Show live preview
- Show diff
- Run tests
- Run AI review
- Create commit or version package
- Save version
- Prepare for publish
- Request human approval

AI Workspace must connect with:

- AI Builder Studio
- Landing Experience Builder
- Experience Version Control
- Component Library
- Design System
- GitHub integration
- CI/CD
- Preview deployments
- QA checklist
- Approval workflow

### 30. Human Override And Approval Workflow

Human control is mandatory. AI must never publish code, design, content, landing pages, campaigns, or production configuration directly to the live site without approval.

Required workflow:

```text
AI Suggest
      ↓
Preview
      ↓
Diff Compare
      ↓
Human Approval
      ↓
Staging
      ↓
QA Test
      ↓
Publish
```

Governance requirements:

- AI-generated changes must be reviewable
- Every change must have a diff or visual comparison
- Every important change must have an owner
- Production publishing requires explicit human approval
- Rollback must be available
- Audit logs must record who approved what and when
- AI decisions must be explainable
- Permission levels must control who can approve, publish, rollback, and connect integrations
- Brand-critical surfaces require brand approval
- Security-sensitive changes require technical approval

This workflow preserves AI speed while keeping human judgment, brand control, and production safety intact.
## Locked Frontend Stack v1.0

The frontend must be premium, extremely fast, SEO-friendly, lightweight, accessible, marketing-optimized, Bangladesh-first, and international-ready.

### Core Runtime

- Next.js 16 with App Router
- React 19.2 stable line
- TypeScript with strict mode
- Node.js 20.9+ minimum runtime for Next.js 16 compatibility
- pnpm for package management
- Turbopack as the default Next.js bundler

React 20 should remain a future upgrade path only after it is officially stable and the Next.js, Motion, Radix, shadcn/ui, testing, and analytics ecosystem is ready.

### Styling And Design System

- Tailwind CSS v4
- CSS-first theme tokens
- Native CSS variables for brand tokens
- Container queries
- CSS transitions first
- Motion only for premium micro-interactions and page-level polish
- No Sass by default
- No heavy theme framework

### UI Components

- shadcn/ui as the component starting point
- Radix UI primitives for accessible dialogs, menus, popovers, tabs, accordions, and drawers
- lucide-react for icons
- Embla Carousel only where a carousel is truly needed
- React Aria only for complex accessibility cases not covered cleanly by Radix

### Data And State

- React Server Components by default
- Server-side fetch for public storefront data
- TanStack Query only for client-heavy interactive surfaces such as search, account, cart, wishlist, checkout, and dashboard modules
- Zustand only for small client state such as cart UI, wishlist UI, drawer state, preview mode, and theme/brand context
- Zod for schema validation
- React Hook Form for forms

### Internationalization

- next-intl
- English first with Bangla-ready routing and copy structure
- Bangladesh-first address, currency, and support flows
- International SEO and hreflang readiness

### Content And SEO

- Next.js Metadata API
- JSON-LD schema components
- MDX for journal/editorial content
- Clean route structure
- Canonical URL support
- Open Graph and Twitter/X cards
- Sitemap and robots generation

### Images And Media

- next/image
- Cloudflare Images
- Cloudflare R2
- AVIF and WebP by default
- Blur placeholders
- Responsive sizes
- Lazy loading below the fold
- Priority loading only for first-viewport hero/product media

### Forms And Checkout UI

- React Hook Form
- Zod validation
- Accessible field components
- Bangladesh-ready address model
- Payment UI prepared for bKash, Nagad, SSLCommerz, cards, Stripe, and PayPal

### Animation Rules

- Native CSS transitions first
- View Transition API where supported
- Motion for restrained luxury interactions
- No GSAP by default
- No Lenis by default
- Respect reduced motion
- Target 60 FPS

### Analytics And Marketing Frontend

- Consent-aware analytics loading
- Server-side tracking readiness
- UTM capture
- Campaign context capture
- Brand context capture for Porsion Studio, Faris, and Laaj
- GA4, Meta Pixel, Meta CAPI, TikTok Pixel, Pinterest Tag, and Clarity should be integration-ready but loaded lazily and conditionally

### Personalization Frontend

- Brand-aware routing and UI context
- Campaign-aware landing pages
- Behavior-aware recommendations
- Recently viewed products
- Subtle upsell and cross-sell zones
- Saved size and preference readiness
- No aggressive marketplace-style personalization

### Quality And Developer Experience

- ESLint with Next.js and TypeScript rules
- Prettier for formatting
- Vitest for unit tests
- Testing Library for component behavior
- Playwright for end-to-end tests
- axe-core accessibility checks
- Storybook for design system and component documentation
- Bundle analyzer for performance audits

### Deployment Compatibility

- Vercel-first frontend deployment
- Docker/self-hosting ready through Next.js standalone output
- Cloudflare CDN in front of production traffic
- Environment-variable driven configuration
- Preview deployments for staging and campaign review

### Do Not Use By Default

- Redux
- Heavy UI kits
- Client-only storefront rendering
- GSAP unless a specific advanced animation requires it
- Lenis unless scroll behavior has a proven brand need
- Large animation libraries for simple fades
- Loading all marketing pixels before consent or before business need
- React 20 until stable and ecosystem-ready
## Final Recommended Stack

Frontend:

- Next.js 16 with App Router
- React 19.2 stable line
- TypeScript
- Tailwind CSS v4
- Motion
- React Aria
- shadcn/ui
- Radix UI
- TanStack Query
- React Hook Form
- Zod
- Zustand
- next-intl
- MDX
- Turbopack
- ESLint
- Prettier
- Bundle analyzer
- Biome optional, not required for v1.0

Backend:

- Laravel 12
- PHP 8.4+
- FastAPI
- Python 3.14
- PostgreSQL 17
- Redis
- Meilisearch
- Queue workers
- Scheduler
- WebSocket

Storage:

- Cloudflare R2
- Cloudflare Images
- Image optimization pipeline

CDN:

- Cloudflare CDN
- Edge cache
- Edge functions
- Smart routing
- Brotli
- HTTP/3

Infrastructure:

- Docker
- GitHub Actions
- Vercel for frontend
- Hetzner, DigitalOcean, or AWS for backend
- Terraform optional

AI:

- OpenAI
- Anthropic
- Gemini
- Local LLM support
- MCP-ready architecture
- Agent-ready architecture
- Vector database with Qdrant
- Embeddings
- RAG pipeline
- AI memory layer
- AI product descriptions
- AI content generation
- AI search
- AI customer support
- AI translation
- AI analytics
- AI product assistant
- AI recommendation engine
- AI stylist
- AI outfit builder
- AI virtual try-on
- AI image search
- AI voice shopping
- AI personalized recommendations
- AI inventory forecasting

Commerce payments:

Bangladesh:

- SSLCommerz
- bKash
- Nagad
- Rocket
- Upay
- Bank cards

International:

- Stripe
- PayPal

CMS and admin:

- Laravel Filament v4
- Headless CMS architecture
- MDX editorial support

Observability:

- Sentry
- OpenTelemetry
- Grafana
- Prometheus
- Uptime monitoring
- Error tracking
- Real User Monitoring
- Google Analytics 4
- Google Search Console
- Microsoft Clarity
- Plausible Analytics
- PostHog

Testing:

- Playwright
- Vitest
- PHPUnit
- Pest PHP
- Cypress optional
- Storybook

## Open Source Stack

Open-source and portable technologies to prioritize:

- Next.js
- React
- Laravel
- FastAPI
- PostgreSQL
- Redis
- Meilisearch
- Qdrant
- MinIO for development storage
- Keycloak as optional SSO
- n8n for automation
- Supabase Auth as optional auth infrastructure
- Sentry community or hosted
- OpenTelemetry
- Prometheus
- Grafana
- Playwright
- Vitest
- Storybook

## Frontend Principles

- Mobile-first
- Editorial layouts
- Large whitespace
- Premium typography
- Accessible to WCAG 2.2 AA
- Keyboard navigable
- Screen reader friendly
- High contrast support
- Reduced motion support
- Reusable components
- Fast loading
- SEO-first
- SSR-first
- Partial Prerendering where useful
- Core Web Vitals optimized
- Calm animations with purpose
- No generic card-heavy marketplace layout

## Design System Direction

Use a restrained luxury interface:

- Quiet typography
- Elegant spacing
- Clear hierarchy
- Editorial imagery
- Soft but not washed-out contrast
- Precise product presentation
- Minimal chrome
- Premium micro-interactions

Use icons inside buttons where icons are standard and recognizable.

Use:

- Swatches for colors
- Segmented controls for modes
- Toggles or checkboxes for binary settings
- Sliders, steppers, and inputs for numeric values
- Menus for option sets
- Tabs for structured views

Do not use visible text explaining how the interface works unless the user needs it to complete a real task.

## Core Pages

Homepage:

1. Hero
2. Brand story
3. Featured collections
4. Campaign
5. Lookbook
6. Journal
7. Footer

Navigation:

- Logo
- The Collection
- Faris
- Laaj
- The Journal
- The House
- Search
- Account
- Wishlist
- Bag

Mobile navigation:

- Home
- Search
- Collection
- Wishlist
- Bag

Product listing page:

- Editorial category header
- Collection story
- Sort
- Filters
- Size filter
- Color swatches
- Fabric filter
- Availability filter
- Product grid
- Quick view
- Wishlist action
- Recently viewed
- Pagination or progressive loading

Product detail page:

- Large gallery
- Zoom
- Responsive images
- Variant swatches
- Fabric information
- Care instructions
- Advanced size guide
- Fit recommendation
- Delivery and returns
- Back in stock alert
- Sticky add to bag
- Related products
- Complete SEO metadata

Editorial journal:

- MDX content
- Campaign stories
- Designer notes
- Styling guides
- Collection narratives
- Internal product links

Account area:

- Profile
- Orders
- Addresses
- Wishlist
- Store credit
- Loyalty program
- Gift cards
- Security settings
- Passkeys and two-factor authentication

## Fashion-Specific Features

- Advanced size guide
- Fit recommendation
- Wishlist
- Recently viewed
- Compare products
- Quick view
- Back in stock alerts
- Gift cards
- Store credit
- Loyalty program
- Lookbook
- Editorial journal
- Collections
- Seasonal campaigns
- Variant swatches
- Fabric information
- Care instructions

## Commerce Platform Features

- Multi-brand architecture for Porsion Studio, Faris, Laaj, and future labels
- Multi-language support
- Multi-currency readiness
- Inventory management
- Order management
- Returns
- Coupons
- Gift cards
- Loyalty program
- Wishlist
- Back-in-stock alerts
- Public, admin, mobile, and webhook APIs

## Authentication

Support:

- OAuth
- Google login
- Apple login
- Facebook login
- Passkeys with WebAuthn
- Magic link
- Two-factor authentication

Security-sensitive flows must use clear, accessible, low-friction UI.

## Search

Use Meilisearch for:

- Instant search
- Typo tolerance
- Filters
- Synonyms
- Facets
- Product suggestions

Use AI semantic search for:

- Natural language fashion queries
- Style-based discovery
- Intent matching
- Multilingual search

## Images

Images must be treated as a core product surface.

Support:

- AVIF
- WebP
- Blur placeholders
- Responsive images
- Lazy loading
- Progressive loading
- CDN resize
- Cloudflare Images optimization

Product imagery must reveal the actual garment, texture, fit, color, fabric, and styling context.

## Animation

Use animation sparingly and tastefully.

Primary tools:

- Motion
- View Transition API
- Scroll Timeline API

Optional, only where necessary:

- GSAP
- Lenis smooth scroll

Animations must respect reduced motion preferences.

## Performance Targets

- Lighthouse 100 where realistically possible
- LCP under 1.8 seconds
- INP under 150 ms
- CLS under 0.05
- TTFB under 200 ms

Performance strategy:

- SSR
- Partial Prerendering
- Edge caching
- HTTP/3
- Brotli
- Image optimization
- Minimal client JavaScript
- Streaming where useful
- Route-level code splitting

## SEO

Required:

- SSR
- Partial Prerendering
- Schema.org
- Product schema
- Organization schema
- Breadcrumb schema
- FAQ schema
- XML sitemap
- robots.txt
- Open Graph
- Twitter Cards
- Canonical URLs
- hreflang
- Rich snippets
- Semantic HTML
- Optimized metadata
- Clean URL structure
- Image alt text
- Internal linking

## Security

Required:

- CSP
- CSRF protection
- XSS protection
- SQL injection protection
- Rate limiting
- DDoS protection
- WAF
- Bot protection
- Turnstile or reCAPTCHA
- Signed URLs
- Secure session handling
- Secure payment callback validation

## PWA

Support:

- Installable app
- Offline cache
- Push notifications
- Background sync

PWA behavior must enhance the shopping experience without making the site feel like a generic app shell.

## Accessibility

Target WCAG 2.2 AA.

Required:

- Keyboard navigation
- Screen reader support
- High contrast
- Reduced motion
- Accessible forms
- Accessible dialogs
- Accessible menus
- Clear focus states
- Correct landmarks
- Correct alt text

## Scalability

The platform must support long-term scale without requiring a core rewrite.

Scalability requirements:

- Horizontal scaling
- CDN-first architecture
- Edge cache
- Queue workers
- Event-driven jobs
- Microservice-ready boundaries where useful
- Multi-region deployment readiness
- Independent frontend, backend, CMS, search, storage, analytics, and AI services

## Long-Term Business Platform

Porsion Studio should be designed from the beginning so it can evolve beyond a fashion brand into a **Luxury Commerce Operating System**.

The same platform should be able to support new brands, countries, languages, currencies, mobile apps, AI assistants, marketplace capabilities, and B2B portals without changing the core architecture.

This is why the system must be AI-Native, API-First, Headless, Cloud-Native, and Open Source-first from day one.

## Architecture Decision Records

Maintain an ADR section or dedicated ADR files for every major technical decision. Each record should explain the context, decision, alternatives considered, tradeoffs, and consequences.

ADR topics should include:

- Why Next.js is used for the frontend
- Why Laravel is used for the commerce backend
- Why FastAPI is used for AI and Python services
- Why PostgreSQL is the primary relational database
- Why Redis is used for cache, queues, and sessions
- Why Meilisearch is used for primary product search
- Why Qdrant is used for vector search and AI memory
- Why Cloudflare is used for CDN, images, security, and edge services
- Why the platform is API-first and headless
- Why the system is designed as a future Luxury Commerce Operating System
- Why the Experience Management Platform exists as a first-class layer
- Why the Brand Operating System exists as a first-class operating layer
- Why the Unified Marketing And Advertising Hub exists as a first-class platform layer
- Why the Customer Data Platform is required for customer journey intelligence
- Why the Porsion Studio OS Command Center should become the central operating surface
- Why the Integration Hub exists as connector-based infrastructure
- Why One Login and Full Business Control is the operating principle
- Why external integrations should use modular connectors instead of direct coupling
- Why the Landing Experience Builder is a core OS feature
- Why Experience Version Control is required for frontend experiences and campaigns
- Why the AI Campaign Hub connects ads, landing pages, content, UTM links, QR codes, and analytics
- Why AI Builder Studio is part of Porsion Studio OS instead of a separate tool
- Why AI Workspace must combine chat, builder, IDE, preview, diff, test, commit, versioning, and approval
- Why Human Override is mandatory before AI-generated work reaches production
- Why Porsion Studio OS is a business platform instead of only a website admin panel
- Why one Core Platform should power website, mobile app, AI, marketing, admin, analytics, retail, marketplace, and future services
- Why the OS module taxonomy defines long-term platform ownership boundaries
- Why enterprise platform utilities should be planned early even when built gradually
- Why Next.js 16, React 19.2, TypeScript, Tailwind CSS v4, and Turbopack are the locked frontend foundation
- Why React 19.2 is locked instead of React 20 until React 20 is officially stable
- Why the frontend must default to Server Components, minimal client JavaScript, lazy marketing scripts, and lightweight UI primitives

ADRs protect the architecture from unnecessary rewrites and help future developers, operators, and AI agents understand the reasoning behind the platform.
## Definition Of Success

Users should feel they have entered a luxury fashion house, not a traditional online store.

The platform should be:

- Premium
- Fast
- Accessible
- Secure
- SEO-rich
- AI-ready
- International-ready
- Bangladesh-payment-ready
- Scalable for enterprise commerce
- Capable of expanding from apparel into a complete lifestyle house
- Capable of becoming an AI-native, enterprise-grade luxury fashion operating system
- Managed through a unified Command Center for brand, commerce, marketing, AI, analytics, and operations
- Connector-based integrations for payments, couriers, social platforms, AI providers, analytics, marketplaces, and productivity tools
- Landing experiences, campaigns, and frontend states controlled through versioned, testable, rollback-safe workflows
- AI Campaign Hub capable of generating and coordinating landing pages, ad creatives, content templates, tracking links, QR codes, and analytics
- AI Builder Studio for controlled prompt, code, design, upload, preview, review, versioning, and export workflows
- Human-approved AI Workspace workflow for safe code, design, content, and campaign changes
- Structured as Business OS, Commerce OS, Customer OS, Experience OS, Marketing OS, AI OS, Media OS, Content OS, Analytics OS, Operations OS, Finance OS, Shipping OS, Developer OS, Security OS, Testing OS, Automation OS, Integration OS, and Knowledge OS
- One Core Platform capable of supporting new brands, mobile apps, physical stores, marketplaces, and international shipping

## Implementation Rule

Never generate generic layouts. Every page, component, image, animation, and interaction must support Porsion Studio's quiet-luxury positioning.















