import Link from "next/link";
import { Heart, Home, Search, ShoppingBag, SquareStack } from "lucide-react";
import { mobileNavigation } from "@/config/navigation";
import type { BrandContext } from "@/types/brand";

const icons = {
  Home,
  Search,
  Collection: SquareStack,
  Wishlist: Heart,
  Bag: ShoppingBag
};

export type MobileBottomNavigationProps = {
  brandContext?: BrandContext;
};

export function MobileBottomNavigation({ brandContext = "house" }: MobileBottomNavigationProps) {
  return (
    <nav
      data-brand={brandContext}
      className="fixed inset-x-0 bottom-0 z-[var(--z-nav)] border-t border-[var(--color-border)] bg-[var(--color-background)]/95 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur-md lg:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="grid grid-cols-5 gap-1">
        {mobileNavigation.map((item) => {
          const Icon = icons[item.label as keyof typeof icons] ?? Home;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 flex-col items-center justify-center gap-1 text-[11px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                <Icon aria-hidden="true" size={18} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
