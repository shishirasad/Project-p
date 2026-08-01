import type { ReactNode } from "react";

export type FeedbackTone = "neutral" | "info" | "success" | "warning" | "error";
export type FeedbackSize = "sm" | "md" | "lg";
export type FeedbackRole = "status" | "alert";
export type FeedbackLive = "polite" | "assertive" | "off";

export type FeedbackAction = {
  label: ReactNode;
  onPress?: () => void;
  href?: string;
};

export type StepIndicatorStepStatus = "complete" | "current" | "upcoming" | "error";

export type StepIndicatorStep = {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  status?: StepIndicatorStepStatus;
};