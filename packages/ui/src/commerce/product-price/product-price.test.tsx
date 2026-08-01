import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductPrice } from "./product-price";

describe("ProductPrice", () => {
  it("renders current and compare-at prices without calculating them", () => {
    render(<ProductPrice price="BDT 2,490" compareAtPrice="BDT 2,950" />);
    expect(screen.getByText("BDT 2,490")).toBeInTheDocument();
    expect(screen.getByText("BDT 2,950")).toBeInTheDocument();
  });
});
