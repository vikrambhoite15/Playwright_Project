
import {test, expect} from "@playwright/test";

test('Auto-Rertying Assertions', async ({page})=>{

    //Auto-Retrying assertions
    await page.goto("https://www.saucedemo.com/");

    await expect(page).toHaveURL("https://www.saucedemo.com");
    console.log( page.url());


    const username=  page.locator("#user-name");
    await expect(username).toBeVisible();

    //2. Non retrying assertions

    const title=await page.title();
    console.log(title);
     expect.soft(title).toContain("adasd");

     await page.locator("#user-name").fill("David");
     const text= await page.locator("#user-name").inputValue();
     expect(text).toBe("David");

     //Negative matcher:

     const logo= page.locator(".login_logo");

     await expect(logo).not.toBeVisible();



    
   
});