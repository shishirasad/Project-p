import { SizeSelector } from "./size-selector";
import { sizeOptions } from "../story-data";

export default {
  title: "Commerce/SizeSelector",
  component: SizeSelector,
  args: {
    options: sizeOptions,
    defaultValue: "m",
    ariaLabel: "Choose size"
  }
};

export const Default = {};
export const WithUnavailable = { args: { options: [...sizeOptions, { value: "xxl", label: "Double extra large", shortLabel: "XXL", disabled: true }] } };
