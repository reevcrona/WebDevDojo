import fs from "node:fs";
import path from "node:path";

export function getRawMdx(relativePath: string): string {
  // process.cwd() is "C:\Users\...\WebDevDojo"

  const fullPath = path.join(
    process.cwd(),
    "scripts",
    "data",
    "mdx",
    relativePath
  );

  console.log(`Looking for MDX at: ${fullPath}`);

  if (!fs.existsSync(fullPath)) {
    console.error(`FILE NOT FOUND: ${fullPath}`);
    return "";
  }

  try {
    const content = fs.readFileSync(fullPath, "utf8");

    return content;
  } catch (error) {
    console.error(`ERROR READING FILE: ${fullPath}`, error);
    return "";
  }
}
