import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const baseUrl = process.env.STOREFRONT_URL ?? "http://localhost:3000";
const outputDirectory = resolve(process.cwd(), "../../screenshots/storefront-smoke");
const routes = [
  ["home", "/"],
  ["faris", "/faris"],
  ["laaj", "/laaj"],
  ["collection", "/collection"],
  ["product", "/product/old-money-polo"],
  ["bag", "/cart?item=old-money-polo&color=midnight&size=M&quantity=1"],
  ["checkout", "/checkout?item=old-money-polo&color=midnight&size=M&quantity=1"],
  ["delivery", "/delivery"],
  ["returns", "/returns"],
  ["privacy", "/privacy"],
  ["contact", "/contact"],
  ["terms", "/terms"]
];

await mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
await context.addInitScript(() => window.localStorage.setItem("porsion:consent", JSON.stringify({ necessary: true, analytics: false, marketing: false, decided: true })));
const report = [];

for (const [name, path] of routes) {
  const page = await context.newPage();
  await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
  const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  report.push({ name, path, violations: result.violations.map((violation) => ({ id: violation.id, impact: violation.impact, help: violation.help, nodes: violation.nodes.map((node) => ({ target: node.target, html: node.html, failureSummary: node.failureSummary })) })) });
  await page.close();
}

await context.close();
await browser.close();
await writeFile(resolve(outputDirectory, "a11y-report.json"), JSON.stringify(report, null, 2));
const blocking = report.flatMap((entry) => entry.violations.filter((violation) => violation.impact === "critical" || violation.impact === "serious").map((violation) => ({ route: entry.path, ...violation })));
console.log(JSON.stringify({ checked: report.length, blocking: blocking.length, violations: blocking }, null, 2));
if (blocking.length) process.exitCode = 1;
