
import test from "@playwright/test";

test('Verify open sauce Demo app', async ({page}) =>{
   await page.goto("https://www.saucedemo.com/");
   
   await page.waitForTimeout(3000);
});

test('verify testautomation page', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(3000);
});

test('verify practice page', async({page})=>{
    await page.goto("https://www.letskodeit.com/practice");
    await page.waitForTimeout(3000);
});