import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Rating } from "./rating";

describe("Rating", () => {
  it("renders an accessible rating label", () => {
    render(<Rating value={4.5} label="Rated 4.5 out of 5" showValue />);
    expect(screen.getByRole("img", { name: "Rated 4.5 out of 5" })).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });
});
