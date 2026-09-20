"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Drawer } from "@porsion/ui";
import { Check, Ruler, Sparkles } from "lucide-react";
import type { StorefrontProduct } from "@/lib/storefront/catalog";
import { formatMeasurement, recommendProductSize } from "@/lib/storefront/fit";
import type { FitPreference, FitRecommendation } from "@/lib/storefront/fit";

type FitSuggestionProps = {
  product: StorefrontProduct;
  selectedSize: string;
  onSelectSize: (size: string) => void;
};

const inputClassName = "min-h-11 w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]";

function optionalNumber(value: string) {
  if (!value.trim()) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export function FitSuggestion({ product, selectedSize, onSelectSize }: FitSuggestionProps) {
  const guide = product.sizeGuide;
  const [isOpen, setIsOpen] = useState(false);
  const [unit, setUnit] = useState<"cm" | "in">("cm");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [primaryMeasurement, setPrimaryMeasurement] = useState("");
  const [preference, setPreference] = useState<FitPreference>("regular");
  const [result, setResult] = useState<FitRecommendation | null>(null);
  const [error, setError] = useState("");

  function suggest() {
    const heightValue = optionalNumber(height);
    const weightValue = optionalNumber(weight);
    const measurementValue = optionalNumber(primaryMeasurement);
    const validMeasurement = measurementValue !== undefined && measurementValue >= 40 && measurementValue <= 180;
    const validHeightWeight = heightValue !== undefined && heightValue >= 120 && heightValue <= 220 && weightValue !== undefined && weightValue >= 30 && weightValue <= 180;

    if (!validMeasurement && !validHeightWeight) {
      setResult(null);
      setError(`Add your ${guide.primaryLabel.toLowerCase()}, or enter both height and weight.`);
      return;
    }

    const nextResult = recommendProductSize(guide, {
      height: validHeightWeight ? heightValue : undefined,
      weight: validHeightWeight ? weightValue : undefined,
      primaryMeasurement: validMeasurement ? measurementValue : undefined,
      preference
    });

    setError("");
    setResult(nextResult);
  }

  function chooseRecommendedSize() {
    if (!result) return;
    onSelectSize(result.size);
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 py-2 text-sm text-[var(--color-text-muted)] underline underline-offset-4 transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        onClick={() => setIsOpen(true)}
      >
        <Ruler aria-hidden="true" size={17} />
        Size guide & fit
      </button>

      <Drawer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title={`Find your ${product.brand} fit`}
        description={`${product.fit.label}. ${product.fit.summary}`}
        closeLabel="Close size guide"
        className="max-w-xl"
        footer={result ? <Button onClick={chooseRecommendedSize} leftIcon={<Check aria-hidden="true" size={16} />}>Choose {result.size}</Button> : undefined}
      >
        <div id="fit-guide" className="grid gap-8 pb-4">
          <section aria-labelledby="fit-assistant-title" className="grid gap-5 border-t border-[var(--color-border)] pt-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-[var(--color-text)]">
                <Sparkles aria-hidden="true" size={17} />
                <h3 id="fit-assistant-title" className="font-medium">Fit assistant</h3>
              </div>
              <p>For the best starting point, add the key body measurement. Height and weight remain an optional estimate.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-2 text-[var(--color-text)]">
                <span>{guide.primaryLabel} (cm)</span>
                <input className={inputClassName} inputMode="decimal" type="number" min="40" max="180" value={primaryMeasurement} onChange={(event) => setPrimaryMeasurement(event.target.value)} placeholder="e.g. 98" />
              </label>
              <label className="grid gap-2 text-[var(--color-text)]">
                <span>Height (cm)</span>
                <input className={inputClassName} inputMode="numeric" type="number" min="120" max="220" value={height} onChange={(event) => setHeight(event.target.value)} placeholder="e.g. 175" />
              </label>
              <label className="grid gap-2 text-[var(--color-text)]">
                <span>Weight (kg)</span>
                <input className={inputClassName} inputMode="decimal" type="number" min="30" max="180" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="e.g. 72" />
              </label>
            </div>

            <fieldset className="grid gap-2">
              <legend className="text-[var(--color-text)]">Preferred fit</legend>
              <div className="grid grid-cols-3 border border-[var(--color-border)]" role="group" aria-label="Preferred fit">
                {(["close", "regular", "relaxed"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={preference === option}
                    className="min-h-11 border-r border-[var(--color-border)] px-2 text-xs uppercase tracking-[0.1em] text-[var(--color-text-muted)] transition-colors last:border-r-0 hover:bg-[var(--color-hover-surface)] aria-pressed:bg-[var(--color-text)] aria-pressed:text-[var(--color-background)]"
                    onClick={() => setPreference(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <Button variant="outline" onClick={suggest}>Suggest my size</Button>
            {error ? <p className="border-l-2 border-[var(--color-error)] pl-3 text-[var(--color-text)]" role="alert">{error}</p> : null}
            {result ? (
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-y border-[var(--color-border)] py-4" role="status" aria-live="polite">
                <span className="row-span-2 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-text)] font-serif text-xl text-[var(--color-background)]">{result.size}</span>
                <strong className="text-[var(--color-text)]">Your starting size</strong>
                <span>{result.reason}</span>
              </div>
            ) : null}
          </section>

          <section aria-labelledby="size-chart-title" className="grid gap-4 border-t border-[var(--color-border)] pt-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="grid gap-1">
                <h3 id="size-chart-title" className="font-medium text-[var(--color-text)]">{guide.title}</h3>
                <p>{guide.basis}</p>
              </div>
              <div className="inline-grid grid-cols-2 border border-[var(--color-border)]" aria-label="Measurement unit">
                {(["cm", "in"] as const).map((option) => (
                  <button key={option} type="button" aria-pressed={unit === option} className="min-h-11 min-w-12 px-3 uppercase text-[var(--color-text-muted)] aria-pressed:bg-[var(--color-text)] aria-pressed:text-[var(--color-background)]" onClick={() => setUnit(option)}>{option}</button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto border-y border-[var(--color-border)]">
              <table className="w-full min-w-[30rem] border-collapse text-left">
                <caption className="sr-only">{guide.title}, measurements in {unit}</caption>
                <thead>
                  <tr className="border-b border-[var(--color-border)] text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    <th scope="col" className="px-3 py-3">Size</th>
                    {guide.columns.map((column) => <th key={column.key} scope="col" className="px-3 py-3">{column.label}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {guide.rows.map((row) => (
                    <tr key={row.size} className={row.size === selectedSize ? "bg-[var(--color-hover-surface)] text-[var(--color-text)]" : "border-b border-[var(--color-border)] last:border-b-0"}>
                      <th scope="row" className="px-3 py-4 font-medium">{row.size}{row.size === selectedSize ? <span className="sr-only">, currently selected</span> : null}</th>
                      {guide.columns.map((column) => <td key={column.key} className="px-3 py-4 tabular-nums">{row.values[column.key] ? formatMeasurement(row.values[column.key]!, unit) : "-"}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="measure-title" className="grid gap-5 border-t border-[var(--color-border)] pt-6 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-start">
            <Image src={guide.image.src} alt={guide.image.alt} width={guide.image.width} height={guide.image.height} sizes="(min-width: 640px) 16rem, 100vw" className="h-auto w-full bg-[var(--color-surface)] object-cover" />
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 id="measure-title" className="font-medium text-[var(--color-text)]">How to measure</h3>
                <p>Use a soft tape, stand naturally, and ask someone to help where possible.</p>
              </div>
              <ol className="grid gap-4">
                {guide.howToMeasure.map((step, index) => (
                  <li key={step.key} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-xs text-[var(--color-text)]">{index + 1}</span>
                    <span><strong className="block font-medium text-[var(--color-text)]">{step.title}</strong>{step.description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <p className="border-t border-[var(--color-border)] pt-5 text-xs leading-5">Size suggestions are a starting point, not a fit guarantee. Body shape, fabric, and preferred silhouette can change the final choice.</p>
        </div>
      </Drawer>
    </>
  );
}
