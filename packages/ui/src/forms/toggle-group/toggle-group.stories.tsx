import { ToggleGroup } from "./toggle-group";

const options = [
  { value: "regular", label: "Regular" },
  { value: "slim", label: "Slim" },
  { value: "relaxed", label: "Relaxed", disabled: true }
];

export default {
  title: "Forms/ToggleGroup",
  component: ToggleGroup,
  args: {
    ariaLabel: "Fit preference",
    options
  }
};

export const Default = {};
export const Selected = { args: { defaultValue: "regular" } };
export const Disabled = { args: { disabled: true, defaultValue: "slim" } };