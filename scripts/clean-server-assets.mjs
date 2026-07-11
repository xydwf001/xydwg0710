import { readdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";

const projectRoot = resolve(new URL("..", import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, (value) => value.slice(1)));
const publicRoot = join(projectRoot, "public");
const serverRoot = join(projectRoot, "dist", "server");

if (!serverRoot.endsWith(join("dist", "server"))) {
  throw new Error(`Refusing to clean unexpected directory: ${serverRoot}`);
}

for (const entry of await readdir(publicRoot, { withFileTypes: true })) {
  await rm(join(serverRoot, entry.name), { recursive: true, force: true });
}

console.log("Removed copied public assets from dist/server");
