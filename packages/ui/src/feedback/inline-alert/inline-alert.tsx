import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { FeedbackLive, FeedbackRole, FeedbackTone } from "../types";
import { feedbackToneTextClasses, getFeedbackLive, getFeedbackRole } from "../utils";

export type InlineAlertProps = HTMLAttributes<HTMLParagraphElement> & {
  tone?: FeedbackTone;
  icon?: ReactNode;
  message: ReactNode;
  role?: FeedbackRole;
  live?: FeedbackLive;
};

export function InlineAlert({ tone = "neutral", icon, message, role, live, className, ...props }: InlineAlertProps) {
  return (
    <p className={cn("inline-flex min-h-6 items-start gap-2 text-sm leading-6 text-[var(--color-text-muted)]", className)} data-tone={tone} role={getFeedbackRole(tone, role)} aria-live={getFeedbackLive(tone, live)} {...props}>
      {icon ? <span aria-hidden="true" className={cn("mt-0.5 inline-flex min-h-4 min-w-4", feedbackToneTextClasses[tone])}>{icon}</span> : null}
      <span>{message}</span>
    </p>
  );
}