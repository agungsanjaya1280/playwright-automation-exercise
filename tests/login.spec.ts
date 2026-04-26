import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('test@mail.com', '123456');

  await expect(page.locator('text=Dashboard')).toBeVisible();
});