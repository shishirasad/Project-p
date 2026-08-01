import { ProductCard } from "../product-card";
import { ProductCarousel } from "./product-carousel";
import { sampleProduct, secondaryProduct } from "../story-data";

const items = [sampleProduct, secondaryProduct, sampleProduct].map((product) => (
  <ProductCard key={`${product.id}-${product.title}`} product={product} viewProductLabel={`View ${product.title}`} addToBagLabel="Add to bag" wishlistLabel="Save to wishlist" />
));

export default {
  title: "Commerce/ProductCarousel",
  component: ProductCarousel,
  args: {
    title: "Recommended pieces",
    items,
    ariaLabel: "Recommended products",
    previousLabel: "Previous products",
    nextLabel: "Next products"
  }
};

export const Default = {};
