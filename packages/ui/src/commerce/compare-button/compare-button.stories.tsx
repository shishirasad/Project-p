import { CompareButton } from "./compare-button";

export default {
  title: "Commerce/CompareButton",
  component: CompareButton,
  args: {
    ariaLabel: "Compare product"
  }
};

export const Default = {};
export const Selected = { args: { isSelected: true } };
