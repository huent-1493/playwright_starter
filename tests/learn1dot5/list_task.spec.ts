/**
 * Page: https://demo.playwright.dev/todomvc
 * Create test cases for the following scenarios:
 * 1. Open page
 * 2. Add 3 tasks: Task A, Task B, Task C
 * 3. Tick task 2 (use .nth(1))
 * 4. Check first task is Task A (use .first())
 * 5. Use .filter() to select the task with content "Task C" and delete it
 */

import { test, expect } from "@playwright/test";

const todoWeb = "https://demo.playwright.dev/todomvc";

test("test open todoWeb then check title page", async ({ page }) => {
  await page.goto(todoWeb);

  // Ensure a clean slate: clear data previous
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  const searchInput = page.getByPlaceholder("What needs to be done?");
  await searchInput.fill("Task A");
  await searchInput.press("Enter");

  await searchInput.fill("Task B");
  await searchInput.press("Enter");

  await searchInput.fill("Task C");
  await searchInput.press("Enter");

  const allTasks = page.locator(".todo-list li");

  // Tick task 2 (use .nth(1))
  await allTasks.nth(1).getByRole("checkbox").check();

  // First item should contain Task A
  await expect(allTasks.first()).toHaveText("Task A");

  // Confirm we have 3 tasks before deletion
  await expect(allTasks).toHaveCount(3);

  // Use .filter() to select the task with content "Task C" and delete it
  const taskC = allTasks.filter({ hasText: "Task C" });
  await taskC.hover();
  // The delete button appears on hover; click it
  await taskC.getByRole("button", { name: "Delete" }).click();

  // Confirm only 2 tasks remain
  await expect(allTasks).toHaveCount(2);
});
