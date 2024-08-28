// import Page from "./page";
// import { $ } from "@wdio/globals";

// class CartPage extends Page {
//   get checkoutButton() {}
//   get continueShoppingButton() {}

//   open() {
//     return super.open("cart.html");
//   }
// }

// export default new CartPage();

import Page from "./page";
import { $, expect } from "@wdio/globals";

class CartPage extends Page {
  get checkoutButton() {
    return $("#checkout");
  }
  get continueShoppingButton() {
    return $("#continue-shopping");
  }
  get cartItem() {
    return $(".cart_item");
  }

  async validateItemInCart() {
    await expect(this.cartItem).toBeExisting();
  }

  open() {
    return super.open("cart.html");
  }
}

export default new CartPage();
