// import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

// async function traceViever(){
//     let browser:Browser= await chromium.launch({headless:false});
//     let context:BrowserContext= await browser.newContext();
//     await context.tracing.start({
//         screenshots:true,
//         snapshots:true
//     });
//     let page:Page= await context.newPage();

//    await  page .goto("https://www.saucedemo.com/");
//    await  page.locator("#user-name").fill("standard_user");
//    await  page.waitForTimeout(3000);
//    await  page.locator("#password").fill('secret_sauce');
//    await  page.waitForTimeout(3000);
//    await  page.locator("#login-button").click();
//    await page.waitForTimeout(3000);
//    await page.locator("#react-burger-menu-btn").click();
//    await page.waitForTimeout(3000);
//    await page.getByText('Logout').click();
//    await page.waitForTimeout(3000);
//    await page.close();

//    await context.tracing.stop({
//          path:'G:/Automation/screenshot/demotest.zip'
//    });

   

// }
// traceViever();