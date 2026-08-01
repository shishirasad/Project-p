import { AddToBagButton } from "./add-to-bag-button";

export default {
  title: "Commerce/AddToBagButton",
  component: AddToBagButton,
  args: {
    label: "Add to bag"
  }
};

export const Default = {};
export const Loading = { args: { isLoading: true } };
export const Disabled = { args: { disabled: true } };
