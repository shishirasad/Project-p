import type { ReactNode } from "react";

export type ValidationState = "default" | "invalid" | "success";
export type ComponentSize = "sm" | "md" | "lg";
export type FieldTone = "default" | "invalid" | "success";

export type FieldOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  description?: ReactNode;
};

export type FieldStatusProps = {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  successMessage?: ReactNode;
  validationState?: ValidationState;
  isInvalid?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  analyticsId?: string;
};

export type ControlledValueProps<TValue> = {
  value?: TValue;
  defaultValue?: TValue;
  onValueChange?: (value: TValue) => void;
};

export type FieldRegistration = {
  name: string;
  label?: string;
  required?: boolean;
  validationState?: ValidationState;
};