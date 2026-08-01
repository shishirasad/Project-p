import type { Metadata } from "next";
import type { BrandContext } from "@/types/brand";
import { brandDefinitions } from "@/config/brands";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://porsionstudio.com";

export function buildSiteMetadata(brandContext: BrandContext = "house"): Metadata {
  const brand = brandDefinitions[brandContext];
  const title = brandContext === "house" ? "Porsion Studio" : `${brand.name} by Porsion Studio`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${title}`
    },
    description: brand.positioning,
    applicationName: "Porsion Studio",
    openGraph: {
      title,
      description: brand.positioning,
      siteName: "Porsion Studio",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: brand.positioning
    }
  };
}
