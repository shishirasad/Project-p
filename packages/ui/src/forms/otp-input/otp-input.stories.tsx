import { OTPInput } from "./otp-input";

export default {
  title: "Forms/OTPInput",
  component: OTPInput,
  args: {
    label: "Verification code",
    placeholder: "000000"
  }
};

export const Default = {};
export const Invalid = { args: { isInvalid: true, errorMessage: "Code is not valid.", defaultValue: "123" } };
export const Success = { args: { isSuccess: true, successMessage: "Code verified.", defaultValue: "123456" } };
export const FourDigits = { args: { length: 4, placeholder: "0000" } };