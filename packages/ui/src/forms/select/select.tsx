"use client";

import { forwardRef } from "react";
import type { ChangeEvent, SelectHTMLAttributes } from "react";
import { FieldShell, getFieldControlClasses, getFieldDescribedBy } from "../base";
import { useFieldIds } from "../hooks";
import { getValidationState } from "../utils";
import type { ComponentSize, FieldOption, FieldStatusProps } from "../types";

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> &
  FieldStatusProps & {
    size?: ComponentSize;
    options: FieldOption[];
    placeholder?: string;
    fieldClassName?: string;
    onValueChange?: (value: string) => void;
  };

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
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
    size = "md",
    options,
    placeholder,
    fieldClassName,
    className,
    onChange,
    onValueChange,
    "aria-describedby": ariaDescribedBy,
    ...props
  },
  ref
) {
  const ids = useFieldIds(id);
  const state = getValidationState({ validationState, isInvalid, isSuccess });
  const describedBy = getFieldDescribedBy({ description, errorMessage, successMessage, descriptionId: ids.descriptionId, errorId: ids.errorId, successId: ids.successId, state, describedBy: ariaDescribedBy });

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange?.(event);
    onValueChange?.(event.currentTarget.value);
  }

  return (
    <FieldShell className={fieldClassName} controlId={ids.controlId} label={label} description={description} errorMessage={errorMessage} successMessage={successMessage} validationState={state} required={required}>
      <select
        ref={ref}
        id={ids.controlId}
        className={getFieldControlClasses({ size, state, className })}
        disabled={disabled || isLoading}
        required={required}
        aria-invalid={state === "invalid" || undefined}
        aria-describedby={describedBy}
        aria-busy={isLoading || undefined}
        onChange={handleChange}
        {...props}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
});