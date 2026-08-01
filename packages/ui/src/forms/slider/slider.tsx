"use client";

import { forwardRef } from "react";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { FieldShell, getFieldDescribedBy } from "../base";
import { useFieldIds } from "../hooks";
import { getValidationState } from "../utils";
import type { FieldStatusProps } from "../types";

export type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> &
  FieldStatusProps & {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onValueChange?: (value: number) => void;
    fieldClassName?: string;
  };

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { id, label, description, errorMessage, successMessage, validationState, isInvalid, isSuccess, required, disabled, className, fieldClassName, onChange, onValueChange, "aria-describedby": ariaDescribedBy, ...props },
  ref
) {
  const ids = useFieldIds(id);
  const state = getValidationState({ validationState, isInvalid, isSuccess });
  const describedBy = getFieldDescribedBy({ description, errorMessage, successMessage, descriptionId: ids.descriptionId, errorId: ids.errorId, successId: ids.successId, state, describedBy: ariaDescribedBy });

  return (
    <FieldShell className={fieldClassName} controlId={ids.controlId} label={label} description={description} errorMessage={errorMessage} successMessage={successMessage} validationState={state} required={required}>
      <input
        ref={ref}
        id={ids.controlId}
        className={cn("min-h-11 w-full accent-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50", className)}
        type="range"
        required={required}
        disabled={disabled}
        aria-invalid={state === "invalid" || undefined}
        aria-describedby={describedBy}
        onChange={(event) => {
          onChange?.(event);
          onValueChange?.(event.currentTarget.valueAsNumber);
        }}
        {...props}
      />
    </FieldShell>
  );
});