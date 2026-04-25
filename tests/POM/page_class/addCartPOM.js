const {expect} = require("@playwright/test")
export default class addCart{
    constructor(page){
        this.page = page;
        this.addButton = `//*[@onclick="cart.add('43');"]`;
        this.item = ".btn.btn-inverse.btn-block.btn-lg.dropdown-toggle"
        this.productPrice = "//*[@class='table table-striped']//td[4]"
        this.productCount = "//*[@class='table table-striped']//td[3]"
        this.productName = "//*[@class='table table-striped']//td[2]"
        this.cartcheckout = "//*[@class='text-right']//a[2]"
        this.subTotal = "//*[@class='table table-bordered']/tbody/tr[1]/td[2]"
        this.ecoTax = "//*[@class='table table-bordered']/tbody/tr[2]/td[2]"
        this.vat = "//*[@class='table table-bordered']/tbody/tr[3]/td[2]"

    }
    
    async Navigate(){
        await this.page.goto("https://tutorialsninja.com/demo/");
    }
    
    async addToCartButton(){
        await this.page.click(this.addButton);
    }
    
    async itemsButton(){
        await this.page.click(this.item);
    }

    async alertSuccess(){
        const v = await this.page.locator("//*[@class='alert alert-success alert-dismissible']")
        await expect(v).toBeVisible();
    }
    
    async CheckProductPrice(){
        await expect(this.page.locator(this.productPrice)).toHaveText("$602.00");
    }
    
    async CheckProductCount() {
        await expect(this.page.locator(this.productCount)).toContainText("x1");
    }

    async CheckProductName() {
        await expect(this.page.locator(this.productName)).toContainText("MacBook");
    }
    
    async PriceCalculation(){
    const ProductPriceText = await this.page.locator(this.productPrice).textContent()
    const subTotalTaxText = await this.page.locator(this.subTotal).textContent()
    const vatText = await this.page.locator(this.vat).textContent()
    const ecoTaxText = await this.page.locator(this.ecoTax).textContent()
    
    const productP = Number(ProductPriceText.replace("$",'').trim());
    const subTotalP = Number(subTotalTaxText.replace("$",'').trim());
    const vatP = Number(vatText.replace("$",'').trim());
    const ecoP = Number(ecoTaxText.replace("$",'').trim());
    
    const total = subTotalP + vatP + ecoP;
    console.log("Total calculated:", total);
     await expect(productP).toBe(total);
    }

    async ClickCheckout(){
        await this.page.click(this.cartcheckout);
    }
}