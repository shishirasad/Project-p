import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb, Container, CTASection, Grid, Heading, Hero, Link, Section, Text } from "@porsion/ui";
import type { EditorialMedia } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductCardWithSave } from "@/components/storefront/product-card-with-save";
import { farisCatalogCategories, getFarisCatalogCategoryBySlug } from "@/config/catalog";
import { getProductsForBrand } from "@/lib/storefront/catalog";
import { storefrontFooter, storefrontPrimaryAction, storefrontSecondaryAction } from "@/lib/storefront/page";

type FarisCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return farisCatalogCategories
    .filter((category) => category.isActive)
    .map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: FarisCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getFarisCatalogCategoryBySlug(categorySlug);
  if (!category || !category.isActive) return {};

  return {
    title: category.seo.title,
    description: category.seo.description,
    alternates: { canonical: `/faris/${category.slug}` },
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      images: [{ url: category.assets.social, width: 1122, height: 1402, alt: `${category.label} by FARIS` }]
    }
  };
}

export default async function FarisCategoryPage({ params }: FarisCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getFarisCatalogCategoryBySlug(categorySlug);
  if (!category || !category.isActive) notFound();

  const products = getProductsForBrand("faris").filter((product) => product.categoryKey === category.key);
  if (!products.length) notFound();

  const media = {
    kind: "image",
    src: category.assets.hero,
    alt: `${category.label} from the FARIS menswear wardrobe.`,
    width: 1122,
    height: 1402,
    sizes: "100vw"
  } satisfies EditorialMedia;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.label} by FARIS`,
    url: new URL(`/faris/${category.slug}`, siteUrl).toString(),
    description: category.editorialDescription,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: new URL(`/product/${product.slug}`, siteUrl).toString(),
        name: String(product.title)
      }))
    }
  };

  return (
    <SiteShell brandContext="faris" footer={storefrontFooter()} overlayHeader>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Hero
        data-brand="faris"
        media={media}
        eyebrow="FARIS menswear"
        title={category.label}
        description={category.editorialDescription}
        actions={<><Link href="#pieces" className={storefrontPrimaryAction}>Shop {category.label}</Link><Link href="/faris" className={storefrontSecondaryAction}>Explore FARIS</Link></>}
        height="medium"
      />

      <Section id="pieces" aria-labelledby="faris-category-title">
        <Container className="grid gap-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FARIS", href: "/faris" }, { label: category.label }]} />
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="grid max-w-3xl gap-3">
              <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">{category.season} | {products.length} pieces</Text>
              <Heading as="h2" id="faris-category-title" size="lg">Every {category.label.toLowerCase()} piece, in one considered edit.</Heading>
              <Text tone="muted">{category.shortDescription}</Text>
            </div>
            <Link href="/collection?brand=faris" variant="underline">View all FARIS</Link>
          </div>

          <Grid columns={3} gap="lg">
            {products.map((product) => (
              <ProductCardWithSave key={product.id} product={product} variant="standard" imageRatio="portrait" viewProductLabel={`View ${product.title}`} />
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection
        data-brand="faris"
        eyebrow="FARIS wardrobe"
        title="Continue through the complete line."
        description="Move between categories without leaving the FARIS point of view, with one bag, one checkout and Porsion Studio support throughout."
        actions={<><Link href="/faris" className={storefrontPrimaryAction}>FARIS home</Link><Link href="/collection?brand=faris" className={storefrontSecondaryAction}>All FARIS pieces</Link></>}
      />
    </SiteShell>
  );
}
