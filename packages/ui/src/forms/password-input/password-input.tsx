"use client";

import { Eye, EyeOff } from "lucide-react";
import { forwardRef } from "react";
import type { InputProps } from "../input";
import { Input } from "../input";
import { useControllableState } from "../hooks";

export type PasswordInputProps = Omit<InputProps, "type" | "trailingSlot"> & {
  isVisible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  showLabel?: string;
  hideLabel?: string;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(function PasswordInput(
  { isVisible, defaultVisible = false, onVisibleChange, showLabel, hideLabel, ...props },
  ref
) {
  const [visible, setVisible] = useControllableState({ value: isVisible, defaultValue: defaultVisible, onChange: onVisibleChange });
  const label = visible ? hideLabel : showLabel;

  return (
    <Input
      ref={ref}
      type={visible ? "text" : "password"}
      autoComplete="current-password"
      trailingSlot={<button aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-muted)] transition hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]" type="button" onClick={() => setVisible(!visible)}>{visible ? <EyeOff aria-hidden="true" size={16} strokeWidth={1.75} /> : <Eye aria-hidden="true" size={16} strokeWidth={1.75} />}</button>}
      {...props}
    />
  );
});
