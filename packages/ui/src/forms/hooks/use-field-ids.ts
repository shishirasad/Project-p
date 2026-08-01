"use client";

import { useId } from "react";
import { sanitizeDomId } from "../utils/a11y";

export function useFieldIds(id?: string) {
  const generatedId = sanitizeDomId(useId());
  const controlId = id ?? `field-${generatedId}`;

  return {
    controlId,
    descriptionId: `${controlId}-description`,
    errorId: `${controlId}-error`,
    successId: `${controlId}-success`
  };
}