import type { Metadata } from "next";
import { Breadcrumb, Container, Heading, Section, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { CartExperience } from "@/components/storefront/cart-experience";
import { commerceConfig } from "@/config/commerce";
import { getProductBySlug } from "@/lib/storefront/catalog";
import { clampQuantity } from "@/lib/storefront/pricing";
import { storefrontFooter } from "@/lib/storefront/page";

export type CartPageProps = {
  searchParams: Promise<{ item?: string; quantity?: string; color?: string; size?: string }>;
};

export const metadata: Metadata = {
  title: "Bag",
  description: "Review your selected Porsion Studio pieces before checkout.",
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: false }
};

export default async function CartPage({ searchParams }: CartPageProps) {
  const { item, quantity, color, size } = await searchParams;
  const product = item ? getProductBySlug(item) : undefined;
  const selectedColor = product?.colors.find((option) => option.value === color)?.label;
  const selectedSize = product?.sizes.includes(size ?? "") ? size : undefined;
  const initialItem = product ? {
    productId: String(product.id),
    productSlug: product.slug,
    href: product.href ?? `/product/${product.slug}`,
    title: String(product.title),
    brand: String(product.brand ?? "Porsion Studio"),
    price: String(product.price),
    image: product.image,
    color: selectedColor,
    size: selectedSize,
    quantity: clampQuantity(quantity)
  } : undefined;

  return (
    <SiteShell brandContext={product?.brandKey ?? "house"} footer={storefrontFooter()}>
      <Section aria-labelledby="bag-title">
        <Container className="grid gap-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Bag" }]} />
          <div className="grid max-w-3xl gap-3">
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Your bag</Text>
            <Heading as="h1" id="bag-title" size="lg">Ready when you are.</Heading>
            <Text tone="muted">Review every piece, add a gift presentation if needed, then complete the order without creating an account.</Text>
          </div>
          <CartExperience
            giftWrapFeeBdt={commerceConfig.giftWrapFeeBdt}
            giftWrapDemoUrl={commerceConfig.giftWrapDemoUrl}
            initialItem={initialItem}
          />
        </Container>
      </Section>
    </SiteShell>
  );
}