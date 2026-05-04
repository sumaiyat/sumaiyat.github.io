import { cp, rm, access } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const distDir = path.join(repoRoot, "frontend", "lovable", "dist");
const targetDir = path.join(repoRoot, "public", "lovable");

async function main() {
  try {
    await access(distDir);
  } catch {
    throw new Error("Lovable dist folder not found. Run `npm --prefix frontend/lovable run build` first.");
  }

  await rm(targetDir, { recursive: true, force: true });
  await cp(distDir, targetDir, { recursive: true });

  console.log(`Published Lovable build to ${targetDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
