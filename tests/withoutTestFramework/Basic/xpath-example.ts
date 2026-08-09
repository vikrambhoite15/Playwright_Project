/* Xpath:
   -Types of Xpath:
   1. Absolute Xpath:
   - An absolute Xpath provides the full path from the root of the document to the 
     target element.
   - It starts with a single /, which represents the root node.
   - Ex: /html/body/header/div/div/div[2]/div/input

   2. Relative Xpath:
   - Relatice Xpath is more flexible way of finding an element.
   - It starts with //, which allows xpath to search anywhere in the document.
   - ex: //*[@attribute="Value"]  */

   
// import {Browser, BrowserContext, chromium,Page} from "@playwright/test";

// async function xpath():Promise<void>{

//     let browser:Browser= await chromium.launch({headless:false});

//     let context:BrowserContext= await browser.newContext();

//     let page:Page= await context.newPage();
//     await page.goto("https://testautomationpractice.blogspot.com/");

   

//Basic xpath
    
    // await page.locator("//input[@id='name']").fill("Vijay chavan");
    // await page.waitForTimeout(2000);
    // await page.locator("//input[@placeholder='Enter EMail']").fill("vijay@gmail.com");

//xpath text():

    //await page.waitForTimeout(2000);
    //await page.locator("//a[text()='Udemy Courses']").click();
    //await page.locator("//a[text()='Online Trainings']").click();

//xpath using OR & AND:
  
//    await page.waitForTimeout(2000);
//    await page.locator("//input[@id='phone' and @placeholder='Enter Phone']").fill("123456789");
//    await page.waitForTimeout(2000);
//    await page.locator("//textarea[@id='textarea' or @class='form-control']").
//          fill("47,Pune,Maharashtra");
   
//Xpath start with():

//   await page.locator("//input[starts-with(@id,'na')]").fill("David jack");
//   await page.waitForTimeout(3000);
//   await page.locator("//input[starts-with(@id,'em')]").fill("david@gmail.com");
//   await page.waitForTimeout(3000);
//   await browser.close();

//Xpath contains()

//    await page.locator("//input[contains(@placeholder,'Name')]").fill("abc xyz");
//    await page.waitForTimeout(3000);      
     // await page.locator("//a[contains(text(),'Course')]").click();

// }
// xpath();