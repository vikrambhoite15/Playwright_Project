
import {test,expect} from "@playwright/test";

import { ExcelFile } from "./ExcelfileReader";

const loginData=ExcelFile.readFile("C:/Users/Tech Concept/Desktop/testData.xlsx","loginData");


test ("Verfiy login", async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(loginData[0].username);
    await page.locator("#password").fill(loginData[0].password);
    await page.locator("#login-button").click();
    await page.waitForTimeout(3000);
});