import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Rating } from "../rating";

export type ReviewSummaryProps = HTMLAttributes<HTMLDivElement> & {
  rating: number;
  ratingLabel: string;
  reviewLabel: ReactNode;
  max?: number;
};

export function ReviewSummary({ rating, ratingLabel, reviewLabel, max = 5, className, ...props }: ReviewSummaryProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)} {...props}>
      <Rating value={rating} max={max} label={ratingLabel} size="sm" />
      <span className="text-sm text-[var(--color-text-muted)]">{reviewLabel}</span>
    </div>
  );
}
