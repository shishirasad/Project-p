import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { FeedbackLive, FeedbackRole, FeedbackTone } from "../types";
import { feedbackToneBackgroundClasses, feedbackToneBorderClasses, feedbackToneTextClasses, getFeedbackLive, getFeedbackRole } from "../utils";

export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  tone?: FeedbackTone;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  closeLabel?: string;
  role?: FeedbackRole;
  live?: FeedbackLive;
  onDismiss?: () => void;
};

export function Alert({ tone = "neutral", title, description, icon, action, closeLabel, role, live, onDismiss, className, ...props }: AlertProps) {
  return (
    <div
      className={cn("flex w-full items-start gap-3 rounded-[var(--radius-lg)] border border-l-4 p-4 text-[var(--color-text)]", feedbackToneBackgroundClasses[tone], feedbackToneBorderClasses[tone], className)}
      data-tone={tone}
      role={getFeedbackRole(tone, role)}
      aria-live={getFeedbackLive(tone, live)}
      {...props}
    >
      {icon ? <span aria-hidden="true" className={cn("mt-0.5 inline-flex min-h-5 min-w-5", feedbackToneTextClasses[tone])}>{icon}</span> : null}
      <div className="min-w-0 flex-1 space-y-1">
        {title ? <p className="text-sm font-medium text-[var(--color-text)]">{title}</p> : null}
        {description ? <p className="text-sm leading-6 text-[var(--color-text-muted)]">{description}</p> : null}
        {action ? <div className="pt-1">{action}</div> : null}
      </div>
      {closeLabel ? (
        <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] px-2 text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]" onClick={onDismiss}>
          <span className="sr-only">{closeLabel}</span>
          <span aria-hidden="true">x</span>
        </button>
      ) : null}
    </div>
  );
}