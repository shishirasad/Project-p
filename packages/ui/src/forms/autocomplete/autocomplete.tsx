"use client";

import { forwardRef } from "react";
import type { ComboboxProps } from "../combobox";
import { Combobox } from "../combobox";

export type AutocompleteProps = ComboboxProps;

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(function Autocomplete(props, ref) {
  return <Combobox ref={ref} autoComplete="on" {...props} />;
});