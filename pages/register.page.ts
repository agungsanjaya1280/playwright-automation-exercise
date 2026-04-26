import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  async register(name: string, email: string) {
    await this.page.locator('[data-qa="signup-name"]').fill(name);
    await this.page.locator('[data-qa="signup-email"]').fill(email);
    await this.page.locator('[data-qa="signup-button"]').click();
  }
  async selectTitle(title: 'Mr' | 'Mrs') {
    await this.page.locator(`input[value="${title}"]`).check();
  }

  async fillPassword(password: string) {
    await this.page.locator('[data-qa="password"]').fill(password);
  }

  async selectDateOfBirth(day: string, month: string, year: string) {
    await this.page.locator('[data-qa="days"]').selectOption(day);
    await this.page.locator('[data-qa="months"]').selectOption(month);
    await this.page.locator('[data-qa="years"]').selectOption(year);
  }

  async subscribeNewsletter() {
    await this.page.locator('#newsletter').check();
  }
  
async fillAddressInfo() {
  await this.page.locator('#first_name').fill('John');
  await this.page.locator('#last_name').fill('Doe');
  await this.page.locator('#company').fill('Test Company');
  await this.page.locator('#address1').fill('123 Street');
  await this.page.locator('#address2').fill('Apartment 1');
  await this.page.locator('#country').selectOption('India');
  await this.page.locator('#state').fill('Bali');
  await this.page.locator('#city').fill('Denpasar');
  await this.page.locator('#zipcode').fill('12345');
  await this.page.locator('#mobile_number').fill('08123456789');
}

  // ✅ FULL FLOW
  async completeAccountInfo() {
    await this.selectTitle('Mr');
    await this.fillPassword('Password123');
    await this.selectDateOfBirth('1', '1', '2000');
    await this.subscribeNewsletter();
    await this.fillAddressInfo();
  }
  async clickCreateAccount() {
  await this.page.locator('[data-qa="create-account"]').click();
  }
}