import { StockIndicator } from "./stock-indicator";

export default {
  title: "Commerce/StockIndicator",
  component: StockIndicator,
  args: {
    label: "In stock",
    tone: "success"
  }
};

export const Default = {};
export const LowStock = { args: { label: "Low stock", tone: "warning" } };
export const OutOfStock = { args: { label: "Out of stock", tone: "error" } };
