import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { NavigationAction, NavigationItem } from "../types";
import { getNavigationActionKey, getNavigationItemKey, isNavigationActionActive, isNavigationItemActive } from "../utils";

export type DesktopNavbarProps = HTMLAttributes<HTMLElement> & {
  logo: ReactNode;
  items: NavigationItem[];
  actions?: NavigationAction[];
  activeHref?: string;
  ariaLabel?: string;
  variant?: "solid" | "transparent";
  isSticky?: boolean;
  onItemSelect?: (item: NavigationItem) => void;
};

const itemClasses = "inline-flex min-h-11 items-center px-2 text-[0.8125rem] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";
const activeItemClasses = "text-[var(--color-accent)]";
const actionClasses = "relative inline-flex h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] px-3 text-[var(--color-text)] transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50";

function DesktopNavigationItem({ item, active, onItemSelect }: { item: NavigationItem; active: boolean; onItemSelect?: (item: NavigationItem) => void }) {
  const classes = cn(itemClasses, active && activeItemClasses, item.disabled && "pointer-events-none opacity-50");

  if (item.disabled || !item.href) {
    return (
      <button type="button" className={classes} disabled={item.disabled} aria-current={active ? "page" : undefined} onClick={() => onItemSelect?.(item)}>
        {item.label}
      </button>
    );
  }

  return (
    <a className={classes} href={item.href} aria-current={active ? "page" : undefined} target={item.isExternal ? "_blank" : undefined} rel={item.isExternal ? "noreferrer" : undefined} onClick={() => onItemSelect?.(item)}>
      {item.label}
    </a>
  );
}

function DesktopNavigationAction({ action, active }: { action: NavigationAction; active: boolean }) {
  const content = (
    <>
      {action.icon ? <span aria-hidden="true" className="inline-flex">{action.icon}</span> : null}
      <span className={action.icon ? "sr-only" : "text-[0.8125rem] font-medium"}>{action.label}</span>
      {action.badge ? <span className="ml-1 text-xs text-[var(--color-accent)]">{action.badge}</span> : null}
    </>
  );
  const classes = cn(actionClasses, active && "bg-[var(--color-hover-surface)] text-[var(--color-accent)]");

  if (action.href) {
    return <a className={classes} href={action.href} aria-label={action.label} aria-current={active ? "page" : undefined}>{content}</a>;
  }

  return <button type="button" className={classes} aria-label={action.label} disabled={action.disabled} onClick={action.onPress}>{content}</button>;
}

export function DesktopNavbar({ logo, items, actions = [], activeHref, ariaLabel = "Primary navigation", variant = "solid", isSticky = false, onItemSelect, className, ...props }: DesktopNavbarProps) {
  return (
    <header
      className={cn(
        "hidden min-h-[var(--nav-height-desktop)] border-b border-[var(--color-border)] text-[var(--color-text)] xl:block",
        variant === "solid" ? "bg-[var(--color-background)]" : "bg-[var(--color-background)]/95 backdrop-blur-md",
        isSticky && "sticky top-0 z-[var(--z-nav)]",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex min-h-[var(--nav-height-desktop)] max-w-[var(--container-max)] items-center justify-between gap-8 px-[var(--gutter)]">
        <div className="flex min-h-11 items-center">{logo}</div>
        <nav aria-label={ariaLabel} className="flex min-h-11 items-center gap-4">
          {items.map((item, index) => <DesktopNavigationItem key={getNavigationItemKey(item, index)} item={item} active={isNavigationItemActive(item, activeHref)} onItemSelect={onItemSelect} />)}
        </nav>
        {actions.length > 0 ? (
          <div className="flex min-h-11 items-center gap-1" aria-label="Navigation actions">
            {actions.map((action, index) => <DesktopNavigationAction key={getNavigationActionKey(action, index)} action={action} active={isNavigationActionActive(action, activeHref)} />)}
          </div>
        ) : null}
      </div>
    </header>
  );
}
