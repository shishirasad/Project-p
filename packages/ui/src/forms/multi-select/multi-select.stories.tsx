import { MultiSelect } from "./multi-select";

const options = [
  { value: "linen", label: "Linen", description: "Breathable warm-weather fabric" },
  { value: "cotton", label: "Cotton", description: "Everyday softness" },
  { value: "wool", label: "Wool", disabled: true }
];

export default {
  title: "Forms/MultiSelect",
  component: MultiSelect,
  args: {
    name: "fabric",
    label: "Fabric preferences",
    options
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Choose at least one option." } };
export const Success = { args: { isSuccess: true, successMessage: "Preferences saved.", defaultValue: ["linen"] } };
export const Disabled = { args: { disabled: true, defaultValue: ["cotton"] } };