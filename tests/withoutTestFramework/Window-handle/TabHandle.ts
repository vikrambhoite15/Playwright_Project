import {Browser, BrowserContext, chromium,Page} from "@playwright/test";

async function TabHandle(){
   
    let browser:Browser=await chromium.launch({headless:false}); 
    let context:BrowserContext= await browser.newContext(); 
   
    let parentPage:Page= await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    //2 statements should go parallely,so use promise.all() method.
      //context.waitForEvent('page');
      //parentPage.getByText("New Tab").click();

    const [childpage]= await Promise.all([context.waitForEvent('page'),parentPage.getByText("New Tab").click()]);

//Appraoch 1: switch between pages and get titles.
   // const pages= context.pages();  //returns an array
   // console.log("No of pages created:",pages.length);

    //console.log(await pages[0].title());
    //console.log(await pages[1].title());
    
//Appraoch 2:
   // console.log(await parentPage.title());
   // console.log(await childpage.title());

//Perform action on child window.
  // await childpage.getByText('Playwright with TypeScript Tutorials').click();
 //  console.log(await childpage.title());
   
//swict back to parent window
   await parentPage.bringToFront();
  
   await parentPage.waitForLoadState();
   
   await parentPage.locator("#name").fill("Vijay chavan");

//switch back to child window.
   
   await childpage.bringToFront();

   await childpage.locator("//input[@class='gsc-input']").fill("abcdr");

   
   await parentPage.waitForLoadState();

   
   await childpage.waitForTimeout(3000);
   await childpage.close();
   
  
}
TabHandle();