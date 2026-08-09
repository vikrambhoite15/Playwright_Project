import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

async function iframePractice() {
    let browser:Browser= await chromium.launch({headless:false});
    let context:BrowserContext= await browser.newContext();
    let page:Page= await context.newPage();

    // await page.goto("https://demo.automationtesting.in/Frames.html");
    // await page.getByText("Iframe with in an Iframe").click();
    // await page.waitForTimeout(3000);


    // const mutliFrame= page.frameLocator("//div[@id='Multiple']");

    // const frame=mutliFrame.frameLocator("#singleframe");
    // await frame.locator("//input[@type='text']").fill("addcd");
//======================================================================================
    
    // await page.goto("https://vinothqaacademy.com/iframe/");

    //  const totalFrames=page.frames();
    //  console.log(totalFrames.length);
     

    //  const frame= page.frameLocator("//iframe[@name='employeetable']");
    //  await frame.locator("//input[@id='nameInput']").fill("David");
    //  await page.waitForTimeout(3000);
    //  await frame.locator("//input[@id='roleInput']").fill("QA");


    // const frame1= page.frameLocator("//iframe[@name='registeruser']");
    
    // const userName = frame1.locator("#vfb-5");
    // await page.waitForTimeout(3000);
    // await userName.fill("David");
    // await page.waitForTimeout(3000);
    // await frame1.locator("#vfb-7").fill("Miller");
   
    // const email=frame1.locator("#vfb-14");
    // await email.scrollIntoViewIfNeeded();

    //select dropdown.
    // await frame1.locator("#vfb-13-country").selectOption('India');
    // await page.waitForTimeout(3000);
    // await frame1.locator("#vfb-13-country").selectOption('Argentina');
    // await page.waitForTimeout(3000);
    // await frame1.locator("#vfb-13-country").selectOption({value:'France'});
    // await page.waitForTimeout(3000);
    // await frame1.locator("#vfb-13-country").selectOption({index:10});


    // const verification=frame1.locator("#vfb-3");
    // await verification.scrollIntoViewIfNeeded();
    // await verification.fill("56");
//===================================================================================




}
iframePractice();