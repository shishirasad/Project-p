import { QuoteBlock } from "./quote-block";

export default {
  title: "Editorial/QuoteBlock",
  component: QuoteBlock,
  args: {
    eyebrow: "House principle",
    quote: "Luxury is quiet, intentional, and built to last.",
    cite: "Porsion Studio"
  }
};

export const Default = {};
export const LeftAligned = { args: { align: "start" } };