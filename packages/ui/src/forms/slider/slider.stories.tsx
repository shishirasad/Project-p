import { Slider } from "./slider";

export default {
  title: "Forms/Slider",
  component: Slider,
  args: {
    label: "Fit confidence",
    min: 0,
    max: 100,
    defaultValue: 60
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Choose a value in range." } };
export const Disabled = { args: { disabled: true } };