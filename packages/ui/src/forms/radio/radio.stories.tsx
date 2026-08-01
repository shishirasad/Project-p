import { Radio } from "./radio";

const options = [
  { value: "regular", label: "Regular" },
  { value: "slim", label: "Slim" },
  { value: "relaxed", label: "Relaxed", disabled: true }
];

export default {
  title: "Forms/Radio",
  component: Radio,
  args: {
    name: "fit",
    label: "Fit preference",
    options
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Choose one fit." } };
export const Success = { args: { isSuccess: true, successMessage: "Fit selected.", defaultValue: "regular" } };
export const Disabled = { args: { disabled: true, defaultValue: "slim" } };