import type { ComponentProps } from "react";
import { ProductCarousel } from "../product-carousel";

export type RelatedProductsStripProps = ComponentProps<typeof ProductCarousel>;

export function RelatedProductsStrip(props: RelatedProductsStripProps) {
  return <ProductCarousel {...props} />;
}
