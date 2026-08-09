import {Browser, BrowserContext, chromium,Page} from "@playwright/test";

async function PopupWindow(){
   
    let browser:Browser=await chromium.launch({headless:false}); 
    let context:BrowserContext= await browser.newContext(); 
   
    let page:Page= await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]);
   const allPopup= context.pages();
    console.log("No of pages:",allPopup.length);

    //get url of all pages
    console.log(allPopup[0].url());
    console.log(allPopup[1].url());

    for(const pw of allPopup){
      const title= await pw.title();

      if(title.includes('Selenium')){

        await pw.locator(".navbar-toggler-icon").click();
        await page.waitForTimeout(3000);
        await pw.close();
      }

    }
       
}
 PopupWindow();