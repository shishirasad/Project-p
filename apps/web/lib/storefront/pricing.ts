export function parseBdtPrice(value: string) {
  const parsed = Number(value.replace(/[^0-9]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function formatBdt(value: number) {
  return `BDT ${new Intl.NumberFormat("en-BD", { maximumFractionDigits: 0 }).format(value)}`;
}

export function clampQuantity(value: string | undefined, min = 1, max = 10) {
  const parsed = Number(value ?? min);
  if (!Number.isFinite(parsed)) return min;
  return Math.min(max, Math.max(min, Math.floor(parsed)));
}