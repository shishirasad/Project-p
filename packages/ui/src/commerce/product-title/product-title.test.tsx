import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductTitle } from "./product-title";

describe("ProductTitle", () => {
  it("renders the configured heading level", () => {
    render(<ProductTitle as="h2" eyebrow="Faris" subtitle="Cotton">Polo</ProductTitle>);
    expect(screen.getByRole("heading", { level: 2, name: "Polo" })).toBeInTheDocument();
    expect(screen.getByText("Faris")).toBeInTheDocument();
  });
});
