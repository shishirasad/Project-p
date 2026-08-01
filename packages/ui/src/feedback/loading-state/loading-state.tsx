import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { FeedbackSize } from "../types";

export type LoadingStateProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  title?: ReactNode;
  description?: ReactNode;
  size?: FeedbackSize;
};

const spinnerSizeClasses: Record<FeedbackSize, string> = {
  sm: "h-5 w-5",
  md: "h-8 w-8",
  lg: "h-12 w-12"
};

export function LoadingState({ title, description, size = "md", className, ...props }: LoadingStateProps) {
  return (
    <div className={cn("mx-auto grid max-w-[var(--container-reading)] justify-items-center gap-4 px-6 py-10 text-center text-[var(--color-text)]", className)} role="status" aria-live="polite" aria-busy="true" {...props}>
      <span aria-hidden="true" className={cn("animate-spin rounded-full border border-[var(--color-border)] border-t-[var(--color-text)]", spinnerSizeClasses[size])} />
      {title || description ? (
        <div className="grid gap-2">
          {title ? <p className="text-sm font-medium text-[var(--color-text)]">{title}</p> : null}
          {description ? <p className="text-sm leading-6 text-[var(--color-text-muted)]">{description}</p> : null}
        </div>
      ) : null}
    </div>
  );
}