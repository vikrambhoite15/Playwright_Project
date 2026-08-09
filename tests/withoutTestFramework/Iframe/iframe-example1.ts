
import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

async function iframe() {
    let browser:Browser= await chromium.launch({headless:false});
    let context:BrowserContext= await browser.newContext();
    let page:Page= await context.newPage();

   // await page.goto("https://jqueryui.com/datepicker/");

//Get all available frame:
 
        // const f=  page.frames();
        // console.log(f.length);
        

//Using frame locator:

    // const frame= page.frameLocator(".demo-frame");
    // await frame.locator("//input[@id='datepicker']").click();
    // await page.waitForTimeout(3000);
    // await frame.locator("//a[@data-date='21']").click();
    // console.log(await frame.locator("//input[@id='datepicker']").inputValue()); 
    
//using frame() with name:
    // await page.goto("https://vinothqaacademy.com/iframe/");
    // const frame= page.frame({name:'employeetable'});
    // await frame?.locator("#nameInput").fill("Arjun");
    // await page.waitForTimeout(3000);
    // await frame?.locator("#roleInput").fill("Developer");


//Using frame() with URL:
 
    // await page.goto("https://jqueryui.com/datepicker/");

    // const frame=page.frame({url:'https://jqueryui.com/resources/demos/datepicker/default.html'});
    // await page.waitForTimeout(3000);
    // await frame?.locator("#datepicker").click();
    // await page.waitForTimeout(3000);
    // await frame?.getByText('16').click();

    // console.log(await frame?.locator("#datepicker").inputValue());
    


}
iframe();