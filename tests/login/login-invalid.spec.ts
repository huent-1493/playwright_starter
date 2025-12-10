/**
 * @fileoverview Basic HTML exam test cases.
 - Use page: https://www.saucedemo.com/
 - Create 3 test cases: 
 + Login failed, wrong password -> showing error message
 + Login failed, not fill username -> showing error message
 + Login with locked_out_user -> showing error message

 => Create inside file: login-invalid.spec.js inside folder login
 */


  import { test, expect } from '@playwright/test';
  
  test('test open https://www.saucedemo.com/ then login failed by wrong password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
 
     await page.fill("#user-name", "standard_user");
     await page.fill("#password", "wrong_password");
     await page.click("#login-button");
 
     // Assert that the product page is opened by checking the URL or a specific element
     await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
  });


  test('test open https://www.saucedemo.com/ then login failed by not fill user name', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
 
     await page.fill("#password", "wrong_password");
     await page.click("#login-button");
 
     // Assert that the product page is opened by checking the URL or a specific element
     await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username is required");
  });


  test('test open https://www.saucedemo.com/ then login failed by locked out user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
 
     await page.fill("#user-name", "locked_out_user");
     await page.fill("#password", "secret_sauce");
     await page.click("#login-button");
 
     // Assert that the product page is opened by checking the URL or a specific element
     await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.");
  });