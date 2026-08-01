import type { ReactNode } from "react";

export type EditorialAlign = "start" | "center" | "end";
export type EditorialImageRatio = "portrait" | "square" | "wide" | "cinematic";

export type EditorialImageMedia = {
  kind?: "image";
  src: string;
  alt: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
};

export type EditorialVideoMedia = {
  kind: "video";
  src: string;
  label: string;
  poster?: string;
  type?: string;
};

export type EditorialMedia = EditorialImageMedia | EditorialVideoMedia;

export type EditorialActionSlot = ReactNode;