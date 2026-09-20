import type { BrandContext, BrandDefinition } from "@/types/brand";

export const brandDefinitions: Record<BrandContext, BrandDefinition> = {
  house: {
    id: "house",
    name: "Porsion Studio",
    label: "The House",
    href: "/",
    positioning: "The House of Timeless Fashion",
    mood: ["timeless", "editorial", "architectural", "quiet"]
  },
  faris: {
    id: "faris",
    name: "FARIS",
    label: "FARIS",
    href: "/faris",
    positioning: "Timeless quiet luxury menswear",
    mood: ["structured", "confident", "old-money", "refined"]
  },
  laaj: {
    id: "laaj",
    name: "LAAJ",
    label: "LAAJ",
    href: "/laaj",
    positioning: "Refined modern womenswear",
    mood: ["elegant", "graceful", "modern", "premium"]
  },
  labannya: {
    id: "labannya",
    name: "Labannya",
    label: "LABANNYA",
    href: "/labannya",
    positioning: "Comfort-led beauty and essentials",
    mood: ["soft", "confident", "wellness", "daily"]
  },
  campaign: {
    id: "campaign",
    name: "Porsion Campaign",
    label: "Campaign",
    href: "/campaign",
    positioning: "Campaign-specific luxury experience",
    mood: ["cinematic", "focused", "conversion-aware", "premium"]
  }
};

export const defaultBrandContext: BrandContext = "house";
