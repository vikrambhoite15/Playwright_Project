
import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

async function keyboardAction(){
    let browser:Browser=await chromium.launch({headless:false});
    let context:BrowserContext= await browser.newContext();
    let page:Page= await context.newPage();

    // await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator("#name").fill("Vikram");
    
    //ctrl+A:
    // await page.waitForTimeout(2000);
    // await page.locator("#name").click();
    // await page.keyboard.press('Control+A');

    //ctrl+C:
    // await page.keyboard.press('Control+C');
    // await page.waitForTimeout(2000);

    //ctrl+V
    // await page.locator("#email").click();
    // await page.keyboard.press('Control+V');
    // await page.waitForTimeout(3000);

   //delete text
   //await page.keyboard.press('Control+A');
   //await page.keyboard.press('Delete');

   //delete text by backspace
    //  await page.keyboard.press('Control+a');
    //  await page.keyboard.press('Backspace');

//Tab & type:
   
    //  await page.goto("https://testautomationpractice.blogspot.com/");
    //  await page.locator("#name").click();
    //  await page.keyboard.type("Vikram");
    //  await page.waitForTimeout(3000);
    //  await page.keyboard.press('Tab');
    //  await page.keyboard.type("abc@gmail.com");
    //  await page.keyboard.press('Tab');
    //  await page.keyboard.type("9876543210");

//focus():(no mouse actions)
//Using focus cursor goes into searchbox.
//Text gets entered
//no mouse click occurs.
//search suggestions may not appear on some websites.

//    await page.goto("https://testautomationpractice.blogspot.com/");
//    await page.waitForTimeout(3000);
//    await page.locator("#Wikipedia1_wikipedia-search-input").focus();
//    await page.waitForTimeout(3000);
//    await page.getByText("Simple Alert").focus();




}
keyboardAction();