import { QuantityStepper } from "./quantity-stepper";

export default {
  title: "Forms/QuantityStepper",
  component: QuantityStepper,
  args: {
    label: "Quantity",
    inputLabel: "Quantity value",
    decrementLabel: "Decrease quantity",
    incrementLabel: "Increase quantity",
    min: 1,
    max: 10
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Quantity is not available." } };
export const Disabled = { args: { disabled: true, defaultValue: 2 } };