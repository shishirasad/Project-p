import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowRight, CreditCard, MessageCircle, RotateCcw, Truck } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductCardWithSave } from "@/components/storefront/product-card-with-save";
import { brandMarkImage, storefrontFeaturedProducts } from "@/lib/storefront/catalog";
import { storefrontFooter } from "@/lib/storefront/page";
import styles from "./page.module.css";

const referenceAssets = {
  hero: "/campaigns/house-reference/house-hero.jpg",
  faris: "/campaigns/faris-hero-v1.jpg",
  laaj: "/campaigns/laaj-hero-v1.jpg",
  campaign: "/campaigns/house-reference/old-money-campaign.png",
  products: [
    "/campaigns/house-reference/faris-polo.jpg",
    "/campaigns/house-reference/faris-trouser.jpg",
    "/campaigns/house-reference/laaj-blouse.jpg",
    "/campaigns/house-reference/laaj-dress.jpg"
  ],
  journal: [
    "/campaigns/house-reference/journal-craft.jpg",
    "/campaigns/house-reference/journal-fabric.jpg"
  ]
} as const;

const featuredProducts = storefrontFeaturedProducts.slice(0, 4).map((product, index) => ({
  ...product,
  image: {
    ...product.image,
    src: referenceAssets.products[index] ?? product.image.src,
    width: 768,
    height: 1024,
    sizes: "(min-width: 1024px) 25vw, 50vw"
  }
}));

const brandGateways = [
  {
    brand: "FARIS",
    audience: "Menswear",
    href: "/faris",
    image: referenceAssets.faris,
    alt: "FARIS menswear in a considered quiet luxury setting.",
    description: "Timeless quiet luxury for men. Structured, precise, calm.",
    action: "Explore FARIS",
    imagePosition: "54% center"
  },
  {
    brand: "LAAJ",
    audience: "Womenswear",
    href: "/laaj",
    image: referenceAssets.laaj,
    alt: "LAAJ womenswear in a refined and softly composed setting.",
    description: "Elegant, refined, modern womenswear. Soft strength, timeless value.",
    action: "Explore LAAJ",
    imagePosition: "58% center"
  }
] as const;

const journalStories = [
  {
    href: "/journal/faris-wardrobe",
    image: referenceAssets.journal[0],
    alt: "A tailor shaping a FARIS garment by hand.",
    category: "Craft",
    title: "The patience behind every piece.",
    summary: "Why proportion, fabric and a considered finish matter long after a season ends."
  },
  {
    href: "/journal/laaj-proportion",
    image: referenceAssets.journal[1],
    alt: "Natural fabric arranged for a LAAJ collection study.",
    category: "Materials",
    title: "A study in fabric and movement.",
    summary: "How quiet texture and graceful structure shape the LAAJ wardrobe."
  }
] as const;

const servicePromises = [
  {
    icon: Truck,
    title: "Nationwide delivery",
    detail: "1-2 days in Dhaka, typically 2-3 days outside Dhaka.",
    href: "/delivery"
  },
  {
    icon: RotateCcw,
    title: "Easy exchanges",
    detail: "Request an eligible return or exchange within 3 days.",
    href: "/returns"
  },
  {
    icon: CreditCard,
    title: "Secure payment",
    detail: "COD or SSLCommerz wallet, card and bank channels.",
    href: "/terms"
  },
  {
    icon: MessageCircle,
    title: "Personal guidance",
    detail: "Size, delivery and order help through WhatsApp.",
    href: "/contact"
  }
] as const;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Porsion Studio",
      url: siteUrl,
      logo: siteUrl + brandMarkImage,
      slogan: "The House of Timeless Fashion",
      description: "A Bangladesh-origin fashion house building FARIS menswear and LAAJ womenswear around timeless design, quality and quiet confidence.",
      brand: [
        { "@type": "Brand", name: "FARIS", description: "Modern menswear with quiet confidence." },
        { "@type": "Brand", name: "LAAJ", description: "Refined womenswear with modest ease." }
      ]
    },
    {
      "@type": "WebSite",
      name: "Porsion Studio",
      url: siteUrl,
      inLanguage: "en-BD",
      potentialAction: {
        "@type": "SearchAction",
        target: siteUrl + "/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Quiet Luxury Fashion House | FARIS and LAAJ",
  description: "Discover Porsion Studio, the Bangladesh-origin fashion house behind FARIS menswear and LAAJ womenswear.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Porsion Studio | FARIS and LAAJ",
    description: "Timeless menswear and refined womenswear, shaped in Bangladesh.",
    images: [
      {
        url: referenceAssets.hero,
        width: 1920,
        height: 1152,
        alt: "Porsion Studio quiet luxury fashion campaign"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Porsion Studio | FARIS and LAAJ",
    description: "Timeless menswear and refined womenswear, shaped in Bangladesh.",
    images: [referenceAssets.hero]
  }
};

export default function StorefrontHomepage() {
  return (
    <SiteShell brandContext="house" footer={storefrontFooter()} overlayHeader>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }} />

      <div className={styles.home}>
        <section className={styles.hero} aria-labelledby="homepage-title">
          <Image
            src={referenceAssets.hero}
            alt="Porsion Studio campaign introducing FARIS menswear and LAAJ womenswear."
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>A quiet luxury house <span aria-hidden="true">&middot;</span> Dhaka</p>
            <h1 id="homepage-title" className={styles.heroTitle}>Clothing that outlives the season.</h1>
            <p className={styles.heroDescription}>Porsion Studio is the house of FARIS menswear and LAAJ womenswear: timeless pieces, honest fabrics and fit that respects the wearer.</p>
            <div className={styles.heroActions}>
              <NextLink href="/collection" className={styles.primaryAction}>
                Explore the collection
                <ArrowRight aria-hidden="true" size={16} />
              </NextLink>
              <NextLink href="#the-house" className={styles.heroTextAction}>Discover the house</NextLink>
            </div>
          </div>
        </section>

        <section id="the-house" className={styles.houseIntro} aria-labelledby="house-intro-title">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>The house</p>
            <div className={styles.houseIntroGrid}>
              <h2 id="house-intro-title" className={styles.displayTitle}>One house. Two labels. A single standard of craft.</h2>
              <div className={styles.houseIntroCopy}>
                <p>Porsion Studio was built in Dhaka on a simple belief: luxury should feel considered, not announced.</p>
                <p>FARIS and LAAJ share one standard of material, proportion and lasting wear, while each keeps a distinct point of view.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.trustStrip} aria-label="Porsion Studio trust and service highlights">
          <div className={styles.sectionInner}>
            <div className={styles.trustBar}>
              <div><span>Nationwide delivery</span><strong>Dhaka in 1–2 days</strong></div>
              <div><span>Easy exchanges</span><strong>Simple 3-day policy</strong></div>
              <div><span>Secure payment</span><strong><span className={styles.payments}><span>COD</span><span>Cards</span><span>Wallets</span></span></strong></div>
              <div><span>Need help?</span><strong>WhatsApp support always on</strong></div>
            </div>
          </div>
        </section>

        <section className={styles.brandGateways} aria-labelledby="brand-gateways-title">
          <h2 id="brand-gateways-title" className="sr-only">Explore FARIS and LAAJ</h2>
          {brandGateways.map((gateway) => (
            <NextLink key={gateway.brand} href={gateway.href} className={styles.brandGateway} aria-label={`${gateway.action}. ${gateway.description}`}>
              <Image
                src={gateway.image}
                alt={gateway.alt}
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                className={styles.gatewayImage}
                style={{ objectPosition: gateway.imagePosition }}
              />
              <span className={styles.gatewayShade} aria-hidden="true" />
              <span className={styles.gatewayContent}>
                <span className={styles.gatewayAudience}>{gateway.audience}</span>
                <span className={styles.gatewayTitle}>{gateway.brand}</span>
                <span className={styles.gatewayDescription}>{gateway.description}</span>
                <span className={styles.gatewayAction}>{gateway.action}<ArrowRight aria-hidden="true" size={16} /></span>
              </span>
            </NextLink>
          ))}
        </section>

        <section className={styles.wardrobePreview} aria-labelledby="wardrobe-title">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Shop</p>
                <h2 id="wardrobe-title" className={styles.displayTitle}>Shop by category, brand and need.</h2>
              </div>
              <NextLink href="/shop" className={styles.underlinedAction}>Explore shop<ArrowRight aria-hidden="true" size={15} /></NextLink>
            </div>
            <div className={styles.wardrobeGrid}>
              <article className={`${styles.wardrobeCard} ${styles.warm}`}>
                <div className={styles.cardTopline}>
                  <span className={styles.wardrobeLabel}>New arrivals</span>
                  <span className={styles.cardMeta}>Fresh drops</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMainCopy}>
                    <strong>New pieces, already sorted for you.</strong>
                    <span className={styles.cardNote}>A quick route into the newest FARIS, LAAJ, LABANNYA and beauty additions—made for shoppers who want to see what changed first.</span>
                    <span className={styles.cardChips} aria-label="New arrival departments">
                      <span>Men</span>
                      <span>Women</span>
                      <span>Innerwear</span>
                      <span>Beauty</span>
                    </span>
                  </div>
                  <span className={styles.cardVisual} aria-hidden="true">
                    {[referenceAssets.products[0], referenceAssets.products[2]].map((image) => (
                      <span key={image} className={styles.cardThumb}>
                        <Image src={image} alt="" fill sizes="180px" className={styles.cardThumbImage} />
                      </span>
                    ))}
                  </span>
                </div>
                <div className={styles.cardFooter}>
                  <NextLink href="/shop#flash-sale" className={styles.gatewayAction}>Explore new arrivals <ArrowRight aria-hidden="true" size={15} /></NextLink>
                  <span className={styles.plusIcon} aria-hidden="true">+</span>
                </div>
              </article>

              <article className={`${styles.wardrobeCard} ${styles.dark}`}>
                <div className={styles.cardTopline}>
                  <span className={styles.wardrobeLabel}>Best sellers</span>
                  <span className={styles.cardMeta}>Popular now</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMainCopy}>
                    <strong>Easy choices with a little proof.</strong>
                    <span className={styles.cardNote}>The safer browse: customer favourites, gifting picks, perfume, cosmetics and repeat-worthy essentials in one recommendation feed.</span>
                    <span className={styles.cardChips} aria-label="Best seller departments">
                      <span>Popular</span>
                      <span>Perfume</span>
                      <span>Cosmetics</span>
                      <span>Gifts</span>
                    </span>
                  </div>
                  <span className={styles.cardVisual} aria-hidden="true">
                    {[referenceAssets.products[1], referenceAssets.products[3]].map((image) => (
                      <span key={image} className={styles.cardThumb}>
                        <Image src={image} alt="" fill sizes="180px" className={styles.cardThumbImage} />
                      </span>
                    ))}
                  </span>
                </div>
                <div className={styles.cardFooter}>
                  <NextLink href="/shop#just-for-you" className={styles.gatewayAction}>View recommendations <ArrowRight aria-hidden="true" size={15} /></NextLink>
                  <span className={styles.plusIcon} aria-hidden="true">+</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.campaign} aria-labelledby="campaign-title">
          <div className={styles.campaignCopy}>
            <p className={styles.eyebrow}>The current campaign</p>
            <h2 id="campaign-title" className={styles.displayTitle}>Old Money, New Standard.</h2>
            <p>A FARIS polo capsule shaped around clean collars, assured colour and the ease of pieces worth repeating.</p>
            <NextLink href="/faris/polos" className={styles.underlinedAction}>View the campaign<ArrowRight aria-hidden="true" size={15} /></NextLink>
          </div>
          <div className={styles.campaignMedia}>
            <Image src={referenceAssets.campaign} alt="FARIS Old Money polo collection campaign." width={960} height={400} sizes="(min-width: 900px) 58vw, 100vw" />
          </div>
        </section>

        <section className={styles.products} aria-labelledby="featured-title">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Featured pieces</p>
                <h2 id="featured-title" className={styles.displayTitle}>The quiet essentials.</h2>
              </div>
              <NextLink href="/collection" className={styles.underlinedAction}>View the collection<ArrowRight aria-hidden="true" size={15} /></NextLink>
            </div>
            <div className={styles.productGrid}>
              {featuredProducts.map((product, index) => (
                <ProductCardWithSave
                  key={product.id}
                  product={product}
                  variant="standard"
                  imageRatio="portrait"
                  priority={index < 2}
                  viewProductLabel={`View ${product.title}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.journal} aria-labelledby="journal-title">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>The journal</p>
                <h2 id="journal-title" className={styles.displayTitle}>Notes on craft.</h2>
              </div>
              <NextLink href="/journal" className={styles.underlinedAction}>Read the journal<ArrowRight aria-hidden="true" size={15} /></NextLink>
            </div>
            <div className={styles.journalGrid}>
              {journalStories.map((story) => (
                <NextLink key={story.href} href={story.href} className={styles.journalCard}>
                  <span className={styles.journalMedia}>
                    <Image src={story.image} alt={story.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className={styles.journalImage} />
                  </span>
                  <span className={styles.journalContent}>
                    <span className={styles.eyebrow}>{story.category}</span>
                    <span className={styles.journalTitle}>{story.title}</span>
                    <span className={styles.journalSummary}>{story.summary}</span>
                    <span className={styles.gatewayAction}>Read story<ArrowRight aria-hidden="true" size={15} /></span>
                  </span>
                </NextLink>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.promises} aria-labelledby="promises-title">
          <h2 id="promises-title" className="sr-only">Ordering with confidence</h2>
          <div className={styles.promiseGrid}>
            {servicePromises.map(({ icon: Icon, title, detail, href }) => (
              <NextLink key={title} href={href} className={styles.promise}>
                <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
                <span>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </span>
              </NextLink>
            ))}
          </div>
        </section>

        <section data-brand="campaign" className={styles.newsletter} aria-labelledby="newsletter-title">
          <div className={styles.newsletterInner}>
            <div>
              <p className={styles.eyebrow}>Stay close</p>
              <h2 id="newsletter-title" className={styles.newsletterTitle}>Letters from the house.</h2>
              <p className={styles.newsletterCopy}>New collections, fabric stories and early access, a few times a season, never more.</p>
            </div>
            <form className={styles.newsletterForm} action="/contact" method="get">
              <label htmlFor="home-newsletter-email" className="sr-only">Email address</label>
              <input type="email" id="home-newsletter-email" name="email" autoComplete="email" placeholder="Email address" required />
              <input type="hidden" name="topic" value="newsletter" />
              <button type="submit" aria-label="Continue to newsletter contact">Subscribe<ArrowRight aria-hidden="true" size={16} /></button>
            </form>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}