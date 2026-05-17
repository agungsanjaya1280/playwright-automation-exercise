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
    await productsPage.verifyProductVisible('Men Tshirt');
  })  
  test('should show no result for invalid product',
    async () => {

    await productsPage.open();

    await productsPage.searchProduct(
        'abcdefxyz'
    );

    await productsPage.verifyNoResults();
});
  test('should support partial search',
    async ()=>{await productsPage.open();

    await productsPage.searchProduct(
       'Shirt'
    );

    await productsPage.verifyProductVisible(
       'Men Tshirt'
    );
});
});