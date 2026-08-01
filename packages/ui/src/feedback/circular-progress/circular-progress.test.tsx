import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CircularProgress } from "./circular-progress";

describe("CircularProgress", () => {
  it("exposes progress semantics", () => {
    render(<CircularProgress label="Processing" value={70} />);
    expect(screen.getByRole("progressbar", { name: "Processing" })).toHaveAttribute("aria-valuenow", "70");
  });
});