import { PromoCodeInput } from "./promo-code-input";

export default {
  title: "Forms/PromoCodeInput",
  component: PromoCodeInput,
  args: {
    label: "Promo code",
    placeholder: "Enter promo code"
  }
};

export const Default = {};
export const Success = { args: { isSuccess: true, successMessage: "Promo code ready.", defaultValue: "FARIS" } };