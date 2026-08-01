"use client";

import { forwardRef } from "react";
import type { CouponInputProps } from "../coupon-input";
import { CouponInput } from "../coupon-input";

export type GiftCardInputProps = CouponInputProps;

export const GiftCardInput = forwardRef<HTMLInputElement, GiftCardInputProps>(function GiftCardInput(props, ref) {
  return <CouponInput ref={ref} {...props} />;
});