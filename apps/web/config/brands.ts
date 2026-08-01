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
    name: "Faris",
    label: "Faris",
    href: "/faris",
    positioning: "Timeless quiet luxury menswear",
    mood: ["structured", "confident", "old-money", "refined"]
  },
  laaj: {
    id: "laaj",
    name: "Laaj",
    label: "Laaj",
    href: "/laaj",
    positioning: "Refined modern womenswear",
    mood: ["elegant", "graceful", "modern", "premium"]
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
