import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { QuoteBlock } from "./quote-block";

describe("QuoteBlock", () => {
  it("renders quote and cite", () => {
    render(<QuoteBlock quote="Luxury is quiet." cite="Porsion Studio" />);
    expect(screen.getByText("Luxury is quiet.")).toBeInTheDocument();
    expect(screen.getByText("Porsion Studio")).toBeInTheDocument();
  });
});