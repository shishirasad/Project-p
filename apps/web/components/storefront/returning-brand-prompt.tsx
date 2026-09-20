"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useStorefrontExperience } from "./storefront-experience-provider";

export function ReturningBrandPrompt() {
  const { preferredBrand } = useStorefrontExperience();
  if (!preferredBrand) return null;
  const name = preferredBrand === "faris" ? "FARIS" : "LAAJ";

  return (
    <aside data-brand={preferredBrand} className="border-b border-[var(--color-border)] bg-[var(--color-surface)]" aria-label={`Continue with ${name}`}>
      <div className="mx-auto flex min-h-16 w-full max-w-[var(--container-max)] flex-col justify-between gap-2 px-[var(--gutter)] py-3 sm:flex-row sm:items-center">
        <p className="text-sm text-[var(--color-text)]"><span className="text-[var(--color-text-muted)]">Continue where you left off:</span> {name}</p>
        <Link href={`/${preferredBrand}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--color-accent)]">Return to {name}<ArrowRight aria-hidden="true" size={16} /></Link>
      </div>
    </aside>
  );
}
