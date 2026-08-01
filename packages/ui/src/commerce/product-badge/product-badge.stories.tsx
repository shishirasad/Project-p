import { ProductBadge } from "./product-badge";

const tones = ["neutral", "accent", "success", "warning", "error"] as const;

export default {
  title: "Commerce/ProductBadge",
  component: ProductBadge,
  args: {
    children: "New",
    tone: "accent"
  }
};

export const Default = {};
export const AllVariants = { render: () => <div className="flex flex-wrap gap-2">{tones.map((tone) => <ProductBadge key={tone} tone={tone}>{tone}</ProductBadge>)}</div> };
