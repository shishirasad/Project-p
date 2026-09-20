export type BrandContext = "house" | "faris" | "laaj" | "labannya" | "campaign";

export type BrandDefinition = {
  id: BrandContext;
  name: string;
  label: string;
  href: string;
  positioning: string;
  mood: string[];
};
