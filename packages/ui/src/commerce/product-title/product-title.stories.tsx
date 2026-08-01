import { ProductTitle } from "./product-title";

export default {
  title: "Commerce/ProductTitle",
  component: ProductTitle,
  args: {
    eyebrow: "Faris",
    children: "Old Money Polo",
    subtitle: "Mercerized cotton, regular fit"
  }
};

export const Default = {};
export const LongTitle = { args: { children: "Tailored Supima Cotton Polo With Quiet Collar Detail" } };
