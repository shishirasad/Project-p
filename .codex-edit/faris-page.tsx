import type { Metadata } from "next";
import { CampaignBlock, Container, CTASection, EditorialCard, Grid, Heading, Hero, ImageNarrative, Link, QuoteBlock, Section, Text } from "@porsion/ui";
import type { EditorialMedia } from "@porsion/ui";
import { BrandWordmark } from "@/components/brand/brand-wordmark";
import { BrandCategoryDirectory } from "@/components/storefront/brand-category-directory";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductCardWithSave } from "@/components/storefront/product-card-with-save";
import { farisCatalogCategories, getCatalogPublication } from "@/config/catalog";
import { farisHeroImage, farisPoloImage, farisTrouserImage, getProductsForBrand } from "@/lib/storefront/catalog";
import { storefrontFooter, storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";

const farisMedia = {
  kind: "image",
  src: farisHeroImage,
  alt: "FARIS quiet luxury menswear campaign with a midnight polo and stone tailored trousers.",
  width: 1672,
  height: 941,
  sizes: "100vw"
} satisfies EditorialMedia;

const poloMedia = {
  kind: "image",
  src: farisPoloImage,
  alt: "FARIS Old Money Polo in midnight navy.",
  width: 1122,
  height: 1402,
  sizes: "(min-width: 768px) 50vw, 100vw"
} satisfies EditorialMedia;

const trouserMedia = {
  kind: "image",
  src: farisTrouserImage,
  alt: "FARIS tailored trousers in warm stone.",
  width: 1122,
  height: 1402,
  sizes: "(min-width: 768px) 50vw, 100vw"
} satisfies EditorialMedia;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";
const farisProducts = getProductsForBrand("faris");
const liveFarisCategoryKeys = new Set(farisProducts.map((product) => product.categoryKey));

const farisCategoryOrder = ["shirts", "polos", "t-shirts", "trousers", "traditional", "outerwear", "knitwear", "shorts", "accessories", "footwear"] as const;

const farisCategoryItems = farisCategoryOrder.flatMap((categoryKey) => {
  const category = farisCatalogCategories.find((item) => item.key === categoryKey);
  if (!category) return [];

  const publication = getCatalogPublication("faris", category.key, { activeCategoryKeys: liveFarisCategoryKeys });
  if (!publication.visible) return [];

  const product = farisProducts.find((item) => item.categoryKey === category.key);
  return [{
    key: category.key,
    label: category.label,
    href: `/faris/${category.slug}`,
    available: publication.saleEnabled && Boolean(product),
    image: {
      src: product?.image.src ?? category.assets.thumbnail,
      alt: product?.image.alt ?? `${category.label} from FARIS.`
    }
  }];
});
const farisJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      name: "FARIS",
      url: `${siteUrl}/faris`,
      slogan: "Timeless quiet luxury menswear",
      parentOrganization: { "@type": "Organization", name: "Porsion Studio", url: siteUrl }
    },
    {
      "@type": "CollectionPage",
      name: "FARIS by Porsion Studio",
      url: `${siteUrl}/faris`,
      description: "Timeless quiet luxury menswear by Porsion Studio."
    }
  ]
};

export const metadata: Metadata = {
  title: "FARIS - Timeless Quiet Luxury Menswear",
  description: "FARIS by Porsion Studio is a quiet luxury menswear label focused on refined polos, tailored essentials, and everyday confidence.",
  alternates: { canonical: "/faris" },
  openGraph: {
    title: "FARIS by Porsion Studio",
    description: "Timeless quiet luxury menswear for modern confidence.",
    images: [{ url: farisHeroImage, width: 1672, height: 941, alt: "FARIS quiet luxury menswear campaign" }]
  },
  twitter: { card: "summary_large_image", title: "FARIS by Porsion Studio", description: "Timeless quiet luxury menswear for modern confidence.", images: [farisHeroImage] }
};

export default function FarisPage() {
  return (
    <SiteShell brandContext="faris" footer={storefrontFooter()} overlayHeader>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(farisJsonLd) }} />
      <Hero
        data-brand="campaign"
        media={farisMedia}
        title="FARIS"
        eyebrow={
          <span className="inline-flex items-center gap-4">
            <BrandWordmark brand="faris" variant="inverse" className="h-auto w-24 sm:w-28" />
            <span className="border-l border-white/45 pl-4">Menswear by Porsion Studio</span>
          </span>
        }
        description="Polos, shirts, trousers and everyday layers defined by clean proportion, comfortable fabric and confident restraint."
        actions={<><Link href="#collection" className={storefrontPrimaryAction}>Shop FARIS</Link><Link href="#wardrobe" className={storefrontSecondaryAction}>View categories</Link></>}
        height="screen"
      />

      <Section id="story" aria-labelledby="faris-story-title">
        <Container variant="reading" className="grid gap-5 text-center">
          <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">FARIS menswear</Text>
          <Heading id="faris-story-title" size="lg">Menswear that earns its place.</Heading>
          <Text tone="muted">FARIS begins with the discipline of a useful wardrobe: cloth that feels right in Bangladesh, proportions that look composed without stiffness, and colours that return naturally throughout the week.</Text>
        </Container>
      </Section>

      <CampaignBlock
        id="old-money"
        data-brand="faris"
        className="bg-[var(--color-background)]"
        media={farisMedia}
        mediaPosition="end"
        eyebrow="Old Money collection"
        title="Old Money, without the costume."
        description="Midnight polos, stone trousers and balanced fits capture the polish of classic menswear while remaining natural in everyday Bangladesh."
        actions={<Link href="#collection" className={storefrontPrimaryAction}>Explore FARIS</Link>}
      />

      <BrandCategoryDirectory
        id="wardrobe"
        brandName="FARIS"
        description="Choose a category and go directly to the pieces inside."
        allHref="/collection?brand=faris"
        items={farisCategoryItems}
      />
      <Section id="collection" aria-labelledby="faris-collection-title">
        <Container className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="grid max-w-3xl gap-3">
              <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Featured pieces</Text>
              <Heading id="faris-collection-title" size="lg">Start with the FARIS essentials.</Heading>
              <Text tone="muted">Easy-to-combine pieces built around fit, fabric and the confidence of getting dressed without overthinking it.</Text>
            </div>
            <Link href="/collection?brand=faris" variant="underline">View all FARIS</Link>
          </div>
          <Grid columns={3} gap="lg">{farisProducts.slice(0, 6).map((product) => <ProductCardWithSave key={product.id} product={product} variant="editorial" imageRatio="portrait" viewProductLabel={`View ${product.title}`} />)}</Grid>
        </Container>
      </Section>

      <ImageNarrative media={trouserMedia} eyebrow="Fit and fabric" title="A clean line, an easy fit." caption="FARIS balances polished shape with breathable comfort for repeat wear.">
        The difference is felt in the collar, shoulder, rise, drape and fabric weight, details that help each piece sit naturally from the first wear.
      </ImageNarrative>

      <QuoteBlock quote="Good menswear should look considered and feel effortless." cite="Porsion Studio" eyebrow="Menswear principle" />

      <Section aria-labelledby="faris-journal-title" spacing="sm">
        <Container className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div className="grid max-w-2xl gap-3"><Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Journal</Text><Heading id="faris-journal-title" size="md">Fit, fabric, and the FARIS point of view.</Heading></div><Link href="/journal" variant="underline">Read the journal</Link></div>
          <Grid columns={2} gap="lg">
            <EditorialCard href="/journal/quiet-luxury" media={farisMedia} eyebrow="Style notes" title="Why quiet luxury needs restraint." excerpt="A quieter approach to polish: fewer signals, better proportions." meta="3 min read" actionLabel="Read" />
            <EditorialCard href="/journal/faris-wardrobe" media={poloMedia} eyebrow="FARIS guide" title="Build a wardrobe that works harder." excerpt="A practical sequence from first essentials to layers and finishing pieces." meta="7 min read" actionLabel="Read guide" />
          </Grid>
        </Container>
      </Section>

      <CTASection data-brand="faris" className="bg-[var(--color-background)]" eyebrow="The FARIS wardrobe" title="Dress with quiet confidence." description="Explore considered menswear from first layers to finishing pieces, connected by fit, fabric and repeat wear." actions={<><Link href="/collection?brand=faris" className={storefrontPrimaryAction}>Shop all FARIS</Link><Link href="/journal/faris-wardrobe" className={storefrontSecondaryAction}>Read the style guide</Link></>} />
    </SiteShell>
  );
}
