import type { ComponentProps } from "react";
import { ProductCarousel } from "../product-carousel";

export type RecentlyViewedStripProps = ComponentProps<typeof ProductCarousel>;

export function RecentlyViewedStrip(props: RecentlyViewedStripProps) {
  return <ProductCarousel {...props} />;
}
