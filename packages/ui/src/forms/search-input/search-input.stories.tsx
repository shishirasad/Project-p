import { SearchInput } from "./search-input";

export default {
  title: "Forms/SearchInput",
  component: SearchInput,
  args: {
    label: "Search",
    placeholder: "Search products"
  }
};

export const Default = {};
export const WithClear = { args: { defaultValue: "linen", clearLabel: "Clear search", onClear: () => undefined } };
export const Loading = { args: { isLoading: true, defaultValue: "polo" } };
export const Invalid = { args: { isInvalid: true, errorMessage: "Search term is too short." } };