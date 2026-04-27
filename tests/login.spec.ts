import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login.page';

test.describe('Login Functionality', () => {

  test('Login with correct email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

  
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();

    await page.getByRole('link', { name: 'Signup / Login' }).click();

    await expect(page.locator('text=Login to your account')).toBeVisible();

 
    await loginPage.login(
      'cinem21413@hacknapp.com',     
      '12345'        
    );

    await expect(page.locator('text=Logged in as')).toBeVisible();

  });

  test('Login with incorrect email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();

    await page.getByRole('link', { name: 'Signup / Login' }).click();

    await expect(page.locator('text=Login to your account')).toBeVisible();

    await loginPage.login(
      'wrong@mail.com',
      'wrongpassword'
    );

    await expect(
      page.locator('text=Your email or password is incorrect!')
    ).toBeVisible();
  });

});