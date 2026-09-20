import type { ReactNode } from "react";

export type CommerceSize = "sm" | "md" | "lg";
export type CommerceTone = "neutral" | "accent" | "success" | "warning" | "error";
export type CommerceImageRatio = "portrait" | "square" | "wide";
export type CommerceImageFit = "cover" | "contain";
export type ProductCardVariant = "standard" | "compact" | "editorial";

export type CommerceImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  position?: string;
  srcSet?: string;
  sizes?: string;
  placeholder?: ReactNode;
};

export type CommerceOption = {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
};

export type ColorSwatchOption = CommerceOption & {
  color: string;
};

export type SizeOption = CommerceOption & {
  shortLabel?: ReactNode;
};

export type ProductCardProduct = {
  id: string;
  href?: string;
  image: CommerceImage;
  title: ReactNode;
  subtitle?: ReactNode;
  brand?: ReactNode;
  price: ReactNode;
  compareAtPrice?: ReactNode;
  badges?: ReactNode[];
  status?: ReactNode;
};
