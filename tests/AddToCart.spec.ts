import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';

test(
'search product and add to cart',
async ({ page }) => {

    const login =
        new LoginPage(page);

    const products =
        new ProductsPage(page);

    const productDetails =
        new ProductDetailsPage(page);

    await login.goto();

    await login.login(
        'cinem21413@hacknapp.com',
        '12345'
    );

    await products.open();

    await products.searchProduct('Men');

    await products.openFirstProduct();

    await productDetails.setQuantity(2);

    await productDetails.addToCart();

    await productDetails.continueShopping();

});