import { Input } from "./input";

export default {
  title: "Forms/Input",
  component: Input,
  args: {
    label: "Email address",
    placeholder: "client@example.com"
  }
};

export const Default = {};
export const Required = { args: { required: true, description: "Use the email connected to your account." } };
export const Invalid = { args: { isInvalid: true, errorMessage: "Enter a valid email address.", defaultValue: "client" } };
export const Success = { args: { isSuccess: true, successMessage: "Email looks ready.", defaultValue: "client@example.com" } };
export const Disabled = { args: { disabled: true, defaultValue: "client@example.com" } };
export const Loading = { args: { isLoading: true, defaultValue: "Checking..." } };
export const LongTranslatedLabel = { args: { label: "Preferred contact email for international delivery updates", description: "This story checks long translated labels." } };