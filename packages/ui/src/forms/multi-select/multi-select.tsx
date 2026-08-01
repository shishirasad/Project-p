"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { composeDescribedBy, getValidationState } from "../utils";
import { useControllableState, useFieldIds } from "../hooks";
import type { FieldOption, FieldStatusProps } from "../types";

export type MultiSelectProps = Omit<HTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> &
  FieldStatusProps & {
    name: string;
    options: FieldOption[];
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    required?: boolean;
    disabled?: boolean;
  };

export function MultiSelect({
  name,
  label,
  description,
  errorMessage,
  successMessage,
  validationState,
  isInvalid,
  isSuccess,
  options,
  value,
  defaultValue = [],
  onValueChange,
  required,
  disabled,
  className,
  ...props
}: MultiSelectProps) {
  const ids = useFieldIds(name);
  const state = getValidationState({ validationState, isInvalid, isSuccess });
  const [selectedValues, setSelectedValues] = useControllableState({ value, defaultValue, onChange: onValueChange });
  const describedBy = composeDescribedBy(description ? ids.descriptionId : undefined, state === "invalid" && errorMessage ? ids.errorId : undefined, state === "success" && successMessage ? ids.successId : undefined);

  function toggleValue(nextValue: string) {
    const nextValues = selectedValues.includes(nextValue) ? selectedValues.filter((item) => item !== nextValue) : [...selectedValues, nextValue];
    setSelectedValues(nextValues);
  }

  return (
    <fieldset className={cn("space-y-3", className)} aria-describedby={describedBy} aria-invalid={state === "invalid" || undefined} {...props}>
      {label ? <legend className="text-sm font-medium text-[var(--color-text)]">{label}{required ? <span aria-hidden="true" className="text-[var(--color-error)]"> *</span> : null}</legend> : null}
      <div className="grid gap-2">
        {options.map((option) => (
          <label key={option.value} className="flex min-h-11 items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] transition hover:bg-[var(--color-hover-surface)]">
            <input
              className="mt-1 h-4 w-4 accent-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              type="checkbox"
              name={name}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              disabled={disabled || option.disabled}
              required={required && selectedValues.length === 0}
              onChange={() => toggleValue(option.value)}
            />
            <span className="grid gap-1">
              <span>{option.label}</span>
              {option.description ? <span className="text-sm text-[var(--color-text-muted)]">{option.description}</span> : null}
            </span>
          </label>
        ))}
      </div>
      {description ? <p className="text-sm text-[var(--color-text-muted)]" id={ids.descriptionId}>{description}</p> : null}
      {state === "invalid" && errorMessage ? <p className="text-sm text-[var(--color-error)]" id={ids.errorId} role="alert">{errorMessage}</p> : null}
      {state === "success" && successMessage ? <p className="text-sm text-[var(--color-success)]" id={ids.successId}>{successMessage}</p> : null}
    </fieldset>
  );
}