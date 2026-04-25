const {test,expect} = require("@playwright/test")
import addCart from "../page_class/addCartPOM.js";

test("Add to cart",async({page})=>{
    const addTocart = new addCart(page);

    await addTocart.Navigate();
    await addTocart.addToCartButton();
    await addTocart.itemsButton();
    await addTocart.alertSuccess();
    await addTocart.CheckProductPrice();
    await addTocart.CheckProductCount();
    await addTocart.CheckProductPrice();
    await addTocart.PriceCalculation();  
    await addTocart.ClickCheckout();
})