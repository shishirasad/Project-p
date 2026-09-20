import type { ComponentProps } from "react";
import { getBrandAsset } from "@/config/brand-assets";

export type BrandWordmarkProps = Omit<ComponentProps<"img">, "src" | "alt" | "width" | "height"> & {
  brand: "faris" | "laaj" | "labannya";
  variant?: "default" | "inverse";
};

export function BrandWordmark({ brand, variant = "default", className, ...props }: BrandWordmarkProps) {
  const asset = getBrandAsset(brand, variant);
  // The source may be switched to a CMS-hosted SVG without a Next image remote-pattern change.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} className={className} decoding="async" {...props} />;
}