
import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

// async function navigate(){
//     let browser:Browser= await chromium.launch({headless:false});

//     let context:BrowserContext= await browser.newContext();

//     let page:Page=await context.newPage();

//     await page.goto("https://www.rediff.com/");
//     await page.locator("#prof_icon").click();
//     await page.waitForTimeout(3000);

//     await page.goBack();
//     await page.waitForTimeout(3000);
//     await page.goForward();

//     await page.waitForTimeout(2000);
//     await page.reload();
// }
// navigate();


// async function navigation(){
//     let browser:Browser= await chromium.launch({headless:false});

//     let context:BrowserContext= await browser.newContext();

//     let page:Page=await context.newPage();

//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.locator("//a[text()='Udemy Courses']").click();

//     await page.waitForTimeout(2000);
//     await page.goBack();

//     await page.waitForTimeout(2000);
//     await page.goForward();

//     await page.waitForTimeout(3000);
//     await page.reload();

//     await page.waitForTimeout(3000);
//     await browser.close();

// }
// navigation();