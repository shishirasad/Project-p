import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DeliveryBadge } from "./delivery-badge";

describe("DeliveryBadge", () => {
  it("renders delivery label and description", () => {
    render(<DeliveryBadge label="Dhaka delivery" description="Estimated within 2-3 business days" />);
    expect(screen.getByText("Dhaka delivery")).toBeInTheDocument();
    expect(screen.getByText("Estimated within 2-3 business days")).toBeInTheDocument();
  });
});
