import { Textarea } from "./textarea";

export default {
  title: "Forms/Textarea",
  component: Textarea,
  args: {
    label: "Delivery note",
    placeholder: "Write a short note"
  }
};

export const Default = {};
export const WithDescription = { args: { description: "Keep delivery notes short and useful." } };
export const Invalid = { args: { isInvalid: true, errorMessage: "Delivery note is too long.", defaultValue: "Please call before delivery." } };
export const Success = { args: { isSuccess: true, successMessage: "Note saved.", defaultValue: "Please call before delivery." } };
export const Disabled = { args: { disabled: true, defaultValue: "Delivery note locked." } };