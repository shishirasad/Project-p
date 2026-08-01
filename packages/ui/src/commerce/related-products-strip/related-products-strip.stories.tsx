import { ProductCard } from "../product-card";
import { RelatedProductsStrip } from "./related-products-strip";
import { sampleProduct, secondaryProduct } from "../story-data";

const items = [sampleProduct, secondaryProduct].map((product) => (
  <ProductCard key={product.id} product={product} viewProductLabel={`View ${product.title}`} addToBagLabel="Add to bag" wishlistLabel="Save to wishlist" />
));

export default {
  title: "Commerce/RelatedProductsStrip",
  component: RelatedProductsStrip,
  args: {
    title: "Related products",
    items,
    ariaLabel: "Related products",
    previousLabel: "Previous related products",
    nextLabel: "Next related products"
  }
};

export const Default = {};
