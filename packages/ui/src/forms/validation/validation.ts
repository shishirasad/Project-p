export type ValidationIssue = {
  field: string;
  message: string;
};

export type ValidationErrorMap = Record<string, string | string[] | undefined>;

export function mapValidationErrors(errors: ValidationErrorMap): ValidationIssue[] {
  return Object.entries(errors).flatMap(([field, value]) => {
    if (!value) return [];
    if (Array.isArray(value)) return value.map((message) => ({ field, message }));
    return [{ field, message: value }];
  });
}

export function getFieldError(errors: ValidationErrorMap | undefined, field: string) {
  const value = errors?.[field];
  if (Array.isArray(value)) return value[0];
  return value;
}

export function isRequiredValuePresent(value: unknown) {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim().length > 0;
  return value !== null && value !== undefined && value !== false;
}