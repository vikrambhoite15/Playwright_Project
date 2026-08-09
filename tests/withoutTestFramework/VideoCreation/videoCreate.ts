import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

async function video(){
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

    await page.goto("https://www.saucedemo.com/");
    
    await page.waitForTimeout(3000);
    await page.locator("#user-name").fill("standard_user");

    await page.waitForTimeout(3000);
    await page.locator("#password").fill("secret_sauce");
    
    await page.waitForTimeout(3000);
    await page.locator("#login-button").click();
    
    await page.waitForTimeout(3000);
    await page.close();
    
}
video();