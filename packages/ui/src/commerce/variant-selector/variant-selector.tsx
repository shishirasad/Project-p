"use client";

import type { HTMLAttributes, KeyboardEvent } from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../forms/hooks";
import type { CommerceOption } from "../types";
import { commerceFocusClass, getNextEnabledValue } from "../utils";

export type VariantSelectorProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  options: CommerceOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel: string;
};

export function VariantSelector({ options, value, defaultValue, onValueChange, ariaLabel, className, ...props }: VariantSelectorProps) {
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
    <div role="radiogroup" aria-label={ariaLabel} className={cn("grid gap-2", className)} {...props}>
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
              "flex min-h-11 w-full min-w-0 items-center justify-between gap-3 rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-4 py-2 text-left text-sm transition duration-200 disabled:pointer-events-none disabled:opacity-50",
              selected ? "border-[var(--color-accent)] text-[var(--color-text)]" : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]",
              commerceFocusClass
            )}
            onClick={() => selectValue(option.value)}
            onKeyDown={handleKeyDown}
          >
            <span className="min-w-0 truncate">{option.label}</span>
            {option.description ? <span className="shrink-0 text-xs text-[var(--color-text-muted)]">{option.description}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
