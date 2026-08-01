"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { FieldShell, getFieldDescribedBy } from "../base";
import { useFieldIds } from "../hooks";
import { getValidationState } from "../utils";
import type { FieldStatusProps } from "../types";

export type OTPInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "inputMode" | "maxLength"> &
  FieldStatusProps & {
    length?: number;
    fieldClassName?: string;
  };

export const OTPInput = forwardRef<HTMLInputElement, OTPInputProps>(function OTPInput(
  {
    id,
    label,
    description,
    errorMessage,
    successMessage,
    validationState,
    isInvalid,
    isSuccess,
    isLoading,
    length = 6,
    required,
    disabled,
    readOnly,
    className,
    fieldClassName,
    "aria-describedby": ariaDescribedBy,
    ...props
  },
  ref
) {
  const ids = useFieldIds(id);
  const state = getValidationState({ validationState, isInvalid, isSuccess });
  const describedBy = getFieldDescribedBy({
    description,
    errorMessage,
    successMessage,
    descriptionId: ids.descriptionId,
    errorId: ids.errorId,
    successId: ids.successId,
    state,
    describedBy: ariaDescribedBy
  });

  return (
    <FieldShell
      className={fieldClassName}
      controlId={ids.controlId}
      label={label}
      description={description}
      errorMessage={errorMessage}
      successMessage={successMessage}
      validationState={state}
      required={required}
    >
      <input
        ref={ref}
        id={ids.controlId}
        className={cn(
          "min-h-12 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-4 text-center text-lg text-[var(--color-text)] transition duration-200 placeholder:text-[var(--color-text-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 read-only:bg-[var(--color-hover-surface)]",
          state === "invalid" ? "border-[var(--color-error)] focus-visible:outline-[var(--color-error)]" : state === "success" ? "border-[var(--color-success)] focus-visible:outline-[var(--color-success)]" : "border-[var(--color-border)] focus-visible:outline-[var(--color-accent)]",
          className
        )}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={length}
        disabled={disabled || isLoading}
        readOnly={readOnly}
        required={required}
        aria-invalid={state === "invalid" || undefined}
        aria-describedby={describedBy}
        aria-busy={isLoading || undefined}
        {...props}
      />
    </FieldShell>
  );
});