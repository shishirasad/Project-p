import type { ComponentProps, ReactNode } from "react";
import { GitCompare } from "lucide-react";
import { IconButton } from "../../primitives/icon-button";
import { cn } from "../../lib/cn";

export type CompareButtonProps = Omit<ComponentProps<typeof IconButton>, "ariaLabel" | "icon"> & {
  ariaLabel: string;
  isSelected?: boolean;
  icon?: ReactNode;
};

export function CompareButton({ ariaLabel, isSelected = false, icon, className, ...props }: CompareButtonProps) {
  return (
    <IconButton
      ariaLabel={ariaLabel}
      aria-pressed={isSelected}
      icon={icon ?? <GitCompare aria-hidden="true" size={17} strokeWidth={1.8} />}
      className={cn(isSelected && "border-[var(--color-accent)] text-[var(--color-accent)]", className)}
      {...props}
    />
  );
}
