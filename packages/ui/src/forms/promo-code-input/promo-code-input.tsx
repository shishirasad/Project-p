"use client";

import { forwardRef } from "react";
import type { CouponInputProps } from "../coupon-input";
import { CouponInput } from "../coupon-input";

export type PromoCodeInputProps = CouponInputProps;

export const PromoCodeInput = forwardRef<HTMLInputElement, PromoCodeInputProps>(function PromoCodeInput(props, ref) {
  return <CouponInput ref={ref} {...props} />;
});