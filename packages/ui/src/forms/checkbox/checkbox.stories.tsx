import { Checkbox } from "./checkbox";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {
    label: "Save this preference"
  }
};

export const Default = {};
export const Required = { args: { required: true, description: "Required for this review step." } };
export const Invalid = { args: { isInvalid: true, errorMessage: "This confirmation is required." } };
export const Success = { args: { isSuccess: true, successMessage: "Preference saved.", defaultChecked: true } };
export const Disabled = { args: { disabled: true } };