import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { NavigationAction } from "../types";
import { getNavigationActionKey, isNavigationActionActive } from "../utils";

export type MobileNavbarProps = HTMLAttributes<HTMLElement> & {
  items: NavigationAction[];
  activeHref?: string;
  ariaLabel?: string;
  isFixed?: boolean;
  leadingSlot?: ReactNode;
};

const itemClasses = "relative flex min-h-14 min-w-11 flex-1 flex-col items-center justify-center gap-1 px-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50";

function MobileNavigationAction({ action, active }: { action: NavigationAction; active: boolean }) {
  const content = (
    <>
      {action.icon ? <span aria-hidden="true" className="inline-flex h-5 items-center">{action.icon}</span> : null}
      <span className="max-w-full truncate">{action.label}</span>
      {action.badge ? <span className="absolute right-3 top-2 min-w-5 rounded-full bg-[var(--color-accent)] px-1 text-center text-xs text-[var(--color-on-accent)]">{action.badge}</span> : null}
    </>
  );
  const classes = cn(itemClasses, active && "text-[var(--color-accent)]");

  if (action.href) {
    return <a className={classes} href={action.href} aria-current={active ? "page" : undefined}>{content}</a>;
  }

  return <button type="button" className={classes} disabled={action.disabled} onClick={action.onPress}>{content}</button>;
}

export function MobileNavbar({ items, activeHref, ariaLabel = "Mobile navigation", isFixed = false, leadingSlot, className, ...props }: MobileNavbarProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)]",
        isFixed && "fixed inset-x-0 bottom-0 z-[var(--z-nav)] pb-[max(env(safe-area-inset-bottom),0.5rem)]",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex min-h-[var(--nav-height-mobile)] max-w-[var(--container-max)] items-stretch px-1">
        {leadingSlot ? <div className="flex min-h-14 items-center px-2">{leadingSlot}</div> : null}
        {items.map((action, index) => <MobileNavigationAction key={getNavigationActionKey(action, index)} action={action} active={isNavigationActionActive(action, activeHref)} />)}
      </div>
    </nav>
  );
}
