import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";

export default function NotFound() {
  return (
    <SiteShell brandContext="house">
      <section className="min-h-[70vh] py-24">
        <Container variant="reading">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">404</p>
          <h1 className="mt-4 text-4xl font-medium text-[var(--color-text)]">This page is not available.</h1>
          <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
            The page may have moved, or the experience may still be in preparation.
          </p>
          <Link className="mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-[var(--color-text)]" href="/">
            Return to Porsion Studio
          </Link>
        </Container>
      </section>
    </SiteShell>
  );
}