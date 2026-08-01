import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { FeedbackTone } from "../types";
import { feedbackToneBorderClasses, feedbackToneTextClasses } from "../utils";

export type StatusPillProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: FeedbackTone;
  label: ReactNode;
  description?: ReactNode;
  showDot?: boolean;
};

export function StatusPill({ tone = "neutral", label, description, showDot = true, className, ...props }: StatusPillProps) {
  return (
    <span className={cn("inline-flex min-h-11 items-center gap-3 rounded-full border bg-[var(--color-surface)] px-4 text-sm", feedbackToneBorderClasses[tone], className)} data-tone={tone} {...props}>
      {showDot ? <span aria-hidden="true" className={cn("h-2 w-2 rounded-full bg-current", feedbackToneTextClasses[tone])} /> : null}
      <span className="grid gap-0.5">
        <span className={cn("font-medium", feedbackToneTextClasses[tone])}>{label}</span>
        {description ? <span className="text-xs text-[var(--color-text-muted)]">{description}</span> : null}
      </span>
    </span>
  );
}