import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "../../primitives/container";
import type { FooterLayoutColumn } from "../types";
import { layoutFocusClass } from "../utils";

export type FooterLayoutProps = HTMLAttributes<HTMLElement> & {
  brand: ReactNode;
  columns?: FooterLayoutColumn[];
  utility?: ReactNode;
  legal?: ReactNode;
  social?: ReactNode;
  ariaLabel?: string;
};

export function FooterLayout({ brand, columns = [], utility, legal, social, ariaLabel, className, ...props }: FooterLayoutProps) {
  return (
    <footer aria-label={ariaLabel} className={cn("border-t border-[var(--color-border)] bg-[var(--color-background)] py-12 text-[var(--color-text)] md:py-16", className)} {...props}>
      <Container className="grid gap-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="grid gap-5">
            <div>{brand}</div>
            {utility ? <div className="text-sm leading-6 text-[var(--color-text-muted)]">{utility}</div> : null}
            {social ? <div>{social}</div> : null}
          </div>
          {columns.length ? (
            <nav className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {columns.map((column, index) => (
                <div key={index} className="grid content-start gap-3">
                  <h3 className="text-xs uppercase tracking-[0.18em] text-[var(--color-text)]">{column.title}</h3>
                  <ul className="grid gap-1">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <a className={cn("inline-flex min-h-11 min-w-11 items-center text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]", layoutFocusClass)} href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          ) : null}
        </div>
        {legal ? <div className="border-t border-[var(--color-border)] pt-6 text-xs leading-5 text-[var(--color-text-muted)]">{legal}</div> : null}
      </Container>
    </footer>
  );
}