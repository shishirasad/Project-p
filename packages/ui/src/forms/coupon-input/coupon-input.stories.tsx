import { CouponInput } from "./coupon-input";

export default {
  title: "Forms/CouponInput",
  component: CouponInput,
  args: {
    label: "Coupon code",
    placeholder: "Enter code"
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Coupon code is not valid." } };
export const Loading = { args: { isLoading: true, defaultValue: "EID" } };