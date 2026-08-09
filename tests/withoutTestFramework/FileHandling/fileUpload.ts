import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

async function UploadFile(){
    let browser:Browser= await chromium.launch({headless:false});
    let context:BrowserContext= await browser.newContext();
    let page:Page= await context.newPage();

   await page.goto("https://the-internet.herokuapp.com/upload");

   //await page.locator("#file-upload").setInputFiles('G:/Automation/screenshot/ScreenShot.png');

  // await page.waitForTimeout(3000);

   //await page.locator("#file-submit").click();
   //await page.waitForTimeout(3000);

  await page.locator("#file-upload").setInputFiles('C:/Users/Tech Concept/Desktop/samplefile.txt');
  await page.waitForTimeout(3000);
  await page.locator("#file-submit").click();
  await page.waitForTimeout(3000);

  await page.screenshot({
    path:'G:/Automation/ss.png',
    fullPage:false
   });

}
UploadFile();