import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Heading, Link, Section, Text } from "@porsion/ui";

export type BrandCategoryDirectoryItem = {
  key: string;
  label: string;
  href: string;
  available: boolean;
  image: {
    src: string;
    alt: string;
  };
};

export type BrandCategoryDirectoryProps = {
  id: string;
  brandName: string;
  description: string;
  allHref: string;
  items: ReadonlyArray<BrandCategoryDirectoryItem>;
};

export function BrandCategoryDirectory({
  id,
  brandName,
  description,
  allHref,
  items
}: BrandCategoryDirectoryProps) {
  const titleId = id + "-title";

  return (
    <Section id={id} aria-labelledby={titleId} className="bg-[var(--color-surface)]">
      <Container className="grid gap-8 md:gap-10">
        <header className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="grid max-w-2xl gap-3">
            <Text as="p" size="sm" className="uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {brandName} wardrobe
            </Text>
            <Heading id={titleId} size="md">Shop by category.</Heading>
            <Text tone="muted">{description}</Text>
          </div>
          <Link href={allHref} variant="underline" className="w-fit">
            View all {brandName}
          </Link>
        </header>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-5 lg:gap-x-5">
          {items.map((item) => (
            item.available ? (
              <Link
                key={item.key}
                href={item.href}
                className="group grid min-w-0 gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                <span className="relative block aspect-[4/5] overflow-hidden bg-[var(--color-hover-surface)]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </span>
                <span className="flex min-h-11 items-center justify-between gap-3 border-b border-[var(--color-border)] pb-2 text-base font-medium">
                  <span>{item.label}</span>
                  <ArrowRight aria-hidden="true" size={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ) : (
              <div key={item.key} className="grid min-w-0 gap-3 opacity-65">
                <span className="relative block aspect-[4/5] overflow-hidden bg-[var(--color-hover-surface)]">
                  <Image
                    src={item.image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </span>
                <span className="flex min-h-11 items-center justify-between gap-3 border-b border-[var(--color-border)] pb-2 text-sm">
                  <span>{item.label}</span>
                  <span className="text-xs uppercase tracking-[0.1em]">Soon</span>
                </span>
              </div>
            )
          ))}
        </div>
      </Container>
    </Section>
  );
}