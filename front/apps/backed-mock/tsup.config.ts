import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/server.js"],
  clean: true,
  format: ["cjs"],
  ...options,
}));
