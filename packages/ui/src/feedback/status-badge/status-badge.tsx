import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { FeedbackTone } from "../types";
import { feedbackToneBorderClasses, feedbackToneTextClasses } from "../utils";

export type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: FeedbackTone;
  label: ReactNode;
  showDot?: boolean;
};

export function StatusBadge({ tone = "neutral", label, showDot = false, className, ...props }: StatusBadgeProps) {
  return (
    <span className={cn("inline-flex min-h-7 items-center gap-2 rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-2 text-xs uppercase tracking-[0.14em]", feedbackToneBorderClasses[tone], feedbackToneTextClasses[tone], className)} data-tone={tone} {...props}>
      {showDot ? <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" /> : null}
      <span>{label}</span>
    </span>
  );
}