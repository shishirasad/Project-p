import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb, Container, DeliveryBadge, Divider, Grid, Heading, ImageNarrative, Link, ProductPrice, ReturnBadge, Section, StockIndicator, Text } from "@porsion/ui";
import type { EditorialMedia } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductCardWithSave } from "@/components/storefront/product-card-with-save";
import { StorefrontProductGallery } from "@/components/storefront/product-gallery";
import { ProductPurchaseForm } from "@/components/storefront/product-purchase-form";
import { getProductBySlug, storefrontProducts } from "@/lib/storefront/catalog";
import { productStructuredData, storefrontFooter, storefrontSecondaryAction } from "@/lib/storefront/page";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";

export function generateStaticParams() {
  return storefrontProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.title} | ${product.brand}`,
    description: product.description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: { images: [{ url: product.image.src, alt: product.image.alt }] }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const sameCategory = storefrontProducts.filter((item) => item.slug !== product.slug && item.brandKey === product.brandKey && item.categoryKey === product.categoryKey);
  const sameBrand = storefrontProducts.filter((item) => item.slug !== product.slug && item.brandKey === product.brandKey && item.categoryKey !== product.categoryKey);
  const relatedProducts = [...sameCategory, ...sameBrand].slice(0, 3);
  const narrativeImage = product.gallery[1] ?? product.image;
  const narrativeMedia = {
    kind: "image",
    src: narrativeImage.src,
    alt: narrativeImage.alt,
    width: narrativeImage.width,
    height: narrativeImage.height,
    sizes: "100vw"
  } satisfies EditorialMedia;

  return (
    <SiteShell brandContext={product.brandKey} footer={storefrontFooter()}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData(product, siteUrl)) }} />
      <Section spacing="sm">
        <Container className="grid gap-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/collection" }, { label: String(product.brand), href: `/${product.brandKey}` }, { label: String(product.title) }]} />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-start">
            <StorefrontProductGallery title={String(product.title)} images={product.gallery} />
            <div className="grid gap-6 lg:sticky lg:top-[calc(var(--announcement-height)+var(--nav-height-desktop)+24px)]">
              <div className="grid gap-3">
                <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">{product.brand}</Text>
                <Heading as="h1" size="lg">{product.title}</Heading>
                <Text tone="muted">{product.description}</Text>
                <ProductPrice price={product.price} priceLabel={`${product.title} price`} className="text-base" />
                <StockIndicator label="Availability confirmed before checkout" tone="neutral" />
              </div>
              <dl className="grid divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] text-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="grid gap-1 py-4 sm:pr-4">
                  <dt className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Fit</dt>
                  <dd className="font-medium text-[var(--color-text)]">{product.fit.label}</dd>
                </div>
                <div className="grid gap-1 py-4 sm:px-4">
                  <dt className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Season</dt>
                  <dd className="font-medium text-[var(--color-text)]">{product.season}</dd>
                </div>
                <div className="grid gap-1 py-4 sm:pl-4">
                  <dt className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Wardrobe role</dt>
                  <dd className="font-medium text-[var(--color-text)]">{product.category}</dd>
                </div>
              </dl>
              <Divider />
              <ProductPurchaseForm product={product} />
              <div className="grid gap-4">
                <DeliveryBadge label="Delivery across Bangladesh" description="Delivery options are confirmed at checkout." />
                <ReturnBadge label="Easy return guidance" description="Review the return policy before placing an order." />
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <Link href="/delivery" variant="underline">Delivery details</Link>
                  <Link href="/returns" variant="underline">Return policy</Link>
                </div>
              </div>
              <div id="fabric-care" className="border-t border-[var(--color-border)]">
                <details className="group border-b border-[var(--color-border)] py-2" open>
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-[var(--color-text)]">
                    Design details <span aria-hidden="true" className="transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <ul className="grid gap-2 pb-4 pl-5 text-sm leading-6 text-[var(--color-text-muted)] marker:text-[var(--color-accent)]">
                    {product.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </details>
                <details className="group border-b border-[var(--color-border)] py-2">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-[var(--color-text)]">
                    Fit & feel <span aria-hidden="true" className="transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="grid gap-2 pb-4 text-sm leading-6 text-[var(--color-text-muted)]"><p>{product.fit.summary}</p><p>{product.fit.note}</p></div>
                </details>
                <details className="group border-b border-[var(--color-border)] py-2">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-[var(--color-text)]">
                    Fabric & care <span aria-hidden="true" className="transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="grid gap-2 pb-4 text-sm leading-6 text-[var(--color-text-muted)]"><p>{product.fabric}</p><p>{product.care}</p></div>
                </details>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <ImageNarrative media={narrativeMedia} eyebrow={product.story.eyebrow} title={product.story.title} caption={`${product.fit.label}. ${product.fit.summary}`}>
        {product.story.body}
      </ImageNarrative>
      <Section aria-labelledby="styling-notes-title" spacing="sm">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
          <div className="grid gap-3">
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Wardrobe notes</Text>
            <Heading id="styling-notes-title" size="md">Three ways to make it yours.</Heading>
            <Text tone="muted">Simple styling paths that preserve the quiet character of the piece.</Text>
          </div>
          <ol className="grid border-t border-[var(--color-border)] md:grid-cols-3 md:border-l md:border-t-0">
            {product.styling.map((note, index) => (
              <li key={note} className="grid gap-4 border-b border-[var(--color-border)] py-6 md:border-b-0 md:border-r md:px-6">
                <span className="font-serif text-2xl text-[var(--color-accent)]">0{index + 1}</span>
                <Text size="sm" tone="muted">{note}</Text>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section id="reviews" aria-labelledby="customer-reviews-title" spacing="sm" className="bg-[var(--color-surface)]">
        <Container className="grid gap-10">
          <div className="grid max-w-3xl gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase">Verified reviews</Text>
            <Heading id="customer-reviews-title" size="md">Real feedback, connected to real orders.</Heading>
            <Text tone="muted">This piece has no verified customer reviews yet. Porsion Studio publishes product feedback only after delivery, so fit, fabric and wear notes remain useful and trustworthy.</Text>
          </div>
          <ol className="grid border-t border-[var(--color-border)] md:grid-cols-3 md:border-l md:border-t-0">
            {[
              ["01", "Order delivered", "The review invitation is available only after the courier marks an order as delivered."],
              ["02", "Customer writes freely", "Customers can comment on fit, fabric, colour accuracy, comfort and the delivery experience."],
              ["03", "Verified and published", "The review appears with a Verified purchase label; critical feedback is never removed for being critical."]
            ].map(([number, title, description]) => (
              <li key={number} className="grid gap-3 border-b border-[var(--color-border)] py-6 md:border-b-0 md:border-r md:px-6">
                <span className="font-serif text-2xl text-[var(--color-accent)]">{number}</span>
                <Heading as="h3" size="sm" className="text-lg">{title}</Heading>
                <Text size="sm" tone="muted">{description}</Text>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="#product-purchase" variant="underline">Ask privately on WhatsApp</Link>
            <Link href="/returns" variant="underline">Read the return policy</Link>
          </div>
        </Container>
      </Section>
      {relatedProducts.length > 0 ? (
        <Section aria-labelledby="related-products-title">
          <Container className="grid gap-8">
            <div className="grid gap-3">
              <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Complete the look</Text>
              <Heading id="related-products-title" size="md">Wear it with {product.brand}</Heading>
            </div>
            <Grid columns={3} gap="lg">
              {relatedProducts.map((item) => <ProductCardWithSave key={item.id} product={item} viewProductLabel={`View ${item.title}`} />)}
            </Grid>
            <Link href={`/collection?brand=${product.brandKey}`} className={storefrontSecondaryAction}>View all {product.brand}</Link>
          </Container>
        </Section>
      ) : null}
    </SiteShell>
  );
}
