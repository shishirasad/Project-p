"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "@porsion/ui";
import { ChevronDown, ChevronRight, Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { useStorefrontExperience } from "@/components/storefront/storefront-experience-provider";
import { primaryNavigation } from "@/config/navigation";
import type { BrandContext } from "@/types/brand";
import { cn } from "@/lib/utils/cn";

type MenuKey = "shop";

function PorsionHeaderWordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="relative block h-9 w-36 shrink-0 sm:h-11 sm:w-44" aria-hidden="true">
      <Image
        src="/brand-assets/porsion-studio-wordmark-minimal.svg"
        alt=""
        fill
        priority
        sizes="(min-width: 640px) 176px, 144px"
        className={cn("object-contain", inverse && "invert")}
      />
    </span>
  );
}
const menus: Record<MenuKey, {
  eyebrow: string;
  title: string;
  href: string;
  image: string;
  links: Array<{ label: string; href: string }>;
  discover: Array<{ label: string; href: string }>;
}> = {
  shop: {
    eyebrow: "Porsion Studio",
    title: "The Collection",
    href: "/collection",
    image: "/campaigns/house-reference/old-money-campaign.png",
    links: [
      { label: "The Collection", href: "/collection" },
      { label: "New arrivals", href: "/collection?sort=newest" },
      { label: "FARIS", href: "/collection?brand=faris" },
      { label: "LAAJ", href: "/collection?brand=laaj" }
    ],
    discover: [
      { label: "FARIS shirts", href: "/faris/shirts" },
      { label: "FARIS polos", href: "/faris/polos" },
      { label: "LAAJ dresses", href: "/collection?brand=laaj&category=dresses" },
      { label: "LAAJ abayas", href: "/collection?brand=laaj&category=abaya-burkha" }
    ]
  }
};

export type PremiumSiteHeaderProps = {
  brandContext?: BrandContext;
  overlayHero?: boolean;
};

export function PremiumSiteHeader({ brandContext = "house", overlayHero = false }: PremiumSiteHeaderProps) {
  const pathname = usePathname();
  const { wishlist, bagCount, rememberBrand } = useStorefrontExperience();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSolid = !overlayHero || scrolled || openMenu !== null || mobileOpen;
  const mobileBrandLabel = brandContext === "faris" ? "FARIS" : brandContext === "laaj" ? "LAAJ" : brandContext === "labannya" ? "LABANNYA" : "Studio";
  const mobileBrandDescription = brandContext === "faris" ? "Modern menswear | Quiet confidence" : brandContext === "laaj" ? "Refined womenswear | Modest elegance" : brandContext === "labannya" ? "Comfort-led beauty & essentials" : "The House of Timeless Fashion";

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);


  useEffect(() => {
    if (brandContext === "faris" || brandContext === "laaj" || brandContext === "labannya") rememberBrand(brandContext);
  }, [brandContext, rememberBrand]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };
  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <header
        data-brand={brandContext}
        data-solid={isSolid}
        className={cn(
          "fixed inset-x-0 top-0 z-[var(--z-nav)] transition-colors duration-200",
          isSolid ? "bg-[var(--color-background)] text-[var(--color-text)] shadow-[0_1px_0_var(--color-border)]" : "bg-transparent text-white"
        )}
      >
        <Container className="flex h-[var(--nav-height-desktop)] items-center justify-between gap-6 max-lg:h-[var(--nav-height-mobile)]">
          <div className="flex min-w-0 items-center gap-1 sm:gap-2">
            <button className={cn("icon-action shrink-0 lg:!hidden", !isSolid && "!text-white hover:!bg-white/10")} type="button" onClick={() => setMobileOpen((current) => !current)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
              {mobileOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
            <Link href="/" className="flex min-h-11 shrink-0 items-center gap-3" aria-label="Porsion Studio home">
              <PorsionHeaderWordmark inverse={!isSolid} />
              {brandContext !== "house" && brandContext !== "campaign" ? (
                <span className={cn("hidden border-l pl-3 font-serif text-base capitalize xl:inline", isSolid ? "border-[var(--color-border)]" : "border-white/35")}>{brandContext}</span>
              ) : null}
            </Link>
          </div>

          <nav className="hidden h-full items-center gap-1 lg:flex" aria-label="Primary navigation" onMouseEnter={keepOpen} onMouseLeave={scheduleClose}>
            {primaryNavigation.map((item) => {
              const menuKey: MenuKey | null = item.href === "/collection" ? "shop" : null;
              const itemPath = item.href.split("?")[0] ?? item.href;
              const active = itemPath === "/" ? pathname === "/" : pathname.startsWith(itemPath);
              if (menuKey) {
                return (
                  <button
                    key={item.href}
                    type="button"
                    className={cn("flex h-full items-center gap-1 px-4 text-[0.8125rem] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--color-accent)]", active || openMenu === menuKey ? "text-[var(--color-accent)]" : isSolid ? "text-[var(--color-text-muted)] hover:text-[var(--color-text)]" : "text-white/85 hover:text-white")}
                    aria-expanded={openMenu === menuKey}
                    aria-controls={`mega-menu-${menuKey}`}
                    onMouseEnter={() => setOpenMenu(menuKey)}
                    onFocus={() => setOpenMenu(menuKey)}
                    onClick={() => setOpenMenu(menuKey)}
                  >
                    {item.label}<ChevronDown aria-hidden="true" size={13} />
                  </button>
                );
              }
              return (
                <Link key={item.href} href={item.href} className={cn("flex h-full items-center px-4 text-[0.8125rem] font-medium transition-colors", active ? "text-[var(--color-accent)]" : isSolid ? "text-[var(--color-text-muted)] hover:text-[var(--color-text)]" : "text-white/85 hover:text-white")}>{item.label}</Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1" aria-label="Store actions">
            <Link className={cn("icon-action", !isSolid && "!text-white hover:!bg-white/10")} href={brandContext === "faris" || brandContext === "laaj" || brandContext === "labannya" ? `/search?brand=${brandContext}` : "/search"} aria-label="Search"><Search aria-hidden="true" size={18} /></Link>
            <Link className={cn("icon-action hidden md:inline-flex", !isSolid && "!text-white hover:!bg-white/10")} href="/account" aria-label="Account"><UserRound aria-hidden="true" size={18} /></Link>
            <Link className={cn("icon-action relative hidden md:inline-flex", !isSolid && "!text-white hover:!bg-white/10")} href="/account/wishlist" aria-label={`Wishlist, ${wishlist.length} items`}>
              <Heart aria-hidden="true" size={18} />
              {wishlist.length ? <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[9px] text-[var(--color-on-accent)]">{wishlist.length}</span> : null}
            </Link>
            <Link className={cn("icon-action relative", !isSolid && "!text-white hover:!bg-white/10")} href="/cart" aria-label={`Bag, ${bagCount} items`}><ShoppingBag aria-hidden="true" size={18} />{bagCount ? <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[9px] text-[var(--color-on-accent)]">{bagCount}</span> : null}</Link>
          </div>
        </Container>

        {openMenu ? (
          <DesktopMegaMenu
            menuKey={openMenu}
            onClose={() => setOpenMenu(null)}
            onMenuEnter={keepOpen}
            onMenuLeave={scheduleClose}
          />
        ) : null}
      </header>

      <Drawer
        isOpen={mobileOpen}
        onOpenChange={setMobileOpen}
        title={
          <span className="grid gap-1">
            <PorsionHeaderWordmark />
            <span className="text-[0.6875rem] font-medium uppercase text-[var(--color-accent)]">{mobileBrandLabel}</span>
          </span>
        }
        description={mobileBrandDescription}
        footer={
          <div className="flex w-full items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
            <span>Bangladesh | BDT</span>
            <span className="flex items-center gap-4">
              <Link href="/privacy" onClick={() => setMobileOpen(false)}>Privacy</Link>
              <Link href="/terms" onClick={() => setMobileOpen(false)}>Terms</Link>
            </span>
          </div>
        }
        closeLabel="Close menu"
        placement="left"
        className="w-[min(92vw,420px)]"
      >
        <nav aria-label="Mobile primary navigation" className="grid gap-1">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center justify-between border-b border-[var(--color-border)] py-2 text-base text-[var(--color-text)]">
              <span>{item.label}</span>
              <ChevronRight aria-hidden="true" size={17} className="text-[var(--color-text-muted)]" />
            </Link>
          ))}
          <p className="mt-6 text-[0.8125rem] font-medium text-[var(--color-accent)]">Your Porsion</p>
          <Link href="/account" onClick={() => setMobileOpen(false)} className="flex min-h-11 items-center justify-between py-3 text-sm text-[var(--color-text-muted)]"><span>Account</span><ChevronRight aria-hidden="true" size={15} /></Link>
          <Link href="/account/wishlist" onClick={() => setMobileOpen(false)} className="flex min-h-11 items-center justify-between py-3 text-sm text-[var(--color-text-muted)]"><span>Wishlist</span><ChevronRight aria-hidden="true" size={15} /></Link>
          <Link href="/delivery" onClick={() => setMobileOpen(false)} className="flex min-h-11 items-center justify-between py-3 text-sm text-[var(--color-text-muted)]"><span>Delivery & returns</span><ChevronRight aria-hidden="true" size={15} /></Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex min-h-11 items-center justify-between py-3 text-sm text-[var(--color-text-muted)]"><span>Contact & WhatsApp</span><ChevronRight aria-hidden="true" size={15} /></Link>
        </nav>
      </Drawer>
    </>
  );
}

function DesktopMegaMenu({
  menuKey,
  onClose,
  onMenuEnter,
  onMenuLeave
}: {
  menuKey: MenuKey;
  onClose: () => void;
  onMenuEnter: () => void;
  onMenuLeave: () => void;
}) {
  const menu = menus[menuKey];
  return (
    <div
      id={`mega-menu-${menuKey}`}
      className="absolute inset-x-0 top-full border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] shadow-xl"
      onMouseEnter={onMenuEnter}
      onMouseLeave={onMenuLeave}
    >
      <Container className="grid grid-cols-[1fr_1fr_minmax(300px,0.8fr)] gap-10 py-8">
        <div>
          <p className="text-[0.8125rem] font-medium text-[var(--color-accent)]">The Collection</p>
          <div className="mt-5 grid gap-1">
            {menu.links.map((item) => <Link key={item.href} href={item.href} onClick={onClose} className="flex min-h-11 items-center border-b border-[var(--color-border)] text-sm hover:text-[var(--color-accent)]">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="text-[0.8125rem] font-medium text-[var(--color-accent)]">Discover</p>
          <div className="mt-5 grid gap-1">
            {menu.discover.map((item) => <Link key={item.href} href={item.href} onClick={onClose} className="flex min-h-11 items-center border-b border-[var(--color-border)] text-sm hover:text-[var(--color-accent)]">{item.label}</Link>)}
          </div>
        </div>
        <Link href={menu.href} onClick={onClose} className="group relative aspect-[16/9] min-h-44 overflow-hidden bg-[var(--color-hover-surface)]">
          <Image src={menu.image} alt="" fill sizes="360px" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute inset-x-5 bottom-5 text-white">
            <span className="block text-xs font-medium text-white/75">{menu.eyebrow}</span>
            <span className="mt-2 block font-serif text-2xl leading-tight">{menu.title}</span>
          </span>
        </Link>
      </Container>
    </div>
  );
}
