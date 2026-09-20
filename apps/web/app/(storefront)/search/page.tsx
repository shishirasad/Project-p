import type { Metadata } from "next";
import { Search } from "lucide-react";
import { Button, Container, EmptyState, Grid, Heading, Input, Link, Section, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductCardWithSave } from "@/components/storefront/product-card-with-save";
import { storefrontProducts } from "@/lib/storefront/catalog";
import { storefrontFooter } from "@/lib/storefront/page";

type SearchPageProps = {
  searchParams: Promise<{ q?: string; brand?: string }>;
};

export const metadata: Metadata = {
  title: "Search",
  description: "Search FARIS menswear, LAAJ womenswear, and LABANNYA essentials from Porsion Studio.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true }
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "", brand } = await searchParams;
  const activeBrand = brand === "faris" || brand === "laaj" || brand === "labannya" ? brand : undefined;
  const availableProducts = activeBrand ? storefrontProducts.filter((product) => product.brandKey === activeBrand) : storefrontProducts;
  const brandSuffix = activeBrand ? `&brand=${activeBrand}` : "";
  const normalizedQuery = q.trim().toLowerCase();
  const results = normalizedQuery
    ? availableProducts.filter((product) => [product.title, product.brand, product.category, product.description].join(" ").toLowerCase().includes(normalizedQuery))
    : [];
  const visibleResults = results.slice(0, 24);

  return (
    <SiteShell brandContext={activeBrand ?? "house"} footer={storefrontFooter()}>
      <Section aria-labelledby="search-title">
        <Container className="grid gap-10">
          <div className="grid max-w-3xl gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Search the house</Text>
            <Heading as="h1" id="search-title" size="lg">Find the right piece, without the noise.</Heading>
          </div>
          <form action="/search" className="grid max-w-3xl gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            {activeBrand ? <input type="hidden" name="brand" value={activeBrand} /> : null}
            <Input name="q" label={activeBrand ? `Search ${activeBrand === "faris" ? "FARIS" : activeBrand === "laaj" ? "LAAJ" : "LABANNYA"}` : "Search the house"} defaultValue={q} placeholder="Try polo, trouser, co-ord..." leadingSlot={<Search aria-hidden="true" size={18} />} />
            <Button type="submit">Search</Button>
          </form>
          {normalizedQuery ? (
            results.length > 0 ? (
              <div className="grid gap-8">
                <Text tone="muted">{results.length} result{results.length === 1 ? "" : "s"} for &quot;{q}&quot;</Text>
                <Grid columns={3} gap="lg">
                  {visibleResults.map((product) => <ProductCardWithSave key={product.id} product={product} viewProductLabel={`View ${product.title}`} />)}
                </Grid>
                {results.length > visibleResults.length ? <Text size="sm" tone="muted">Showing the first 24 of {results.length} matches.</Text> : null}
              </div>
            ) : (
              <EmptyState
                eyebrow="No direct match"
                title="Nothing matched that search."
                description="Try a product type, brand name, or a shorter phrase."
                icon={<Search size={20} />}
              />
            )
          ) : (
            <div className="grid gap-8 border-t border-[var(--color-border)] pt-8">
              <div className="grid gap-3">
                <Text as="p" size="sm" className="font-medium">Popular searches</Text>
                <div className="flex flex-wrap gap-2">
                  {["polo", "trouser", "dress", "co-ord"].map((term) => <Link key={term} href={`/search?q=${term}${brandSuffix}`} className="min-h-11 border border-[var(--color-border)] px-4 py-3 text-sm capitalize">{term}</Link>)}
                </div>
              </div>
              <div className="grid gap-5"><Text as="p" size="sm" tone="muted" className="uppercase">Popular now</Text><Grid columns={3} gap="lg">{availableProducts.slice(0, 6).map((product) => <ProductCardWithSave key={product.id} product={product} />)}</Grid></div>
            </div>
          )}
        </Container>
      </Section>
    </SiteShell>
  );
}
