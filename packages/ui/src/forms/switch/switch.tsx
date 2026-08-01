"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { composeDescribedBy, getValidationState } from "../utils";
import { useFieldIds } from "../hooks";
import type { FieldStatusProps } from "../types";

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> &
  FieldStatusProps & {
    label: ReactNode;
    fieldClassName?: string;
  };

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { id, label, description, errorMessage, successMessage, validationState, isInvalid, isSuccess, required, disabled, className, fieldClassName, "aria-describedby": ariaDescribedBy, ...props },
  ref
) {
  const ids = useFieldIds(id);
  const state = getValidationState({ validationState, isInvalid, isSuccess });
  const describedBy = composeDescribedBy(ariaDescribedBy, description ? ids.descriptionId : undefined, state === "invalid" && errorMessage ? ids.errorId : undefined, state === "success" && successMessage ? ids.successId : undefined);

  return (
    <div className={cn("space-y-2", fieldClassName)}>
      <label className="flex min-h-11 items-center justify-between gap-4 text-sm text-[var(--color-text)]">
        <span>{label}{required ? <span aria-hidden="true" className="text-[var(--color-error)]"> *</span> : null}</span>
        <span className="relative inline-flex h-7 w-12 shrink-0 items-center">
          <input
            ref={ref}
            id={ids.controlId}
            className={cn("peer sr-only", className)}
            type="checkbox"
            role="switch"
            required={required}
            disabled={disabled}
            aria-invalid={state === "invalid" || undefined}
            aria-describedby={describedBy}
            {...props}
          />
          <span className="h-6 w-11 rounded-full border border-[var(--color-border)] bg-[var(--color-hover-surface)] transition peer-checked:border-[var(--color-accent)] peer-checked:bg-[var(--color-accent)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-accent)] peer-disabled:opacity-50" aria-hidden="true" />
          <span className="pointer-events-none absolute left-1 h-4 w-4 rounded-full bg-[var(--color-surface)] shadow-[var(--shadow-sm)] transition peer-checked:translate-x-5" aria-hidden="true" />
        </span>
      </label>
      {description ? <p className="text-sm text-[var(--color-text-muted)]" id={ids.descriptionId}>{description}</p> : null}
      {state === "invalid" && errorMessage ? <p className="text-sm text-[var(--color-error)]" id={ids.errorId} role="alert">{errorMessage}</p> : null}
      {state === "success" && successMessage ? <p className="text-sm text-[var(--color-success)]" id={ids.successId}>{successMessage}</p> : null}
    </div>
  );
});