import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  private productsLink: Locator;
  private searchInput: Locator;
  private searchButton: Locator;
  private searchedProductsTitle: Locator;
  private productItems: Locator;

  constructor(private page: Page) {
    this.productsLink =
      page.getByRole('link', {
        name: /Products/
      });

    this.searchInput =
      page.getByRole('textbox', {
        name: 'Search Product'
      });

    this.searchButton =
      page.locator('#submit_search');

    this.searchedProductsTitle =
      page.getByText('Searched Products');
    
    this.productItems =
      page.locator(
        '.product-image-wrapper'
    );  
  }

  async open() {
    await this.productsLink.click();
  }

  async searchProduct(product: string) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }

  async verifySearchResultsVisible() {
    await expect(
      this.searchedProductsTitle
    ).toBeVisible();
  }
async verifyProductVisible(productName: string) {
    await expect(
        this.page
          .getByText(productName)
          .first()
    ).toBeVisible();
}
async openFirstProduct() {
    await this.page
      .getByRole('link', {
          name: /View Product/
      })
      .first()
      .click();
}

async verifyNoResults() {
    await expect(
        this.productItems
    ).toHaveCount(0);
}

};