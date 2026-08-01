import { Switch } from "./switch";

export default {
  title: "Forms/Switch",
  component: Switch,
  args: {
    label: "Back in stock alerts"
  }
};

export const Default = {};
export const Checked = { args: { defaultChecked: true, successMessage: "Alerts enabled.", isSuccess: true } };
export const Invalid = { args: { isInvalid: true, errorMessage: "This setting cannot be changed now." } };
export const Disabled = { args: { disabled: true } };