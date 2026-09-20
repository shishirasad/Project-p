export type CatalogCategoryStatus = "active" | "inactive" | "archived";

const farisCoreCategoryAssets = {
  hero: "/catalog/faris-core-v1.jpg",
  cover: "/catalog/faris-core-v1.jpg",
  thumbnail: "/catalog/faris-core-v1.jpg",
  social: "/catalog/faris-core-v1.jpg"
} as const;

const farisLayerCategoryAssets = {
  hero: "/catalog/faris-layers-v1.jpg",
  cover: "/catalog/faris-layers-v1.jpg",
  thumbnail: "/catalog/faris-layers-v1.jpg",
  social: "/catalog/faris-layers-v1.jpg"
} as const;

const farisFinishingCategoryAssets = {
  hero: "/catalog/faris-finishing-v1.jpg",
  cover: "/catalog/faris-finishing-v1.jpg",
  thumbnail: "/catalog/faris-finishing-v1.jpg",
  social: "/catalog/faris-finishing-v1.jpg"
} as const;

export const farisCatalogCategories = [
  {
    key: "shirts",
    label: "Shirts",
    slug: "shirts",
    shortDescription: "Breathable shirting with clean collars and assured everyday proportion.",
    editorialDescription: "From crisp Oxford cloth to relaxed linen, Faris shirts are designed to move naturally between work, evening and unhurried weekends in Bangladesh.",
    assets: farisCoreCategoryAssets,
    seo: { title: "Faris Shirts | Premium Menswear", description: "Shop Faris Oxford, formal, linen, cotton and casual shirts with considered fit and fabric." },
    sortOrder: 10,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: true,
    season: "Year-round",
    gender: "Men",
    collections: ["Essentials", "Old Money"],
    productTypes: ["Oxford Shirt", "Formal Shirt", "Linen Shirt", "Cotton Shirt", "Casual Shirt", "Overshirt", "Resort Shirt", "Cuban Collar Shirt", "Band Collar Shirt", "Denim Shirt", "Flannel Shirt", "Corduroy Shirt"]
  },
  {
    key: "t-shirts",
    label: "T-Shirts",
    slug: "t-shirts",
    shortDescription: "Quiet everyday foundations shaped through cloth, neckline and fit.",
    editorialDescription: "Faris T-shirts bring dependable cotton, clean recovery and restrained silhouettes to the first layer of a modern wardrobe.",
    assets: farisCoreCategoryAssets,
    seo: { title: "Faris T-Shirts | Premium Everyday Essentials", description: "Explore premium basic, heavyweight, fitted and relaxed Faris T-shirts." },
    sortOrder: 20,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: true,
    season: "Year-round",
    gender: "Men",
    collections: ["Essentials"],
    productTypes: ["Premium Basic T-Shirt", "Classic T-Shirt", "Regular Fit T-Shirt", "Slim Fit T-Shirt", "Oversized T-Shirt", "Heavyweight T-Shirt", "Long Sleeve T-Shirt", "Henley T-Shirt", "Pocket T-Shirt"]
  },
  {
    key: "polos",
    label: "Polos",
    slug: "polos",
    shortDescription: "Soft structure and quiet confidence for repeat wear.",
    editorialDescription: "A considered collar, breathable texture and controlled proportion make the Faris polo an easy bridge between casual comfort and polish.",
    assets: farisCoreCategoryAssets,
    seo: { title: "Faris Polos | Quiet Luxury Menswear", description: "Discover classic, pique, knitted, zip and Old Money polos by Faris." },
    sortOrder: 30,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: true,
    season: "Warm weather",
    gender: "Men",
    collections: ["Essentials", "Old Money"],
    productTypes: ["Classic Polo", "Premium Polo", "Pique Polo", "Knitted Polo", "Long Sleeve Polo", "Old Money Polo", "Zip Polo", "Ribbed Polo"]
  },
  {
    key: "trousers",
    label: "Trousers & Pants",
    slug: "trousers",
    shortDescription: "Clean leg lines, comfortable rises and useful everyday structure.",
    editorialDescription: "Tailored and relaxed shapes share the same Faris discipline: balanced proportion, dependable cloth and ease from work through evening.",
    assets: farisCoreCategoryAssets,
    seo: { title: "Faris Trousers & Pants | Tailored Menswear", description: "Shop tailored trousers, chinos, linen pants, cargo pants and denim by Faris." },
    sortOrder: 40,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: true,
    season: "Year-round",
    gender: "Men",
    collections: ["Essentials", "Old Money"],
    productTypes: ["Formal Trousers", "Tailored Trousers", "Pleated Trousers", "Straight Trousers", "Relaxed Trousers", "Chino Pants", "Cotton Pants", "Linen Pants", "Twill Pants", "Cargo Pants", "Drawstring Pants", "Denim Jeans"]
  },
  {
    key: "knitwear",
    label: "Knitwear",
    slug: "knitwear",
    shortDescription: "Tactile cold-weather layers with controlled weight and texture.",
    editorialDescription: "Faris knitwear is prepared for cooler days through clean ribbing, useful warmth and silhouettes that layer without unnecessary bulk.",
    assets: farisLayerCategoryAssets,
    seo: { title: "Faris Knitwear | Refined Winter Layers", description: "Explore Faris sweaters, cardigans, knit polos and knit vests for cooler weather." },
    sortOrder: 50,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: false,
    season: "Cool weather",
    gender: "Men",
    collections: ["Winter"],
    productTypes: ["Crewneck Sweater", "V-Neck Sweater", "Half-Zip Sweater", "Turtleneck", "Cardigan", "Knit Polo", "Knit Vest", "Cable Knit Sweater"]
  },
  {
    key: "outerwear",
    label: "Outerwear",
    slug: "outerwear",
    shortDescription: "Protective layers resolved through shape, hardware and restraint.",
    editorialDescription: "From lightweight jackets to long winter coats, Faris outerwear preserves a balanced line while adding practical protection and depth.",
    assets: farisLayerCategoryAssets,
    seo: { title: "Faris Outerwear | Jackets & Coats", description: "Discover Faris bomber, Harrington, utility, trench and winter outerwear." },
    sortOrder: 60,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: false,
    season: "Cool weather",
    gender: "Men",
    collections: ["Winter", "Outer Layers"],
    productTypes: ["Bomber Jacket", "Harrington Jacket", "Lightweight Jacket", "Denim Jacket", "Suede Jacket", "Field Jacket", "Utility Jacket", "Windbreaker", "Trench Coat", "Overcoat", "Winter Jacket"]
  },
  {
    key: "traditional",
    label: "Panjabi & Traditional",
    slug: "panjabi",
    shortDescription: "Heritage dressing carried with a modern, restrained Faris line.",
    editorialDescription: "Breathable cloth, clean collars and controlled detail shape Faris Panjabis for Eid, Friday, weddings and meaningful gatherings.",
    assets: farisCoreCategoryAssets,
    seo: { title: "Faris Panjabi | Premium Traditional Menswear", description: "Shop classic, linen, embroidered, festive and Eid Panjabis by Faris." },
    sortOrder: 70,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: true,
    season: "Seasonal",
    gender: "Men",
    collections: ["Eid", "Heritage"],
    productTypes: ["Classic Panjabi", "Premium Panjabi", "Minimal Panjabi", "Linen Panjabi", "Cotton Panjabi", "Embroidered Panjabi", "Festive Panjabi", "Eid Panjabi", "Panjabi + Pajama Set"]
  },
  {
    key: "shorts",
    label: "Shorts",
    slug: "shorts",
    shortDescription: "Warm-weather ease with enough structure to remain composed.",
    editorialDescription: "Faris shorts use breathable cloth, balanced lengths and clean waist construction for relaxed days without losing the house point of view.",
    assets: farisFinishingCategoryAssets,
    seo: { title: "Faris Shorts | Refined Warm-Weather Menswear", description: "Explore chino, cotton, linen, tailored and cargo shorts by Faris." },
    sortOrder: 80,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: false,
    season: "Warm weather",
    gender: "Men",
    collections: ["Summer"],
    productTypes: ["Chino Shorts", "Cotton Shorts", "Linen Shorts", "Casual Shorts", "Tailored Shorts", "Cargo Shorts"]
  },
  {
    key: "accessories",
    label: "Accessories",
    slug: "accessories",
    shortDescription: "Functional finishing pieces with quiet material character.",
    editorialDescription: "Leather goods, neckwear and practical accessories complete the Faris wardrobe without competing with its line, cloth or proportion.",
    assets: farisFinishingCategoryAssets,
    seo: { title: "Faris Accessories | Leather Goods & Finishing Pieces", description: "Discover Faris belts, wallets, ties, caps, scarves and socks." },
    sortOrder: 90,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: false,
    season: "Year-round",
    gender: "Men",
    collections: ["Finishing Pieces"],
    productTypes: ["Leather Belt", "Wallet", "Card Holder", "Tie", "Pocket Square", "Cap", "Sunglasses", "Scarf", "Socks"]
  },
  {
    key: "footwear",
    label: "Footwear",
    slug: "footwear",
    shortDescription: "Comfort-led footwear with a restrained final finish.",
    editorialDescription: "Faris footwear is prepared as the final wardrobe line: stable construction, considered shape and versatile colour for repeated wear.",
    assets: farisFinishingCategoryAssets,
    seo: { title: "Faris Footwear | Loafers, Shoes & Sneakers", description: "Explore Faris loafers, formal shoes, sneakers, boots, sandals and slides." },
    sortOrder: 100,
    status: "active" as CatalogCategoryStatus,
    isActive: true,
    isFeatured: false,
    season: "Year-round",
    gender: "Men",
    collections: ["Footwear"],
    productTypes: ["Loafers", "Derby Shoes", "Formal Shoes", "Sneakers", "Boots", "Sandals", "Slides"]
  }
] as const;

export const laajCatalogCategories = [
  {
    key: "abaya-burkha",
    label: "Abaya & Burkha",
    productTypes: ["Classic abaya", "Premium abaya", "Open abaya", "Closed abaya", "Kimono abaya", "Front-open abaya", "Embroidered abaya", "Premium / niqab abaya", "Burkha", "Two-piece burkha", "Three-piece burkha", "Prayer burkha", "Everyday burkha", "Occasion burkha"]
  },
  {
    key: "dresses",
    label: "Dresses",
    productTypes: ["Abaya", "Burkha", "Maxi", "Midi", "Long", "A-line", "Shirt", "Wrap", "Tiered", "Kaftan", "Party", "Occasion", "Casual", "Modest"]
  },
  {
    key: "kameez-salwar",
    label: "Kameez & Salwar",
    productTypes: ["Premium kameez", "Three-piece set", "Two-piece set", "Long kameez", "Straight-cut kameez", "Embroidered kameez"]
  },
  {
    key: "kurti-kurta",
    label: "Kurti & Kurta",
    productTypes: ["Everyday kurti", "Premium kurti", "Straight kurti", "A-line kurti", "Long kurti", "Embroidered kurti", "Printed kurti", "Minimal kurti", "Long kurta"]
  },
  {
    key: "two-three-piece",
    label: "2-Piece / 3-Piece",
    productTypes: ["Kurti + trouser", "Kurti + palazzo", "Kameez + trouser", "Kameez + dupatta", "3-piece set", "Premium occasion set"]
  },
  {
    key: "modest-sets",
    label: "Modest Sets",
    productTypes: ["Modest co-ord set", "Tunic + trouser", "Top + skirt", "Long top + pant", "Long top + palazzo", "Abaya set", "Modest lounge set", "Prayer set"]
  },
  {
    key: "kaftan",
    label: "Kaftan",
    productTypes: ["Everyday", "Linen", "Embroidered", "Luxury", "Occasion"]
  },
  {
    key: "tops-tunics",
    label: "Tops & Tunics",
    productTypes: ["Long-sleeve top", "Modest top", "Oversized top", "Tunic", "Blouse", "Shirt"]
  },
  {
    key: "outerwear",
    label: "Outerwear",
    productTypes: ["Long kimono", "Modest cardigan", "Lightweight outer", "Shawl / wrap"]
  },
  {
    key: "bottoms",
    label: "Bottoms",
    productTypes: ["Straight trouser", "Wide-leg trouser", "Palazzo", "Linen pant", "Relaxed pant", "Skirt", "Pleated skirt"]
  },
  {
    key: "dupatta-hijab",
    label: "Dupatta & Hijab",
    productTypes: ["Premium hijab", "Chiffon hijab", "Jersey hijab", "Modal hijab", "Silk hijab", "Printed hijab", "Shawl", "Dupatta", "Hijab set"]
  },
  {
    key: "niqab",
    label: "Niqab",
    productTypes: ["Basic", "Two-layer", "Three-layer", "Tie-back", "Integrated"]
  },
  {
    key: "winter",
    label: "Winter",
    productTypes: ["Long cardigan", "Knit cardigan", "Knit dress", "Modest sweater", "Long coat", "Winter abaya", "Winter shawl", "Wool hijab", "Knit hijab"]
  },
  {
    key: "inner-basics",
    label: "Inner & Basics",
    productTypes: ["Inner dress", "Abaya inner", "Hijab inner cap", "Sleeveless inner", "Full-sleeve inner", "Modest slip"]
  },
  {
    key: "lounge-home",
    label: "Lounge / Home",
    productTypes: ["Modest lounge set", "Home dress", "Night dress", "Long robe", "Pajama set"]
  },
  {
    key: "occasion",
    label: "Occasion",
    productTypes: ["Eid collection", "Ramadan collection", "Wedding guest", "Festive dress", "Premium abaya", "Occasion kaftan"]
  },
  {
    key: "accessories",
    label: "Accessories",
    productTypes: ["Handbag", "Shoulder bag", "Tote bag", "Mini bag", "Wallet", "Card holder", "Hijab pin", "Hijab magnet", "Brooch", "Minimal jewelry", "Hair accessories", "Sunglasses", "Belt"]
  },
  {
    key: "footwear",
    label: "Footwear",
    productTypes: ["Flat", "Loafer", "Sandal", "Mule", "Heel", "Sneaker"]
  }
] as const;

export type FarisCategoryKey = (typeof farisCatalogCategories)[number]["key"];
export type LaajCategoryKey = (typeof laajCatalogCategories)[number]["key"];
export type StorefrontCategoryKey = FarisCategoryKey | LaajCategoryKey;

export const farisLaunchPlan = [
  { key: "core", label: "Core", categoryKeys: ["shirts", "t-shirts", "polos", "trousers"] },
  { key: "heritage", label: "Heritage / Seasonal", categoryKeys: ["traditional"] },
  { key: "winter", label: "Winter", categoryKeys: ["knitwear", "outerwear"] },
  { key: "expansion", label: "Expansion", categoryKeys: ["shorts", "accessories", "footwear"] }
] as const satisfies ReadonlyArray<{
  key: string;
  label: string;
  categoryKeys: ReadonlyArray<FarisCategoryKey>;
}>;

export const farisStorefrontDepartments = [
  {
    key: "everyday",
    eyebrow: "Start here",
    title: "Everyday essentials",
    description: "The pieces most customers begin with: easy to compare, combine and wear on repeat.",
    categoryKeys: ["shirts", "polos", "t-shirts", "trousers"]
  },
  {
    key: "moment",
    eyebrow: "Dress for the moment",
    title: "Season and occasion",
    description: "Traditional dressing, warm-weather ease and considered layers for changing plans and seasons.",
    categoryKeys: ["traditional", "knitwear", "outerwear", "shorts"]
  },
  {
    key: "complete",
    eyebrow: "Complete the look",
    title: "Accessories and footwear",
    description: "Functional finishing pieces that complete the FARIS wardrobe without adding noise.",
    categoryKeys: ["accessories", "footwear"]
  }
] as const satisfies ReadonlyArray<{
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  categoryKeys: ReadonlyArray<FarisCategoryKey>;
}>;
export function getFarisCatalogCategory(categoryKey: FarisCategoryKey) {
  return farisCatalogCategories.find((category) => category.key === categoryKey);
}

export function getFarisCatalogCategoryBySlug(categorySlug: string) {
  return farisCatalogCategories.find((category) => category.slug === categorySlug);
}

export const laajStorefrontDepartments = [
  {
    key: "signatures",
    eyebrow: "Start here",
    title: "Signature womenswear",
    description: "Abayas, dresses, kurtis and coordinated sets offer the clearest way into the LAAJ wardrobe.",
    categoryKeys: ["abaya-burkha", "dresses", "kameez-salwar", "kurti-kurta", "two-three-piece", "modest-sets"]
  },
  {
    key: "layers",
    eyebrow: "Build the silhouette",
    title: "Layers and everyday comfort",
    description: "Tops, bottoms, outer layers, veiling and private essentials make daily dressing easier to complete.",
    categoryKeys: ["tops-tunics", "bottoms", "outerwear", "dupatta-hijab", "niqab", "inner-basics", "lounge-home"]
  },
  {
    key: "moments",
    eyebrow: "Dress for the moment",
    title: "Occasion and finishing",
    description: "Kaftans, seasonal pieces and finishing accessories bring the right level of polish to meaningful moments.",
    categoryKeys: ["kaftan", "winter", "occasion", "accessories", "footwear"]
  }
] as const satisfies ReadonlyArray<{
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  categoryKeys: ReadonlyArray<LaajCategoryKey>;
}>;
export function getLaajCatalogCategory(categoryKey: LaajCategoryKey) {
  return laajCatalogCategories.find((category) => category.key === categoryKey);
}

export type CatalogBrandKey = "faris" | "laaj";
export type CatalogPublicationStatus = "live" | "coming-soon" | "future";
export type CatalogPublicationControl = {
  visible: boolean;
  saleEnabled: boolean;
  status: CatalogPublicationStatus;
};
export type CatalogPublicationOverrides = Partial<Record<
  CatalogBrandKey,
  Record<string, Partial<CatalogPublicationControl>>
>>;

function createDefaultPublicationControls(
  categories: ReadonlyArray<{ key: string; isActive?: boolean }>,
  futureKeys: ReadonlySet<string>
) {
  return Object.fromEntries(categories.map((category) => [
    category.key,
    category.isActive
      ? { visible: true, saleEnabled: true, status: "live" } satisfies CatalogPublicationControl
      : {
          visible: false,
          saleEnabled: false,
          status: futureKeys.has(category.key) ? "future" : "coming-soon"
        } satisfies CatalogPublicationControl
  ]));
}

export const defaultCatalogPublication: Record<CatalogBrandKey, Record<string, CatalogPublicationControl>> = {
  faris: createDefaultPublicationControls(farisCatalogCategories, new Set(["footwear"])),
  laaj: createDefaultPublicationControls(laajCatalogCategories, new Set(["footwear"]))
};

export type CatalogPublicationContext = {
  activeCategoryKeys?: ReadonlySet<string>;
  overrides?: CatalogPublicationOverrides;
};

export function getCatalogPublication(
  brand: CatalogBrandKey,
  categoryKey: string,
  context: CatalogPublicationContext = {}
): CatalogPublicationControl {
  const base = defaultCatalogPublication[brand][categoryKey] ?? { visible: false, saleEnabled: false, status: "coming-soon" };
  const inventoryControl = context.activeCategoryKeys?.has(categoryKey)
    ? { visible: true, saleEnabled: true, status: "live" as const }
    : base;
  return { ...inventoryControl, ...context.overrides?.[brand]?.[categoryKey] };
}

export function getVisibleCatalogCategories(brand: CatalogBrandKey, context: CatalogPublicationContext = {}) {
  const categories = brand === "faris" ? farisCatalogCategories : laajCatalogCategories;
  return categories.filter((category) => getCatalogPublication(brand, category.key, context).visible);
}
