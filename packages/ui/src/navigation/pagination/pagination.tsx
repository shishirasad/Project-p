import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { PaginationLabelSet } from "../types";

export type PaginationProps = HTMLAttributes<HTMLElement> & {
  page: number;
  pageCount: number;
  labels: PaginationLabelSet;
  siblingCount?: number;
  getPageHref?: (page: number) => string;
  onPageChange?: (page: number) => void;
};

const pageControlClasses = "inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] px-3 text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50";

function getVisiblePages(page: number, pageCount: number, siblingCount: number) {
  const values = new Set<number>([1, pageCount]);
  for (let nextPage = page - siblingCount; nextPage <= page + siblingCount; nextPage += 1) {
    if (nextPage >= 1 && nextPage <= pageCount) values.add(nextPage);
  }
  return Array.from(values).sort((a, b) => a - b);
}

function PageControl({ targetPage, children, ariaLabel, disabled, current, href, onPageChange }: { targetPage: number; children: ReactNode; ariaLabel: string; disabled?: boolean; current?: boolean; href?: string; onPageChange?: (page: number) => void }) {
  const classes = cn(pageControlClasses, current && "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]");

  if (href && !disabled) {
    return <a className={classes} href={href} aria-label={ariaLabel} aria-current={current ? "page" : undefined}>{children}</a>;
  }

  return <button type="button" className={classes} aria-label={ariaLabel} aria-current={current ? "page" : undefined} disabled={disabled} onClick={() => onPageChange?.(targetPage)}>{children}</button>;
}

export function Pagination({ page, pageCount, labels, siblingCount = 1, getPageHref, onPageChange, className, ...props }: PaginationProps) {
  const safePage = Math.min(Math.max(page, 1), Math.max(pageCount, 1));
  const pages = getVisiblePages(safePage, pageCount, siblingCount);

  return (
    <nav aria-label="Pagination" className={cn("flex min-h-11 max-w-full flex-wrap items-center justify-center gap-1", className)} {...props}>
      <PageControl targetPage={safePage - 1} ariaLabel={labels.previous} disabled={safePage <= 1} href={safePage > 1 ? getPageHref?.(safePage - 1) : undefined} onPageChange={onPageChange}>Previous</PageControl>
      {pages.map((visiblePage, index) => {
        const previousPage = pages[index - 1];
        const hasGap = previousPage !== undefined && visiblePage - previousPage > 1;
        return (
          <span key={visiblePage} className="inline-flex min-h-11 items-center gap-1">
            {hasGap ? <span aria-hidden="true" className="inline-flex min-h-11 min-w-11 items-center justify-center text-[var(--color-text-muted)]">...</span> : null}
            <PageControl targetPage={visiblePage} ariaLabel={visiblePage === safePage ? labels.currentPage(visiblePage) : labels.page(visiblePage)} current={visiblePage === safePage} href={getPageHref?.(visiblePage)} onPageChange={onPageChange}>{visiblePage}</PageControl>
          </span>
        );
      })}
      <PageControl targetPage={safePage + 1} ariaLabel={labels.next} disabled={safePage >= pageCount} href={safePage < pageCount ? getPageHref?.(safePage + 1) : undefined} onPageChange={onPageChange}>Next</PageControl>
    </nav>
  );
}

