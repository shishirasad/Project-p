export type BrandAssetVariant = "default" | "inverse";
export type BrandAssetBrand = "faris" | "laaj" | "labannya";

export type BrandAssetRecord = {
  id: string;
  brand: BrandAssetBrand;
  kind: "wordmark";
  variant: BrandAssetVariant;
  src: string;
  alt: string;
  width: number;
  height: number;
  storageKey: string;
};

const publicAssetBaseUrl = process.env.NEXT_PUBLIC_BRAND_ASSET_BASE_URL?.replace(/\/$/, "");

function resolveAssetPath(localPath: string) {
  return publicAssetBaseUrl ? `${publicAssetBaseUrl}${localPath}` : localPath;
}

export const brandAssets: BrandAssetRecord[] = [
  {
    id: "faris-wordmark-default",
    brand: "faris",
    kind: "wordmark",
    variant: "default",
    src: resolveAssetPath("/brand-assets/faris-wordmark.svg"),
    alt: "FARIS",
    width: 420,
    height: 96,
    storageKey: "brands/faris/identity/wordmark.svg"
  },
  {
    id: "faris-wordmark-inverse",
    brand: "faris",
    kind: "wordmark",
    variant: "inverse",
    src: resolveAssetPath("/brand-assets/faris-wordmark-inverse.svg"),
    alt: "FARIS",
    width: 420,
    height: 96,
    storageKey: "brands/faris/identity/wordmark-inverse.svg"
  },
  {
    id: "laaj-wordmark-default",
    brand: "laaj",
    kind: "wordmark",
    variant: "default",
    src: resolveAssetPath("/brand-assets/laaj-wordmark.svg"),
    alt: "LAAJ",
    width: 420,
    height: 96,
    storageKey: "brands/laaj/identity/wordmark.svg"
  },
  {
    id: "laaj-wordmark-inverse",
    brand: "laaj",
    kind: "wordmark",
    variant: "inverse",
    src: resolveAssetPath("/brand-assets/laaj-wordmark-inverse.svg"),
    alt: "LAAJ",
    width: 420,
    height: 96,
    storageKey: "brands/laaj/identity/wordmark-inverse.svg"
  },
  {
    id: "labannya-wordmark-default",
    brand: "labannya",
    kind: "wordmark",
    variant: "default",
    src: resolveAssetPath("/brand-assets/labannya-logo-mark.jpg"),
    alt: "LABANNYA",
    width: 666,
    height: 658,
    storageKey: "brands/labannya/identity/logo-mark.jpg"
  },
  {
    id: "labannya-wordmark-inverse",
    brand: "labannya",
    kind: "wordmark",
    variant: "inverse",
    src: resolveAssetPath("/brand-assets/labannya-logo-mark.jpg"),
    alt: "LABANNYA",
    width: 666,
    height: 658,
    storageKey: "brands/labannya/identity/logo-mark.jpg"
  }
];

export function getBrandAsset(brand: BrandAssetBrand, variant: BrandAssetVariant = "default") {
  const asset = brandAssets.find((candidate) => candidate.brand === brand && candidate.kind === "wordmark" && candidate.variant === variant);
  if (!asset) throw new Error(`Missing ${variant} wordmark for ${brand}.`);
  return asset;
}