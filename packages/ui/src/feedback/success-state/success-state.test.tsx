import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SuccessState } from "./success-state";

describe("SuccessState", () => {
  it("announces success state", () => {
    render(<SuccessState title="Saved" description="Ready" />);
    expect(screen.getByRole("status")).toHaveTextContent("Saved");
  });
});