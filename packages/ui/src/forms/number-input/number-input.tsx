"use client";

import { forwardRef } from "react";
import type { ChangeEvent } from "react";
import type { InputProps } from "../input";
import { Input } from "../input";

export type NumberInputProps = Omit<InputProps, "type" | "inputMode" | "onChange"> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: number | null) => void;
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(function NumberInput({ onChange, onValueChange, ...props }, ref) {
  return (
    <Input
      ref={ref}
      type="number"
      inputMode="decimal"
      onChange={(event) => {
        onChange?.(event);
        onValueChange?.(event.currentTarget.value === "" ? null : event.currentTarget.valueAsNumber);
      }}
      {...props}
    />
  );
});