import { Container, Heading, Link, Section, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { storefrontFooter, storefrontSecondaryAction } from "@/lib/storefront/page";

export type PolicySection = { title: string; body: string };

export function LegalPolicyPage({ eyebrow, title, introduction, sections, language = "bn" }: { eyebrow: string; title: string; introduction: string; sections: PolicySection[]; language?: "bn" | "en" }) {
  return (
    <SiteShell footer={storefrontFooter()}>
      <Section lang={language}>
        <Container className="grid max-w-[var(--container-reading)] gap-8">
          <div className="grid gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">{eyebrow}</Text>
            <Heading as="h1" size="lg">{title}</Heading>
            <Text size="lg" tone="muted">{introduction}</Text>
          </div>
          <div className="grid gap-8 border-y border-[var(--color-border)] py-8">
            {sections.map((section) => (
              <section key={section.title} className="grid gap-2">
                <Heading as="h2" size="sm">{section.title}</Heading>
                <Text tone="muted">{section.body}</Text>
              </section>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={storefrontSecondaryAction}>Contact the house</Link>
            <Link href="/returns" className={storefrontSecondaryAction}>Return guidance</Link>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
