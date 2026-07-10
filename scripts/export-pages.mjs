import { writeFile } from "node:fs/promises";

const { default: worker } = await import("../dist/server/index.js");
const response = await worker.fetch(
  new Request("https://xydwf001.github.io/", {
    headers: { accept: "text/html" },
  }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static render failed: ${response.status}`);

let html = await response.text();
html = html
  .replaceAll('href="/assets/', 'href="./assets/')
  .replaceAll('src="/assets/', 'src="./assets/')
  .replaceAll('src="/portfolio/', 'src="./portfolio/')
  .replaceAll('import("/assets/', 'import("./assets/')
  .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"')
  .replaceAll('href="/resume-template.txt"', 'href="./resume-template.txt"');

await writeFile(new URL("../dist/client/index.html", import.meta.url), html, "utf8");
await writeFile(new URL("../dist/client/.nojekyll", import.meta.url), "", "utf8");
console.log("GitHub Pages export created at dist/client/index.html");
