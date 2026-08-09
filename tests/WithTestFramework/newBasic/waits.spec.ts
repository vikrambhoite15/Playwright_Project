
import {test, expect} from "@playwright/test";

test('Dynamic waits', async ({page})=>{

    //1. waitFor(): wait for an element to reach specific state
    //state like visible,enable,hidden,attached and detached

    // await page.goto("https://demoqa.com/dynamic-properties");
    // await page.locator("#visibleAfter").waitFor({state:'visible'});
    // console.log(await page.locator("#visibleAfter").isVisible());

    // await page.locator("#enableAfter").waitFor({state:'visible'});
    // console.log(await page.locator("#enableAfter").isEnabled());

    //2.waitForSelector():

    await page.goto("https://www.hyrtutorials.com/p/waits-demo.html");
    await page.locator("#btn1").click();
    await page.waitForSelector("//input[@id='txt1']");
    await page.locator("(//input[@placeholder='Textbox1'])[1]").fill("David");

    await page.waitForTimeout(3000);
    
    
})