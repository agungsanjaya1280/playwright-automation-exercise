import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/login.page';


test.describe('Search Product Functionality', () => {
  let productsPage: ProductsPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    
    await loginPage.goto();
    await loginPage.login(
        'cinem21413@hacknapp.com',
        '12345'
    );

    await expect(
        page.getByText('Logged in as')
    ).toBeVisible();
  });

  test('should display search results when searching for a product', async () => {
    await productsPage.open();
    await productsPage.searchProduct('Men');
    await productsPage.verifySearchResultsVisible();
    await productsPage.verifyProductVisible('Men');
  });
});