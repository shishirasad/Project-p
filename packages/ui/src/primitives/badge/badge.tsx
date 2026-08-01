import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "accent" | "success" | "warning" | "error";
};

const toneClasses = {
  neutral: "border-[var(--color-border)] text-[var(--color-text-muted)]",
  accent: "border-[var(--color-accent)] text-[var(--color-accent)]",
  success: "border-[var(--color-success)] text-[var(--color-success)]",
  warning: "border-[var(--color-warning)] text-[var(--color-warning)]",
  error: "border-[var(--color-error)] text-[var(--color-error)]"
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center border px-2 py-1 text-[11px] uppercase tracking-[0.16em]", toneClasses[tone], className)} {...props} />;
}

