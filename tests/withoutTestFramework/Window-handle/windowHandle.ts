import {Browser, BrowserContext, chromium,Page} from "@playwright/test";

//Browser---> Context--->pages

//Browser---> chromium,firefox,webkit

//Contexts---> We can have multiple contexts for multiple users/apps for same browser.
//             provide a way to operate multiple indepandent browser sessions.

//page ---> under page have New Tab,window,popup

async function windowHandle(){
   let browser:Browser=await chromium.launch({headless:false}); //create browser
   let context:BrowserContext= await browser.newContext(); //create context

   //create 2 pages
   let page1:Page= await context.newPage();
   let page2:Page= await context.newPage();
   console.log("No of pages created:",context.pages().length);
   

  await page1.goto("https://testautomationpractice.blogspot.com/");
  page1.waitForLoadState('load');
  console.log(await page1.title());
  

  await page2.goto("https://www.saucedemo.com/");
  page2.waitForLoadState('load');
  console.log(await page2.title());
  
}
windowHandle();