"use client";

import { useEffect, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { FeedbackLive, FeedbackRole, FeedbackTone } from "../types";
import { feedbackToneBackgroundClasses, feedbackToneBorderClasses, feedbackToneTextClasses, getFeedbackLive, getFeedbackRole } from "../utils";

export type ToastProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  tone?: FeedbackTone;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  closeLabel?: string;
  duration?: number;
  role?: FeedbackRole;
  live?: FeedbackLive;
  onOpenChange?: (isOpen: boolean) => void;
};

export function Toast({ tone = "neutral", title, description, icon, action, isOpen, defaultOpen = true, closeLabel, duration, role, live, onOpenChange, className, onKeyDown, ...props }: ToastProps) {
  const isControlled = isOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isOpen ?? internalOpen;

  function updateOpen(nextOpen: boolean) {
    if (!isControlled) setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  }

  useEffect(() => {
    if (!open || duration === undefined || duration <= 0) return;
    const timer = window.setTimeout(() => {
      if (!isControlled) setInternalOpen(false);
      onOpenChange?.(false);
    }, duration);
    return () => window.clearTimeout(timer);
  }, [duration, isControlled, onOpenChange, open]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "flex w-full max-w-[420px] items-start gap-3 rounded-[var(--radius-lg)] border border-l-4 p-4 text-[var(--color-text)] shadow-sm transition duration-200",
        feedbackToneBackgroundClasses[tone],
        feedbackToneBorderClasses[tone],
        className
      )}
      data-tone={tone}
      role={getFeedbackRole(tone, role)}
      aria-live={getFeedbackLive(tone, live)}
      onKeyDown={(event) => {
        if (event.key === "Escape") updateOpen(false);
        onKeyDown?.(event);
      }}
      {...props}
    >
      {icon ? <span aria-hidden="true" className={cn("mt-0.5 inline-flex min-h-5 min-w-5", feedbackToneTextClasses[tone])}>{icon}</span> : null}
      <div className="min-w-0 flex-1 space-y-1">
        {title ? <p className="text-sm font-medium text-[var(--color-text)]">{title}</p> : null}
        {description ? <p className="text-sm leading-6 text-[var(--color-text-muted)]">{description}</p> : null}
        {action ? <div className="pt-1">{action}</div> : null}
      </div>
      {closeLabel ? (
        <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] px-2 text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]" onClick={() => updateOpen(false)}>
          <span className="sr-only">{closeLabel}</span>
          <span aria-hidden="true">x</span>
        </button>
      ) : null}
    </div>
  );
}