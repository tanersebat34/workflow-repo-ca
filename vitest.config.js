import { defineConfig } from "vite";

export default defineConfig({
  testDir: "./vitest_test_folder",
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["**/*.spec.js", "**/node_modules/**"],
  },
});
