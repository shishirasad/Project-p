import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type LogoProps = HTMLAttributes<HTMLAnchorElement | HTMLDivElement> & {
  href?: string;
  markSrc?: string;
  label?: string;
  variant?: "mark" | "lockup";
};

export function Logo({ className, href, markSrc = "/brand-assets/porsion-studio-round-lockup.png", label = "Porsion Studio", variant = "lockup", ...props }: LogoProps) {
  const content = (
    <>
      <img src={markSrc} alt="" aria-hidden="true" className="h-9 w-9 rounded-full object-cover" />
      {variant === "lockup" ? <span className="text-sm font-medium uppercase tracking-[0.32em] text-[var(--color-text)]">Porsion</span> : null}
    </>
  );

  const classes = cn("inline-flex min-h-11 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]", className);

  if (href) {
    return (
      <a href={href} aria-label={label} className={classes} {...(props as HTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <div aria-label={label} className={classes} {...(props as HTMLAttributes<HTMLDivElement>)}>
      {content}
    </div>
  );
}

