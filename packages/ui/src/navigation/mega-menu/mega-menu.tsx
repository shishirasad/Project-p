import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { MegaMenuColumn, NavigationItem } from "../types";
import { getNavigationItemKey } from "../utils";

export type MegaMenuProps = HTMLAttributes<HTMLDivElement> & {
  columns: MegaMenuColumn[];
  ariaLabel?: string;
  featuredItem?: NavigationItem;
  onItemSelect?: (item: NavigationItem) => void;
};

const menuItemClasses = "group inline-flex min-h-11 w-full flex-col justify-center rounded-[var(--radius-sm)] px-3 py-2 text-left transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]";

function MegaMenuItem({ item, onItemSelect }: { item: NavigationItem; onItemSelect?: (item: NavigationItem) => void }) {
  const content = (
    <>
      <span className="text-sm font-medium text-[var(--color-text)]">{item.label}</span>
      {item.description ? <span className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</span> : null}
    </>
  );

  if (item.disabled || !item.href) {
    return <button type="button" className={cn(menuItemClasses, item.disabled && "pointer-events-none opacity-50")} disabled={item.disabled} onClick={() => onItemSelect?.(item)}>{content}</button>;
  }

  return <a className={menuItemClasses} href={item.href} target={item.isExternal ? "_blank" : undefined} rel={item.isExternal ? "noreferrer" : undefined} onClick={() => onItemSelect?.(item)}>{content}</a>;
}

export function MegaMenu({ columns, ariaLabel = "Expanded navigation", featuredItem, onItemSelect, className, ...props }: MegaMenuProps) {
  return (
    <div className={cn("w-full border-y border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]", className)} role="region" aria-label={ariaLabel} {...props}>
      <div className="mx-auto grid max-w-[var(--container-max)] gap-6 px-[var(--gutter)] py-6 md:grid-cols-3 lg:grid-cols-4">
        {columns.map((column, columnIndex) => (
          <section key={column.id ?? `${columnIndex}`} aria-labelledby={`mega-menu-${column.id ?? columnIndex}`} className="space-y-3">
            <h3 id={`mega-menu-${column.id ?? columnIndex}`} className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text)]">{column.title}</h3>
            <div className="grid gap-1">
              {column.items.map((item, itemIndex) => <MegaMenuItem key={getNavigationItemKey(item, itemIndex)} item={item} onItemSelect={onItemSelect} />)}
            </div>
          </section>
        ))}
        {featuredItem ? (
          <section aria-label="Featured navigation" className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-4">
            {featuredItem.eyebrow ? <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text)]">{featuredItem.eyebrow}</p> : null}
            <div className="mt-3"><MegaMenuItem item={featuredItem} onItemSelect={onItemSelect} /></div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
