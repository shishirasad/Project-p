import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OTPInput } from "./otp-input";

describe("OTPInput", () => {
  it("uses one-time-code autocomplete and numeric keyboard", () => {
    render(<OTPInput label="Verification code" length={4} />);
    const input = screen.getByLabelText("Verification code");
    expect(input).toHaveAttribute("autocomplete", "one-time-code");
    expect(input).toHaveAttribute("inputmode", "numeric");
    expect(input).toHaveAttribute("maxlength", "4");
  });
});