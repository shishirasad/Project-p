"use client";

import { forwardRef } from "react";
import type { InputProps } from "../input";
import { Input } from "../input";

export type DatePickerProps = Omit<InputProps, "type">;

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(function DatePicker(props, ref) {
  return <Input ref={ref} type="date" {...props} />;
});