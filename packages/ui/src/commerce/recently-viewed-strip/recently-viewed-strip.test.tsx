import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RecentlyViewedStrip } from "./recently-viewed-strip";

describe("RecentlyViewedStrip", () => {
  it("reuses the carousel contract", () => {
    render(<RecentlyViewedStrip title="Recently viewed" ariaLabel="Recently viewed products" previousLabel="Previous" nextLabel="Next" items={[<span key="item">Viewed item</span>]} />);
    expect(screen.getByRole("region", { name: "Recently viewed products" })).toBeInTheDocument();
    expect(screen.getByText("Viewed item")).toBeInTheDocument();
  });
});
