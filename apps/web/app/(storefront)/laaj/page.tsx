import type { Metadata } from "next";
import { CampaignBlock, Container, CTASection, EditorialCard, Grid, Heading, Hero, ImageNarrative, Link, QuoteBlock, Section, SplitFeature, Text } from "@porsion/ui";
import type { EditorialMedia } from "@porsion/ui";
import { BrandWordmark } from "@/components/brand/brand-wordmark";
import { BrandCategoryDirectory } from "@/components/storefront/brand-category-directory";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductCardWithSave } from "@/components/storefront/product-card-with-save";
import { getCatalogPublication, laajCatalogCategories } from "@/config/catalog";
import { getProductsForBrand, laajDressImage, laajHeroImage, laajSetImage } from "@/lib/storefront/catalog";
import { storefrontFooter, storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";

const laajMedia = {
  kind: "image",
  src: laajHeroImage,
  alt: "LAAJ refined womenswear campaign with an ivory and rosewood co-ord in a limestone courtyard.",
  width: 1672,
  height: 941,
  sizes: "100vw"
} satisfies EditorialMedia;

const setMedia = {
  kind: "image",
  src: laajSetImage,
  alt: "LAAJ Refined Set in muted rosewood on a sculptural mannequin.",
  width: 1122,
  height: 1402,
  sizes: "(min-width: 768px) 50vw, 100vw"
} satisfies EditorialMedia;

const dressMedia = {
  kind: "image",
  src: laajDressImage,
  alt: "LAAJ Everyday Drape Dress in muted plum rosewood on a sculptural mannequin.",
  width: 1122,
  height: 1402,
  sizes: "(min-width: 768px) 50vw, 100vw"
} satisfies EditorialMedia;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";
const laajProducts = getProductsForBrand("laaj");
const liveLaajCategoryKeys = new Set(laajProducts.map((product) => product.categoryKey));

const laajCategoryOrder = [
  "abaya-burkha",
  "dresses",
  "kameez-salwar",
  "kurti-kurta",
  "two-three-piece",
  "modest-sets",
  "dupatta-hijab",
  "inner-basics",
  "lounge-home",
  "tops-tunics",
  "bottoms",
  "outerwear",
  "kaftan",
  "niqab",
  "occasion",
  "winter",
  "accessories",
  "footwear"
] as const;

const laajCategoryItems = laajCategoryOrder.flatMap((categoryKey) => {
  const category = laajCatalogCategories.find((item) => item.key === categoryKey);
  if (!category) return [];

  const publication = getCatalogPublication("laaj", category.key, { activeCategoryKeys: liveLaajCategoryKeys });
  if (!publication.visible) return [];

  const product = laajProducts.find((item) => item.categoryKey === category.key);
  return [{
    key: category.key,
    label: category.label,
    href: `/collection?brand=laaj&category=${category.key}`,
    available: publication.saleEnabled && Boolean(product),
    image: {
      src: product?.image.src ?? laajDressImage,
      alt: product?.image.alt ?? `${category.label} from LAAJ.`
    }
  }];
});
const laajJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      name: "LAAJ",
      url: `${siteUrl}/laaj`,
      slogan: "Quiet, elegant modest fashion and feminine lifestyle",
      parentOrganization: { "@type": "Organization", name: "Porsion Studio", url: siteUrl }
    },
    {
      "@type": "CollectionPage",
      name: "LAAJ by Porsion Studio",
      url: `${siteUrl}/laaj`,
      description: "Quiet, elegant modest fashion and feminine lifestyle pieces by Porsion Studio."
    }
  ]
};

export const metadata: Metadata = {
  title: "LAAJ - Refined Modest Fashion & Womenswear",
  description: "LAAJ by Porsion Studio brings modest fashion and feminine lifestyle pieces together through elegance, ease, quiet confidence, and timeless design.",
  alternates: { canonical: "/laaj" },
  openGraph: {
    title: "LAAJ by Porsion Studio",
    description: "Quiet, elegant modest fashion and feminine lifestyle pieces shaped around ease and timeless restraint.",
    images: [{ url: laajHeroImage, width: 1672, height: 941, alt: "LAAJ refined womenswear campaign" }]
  },
  twitter: { card: "summary_large_image", title: "LAAJ by Porsion Studio", description: "Quiet, elegant modest fashion and feminine lifestyle pieces shaped around ease and timeless restraint.", images: [laajHeroImage] }
};

export default function LaajPage() {
  return (
    <SiteShell brandContext="laaj" footer={storefrontFooter()} overlayHeader>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(laajJsonLd) }} />
      <Hero
        data-brand="campaign"
        media={laajMedia}
        title="LAAJ"
        eyebrow={<span className="inline-flex items-center gap-3"><BrandWordmark brand="laaj" variant="inverse" className="h-auto w-36" /><span>Womenswear by Porsion Studio</span></span>}
        description="Modest dresses, refined sets and soft layers designed for graceful movement, confident coverage and everyday ease."
        actions={<><Link href="#collection" className={storefrontPrimaryAction}>Shop LAAJ</Link><Link href="#wardrobe" className={storefrontSecondaryAction}>View categories</Link></>}
        height="screen"
      />

      <Section id="story" aria-labelledby="laaj-story-title">
        <Container variant="reading" className="grid gap-5 text-center">
          <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">LAAJ womenswear</Text>
          <Heading id="laaj-story-title" size="lg">Femininity, refined through ease.</Heading>
          <Text tone="muted">LAAJ considers the whole silhouette: how fabric falls, how a sleeve moves, how layers meet, and how modest coverage can feel graceful through ordinary days and meaningful occasions.</Text>
        </Container>
      </Section>

      <CampaignBlock
        id="refined-edit"
        data-brand="laaj"
        className="bg-[var(--color-background)]"
        media={laajMedia}
        mediaPosition="end"
        eyebrow="Refined dress edit"
        title="Ease in every line."
        description="The first LAAJ edit pairs soft movement with clear silhouettes, making each piece simple to style, comfortable to wear and polished in proportion."
        actions={<Link href="#collection" className={storefrontPrimaryAction}>Explore LAAJ</Link>}
      />

      <BrandCategoryDirectory
        id="wardrobe"
        brandName="LAAJ"
        description="Choose a category and go directly to the pieces inside."
        allHref="/collection?brand=laaj"
        items={laajCategoryItems}
      />
      <Section id="collection" aria-labelledby="laaj-collection-title">
        <Container className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="grid max-w-3xl gap-3">
              <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Featured pieces</Text>
              <Heading id="laaj-collection-title" size="lg">Begin with graceful everyday pieces.</Heading>
              <Text tone="muted">Thoughtful silhouettes that balance coverage, comfort and polish without making the wardrobe difficult to wear.</Text>
            </div>
            <Link href="/collection?brand=laaj" variant="underline">View all LAAJ</Link>
          </div>
          <Grid columns={3} gap="lg">{laajProducts.slice(0, 6).map((product) => <ProductCardWithSave key={product.id} product={product} variant="editorial" imageRatio="portrait" viewProductLabel={`View ${product.title}`} />)}</Grid>
        </Container>
      </Section>

      <SplitFeature
        data-brand="laaj"
        className="bg-[var(--color-background)]"
        media={setMedia}
        mediaPosition="start"
        eyebrow="The LAAJ point of view"
        title="Coverage, comfort, and proportion."
        description="LAAJ considers how every neckline, sleeve, layer and hem works together, so modest dressing feels graceful rather than restrictive."
        features={["Soft silhouettes with comfortable coverage.", "Everyday and occasion styling from one wardrobe.", "Fabric, movement and proportion treated as essential details."]}
        actions={<Link href="#collection" className={storefrontSecondaryAction}>Return to the edit</Link>}
      />

      <ImageNarrative media={dressMedia} eyebrow="Everyday and occasion" title="For daily poise and meaningful moments." caption="LAAJ balances femininity, modesty and ease across everyday and occasion wear.">
        The first edit is polished enough for a gathering and comfortable enough to wear again, giving each piece a life beyond a single occasion.
      </ImageNarrative>

      <QuoteBlock quote="Elegance begins with how a piece lets you move." cite="Porsion Studio" eyebrow="Womenswear principle" />

      <Section aria-labelledby="laaj-journal-title" spacing="sm">
        <Container className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div className="grid max-w-2xl gap-3"><Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Journal</Text><Heading id="laaj-journal-title" size="md">Fabric, silhouette, and the LAAJ point of view.</Heading></div><Link href="/journal" variant="underline">Read the journal</Link></div>
          <Grid columns={2} gap="lg">
            <EditorialCard href="/journal/laaj-proportion" media={laajMedia} eyebrow="LAAJ guide" title="The quiet art of modest proportion." excerpt="Balance coverage, movement and femininity across the whole silhouette." meta="7 min read" actionLabel="Read guide" />
            <EditorialCard href="/journal/fabric-care-bangladesh" media={setMedia} eyebrow="Care notes" title="Care for clothes in a warm, humid climate." excerpt="Simple washing, drying and storage habits that help fabric last longer." meta="6 min read" actionLabel="Read guide" />
          </Grid>
        </Container>
      </Section>

      <CTASection data-brand="laaj" className="bg-[var(--color-background)]" eyebrow="The LAAJ wardrobe" title="Move with modest elegance." description="Explore refined womenswear from everyday layers to occasion silhouettes, joined by coverage, comfort and graceful proportion." actions={<><Link href="/collection?brand=laaj" className={storefrontPrimaryAction}>Shop all LAAJ</Link><Link href="/journal/laaj-proportion" className={storefrontSecondaryAction}>Read the style guide</Link></>} />
    </SiteShell>
  );
}
