import type { Metadata } from "next";
import { Container, CTASection, Grid, Heading, Hero, Link, Section, Text } from "@porsion/ui";
import type { EditorialMedia } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductCardWithSave } from "@/components/storefront/product-card-with-save";
import { getProductsForBrand } from "@/lib/storefront/catalog";
import { storefrontFooter, storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";

const labannyaMedia = {
  kind: "image",
  src: "/campaigns/labannya-innerwear-campaign.jpg",
  alt: "LABANNYA comfort essentials and beauty-led daily pieces in a soft premium setting.",
  width: 1080,
  height: 450,
  sizes: "100vw"
} satisfies EditorialMedia;

const labannyaProducts = getProductsForBrand("labannya");

export const metadata: Metadata = {
  title: "LABANNYA - Comfort-led essentials & beauty rituals",
  description: "LABANNYA by Porsion Studio brings soft, everyday essentials and beauty-led comfort together in one easy luxury wardrobe.",
  alternates: { canonical: "/labannya" },
  openGraph: {
    title: "LABANNYA by Porsion Studio",
    description: "Comfort, beauty and daily ease in one considered essentials edit.",
    images: [{ url: "/campaigns/labannya-innerwear-campaign.jpg", width: 1080, height: 450, alt: "LABANNYA comfort-led essentials" }]
  }
};

export default function LabannyaPage() {
  return (
    <SiteShell brandContext="labannya" footer={storefrontFooter()} overlayHeader>
      <Hero
        data-brand="campaign"
        media={labannyaMedia}
        title="LABANNYA"
        eyebrow={<span className="inline-flex items-center gap-3"><span className="font-serif text-base uppercase tracking-[0.22em]">Comfort-led essentials</span></span>}
        description="Soft rituals, daily confidence and beautiful essentials designed to make everyday care feel luxurious, effortless and repeatable."
        actions={<><Link href="#collection" className={storefrontPrimaryAction}>Shop LABANNYA</Link><Link href="#story" className={storefrontSecondaryAction}>Why it feels different</Link></>}
        height="screen"
      />

      <Section id="story" aria-labelledby="labannya-story-title">
        <Container variant="reading" className="grid gap-5 text-center">
          <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">LABANNYA</Text>
          <Heading id="labannya-story-title" size="lg">Daily luxury built around softness, ease and confidence.</Heading>
          <Text tone="muted">LABANNYA brings together everyday essentials, beauty-minded comfort, and a calmer sense of care, creating a modern ritual for the way real routines actually feel.</Text>
        </Container>
      </Section>

      <Section id="collection" aria-labelledby="labannya-collection-title">
        <Container className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="grid max-w-3xl gap-3">
              <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Featured pieces</Text>
              <Heading id="labannya-collection-title" size="lg">Start with the everyday essentials that feel immediate.</Heading>
              <Text tone="muted">A softer, more wearable approach to self-care, comfort and beauty-led essentials, shaped for daily life and repeated rituals.</Text>
            </div>
            <Link href="/collection?brand=labannya" variant="underline">View all LABANNYA</Link>
          </div>
          <Grid columns={3} gap="lg">{labannyaProducts.slice(0, 6).map((product) => <ProductCardWithSave key={product.id} product={product} variant="editorial" imageRatio="portrait" viewProductLabel={`View ${product.title}`} />)}</Grid>
        </Container>
      </Section>

      <Section aria-labelledby="labannya-focus-title" spacing="sm">
        <Container className="grid gap-8">
          <div className="grid max-w-3xl gap-3">
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Why LABANNYA</Text>
            <Heading id="labannya-focus-title" size="md">The right feeling, not just the right product.</Heading>
          </div>
          <Grid columns={3} gap="lg">
            <div className="grid gap-3 border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <Text as="p" size="sm" className="font-medium uppercase tracking-[0.12em]">Comfort first</Text>
              <Text tone="muted">A calming physical feel, softer silhouettes and easier daily rituals.</Text>
            </div>
            <div className="grid gap-3 border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <Text as="p" size="sm" className="font-medium uppercase tracking-[0.12em]">Beauty-led ease</Text>
              <Text tone="muted">Refined details, elegant finish and a sense of glow without excess.</Text>
            </div>
            <div className="grid gap-3 border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <Text as="p" size="sm" className="font-medium uppercase tracking-[0.12em]">Repeat wear</Text>
              <Text tone="muted">Designed to be lived in, restyled and returned to across the week.</Text>
            </div>
          </Grid>
        </Container>
      </Section>

      <CTASection data-brand="labannya" className="bg-[var(--color-background)]" eyebrow="The LABANNYA wardrobe" title="Soft essentials for daily confidence." description="Build a more comfortable, beauty-minded routine with everyday essentials designed to feel effortless from morning to evening." actions={<><Link href="/collection?brand=labannya" className={storefrontPrimaryAction}>Shop LABANNYA</Link><Link href="/shop" className={storefrontSecondaryAction}>Explore Shop</Link></>} />
    </SiteShell>
  );
}
