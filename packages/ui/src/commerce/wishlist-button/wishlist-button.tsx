import type { ComponentProps, ReactNode } from "react";
import { Heart } from "lucide-react";
import { IconButton } from "../../primitives/icon-button";
import { cn } from "../../lib/cn";

export type WishlistButtonProps = Omit<ComponentProps<typeof IconButton>, "ariaLabel" | "icon"> & {
  ariaLabel: string;
  isSelected?: boolean;
  icon?: ReactNode;
};

export function WishlistButton({ ariaLabel, isSelected = false, icon, className, ...props }: WishlistButtonProps) {
  return (
    <IconButton
      ariaLabel={ariaLabel}
      aria-pressed={isSelected}
      icon={icon ?? <Heart aria-hidden="true" size={17} strokeWidth={1.8} fill={isSelected ? "currentColor" : "none"} />}
      className={cn(isSelected && "border-[var(--color-accent)] text-[var(--color-accent)]", className)}
      {...props}
    />
  );
}
