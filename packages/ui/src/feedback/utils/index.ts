import type { FeedbackLive, FeedbackRole, FeedbackTone } from "../types";

export const feedbackToneTextClasses: Record<FeedbackTone, string> = {
  neutral: "text-[var(--color-text-muted)]",
  info: "text-[var(--color-info)]",
  success: "text-[var(--color-success)]",
  warning: "text-[var(--color-warning)]",
  error: "text-[var(--color-error)]"
};

export const feedbackToneBorderClasses: Record<FeedbackTone, string> = {
  neutral: "border-[var(--color-border)]",
  info: "border-[var(--color-info)]",
  success: "border-[var(--color-success)]",
  warning: "border-[var(--color-warning)]",
  error: "border-[var(--color-error)]"
};

export const feedbackToneBackgroundClasses: Record<FeedbackTone, string> = {
  neutral: "bg-[var(--color-surface)]",
  info: "bg-[var(--color-surface)]",
  success: "bg-[var(--color-surface)]",
  warning: "bg-[var(--color-surface)]",
  error: "bg-[var(--color-surface)]"
};

export function getFeedbackRole(tone: FeedbackTone, role?: FeedbackRole): FeedbackRole {
  if (role) return role;
  return tone === "error" ? "alert" : "status";
}

export function getFeedbackLive(tone: FeedbackTone, live?: FeedbackLive): FeedbackLive {
  if (live) return live;
  return tone === "error" ? "assertive" : "polite";
}

export function getProgressPercent(value: number | undefined, max: number) {
  if (value === undefined) return 0;
  if (max <= 0) return 0;
  return Math.min(Math.max((value / max) * 100, 0), 100);
}