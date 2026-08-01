import type { ReactNode } from "react";
import { buildSiteMetadata } from "@/lib/seo/metadata";
import "./globals.css";

export const metadata = buildSiteMetadata("house");

export type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-brand="house">
      <body>{children}</body>
    </html>
  );
}
