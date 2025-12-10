/**
 * @fileoverview Basic HTML exam test cases.
 - Use page: https://www.saucedemo.com/
 - Create 1 test case: 
 + Login success with: standard_user + secret_sauce -> open page product 
 => Create login-valid.spec.js
 */

 import { test, expect } from '@playwright/test';
 
 
 test('test open https://www.saucedemo.com/ then login success', async ({ page }) => {
   await page.goto('https://www.saucedemo.com/');

    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");

    // Assert that the product page is opened by checking the URL or a specific element
    await expect(page).toHaveURL(/.*inventory.html/);
 });