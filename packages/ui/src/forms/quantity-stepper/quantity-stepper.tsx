"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { FieldShell, getFieldDescribedBy } from "../base";
import { useControllableState, useFieldIds } from "../hooks";
import { getValidationState } from "../utils";
import type { FieldStatusProps } from "../types";

export type QuantityStepperProps = Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> &
  FieldStatusProps & {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onValueChange?: (value: number) => void;
    decrementLabel: string;
    incrementLabel: string;
    inputLabel: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
  };

export function QuantityStepper({
  id,
  label,
  description,
  errorMessage,
  successMessage,
  validationState,
  isInvalid,
  isSuccess,
  value,
  defaultValue = 1,
  min = 0,
  max,
  step = 1,
  onValueChange,
  decrementLabel,
  incrementLabel,
  inputLabel,
  disabled,
  readOnly,
  required,
  className,
  ...props
}: QuantityStepperProps) {
  const ids = useFieldIds(id);
  const state = getValidationState({ validationState, isInvalid, isSuccess });
  const [currentValue, setCurrentValue] = useControllableState({ value, defaultValue, onChange: onValueChange });
  const describedBy = getFieldDescribedBy({ description, errorMessage, successMessage, descriptionId: ids.descriptionId, errorId: ids.errorId, successId: ids.successId, state });
  const canDecrease = !disabled && !readOnly && currentValue - step >= min;
  const canIncrease = !disabled && !readOnly && (max === undefined || currentValue + step <= max);

  function clamp(nextValue: number) {
    if (Number.isNaN(nextValue)) return min;
    if (max !== undefined && nextValue > max) return max;
    if (nextValue < min) return min;
    return nextValue;
  }

  return (
    <FieldShell controlId={ids.controlId} label={label} description={description} errorMessage={errorMessage} successMessage={successMessage} validationState={state} required={required}>
      <div className={cn("inline-grid grid-cols-[44px_minmax(64px,88px)_44px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)]", className)} {...props}>
        <button className="min-h-11 w-11 text-[var(--color-text)] transition hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50" type="button" aria-label={decrementLabel} disabled={!canDecrease} onClick={() => setCurrentValue(clamp(currentValue - step))}>-</button>
        <input
          id={ids.controlId}
          className="min-h-11 w-full border-x border-[var(--color-border)] bg-transparent text-center text-sm text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50"
          aria-label={inputLabel}
          aria-invalid={state === "invalid" || undefined}
          aria-describedby={describedBy}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onChange={(event) => setCurrentValue(clamp(event.currentTarget.valueAsNumber))}
        />
        <button className="min-h-11 w-11 text-[var(--color-text)] transition hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50" type="button" aria-label={incrementLabel} disabled={!canIncrease} onClick={() => setCurrentValue(clamp(currentValue + step))}>+</button>
      </div>
    </FieldShell>
  );
}
