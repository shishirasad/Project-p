import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgePercent,
  BriefcaseBusiness,
  Gem,
  Gift,
  Heart,
  Home,
  Layers3,
  Search,
  Shirt,
  ShoppingBag,
  Sparkles,
  SprayCan,
  Star,
  Tags,
  Watch,
  Wand2
} from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { storefrontProducts } from "@/lib/storefront/catalog";
import { storefrontFooter } from "@/lib/storefront/page";

const heroImage = "/campaigns/porsion-three-identities-banner.jpg";

const categories = [
  { label: "Men", detail: "FARIS wear", href: "/faris", icon: Shirt, tone: "bg-[#edf1ed] text-[#24342b]" },
  { label: "Women", detail: "LAAJ wear", href: "/laaj", icon: Sparkles, tone: "bg-[#f3e9e7] text-[#5b2530]" },
  { label: "Innerwear", detail: "LABANNYA", href: "/labannya", icon: Heart, tone: "bg-[#fff0f6] text-[#b01862]" },
  { label: "Beauty", detail: "Skin and glow", href: "/search?q=beauty", icon: Wand2, tone: "bg-[#f9eef4] text-[#9d255e]" },
  { label: "Cosmetics", detail: "Makeup", href: "/search?q=cosmetics", icon: SprayCan, tone: "bg-[#f5edf8] text-[#713f8f]" },
  { label: "Perfumes", detail: "Fragrance", href: "/search?q=perfume", icon: Gem, tone: "bg-[#f4ead8] text-[#7a5a32]" },
  { label: "Accessories", detail: "Finishing", href: "/search?q=accessories", icon: Watch, tone: "bg-[#efede8] text-[#242424]" },
  { label: "Bags", detail: "Daily carry", href: "/search?q=bag", icon: BriefcaseBusiness, tone: "bg-[#eee8df] text-[#654b30]" },
  { label: "Shoes", detail: "Footwear", href: "/search?q=shoes", icon: ShoppingBag, tone: "bg-[#eef2f3] text-[#245b7a]" },
  { label: "Modest Wear", detail: "Abaya, hijab", href: "/collection?brand=laaj", icon: Layers3, tone: "bg-[#f4ece8] text-[#5b2530]" },
  { label: "Home Goods", detail: "Useful finds", href: "/search?q=home-goods", icon: Home, tone: "bg-[#f1eee6] text-[#61543e]" },
  { label: "Gift Sets", detail: "Ready picks", href: "/search?q=gift", icon: Gift, tone: "bg-[#fff4df] text-[#9a5c00]" },
  { label: "New Arrivals", detail: "Latest", href: "/collection?sort=newest", icon: Star, tone: "bg-[#eef5ee] text-[#1e6b45]" },
  { label: "Best Sellers", detail: "Popular", href: "/search?q=best-seller", icon: Tags, tone: "bg-[#f5eeee] text-[#8c3434]" },
  { label: "Under 999", detail: "Value", href: "/search?q=under-999", icon: BadgePercent, tone: "bg-[#eef2ff] text-[#334c9a]" },
  { label: "Bundles", detail: "Save more", href: "/search?q=bundle", icon: Gift, tone: "bg-[#edf7f6] text-[#21645d]" }
] as const;

const flashSaleProducts = storefrontProducts.slice(0, 12).map((product, index) => ({
  ...product,
  saleTag: ["-22%", "-18%", "-15%", "-12%"][index % 4] ?? "-15%",
  soldCount: [18, 27, 34, 41, 56, 63][index % 6] ?? 24
}));

const recommendedProducts = storefrontProducts.slice(0, 48);
export const metadata: Metadata = {
  title: "Shop | Porsion Studio",
  description: "Shop Porsion Studio shop in one compact marketplace hub: men, women, innerwear, beauty, cosmetics, perfumes, accessories, gifts and value finds.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop | Porsion Studio",
    description: "A compact Daraz-style shopping hub for FARIS, LAAJ, LABANNYA and other commerce categories.",
    images: [{ url: heroImage, width: 1942, height: 809, alt: "Porsion Studio category hub" }]
  }
};

export default function ShopPage() {
  return (
    <SiteShell brandContext="house" footer={storefrontFooter()}>
      <main className="bg-[#f5f5f5] pb-12 pt-[calc(var(--nav-height-mobile)+1rem)] text-[var(--color-text)] lg:pt-[calc(var(--nav-height-desktop)+1.25rem)]">
        <section className="mx-auto grid max-w-[1440px] gap-4 px-[var(--gutter)]">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-sm)] md:p-5">
            <div className="mx-auto grid max-w-5xl content-center gap-4">
              <div className="grid gap-1">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#f85606]">Shop</p>
                <h1 className="font-serif text-3xl leading-tight md:text-4xl">Everything you sell, easy to find.</h1>
                <p className="max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">Men, women, LABANNYA innerwear, beauty, perfume and useful goods in one compact shopping entry.</p>
              </div>
              <form action="/search" className="flex min-h-11 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white">
                <label htmlFor="category-search" className="sr-only">Search shop</label>
                <span className="grid w-11 place-items-center text-[var(--color-text-muted)]"><Search size={17} /></span>
                <input id="category-search" name="q" placeholder="Search products, brands, categories" className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
                <button type="submit" className="bg-[#f85606] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-on-accent)]">Search</button>
              </form>
            </div>
          </div>

          <section id="shop" aria-labelledby="category-grid-title" className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-sm)]">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <h2 id="category-grid-title" className="text-sm font-semibold uppercase tracking-[0.14em]">Shop categories</h2>
              <Link href="/search" className="text-xs font-medium text-[#f85606]">View all</Link>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-8 xl:grid-cols-16">
              {categories.map(({ icon: Icon, ...category }) => (
                <Link key={category.label} href={category.href} className="group grid min-h-[104px] place-items-center gap-2 rounded-[var(--radius-md)] border border-[#eee7dc] bg-white p-2 text-center transition hover:-translate-y-0.5 hover:border-[#f85606] hover:shadow-[var(--shadow-sm)]">
                  <span className={`grid h-11 w-11 place-items-center rounded-[var(--radius-full)] ${category.tone}`}><Icon size={18} strokeWidth={1.8} /></span>
                  <span className="grid gap-0.5">
                    <strong className="text-[0.78rem] leading-tight">{category.label}</strong>
                    <span className="text-[0.66rem] leading-tight text-[var(--color-text-muted)]">{category.detail}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section id="flash-sale" aria-labelledby="flash-sale-title" className="grid gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-sm)]">
            <div className="flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-3">
                <h2 id="flash-sale-title" className="text-sm font-semibold uppercase tracking-[0.14em]">Flash Sale</h2>
                <span className="rounded-[var(--radius-full)] bg-[#f85606] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-white">Today</span>
              </div>
              <Link href="/search?q=flash-sale" className="text-xs font-medium text-[#f85606]">Shop all</Link>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {flashSaleProducts.map((product) => (
                <Link key={product.id} href={product.href ?? `/product/${product.slug}`} className="group overflow-hidden rounded-[var(--radius-sm)] border border-[#eee7dc] bg-white transition hover:-translate-y-0.5 hover:border-[#f85606] hover:shadow-[var(--shadow-sm)]">
                  <span className="relative block aspect-square bg-[#f7f4ef]">
                    <Image src={product.image.src} alt={product.image.alt} fill sizes="(min-width: 1280px) 12vw, (min-width: 768px) 16vw, 50vw" className="object-cover transition group-hover:scale-[1.03]" />
                    <span className="absolute left-1.5 top-1.5 rounded bg-[#f85606] px-1.5 py-0.5 text-[0.62rem] font-semibold text-white">{product.saleTag}</span>
                  </span>
                  <span className="grid gap-1 p-2">
                    <span className="line-clamp-2 min-h-8 text-[0.72rem] leading-4">{product.title}</span>
                    <span className="flex items-baseline gap-1.5">
                      <strong className="text-sm leading-none text-[#f85606]">{product.price}</strong>
                      {product.compareAtPrice ? <span className="text-[0.65rem] text-[var(--color-text-muted)] line-through">{product.compareAtPrice}</span> : null}
                    </span>
                    <span className="h-1.5 overflow-hidden rounded-full bg-[#ffe2d3]"><span className="block h-full rounded-full bg-[#f85606]" style={{ width: `${Math.min(92, product.soldCount)}%` }} /></span>
                    <span className="text-[0.64rem] text-[var(--color-text-muted)]">Sold {product.soldCount}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section id="just-for-you" aria-labelledby="recommendation-title" className="grid gap-3">
            <div className="flex items-center justify-between gap-3 px-1">
              <h2 id="recommendation-title" className="text-sm font-semibold uppercase tracking-[0.14em]">Just For You</h2>
              <Link href="/search" className="text-xs font-medium text-[#f85606]">More recommendations</Link>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {recommendedProducts.map((product, index) => (
                <Link key={`${product.id}-${index}`} href={product.href ?? `/product/${product.slug}`} className="group overflow-hidden rounded-[var(--radius-sm)] bg-white shadow-[var(--shadow-sm)] ring-1 ring-[#eee7dc] transition hover:-translate-y-0.5 hover:ring-[#f85606]">
                  <span className="relative block aspect-square bg-[#f7f4ef]">
                    <Image src={product.image.src} alt={product.image.alt} fill sizes="(min-width: 1280px) 12vw, (min-width: 768px) 16vw, 50vw" className="object-cover transition group-hover:scale-[1.03]" />
                    {product.status ? <span className="absolute left-1.5 top-1.5 rounded bg-white/95 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[#f85606]">{product.status}</span> : null}
                  </span>
                  <span className="grid gap-1 p-2">
                    <span className="line-clamp-2 min-h-8 text-[0.72rem] leading-4">{product.title}</span>
                    <span className="text-[0.64rem] text-[var(--color-text-muted)]">{product.brand}</span>
                    <span className="flex items-baseline gap-1.5">
                      <strong className="text-sm leading-none text-[#f85606]">{product.price}</strong>
                      {product.compareAtPrice ? <span className="text-[0.65rem] text-[var(--color-text-muted)] line-through">{product.compareAtPrice}</span> : null}
                    </span>
                    <span className="flex items-center gap-1 text-[0.62rem] text-[#f5a000]">
                      <span aria-hidden="true">?????</span>
                      <span className="text-[var(--color-text-muted)]">({24 + (index % 71)})</span>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
    </SiteShell>
  );
}
