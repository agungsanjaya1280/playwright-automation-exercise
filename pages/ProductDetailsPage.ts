import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {

    private quantity: Locator;
    private addToCartButton: Locator;
    private continueShoppingButton: Locator;

    constructor(private page: Page){

        this.quantity =
            page.locator('#quantity');

        this.addToCartButton =
            page.getByRole(
                'button',
                { name:/Add to cart/ }
            );

        this.continueShoppingButton =
            page.getByRole(
                'button',
                { name:'Continue Shopping' }
            );
    }

    async setQuantity(qty:number){
        await this.quantity.fill(
            qty.toString()
        );
    }

    async addToCart(){
        await this.addToCartButton.click();
    }

    async continueShopping(){
        await this.continueShoppingButton.click();
    }
}