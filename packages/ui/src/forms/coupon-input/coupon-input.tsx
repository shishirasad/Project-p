"use client";

import { forwardRef } from "react";
import type { InputProps } from "../input";
import { Input } from "../input";

export type CouponInputProps = Omit<InputProps, "type">;

export const CouponInput = forwardRef<HTMLInputElement, CouponInputProps>(function CouponInput(props, ref) {
  return <Input ref={ref} type="text" autoCapitalize="characters" autoCorrect="off" spellCheck={false} {...props} />;
});