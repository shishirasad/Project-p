import { Combobox } from "./combobox";

const options = [{ value: "shirts", label: "Shirts" }, { value: "trousers", label: "Trousers" }, { value: "dresses", label: "Dresses", disabled: true }];

export default {
  title: "Forms/Combobox",
  component: Combobox,
  args: {
    label: "Product type",
    placeholder: "Type to choose",
    options
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Choose an available type." } };
export const Loading = { args: { isLoading: true, defaultValue: "shirts" } };