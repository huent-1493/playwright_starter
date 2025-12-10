/**
 * @fileoverview  HTML exam test cases.
 - Use page: https://www.saucedemo.com/
 - Login and checking logout functionality
 */

import { test, expect } from "@playwright/test";

test("test login and checking logout functionality", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  // Assert that the product page is opened by checking the URL or a specific element
  await expect(page).toHaveURL(/.*inventory.html/);

  // Add first product to the shopping cart

  await page.click("#react-burger-menu-btn");

  await expect(page.locator("#logout_sidebar_link")).toBeVisible();

  await page.click("#logout_sidebar_link");

  // Assert that we are back on the login page
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});
