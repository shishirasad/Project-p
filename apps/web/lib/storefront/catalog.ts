import type { CommerceImage, ProductCardProduct } from "@porsion/ui";
import { farisCatalogCategories, laajCatalogCategories } from "@/config/catalog";
import type { FarisCategoryKey, StorefrontCategoryKey } from "@/config/catalog";

export type StorefrontBrand = "faris" | "laaj" | "labannya";
export type ProductSeason = "Warm weather" | "Cool weather" | "Year-round" | "Occasion";
export type ProductLifecycleStatus = "draft" | "active" | "inactive" | "archived";

export type ProductPublication = {
  status: ProductLifecycleStatus;
  isFeatured: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  isSeasonal: boolean;
  isComingSoon: boolean;
};

export type MeasurementRange = readonly [number, number];

export type ProductSizeGuide = {
  title: string;
  basis: string;
  primaryMeasurement: string;
  primaryLabel: string;
  columns: Array<{ key: string; label: string }>;
  rows: Array<{ size: string; values: Record<string, MeasurementRange> }>;
  image: { src: string; alt: string; width: number; height: number };
  howToMeasure: Array<{ key: string; title: string; description: string }>;
};

export type StorefrontProduct = ProductCardProduct & {
  brandKey: StorefrontBrand;
  slug: string;
  categoryKey: StorefrontCategoryKey;
  category: string;
  season: ProductSeason;
  publication: ProductPublication;
  description: string;
  fabric: string;
  care: string;
  colors: Array<{ value: string; label: string; color: string }>;
  sizes: string[];
  gallery: CommerceImage[];
  fit: { label: string; summary: string; note: string };
  details: string[];
  story: { eyebrow: string; title: string; body: string };
  styling: string[];
  sizeGuide: ProductSizeGuide;
};

export type StorefrontProductCard = ProductCardProduct & Pick<StorefrontProduct, "brandKey" | "slug" | "colors">;

const activeProductPublication = {
  status: "active",
  isFeatured: true,
  isNewArrival: true,
  isBestSeller: false,
  isSeasonal: false,
  isComingSoon: false
} satisfies ProductPublication;

export const houseHeroImage = "/campaigns/house-hero-v1.jpg";
export const farisHeroImage = "/campaigns/faris-hero-v1.jpg";
export const laajHeroImage = "/campaigns/laaj-hero-v1.jpg";
export const farisPoloImage = "/campaigns/faris-old-money-polo-v1.jpg";
export const farisTrouserImage = "/campaigns/faris-tailored-trouser-v1.jpg";
export const laajSetImage = "/campaigns/laaj-refined-set-v1.jpg";
export const laajDressImage = "/campaigns/laaj-everyday-drape-v1.jpg";
export const brandMarkImage = "/brand-assets/porsion-studio-wordmark-minimal.svg";

const farisPoloGallery: CommerceImage[] = [
  {
    src: farisPoloImage,
    alt: "FARIS Old Money Polo in midnight navy on a warm limestone plinth.",
    width: 1122,
    height: 1402,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  },
  {
    src: farisHeroImage,
    alt: "FARIS menswear campaign with a midnight polo and stone tailored trousers.",
    width: 1672,
    height: 941,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  }
];

const farisTrouserGallery: CommerceImage[] = [
  {
    src: farisTrouserImage,
    alt: "FARIS tailored trousers in warm stone on a limestone surface.",
    width: 1122,
    height: 1402,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  },
  {
    src: farisHeroImage,
    alt: "FARIS quiet luxury menswear campaign.",
    width: 1672,
    height: 941,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  }
];

const laajSetGallery: CommerceImage[] = [
  {
    src: laajSetImage,
    alt: "LAAJ Refined Set in muted rosewood on a sculptural mannequin.",
    width: 1122,
    height: 1402,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  },
  {
    src: laajHeroImage,
    alt: "LAAJ refined womenswear campaign in an ivory and stone courtyard.",
    width: 1672,
    height: 941,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  }
];

const laajDressGallery: CommerceImage[] = [
  {
    src: laajDressImage,
    alt: "LAAJ Everyday Drape Dress in muted plum rosewood on a sculptural mannequin.",
    width: 1122,
    height: 1402,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  },
  {
    src: laajHeroImage,
    alt: "LAAJ refined modern womenswear campaign.",
    width: 1672,
    height: 941,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  }
];

function measurementRange(min: number, max: number): MeasurementRange {
  return [min, max];
}

const farisMeasuringImage = {
  src: "/guides/faris-measuring-guide-v1.png",
  alt: "FARIS menswear measuring guide showing chest, waist, shoulder, sleeve and leg measurement positions.",
  width: 1122,
  height: 1402
};

const laajMeasuringImage = {
  src: "/guides/laaj-measuring-guide-v1.png",
  alt: "LAAJ womenswear measuring guide showing bust, waist, hip, sleeve and full-length measurement positions.",
  width: 1122,
  height: 1402
};

const farisTopSizeGuide: ProductSizeGuide = {
  title: "FARIS tops size guide",
  basis: "Body measurements. Measure over a light layer and keep the tape level without pulling tight.",
  primaryMeasurement: "chest",
  primaryLabel: "Chest circumference",
  columns: [
    { key: "chest", label: "Chest" },
    { key: "waist", label: "Waist" },
    { key: "shoulder", label: "Shoulder" }
  ],
  rows: [
    { size: "S", values: { chest: measurementRange(88, 94), waist: measurementRange(76, 82), shoulder: measurementRange(43, 44) } },
    { size: "M", values: { chest: measurementRange(95, 101), waist: measurementRange(83, 89), shoulder: measurementRange(45, 46) } },
    { size: "L", values: { chest: measurementRange(102, 108), waist: measurementRange(90, 96), shoulder: measurementRange(47, 48) } },
    { size: "XL", values: { chest: measurementRange(109, 115), waist: measurementRange(97, 103), shoulder: measurementRange(49, 50) } }
  ],
  image: farisMeasuringImage,
  howToMeasure: [
    { key: "chest", title: "Chest", description: "Measure around the fullest part of your chest, keeping the tape level under the arms." },
    { key: "waist", title: "Natural waist", description: "Measure around the narrowest point of your torso without holding your breath." },
    { key: "shoulder", title: "Shoulder", description: "Measure straight across the back from one shoulder edge to the other." }
  ]
};

const farisTrouserSizeGuide: ProductSizeGuide = {
  title: "FARIS trousers size guide",
  basis: "Body measurements. For the most reliable choice, measure the waist where you naturally wear your trousers.",
  primaryMeasurement: "waist",
  primaryLabel: "Waist circumference",
  columns: [
    { key: "waist", label: "Waist" },
    { key: "hip", label: "Hip" },
    { key: "insideLeg", label: "Inside leg" }
  ],
  rows: [
    { size: "30", values: { waist: measurementRange(76, 79), hip: measurementRange(91, 95), insideLeg: measurementRange(77, 79) } },
    { size: "32", values: { waist: measurementRange(81, 84), hip: measurementRange(96, 100), insideLeg: measurementRange(78, 80) } },
    { size: "34", values: { waist: measurementRange(86, 89), hip: measurementRange(101, 105), insideLeg: measurementRange(79, 81) } },
    { size: "36", values: { waist: measurementRange(91, 94), hip: measurementRange(106, 110), insideLeg: measurementRange(80, 82) } }
  ],
  image: farisMeasuringImage,
  howToMeasure: [
    { key: "waist", title: "Waist", description: "Wrap the tape around the point where the waistband will sit; keep one finger beneath the tape." },
    { key: "hip", title: "Hip", description: "Measure around the fullest point of the seat with your feet together." },
    { key: "insideLeg", title: "Inside leg", description: "Measure from the top of the inner leg to the point where you want the trouser to finish." }
  ]
};

const laajSizeGuide: ProductSizeGuide = {
  title: "LAAJ womenswear size guide",
  basis: "Body measurements. Stand naturally, wear a light layer, and keep the tape comfortably close to the body.",
  primaryMeasurement: "bust",
  primaryLabel: "Bust circumference",
  columns: [
    { key: "bust", label: "Bust" },
    { key: "waist", label: "Waist" },
    { key: "hip", label: "Hip" }
  ],
  rows: [
    { size: "S", values: { bust: measurementRange(84, 88), waist: measurementRange(68, 72), hip: measurementRange(92, 96) } },
    { size: "M", values: { bust: measurementRange(89, 93), waist: measurementRange(73, 77), hip: measurementRange(97, 101) } },
    { size: "L", values: { bust: measurementRange(94, 99), waist: measurementRange(78, 83), hip: measurementRange(102, 107) } }
  ],
  image: laajMeasuringImage,
  howToMeasure: [
    { key: "bust", title: "Bust", description: "Measure around the fullest part of the bust, keeping the tape straight across the back." },
    { key: "waist", title: "Natural waist", description: "Measure around the narrowest point of the torso without pulling the tape tight." },
    { key: "hip", title: "Hip", description: "Stand with feet together and measure around the fullest part of the hips and seat." }
  ]
};

const featuredProducts: StorefrontProduct[] = [
  {
    id: "faris-old-money-polo",
    slug: "old-money-polo",
    href: "/product/old-money-polo",
    brandKey: "faris",
    brand: "FARIS",
    categoryKey: "polos",
    category: "Polos",
    season: "Warm weather",
    publication: activeProductPublication,
    title: "Old Money Polo",
    subtitle: "Soft structure with a quiet finish.",
    price: "BDT 3,490",
    status: "New arrival",
    badges: ["New"],
    image: farisPoloGallery[0]!,
    gallery: farisPoloGallery,
    description: "A refined everyday polo with a clean collar, quiet embroidery, and a relaxed but considered proportion.",
    fabric: "Premium cotton pique with a soft, breathable hand feel.",
    care: "Wash inside out in cool water with similar colours. Reshape while damp, dry in shade and avoid tumble heat to protect the collar and surface.",
    fit: {
      label: "Regular fit",
      summary: "Clean through the shoulder with comfortable room across the chest and a straight hem.",
      note: "Choose your usual size for a composed fit. Size up if you prefer a more relaxed silhouette."
    },
    details: [
      "Structured rib polo collar designed to keep its shape.",
      "Short two-button placket for a clean neckline.",
      "Quiet FARIS embroidery placed at the chest.",
      "Straight hem that works tucked or untucked."
    ],
    story: {
      eyebrow: "The FARIS polo",
      title: "A familiar piece, resolved with restraint.",
      body: "The Old Money Polo is designed as an everyday anchor: soft enough for long hours, structured enough to feel intentional, and quiet enough to move between work, dinner, and an unhurried weekend."
    },
    styling: [
      "Pair Midnight with the FARIS Tailored Trouser for a clean tonal contrast.",
      "Wear untucked with the collar open for an easy daytime silhouette.",
      "Add an unstructured jacket when the setting calls for more polish."
    ],
    sizeGuide: farisTopSizeGuide,
    colors: [
      { value: "midnight", label: "Midnight", color: "#14161b" },
      { value: "stone", label: "Stone", color: "#c7b59a" }
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "faris-tailored-trouser",
    slug: "tailored-trouser",
    href: "/product/tailored-trouser",
    brandKey: "faris",
    brand: "FARIS",
    categoryKey: "trousers",
    category: "Trousers & Pants",
    season: "Year-round",
    publication: activeProductPublication,
    title: "Tailored Trouser",
    subtitle: "Clean proportions for everyday polish.",
    price: "BDT 4,290",
    status: "Essential",
    image: farisTrouserGallery[0]!,
    gallery: farisTrouserGallery,
    description: "A tailored trouser designed to balance an easy drape with a deliberate silhouette.",
    fabric: "Structured cotton blend chosen for regular wear and a clean fall.",
    care: "Wash separately on a gentle cool cycle. Reshape before drying in shade and use a cool iron on the reverse to protect the trouser finish.",
    fit: {
      label: "Tailored straight fit",
      summary: "Sits cleanly at the waist with a composed line through the seat and leg.",
      note: "Choose the size closest to your measured waist. If between sizes, choose the larger size for comfort."
    },
    details: [
      "Flat front for an uninterrupted tailored line.",
      "Belt loops and discreet side pockets for everyday function.",
      "Balanced rise designed to sit naturally at the waist.",
      "Straight leg with enough ease for comfortable movement."
    ],
    story: {
      eyebrow: "Everyday tailoring",
      title: "Structure that never feels rigid.",
      body: "The FARIS Tailored Trouser brings polish into daily life without the stiffness of formal tailoring. Its value is in proportion, a clean fall, and the ease to wear it repeatedly."
    },
    styling: [
      "Wear with the Midnight polo for the first FARIS signature look.",
      "Pair with a crisp shirt and minimal leather shoes for work.",
      "Use a fine knit and relaxed footwear for a softer weekend edit."
    ],
    sizeGuide: farisTrouserSizeGuide,
    colors: [
      { value: "sand", label: "Sand", color: "#b8a58a" },
      { value: "charcoal", label: "Charcoal", color: "#313131" }
    ],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: "laaj-refined-set",
    slug: "refined-set",
    href: "/product/refined-set",
    brandKey: "laaj",
    brand: "LAAJ",
    categoryKey: "modest-sets",
    category: "Co-ords",
    season: "Year-round",
    publication: activeProductPublication,
    title: "The Refined Set",
    subtitle: "Ease, balance, and a considered line.",
    price: "BDT 5,890",
    status: "New arrival",
    badges: ["LAAJ"],
    image: laajSetGallery[0]!,
    gallery: laajSetGallery,
    description: "A composed two-piece made to move between meaningful moments and an everyday rhythm.",
    fabric: "Lightweight woven blend with a smooth finish and fluid drape.",
    care: "Hand wash gently in cool water or use professional dry cleaning when needed. Steam from the reverse and store folded away from direct sunlight.",
    fit: {
      label: "Relaxed fluid fit",
      summary: "Easy through the body with a softly defined line and room for natural movement.",
      note: "Choose your usual size for the intended drape. Size down only if you prefer a closer silhouette."
    },
    details: [
      "Two-piece composition designed to work together or separately.",
      "Softly shaped neckline with a clean, modest line.",
      "Fluid body proportion for movement and layering.",
      "Quiet finishing that keeps attention on colour and silhouette."
    ],
    story: {
      eyebrow: "The LAAJ set",
      title: "Ease, balance, and a graceful sense of occasion.",
      body: "The Refined Set is designed for days that move between family, work, and meaningful gatherings. Each line is kept calm so the wearer, rather than the garment, remains the centre of the moment."
    },
    styling: [
      "Keep accessories minimal and let the rosewood tone lead the look.",
      "Wear the pieces separately to extend the set into an everyday wardrobe.",
      "Add a light outer layer for a modest, softly tonal composition."
    ],
    sizeGuide: laajSizeGuide,
    colors: [
      { value: "rosewood", label: "Rosewood", color: "#5b2530" },
      { value: "pearl", label: "Pearl", color: "#e6ded4" }
    ],
    sizes: ["S", "M", "L"]
  },
  {
    id: "laaj-everyday-drape",
    slug: "everyday-drape",
    href: "/product/everyday-drape",
    brandKey: "laaj",
    brand: "LAAJ",
    categoryKey: "dresses",
    category: "Dresses",
    season: "Warm weather",
    publication: activeProductPublication,
    title: "Everyday Drape Dress",
    subtitle: "Quiet movement in a relaxed silhouette.",
    price: "BDT 4,990",
    status: "New arrival",
    image: laajDressGallery[0]!,
    gallery: laajDressGallery,
    description: "A gentle everyday dress shaped for comfort, polish, and an unhurried sense of occasion.",
    fabric: "Soft viscose blend with an airy, low-maintenance finish.",
    care: "Hand wash in cool water with similar colours. Do not bleach or wring; reshape the dress and hang it in shade, then steam lightly if needed.",
    fit: {
      label: "Relaxed drape",
      summary: "Soft through the body with an easy line that falls away from the waist.",
      note: "Choose your usual size for the intended movement. Use bust measurement as the main reference."
    },
    details: [
      "A modest neckline balanced for everyday layering.",
      "Relaxed body with movement through the skirt.",
      "Soft sleeve line designed for comfort across the day.",
      "An uncomplicated silhouette that can shift from day to occasion."
    ],
    story: {
      eyebrow: "An everyday LAAJ signature",
      title: "Quiet movement for the rhythm of real life.",
      body: "The Everyday Drape Dress holds the LAAJ idea in its simplest form: graceful without ceremony, modest without heaviness, and comfortable enough to become part of a repeated wardrobe."
    },
    styling: [
      "Use a tonal scarf and fine jewellery for a composed everyday look.",
      "Add a structured outer layer when a sharper silhouette is needed.",
      "Keep footwear simple so the movement of the dress remains visible."
    ],
    sizeGuide: laajSizeGuide,
    colors: [
      { value: "plum", label: "Plum", color: "#5b2530" },
      { value: "mist", label: "Mist", color: "#ded9d2" }
    ],
    sizes: ["S", "M", "L"]
  }
];

export const storefrontFeaturedProducts = featuredProducts;

type CatalogCategory = {
  key: StorefrontCategoryKey;
  label: string;
  productTypes: readonly string[];
};

const categoryImages: Record<string, { src: string; alt: string; position?: string }> = {
  "faris:shirts": { src: "/catalog/faris-core-v1.jpg", alt: "FARIS shirting category editorial.", position: "20% 30%" },
  "faris:t-shirts": { src: "/catalog/faris-core-v1.jpg", alt: "FARIS T-shirt category editorial.", position: "24% 78%" },
  "faris:polos": { src: "/catalog/faris-core-v1.jpg", alt: "FARIS polo category editorial.", position: "80% 28%" },
  "faris:trousers": { src: "/catalog/faris-core-v1.jpg", alt: "FARIS trousers category editorial.", position: "78% 78%" },
  "faris:knitwear": { src: "/catalog/faris-layers-v1.jpg", alt: "FARIS knitwear category editorial.", position: "25% 25%" },
  "faris:outerwear": { src: "/catalog/faris-layers-v1.jpg", alt: "FARIS outerwear category editorial.", position: "68% 45%" },
  "faris:traditional": { src: "/catalog/faris-core-v1.jpg", alt: "FARIS Panjabi and traditional category editorial.", position: "52% 42%" },
  "faris:shorts": { src: "/catalog/faris-finishing-v1.jpg", alt: "FARIS shorts category editorial.", position: "70% 48%" },
  "faris:accessories": { src: "/catalog/faris-finishing-v1.jpg", alt: "FARIS leather and wardrobe accessories.", position: "76% 28%" },
  "faris:footwear": { src: "/catalog/faris-finishing-v1.jpg", alt: "FARIS dark brown suede footwear.", position: "22% 78%" },
  "abaya-burkha": { src: "/catalog/laaj-modest-v1.jpg", alt: "LAAJ refined full-length abaya.", position: "18% 50%" },
  dresses: { src: "/catalog/laaj-everyday-v1.jpg", alt: "LAAJ soft rose modest dress.", position: "14% 52%" },
  "kameez-salwar": { src: "/catalog/laaj/premium-kameez-v1.jpg", alt: "LAAJ premium long kameez in muted rosewood." },
  "kurti-kurta": { src: "/catalog/laaj-everyday-v1.jpg", alt: "LAAJ ivory long kurti with relaxed trousers.", position: "38% 50%" },
  "two-three-piece": { src: "/catalog/laaj-everyday-v1.jpg", alt: "LAAJ coordinated three-piece wardrobe.", position: "62% 45%" },
  "modest-sets": { src: "/catalog/laaj-modest-v1.jpg", alt: "LAAJ taupe modest tunic and trouser set.", position: "86% 50%" },
  kaftan: { src: "/catalog/laaj-modest-v1.jpg", alt: "LAAJ muted plum kaftan.", position: "64% 50%" },
  "tops-tunics": { src: "/catalog/laaj-everyday-v1.jpg", alt: "LAAJ rosewood long-sleeve tunic.", position: "84% 42%" },
  outerwear: { src: "/catalog/laaj/long-kimono-v1.jpg", alt: "LAAJ long kimono outer layer in deep plum." },
  bottoms: { src: "/catalog/laaj-everyday-v1.jpg", alt: "LAAJ fluid wide-leg trouser.", position: "82% 82%" },
  "dupatta-hijab": { src: "/catalog/laaj-finishing-v1.jpg", alt: "LAAJ chiffon, modal and silk veiling layers.", position: "70% 20%" },
  niqab: { src: "/catalog/laaj-finishing-v1.jpg", alt: "LAAJ understated niqab.", position: "18% 45%" },
  winter: { src: "/catalog/laaj-season-v1.jpg", alt: "LAAJ winter coat, cardigan and soft layers.", position: "28% 50%" },
  "inner-basics": { src: "/catalog/laaj-finishing-v1.jpg", alt: "LAAJ ivory inner layer.", position: "55% 52%" },
  "lounge-home": { src: "/catalog/laaj-finishing-v1.jpg", alt: "LAAJ soft home robe and lounge layers.", position: "20% 78%" },
  occasion: { src: "/catalog/laaj-season-v1.jpg", alt: "LAAJ refined occasion abaya and kaftan.", position: "78% 50%" },
  "laaj:accessories": { src: "/catalog/laaj-finishing-v1.jpg", alt: "LAAJ handbag, scarf and refined finishing accessories.", position: "25% 30%" },
  "laaj:footwear": { src: "/catalog/laaj-finishing-v1.jpg", alt: "LAAJ elegant flat sandals.", position: "82% 72%" }
};

const productImages: Record<string, { src: string; alt: string; position?: string }> = {
  "faris:shirts:oxford-shirt": { src: "/catalog/faris/old-money-oxford-shirt-v1.jpg", alt: "FARIS Oxford Shirt in crisp ivory." },
  "faris:t-shirts:premium-basic-t-shirt": { src: "/catalog/products/faris/premium-essential-t-shirt.jpg", alt: "FARIS Premium Basic T-Shirt in deep navy cotton." },
  "faris:knitwear:crewneck-sweater": { src: "/catalog/products/faris/crewneck-knit.jpg", alt: "FARIS Crewneck Sweater in charcoal knit." },
  "faris:outerwear:trench-coat": { src: "/catalog/faris/trench-coat-v1.jpg", alt: "FARIS Trench Coat in warm camel stone." },
  "faris:traditional:premium-panjabi": { src: "/catalog/faris/premium-panjabi-v1.jpg", alt: "FARIS Premium Panjabi in warm ivory." },
  "faris:shorts:chino-shorts": { src: "/catalog/products/faris/chino-shorts.jpg", alt: "FARIS Chino Shorts in warm stone cotton." },
  "faris:accessories:leather-belt": { src: "/catalog/products/faris/leather-belt.jpg", alt: "FARIS Leather Belt in dark brown." },
  "faris:footwear:loafers": { src: "/catalog/products/faris/loafers.jpg", alt: "FARIS Loafers in dark brown suede." },
  "laaj:kameez-salwar:premium-kameez": { src: "/catalog/laaj/premium-kameez-v1.jpg", alt: "LAAJ Premium Kameez in muted rosewood." },
  "laaj:kameez-salwar:three-piece-set": { src: "/catalog/laaj/three-piece-set-v1.jpg", alt: "LAAJ Three-Piece Set in ivory and soft taupe." },
  "laaj:kameez-salwar:two-piece-set": { src: "/catalog/laaj/modest-coord-set-v1.jpg", alt: "LAAJ Two-Piece Set in warm mauve taupe." },
  "laaj:kameez-salwar:long-kameez": { src: "/catalog/laaj/premium-kameez-v1.jpg", alt: "LAAJ Long Kameez in muted rosewood." },
  "laaj:kameez-salwar:straight-cut-kameez": { src: "/catalog/laaj/premium-kameez-v1.jpg", alt: "LAAJ Straight-Cut Kameez in muted rosewood." },
  "laaj:kameez-salwar:embroidered-kameez": { src: "/catalog/laaj/premium-kameez-v1.jpg", alt: "LAAJ Embroidered Kameez with restrained tonal detail." },
  "laaj:kurti-kurta:everyday-kurti": { src: "/catalog/laaj/everyday-kurti-v1.jpg", alt: "LAAJ Everyday Kurti in muted sage." },
  "laaj:kurti-kurta:premium-kurti": { src: "/catalog/laaj/everyday-kurti-v1.jpg", alt: "LAAJ Premium Kurti in muted sage." },
  "laaj:modest-sets:modest-co-ord-set": { src: "/catalog/laaj/modest-coord-set-v1.jpg", alt: "LAAJ Modest Co-Ord Set in warm mauve taupe." },
  "laaj:modest-sets:tunic-and-trouser": { src: "/catalog/laaj/modest-coord-set-v1.jpg", alt: "LAAJ Tunic and Trouser set in warm mauve taupe." },
  "laaj:outerwear:long-kimono": { src: "/catalog/laaj/long-kimono-v1.jpg", alt: "LAAJ Long Kimono in deep plum black." },
  "laaj:outerwear:modest-cardigan": { src: "/catalog/laaj/long-kimono-v1.jpg", alt: "LAAJ Modest Cardigan in deep plum." },
  "laaj:outerwear:lightweight-outer": { src: "/catalog/laaj/long-kimono-v1.jpg", alt: "LAAJ Lightweight Outer layer in deep plum." },
  "laaj:dupatta-hijab:premium-hijab": { src: "/catalog/laaj/premium-hijab-v1.jpg", alt: "LAAJ Premium Modal Hijab in muted rosewood." },
  "laaj:dupatta-hijab:modal-hijab": { src: "/catalog/laaj/premium-hijab-v1.jpg", alt: "LAAJ Modal Hijab in muted rosewood." }
};

const farisCategoryProductImages: Record<string, { src: string; alt: string; position?: string }> = {
  "faris:shirts": productImages["faris:shirts:oxford-shirt"]!,
  "faris:t-shirts": productImages["faris:t-shirts:premium-basic-t-shirt"]!,
  "faris:polos": { src: farisPoloImage, alt: "FARIS Old Money Polo in midnight navy." },
  "faris:trousers": { src: farisTrouserImage, alt: "FARIS Tailored Trouser in warm stone." },
  "faris:knitwear": productImages["faris:knitwear:crewneck-sweater"]!,
  "faris:outerwear": productImages["faris:outerwear:trench-coat"]!,
  "faris:traditional": productImages["faris:traditional:premium-panjabi"]!,
  "faris:shorts": productImages["faris:shorts:chino-shorts"]!,
  "faris:accessories": productImages["faris:accessories:leather-belt"]!,
  "faris:footwear": productImages["faris:footwear:loafers"]!
};

const categoryPrices: Record<string, number> = {
  "faris:shirts": 2890, "faris:t-shirts": 1790, "faris:polos": 2490, "faris:trousers": 3490,
  "faris:knitwear": 3890, "faris:outerwear": 5990, "faris:traditional": 3990,
  "faris:shorts": 2490, "faris:accessories": 1290, "faris:footwear": 4990,
  "abaya-burkha": 5290, dresses: 4490, "kameez-salwar": 4290, "kurti-kurta": 3290,
  "two-three-piece": 4890, "modest-sets": 4690, kaftan: 4990, "tops-tunics": 2890, bottoms: 2790,
  outerwear: 3990, "dupatta-hijab": 990, niqab: 690, winter: 4290, "inner-basics": 1190, "lounge-home": 2990, occasion: 5790
};

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function titleCase(value: string) {
  return value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
    .replace(/T-shirt/gi, "T-Shirt")
    .replace(/V-neck/gi, "V-Neck")
    .replace(/A-line/gi, "A-Line")
    .replace(/Co-ord/gi, "Co-Ord");
}

function productTitle(brand: StorefrontBrand, categoryKey: string, type: string) {
  const suffixes: Record<string, string> = {
    shirts: "Shirt", "t-shirts": "T-Shirt", polos: "Polo", trousers: "Trouser", shorts: "Shorts",
    dresses: "Dress", kaftan: "Kaftan", niqab: "Niqab"
  };
  if (brand === "faris" && categoryKey === "knitwear") {
    return titleCase(/knit|sweater|turtleneck|cardigan|polo|vest/i.test(type) ? type : type + " Knit");
  }
  if (categoryKey === "outerwear") return titleCase(type);
  if (categoryKey === "trousers" && /pants|trouser|jeans/i.test(type)) return titleCase(type);
  const suffix = suffixes[categoryKey];
  if (!suffix || type.toLowerCase().includes(suffix.toLowerCase())) return titleCase(type);
  return titleCase(type + " " + suffix);
}

function formatPrice(value: number) {
  return "BDT " + new Intl.NumberFormat("en-BD").format(value);
}

function productSizes(brand: StorefrontBrand, categoryKey: string) {
  if (categoryKey === "accessories" || categoryKey === "dupatta-hijab" || categoryKey === "niqab") return ["One size"];
  if (categoryKey === "footwear") return brand === "faris" ? ["40", "41", "42", "43", "44"] : ["36", "37", "38", "39", "40"];
  if (brand === "faris" && ["trousers", "shorts"].includes(categoryKey)) return ["30", "32", "34", "36"];
  return brand === "faris" ? ["S", "M", "L", "XL"] : ["S", "M", "L"];
}

const categoryPurpose: Record<string, string> = {
  shirts: "clean collars, breathable cloth and proportions that work tucked or untucked",
  "t-shirts": "a composed neckline, dependable recovery and an easy everyday layer",
  polos: "soft structure through the collar with comfort across long hours",
  knitwear: "tactile warmth, controlled ribbing and a line that layers cleanly",
  "faris:outerwear": "light protective structure, considered hardware and a balanced outer silhouette",
  trousers: "a clean rise, useful pockets and a leg line that moves from work to evening",
  shorts: "breathable ease with enough structure to remain composed away from home",
  traditional: "breathable occasion dressing, an assured long line and detail that remains deliberately restrained",
  accessories: "quiet function, tactile materials and finishing details that support the wardrobe",
  footwear: "stable construction, comfortable shape and a restrained finish for repeated wear",
  "abaya-burkha": "full modest coverage, graceful drape and practical movement through the day",
  dresses: "an easy full silhouette with feminine movement and uncomplicated layering",
  "kameez-salwar": "balanced coverage, a clean long line and coordinated pieces shaped for movement",
  "kurti-kurta": "a clean long line, comfortable coverage and balance with relaxed bottoms",
  "two-three-piece": "coordinated colour and proportion, with pieces useful together or separately",
  "modest-sets": "coverage, ease and a resolved two-piece silhouette for everyday versatility",
  kaftan: "fluid volume, graceful sleeves and an effortless line from day to occasion",
  "tops-tunics": "comfortable sleeve and hem coverage with a refined everyday proportion",
  outerwear: "an easy final layer that adds coverage and shape without visual heaviness",
  bottoms: "fluid movement, a comfortable waist and a line designed for modest layering",
  "dupatta-hijab": "soft framing, useful opacity and drape that remains comfortable for long wear",
  niqab: "lightweight coverage, secure ties and clear consideration around the eyes",
  winter: "warmth without excessive weight, with layers designed to preserve the LAAJ silhouette",
  "inner-basics": "smooth, breathable coverage beneath abayas, dresses and modest layers",
  "lounge-home": "private comfort, modest coverage and fabrics chosen for unhurried hours",
  occasion: "meaningful colour, controlled detail and a silhouette that can be worn beyond one event"
};

function includesAny(value: string, terms: readonly string[]) {
  return terms.some((term) => value.includes(term));
}

function seasonFor(categoryKey: string, type: string): ProductSeason {
  const value = (categoryKey + " " + type).toLowerCase();
  if (categoryKey === "traditional" || categoryKey === "occasion" || includesAny(value, ["party", "wedding", "eid", "ramadan", "festive", "occasion"])) return "Occasion";
  if (includesAny(value, ["winter", "wool", "flannel", "corduroy", "knit", "sweater", "sweatshirt", "hoodie", "puffer", "coat", "jacket", "cardigan", "beanie", "scarf"])) return "Cool weather";
  if (categoryKey === "shorts" || categoryKey === "t-shirts" || categoryKey === "polos" || includesAny(value, ["linen", "camp collar", "cuban collar", "chiffon", "modal", "jersey hijab"])) return "Warm weather";
  return "Year-round";
}

function fabricFor(brand: StorefrontBrand, categoryKey: string, type: string) {
  const value = (categoryKey + " " + type).toLowerCase();
  if (includesAny(value, ["leather belt", "wallet", "card holder", "handbag", "shoulder bag", "tote bag", "mini bag"])) {
    return "A durable leather or considered leather-alternative construction with a low-sheen finish and discreet hardware; exact material is confirmed on the production SKU.";
  }
  if (categoryKey === "footwear") return "A structured upper, cushioned lining and durable sole selected for comfort and repeat wear; exact upper composition is confirmed before release.";
  if (value.includes("suede")) return "A soft suede-look outer with a smooth lining and restrained surface finish, selected to bring texture without visible excess.";
  if (value.includes("linen")) return "A breathable linen-rich woven selected for airflow, natural texture and a relaxed fall that suits warm Bangladesh weather.";
  if (value.includes("oxford")) return "A breathable cotton Oxford weave with visible texture, dependable structure and a hand feel that softens with considered wear.";
  if (value.includes("poplin")) return "Fine cotton poplin selected for its smooth surface, light weight and crisp line beneath tailoring.";
  if (value.includes("pique")) return "Breathable cotton pique with a softly structured surface that supports the collar while remaining comfortable through long hours.";
  if (value.includes("denim")) return "Structured cotton denim selected for dependable recovery, comfortable movement and a wash designed to age with repeated wear.";
  if (value.includes("corduroy")) return "Fine-wale cotton corduroy chosen for tactile warmth and a clean surface that layers without unnecessary bulk.";
  if (value.includes("flannel")) return "Soft brushed cotton flannel selected for light warmth, an easy hand feel and comfortable cool-weather layering.";
  if (includesAny(value, ["wool", "knit", "cardigan", "sweater"])) return "A soft cotton-knit or wool-blend construction selected for warmth, shape recovery and a clean layered silhouette.";
  if (value.includes("chiffon")) return "Lightweight chiffon selected for an airy drape, neat edge finish and comfortable layering with an undercap when additional opacity is preferred.";
  if (value.includes("modal")) return "Breathable modal weave with a soft matte surface, gentle stretch and a fluid fall designed for comfortable all-day framing.";
  if (value.includes("jersey")) return "Soft stretch jersey selected for secure drape, easy shaping and dependable comfort without frequent readjustment.";
  if (value.includes("silk")) return "A smooth silk-touch woven selected for soft lustre and fluid occasion drape; exact fibre composition is confirmed on the production SKU.";
  if (includesAny(value, ["abaya", "burkha", "kaftan", "kimono", "outer"])) return "A fluid matte crepe or breathable woven selected for modest coverage, graceful movement and a low-cling fall.";
  if (includesAny(value, ["panjabi", "kameez", "kurti", "three-piece", "two-piece", "3-piece"])) return "A breathable cotton-rich or fluid woven cloth selected for comfortable coverage, a clean long line and repeat wear in Bangladesh.";
  if (categoryKey === "underwear-basics" || categoryKey === "inner-basics") return "Breathable cotton jersey or stretch rib selected for softness, smooth layering and dependable shape recovery close to the body.";
  if (categoryKey === "accessories") {
    return brand === "faris"
      ? "Cotton, wool, leather or considered hardware selected according to the piece, always with a restrained FARIS surface finish."
      : "Soft woven cloth, considered leather alternatives or discreet metal details selected to sit naturally within the LAAJ palette.";
  }
  if (brand === "faris") return "A cotton-rich or considered blended cloth selected for breathability, clean structure and repeat wear in Bangladesh.";
  return "A fluid woven or jersey cloth selected for modest coverage, soft movement and comfort through a warm climate.";
}

function careFor(categoryKey: string, type: string) {
  const value = (categoryKey + " " + type).toLowerCase();
  if (includesAny(value, ["leather", "wallet", "card holder", "handbag", "bag", "footwear", "shoe", "loafer", "sneaker", "boot"])) return "Wipe with a soft dry cloth after use. Keep away from direct heat and moisture, support the shape in storage, and use a material-appropriate specialist cleaner when required.";
  if (includesAny(value, ["coat", "wool", "suede", "embroidered", "occasion"])) return "Air after wear and spot clean gently. Professional dry cleaning is recommended when needed; store on a supportive hanger away from direct sunlight.";
  if (includesAny(value, ["chiffon", "modal", "silk", "hijab", "niqab", "dupatta"])) return "Hand wash gently in cool water with a mild cleanser. Do not wring; reshape and dry flat or draped in shade, then steam lightly if needed.";
  if (value.includes("denim")) return "Wash inside out in cool water only when needed. Use similar dark colours, avoid bleach and tumble heat, and reshape before drying in shade.";
  if (includesAny(value, ["knit", "cardigan", "sweater"])) return "Hand wash or use a gentle wool cycle in cool water. Reshape while damp and dry flat in shade to protect the knit and prevent stretching.";
  if (value.includes("linen")) return "Wash gently in cool water with similar light colours. Reshape while damp, dry in shade and embrace the natural softened crease or steam lightly.";
  return "Wash gently in cool water with similar colours. Do not bleach. Reshape and dry in shade; use a cool iron or light steam when needed.";
}

function fitFor(brand: StorefrontBrand, categoryKey: string, type: string) {
  const value = (categoryKey + " " + type).toLowerCase();
  const note = "Use the size guide and your primary body measurement. Choose the larger size when between sizes or when you prefer more ease.";
  if (categoryKey === "accessories" || categoryKey === "dupatta-hijab" || categoryKey === "niqab") {
    return { label: "Considered one-size design", summary: "Proportions and adjustability are designed to sit comfortably across the intended range of use.", note: "Check the product measurements and wearing notes before ordering; dimensions are confirmed on the production SKU." };
  }
  if (categoryKey === "footwear") return { label: "Comfort-led standard fit", summary: "Shaped for stable everyday wear with room for natural movement through the forefoot.", note: "Choose your usual EU size. If between sizes or wearing a thicker sock, choose the larger size." };
  if (includesAny(value, ["tailored", "formal", "straight-cut", "slim straight"])) {
    return { label: "Clean tailored fit", summary: "Held neatly through the shoulder or waist with a controlled line and enough ease for natural movement.", note };
  }
  if (includesAny(value, ["oversized", "relaxed", "kaftan", "abaya", "burkha", "kimono", "wide-leg", "palazzo"])) {
    return { label: brand === "faris" ? "Relaxed considered fit" : "Fluid modest fit", summary: brand === "faris" ? "Cut with visible ease through the body while keeping the shoulder and hem deliberate." : "Comfortable coverage through the body with a fluid line designed for movement and light layering.", note };
  }
  if (includesAny(value, ["set", "three-piece", "two-piece", "3-piece", "co-ord"])) {
    return { label: "Balanced coordinated fit", summary: "Each piece is proportioned to work as a complete look while retaining enough ease to be worn separately.", note };
  }
  return {
    label: brand === "faris" ? "Considered regular fit" : "Relaxed modest fit",
    summary: brand === "faris" ? "Balanced through the body with enough ease for natural movement and clean layering." : "Comfortable coverage through the body with a composed line that allows easy movement and layering.",
    note
  };
}

function constructionFor(categoryKey: string, type: string) {
  const value = (categoryKey + " " + type).toLowerCase();
  if (value.includes("oxford")) return "Button-down collar, clean front placket and a curved hem designed to work tucked or untucked.";
  if (includesAny(value, ["mandarin", "panjabi"])) return "A restrained band collar and clean placket keep the neckline composed and easy to layer.";
  if (includesAny(value, ["cuban", "camp collar"])) return "An open collar and relaxed neckline create airflow while preserving a deliberate shoulder line.";
  if (value.includes("polo")) return "A shaped collar and concise placket provide soft structure without the stiffness of formal shirting.";
  if (includesAny(value, ["jacket", "coat", "windbreaker"])) return "Outer seams, pockets and fastenings are resolved cleanly so the silhouette carries the design.";
  if (includesAny(value, ["trouser", "pants", "jeans", "palazzo", "skirt"])) return "The rise, waistband and pocket placement are balanced for comfort and an uninterrupted line.";
  if (includesAny(value, ["abaya", "burkha", "dress", "kaftan", "kameez", "kurti", "tunic", "kimono"])) return "Neckline, sleeve and hem coverage are balanced to preserve graceful movement without excess volume.";
  if (includesAny(value, ["hijab", "dupatta", "niqab", "shawl", "wrap"])) return "Edges and ties are finished neatly to support secure drape, comfortable framing and repeated styling.";
  if (value.includes("set")) return "The pieces share a coordinated colour and proportion while remaining complete enough to wear separately.";
  return "Seams, edges and functional details are kept clean so material, colour and proportion remain central.";
}

function stylingFor(brand: StorefrontBrand, categoryKey: string, type: string) {
  const value = (categoryKey + " " + type).toLowerCase();
  if (brand === "faris" && includesAny(value, ["panjabi", "traditional"])) return ["Wear with straight ivory or stone pajama trousers for a calm tonal composition.", "Add a restrained outer layer only when the occasion asks for more definition.", "Finish with understated leather sandals or loafers and keep visible accessories minimal."];
  if (brand === "faris" && categoryKey === "sets") return ["Wear the complete set when you want an assured decision with no unnecessary contrast.", "Separate the top and trouser into the wider FARIS wardrobe to extend repeat wear.", "Keep footwear tonal and let the relationship between cloth and proportion lead the look."];
  if (brand === "faris") return ["Build a tonal look with charcoal, navy, ivory or stone.", "Balance the piece with one structured and one relaxed element.", "Keep accessories restrained and let fit, fabric and clean footwear carry the look."];
  if (includesAny(value, ["hijab", "dupatta", "niqab"])) return ["Pair with an adjacent LAAJ tone for a soft monochromatic frame.", "Use an undercap only when the cloth or styling preference asks for additional security.", "Keep pins and jewellery discreet so the fabric drape remains uninterrupted."];
  if (categoryKey === "outerwear") return ["Layer over an ivory, taupe or tonal inner column to preserve a long, quiet line.", "Wear open for movement or secure lightly when additional coverage is preferred.", "Choose a soft scarf and restrained footwear so the outer silhouette remains central."];
  return ["Build a soft tonal composition with one deeper grounding colour.", "Use light layers to adjust coverage without adding visual weight.", "Choose restrained accessories so movement and proportion remain central."];
}

function colorsFor(brand: StorefrontBrand, type: string) {
  const value = type.toLowerCase();
  if (brand === "faris" && includesAny(value, ["linen", "ivory", "premium panjabi", "minimal panjabi"])) return [{ value: "ivory", label: "Ivory", color: "#e8e0d3" }, { value: "stone", label: "Stone", color: "#b9aa94" }];
  if (brand === "faris" && includesAny(value, ["denim", "navy", "embroidered"])) return [{ value: "midnight", label: "Midnight", color: "#17191d" }, { value: "indigo", label: "Indigo", color: "#27374b" }];
  if (brand === "laaj" && includesAny(value, ["hijab", "kameez", "embroidered", "occasion"])) return [{ value: "rosewood", label: "Rosewood", color: "#653441" }, { value: "pearl", label: "Pearl", color: "#e6ded4" }];
  return brand === "faris"
    ? [{ value: "midnight", label: "Midnight", color: "#17191d" }, { value: "stone", label: "Stone", color: "#b9aa94" }]
    : [{ value: "rosewood", label: "Rosewood", color: "#653441" }, { value: "ivory", label: "Ivory", color: "#e9e2d8" }];
}

function createCatalogProduct(brand: StorefrontBrand, category: CatalogCategory, type: string, index: number): StorefrontProduct {
  const brandName = brand === "faris" ? "FARIS" : "LAAJ";
  const title = productTitle(brand, category.key, type);
  const slug = [brand, category.key, slugify(type)].join("-");
  const imageKey = [brand, category.key, slugify(type)].join(":");
  const imageConfig = productImages[imageKey]
    ?? (brand === "faris" ? farisCategoryProductImages[brand + ":" + category.key] : undefined)
    ?? categoryImages[brand + ":" + category.key]
    ?? categoryImages[category.key]
    ?? {
    src: brand === "faris" ? farisHeroImage : laajHeroImage,
    alt: brandName + " " + category.label + " collection."
  };
  const image: CommerceImage = {
    ...imageConfig,
    alt: title + " by " + brandName + ". " + imageConfig.alt,
    width: 1122,
    height: 1402,
    sizes: "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
  };
  const isFarisBottom = brand === "faris" && ["trousers", "shorts"].includes(category.key);
  const sizeGuide = brand === "laaj" ? laajSizeGuide : isFarisBottom ? farisTrouserSizeGuide : farisTopSizeGuide;
  const basePrice = categoryPrices[brand + ":" + category.key] ?? categoryPrices[category.key] ?? (brand === "faris" ? 2490 : 3290);
  const purpose = categoryPurpose[brand + ":" + category.key] ?? categoryPurpose[category.key] ?? "useful proportion, comfortable movement and repeat wear";
  const season = seasonFor(category.key, type);
  const fabric = fabricFor(brand, category.key, type);
  const fit = fitFor(brand, category.key, type);
  const construction = constructionFor(category.key, type);
  const seasonPhrase = season === "Occasion" ? "occasion dressing" : season.toLowerCase() + " wear";
  const description = title + " brings " + purpose + " to the " + brandName + " wardrobe. It is considered for " + seasonPhrase + " in Bangladesh, with comfort, repeat styling and an intentionally quiet finish kept in balance.";

  return {
    id: slug,
    slug,
    href: "/product/" + slug,
    brandKey: brand,
    brand: brandName,
    categoryKey: category.key,
    category: category.label,
    season,
    publication: {
      status: "active",
      isFeatured: false,
      isNewArrival: index === 0,
      isBestSeller: false,
      isSeasonal: season === "Cool weather" || season === "Occasion",
      isComingSoon: false
    },
    title,
    subtitle: season + " ease with a considered finish.",
    price: formatPrice(basePrice + (index % 4) * 300),
    status: index === 0 ? "New arrival" : undefined,
    badges: index === 0 ? ["New"] : undefined,
    image,
    gallery: [
      image,
      {
        src: brand === "faris" ? farisHeroImage : laajHeroImage,
        alt: brandName + " campaign showing the wider wardrobe context.",
        width: 1672,
        height: 941,
        sizes: "(min-width: 1024px) 50vw, 100vw"
      }
    ],
    description,
    fabric,
    care: careFor(category.key, type),
    fit,
    details: [
      construction,
      "Material direction: " + fabric,
      "Seasonal role: " + season + ", with layering adjusted to the weather and setting.",
      "Designed to combine naturally with the wider " + brandName + " wardrobe; final colour, composition and availability are confirmed on the production SKU."
    ],
    story: {
      eyebrow: category.label + " by " + brandName,
      title: title + ", resolved with restraint.",
      body: description + " " + construction + " The result is designed to feel relevant beyond one campaign and useful beyond one way of wearing it."
    },
    styling: stylingFor(brand, category.key, type),
    sizeGuide,
    colors: colorsFor(brand, type),
    sizes: productSizes(brand, category.key)
  };
}

export const farisCatalogBlueprintProducts = farisCatalogCategories.flatMap((category) =>
  category.productTypes.map((type, index) => createCatalogProduct("faris", category, type, index))
);

export const laajCatalogBlueprintProducts = laajCatalogCategories.flatMap((category) =>
  category.productTypes.map((type, index) => createCatalogProduct("laaj", category, type, index))
);

export const catalogBlueprintProducts: StorefrontProduct[] = [
  ...farisCatalogBlueprintProducts,
  ...laajCatalogBlueprintProducts
];

export const masterCatalogProducts: StorefrontProduct[] = [...featuredProducts, ...catalogBlueprintProducts];

const farisRepresentativeProductSlugs = {
  shirts: "faris-shirts-oxford-shirt",
  "t-shirts": "faris-t-shirts-premium-basic-t-shirt",
  polos: "old-money-polo",
  trousers: "tailored-trouser",
  knitwear: "faris-knitwear-crewneck-sweater",
  outerwear: "faris-outerwear-trench-coat",
  traditional: "faris-traditional-premium-panjabi",
  shorts: "faris-shorts-chino-shorts",
  accessories: "faris-accessories-leather-belt",
  footwear: "faris-footwear-loafers"
} as const satisfies Record<FarisCategoryKey, string>;

function getRequiredMasterProduct(slug: string) {
  const product = masterCatalogProducts.find((candidate) => candidate.slug === slug);
  if (!product) throw new Error("Missing representative catalog product: " + slug);
  return product;
}

export const farisRepresentativeProducts: StorefrontProduct[] = farisCatalogCategories.map((category) => {
  const product = getRequiredMasterProduct(farisRepresentativeProductSlugs[category.key]);
  return {
    ...product,
    category: category.label,
    status: category.isActive ? product.status ?? "New arrival" : "Coming soon",
    badges: category.isActive ? product.badges : ["Coming soon"],
    publication: {
      status: category.isActive ? "active" : "inactive",
      isFeatured: category.isFeatured,
      isNewArrival: category.isActive,
      isBestSeller: false,
      isSeasonal: category.season === "Seasonal" || category.season === "Cool weather",
      isComingSoon: !category.isActive
    }
  };
});

function publishFarisProduct(product: StorefrontProduct): StorefrontProduct {
  const category = farisCatalogCategories.find((candidate) => candidate.key === product.categoryKey);
  const isActive = Boolean(category?.isActive) && product.publication.status === "active";
  return {
    ...product,
    category: category?.label ?? product.category,
    status: isActive ? product.status : "Coming soon",
    badges: isActive ? product.badges : ["Coming soon"],
    publication: {
      ...product.publication,
      status: isActive ? "active" : product.publication.status === "archived" ? "archived" : "inactive",
      isNewArrival: isActive && product.publication.isNewArrival,
      isComingSoon: !isActive && product.publication.status !== "archived"
    }
  };
}

function farisProductIdentity(product: StorefrontProduct) {
  const normalizedTitle = String(product.title)
    .toLowerCase()
    .replace(/\btrousers\b/g, "trouser")
    .replace(/\s+/g, " ")
    .trim();
  return `${product.categoryKey}:${normalizedTitle}`;
}

function uniqueFarisProducts(products: StorefrontProduct[]) {
  const identities = new Set<string>();
  return products.filter((product) => {
    const identity = farisProductIdentity(product);
    if (identities.has(identity)) return false;
    identities.add(identity);
    return true;
  });
}

const publishedFarisProducts = masterCatalogProducts
  .filter((product) => product.brandKey === "faris")
  .map(publishFarisProduct);

export const farisStorefrontProducts = uniqueFarisProducts(publishedFarisProducts)
  .filter((product) => product.publication.status === "active");
const laajStorefrontProducts = masterCatalogProducts.filter((product) => product.brandKey === "laaj");

export const labannyaStorefrontProducts: StorefrontProduct[] = laajStorefrontProducts.map((product, index) => {
  const id = product.id.replace(/^laaj-/, "labannya-");
  const slug = product.slug.startsWith("laaj-") ? product.slug.replace(/^laaj-/, "labannya-") : "labannya-" + product.slug;

  return {
    ...product,
    id,
    slug,
    href: "/product/" + slug,
    brandKey: "labannya",
    brand: "LABANNYA",
    publication: {
      ...product.publication,
      isNewArrival: index === 0,
      isFeatured: false,
      isBestSeller: false,
      isSeasonal: false,
      isComingSoon: false
    },
    title: product.title,
    subtitle: product.subtitle,
    description: product.description.replace(/LAAJ/g, "LABANNYA"),
    story: {
      ...product.story,
      eyebrow: "LABANNYA essentials",
      body: product.story.body.replace(/LAAJ/g, "LABANNYA")
    },
    styling: product.styling.map((entry) => entry.replace(/LAAJ/g, "LABANNYA"))
  };
});

export const storefrontProducts: StorefrontProduct[] = [...farisStorefrontProducts, ...laajStorefrontProducts, ...labannyaStorefrontProducts];

export function getProductBySlug(slug: string) {
  return storefrontProducts.find((product) => product.slug === slug);
}

export function getProductsForBrand(brand: StorefrontBrand | "all") {
  return brand === "all" ? storefrontProducts : storefrontProducts.filter((product) => product.brandKey === brand);
}

export const catalogImage = houseHeroImage;
