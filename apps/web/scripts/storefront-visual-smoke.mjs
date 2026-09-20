import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const baseUrl = process.env.STOREFRONT_URL ?? "http://localhost:3000";
const outputDirectory = resolve(process.cwd(), "../../screenshots/storefront-smoke");
const routes = [
  ["home", "/"],
  ["faris", "/faris"],
  ["laaj", "/laaj"],
  ["collection", "/collection"],
  ["faris-traditional", "/collection?brand=faris&category=traditional"],
  ["laaj-kameez", "/collection?brand=laaj&category=kameez-salwar"],
  ["product", "/product/old-money-polo"],
  ["laaj-premium-kameez", "/product/laaj-kameez-salwar-premium-kameez"],
  ["bag", "/cart?item=old-money-polo&color=midnight&size=M&quantity=1"],
  ["checkout", "/checkout?item=old-money-polo&color=midnight&size=M&quantity=1"],
  ["delivery", "/delivery"],
  ["returns", "/returns"],
  ["privacy", "/privacy"],
  ["contact", "/contact"],
  ["terms", "/terms"]
];
const viewports = [
  ["desktop", { width: 1440, height: 1000 }],
  ["mobile", { width: 390, height: 844 }]
];

await mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const report = [];

for (const [viewportName, viewport] of viewports) {
  const context = await browser.newContext({ viewport });
  await context.addInitScript(() => {
    window.localStorage.setItem("porsion:consent", JSON.stringify({ necessary: true, analytics: false, marketing: false, decided: true }));
  });

  for (const [routeName, path] of routes) {
    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    const response = await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
    const layout = await page.evaluate(async () => {
      await document.fonts.ready;
      const heading = document.querySelector("h1");
      const overflowingCopy = Array.from(document.querySelectorAll("h1, h2, h3, p"))
        .filter((element) => element.clientWidth > 0 && element.scrollWidth > element.clientWidth + 1)
        .slice(0, 5)
        .map((element) => element.textContent?.trim().slice(0, 80) ?? "");

      return {
        title: document.title,
        heading: heading?.textContent?.trim() ?? "",
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        overflowingCopy,
        fontsReady: document.fonts.status === "loaded",
        bodyFont: getComputedStyle(document.body).fontFamily,
        headingFont: heading ? getComputedStyle(heading).fontFamily : "",
        headingSize: heading ? getComputedStyle(heading).fontSize : "",
        width: document.documentElement.scrollWidth,
        viewport: window.innerWidth
      };
    });
    await page.screenshot({ path: resolve(outputDirectory, `${routeName}-${viewportName}.png`), fullPage: true });
    report.push({ routeName, viewportName, path, status: response?.status() ?? 0, ...layout, consoleErrors, pageErrors });
    await page.close();
  }
  await context.close();
}

await browser.close();
await writeFile(resolve(outputDirectory, "report.json"), JSON.stringify(report, null, 2));
const failed = report.filter((entry) => entry.status >= 400 || entry.horizontalOverflow || entry.overflowingCopy.length || !entry.fontsReady || entry.consoleErrors.length || entry.pageErrors.length);
console.log(JSON.stringify({ checked: report.length, failed: failed.length, failures: failed }, null, 2));
if (failed.length) process.exitCode = 1;
