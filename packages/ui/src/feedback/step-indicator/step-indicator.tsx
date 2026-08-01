import type { OlHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { StepIndicatorStep, StepIndicatorStepStatus } from "../types";

export type StepIndicatorProps = OlHTMLAttributes<HTMLOListElement> & {
  steps: StepIndicatorStep[];
  currentStep?: string;
  orientation?: "horizontal" | "vertical";
  ariaLabel?: string;
};

const markerClasses: Record<StepIndicatorStepStatus, string> = {
  complete: "border-[var(--color-success)] text-[var(--color-success)]",
  current: "border-[var(--color-text)] text-[var(--color-text)]",
  upcoming: "border-[var(--color-border)] text-[var(--color-text-muted)]",
  error: "border-[var(--color-error)] text-[var(--color-error)]"
};

function getStepStatus(step: StepIndicatorStep, index: number, currentIndex: number): StepIndicatorStepStatus {
  if (step.status) return step.status;
  if (index < currentIndex) return "complete";
  if (index === currentIndex) return "current";
  return "upcoming";
}

export function StepIndicator({ steps, currentStep, orientation = "horizontal", ariaLabel = "Progress steps", className, ...props }: StepIndicatorProps) {
  const currentIndex = Math.max(steps.findIndex((step) => step.id === currentStep), 0);

  return (
    <ol aria-label={ariaLabel} className={cn("grid gap-3 text-[var(--color-text)]", orientation === "horizontal" && "sm:flex sm:items-start", className)} {...props}>
      {steps.map((step, index) => {
        const status = getStepStatus(step, index, currentIndex);
        const isCurrent = status === "current";
        return (
          <li key={step.id} className={cn("relative flex min-w-0 gap-3", orientation === "horizontal" && "sm:flex-1")} aria-current={isCurrent ? "step" : undefined} data-status={status}>
            <span className={cn("inline-flex h-8 min-w-8 items-center justify-center rounded-[var(--radius-sm)] border bg-[var(--color-surface)] text-sm font-medium", markerClasses[status])}>{index + 1}</span>
            <span className="grid min-w-0 gap-1">
              <span className="text-sm font-medium text-[var(--color-text)]">{step.label}</span>
              {step.description ? <span className="text-sm leading-6 text-[var(--color-text-muted)]">{step.description}</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}