const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
    expect(page.url()).toContain('/secure');
  });
});
