import type { ReactNode } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Container } from "@porsion/ui";
import { CookieSettingsButton } from "@/components/storefront/global-experience-surfaces";
import { businessProfile } from "@/config/business";

export const storefrontPrimaryAction = "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 text-sm font-medium !text-[var(--color-on-accent)] transition hover:!text-[var(--color-on-accent)] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";
export const storefrontSecondaryAction = "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-5 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";

type FooterLink = {
  label: string;
  href: string;
};

const footerSections: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Customer Care",
    links: [
      { label: "Help Center", href: "/contact?topic=help" },
      { label: "How to Buy", href: "/delivery" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "CCMS", href: "https://ccms.gov.bd/ticket-apply" }
    ]
  },
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Flash Sale", href: "/shop#flash-sale" },
      { label: "Just For You", href: "/shop#just-for-you" },
      { label: "Beauty & Cosmetics", href: "/search?q=beauty" },
      { label: "Perfume", href: "/search?q=perfume" },
      { label: "Gift Sets", href: "/search?q=gift" }
    ]
  },
  {
    title: "Brands",
    links: [
      { label: "FARIS Menswear", href: "/faris" },
      { label: "LAAJ Womenswear", href: "/laaj" },
      { label: "LABANNYA Innerwear", href: "/labannya" },
      { label: "New Arrivals", href: "/collection?sort=newest" },
      { label: "Best Sellers", href: "/search?q=best-seller" },
      { label: "Under 999", href: "/search?q=under-999" }
    ]
  },
  {
    title: "Porsion",
    links: [
      { label: "The House", href: "/the-house" },
      { label: "Journal", href: "/journal" },
      { label: "Digital Payments", href: "/terms#payment" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Sell on Porsion", href: "/contact?topic=seller" },
      { label: "Trade & Wholesale", href: "/contact?topic=partner" }
    ]
  }
];

const serviceCards = [
  { title: "Secure payment", body: "COD, cards, bKash, Nagad and Rocket-ready checkout." },
  { title: "Human support", body: "Size, delivery, return and order questions handled with care." },
  { title: "One shopping house", body: "FARIS, LAAJ, LABANNYA, beauty and useful goods in one place." }
] as const;

const paymentMethods = ["COD", "Visa", "Mastercard", "Amex", "bKash", "Nagad", "Rocket", "Bank Transfer"] as const;
const appStores = ["iOS", "Android", "Huawei"] as const;
const quickCategories = ["Men", "Women", "Innerwear", "Beauty", "Cosmetics", "Perfume", "Accessories", "Gift"] as const;

function FooterAnchor({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const baseClass = className ?? "inline-flex min-h-9 items-center text-sm leading-5 text-white/62 transition hover:text-[#ef8b41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]";

  if (href.startsWith("http")) {
    return <a href={href} target="_blank" rel="noreferrer" className={baseClass}>{children}</a>;
  }

  return <NextLink href={href} className={baseClass}>{children}</NextLink>;
}

export function storefrontFooter() {
  const legal = businessProfile.dbidNumber
    ? `2026 Porsion Studio. All rights reserved. DBID ${businessProfile.dbidNumber}`
    : "2026 Porsion Studio. All rights reserved.";

  return (
    <footer
      data-brand="campaign"
      aria-label="Porsion Studio footer"
      className="border-t border-white/10 bg-[#131313] pb-28 text-white lg:pb-0"
    >
      <Container className="grid gap-10 py-12 md:gap-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.35fr] lg:gap-14">
          <div className="grid content-start gap-7">
            <NextLink href="/" aria-label="Porsion Studio home" className="relative block h-[60px] w-[244px] max-w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]">
              <Image src="/brand-assets/porsion-studio-wordmark-minimal.svg" alt="" fill sizes="244px" className="object-contain invert" />
            </NextLink>

            <div className="grid gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ef8b41]">Midnight editorial commerce</p>
              <p className="max-w-[11ch] font-serif text-[clamp(2.35rem,6vw,5.4rem)] leading-[0.92] tracking-[-0.04em] text-white">Happy shopping with Porsion.</p>
              <p className="max-w-[46ch] text-sm leading-6 text-white/62">A premium shopping destination for beauty, perfume and fashion—built around FARIS, LAAJ and LABANNYA, with clarity before purchase and care after delivery.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <NextLink href="/shop" className="inline-flex min-h-11 items-center justify-center bg-[#ef8b41] px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#131313] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]">Shop now</NextLink>
              <NextLink href="/contact" className="inline-flex min-h-11 items-center justify-center border border-white/16 px-5 text-sm font-semibold uppercase tracking-[0.14em] text-white/76 transition hover:border-[#ef8b41] hover:text-[#ef8b41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]">Get help</NextLink>
            </div>
          </div>

          <div className="grid content-start gap-6">
            <div className="grid gap-3 sm:grid-cols-3">
              {serviceCards.map((card) => (
                <div key={card.title} className="grid gap-3 border border-white/10 bg-white/[0.025] p-4 transition hover:border-[#ef8b41]/60 hover:bg-[#ef8b41]/[0.06]">
                  <span className="h-px w-10 bg-[#ef8b41]" />
                  <div className="grid gap-1.5">
                    <p className="font-serif text-xl leading-tight text-white">{card.title}</p>
                    <p className="text-xs leading-5 text-white/56">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-7 gap-y-9 border-y border-white/10 py-7 md:grid-cols-4">
              {footerSections.map((section) => (
                <div key={section.title} className="grid content-start gap-3">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef8b41]">{section.title}</h3>
                  <ul className="grid gap-1">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <FooterAnchor href={link.href}>{link.label}</FooterAnchor>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="grid gap-5 xl:grid-cols-[1fr_1.25fr] xl:items-start">
              <div className="grid gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef8b41]">Download App</p>
                <div className="flex flex-wrap gap-2">
                  {appStores.map((store) => (
                    <FooterAnchor key={store} href="/contact?topic=app" className="inline-flex min-h-10 items-center border border-white/14 bg-white/[0.03] px-4 text-xs font-semibold uppercase tracking-[0.13em] text-white/70 transition hover:border-[#ef8b41] hover:bg-[#ef8b41] hover:text-[#131313] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]">{store}</FooterAnchor>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef8b41]">Payment Methods</p>
                <div className="flex flex-wrap gap-2">
                  {paymentMethods.map((method) => (
                    <span key={method} className="inline-flex min-h-9 items-center border border-white/12 bg-white/[0.03] px-3 text-[11px] font-medium uppercase tracking-[0.1em] text-white/60">{method}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border border-white/10 bg-black/18 p-4 md:grid-cols-[1fr_auto] md:items-center">
          <div className="grid gap-2">
            <p className="text-xs leading-5 text-white/55">Verified by Porsion Studio. DBID Registration ID: {businessProfile.dbidNumber ?? "Pending"}</p>
            <div className="flex flex-wrap gap-2">
              {quickCategories.map((category) => (
                <FooterAnchor key={category} href={`/search?q=${category.toLowerCase()}`} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/52 transition hover:border-[#ef8b41] hover:text-[#ef8b41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]">{category}</FooterAnchor>
              ))}
            </div>
          </div>

          {(businessProfile.social.facebook || businessProfile.social.instagram) ? (
            <div className="flex flex-wrap gap-4 md:justify-end">
              {businessProfile.social.facebook ? <FooterAnchor href={businessProfile.social.facebook}>Facebook</FooterAnchor> : null}
              {businessProfile.social.instagram ? <FooterAnchor href={businessProfile.social.instagram}>Instagram</FooterAnchor> : null}
            </div>
          ) : null}
        </div>

        <div className="grid gap-3 border-t border-white/10 pt-5 text-xs leading-5 text-white/48 md:grid-cols-[1fr_auto] md:items-center">
          <span>{legal}</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 [&_button]:text-white/52 [&_button:hover]:text-[#ef8b41]">
            <FooterAnchor href="/terms" className="text-white/52 transition hover:text-[#ef8b41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]">Terms</FooterAnchor>
            <FooterAnchor href="/privacy" className="text-white/52 transition hover:text-[#ef8b41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]">Privacy</FooterAnchor>
            <FooterAnchor href="/returns" className="text-white/52 transition hover:text-[#ef8b41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef8b41]">Returns</FooterAnchor>
            <CookieSettingsButton />
          </div>
        </div>
      </Container>
    </footer>
  );
}
export function productStructuredData(product: {
  title: ReactNode;
  description: string;
  image: { src: string };
  price: ReactNode;
  href?: string;
  brand?: ReactNode;
  category?: string;
  fabric?: string;
  season?: string;
}, siteUrl: string) {
  const url = product.href ? `${siteUrl}${product.href}` : siteUrl;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: String(product.title),
    description: product.description,
    image: `${siteUrl}${product.image.src}`,
    url,
    ...(product.brand ? { brand: { "@type": "Brand", name: String(product.brand) } } : {}),
    ...(product.category ? { category: product.category } : {}),
    ...(product.fabric ? { material: product.fabric } : {}),
    ...(product.season ? {
      additionalProperty: [{
        "@type": "PropertyValue",
        name: "Season",
        value: product.season
      }]
    } : {}),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "BDT",
      price: String(product.price).replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };
}
