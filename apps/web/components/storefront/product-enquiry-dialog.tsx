"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button, Modal, Textarea } from "@porsion/ui";
import { businessProfile } from "@/config/business";
import type { StorefrontProductCard } from "@/lib/storefront/catalog";

const enquiryTopics = ["Size & fit", "Fabric & care", "Delivery", "Styling"] as const;

export function ProductEnquiryDialog({
  product,
  isOpen,
  onOpenChange,
  selectedColor,
  selectedSize
}: {
  product: StorefrontProductCard;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  selectedColor?: string;
  selectedSize?: string;
}) {
  const [topic, setTopic] = useState<(typeof enquiryTopics)[number]>("Size & fit");
  const [question, setQuestion] = useState("");
  const whatsappNumber = (businessProfile.whatsapp ?? businessProfile.phone)?.replace(/\D/g, "");
  const selectedColorLabel = product.colors.find((option) => option.value === selectedColor)?.label ?? selectedColor;

  function continueEnquiry() {
    if (!whatsappNumber) return;

    const productPath = product.href ?? `/product/${product.slug}`;
    const productUrl = `${window.location.origin}${productPath}`;
    const message = [
      "Hello Porsion Studio, I would like some help with this piece.",
      `Brand: ${String(product.brand)}`,
      `Product: ${String(product.title)}`,
      `Price: ${product.price}`,
      selectedColorLabel ? `Colour: ${selectedColorLabel}` : undefined,
      selectedSize ? `Size: ${selectedSize}` : undefined,
      `Topic: ${topic}`,
      question.trim() ? `Question: ${question.trim()}` : undefined,
      `Link: ${productUrl}`
    ].filter(Boolean).join("\n");

    const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={`Ask about ${String(product.title)}`}
      description="Ask privately before you decide."
      closeLabel="Close product question"
      size="sm"
      className="gap-3 p-4 sm:p-5"
      footer={
        <Button
          type="button"
          className="w-full"
          leftIcon={<MessageCircle aria-hidden="true" size={17} />}
          onClick={continueEnquiry}
          disabled={!whatsappNumber}
        >
          Continue on WhatsApp
        </Button>
      }
    >
      <div data-brand={product.brandKey} className="grid gap-3">
        <div className="border-y border-[var(--color-border)] py-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <p className="font-medium text-[var(--color-text)]"><span className="mr-2 text-xs uppercase tracking-[0.12em] text-[var(--color-accent)]">{product.brand}</span>{product.title}</p>
            <p className="shrink-0 text-xs text-[var(--color-text-muted)]">{product.price}</p>
          </div>
          {selectedColorLabel || selectedSize ? (
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              {[selectedColorLabel ? `Colour: ${selectedColorLabel}` : undefined, selectedSize ? `Size: ${selectedSize}` : undefined].filter(Boolean).join(" · ")}
            </p>
          ) : null}
        </div>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-medium text-[var(--color-text)]">What would you like to know?</legend>
          <div className="grid grid-cols-4 gap-2">
            {enquiryTopics.map((item) => (
              <label key={item} className="cursor-pointer">
                <input
                  className="peer sr-only"
                  type="radio"
                  name={`enquiry-topic-${product.id}`}
                  value={item}
                  checked={topic === item}
                  onChange={() => setTopic(item)}
                />
                <span className="flex min-h-11 items-center justify-center border border-[var(--color-border)] px-2 text-center text-[11px] leading-4 text-[var(--color-text-muted)] transition-colors peer-checked:border-[var(--color-accent)] peer-checked:text-[var(--color-text)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-accent)]">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <Textarea
          label="Your question (optional)"
          value={question}
          onChange={(event) => setQuestion(event.currentTarget.value)}
          maxLength={400}
          rows={2}
          className="min-h-20 py-2 leading-5"
          placeholder="Tell us what you would like to confirm."
        />

        {!whatsappNumber ? (
          <p role="status" className="text-xs leading-5 text-[var(--color-text-muted)]">
            WhatsApp support is temporarily unavailable.
          </p>
        ) : null}
      </div>
    </Modal>
  );
}
