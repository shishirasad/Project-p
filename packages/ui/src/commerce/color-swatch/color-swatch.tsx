"use client";

import type { HTMLAttributes, KeyboardEvent } from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../forms/hooks";
import type { ColorSwatchOption } from "../types";
import { commerceFocusClass, getNextEnabledValue } from "../utils";

export type ColorSwatchProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  options: ColorSwatchOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel: string;
  showLabels?: boolean;
};

export function ColorSwatch({ options, value, defaultValue, onValueChange, ariaLabel, showLabels = false, className, ...props }: ColorSwatchProps) {
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
              "inline-flex min-h-11 min-w-11 items-center gap-2 rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-2 text-sm text-[var(--color-text)] transition duration-200 disabled:pointer-events-none disabled:opacity-50",
              selected ? "border-[var(--color-accent)]" : "border-[var(--color-border)] hover:border-[var(--color-accent)]",
              commerceFocusClass
            )}
            onClick={() => selectValue(option.value)}
            onKeyDown={handleKeyDown}
          >
            <span className="h-6 w-6 rounded-full border border-[var(--color-border)]" style={{ background: option.color }} aria-hidden="true" />
            {showLabels ? <span className="max-w-28 truncate">{option.label}</span> : <span className="sr-only">{option.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
