import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { StorefrontExperienceProvider, useStorefrontExperience } from "./storefront-experience-provider";

const image = { src: "/catalog/test.jpg", alt: "Test product", width: 800, height: 1000 };

function ExperienceHarness() {
  const experience = useStorefrontExperience();
  return (
    <div>
      <output data-testid="ready">{String(experience.experienceReady)}</output>
      <output data-testid="bag-count">{experience.bagCount}</output>
      <output data-testid="line-count">{experience.bag.length}</output>
      <output data-testid="gift">{String(experience.giftPresentation.enabled)}</output>
      <output data-testid="order-reference">{experience.lastOrder?.reference ?? "none"}</output>
      <output data-testid="order-lines">{experience.lastOrder?.items.length ?? 0}</output>
      <button type="button" onClick={() => experience.addToBag({ productId: "faris-1", productSlug: "old-money-polo", href: "/product/old-money-polo", title: "Old Money Polo", brand: "FARIS", price: "BDT 3,490", image, color: "Midnight", size: "M", quantity: 1 })}>Add FARIS</button>
      <button type="button" onClick={() => experience.addToBag({ productId: "laaj-1", productSlug: "refined-set", href: "/product/refined-set", title: "Refined Set", brand: "LAAJ", price: "BDT 5,890", image, color: "Rosewood", size: "M", quantity: 1 })}>Add LAAJ</button>
      <button type="button" onClick={() => experience.updateGiftPresentation({ enabled: true, note: "With joy" })}>Add gift</button>
      <button type="button" onClick={() => experience.completeCheckout("cod")}>Complete order</button>
    </div>
  );
}

describe("StorefrontExperienceProvider", () => {
  beforeEach(() => window.localStorage.clear());

  it("persists a shared multi-brand bag and moves it into the latest order", async () => {
    render(<StorefrontExperienceProvider><ExperienceHarness /></StorefrontExperienceProvider>);
    await waitFor(() => expect(screen.getByTestId("ready")).toHaveTextContent("true"));

    fireEvent.click(screen.getByRole("button", { name: "Add FARIS" }));
    fireEvent.click(screen.getByRole("button", { name: "Add FARIS" }));
    fireEvent.click(screen.getByRole("button", { name: "Add LAAJ" }));
    expect(screen.getByTestId("bag-count")).toHaveTextContent("3");
    expect(screen.getByTestId("line-count")).toHaveTextContent("2");

    fireEvent.click(screen.getByRole("button", { name: "Add gift" }));
    expect(screen.getByTestId("gift")).toHaveTextContent("true");

    fireEvent.click(screen.getByRole("button", { name: "Complete order" }));
    expect(screen.getByTestId("bag-count")).toHaveTextContent("0");
    expect(screen.getByTestId("order-lines")).toHaveTextContent("2");
    expect(screen.getByTestId("order-reference").textContent).toMatch(/^PS-/);
    expect(window.localStorage.getItem("porsion:bag")).toBe("[]");
    expect(window.localStorage.getItem("porsion:last-order")).toContain("old-money-polo");
    expect(window.localStorage.getItem("porsion:last-order")).toContain("refined-set");
  });
});