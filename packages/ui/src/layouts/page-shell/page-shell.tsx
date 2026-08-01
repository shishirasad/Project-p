import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type PageShellProps = HTMLAttributes<HTMLDivElement> & {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  mainId?: string;
  skipLinkLabel?: ReactNode;
  skipLinkHref?: string;
};

export function PageShell({ header, footer, children, mainId = "main-content", skipLinkLabel, skipLinkHref = "#main-content", className, ...props }: PageShellProps) {
  return (
    <div className={cn("min-h-dvh bg-[var(--color-background)] text-[var(--color-text)]", className)} {...props}>
      {skipLinkLabel ? <a className="pointer-events-none fixed left-[var(--gutter)] top-4 z-[var(--z-command)] inline-flex min-h-11 min-w-11 -translate-y-20 items-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 text-sm text-[var(--color-on-accent)] opacity-0 transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100" href={skipLinkHref}>{skipLinkLabel}</a> : null}
      {header ? <div className="relative z-[var(--z-nav)]">{header}</div> : null}
      <main id={mainId}>{children}</main>
      {footer ? <div>{footer}</div> : null}
    </div>
  );
}