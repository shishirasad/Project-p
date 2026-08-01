import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StockIndicator } from "./stock-indicator";

describe("StockIndicator", () => {
  it("renders stock copy from props", () => {
    render(<StockIndicator label="In stock" tone="success" />);
    expect(screen.getByText("In stock")).toBeInTheDocument();
  });
});
