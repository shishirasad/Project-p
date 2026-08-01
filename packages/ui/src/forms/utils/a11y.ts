import type { ValidationState } from "../types";

export function getValidationState(options: {
  validationState?: ValidationState;
  isInvalid?: boolean;
  isSuccess?: boolean;
}): ValidationState {
  if (options.validationState) return options.validationState;
  if (options.isInvalid) return "invalid";
  if (options.isSuccess) return "success";
  return "default";
}

export function composeDescribedBy(...ids: Array<string | false | null | undefined>) {
  const describedBy = ids.filter(Boolean).join(" ");
  return describedBy || undefined;
}

export function sanitizeDomId(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, "-");
}

export function hasAccessibleName(options: { label?: unknown; ariaLabel?: unknown; ariaLabelledBy?: unknown }) {
  return Boolean(options.label || options.ariaLabel || options.ariaLabelledBy);
}