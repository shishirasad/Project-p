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
      <Container className="grid gap-12 md:gap-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(280px,1.05fr)_minmax(0,1.95fr)] lg:gap-20 xl:gap-28">
          <div className="grid content-start gap-6">
            <div>{brand}</div>
            {utility ? <div className="text-sm leading-6 text-[var(--color-text-muted)]">{utility}</div> : null}
            {social ? <div>{social}</div> : null}
          </div>
          {columns.length ? (
            <nav className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
              {columns.map((column, index) => (
                <div key={index} className="grid content-start gap-4">
                  <h3 className="text-[11px] font-semibold uppercase text-[var(--color-accent)]">{column.title}</h3>
                  <ul className="grid">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <a className={cn("inline-flex min-h-11 min-w-11 items-center text-[15px] leading-5 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]", layoutFocusClass)} href={link.href}>{link.label}</a>
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