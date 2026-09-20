import type { MetadataRoute } from "next";
import { farisCatalogCategories } from "@/config/catalog";
import { journalArticles } from "@/config/journal";
import { storefrontProducts } from "@/lib/storefront/catalog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";
const staticPaths = ["/", "/faris", "/laaj", "/shop", "/collection", "/journal", "/the-house", "/delivery", "/returns", "/terms", "/privacy", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: new URL(path, siteUrl).toString() })),
    ...farisCatalogCategories.filter((category) => category.isActive).map((category) => ({ url: new URL(`/faris/${category.slug}`, siteUrl).toString() })),
    ...journalArticles.map((article) => ({ url: new URL("/journal/" + article.slug, siteUrl).toString() })),
    ...storefrontProducts.map((product) => ({ url: new URL(`/product/${product.slug}`, siteUrl).toString() }))
  ];
}
