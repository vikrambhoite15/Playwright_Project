import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

async function videocreate(){
    let browser:Browser= await chromium.launch({headless:false});
    let context:BrowserContext= await browser.newContext({
        recordVideo:{
            dir:'G:/Automation/screenshot',
            size:{
                width:1200,
                height:1000
            }
          
        }
    });
    let page:Page= await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async dialog =>{
        await page.waitForTimeout(3000);
        dialog.accept('Hello')});

    
    await page.locator("#alertBtn").click();
    await page.waitForTimeout(3000);

    await page.locator("#confirmBtn").click();

    await page.waitForTimeout(3000);
    await page.locator("#promptBtn").click();
    await page.waitForTimeout(3000);

    await page.close();
}
videocreate();