import { Autocomplete } from "./autocomplete";

const options = [{ value: "shirts", label: "Shirts" }, { value: "trousers", label: "Trousers" }, { value: "dresses", label: "Dresses", disabled: true }];

export default {
  title: "Forms/Autocomplete",
  component: Autocomplete,
  args: {
    label: "Suggested product type",
    placeholder: "Start typing",
    options
  }
};

export const Default = {};
export const LongTranslatedLabel = { args: { label: "Suggested product type for localized campaign filtering" } };