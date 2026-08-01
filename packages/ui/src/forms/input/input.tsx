"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { FieldShell, getFieldControlClasses, getFieldDescribedBy } from "../base";
import { useFieldIds } from "../hooks";
import { getValidationState } from "../utils";
import type { ComponentSize, FieldStatusProps } from "../types";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  FieldStatusProps & {
    size?: ComponentSize;
    leadingSlot?: ReactNode;
    trailingSlot?: ReactNode;
    fieldClassName?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
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
    required,
    disabled,
    readOnly,
    size = "md",
    leadingSlot,
    trailingSlot,
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
      <div className="relative">
        {leadingSlot ? <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[var(--color-text-muted)]">{leadingSlot}</div> : null}
        <input
          ref={ref}
          id={ids.controlId}
          className={getFieldControlClasses({ size, state, hasLeadingSlot: Boolean(leadingSlot), hasTrailingSlot: Boolean(trailingSlot) || isLoading, className })}
          disabled={disabled || isLoading}
          readOnly={readOnly}
          required={required}
          aria-invalid={state === "invalid" || undefined}
          aria-describedby={describedBy}
          aria-busy={isLoading || undefined}
          {...props}
        />
        {trailingSlot || isLoading ? (
          <div className={cn("absolute inset-y-0 right-3 flex items-center gap-2 text-[var(--color-text-muted)]", isLoading && "cursor-wait")}>{isLoading ? <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border border-current border-t-transparent" /> : null}{trailingSlot}</div>
        ) : null}
      </div>
    </FieldShell>
  );
});