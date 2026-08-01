import type { Metadata } from "next";
import {
  BrandGateway,
  CampaignBlock,
  Container,
  CTASection,
  EditorialCard,
  FooterLayout,
  Grid,
  Heading,
  Hero,
  ImageNarrative,
  Link,
  Logo,
  ProductCard,
  QuoteBlock,
  Section,
  SplitFeature,
  Text
} from "@porsion/ui";
import type { BrandGatewayItem, EditorialMedia, FooterLayoutColumn, ProductCardProduct } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";

const campaignImage = "/brand-assets/porsion-studio-old-money-polo-campaign.png";
const logoMark = "/brand-assets/porsion-studio-logo-mark.jpg";

const campaignMedia = {
  kind: "image",
  src: campaignImage,
  alt: "Porsion Studio Old Money polo collection with folded black polo and tailored trousers.",
  width: 960,
  height: 400,
  sizes: "100vw"
} satisfies EditorialMedia;

const logoMedia = {
  kind: "image",
  src: logoMark,
  alt: "Porsion Studio gold unicorn mark on a black field.",
  width: 200,
  height: 200,
  sizes: "(min-width: 768px) 50vw, 100vw"
} satisfies EditorialMedia;

const ctaPrimary = "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 text-sm font-medium uppercase tracking-[0.14em] !text-[var(--color-on-accent)] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";
const ctaSecondary = "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-5 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-text)] transition hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";

const brandGatewayItems = [
  {
    id: "faris",
    name: "Faris",
    href: "/faris",
    eyebrow: "Menswear",
    description: "Timeless quiet luxury menswear for modern confidence.",
    media: campaignMedia,
    actionLabel: "Enter Faris"
  },
  {
    id: "laaj",
    name: "Laaj",
    href: "/laaj",
    eyebrow: "Womenswear",
    description: "Refined womenswear shaped around elegance, ease, and lasting poise.",
    media: logoMedia,
    actionLabel: "Enter Laaj"
  }
] satisfies BrandGatewayItem[];

const featuredProducts = [
  {
    id: "faris-old-money-polo",
    href: "/faris",
    image: {
      src: campaignImage,
      alt: "Folded black Faris polo from the Old Money collection.",
      width: 960,
      height: 400,
      sizes: "(min-width: 1024px) 33vw, 90vw"
    },
    title: "Old Money Polo",
    subtitle: "Soft structure with a quiet finish.",
    brand: "Faris",
    price: "Launch edit",
    badges: ["New"],
    status: "Menswear"
  },
  {
    id: "faris-tailored-trouser",
    href: "/faris",
    image: {
      src: campaignImage,
      alt: "Tailored neutral trouser styled with the Porsion Studio polo campaign.",
      width: 960,
      height: 400,
      sizes: "(min-width: 1024px) 33vw, 90vw"
    },
    title: "Tailored Trouser",
    subtitle: "Clean proportions for everyday polish.",
    brand: "Faris",
    price: "Coming soon",
    status: "Essential"
  },
  {
    id: "laaj-refined-edit",
    href: "/laaj",
    image: {
      src: logoMark,
      alt: "Laaj by Porsion Studio refined womenswear identity mark.",
      width: 200,
      height: 200,
      sizes: "(min-width: 1024px) 33vw, 90vw"
    },
    title: "The Refined Edit",
    subtitle: "A calm first direction for modern womenswear.",
    brand: "Laaj",
    price: "Preview",
    status: "Womenswear"
  }
] satisfies ProductCardProduct[];

const footerColumns = [
  {
    title: "The House",
    links: [
      { label: "The Collection", href: "/collection" },
      { label: "The Journal", href: "/journal" },
      { label: "The House", href: "/the-house" }
    ]
  },
  {
    title: "Brands",
    links: [
      { label: "Faris", href: "/faris" },
      { label: "Laaj", href: "/laaj" }
    ]
  },
  {
    title: "Care",
    links: [
      { label: "Delivery", href: "/delivery" },
      { label: "Returns", href: "/returns" },
      { label: "Contact", href: "/contact" }
    ]
  }
] satisfies FooterLayoutColumn[];

const homepageFooter = (
  <FooterLayout
    ariaLabel="Porsion Studio footer"
    brand={<Logo href="/" label="Porsion Studio home" />}
    utility="A quiet luxury fashion house from Bangladesh, built as a digital-first house of brands."
    columns={footerColumns}
    social={
      <div className="flex flex-wrap gap-3">
        <Link href="/journal" variant="subtle">Journal</Link>
        <Link href="/contact" variant="subtle">Contact</Link>
      </div>
    }
    legal="Porsion Studio. The House of Timeless Fashion."
    className="pb-28 lg:pb-16"
  />
);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Porsion Studio",
      url: siteUrl,
      logo: `${siteUrl}${logoMark}`,
      slogan: "The House of Timeless Fashion",
      brand: [
        { "@type": "Brand", name: "Faris" },
        { "@type": "Brand", name: "Laaj" }
      ]
    },
    {
      "@type": "WebSite",
      name: "Porsion Studio",
      url: siteUrl,
      inLanguage: "en-BD",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Porsion Studio - The House of Timeless Fashion",
  description: "Porsion Studio is a quiet luxury fashion house from Bangladesh, home to Faris menswear and Laaj womenswear.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Porsion Studio - The House of Timeless Fashion",
    description: "A digital-first luxury fashion house for Faris menswear and Laaj womenswear.",
    images: [
      {
        url: campaignImage,
        width: 960,
        height: 400,
        alt: "Porsion Studio Old Money polo campaign"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Porsion Studio - The House of Timeless Fashion",
    description: "Quiet luxury fashion from Bangladesh, beginning with Faris and Laaj.",
    images: [campaignImage]
  }
};

export default function StorefrontHomepage() {
  return (
    <SiteShell brandContext="house" footer={homepageFooter}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }} />

      <Hero
        data-brand="campaign"
        media={campaignMedia}
        title="Porsion Studio"
        eyebrow="The House of Timeless Fashion"
        description="A quiet luxury fashion house from Bangladesh, built as a digital flagship for Faris menswear, Laaj womenswear, and future timeless collections."
        actions={
          <>
            <Link href="/faris" className={ctaPrimary}>Shop Faris</Link>
            <Link href="/laaj" className={ctaSecondary}>Discover Laaj</Link>
          </>
        }
        height="screen"
      />

      <BrandGateway
        title="Choose the right doorway."
        eyebrow="Faris and Laaj"
        description="Two clear paths inside one quiet house. Choose Faris for menswear or Laaj for womenswear."
        items={brandGatewayItems}
      />

      <QuoteBlock
        quote="Luxury should feel calm before it feels expensive."
        cite="Porsion Studio"
        eyebrow="House philosophy"
      />

      <CampaignBlock
        data-brand="campaign"
        className="bg-[var(--color-background)]"
        media={campaignMedia}
        mediaPosition="end"
        eyebrow="Faris launch direction"
        title="Old Money Polo Collection"
        description="A clean first direction for men: refined polos, tailored essentials, and a calm wardrobe made for everyday confidence."
        actions={<Link href="/faris" className={ctaPrimary}>Enter Faris</Link>}
      />

      <Section aria-labelledby="featured-edit-title">
        <Container className="grid gap-8">
          <div className="grid max-w-3xl gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">The first edit</Text>
            <Heading id="featured-edit-title" size="lg">A first edit with a clear point of view.</Heading>
            <Text tone="muted">
              A restrained introduction to Faris, Laaj, and the timeless essentials that define the house.
            </Text>
          </div>
          <Grid columns={3} gap="lg">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="editorial" imageRatio="portrait" viewProductLabel={`View ${product.title}`} />
            ))}
          </Grid>
        </Container>
      </Section>

      <SplitFeature
        data-brand="faris"
        className="bg-[var(--color-background)]"
        media={campaignMedia}
        mediaPosition="start"
        eyebrow="Marketing-aware experience"
        title="One house. Two distinct moods."
        description="Faris carries structure and quiet confidence. Laaj carries elegance and ease. Both belong to the same house standard of proportion, material, and restraint."
        features={[
          "A direct menswear path for Faris.",
          "A refined womenswear path for Laaj.",
          "A simple route from first impression to collection."
        ]}
        actions={<Link href="/collection" className={ctaSecondary}>View the collection</Link>}
      />

      <ImageNarrative
        media={campaignMedia}
        eyebrow="Digital flagship"
        title="Fast, editorial, and clear on mobile."
        caption="Campaign imagery leads into Faris, Laaj, collection, journal, and care paths without visual noise."
      >
        The experience is intentionally simple: fewer distractions, stronger memory, and a calmer path into the house.
      </ImageNarrative>

      <Section aria-labelledby="journal-title" spacing="sm">
        <Container className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="grid max-w-2xl gap-3">
              <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Journal</Text>
              <Heading id="journal-title" size="md">Editorial content without noise.</Heading>
            </div>
            <Link href="/journal" variant="underline">Read the journal</Link>
          </div>
          <Grid columns={2} gap="lg">
            <EditorialCard
              href="/journal/quiet-luxury"
              media={campaignMedia}
              eyebrow="House notes"
              title="Why quiet luxury needs restraint."
              excerpt="Design, fabric, fit, and proportion should do more work than logos."
              meta="3 min read"
              actionLabel="Read"
            />
            <EditorialCard
              href="/journal/faris-laaj"
              media={logoMedia}
              eyebrow="Brand architecture"
              title="Faris and Laaj inside one house."
              excerpt="Separate customer moods, shared trust, and a single operating foundation."
              meta="4 min read"
              actionLabel="Read"
            />
          </Grid>
        </Container>
      </Section>

      <CTASection
        data-brand="campaign"
        className="bg-[var(--color-background)]"
        eyebrow="Start with the right brand"
        title="Enter the house through Faris or Laaj."
        description="Begin with the brand that fits the wardrobe you are building today."
        actions={
          <>
            <Link href="/faris" className={ctaPrimary}>Faris</Link>
            <Link href="/laaj" className={ctaSecondary}>Laaj</Link>
          </>
        }
      />
    </SiteShell>
  );
}