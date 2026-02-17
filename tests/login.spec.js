import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { users } from '../data/users.js';
import { en } from '../data/i18n/en.js';

test.describe('Rakuten Login Tests', () => {
  test('should navigate to connect page and verify user identifier input is visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();

    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('should show error message with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();

    await loginPage.login(users.testUser.email, users.testUser.password);

    const errorMessage = await loginPage.getErrorMessage();
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(en.errors.invalidCredentials);
  });
});
