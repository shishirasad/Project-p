import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { AxeBuilder } from "@axe-core/playwright";
import { chromium } from "playwright";

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(appDir, "..", "..");
const storybookDir = path.join(appDir, "storybook-static");
const reportDir = path.join(repoRoot, "docs", "qa", "sprint-2.2.5");
const screenshotDir = path.join(reportDir, "visual-baselines");
const indexPath = path.join(storybookDir, "index.json");

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".woff2", "font/woff2"]
]);

const viewports = [
  { name: "360", width: 360, height: 900 },
  { name: "390", width: 390, height: 900 },
  { name: "414", width: 414, height: 920 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1280", width: 1280, height: 900 },
  { name: "1536", width: 1536, height: 960 }
];

const baselineViewports = viewports.filter((viewport) => ["390", "1280"].includes(viewport.name));

function createStaticServer(rootDir) {
  const server = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1");
      const relativePath = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
      const resolvedPath = path.resolve(rootDir, `.${relativePath}`);

      if (!resolvedPath.startsWith(rootDir)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
      }

      const filePath = existsSync(resolvedPath) ? resolvedPath : path.join(rootDir, "index.html");
      const body = await readFile(filePath);
      response.writeHead(200, { "content-type": contentTypes.get(path.extname(filePath)) ?? "application/octet-stream" });
      response.end(body);
    } catch (error) {
      response.writeHead(404);
      response.end(error instanceof Error ? error.message : "Not found");
    }
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") throw new Error("Unable to start static server");
      resolve({ server, origin: `http://127.0.0.1:${address.port}` });
    });
  });
}

function selectStories(entries) {
  const storyEntries = Object.values(entries).filter((entry) => entry.type === "story");
  const priority = ["Default", "Primary", "Initials", "Lockup", "Horizontal", "Column"];
  const getRank = (story) => {
    const rank = priority.indexOf(story.exportName);
    return rank === -1 ? Number.POSITIVE_INFINITY : rank;
  };
  const byTitle = new Map();

  for (const story of storyEntries) {
    const current = byTitle.get(story.title);
    const currentRank = current ? getRank(current) : Number.POSITIVE_INFINITY;
    const nextRank = getRank(story);

    if (!current || nextRank < currentRank) byTitle.set(story.title, story);
  }

  const defaultStories = Array.from(byTitle.values()).sort((a, b) => a.title.localeCompare(b.title));
  const stateStories = storyEntries
    .filter((story) => story.title.startsWith("Forms/") && ["Invalid", "Disabled", "Loading"].includes(story.exportName))
    .sort((a, b) => a.id.localeCompare(b.id));

  const visualStories = [...new Map([...defaultStories, ...stateStories].map((story) => [story.id, story])).values()];

  return { defaultStories, visualStories };
}

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function loadStory(page, origin, story) {
  await page.goto(`${origin}/iframe.html?id=${story.id}&viewMode=story`, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#storybook-root", { state: "attached", timeout: 10000 });
  await page.waitForTimeout(50);
}

async function getTouchTargetFailures(page) {
  return page.evaluate(() => {
    const selector = "button, a, input:not([type='hidden']), select, textarea, [role='button'], [role='switch'], [role='checkbox'], [role='radio'], [tabindex]:not([tabindex='-1'])";
    const hasAssociatedLabelTarget = (element) => {
      const explicitLabel = element.id ? document.querySelector(`label[for="${CSS.escape(element.id)}"]`) : null;
      const label = element.closest("label") || explicitLabel;
      if (!label) return false;
      const rect = label.getBoundingClientRect();
      return rect.width >= 44 && rect.height >= 44;
    };
    return Array.from(document.querySelectorAll(selector))
      .filter((element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const input = element instanceof HTMLInputElement ? element : null;
        if (input && ["checkbox", "radio"].includes(input.type) && hasAssociatedLabelTarget(input)) return false;
        return style.visibility !== "hidden" && style.display !== "none" && !element.hasAttribute("disabled") && rect.width > 0 && rect.height > 0;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const label = element.getAttribute("aria-label") || element.textContent?.trim() || element.getAttribute("name") || element.tagName.toLowerCase();
        return {
          label: label.slice(0, 80),
          tag: element.tagName.toLowerCase(),
          width: Math.round(rect.width * 100) / 100,
          height: Math.round(rect.height * 100) / 100
        };
      })
      .filter((target) => target.width < 44 || target.height < 44);
  });
}

async function run() {
  if (!existsSync(indexPath)) throw new Error("Storybook static index is missing. Run pnpm storybook:build first.");

  await ensureDir(reportDir);
  await ensureDir(screenshotDir);

  const storybookIndex = JSON.parse(await readFile(indexPath, "utf8"));
  const { defaultStories, visualStories } = selectStories(storybookIndex.entries);
  const { server, origin } = await createStaticServer(storybookDir);
  const browser = await chromium.launch({ channel: process.env.PW_BROWSER_CHANNEL ?? "chrome", headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const accessibility = [];
  const responsive = [];
  const touchTargets = [];
  const screenshots = [];

  try {
    console.log(`Accessibility audit: ${defaultStories.length} stories`);
    for (const story of defaultStories) {
      await page.setViewportSize({ width: 1280, height: 900 });
      await loadStory(page, origin, story);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
      accessibility.push({
        id: story.id,
        title: story.title,
        violations: results.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          nodes: violation.nodes.length,
          help: violation.help
        }))
      });
    }

    console.log(`Responsive audit: ${defaultStories.length} stories x ${viewports.length} viewports`);
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      for (const story of defaultStories) {
        await loadStory(page, origin, story);
        const metrics = await page.evaluate(() => ({
          innerWidth: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth
        }));
        const maxScrollWidth = Math.max(metrics.scrollWidth, metrics.bodyScrollWidth);
        responsive.push({
          id: story.id,
          title: story.title,
          viewport: viewport.name,
          hasHorizontalOverflow: maxScrollWidth > metrics.innerWidth + 1,
          maxScrollWidth,
          innerWidth: metrics.innerWidth
        });

        const touchTargetFailures = await getTouchTargetFailures(page);
        if (touchTargetFailures.length > 0) {
          touchTargets.push({ id: story.id, title: story.title, viewport: viewport.name, failures: touchTargetFailures });
        }
      }
    }

    console.log(`Visual baseline: ${visualStories.length} stories x ${baselineViewports.length} viewports`);
    for (const viewport of baselineViewports) {
      const viewportDir = path.join(screenshotDir, viewport.name);
      await ensureDir(viewportDir);
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      for (const story of visualStories) {
        await loadStory(page, origin, story);
        const screenshotPath = path.join(viewportDir, `${story.id}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        screenshots.push({ id: story.id, title: story.title, viewport: viewport.name, path: path.relative(repoRoot, screenshotPath).replaceAll("\\", "/") });
      }
    }
  } finally {
    await context.close();
    await browser.close();
    server.close();
  }

  const accessibilityViolations = accessibility.flatMap((story) => story.violations.map((violation) => ({ story: story.id, ...violation })));
  const responsiveFailures = responsive.filter((result) => result.hasHorizontalOverflow);
  const touchTargetFailureCount = touchTargets.reduce((count, result) => count + result.failures.length, 0);
  const report = {
    generatedAt: new Date().toISOString(),
    storybookDir: path.relative(repoRoot, storybookDir).replaceAll("\\", "/"),
    auditedDefaultStories: defaultStories.length,
    visualBaselineStories: visualStories.length,
    visualBaselineViewports: baselineViewports.map((viewport) => viewport.name),
    responsiveViewports: viewports.map((viewport) => viewport.name),
    accessibilityViolationCount: accessibilityViolations.length,
    responsiveFailureCount: responsiveFailures.length,
    touchTargetFailureCount,
    screenshotCount: screenshots.length,
    accessibility,
    responsiveFailures,
    touchTargets,
    screenshots
  };

  await writeFile(path.join(reportDir, "storybook-qa-report.json"), JSON.stringify(report, null, 2));
  await writeFile(path.join(reportDir, "visual-baseline-manifest.json"), JSON.stringify({ screenshots }, null, 2));

  console.log(JSON.stringify({
    auditedDefaultStories: report.auditedDefaultStories,
    visualBaselineStories: report.visualBaselineStories,
    screenshotCount: report.screenshotCount,
    accessibilityViolationCount: report.accessibilityViolationCount,
    responsiveFailureCount: report.responsiveFailureCount,
    touchTargetFailureCount: report.touchTargetFailureCount
  }, null, 2));

  if (report.accessibilityViolationCount > 0 || report.responsiveFailureCount > 0 || report.touchTargetFailureCount > 0) process.exitCode = 1;
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

