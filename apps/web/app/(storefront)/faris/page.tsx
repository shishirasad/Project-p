import type { Metadata } from "next";
import {
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
import type { EditorialMedia, FooterLayoutColumn, ProductCardProduct } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";

const campaignImage = "/brand-assets/porsion-studio-old-money-polo-campaign.png";
const logoMark = "/brand-assets/porsion-studio-logo-mark.jpg";

const campaignMedia = {
  kind: "image",
  src: campaignImage,
  alt: "Faris Old Money polo collection with a black polo and tailored neutral trousers.",
  width: 960,
  height: 400,
  sizes: "100vw"
} satisfies EditorialMedia;

const logoMedia = {
  kind: "image",
  src: logoMark,
  alt: "Porsion Studio gold unicorn mark used for the Faris brand experience.",
  width: 200,
  height: 200,
  sizes: "(min-width: 768px) 42vw, 100vw"
} satisfies EditorialMedia;

const ctaPrimary = "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 text-sm font-medium uppercase tracking-[0.14em] !text-[var(--color-on-accent)] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";
const ctaSecondary = "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-5 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-text)] transition hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";

const products = [
  {
    id: "faris-old-money-polo",
    href: "#old-money",
    image: {
      src: campaignImage,
      alt: "Black Faris polo from the Old Money collection.",
      width: 960,
      height: 400,
      sizes: "(min-width: 1024px) 33vw, 90vw"
    },
    title: "Old Money Polo",
    subtitle: "A soft-collar polo with a restrained house mark.",
    brand: "Faris",
    price: "Launch preview",
    badges: ["Core"],
    status: "Polo"
  },
  {
    id: "faris-neutral-trouser",
    href: "#tailoring",
    image: {
      src: campaignImage,
      alt: "Neutral tailored trouser styled for Faris quiet luxury menswear.",
      width: 960,
      height: 400,
      sizes: "(min-width: 1024px) 33vw, 90vw"
    },
    title: "Neutral Trouser",
    subtitle: "Clean lines, daily structure, and quiet polish.",
    brand: "Faris",
    price: "Coming soon",
    status: "Tailoring"
  },
  {
    id: "faris-essential-shirt",
    href: "#essentials",
    image: {
      src: campaignImage,
      alt: "Faris refined menswear essentials campaign image.",
      width: 960,
      height: 400,
      sizes: "(min-width: 1024px) 33vw, 90vw"
    },
    title: "Essential Shirt",
    subtitle: "A refined base layer for a calm wardrobe.",
    brand: "Faris",
    price: "Preview",
    status: "Essential"
  }
] satisfies ProductCardProduct[];

const footerColumns = [
  {
    title: "Faris",
    links: [
      { label: "Old Money", href: "#old-money" },
      { label: "Essentials", href: "#essentials" },
      { label: "Tailoring", href: "#tailoring" }
    ]
  },
  {
    title: "The House",
    links: [
      { label: "Porsion Studio", href: "/" },
      { label: "Laaj", href: "/laaj" },
      { label: "Journal", href: "/journal" }
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

const farisFooter = (
  <FooterLayout
    ariaLabel="Faris footer"
    brand={<Logo href="/" label="Porsion Studio home" />}
    utility="Faris is the menswear expression of Porsion Studio: structured, quiet, and made for everyday confidence."
    columns={footerColumns}
    social={
      <div className="flex flex-wrap gap-3">
        <Link href="/journal" variant="subtle">Journal</Link>
        <Link href="/contact" variant="subtle">Contact</Link>
      </div>
    }
    legal="Faris by Porsion Studio. Timeless quiet luxury menswear."
    className="pb-28 lg:pb-16"
  />
);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";

const farisJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      name: "Faris",
      url: `${siteUrl}/faris`,
      slogan: "Timeless quiet luxury menswear",
      parentOrganization: {
        "@type": "Organization",
        name: "Porsion Studio",
        url: siteUrl
      }
    },
    {
      "@type": "CollectionPage",
      name: "Faris by Porsion Studio",
      url: `${siteUrl}/faris`,
      description: "Timeless quiet luxury menswear by Porsion Studio."
    }
  ]
};

export const metadata: Metadata = {
  title: "Faris - Timeless Quiet Luxury Menswear",
  description: "Faris by Porsion Studio is a quiet luxury menswear label focused on refined polos, tailored essentials, and everyday confidence.",
  alternates: {
    canonical: "/faris"
  },
  openGraph: {
    title: "Faris by Porsion Studio",
    description: "Timeless quiet luxury menswear for modern confidence.",
    images: [
      {
        url: campaignImage,
        width: 960,
        height: 400,
        alt: "Faris Old Money polo collection"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Faris by Porsion Studio",
    description: "Timeless quiet luxury menswear for modern confidence.",
    images: [campaignImage]
  }
};

export default function FarisPage() {
  return (
    <SiteShell brandContext="faris" footer={farisFooter}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(farisJsonLd) }} />

      <Hero
        data-brand="campaign"
        media={campaignMedia}
        title="Faris"
        eyebrow="Menswear by Porsion Studio"
        description="Timeless quiet luxury menswear shaped around structure, proportion, and calm confidence."
        actions={
          <>
            <Link href="#collection" className={ctaPrimary}>View the edit</Link>
            <Link href="#story" className={ctaSecondary}>Read the story</Link>
          </>
        }
        height="screen"
      />

      <Section id="story" aria-labelledby="faris-story-title">
        <Container variant="reading" className="grid gap-5 text-center">
          <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Brand story</Text>
          <Heading id="faris-story-title" size="lg">Modern menswear without the noise.</Heading>
          <Text tone="muted">
            Faris is built for men who prefer restraint over display: refined polos, clean trousers, essential shirts, and layers that feel composed without trying too hard.
          </Text>
        </Container>
      </Section>

      <CampaignBlock
        id="old-money"
        data-brand="campaign"
        className="bg-[var(--color-background)]"
        media={campaignMedia}
        mediaPosition="end"
        eyebrow="Old Money collection"
        title="Quiet confidence, folded into everyday form."
        description="The first Faris direction starts with a black polo, tailored neutral trousers, and a wardrobe language that feels calm from morning to evening."
        actions={<Link href="#collection" className={ctaPrimary}>Explore Faris</Link>}
      />

      <Section id="collection" aria-labelledby="faris-collection-title">
        <Container className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="grid max-w-3xl gap-3">
              <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Featured products</Text>
              <Heading id="faris-collection-title" size="lg">A restrained first menswear edit.</Heading>
              <Text tone="muted">Each piece is presented as part of a wardrobe, not a loud seasonal push.</Text>
            </div>
            <Link href="/collection" variant="underline">View all collection</Link>
          </div>
          <Grid columns={3} gap="lg">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} variant="editorial" imageRatio="portrait" viewProductLabel={`View ${product.title}`} />
            ))}
          </Grid>
        </Container>
      </Section>

      <SplitFeature
        id="essentials"
        data-brand="faris"
        className="bg-[var(--color-background)]"
        media={campaignMedia}
        mediaPosition="start"
        eyebrow="Essentials"
        title="Built around fit, fabric, and proportion."
        description="Faris avoids loud decoration. The luxury is in the cut, the hand feel, the collar shape, the drape, and the way each piece fits into real life."
        features={[
          "Clean silhouettes for repeat wear.",
          "Fabric choices that feel refined, breathable, and durable.",
          "Sizing and styling prepared for Bangladesh first, with international scale in mind."
        ]}
        actions={<Link href="#collection" className={ctaSecondary}>Return to the edit</Link>}
      />

      <ImageNarrative
        id="tailoring"
        media={campaignMedia}
        eyebrow="Tailoring language"
        title="Structure without stiffness."
        caption="Faris pairs soft polos with clean trousers for a composed daily uniform."
      >
        The visual direction is intentionally direct: dark polo, neutral trouser, gold mark, and enough space for the product to feel considered.
      </ImageNarrative>

      <QuoteBlock
        quote="Faris is quiet confidence made wearable."
        cite="Porsion Studio"
        eyebrow="Menswear principle"
      />

      <Section aria-labelledby="faris-journal-title" spacing="sm">
        <Container className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="grid max-w-2xl gap-3">
              <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Journal</Text>
              <Heading id="faris-journal-title" size="md">How Faris defines restraint.</Heading>
            </div>
            <Link href="/journal" variant="underline">Read the journal</Link>
          </div>
          <Grid columns={2} gap="lg">
            <EditorialCard
              href="/journal/faris-old-money"
              media={campaignMedia}
              eyebrow="Style notes"
              title="The old money reference, made modern."
              excerpt="A quieter approach to polish: fewer signals, better proportions."
              meta="3 min read"
              actionLabel="Read"
            />
            <EditorialCard
              href="/journal/faris-fit"
              media={logoMedia}
              eyebrow="Fit guide"
              title="Why fit carries the whole look."
              excerpt="Shoulders, collar, sleeve, and trouser break do more work than branding."
              meta="4 min read"
              actionLabel="Read"
            />
          </Grid>
        </Container>
      </Section>

      <CTASection
        data-brand="faris"
        className="bg-[var(--color-background)]"
        eyebrow="Enter Faris"
        title="Start with the first menswear edit."
        description="A calm path from campaign impression to refined everyday essentials."
        actions={
          <>
            <Link href="#collection" className={ctaPrimary}>View the edit</Link>
            <Link href="/" className={ctaSecondary}>Back to the house</Link>
          </>
        }
      />
    </SiteShell>
  );
}