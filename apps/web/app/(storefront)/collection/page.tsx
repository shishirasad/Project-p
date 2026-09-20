import type { Metadata } from "next";
import { Breadcrumb, Container, Grid, Heading, Link, Section, SidebarLayout, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { CollectionPagination } from "@/components/storefront/collection-pagination";
import { ProductCardWithSave } from "@/components/storefront/product-card-with-save";
import { getVisibleCatalogCategories, type StorefrontCategoryKey } from "@/config/catalog";
import { getProductsForBrand } from "@/lib/storefront/catalog";
import { parseBdtPrice } from "@/lib/storefront/pricing";
import { storefrontFooter, storefrontSecondaryAction } from "@/lib/storefront/page";

type CollectionPageProps = {
  searchParams: Promise<{ brand?: string; category?: string; sort?: string; page?: string }>;
};

export async function generateMetadata({ searchParams }: CollectionPageProps): Promise<Metadata> {
  const { brand, category, page } = await searchParams;
  const activeBrand = brand === "faris" || brand === "laaj" || brand === "labannya" ? brand : undefined;
  const brandName = activeBrand === "faris" ? "FARIS" : activeBrand === "laaj" ? "LAAJ" : activeBrand === "labannya" ? "LABANNYA" : undefined;
  const liveCategoryKeys = activeBrand ? new Set(getProductsForBrand(activeBrand).map((product) => product.categoryKey)) : undefined;
  const categoryRecord = activeBrand
    ? getVisibleCatalogCategories(activeBrand, { activeCategoryKeys: liveCategoryKeys }).find((item) => item.key === category)
    : undefined;
  const title = categoryRecord ? categoryRecord.label + " | " + brandName : brandName ? "Shop " + brandName : "Shop FARIS, LAAJ & LABANNYA";
  const description = categoryRecord
    ? "Explore " + categoryRecord.label.toLowerCase() + " by " + brandName + " at Porsion Studio, with clear product details, fit guidance and delivery across Bangladesh."
    : brandName
      ? "Explore the complete " + brandName + " wardrobe at Porsion Studio."
      : "Explore timeless menswear by FARIS, refined womenswear by LAAJ, and comfort-led essentials by LABANNYA inside one Porsion Studio collection.";
  const canonicalParams = new URLSearchParams();
  if (activeBrand) canonicalParams.set("brand", activeBrand);
  if (categoryRecord) canonicalParams.set("category", categoryRecord.key);
  const canonical = activeBrand === "faris" && categoryRecord && "slug" in categoryRecord
    ? `/faris/${categoryRecord.slug}`
    : canonicalParams.size ? "/collection?" + canonicalParams.toString() : "/collection";
  return { title, description, alternates: { canonical }, robots: { index: !page || page === "1", follow: true } };
}

const brandFilters = [
  { key: "all", label: "All pieces", href: "/collection" },
  { key: "faris", label: "FARIS menswear", href: "/collection?brand=faris" },
  { key: "laaj", label: "LAAJ womenswear", href: "/collection?brand=laaj" },
  { key: "labannya", label: "LABANNYA essentials", href: "/collection?brand=labannya" }
] as const;

export default async function CollectionPage({ searchParams }: CollectionPageProps) {
  const { brand, category, sort, page } = await searchParams;
  const activeBrand = brand === "faris" || brand === "laaj" || brand === "labannya" ? brand : "all";
  const activeSort = sort === "newest" || sort === "price-low" ? sort : "featured";
  const brandProducts = getProductsForBrand(activeBrand);
  const liveCategoryKeys = new Set(brandProducts.map((product) => product.categoryKey));
  const catalogCategories: ReadonlyArray<{ key: StorefrontCategoryKey; label: string; shortDescription?: string; editorialDescription?: string }> = activeBrand === "faris"
    ? getVisibleCatalogCategories("faris", { activeCategoryKeys: liveCategoryKeys })
    : activeBrand === "laaj" || activeBrand === "labannya"
      ? getVisibleCatalogCategories(activeBrand === "labannya" ? "labannya" : "laaj", { activeCategoryKeys: liveCategoryKeys })
      : [];
  const requestedCategory = catalogCategories.find((option) => option.key === category);
  const activeCategory = requestedCategory?.key ?? "all";
  const categoryFilters = [
    { key: "all", label: "All categories" },
    ...catalogCategories.filter((option) => liveCategoryKeys.has(option.key) || option.key === activeCategory)
  ];
  const categoryProducts = activeCategory === "all" ? brandProducts : brandProducts.filter((product) => product.categoryKey === activeCategory);
  const sortedProducts = [...categoryProducts].sort((left, right) => activeSort === "price-low" ? parseBdtPrice(String(left.price)) - parseBdtPrice(String(right.price)) : activeSort === "newest" ? Number(right.status === "New arrival") - Number(left.status === "New arrival") : 0);
  const pageSize = 24;
  const pageCount = Math.max(1, Math.ceil(sortedProducts.length / pageSize));
  const activePage = Math.min(Math.max(Number(page) || 1, 1), pageCount);
  const products = sortedProducts.slice((activePage - 1) * pageSize, activePage * pageSize);
  const brandLabel = activeBrand === "faris" ? "FARIS" : activeBrand === "laaj" ? "LAAJ" : activeBrand === "labannya" ? "LABANNYA" : undefined;
  const collectionHeading = requestedCategory && brandLabel
    ? requestedCategory.label + " by " + brandLabel
    : brandLabel
      ? "The " + brandLabel + " wardrobe"
      : "FARIS, LAAJ and LABANNYA, inside one house.";
  const collectionDescription = requestedCategory && brandLabel
    ? requestedCategory.shortDescription ?? "Explore every " + requestedCategory.label.toLowerCase() + " style in the " + brandLabel + " catalog, with clear fit, fabric and care details."
    : activeBrand === "faris"
      ? "Modern menswear organised from everyday foundations to seasonal layers and finishing pieces."
      : activeBrand === "laaj"
        ? "Refined womenswear organised across modest signatures, everyday silhouettes, private layers and occasion dressing."
        : activeBrand === "labannya"
          ? "Comfort-led essentials and beauty-adjacent daily pieces built around ease, glow and repeat wear."
          : "Choose FARIS menswear, LAAJ womenswear or LABANNYA essentials, then move through a clear product category without leaving Porsion Studio.";
  const collectionHref = (next: { brand?: string; category?: string; sort?: string; page?: number }) => {
    const params = new URLSearchParams();
    const nextBrand = next.brand ?? activeBrand;
    const nextCategory = next.category ?? (next.brand && next.brand !== activeBrand ? "all" : activeCategory);
    const nextSort = next.sort ?? activeSort;
    const nextPage = next.page ?? 1;
    if (nextBrand !== "all") params.set("brand", nextBrand);
    if (nextCategory !== "all") params.set("category", nextCategory);
    if (nextSort !== "featured") params.set("sort", nextSort);
    if (nextPage > 1) params.set("page", String(nextPage));
    return params.size ? `/collection?${params.toString()}` : "/collection";
  };

  return (
    <SiteShell brandContext={activeBrand === "all" ? "house" : activeBrand} footer={storefrontFooter()}>
      <Section spacing="sm" aria-labelledby="collection-title">
        <Container className="grid gap-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/collection" }, ...(brandLabel ? [{ label: brandLabel, href: "/collection?brand=" + activeBrand }] : []), ...(requestedCategory ? [{ label: requestedCategory.label }] : [])]} />
          <div className="grid max-w-3xl gap-4">
            <Text as="p" size="sm" tone="muted" className="uppercase">{brandLabel ?? "Shop the house"}</Text>
            <Heading as="h1" id="collection-title" size="lg">{collectionHeading}</Heading>
            <Text tone="muted">{collectionDescription}</Text>
          </div>
        </Container>
      </Section>

      <Section spacing="sm" aria-label="Collection products">
        <Container>
          <SidebarLayout
            sidebarLabel="Collection filters"
            stickySidebar
            sidebar={
              <div className="grid gap-6 border-y border-[var(--color-border)] py-5 md:border md:bg-[var(--color-surface)] md:p-5">
                <div className="grid gap-3">
                  <Text as="p" size="sm" className="font-medium">Brand</Text>
                  <div className="grid gap-1">
                    {brandFilters.map((filter) => (
                      <Link
                        key={filter.key}
                        href={collectionHref({ brand: filter.key })}
                        className={filter.key === activeBrand ? "text-[var(--color-accent)]" : undefined}
                        variant="subtle"
                        aria-current={filter.key === activeBrand ? "page" : undefined}
                      >
                        {filter.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {activeBrand !== "all" ? <div className="grid gap-3">
                  <Text as="p" size="sm" className="font-medium">Category</Text>
                  <div className="grid gap-1">{categoryFilters.map((filter) => <Link key={filter.key} href={collectionHref({ category: filter.key })} variant="subtle" className={filter.key === activeCategory ? "text-[var(--color-accent)]" : undefined} aria-current={filter.key === activeCategory ? "page" : undefined}>{filter.label}</Link>)}</div>
                </div> : null}
              </div>
            }
          >
            <div className="grid gap-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <Text size="sm" tone="muted">{sortedProducts.length} pieces | Showing {(activePage - 1) * pageSize + 1}-{Math.min(activePage * pageSize, sortedProducts.length)}</Text>
                <div className="flex flex-wrap gap-2" aria-label="Sort the collection">
                  {[{ key: "featured", label: "Featured" }, { key: "newest", label: "Newest" }, { key: "price-low", label: "Price: low to high" }].map((option) => <Link key={option.key} href={collectionHref({ sort: option.key })} className={`min-h-11 border px-3 py-3 text-xs uppercase tracking-[0.1em] ${option.key === activeSort ? "border-[var(--color-accent)] text-[var(--color-text)]" : "border-[var(--color-border)] text-[var(--color-text-muted)]"}`}>{option.label}</Link>)}
                </div>
              </div>
              {products.length ? (
                <Grid columns={3} gap="lg">
                  {products.map((product) => <ProductCardWithSave key={product.id} product={product} variant="standard" imageRatio="portrait" viewProductLabel={`View ${product.title}`} />)}
                </Grid>
              ) : (
                <div className="grid min-h-60 place-items-center border-y border-[var(--color-border)] py-10 text-center"><div className="grid max-w-md gap-3"><Heading as="h2" size="sm">No matching pieces.</Heading><Text size="sm" tone="muted">No product matches this brand and category combination. Return to the department to continue exploring.</Text><Link href={activeBrand === "all" ? "/collection" : `/collection?brand=${activeBrand}`} className={storefrontSecondaryAction}>View the department</Link></div></div>
              )}
              {pageCount > 1 ? <CollectionPagination page={activePage} pageCount={pageCount} brand={activeBrand} category={activeCategory} sort={activeSort} /> : null}
              <div className="border-t border-[var(--color-border)] pt-8 text-center">
                <Link href="/the-house" className={storefrontSecondaryAction}>Read the house philosophy</Link>
              </div>
            </div>
          </SidebarLayout>
        </Container>
      </Section>
    </SiteShell>
  );
}
