import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base"
};

export function Avatar({ className, src, alt = "Avatar", initials, size = "md", ...props }: AvatarProps) {
  return (
    <div
      className={cn("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-hover-surface)] text-[var(--color-text)]", sizeClasses[size], className)}
      {...props}
    >
      {src ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : <span aria-hidden={!initials}>{initials ?? "PS"}</span>}
    </div>
  );
}
