"use client";

import type { HTMLAttributes, KeyboardEvent } from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../forms/hooks";
import type { SizeOption } from "../types";
import { commerceFocusClass, getNextEnabledValue } from "../utils";

export type SizeSelectorProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  options: SizeOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel: string;
};

export function SizeSelector({ options, value, defaultValue, onValueChange, ariaLabel, className, ...props }: SizeSelectorProps) {
  const firstEnabledValue = options.find((option) => !option.disabled)?.value ?? options[0]?.value ?? "";
  const [selectedValue, setSelectedValue] = useControllableState({ value, defaultValue: defaultValue ?? firstEnabledValue, onChange: onValueChange });

  function selectValue(nextValue: string | undefined) {
    if (nextValue) setSelectedValue(nextValue);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectValue(getNextEnabledValue(options, selectedValue, 1));
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectValue(getNextEnabledValue(options, selectedValue, -1));
    }
  }

  return (
    <div role="radiogroup" aria-label={ariaLabel} className={cn("flex flex-wrap gap-2", className)} {...props}>
      {options.map((option) => {
        const selected = option.value === selectedValue;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={option.disabled}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 text-sm uppercase tracking-[0.14em] transition duration-200 disabled:pointer-events-none disabled:opacity-50",
              selected ? "border-[var(--color-accent)] text-[var(--color-text)]" : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]",
              commerceFocusClass
            )}
            onClick={() => selectValue(option.value)}
            onKeyDown={handleKeyDown}
          >
            {option.shortLabel ?? option.label}
          </button>
        );
      })}
    </div>
  );
}
