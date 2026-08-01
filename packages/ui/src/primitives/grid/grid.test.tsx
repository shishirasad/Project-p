import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Grid } from "./grid";

describe("Grid", () => {
  it("renders grid children", () => {
    render(<Grid><span>Cell</span></Grid>);
    expect(screen.getByText("Cell")).toBeInTheDocument();
  });
});
