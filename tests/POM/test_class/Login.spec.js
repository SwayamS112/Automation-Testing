import { test } from '@playwright/test';

import Login from '../Page_class/login.js';
const testData = [
    {
        email : "soodswayam41@gmail.com",
        password:"123456"
    },
    {
        email:"wrong@test.com",
        password:"test123"
    }
];
for(const data of testData){


test(`U Login - ${data.email}`,async({page})=>{

    const login = new Login(page);

    await login.navigation();
    await login.formfill();
    await login.entercredentials(data.email,data.password);
    await login.lclick();
    await login.verification();

});
}