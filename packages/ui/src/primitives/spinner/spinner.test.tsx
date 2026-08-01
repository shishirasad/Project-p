import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("has a status label", () => {
    render(<Spinner label="Loading products" />);
    expect(screen.getByRole("status", { name: "Loading products" })).toBeInTheDocument();
  });
});
