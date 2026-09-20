import type { Metadata } from "next";
import { Container, EditorialCard, Grid, Heading, Section, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { journalArticles } from "@/config/journal";
import { storefrontFooter } from "@/lib/storefront/page";

export const metadata: Metadata = {
  title: "The Journal",
  description: "Porsion Studio stories on quiet luxury, FARIS menswear, LAAJ womenswear, fit, fabric care and building a lasting wardrobe.",
  alternates: { canonical: "/journal" }
};

export default function JournalPage() {
  return (
    <SiteShell footer={storefrontFooter()}>
      <Section aria-labelledby="journal-title">
        <Container className="grid gap-12">
          <header className="grid max-w-3xl gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase">The Journal</Text>
            <Heading as="h1" id="journal-title" size="lg">Stories for a more considered wardrobe.</Heading>
            <Text tone="muted">Read the thinking behind Porsion Studio, practical guides to fit and care, and the distinct points of view of FARIS and LAAJ.</Text>
          </header>
          <Grid columns={3} gap="lg">
            {journalArticles.map((article) => (
              <EditorialCard
                key={article.slug}
                href={"/journal/" + article.slug}
                media={article.media}
                eyebrow={article.eyebrow}
                title={article.title}
                excerpt={article.excerpt}
                meta={article.readTime}
                actionLabel="Read story"
              />
            ))}
          </Grid>
        </Container>
      </Section>
    </SiteShell>
  );
}
