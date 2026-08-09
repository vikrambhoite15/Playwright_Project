import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

async function ScreenShot(){
    let browser:Browser= await chromium.launch({headless:false});
    let context:BrowserContext= await browser.newContext();
    let page:Page= await context.newPage();

    await page.goto("https://www.letskodeit.com/practice");

//Capture full page screenshot.
    
    //  await page.screenshot({
    //     path:'G:/Automation/screenshot/Screenshot.png',
    //     fullPage: true
    //  })

//Capture focus page screenshot
      
        // await page.screenshot({
        //     path:'G:/Automation/screenshot/screenshot.png',
        //     fullPage:false
        // });
//Take a screenshot of single element.
   
    const time= Date.now();
    const element= page.locator("#alertbtn");

    // await element.screenshot({
    //     path:`G:/Automation/screenshot/screenshot_${time}.png`,
    // });    

    const element2= page.locator("#autosuggest");
    await element2.fill("V!kr@m");

    element2.screenshot({
        path:`G:/Automation/screenshot/screenshot_${time}.png`,
    });
    
}
 ScreenShot();