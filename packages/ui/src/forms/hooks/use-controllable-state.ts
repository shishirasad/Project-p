"use client";

import { useCallback, useState } from "react";

export function useControllableState<TValue>(options: {
  value?: TValue;
  defaultValue: TValue;
  onChange?: (value: TValue) => void;
}) {
  const { value, defaultValue, onChange } = options;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;

  const setValue = useCallback(
    (nextValue: TValue) => {
      if (!isControlled) setUncontrolledValue(nextValue);
      onChange?.(nextValue);
    },
    [isControlled, onChange]
  );

  return [currentValue, setValue, isControlled] as const;
}