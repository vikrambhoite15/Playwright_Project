
import {test, expect} from "@playwright/test";

test('Login page', async ({page})=>{

    await page.goto("https://www.saucedemo.com/");

    const date=  Date.now();
    
    //fullPage screenshot
   // await page.screenshot({fullPage:true, path:`G:/Automation/screenshot/ss_${date}.png`});
    
    //foucs page scrrenshot
    //await page.screenshot({fullPage:false, path:`G:/Automation/screenshot/ss_${date}.png`});

    //capture an element screenshot
    //await page.locator("#login-button").screenshot({path:`G:/Automation/screenshot/ss_${date}.png`});
    //await page.locator(".login_logo").screenshot({path: `G:/Automation/screenshot/ss_${date}.png`});

    await page.waitForTimeout(3000);

     expect(await page.title()).toBe("Swag Labs")
});

test("Test case 2", async ({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    const title= await page.title();

     expect(title).toContain("sasdsd")


});