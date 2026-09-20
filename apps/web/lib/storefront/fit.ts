import type { MeasurementRange, ProductSizeGuide } from "./catalog";

export type FitPreference = "close" | "regular" | "relaxed";

export type FitRecommendationInput = {
  height?: number;
  weight?: number;
  primaryMeasurement?: number;
  preference: FitPreference;
};

export type FitRecommendation = {
  size: string;
  source: "measurement" | "height-weight";
  reason: string;
};

function distanceFromRange(value: number, range: MeasurementRange) {
  if (value < range[0]) return range[0] - value;
  if (value > range[1]) return value - range[1];
  return 0;
}

function nearestMeasurementIndex(guide: ProductSizeGuide, measurement: number) {
  let bestIndex = 0;
  let bestDistance = Number.POSITIVE_INFINITY;

  guide.rows.forEach((row, index) => {
    const range = row.values[guide.primaryMeasurement];
    if (!range) return;
    const distance = distanceFromRange(measurement, range);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function heightWeightIndex(rowCount: number, height: number, weight: number) {
  const bmi = weight / ((height / 100) ** 2);
  const normalized = rowCount === 3
    ? bmi < 21 ? 0 : bmi < 26 ? 1 : 2
    : bmi < 20 ? 0 : bmi < 24 ? 1 : bmi < 28 ? 2 : 3;
  return Math.min(rowCount - 1, normalized);
}

export function recommendProductSize(guide: ProductSizeGuide, input: FitRecommendationInput): FitRecommendation | null {
  const hasMeasurement = input.primaryMeasurement !== undefined && Number.isFinite(input.primaryMeasurement);
  const hasHeightWeight = input.height !== undefined && input.weight !== undefined && Number.isFinite(input.height) && Number.isFinite(input.weight);
  if (!hasMeasurement && !hasHeightWeight) return null;

  let source: FitRecommendation["source"] = "height-weight";
  let index = 0;

  if (hasMeasurement) {
    source = "measurement";
    index = nearestMeasurementIndex(guide, input.primaryMeasurement!);
  } else {
    index = heightWeightIndex(guide.rows.length, input.height!, input.weight!);
  }

  if (input.preference === "relaxed") index += 1;
  if (input.preference === "close" && source === "height-weight") index -= 1;
  index = Math.max(0, Math.min(guide.rows.length - 1, index));

  const size = guide.rows[index]?.size;
  if (!size) return null;

  const reason = source === "measurement"
    ? `Based primarily on your ${guide.primaryLabel.toLowerCase()} and your preferred fit.`
    : "A starting point based on height, weight, and your preferred fit. Add your key body measurement for a stronger match.";

  return { size, source, reason };
}

export function formatMeasurement(range: MeasurementRange, unit: "cm" | "in") {
  const values = unit === "cm" ? range : [range[0] / 2.54, range[1] / 2.54] as const;
  const format = (value: number) => unit === "cm" ? Math.round(value).toString() : value.toFixed(1);
  return `${format(values[0])}-${format(values[1])}`;
}
