import { GiftCardInput } from "./gift-card-input";

export default {
  title: "Forms/GiftCardInput",
  component: GiftCardInput,
  args: {
    label: "Gift card code",
    placeholder: "Enter gift card code"
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Gift card code is not valid." } };