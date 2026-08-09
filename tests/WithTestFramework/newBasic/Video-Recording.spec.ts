
import {test,expect,Page} from "@playwright/test";

test('Record video', async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(2000);
    await page.locator("#user-name").fill("standard_user");
    await page.waitForTimeout(2000);
    await page.locator("#password").fill("secret_sauce");
    await page.waitForTimeout(2000);
    await page.locator("#login-button").click();
    await page.waitForTimeout(2000);
});
