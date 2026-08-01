import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type RatingProps = HTMLAttributes<HTMLDivElement> & {
  value: number;
  max?: number;
  label: string;
  showValue?: boolean;
  size?: "sm" | "md";
};

export function Rating({ value, max = 5, label, showValue = false, size = "md", className, ...props }: RatingProps) {
  const safeMax = Math.max(1, max);
  const safeValue = Math.min(Math.max(value, 0), safeMax);

  return (
    <div role="img" aria-label={label} className={cn("inline-flex items-center gap-2 text-[var(--color-text)]", className)} {...props}>
      <span className="inline-flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: safeMax }).map((_, index) => {
          const fill = Math.min(Math.max(safeValue - index, 0), 1);
          return (
            <span key={index} className={cn("relative overflow-hidden rounded-full bg-[var(--color-border)]", size === "sm" ? "h-1.5 w-4" : "h-2 w-5")}>
              <span className="absolute inset-y-0 left-0 rounded-full bg-[var(--color-accent)]" style={{ width: `${fill * 100}%` }} />
            </span>
          );
        })}
      </span>
      {showValue ? <span className="text-sm text-[var(--color-text-muted)]">{safeValue.toFixed(1)}</span> : null}
    </div>
  );
}
