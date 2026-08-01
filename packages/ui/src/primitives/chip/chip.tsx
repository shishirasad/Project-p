import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export function Chip({ className, selected = false, type = "button", ...props }: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-xs text-[var(--color-text)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50",
        selected ? "border-[var(--color-accent)] bg-[var(--color-hover-surface)]" : "border-[var(--color-border)] bg-transparent hover:bg-[var(--color-hover-surface)]",
        className
      )}
      {...props}
    />
  );
}

