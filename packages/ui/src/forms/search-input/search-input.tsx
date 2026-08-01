"use client";

import { Search, X } from "lucide-react";
import { forwardRef } from "react";
import type { InputProps } from "../input";
import { Input } from "../input";

export type SearchInputProps = Omit<InputProps, "type" | "leadingSlot" | "trailingSlot"> & {
  clearLabel?: string;
  onClear?: () => void;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { clearLabel, onClear, value, defaultValue, ...props },
  ref
) {
  const hasValue = value !== undefined ? String(value).length > 0 : defaultValue !== undefined && String(defaultValue).length > 0;

  return (
    <Input
      ref={ref}
      type="search"
      inputMode="search"
      value={value}
      defaultValue={defaultValue}
      leadingSlot={<Search aria-hidden="true" size={18} strokeWidth={1.75} />}
      trailingSlot={onClear && hasValue ? <button aria-label={clearLabel} className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-muted)] transition hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]" type="button" onClick={onClear}><X aria-hidden="true" size={16} strokeWidth={1.75} /></button> : null}
      {...props}
    />
  );
});
