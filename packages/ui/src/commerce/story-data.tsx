import { ProductBadge } from "./product-badge";
import type { ColorSwatchOption, CommerceImage, ProductCardProduct, SizeOption, CommerceOption } from "./types";

export const campaignImage: CommerceImage = {
  src: "/brand-assets/porsion-studio-old-money-polo-campaign.png",
  alt: "Folded black polo and stone trousers from Porsion Studio",
  width: 960,
  height: 400,
  sizes: "(min-width: 768px) 320px, 100vw"
};

export const markImage: CommerceImage = {
  src: "/brand-assets/porsion-studio-logo-mark.jpg",
  alt: "Porsion Studio gold logo mark",
  width: 200,
  height: 200,
  sizes: "96px"
};

export const galleryImages: CommerceImage[] = [campaignImage, markImage];

export const sampleProduct: ProductCardProduct = {
  id: "faris-polo-001",
  href: "#product",
  image: campaignImage,
  title: "Faris Old Money Polo",
  subtitle: "Mercerized cotton, regular fit",
  brand: "Faris",
  price: "BDT 2,490",
  compareAtPrice: "BDT 2,950",
  badges: [<ProductBadge key="new" tone="accent">New</ProductBadge>],
  status: "Low stock"
};

export const secondaryProduct: ProductCardProduct = {
  id: "laaj-dress-001",
  href: "#product",
  image: campaignImage,
  title: "Laaj Refined Day Dress",
  subtitle: "Fluid drape, quiet detail",
  brand: "Laaj",
  price: "BDT 3,890",
  badges: [<ProductBadge key="limited" tone="neutral">Limited</ProductBadge>]
};

export const variantOptions: CommerceOption[] = [
  { value: "regular", label: "Regular fit", description: "Everyday" },
  { value: "relaxed", label: "Relaxed fit", description: "Easy" },
  { value: "tailored", label: "Tailored fit", description: "Sharp" }
];

export const colorOptions: ColorSwatchOption[] = [
  { value: "black", label: "Black", color: "var(--color-text)" },
  { value: "stone", label: "Stone", color: "var(--color-border)" },
  { value: "accent", label: "House gold", color: "var(--color-accent)" }
];

export const sizeOptions: SizeOption[] = [
  { value: "s", label: "Small", shortLabel: "S" },
  { value: "m", label: "Medium", shortLabel: "M" },
  { value: "l", label: "Large", shortLabel: "L" },
  { value: "xl", label: "Extra large", shortLabel: "XL" }
];
