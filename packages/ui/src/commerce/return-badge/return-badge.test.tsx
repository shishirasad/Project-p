import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReturnBadge } from "./return-badge";

describe("ReturnBadge", () => {
  it("renders return label and description", () => {
    render(<ReturnBadge label="Easy returns" description="Policy controlled" />);
    expect(screen.getByText("Easy returns")).toBeInTheDocument();
    expect(screen.getByText("Policy controlled")).toBeInTheDocument();
  });
});
