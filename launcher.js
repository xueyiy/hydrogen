#!/usr/bin/env node
import { spawn } from "node:child_process";

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: "inherit",
      shell: false,
      env: process.env,
      ...opts,
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

async function launch(mode = "preview") {
  const validModes = new Set(["dev", "build", "preview"]);
  if (!validModes.has(mode)) {
    console.error(`Invalid mode: ${mode}. Valid modes are: dev, build, preview`);
    process.exit(1);
  }

  // Critical for containers / health checks
  const port = process.env.PORT || "3000";
  const shouldExposeHost = process.env.HOST && process.env.HOST !== "127.0.0.1" && process.env.HOST !== "localhost";

  try {
    if (mode === "dev") {
      console.log("Starting Hydrogen development server...");
      const devArgs = ["-y", "shopify", "hydrogen", "dev", "--port", port];
      if (shouldExposeHost) {
        devArgs.push("--host");
      }
      await run("npx", devArgs);
      return;
    }

    if (mode === "build") {
      console.log("Building Hydrogen project...");
      await run("npx", ["-y", "shopify", "hydrogen", "build"]);
      return;
    }

    // preview (production-ish server)
    console.log(`Starting Hydrogen preview server on port ${port}...`);
    const previewArgs = ["-y", "shopify", "hydrogen", "preview", "--port", port];
    if (shouldExposeHost) {
      previewArgs.push("--host");
    }
    await run("npx", previewArgs);
  } catch (err) {
    console.error(`Error executing ${mode}:`, err?.message || err);
    process.exit(1);
  }
}

const mode = process.argv[2] || "preview";
launch(mode);
