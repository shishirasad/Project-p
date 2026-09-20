import type { Metadata } from "next";
import { Container, Heading, ImageNarrative, Link, QuoteBlock, Section, SplitFeature, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { brandMarkImage, catalogImage } from "@/lib/storefront/catalog";
import { storefrontFooter, storefrontPrimaryAction } from "@/lib/storefront/page";

export const metadata: Metadata = {
  title: "The House",
  description: "Discover Porsion Studio, a quiet luxury fashion house from Bangladesh.",
  alternates: { canonical: "/the-house" }
};

export default function TheHousePage() {
  return (
    <SiteShell footer={storefrontFooter()}>
      <Section aria-labelledby="house-title">
        <Container className="grid max-w-[var(--container-editorial)] gap-6">
          <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Porsion Studio</Text>
          <Heading as="h1" id="house-title" size="lg">The House of Timeless Fashion.</Heading>
          <Text tone="muted" className="max-w-[var(--container-reading)]">Porsion Studio is an online-first fashion house from Bangladesh, creating a home for distinct labels that share the same commitment to craft, clarity, and calm confidence.</Text>
        </Container>
      </Section>
      <ImageNarrative
        media={{ kind: "image", src: catalogImage, alt: "Porsion Studio Old Money polo campaign.", width: 960, height: 400, sizes: "100vw" }}
        eyebrow="A quieter kind of luxury"
        title="Built for a wardrobe that outlives the moment."
        caption="FARIS and LAAJ begin the first chapter of Porsion Studio."
      >
        We do not chase seasonal noise. We focus on material, fit, proportion, and an experience that feels settled from the first visit to years of wear.
      </ImageNarrative>
      <SplitFeature
        media={{ kind: "image", src: brandMarkImage, alt: "Porsion Studio identity mark.", width: 640, height: 160, sizes: "(min-width: 1024px) 50vw, 100vw" }}
        eyebrow="One house, distinct worlds"
        title="FARIS and LAAJ are made to feel personal."
        description="Separate brand worlds let each visitor arrive in the right mood. A shared house standard keeps the experience, trust, and care consistent across both."
        features={["FARIS: modern menswear and quiet confidence.", "LAAJ: refined womenswear and everyday poise.", "Porsion Studio: a single standard of lasting value."]}
        actions={<Link href="/collection" className={storefrontPrimaryAction}>Explore the collection</Link>}
      />
      <Section aria-labelledby="house-purpose-title" className="bg-[var(--color-surface)]">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="grid content-start gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase">Our purpose</Text>
            <Heading id="house-purpose-title" size="md">Create less noise. Make better things.</Heading>
            <Text tone="muted">Our mission is to build a respected modern fashion house from Bangladesh through useful design, responsible growth and customer trust earned over time.</Text>
          </div>
          <dl className="grid border-t border-[var(--color-border)] sm:grid-cols-2 sm:border-l sm:border-t-0">
            {[
              ["Timeless over trend", "Design should remain relevant after the campaign, the season and the first photograph."],
              ["Quality over quantity", "A controlled collection allows more attention to fabric, proportion, finish and service."],
              ["Experience over transaction", "Clarity before purchase and care after delivery are part of the product."],
              ["Innovation with purpose", "Technology should make discovery, fit, checkout and support feel simpler, never colder."]
            ].map(([term, description]) => (
              <div key={term} className="grid gap-3 border-b border-[var(--color-border)] p-6 sm:border-r">
                <dt className="font-serif text-xl text-[var(--color-text)]">{term}</dt>
                <dd className="text-sm leading-6 text-[var(--color-text-muted)]">{description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
      <Section aria-labelledby="house-direction-title" spacing="sm">
        <Container className="grid gap-10">
          <div className="grid max-w-3xl gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase">Bangladesh to the world</Text>
            <Heading id="house-direction-title" size="md">A local beginning with a long view.</Heading>
          </div>
          <div className="grid border-t border-[var(--color-border)] md:grid-cols-3 md:border-l md:border-t-0">
            {[
              ["01", "Designed around real life", "Climate, movement, modesty, work, celebration and local delivery realities inform the first wardrobe."],
              ["02", "Digital flagship first", "The website brings product story, fit confidence, checkout and human support into one calm experience."],
              ["03", "Built to grow carefully", "New categories, countries and brands can join the house without weakening the identity of FARIS or LAAJ."]
            ].map(([number, title, description]) => (
              <div key={number} className="grid gap-3 border-b border-[var(--color-border)] py-6 md:border-b-0 md:border-r md:px-6">
                <span className="font-serif text-2xl text-[var(--color-accent)]">{number}</span>
                <Heading as="h3" size="sm" className="text-lg">{title}</Heading>
                <Text size="sm" tone="muted">{description}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section spacing="sm">
        <Container className="grid max-w-[var(--container-reading)] gap-8">
          <QuoteBlock quote="Luxury is not noise. It is the feeling that nothing was rushed." cite="Porsion Studio" />
        </Container>
      </Section>
    </SiteShell>
  );
}
