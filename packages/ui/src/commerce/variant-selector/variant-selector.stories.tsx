import { VariantSelector } from "./variant-selector";
import { variantOptions } from "../story-data";

export default {
  title: "Commerce/VariantSelector",
  component: VariantSelector,
  args: {
    options: variantOptions,
    defaultValue: "regular",
    ariaLabel: "Choose fit"
  }
};

export const Default = {};
export const DisabledOption = { args: { options: [...variantOptions, { value: "archive", label: "Archive fit", disabled: true }] } };
