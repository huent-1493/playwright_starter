import { test, expect } from '@playwright/test';


//// Access https://www.w3schools.com/, input search key to textfile search `id=""tnb-google-search-input""`

const SEARCH_INPUT_ID = '#tnb-google-search-input';

test('test open https://www.w3schools.com/ then search keyword', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
// Define the search key to be input
  const searchKey = 'Playwright Automation';

  // 2. Input search key to textfield search with id="tnb-google-search-input"
  await page.fill(SEARCH_INPUT_ID, searchKey);

  // 3. (Optional but recommended) Assert that the value was entered correctly
  const searchInput = page.locator(SEARCH_INPUT_ID);
  
  // Use toHaveValue assertion to verify the content of the input field
  await expect(searchInput).toHaveValue(searchKey);
});