"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle, Search, ShoppingBag } from "lucide-react";
import { mobileNavigation } from "@/config/navigation";
import type { BrandContext } from "@/types/brand";
import { useStorefrontExperience } from "@/components/storefront/storefront-experience-provider";

const icons = {
  Home,
  Search,
  Bag: ShoppingBag,
  Chat: MessageCircle
};

export type MobileBottomNavigationProps = {
  brandContext?: BrandContext;
};

export function MobileBottomNavigation({ brandContext = "house" }: MobileBottomNavigationProps) {
  const pathname = usePathname();
  const { bagCount, setConciergeOpen } = useStorefrontExperience();

  return (
    <nav
      data-brand={brandContext}
      className="fixed inset-x-0 bottom-0 z-[var(--z-nav)] border-t border-[var(--color-border)] bg-[var(--color-background)]/95 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur-md lg:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="grid grid-cols-4 gap-1">
        {mobileNavigation.map((item) => {
          const Icon = icons[item.label as keyof typeof icons] ?? Home;
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const itemClassName = `flex min-h-11 w-full flex-col items-center justify-center gap-1 text-[11px] transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${isActive && item.label !== "Chat" ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"}`;

          return (
            <li key={item.label}>
              {item.label === "Chat" ? (
                <button type="button" className={itemClassName} onClick={() => setConciergeOpen(true)} aria-label="Open Porsion concierge">
                  <span className="relative">
                    <Icon aria-hidden="true" size={18} />
                    {item.href === "/cart" && bagCount ? <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[9px] text-[var(--color-on-accent)]">{bagCount}</span> : null}
                  </span>
                  <span>{item.label}</span>
                </button>
              ) : (
                <Link href={item.href} className={itemClassName} aria-current={isActive ? "page" : undefined}>
                  <span className="relative">
                    <Icon aria-hidden="true" size={18} />
                    {item.href === "/cart" && bagCount ? <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[9px] text-[var(--color-on-accent)]">{bagCount}</span> : null}
                  </span>
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
