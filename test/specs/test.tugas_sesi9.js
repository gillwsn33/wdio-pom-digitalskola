// describe("Test Saucedemo", () => {
//   it("Test Login Berhasil dan Tambah Item ke Keranjang", async () => {
//     await browser.url("https://www.saucedemo.com");

//     const usernameTextBox = await browser.$("#user-name");
//     const passwordTextBox = await browser.$("#password");
//     const loginButton = await browser.$('//input[@type="submit"]');

//     await usernameTextBox.addValue("standard_user");
//     await passwordTextBox.addValue("secret_sauce");
//     await loginButton.click();

//     await browser.pause(5000);
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");

//     const addToCartButton = await browser.$('//button[@id="add-to-cart-sauce-labs-backpack"]');
//     addToCartButton.click();

//     await browser.url("https://www.saucedemo.com/cart.html");
//     await browser.pause(5000);

//     await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
//   });
// });
