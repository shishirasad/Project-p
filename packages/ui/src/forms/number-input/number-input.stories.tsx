import { NumberInput } from "./number-input";

export default {
  title: "Forms/NumberInput",
  component: NumberInput,
  args: {
    label: "Measurement",
    placeholder: "0"
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Enter a valid number." } };
export const Success = { args: { isSuccess: true, successMessage: "Measurement accepted.", defaultValue: 42 } };
export const Disabled = { args: { disabled: true, defaultValue: 10 } };