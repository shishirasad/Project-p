import { PasswordInput } from "./password-input";

export default {
  title: "Forms/PasswordInput",
  component: PasswordInput,
  args: {
    label: "Password",
    placeholder: "Enter password",
    showLabel: "Show password",
    hideLabel: "Hide password"
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Password does not match." } };
export const Disabled = { args: { disabled: true, defaultValue: "quietluxury" } };