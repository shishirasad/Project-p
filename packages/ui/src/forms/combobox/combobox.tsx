"use client";

import { forwardRef } from "react";
import type { InputProps } from "../input";
import { Input } from "../input";
import { useFieldIds } from "../hooks";
import type { FieldOption } from "../types";

export type ComboboxProps = Omit<InputProps, "list"> & {
  options: FieldOption[];
  onValueChange?: (value: string) => void;
};

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(function Combobox({ id, options, onChange, onValueChange, ...props }, ref) {
  const ids = useFieldIds(id);

  return (
    <>
      <Input
        ref={ref}
        id={ids.controlId}
        list={`${ids.controlId}-options`}
        onChange={(event) => {
          onChange?.(event);
          onValueChange?.(event.currentTarget.value);
        }}
        {...props}
      />
      <datalist id={`${ids.controlId}-options`}>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled} />
        ))}
      </datalist>
    </>
  );
});