import { ProductCard } from "../product-card";
import { RecentlyViewedStrip } from "./recently-viewed-strip";
import { sampleProduct, secondaryProduct } from "../story-data";

const items = [secondaryProduct, sampleProduct].map((product) => (
  <ProductCard key={product.id} product={product} viewProductLabel={`View ${product.title}`} addToBagLabel="Add to bag" wishlistLabel="Save to wishlist" />
));

export default {
  title: "Commerce/RecentlyViewedStrip",
  component: RecentlyViewedStrip,
  args: {
    title: "Recently viewed",
    items,
    ariaLabel: "Recently viewed products",
    previousLabel: "Previous recently viewed products",
    nextLabel: "Next recently viewed products"
  }
};

export const Default = {};
