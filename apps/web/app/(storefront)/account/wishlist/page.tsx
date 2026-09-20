import type { Metadata } from "next";
import { Container, Heading, Link, ProductCard, Section, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { WishlistSavedProducts } from "@/components/storefront/wishlist-saved-products";
import { getProductBySlug, storefrontProducts } from "@/lib/storefront/catalog";
import type { StorefrontProductCard } from "@/lib/storefront/catalog";
import { storefrontFooter, storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Saved Porsion Studio pieces.",
  robots: { index: false, follow: false }
};

const wishlistProducts: StorefrontProductCard[] = storefrontProducts.map((product) => ({
  id: product.id,
  href: product.href,
  image: product.image,
  title: product.title,
  subtitle: product.subtitle,
  brand: product.brand,
  price: product.price,
  compareAtPrice: product.compareAtPrice,
  badges: product.badges,
  status: product.status,
  brandKey: product.brandKey,
  slug: product.slug,
  colors: product.colors
}));

export default async function WishlistPage({ searchParams }: { searchParams: Promise<{ item?: string }> }) {
  const { item } = await searchParams;
  const product = item ? getProductBySlug(item) : undefined;
  if (product) {
    return (
      <SiteShell brandContext={product.brandKey} footer={storefrontFooter()}>
        <Section>
          <Container className="grid gap-8">
            <div className="grid max-w-2xl gap-3"><Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Saved for this visit</Text><Heading as="h1" size="lg">A piece worth returning to.</Heading><Text tone="muted">Keep this piece close while you compare fit, colour, and the rest of the collection.</Text></div>
            <div className="max-w-sm"><ProductCard product={product} viewProductLabel={`View ${product.title}`} /></div>
            <div className="flex flex-wrap gap-3"><Link href={`/product/${product.slug}`} className={storefrontPrimaryAction}>Choose options</Link><Link href="/collection" className={storefrontSecondaryAction}>Continue shopping</Link></div>
          </Container>
        </Section>
      </SiteShell>
    );
  }

  return (
    <SiteShell footer={storefrontFooter()}>
      <Section>
        <Container>
          <h1 className="sr-only">Your wishlist</h1>
          <WishlistSavedProducts products={wishlistProducts} />
        </Container>
      </Section>
    </SiteShell>
  );
}
