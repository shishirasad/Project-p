import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../../primitives/button";
import { Tooltip } from "./tooltip";

describe("Tooltip", () => {
  it("opens on focus", () => {
    render(<Tooltip trigger={<Button>Details</Button>} content="Short help" />);
    fireEvent.focus(screen.getByRole("button", { name: "Details" }));
    expect(screen.getByRole("tooltip")).toHaveTextContent("Short help");
  });
});