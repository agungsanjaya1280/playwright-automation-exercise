import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://automationexercise.com/', // change later
    headless: false,
  },
});