"use client";

import { useState } from "react";
import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@porsion/ui";
import { useStorefrontExperience } from "./storefront-experience-provider";

type Audience = "house" | "faris" | "laaj" | "labannya";
type Moment = "everyday" | "work" | "occasion";

const recommendations: Record<Audience, Record<Moment, { eyebrow: string; title: string; href: string }>> = {
  faris: {
    everyday: { eyebrow: "FARIS everyday", title: "Begin with the Old Money Polo.", href: "/product/old-money-polo" },
    work: { eyebrow: "FARIS workwear", title: "Start with clean tailoring.", href: "/product/tailored-trouser" },
    occasion: { eyebrow: "FARIS occasion", title: "Build a considered evening edit.", href: "/collection?brand=faris" }
  },
  laaj: {
    everyday: { eyebrow: "LAAJ everyday", title: "Begin with an easy drape.", href: "/product/everyday-drape" },
    work: { eyebrow: "LAAJ workwear", title: "Choose a refined set.", href: "/product/refined-set" },
    occasion: { eyebrow: "LAAJ occasion", title: "Let colour and silhouette lead.", href: "/collection?brand=laaj" }
  },
  labannya: {
    everyday: { eyebrow: "LABANNYA daily", title: "Begin with comfort-led essentials.", href: "/collection?brand=labannya" },
    work: { eyebrow: "LABANNYA care", title: "Build an easy beauty routine.", href: "/collection?brand=labannya" },
    occasion: { eyebrow: "LABANNYA glow", title: "Add softness and polish to the moment.", href: "/collection?brand=labannya" }
  },
  house: {
    everyday: { eyebrow: "Everyday wardrobe", title: "Start with pieces you can repeat.", href: "/collection" },
    work: { eyebrow: "Work wardrobe", title: "Find structure without stiffness.", href: "/collection?sort=newest" },
    occasion: { eyebrow: "Occasion wardrobe", title: "Dress with presence, not noise.", href: "/collection" }
  }
};

const optionClassName = "min-h-11 border-r border-[var(--color-border)] px-3 text-[0.8125rem] font-medium text-[var(--color-text-muted)] transition-colors last:border-r-0 hover:bg-[var(--color-hover-surface)] aria-pressed:bg-[var(--color-text)] aria-pressed:text-[var(--color-background)]";

export function WardrobeFinder() {
  const [audience, setAudience] = useState<Audience>("house");
  const [moment, setMoment] = useState<Moment>("everyday");
  const { rememberBrand } = useStorefrontExperience();
  const recommendation = recommendations[audience][moment];

  function chooseAudience(nextAudience: Audience) {
    setAudience(nextAudience);
    if (nextAudience !== "house") rememberBrand(nextAudience);
  }

  return (
    <section
      data-brand={audience === "house" ? undefined : audience}
      aria-labelledby="wardrobe-finder-title"
      className="border-y border-[var(--color-border)] bg-[var(--color-background)] py-5 transition-colors md:py-6"
    >
      <Container className="grid gap-5 lg:grid-cols-[minmax(11rem,0.55fr)_minmax(28rem,1.35fr)_minmax(15rem,0.8fr)] lg:items-center">
        <header className="grid gap-1">
          <p className="text-[0.8125rem] font-medium text-[var(--color-text-muted)]">Wardrobe finder</p>
          <h2 id="wardrobe-finder-title" className="font-serif text-2xl leading-tight text-[var(--color-text)]">Find your starting point.</h2>
        </header>

        <div className="grid gap-3 sm:grid-cols-2">
          <fieldset className="grid gap-1.5">
            <legend className="text-[0.8125rem] font-medium text-[var(--color-text)]">Wardrobe</legend>
            <div className="grid grid-cols-3 border border-[var(--color-border)]">
              {(["house", "faris", "laaj", "labannya"] as const).map((option) => (
                <button key={option} type="button" aria-pressed={audience === option} className={optionClassName} onClick={() => chooseAudience(option)}>
                  {option === "house" ? "Both" : option === "faris" ? "Men" : option === "laaj" ? "Women" : "Care"}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="grid gap-1.5">
            <legend className="text-[0.8125rem] font-medium text-[var(--color-text)]">Moment</legend>
            <div className="grid grid-cols-3 border border-[var(--color-border)]">
              {(["everyday", "work", "occasion"] as const).map((option) => (
                <button key={option} type="button" aria-pressed={moment === option} className={optionClassName} onClick={() => setMoment(option)}>
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="flex min-w-0 items-center justify-between gap-4 border-t border-[var(--color-border)] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0" aria-live="polite">
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-[var(--color-text-muted)]">{recommendation.eyebrow}</p>
            <p className="mt-1 text-pretty text-sm font-medium leading-6 text-[var(--color-text)]">{recommendation.title}</p>
          </div>
          <NextLink
            href={recommendation.href}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            onClick={() => { if (audience !== "house") rememberBrand(audience); }}
          >
            Explore <ArrowRight aria-hidden="true" size={16} />
          </NextLink>
        </div>
      </Container>
    </section>
  );
}
