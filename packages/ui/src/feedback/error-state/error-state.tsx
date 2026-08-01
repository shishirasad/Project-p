import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type ErrorStateProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
};

export function ErrorState({ eyebrow, title, description, icon, primaryAction, secondaryAction, className, ...props }: ErrorStateProps) {
  return (
    <section className={cn("mx-auto grid max-w-[var(--container-reading)] justify-items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] border-l-[var(--color-error)] bg-[var(--color-surface)] px-6 py-10 text-center text-[var(--color-text)]", className)} role="alert" aria-live="assertive" {...props}>
      {icon ? <div aria-hidden="true" className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-error)] text-[var(--color-error)]">{icon}</div> : null}
      <div className="grid gap-2">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{eyebrow}</p> : null}
        <h2 className="text-lg font-medium text-[var(--color-text)]">{title}</h2>
        {description ? <p className="text-sm leading-6 text-[var(--color-text-muted)]">{description}</p> : null}
      </div>
      {primaryAction || secondaryAction ? <div className="flex flex-wrap items-center justify-center gap-3 pt-2">{primaryAction}{secondaryAction}</div> : null}
    </section>
  );
}