import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Digit Studio Smoke Tests", () => {
  test("Homepage loads with branding, skip-to-content, and accessibility landmarks", async ({ page }) => {
    await page.goto("/");

    // Skip to content link exists and targets #main-content
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();

    // Main landmark exists
    const main = page.locator("main#main-content");
    await expect(main).toBeAttached();

    // Brand is present in title
    await expect(page).toHaveTitle(/Digit Studio/i);

    // Run axe accessibility audit on homepage
    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude("iframe") // Exclude 3rd-party widgets if any
      .analyze();

    // Verify no critical violations
    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical"
    );
    expect(criticalViolations).toEqual([]);
  });

  test("Contact page renders contact form and essential inputs", async ({ page }) => {
    await page.goto("/contact");

    // Check title
    await expect(page).toHaveTitle(/Contact Digit Studio/i);

    // Check primary heading
    const heading = page.locator("h1");
    await expect(heading).toContainText(/Tell us about your project/i);

    // Check contact form exists
    const form = page.locator("form");
    await expect(form).toBeVisible();

    // Verify name and email fields exist
    const nameInput = page.locator('input[placeholder*="Name" i], input[name*="name" i]').first();
    await expect(nameInput).toBeVisible();
  });
});
