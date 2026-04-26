## Visit page
Javascript:
cy.visit('/login')
Playwright:
await page.goto('/login')

## Get element + action
Cypress:
cy.visit('/login')
Playwright:
await page.locator('#email').fill('test@mail.com')

## Click
Cypress:
cy.get('button').click()
Playwright:
await page.locator('button').click()

## Assertions
Cypress:
cy.contains('Welcome').should('be.visible')
Playwright:
await expect(page.locator('text=Welcome')).toBeVisible()

## Before Each

test.beforeEach(async ({ page }) => {
  await page.goto('/login')
})

## Fixtures

test('login', async ({ page }) => {
  const user = {
    email: 'test@mail.com',
    password: '123456'
  }
})

## Run Modes

Headless (fast):
npx playwright test

Headed:
npx playwright test --headed

## Best Practice Selectors

❌ Avoid:
page.locator('.btn-primary')

## Base URL

// playwright.config.ts
use: {
  baseURL: 'https://example.com'
}

// usage
await page.goto('/login')

✅ Prefer:
page.getByRole('button', { name: 'Submit' })
page.getByLabel('Email')
page.getByText('Welcome')

## Test Structure

import { test, expect } from '@playwright/test'

test('test name', async ({ page }) => {
  await page.goto('/login')
})