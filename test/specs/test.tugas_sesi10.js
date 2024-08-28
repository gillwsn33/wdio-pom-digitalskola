import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import CartPage from "../pageobjects/cart.page";
import { browser } from "@wdio/globals";

describe("Saucedemo E2E Test", () => {
  it("Sukses Login -> Sukses Menambahkan Item -> Melihat Keranjang", async () => {
    // User success login
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");

    // Validate user berada di dashboard setelah login
    await LoginPage.validateOnDashboard();
    await browser.pause(3000);

    // Add item to cart
    await HomePage.addItemToCart();

    // Validate item sukses ditambahkan ke cart
    await HomePage.validateItemAddedToCart();
    await browser.pause(3000);

    // Go to cart page
    await HomePage.cartIcon.click();

    // Validate item in cart
    await CartPage.validateItemInCart();

    // Add pause
    await browser.pause(5000);
  });

  after(async () => {
    await browser.pause(5000);
  });
});
