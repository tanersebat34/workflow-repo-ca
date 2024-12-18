import { test, expect } from "@playwright/test";

test.describe("navigation to first item and assert heading text", () => {
  test("navigate to venue details", async ({ page }) => {
    await page.goto("/");

    await page.waitForSelector("#venue-container", { state: "visible" });

    await page.locator("#venue-container > a").first().click();

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
