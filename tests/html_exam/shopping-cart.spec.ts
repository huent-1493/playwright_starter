/**
 * @fileoverview  HTML exam test cases.
 - Use page: https://www.saucedemo.com/
 - Checking number product shopping cart functionality 
 */

import { test, expect } from "@playwright/test";

test("test checking number product shopping cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  // Assert that the product page is opened by checking the URL or a specific element
  await expect(page).toHaveURL(/.*inventory.html/);

  // Add first product to the shopping cart
  await page.click("button[data-test='add-to-cart-sauce-labs-backpack']");

  // Assert that the shopping cart badge shows 1 item
  const cartBadge = page.locator(".shopping_cart_badge");
  await expect(cartBadge).toHaveText("1");
});
