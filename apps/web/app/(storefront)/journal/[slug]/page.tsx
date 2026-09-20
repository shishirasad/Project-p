import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb, Container, EditorialCard, Grid, Heading, ImageNarrative, Link, QuoteBlock, Section, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { getJournalArticle, journalArticles } from "@/config/journal";
import { storefrontFooter, storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";

type JournalArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: JournalArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) return {};
  return {
    title: article.title + " | The Journal",
    description: article.intro,
    alternates: { canonical: "/journal/" + article.slug },
    openGraph: { type: "article", publishedTime: article.published, images: [{ url: article.media.src, alt: article.media.alt }] }
  };
}

export default async function JournalArticlePage({ params }: JournalArticlePageProps) {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) notFound();
  const related = journalArticles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.intro,
    datePublished: article.published,
    image: siteUrl + article.media.src,
    author: { "@type": "Organization", name: "Porsion Studio" },
    publisher: { "@type": "Organization", name: "Porsion Studio", url: siteUrl },
    mainEntityOfPage: siteUrl + "/journal/" + article.slug
  };

  return (
    <SiteShell footer={storefrontFooter()}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Section spacing="sm">
        <Container className="grid max-w-[var(--container-editorial)] gap-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "The Journal", href: "/journal" }, { label: article.title }]} />
          <header className="grid max-w-[var(--container-reading)] gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase">{article.eyebrow}</Text>
            <Heading as="h1" size="lg">{article.title}</Heading>
            <Text tone="muted">{article.intro}</Text>
            <Text as="p" size="sm" tone="muted">{article.readTime} · Porsion Studio</Text>
          </header>
        </Container>
      </Section>

      <ImageNarrative media={article.media} title={article.title} eyebrow={article.eyebrow} caption="Porsion Studio Journal">
        {article.lead}
      </ImageNarrative>

      <article>
        <Section spacing="sm">
          <Container className="grid max-w-[var(--container-reading)] gap-12">
            {article.sections.map((section, index) => (
              <section key={section.title} aria-labelledby={"article-section-" + index} className="grid gap-4 border-t border-[var(--color-border)] pt-8">
                <Text as="p" size="sm" className="text-[var(--color-accent)]">0{index + 1}</Text>
                <Heading as="h2" id={"article-section-" + index} size="sm">{section.title}</Heading>
                <div className="grid gap-5">
                  {section.paragraphs.map((paragraph) => <Text as="p" key={paragraph} tone="muted">{paragraph}</Text>)}
                </div>
              </section>
            ))}
          </Container>
        </Section>

        <QuoteBlock quote={article.quote} cite="Porsion Studio" eyebrow="House principle" />

        <Section spacing="sm">
          <Container className="grid max-w-[var(--container-reading)] gap-8 border-y border-[var(--color-border)] py-10">
            <Heading as="h2" size="sm">Keep in mind</Heading>
            <ol className="grid gap-4">
              {article.takeaways.map((takeaway, index) => (
                <li key={takeaway} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-6 text-[var(--color-text-muted)]">
                  <span className="font-serif text-[var(--color-accent)]">0{index + 1}</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap gap-3">
              <Link href={article.action.href} className={storefrontPrimaryAction}>{article.action.label}</Link>
              <Link href="/journal" className={storefrontSecondaryAction}>All stories</Link>
            </div>
          </Container>
        </Section>
      </article>

      <Section aria-labelledby="related-stories-title" spacing="sm">
        <Container className="grid gap-8">
          <Heading as="h2" id="related-stories-title" size="md">Continue reading</Heading>
          <Grid columns={3} gap="lg">
            {related.map((item) => (
              <EditorialCard key={item.slug} href={"/journal/" + item.slug} media={item.media} eyebrow={item.eyebrow} title={item.title} excerpt={item.excerpt} meta={item.readTime} actionLabel="Read story" />
            ))}
          </Grid>
        </Container>
      </Section>
    </SiteShell>
  );
}
