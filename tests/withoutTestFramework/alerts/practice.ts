// import {Browser, BrowserContext, chromium,Page} from "@playwright/test";

// async function alerts(){
//     let browser:Browser= await chromium.launch({headless:false});
//     let context:BrowserContext= await browser.newContext();
//     let page:Page= await context.newPage();

//     await page.goto("https://www.letskodeit.com/practice");

    // page.on('dialog',async dialog =>{
    //     console.log(dialog.type());
    //     console.log(dialog.message()); 
    //     await page.waitForTimeout(3000);  
    //     dialog.accept();   
    // })
    // await page.locator("#alertbtn").click();

//     page.on('dialog', async dialog =>{
//         console.log(dialog.type());
//         console.log(dialog.message());
//         await page.waitForTimeout(3000);

//         //dialog.accept(); 
//         dialog.dismiss();  
//     })
//     await page.locator("#confirmbtn").click();
// }
//alerts();