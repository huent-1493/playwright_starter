/* Use page: https://material.playwrightvn.com/01-xpath-register-page.html

Input data field then click register button
+ Username
+ Email
+ Gender
+ Hobbies
+ Interested
+ Country
+ Date of Birth

Check:

+ the checked value of radio and checkbox
+ successful user registration (user displayed under table list)"
*/
import { test, expect } from "@playwright/test";

test("test open page then fill field and register account", async ({
  page,
}) => {
  await page.goto(
    "https://material.playwrightvn.com/01-xpath-register-page.html"
  );

  // Input data to field
  await page.fill("#username", "Hue Nguyen");
  await page.fill("#email", "nguyen.thi.hue-c@sun-asterisk.com");

  /// Select multiple options in a multi-select dropdown
  const interestedSelect = page.locator("#interests");
  await interestedSelect.selectOption(["technology", "music"]);

  const countrySelect = page.locator("#country");
  await countrySelect.selectOption(["canada"]);

  // Verify Date of Birth field was filled
  const dateInput = page.locator("#dob");
  await dateInput.fill("1996-09-05");

  const femaleRadio = page.locator('input[name="gender"][value="female"]');
  const cookingCheckbox = page.locator(
    'input[name="hobbies"][value="cooking"]'
  );

  await femaleRadio.check();
  await cookingCheckbox.check();

  // Assert they're checked
  await expect(femaleRadio).toBeChecked();
  await expect(cookingCheckbox).toBeChecked();

  // Also assert other options are not checked (optional)
  const maleRadio = page.locator('input[name="gender"][value="male"]');
  const readingCheckbox = page.locator(
    'input[name="hobbies"][value="reading"]'
  );

  await expect(maleRadio).not.toBeChecked();
  await expect(readingCheckbox).not.toBeChecked();

  // Register account
  await page.click('button:has-text("Register")');
  // Assert successful user registration (user displayed under table list)
  const usersTable = page.locator("table");
  const addedByName = usersTable.locator("tbody tr", { hasText: "Hue Nguyen" });
  const addedByEmail = usersTable.locator("tbody tr", {
    hasText: "nguyen.thi.hue-c@sun-asterisk.com",
  });

  await expect(addedByName).toBeVisible();
  await expect(addedByEmail).toBeVisible();
});
