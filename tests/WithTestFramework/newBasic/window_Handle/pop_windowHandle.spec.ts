
import {test, expect} from "@playwright/test";


test('pop window handle', async ({browser})=>{

    const context= await browser.newContext();

    const page= await context.newPage();

    await page.goto("https://www.letskodeit.com/practice");

    const [pops]=await Promise.all([page.waitForEvent('popup'), page.locator("#openwindow").click()]);

    const allPopups=  context.pages();
    console.log("Number of Popups windows:",allPopups.length);
    await page.waitForTimeout(3000);

    await pops.locator("//a[text()='INTERVIEW']").click();
    await pops.waitForTimeout(5000);

    await page.bringToFront();
    await pops.bringToFront();

    
})