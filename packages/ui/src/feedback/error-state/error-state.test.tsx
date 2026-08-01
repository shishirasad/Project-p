import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ErrorState } from "./error-state";

describe("ErrorState", () => {
  it("announces error state", () => {
    render(<ErrorState title="Unable to load" description="Try again" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Unable to load");
  });
});