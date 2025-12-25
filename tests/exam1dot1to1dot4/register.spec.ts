/**
 * Go to  https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register

    * Fill the registration form and submit
    * Login with the registered credentials
 */

import { test, expect } from "@playwright/test";

const webRegister =
  "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register";

test("test open webRegister then check title page", async ({ page }) => {
  await page.goto(webRegister);

  await expect(page.locator("h2")).toHaveText("Register");
});

test("test open webRegister then register", async ({ page }) => {
  await page.goto(webRegister);

  await page.fill("#firstName", "Hue");
  await page.fill("#Text1", "Nguyen");
  await page.fill("#username", "HNT");
  await page.fill("#password", "1234");

  await page.getByRole("button", { name: "Register" }).click();
  // Navigation to the login page
  await page.waitForURL("**/login");

  await expect(page.locator("h2")).toHaveText("Login");
});
