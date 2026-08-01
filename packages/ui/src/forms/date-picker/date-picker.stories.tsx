import { DatePicker } from "./date-picker";

export default {
  title: "Forms/DatePicker",
  component: DatePicker,
  args: {
    label: "Preferred delivery date"
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Choose another date." } };
export const Disabled = { args: { disabled: true } };