import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { FeedbackTone } from "../types";
import { feedbackToneTextClasses, getProgressPercent } from "../utils";

export type ProgressBarProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  label: string;
  value?: number;
  max?: number;
  tone?: FeedbackTone;
  showValue?: boolean;
  isIndeterminate?: boolean;
};

const barToneClasses: Record<FeedbackTone, string> = {
  neutral: "bg-[var(--color-text-muted)]",
  info: "bg-[var(--color-info)]",
  success: "bg-[var(--color-success)]",
  warning: "bg-[var(--color-warning)]",
  error: "bg-[var(--color-error)]"
};

export function ProgressBar({ label, value = 0, max = 100, tone = "neutral", showValue = false, isIndeterminate = false, className, ...props }: ProgressBarProps) {
  const percent = getProgressPercent(value, max);

  return (
    <div className={cn("grid w-full gap-2 text-[var(--color-text)]", className)} data-tone={tone} {...props}>
      <div className="flex min-h-6 items-center justify-between gap-4">
        <span className="text-sm font-medium text-[var(--color-text)]">{label}</span>
        {showValue && !isIndeterminate ? <span className={cn("text-sm", feedbackToneTextClasses[tone])}>{Math.round(percent)}%</span> : null}
      </div>
      <div role="progressbar" aria-label={label} aria-valuemin={isIndeterminate ? undefined : 0} aria-valuemax={isIndeterminate ? undefined : max} aria-valuenow={isIndeterminate ? undefined : value} className="h-2 w-full overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-hover-surface)]">
        <div className={cn("h-full rounded-[var(--radius-sm)] transition-[width] duration-200", isIndeterminate ? "w-1/3 animate-pulse" : "", barToneClasses[tone])} style={isIndeterminate ? undefined : { width: `${percent}%` }} />
      </div>
    </div>
  );
}