"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { FieldRegistration } from "../types";

export type FormProviderValue = {
  formId?: string;
  locale?: string;
  dir?: "ltr" | "rtl";
  fields: FieldRegistration[];
  registerField: (field: FieldRegistration) => void;
  unregisterField: (name: string) => void;
};

const FormContext = createContext<FormProviderValue | null>(null);

export type FormProviderProps = {
  formId?: string;
  locale?: string;
  dir?: "ltr" | "rtl";
  children: ReactNode;
};

export function FormProvider({ formId, locale, dir = "ltr", children }: FormProviderProps) {
  const [fields, setFields] = useState<FieldRegistration[]>([]);

  const registerField = useCallback((field: FieldRegistration) => {
    setFields((current) => {
      const withoutField = current.filter((item) => item.name !== field.name);
      return [...withoutField, field];
    });
  }, []);

  const unregisterField = useCallback((name: string) => {
    setFields((current) => current.filter((field) => field.name !== name));
  }, []);

  const value = useMemo(
    () => ({ formId, locale, dir, fields, registerField, unregisterField }),
    [formId, locale, dir, fields, registerField, unregisterField]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormRegistry() {
  return useContext(FormContext);
}