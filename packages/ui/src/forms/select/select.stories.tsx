import { Select } from "./select";

const options = [{ value: "shirts", label: "Shirts" }, { value: "trousers", label: "Trousers" }, { value: "dresses", label: "Dresses", disabled: true }];

export default {
  title: "Forms/Select",
  component: Select,
  args: {
    label: "Category",
    placeholder: "Choose category",
    options
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Choose a category." } };
export const Success = { args: { isSuccess: true, successMessage: "Category selected.", defaultValue: "shirts" } };
export const Disabled = { args: { disabled: true, defaultValue: "trousers" } };