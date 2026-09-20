import { describe, expect, it } from "vitest";
import { storefrontProducts } from "./catalog";
import { formatMeasurement, recommendProductSize } from "./fit";

const guide = storefrontProducts[0]!.sizeGuide;

describe("storefront fit helpers", () => {
  it("uses the key body measurement as the strongest size signal", () => {
    expect(recommendProductSize(guide, { primaryMeasurement: 98, preference: "regular" })).toMatchObject({
      size: "M",
      source: "measurement"
    });
  });

  it("moves one size up when a relaxed fit is requested", () => {
    expect(recommendProductSize(guide, { primaryMeasurement: 98, preference: "relaxed" })?.size).toBe("L");
  });

  it("offers a height and weight fallback without presenting it as a measurement match", () => {
    expect(recommendProductSize(guide, { height: 175, weight: 72, preference: "regular" })).toMatchObject({
      size: "M",
      source: "height-weight"
    });
  });

  it("formats measurement ranges in centimetres and inches", () => {
    expect(formatMeasurement([88, 94], "cm")).toBe("88-94");
    expect(formatMeasurement([88, 94], "in")).toBe("34.6-37.0");
  });
});
