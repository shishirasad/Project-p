import type { ReactNode } from "react";
import { buildSiteMetadata } from "@/lib/seo/metadata";
import { GlobalExperienceSurfaces } from "@/components/storefront/global-experience-surfaces";
import { StorefrontExperienceProvider } from "@/components/storefront/storefront-experience-provider";
import "./globals.css";
import "./experience.css";

export const metadata = buildSiteMetadata("house");

export type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-BD" data-brand="house">
      <body>
        <StorefrontExperienceProvider>
          {children}
          <GlobalExperienceSurfaces />
        </StorefrontExperienceProvider>
      </body>
    </html>
  );
}
