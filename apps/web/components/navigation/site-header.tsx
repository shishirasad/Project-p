import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import { brandDefinitions } from "@/config/brands";
import { primaryNavigation } from "@/config/navigation";
import type { BrandContext } from "@/types/brand";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils/cn";

export type SiteHeaderProps = {
  brandContext?: BrandContext;
  transparent?: boolean;
};

export function SiteHeader({ brandContext = "house", transparent = false }: SiteHeaderProps) {
  const activeBrand = brandDefinitions[brandContext];

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-nav)] border-b border-[var(--color-border)] backdrop-blur-md transition-colors duration-200",
        transparent ? "bg-transparent" : "bg-[var(--color-background)]"
      )}
    >
      <Container className="flex h-[var(--nav-height-desktop)] items-center justify-between gap-8 max-lg:h-[var(--nav-height-mobile)]">
        <Link href="/" className="flex items-center gap-3" aria-label="Porsion Studio home">
          <Image
            src="/brand-assets/porsion-studio-logo-mark.jpg"
            alt="Porsion Studio mark"
            width={42}
            height={42}
            className="h-9 w-9 rounded-full object-cover"
            priority
          />
          <span className="hidden text-sm font-medium uppercase tracking-[0.32em] text-[var(--color-text)] sm:block">
            Porsion
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]",
                item.brandContext === brandContext && "text-[var(--color-accent)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2" aria-label="Store actions">
          <span className="hidden text-xs text-[var(--color-text-muted)] xl:inline">{activeBrand.positioning}</span>
          <Link className="icon-action" href="/search" aria-label="Search">
            <Search aria-hidden="true" size={18} />
          </Link>
          <Link className="icon-action hidden sm:inline-flex" href="/account" aria-label="Account">
            <UserRound aria-hidden="true" size={18} />
          </Link>
          <Link className="icon-action" href="/account/wishlist" aria-label="Wishlist">
            <Heart aria-hidden="true" size={18} />
          </Link>
          <Link className="icon-action" href="/cart" aria-label="Bag">
            <ShoppingBag aria-hidden="true" size={18} />
          </Link>
        </div>
      </Container>
    </header>
  );
}


