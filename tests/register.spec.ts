import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';

test('User can register', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.goto();

  await registerPage.register(
    'John Doe',
    `john${Date.now()}@mail.com`
  );

  await expect(page).toHaveURL('/signup');
  await registerPage.completeAccountInfo();

 
  await registerPage.fillAddressInfo();

  await registerPage.clickCreateAccount();


  await expect(page.locator('text=Account Created')).toBeVisible();
});