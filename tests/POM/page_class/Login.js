import { expect } from '@playwright/test';
export default class Login{

    constructor(page){
        this.page = page;

        this.MyAccount = "//span[normalize-space()='My Account']";
        this.loginLink = '//*[@class="dropdown-menu dropdown-menu-right"]//li[2]';
        this.Email = '#input-email';
        this.pass = '#input-password';
        this.login = '//*[@class="btn btn-primary" and @value="Login"]';

    }
    async navigation(){
        await this.page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");

    }
    async formfill(){
        await this.page.locator(this.MyAccount).click();
        await this.page.locator(this.loginLink).click();
    }
    async entercredentials(email,pass){
        await this.page.fill(this.Email,email);
        await this.page.fill(this.pass,pass);
    }
    async lclick(){
        await this.page.locator(this.login).click();
    }
    async verification(){
         await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
}
}