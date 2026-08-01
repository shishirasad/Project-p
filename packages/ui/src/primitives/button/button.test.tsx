import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders an accessible button", () => {
    render(<Button>Add to Bag</Button>);
    expect(screen.getByRole("button", { name: "Add to Bag" })).toBeInTheDocument();
  });

  it("disables while loading", () => {
    render(<Button isLoading>Processing</Button>);
    expect(screen.getByRole("button", { name: "Processing" })).toBeDisabled();
  });
});
