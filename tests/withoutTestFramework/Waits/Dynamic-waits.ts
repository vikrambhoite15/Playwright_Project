
// import {Browser, BrowserContext, chromium, Locator, Page} from "@playwright/test";

// async function dynamicWaits(){
//     let browser:Browser= await chromium.launch({headless:false});
//     let context:BrowserContext= await browser.newContext();
//     let page:Page= await context.newPage();

//1. waitFor(): 
//   waits for an element to reach a specific state.
//   states: 1.visible 2.hidden 3.attached 4.detached

    // await page.goto("https://demoqa.com/dynamic-properties");
    // await page.locator("#visibleAfter").waitFor({state:'visible'});
    // console.log(await page.locator("#visibleAfter").isVisible());

//2.waitForSelector(): 
//  waits for an element to appear

    // await page.goto("https://www.hyrtutorials.com/p/waits-demo.html");
    // await page.getByText("Add Textbox1").click();
    // await page.waitForSelector("//input[@id='txt1']");
    // await page.locator("(//input[@id='txt1'])[1]").fill("abcd");

// waitForLoadState():
// wait until the page reaches a specific loading state before executing the next step.
//such state as  load, domcontentloaded, or networkidle.

//    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
//    await page.waitForLoadState('load');
//    await page.getByPlaceholder("Username").fill("Admin");
//    await page.getByPlaceholder("Password").fill("admin123");
//    await page.locator("//button[@type='submit']").click();

//waitForURL():
// wait until the page URL changes to the expected URL.
// It is commonly used after clicking a link, button, or submitting a form that navigates to another page.
   
    // await page.goto("https://www.saucedemo.com");
    // await page.locator("#user-name").fill("standard_user");
    // await page.locator("#password").fill("secret_sauce");
    // await page.locator("#login-button").click();

    // await page.waitForURL('https://www.saucedemo.com/inventory.html');
    // console.log(await page.title());
    
/*Diff between waitForURL() & waitForLoadState()

    waitForURL()	                 waitForLoadState()
  1.Waits for the URL to change.	 Waits for the page loading state.
  2.Used to verify navigation.	     Used to ensure the page has loaded.
  3.Example: "/inventory.html"	     Example: 'load', 'domcontentloaded
*/

// }
// dynamicWaits();