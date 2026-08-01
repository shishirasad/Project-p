import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Heading } from "./heading";

describe("Heading", () => {
  it("renders a heading", () => {
    render(<Heading as="h1">Porsion Studio</Heading>);
    expect(screen.getByRole("heading", { name: "Porsion Studio" })).toBeInTheDocument();
  });
});
