/* Use page: https://material.playwrightvn.com/01-xpath-register-page.html

Yêu cầu:
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

test("test open page then register account", async ({ page }) => {
  await page.goto(
    "https://material.playwrightvn.com/01-xpath-register-page.html"
  );

  // Input data to field 
  await page.fill("#username", "Hue Nguyen");
  await page.fill("#email", "nguyen.thi.hue-c@sun-asterisk.com");
  await page.check('input[name="gender"][value="Female"]');

  await page.check('input[name="hobbies"][value="Cooking"]');

  /// Select multiple options in a multi-select dropdown
  const interestedSelect = page.locator('#interests');
  await interestedSelect.selectOption(['technology', 'music']);


  const countrySelect = page.locator('#country');
  await countrySelect.selectOption(['canada']);

  await page.fill("#dob", "05/09/1996");

  await page.fill("#bio", "Nguyen Thi Hue - Newbie Automation Tester");


});
