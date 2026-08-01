import type { ComponentProps, ReactNode } from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "../../primitives/button";

export type AddToBagButtonProps = Omit<ComponentProps<typeof Button>, "children" | "leftIcon"> & {
  label: string;
  icon?: ReactNode;
};

export function AddToBagButton({ label, icon = <ShoppingBag aria-hidden="true" size={16} strokeWidth={1.8} />, ...props }: AddToBagButtonProps) {
  return <Button leftIcon={icon} {...props}>{label}</Button>;
}
