import { Link } from "../primitives/link";
import type { FooterLayoutColumn } from "./types";

export const footerColumns: FooterLayoutColumn[] = [
  {
    title: "House",
    links: [
      { href: "#collection", label: "The Collection" },
      { href: "#journal", label: "The Journal" }
    ]
  },
  {
    title: "Brands",
    links: [
      { href: "#faris", label: "Faris" },
      { href: "#laaj", label: "Laaj" }
    ]
  },
  {
    title: "Care",
    links: [
      { href: "#delivery", label: "Delivery" },
      { href: "#returns", label: "Returns" }
    ]
  }
];

export const sampleHeader = <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--gutter)] py-4 text-sm uppercase tracking-[0.18em] text-[var(--color-text)]">Porsion Studio</div>;
export const sampleFooterBrand = <div className="text-lg font-medium uppercase tracking-[0.18em] text-[var(--color-text)]">Porsion Studio</div>;
export const sampleSocial = <div className="flex gap-3"><Link href="#instagram" variant="subtle">Instagram</Link><Link href="#facebook" variant="subtle">Facebook</Link></div>;