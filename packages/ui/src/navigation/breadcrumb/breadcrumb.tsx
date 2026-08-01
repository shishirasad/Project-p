import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { NavigationItem } from "../types";
import { getNavigationItemKey } from "../utils";

export type BreadcrumbProps = HTMLAttributes<HTMLElement> & {
  items: NavigationItem[];
  ariaLabel?: string;
  separator?: string;
};

export function Breadcrumb({ items, ariaLabel = "Breadcrumb", separator = "/", className, ...props }: BreadcrumbProps) {
  return (
    <nav aria-label={ariaLabel} className={cn("text-sm text-[var(--color-text-muted)]", className)} {...props}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={getNavigationItemKey(item, index)} className="flex min-h-11 items-center gap-2">
              {item.href && !isLast ? (
                <a className="inline-flex min-h-11 min-w-11 items-center justify-center text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]" href={item.href}>{item.label}</a>
              ) : (
                <span className={cn("inline-flex min-h-11 items-center", isLast && "text-[var(--color-text)]")} aria-current={isLast ? "page" : undefined}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true" className="text-[var(--color-border)]">{separator}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
