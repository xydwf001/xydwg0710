import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the XYDWF photography portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /XYDWF/);
  assert.match(html, /星约/);
  assert.match(html, /精选作品/);
  assert.match(html, /分类图库/);
  assert.match(html, /履历与合作经历/);
  assert.match(html, /摄影笔记/);
  assert.match(html, /暂未开放/);
  assert.doesNotMatch(html, /hello@example|林野摄影|Studio North|codex-preview|react-loading-skeleton/i);
});

test("includes accessible and maintainable portfolio controls", async () => {
  const [portfolio, data, css, packageJson] = await Promise.all([
    readFile(new URL("../app/portfolio.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/portfolio-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(portfolio, /aria-label=\{lang === "zh" \? "主导航"/);
  assert.match(portfolio, /aria-expanded=\{menuOpen\}/);
  assert.match(portfolio, /showModal\(\)/);
  assert.match(portfolio, /localStorage/);
  assert.match(data, /\.\/photos\/portrait\//);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /:focus-visible/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("builds a GitHub Pages client without server component requests", async () => {
  const [html, assets] = await Promise.all([
    readFile(new URL("../dist/pages/index.html", import.meta.url), "utf8"),
    readFile(new URL("../vite.pages.config.ts", import.meta.url), "utf8"),
  ]);
  assert.match(html, /XYDWF｜星约摄影作品集/);
  assert.match(html, /\.\/assets\/[^"']+\.js/);
  assert.doesNotMatch(html, /\.rsc|_rsc/);
  assert.match(assets, /base:\s*"\.\/"/);
});

test("keeps public media out of the Sites server module directory", async () => {
  await assert.rejects(access(new URL("../dist/server/photos", import.meta.url)));
  await assert.rejects(access(new URL("../dist/server/favicon.svg", import.meta.url)));
});
