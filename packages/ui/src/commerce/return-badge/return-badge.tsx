import type { HTMLAttributes, ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "../../lib/cn";

export type ReturnBadgeProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
};

export function ReturnBadge({ label, description, icon = <RotateCcw aria-hidden="true" size={17} strokeWidth={1.8} />, className, ...props }: ReturnBadgeProps) {
  return (
    <div className={cn("flex min-h-11 items-center gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)]", className)} {...props}>
      <span className="shrink-0 text-[var(--color-accent)]" aria-hidden="true">{icon}</span>
      <span className="min-w-0">
        <span className="block font-medium">{label}</span>
        {description ? <span className="block text-xs leading-5 text-[var(--color-text-muted)]">{description}</span> : null}
      </span>
    </div>
  );
}
