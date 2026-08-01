import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { FeedbackSize, FeedbackTone } from "../types";
import { feedbackToneTextClasses, getProgressPercent } from "../utils";

export type CircularProgressProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  label: string;
  value?: number;
  max?: number;
  tone?: FeedbackTone;
  size?: FeedbackSize;
  showValue?: boolean;
  isIndeterminate?: boolean;
};

const sizeClasses: Record<FeedbackSize, string> = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-20 w-20"
};

export function CircularProgress({ label, value = 0, max = 100, tone = "neutral", size = "md", showValue = false, isIndeterminate = false, className, ...props }: CircularProgressProps) {
  const percent = getProgressPercent(value, max);
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className={cn("inline-grid justify-items-center gap-2 text-[var(--color-text)]", className)} data-tone={tone} {...props}>
      <svg className={cn(sizeClasses[size], isIndeterminate && "animate-spin")} viewBox="0 0 44 44" role="progressbar" aria-label={label} aria-valuemin={isIndeterminate ? undefined : 0} aria-valuemax={isIndeterminate ? undefined : max} aria-valuenow={isIndeterminate ? undefined : value}>
        <circle className="text-[var(--color-border)]" cx="22" cy="22" r={radius} fill="none" stroke="currentColor" strokeWidth="4" />
        <circle className={feedbackToneTextClasses[tone]} cx="22" cy="22" r={radius} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" strokeDasharray={circumference} strokeDashoffset={isIndeterminate ? circumference * 0.35 : offset} style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }} />
      </svg>
      {showValue && !isIndeterminate ? <span className="text-sm text-[var(--color-text-muted)]">{Math.round(percent)}%</span> : null}
    </div>
  );
}