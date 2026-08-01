import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReviewSummary } from "./review-summary";

describe("ReviewSummary", () => {
  it("renders rating and review label", () => {
    render(<ReviewSummary rating={4.7} ratingLabel="Rated 4.7 out of 5" reviewLabel="128 reviews" />);
    expect(screen.getByRole("img", { name: "Rated 4.7 out of 5" })).toBeInTheDocument();
    expect(screen.getByText("128 reviews")).toBeInTheDocument();
  });
});
