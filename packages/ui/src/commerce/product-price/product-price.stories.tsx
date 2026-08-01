import { ProductPrice } from "./product-price";

export default {
  title: "Commerce/ProductPrice",
  component: ProductPrice,
  args: {
    price: "BDT 2,490",
    compareAtPrice: "BDT 2,950",
    priceLabel: "Current price BDT 2,490",
    compareAtPriceLabel: "Original price BDT 2,950"
  }
};

export const Default = {};
export const SinglePrice = { args: { compareAtPrice: undefined } };
