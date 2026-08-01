"use client";

import type { HTMLAttributes } from "react";
import { useMemo, useState } from "react";
import { cn } from "../../lib/cn";
import type { TabItem } from "../types";

export type TabsProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel?: string;
  variant?: "line" | "contained";
};

export function Tabs({ items, value, defaultValue, onValueChange, ariaLabel = "Tabs", variant = "line", className, ...props }: TabsProps) {
  const firstEnabledValue = useMemo(() => items.find((item) => !item.disabled)?.value ?? items[0]?.value ?? "", [items]);
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstEnabledValue);
  const selectedValue = value ?? internalValue;

  function selectValue(nextValue: string) {
    if (value === undefined) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  }

  return (
    <div className={cn("w-full max-w-full overflow-hidden", className)} {...props}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className={cn(
          "flex min-h-11 w-full max-w-full items-center gap-1 overflow-x-auto",
          variant === "contained" && "rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] p-1"
        )}
      >
        {items.map((item) => {
          const selected = item.value === selectedValue;
          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={selected}
              disabled={item.disabled}
              className={cn(
                "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-sm)] px-4 text-sm text-[var(--color-text-muted)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50",
                selected && "text-[var(--color-text)]",
                variant === "line" && selected && "border-b border-[var(--color-accent)] text-[var(--color-accent)]",
                variant === "contained" && selected && "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
              )}
              onClick={() => selectValue(item.value)}
            >
              <span>{item.label}</span>
              {item.badge ? <span className="text-xs">{item.badge}</span> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
