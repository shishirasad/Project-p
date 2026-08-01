import { ProductCard } from "./product-card";
import { sampleProduct } from "../story-data";

export default {
  title: "Commerce/ProductCard",
  component: ProductCard,
  args: {
    product: sampleProduct,
    viewProductLabel: "View Faris Old Money Polo",
    addToBagLabel: "Add to bag",
    wishlistLabel: "Save to wishlist",
    compareLabel: "Compare product",
    onAddToBag: () => undefined,
    onWishlist: () => undefined,
    onCompare: () => undefined
  }
};

export const Default = {};
export const Compact = { args: { variant: "compact" } };
export const Editorial = { args: { variant: "editorial", imageRatio: "wide" } };
export const Loading = { args: { isLoading: true } };
export const WithoutActions = { args: { onAddToBag: undefined, onWishlist: undefined, onCompare: undefined, addToBagLabel: undefined, wishlistLabel: undefined, compareLabel: undefined } };
