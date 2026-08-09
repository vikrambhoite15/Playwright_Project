
import {test,expect, chromium} from "@playwright/test";

test('Browser context demo', async ()=>{

    const browser= await chromium.launch({headless:false});  //create browser
    const context= await browser.newContext(); //create context

    //create pages

    const page1=await context.newPage();
    const page2= await context.newPage();
    console.log("Number of pages:",context.pages().length);
    

   await page1.goto("https://testautomationpractice.blogspot.com/");
   console.log(await page1.title());

   await page2.goto("https://www.saucedemo.com/");
   console.log(await page2.title());
   
   await page1.waitForTimeout(3000);
   await page2.waitForTimeout(3000);


})