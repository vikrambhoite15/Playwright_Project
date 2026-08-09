
import {test,expect} from "@playwright/test";

test('Tab Handle', async ({browser})=>{

    const context= await browser.newContext();
    const parentPage= await context.newPage();

   await parentPage.goto("https://testautomationpractice.blogspot.com/");

   const [childPage]=await Promise.all([context.waitForEvent('page'),parentPage.getByText("New Tab").click()]);

   const pages=context.pages();
   console.log("Number of pages:", pages.length);

   console.log("Parent Page Title:", await parentPage.title());
   console.log("Child Page Tile:", await childPage.title());

   //perform action in child page

  await childPage.locator("//a[text()='Career Guidance']").click();
  await parentPage.waitForTimeout(3000);
   
  //switch back to parent page
  await parentPage.bringToFront();
  await parentPage.waitForTimeout(3000);

  //switch back to child page
  await childPage.bringToFront();
   
   

   await parentPage.waitForTimeout(3000);
})




test.only('tab haondle', async ({browser})=>{

  const context= await browser.newContext();
  const mainPage= await context.newPage();

  await mainPage.goto("https://www.amazon.in/");

  const [child]=await Promise.all([context.waitForEvent('page'), mainPage.locator("a[aria-label='AugART26_Event']").click()]);
 await child.waitForTimeout(3000);

  console.log(await mainPage.title());
  console.log(await child.title());
  
  
  await mainPage.waitForTimeout(3000);
})