"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../hooks";
import type { FieldOption } from "../types";

export type ToggleGroupProps = Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> & {
  ariaLabel: string;
  options: FieldOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
};

export function ToggleGroup({ ariaLabel, options, value, defaultValue = "", onValueChange, disabled, className, ...props }: ToggleGroupProps) {
  const [selectedValue, setSelectedValue] = useControllableState({ value, defaultValue, onChange: onValueChange });

  return (
    <div className={cn("inline-flex min-h-11 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] p-1", className)} role="group" aria-label={ariaLabel} {...props}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={cn(
            "min-h-11 rounded-[var(--radius-xs)] px-3 text-sm text-[var(--color-text)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50",
            selectedValue === option.value && "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
          )}
          aria-pressed={selectedValue === option.value}
          disabled={disabled || option.disabled}
          onClick={() => setSelectedValue(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
