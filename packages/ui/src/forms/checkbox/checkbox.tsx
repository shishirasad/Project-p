"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { composeDescribedBy, getValidationState } from "../utils";
import { useFieldIds } from "../hooks";
import type { FieldStatusProps } from "../types";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> &
  FieldStatusProps & {
    label: ReactNode;
    fieldClassName?: string;
  };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { id, label, description, errorMessage, successMessage, validationState, isInvalid, isSuccess, required, disabled, className, fieldClassName, "aria-describedby": ariaDescribedBy, ...props },
  ref
) {
  const ids = useFieldIds(id);
  const state = getValidationState({ validationState, isInvalid, isSuccess });
  const describedBy = composeDescribedBy(ariaDescribedBy, description ? ids.descriptionId : undefined, state === "invalid" && errorMessage ? ids.errorId : undefined, state === "success" && successMessage ? ids.successId : undefined);

  return (
    <div className={cn("space-y-2", fieldClassName)}>
      <label className="flex min-h-11 items-start gap-3 text-sm text-[var(--color-text)]">
        <input
          ref={ref}
          id={ids.controlId}
          className={cn("mt-1 h-4 w-4 rounded-[var(--radius-xs)] accent-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50", className)}
          type="checkbox"
          required={required}
          disabled={disabled}
          aria-invalid={state === "invalid" || undefined}
          aria-describedby={describedBy}
          {...props}
        />
        <span>{label}{required ? <span aria-hidden="true" className="text-[var(--color-error)]"> *</span> : null}</span>
      </label>
      {description ? <p className="text-sm text-[var(--color-text-muted)]" id={ids.descriptionId}>{description}</p> : null}
      {state === "invalid" && errorMessage ? <p className="text-sm text-[var(--color-error)]" id={ids.errorId} role="alert">{errorMessage}</p> : null}
      {state === "success" && successMessage ? <p className="text-sm text-[var(--color-success)]" id={ids.successId}>{successMessage}</p> : null}
    </div>
  );
});