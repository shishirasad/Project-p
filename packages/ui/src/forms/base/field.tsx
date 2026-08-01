"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { composeDescribedBy, getValidationState } from "../utils/a11y";
import type { ComponentSize, FieldStatusProps, ValidationState } from "../types";

export type FieldShellProps = HTMLAttributes<HTMLDivElement> &
  FieldStatusProps & {
    controlId: string;
    describedBy?: string;
    required?: boolean;
    children: ReactNode;
  };

const labelClasses = "block text-sm font-medium text-[var(--color-text)]";
const helperClasses = "mt-2 text-sm leading-5";
const controlBaseClasses =
  "w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] text-[var(--color-text)] transition duration-200 placeholder:text-[var(--color-text-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 read-only:bg-[var(--color-hover-surface)]";

const sizeClasses: Record<ComponentSize, string> = {
  sm: "min-h-10 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-4 text-base"
};

const stateClasses: Record<ValidationState, string> = {
  default: "border-[var(--color-border)] focus-visible:outline-[var(--color-accent)]",
  invalid: "border-[var(--color-error)] focus-visible:outline-[var(--color-error)]",
  success: "border-[var(--color-success)] focus-visible:outline-[var(--color-success)]"
};

export function getFieldControlClasses(options: {
  size?: ComponentSize;
  state?: ValidationState;
  hasLeadingSlot?: boolean;
  hasTrailingSlot?: boolean;
  multiline?: boolean;
  className?: string;
}) {
  const { size = "md", state = "default", hasLeadingSlot, hasTrailingSlot, multiline, className } = options;

  return cn(
    controlBaseClasses,
    sizeClasses[size],
    stateClasses[state],
    hasLeadingSlot && "pl-10",
    hasTrailingSlot && "pr-24",
    multiline && "min-h-32 py-3 leading-6",
    className
  );
}

export function getFieldDescribedBy(options: {
  description?: ReactNode;
  errorMessage?: ReactNode;
  successMessage?: ReactNode;
  descriptionId: string;
  errorId: string;
  successId: string;
  state: ValidationState;
  describedBy?: string;
}) {
  return composeDescribedBy(
    options.describedBy,
    options.description ? options.descriptionId : undefined,
    options.state === "invalid" && options.errorMessage ? options.errorId : undefined,
    options.state === "success" && options.successMessage ? options.successId : undefined
  );
}

export function FieldShell({
  controlId,
  label,
  description,
  errorMessage,
  successMessage,
  validationState,
  isInvalid,
  isSuccess,
  required,
  children,
  className,
  ...props
}: FieldShellProps) {
  const state = getValidationState({ validationState, isInvalid, isSuccess });

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {label ? (
        <label className={labelClasses} htmlFor={controlId}>
          {label}
          {required ? <span aria-hidden="true" className="text-[var(--color-error)]"> *</span> : null}
        </label>
      ) : null}
      {children}
      {description ? (
        <p className={cn(helperClasses, "text-[var(--color-text-muted)]")} id={`${controlId}-description`}>
          {description}
        </p>
      ) : null}
      {state === "invalid" && errorMessage ? (
        <p className={cn(helperClasses, "text-[var(--color-error)]")} id={`${controlId}-error`} role="alert">
          {errorMessage}
        </p>
      ) : null}
      {state === "success" && successMessage ? (
        <p className={cn(helperClasses, "text-[var(--color-success)]")} id={`${controlId}-success`}>
          {successMessage}
        </p>
      ) : null}
    </div>
  );
}