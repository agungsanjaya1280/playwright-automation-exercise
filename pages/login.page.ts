import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  
  async fillEmail(email: string) {
    await this.page.locator('[data-qa="login-email"]').fill(email);
  }

 
  async fillPassword(password: string) {
    await this.page.locator('[data-qa="login-password"]').fill(password);
  }


  async clickLogin() {
    await this.page.locator('[data-qa="login-button"]').click();
  }


  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}