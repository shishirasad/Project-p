import { describe, expect, it } from "vitest";
import {
  farisCatalogCategories,
  getCatalogPublication,
  getVisibleCatalogCategories,
  laajCatalogCategories
} from "./catalog";

describe("storefront catalog configuration", () => {
  it("keeps the locked ten-category FARIS catalog without suiting", () => {
    expect(farisCatalogCategories).toHaveLength(10);
    expect(farisCatalogCategories.map((category) => category.key)).toEqual([
      "shirts",
      "t-shirts",
      "polos",
      "trousers",
      "knitwear",
      "outerwear",
      "traditional",
      "shorts",
      "accessories",
      "footwear"
    ]);

    const productTypes = farisCatalogCategories.flatMap((category) => category.productTypes).join(" ").toLowerCase();
    ["blazer", "suit jacket", "waistcoat", "suiting"].forEach((term) => expect(productTypes).not.toContain(term));
  });

  it("stores complete FARIS category metadata with all current categories active", () => {
    expect(farisCatalogCategories.filter((category) => category.isActive).map((category) => category.key)).toEqual([
      "shirts",
      "t-shirts",
      "polos",
      "trousers",
      "knitwear",
      "outerwear",
      "traditional",
      "shorts",
      "accessories",
      "footwear"
    ]);

    expect(farisCatalogCategories.map((category) => category.slug)).toEqual([
      "shirts",
      "t-shirts",
      "polos",
      "trousers",
      "knitwear",
      "outerwear",
      "panjabi",
      "shorts",
      "accessories",
      "footwear"
    ]);

    for (const category of farisCatalogCategories) {
      expect(category.shortDescription.length).toBeGreaterThan(30);
      expect(category.editorialDescription.length).toBeGreaterThan(70);
      expect(category.seo.title.length).toBeGreaterThan(20);
      expect(category.seo.description.length).toBeGreaterThan(50);
      expect(category.assets.hero).not.toContain("/catalog/products/");
      expect(category.gender).toBe("Men");
      expect(category.productTypes.length).toBeGreaterThan(0);
    }
  });

  it("keeps the complete LAAJ modest fashion and lifestyle catalog", () => {
    expect(laajCatalogCategories).toHaveLength(18);
    expect(laajCatalogCategories.map((category) => category.key)).toEqual(expect.arrayContaining([
      "abaya-burkha",
      "kameez-salwar",
      "outerwear",
      "dupatta-hijab",
      "inner-basics",
      "occasion",
      "footwear"
    ]));
  });

  it("separates website visibility from sale availability", () => {
    const liveCategories = new Set(["dresses", "modest-sets"]);
    expect(getCatalogPublication("laaj", "dresses", { activeCategoryKeys: liveCategories })).toMatchObject({ visible: true, saleEnabled: true, status: "live" });
    expect(getCatalogPublication("laaj", "abaya-burkha")).toMatchObject({ visible: false, saleEnabled: false, status: "coming-soon" });
    expect(getCatalogPublication("laaj", "footwear")).toMatchObject({ visible: false, saleEnabled: false, status: "future" });
  });

  it("automatically reveals a category when its first published product is added", () => {
    const visibleCategories = getVisibleCatalogCategories("laaj", {
      activeCategoryKeys: new Set(["abaya-burkha"])
    });

    expect(visibleCategories.map((category) => category.key)).toEqual(["abaya-burkha"]);
  });

  it("allows a panel override to hide a live category without removing it from the master catalog", () => {
    const visibleCategories = getVisibleCatalogCategories("laaj", {
      activeCategoryKeys: new Set(["dresses"]),
      overrides: { laaj: { dresses: { visible: false } } }
    });

    expect(visibleCategories.some((category) => category.key === "dresses")).toBe(false);
    expect(laajCatalogCategories.some((category) => category.key === "dresses")).toBe(true);
  });
});
