import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GiftCardInput } from "./gift-card-input";

describe("GiftCardInput", () => {
  it("renders with an accessible label", () => {
    render(<GiftCardInput label="Gift card code" />);
    expect(screen.getByLabelText("Gift card code")).toBeInTheDocument();
  });
});