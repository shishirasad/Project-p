import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { farisCatalogCategories, laajCatalogCategories } from "@/config/catalog";
import {
  farisRepresentativeProducts,
  masterCatalogProducts,
  storefrontProducts
} from "./catalog";

describe("expanded storefront product catalog", () => {
  it("publishes at least one product for every FARIS and LAAJ product type", () => {
    const expectedFaris = farisCatalogCategories.reduce((total, category) => total + category.productTypes.length, 0);
    const expectedLaaj = laajCatalogCategories.reduce((total, category) => total + category.productTypes.length, 0);

    expect(masterCatalogProducts.filter((product) => product.brandKey === "faris").length).toBeGreaterThanOrEqual(expectedFaris);
    expect(masterCatalogProducts.filter((product) => product.brandKey === "laaj").length).toBeGreaterThanOrEqual(expectedLaaj);
  });

  it("gives every product a working route, image and complete buying content", () => {
    for (const product of storefrontProducts) {
      expect(product.href).toBe("/product/" + product.slug);
      expect(product.image.src).toMatch(/^\//);
      expect(existsSync(resolve(process.cwd(), "public", product.image.src.slice(1)))).toBe(true);
      expect(product.image.alt.length).toBeGreaterThan(20);
      expect(product.description.length).toBeGreaterThan(60);
      expect(product.fabric.length).toBeGreaterThan(50);
      expect(product.care.length).toBeGreaterThan(50);
      expect(product.details.length).toBeGreaterThanOrEqual(4);
      expect(product.styling).toHaveLength(3);
      expect(["Warm weather", "Cool weather", "Year-round", "Occasion"]).toContain(product.season);
      expect(product.sizes.length).toBeGreaterThan(0);
    }
  });

  it("includes the locked FARIS and LAAJ signature catalog additions", () => {
    const titles = new Set(masterCatalogProducts.map((product) => product.title));

    [
      "Oxford Shirt",
      "Premium Basic T-Shirt",
      "Old Money Polo",
      "Tailored Trousers",
      "Crewneck Sweater",
      "Trench Coat",
      "Premium Panjabi",
      "Panjabi + Pajama Set",
      "Premium Kameez",
      "Three-Piece Set",
      "Everyday Kurti",
      "Long Kimono",
      "Premium Hijab"
    ].forEach((title) => expect(titles.has(title)).toBe(true));
  });

  it("prepares one separate representative product for every FARIS category", () => {
    expect(farisRepresentativeProducts).toHaveLength(farisCatalogCategories.length);
    expect(new Set(farisRepresentativeProducts.map((product) => product.categoryKey)).size).toBe(farisCatalogCategories.length);

    for (const product of farisRepresentativeProducts) {
      const category = farisCatalogCategories.find((candidate) => candidate.key === product.categoryKey);
      expect(category).toBeDefined();
      expect(Object.values(category!.assets)).not.toContain(product.image.src);
      expect(existsSync(resolve(process.cwd(), "public", product.image.src.slice(1)))).toBe(true);
    }
  });

  it("publishes every current FARIS product type while retaining backend-ready status controls", () => {
    const visibleFaris = storefrontProducts.filter((product) => product.brandKey === "faris");
    const expectedProductCount = farisCatalogCategories.reduce((total, category) => total + category.productTypes.length, 0);
    expect(visibleFaris).toHaveLength(expectedProductCount);
    expect(new Set(visibleFaris.map((product) => product.categoryKey))).toEqual(new Set(farisCatalogCategories.map((category) => category.key)));
    expect(visibleFaris.every((product) => product.publication.status === "active")).toBe(true);
    expect(farisRepresentativeProducts.filter((product) => product.publication.status === "inactive")).toHaveLength(0);
  });

  it("excludes all suiting products from the FARIS master catalog", () => {
    const farisTitles = masterCatalogProducts.filter((product) => product.brandKey === "faris").map((product) => product.title).join(" ").toLowerCase();
    ["blazer", "suit jacket", "waistcoat", "suiting"].forEach((term) => expect(farisTitles).not.toContain(term));
  });

  it("keeps every slug and id unique", () => {
    expect(new Set(masterCatalogProducts.map((product) => product.slug)).size).toBe(masterCatalogProducts.length);
    expect(new Set(masterCatalogProducts.map((product) => product.id)).size).toBe(masterCatalogProducts.length);
    expect(new Set(storefrontProducts.map((product) => product.slug)).size).toBe(storefrontProducts.length);
  });
});
