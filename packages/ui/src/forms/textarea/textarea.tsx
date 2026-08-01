"use client";

import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { FieldShell, getFieldControlClasses, getFieldDescribedBy } from "../base";
import { useFieldIds } from "../hooks";
import { getValidationState } from "../utils";
import type { ComponentSize, FieldStatusProps } from "../types";

export type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> &
  FieldStatusProps & {
    size?: ComponentSize;
    fieldClassName?: string;
  };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
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
      <textarea
        ref={ref}
        id={ids.controlId}
        className={getFieldControlClasses({ size, state, multiline: true, className })}
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