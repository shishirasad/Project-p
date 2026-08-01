import type { CommerceImageRatio, CommerceSize, CommerceTone } from "../types";

export const commerceFocusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";
export const commerceMutedTextClass = "text-[var(--color-text-muted)]";

export const commerceRatioClasses: Record<CommerceImageRatio, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]"
};

export const commerceSizeClasses: Record<CommerceSize, string> = {
  sm: "min-h-11 px-3 text-xs",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-sm"
};

export const commerceToneClasses: Record<CommerceTone, string> = {
  neutral: "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]",
  accent: "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]",
  success: "border-[var(--color-success)] bg-[var(--color-surface)] text-[var(--color-success)]",
  warning: "border-[var(--color-warning)] bg-[var(--color-surface)] text-[var(--color-warning)]",
  error: "border-[var(--color-error)] bg-[var(--color-surface)] text-[var(--color-error)]"
};

export function getBoundedIndex(currentIndex: number, delta: number, itemCount: number) {
  if (itemCount <= 0) return 0;
  return Math.min(Math.max(currentIndex + delta, 0), itemCount - 1);
}

export function getNextEnabledValue<TOption extends { value: string; disabled?: boolean }>(options: TOption[], currentValue: string | undefined, direction: 1 | -1) {
  const enabledOptions = options.filter((option) => !option.disabled);
  if (enabledOptions.length === 0) return currentValue;
  const currentIndex = Math.max(0, enabledOptions.findIndex((option) => option.value === currentValue));
  const nextIndex = (currentIndex + direction + enabledOptions.length) % enabledOptions.length;
  return enabledOptions[nextIndex]?.value ?? currentValue;
}
