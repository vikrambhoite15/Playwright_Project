
import {test, expect} from "@playwright/test";

test('keyboard action', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //focus()
     const input= page.locator("#name");
     await input.focus();

     //enter input
     await page.keyboard.type("Vijay");
     await page.waitForTimeout(3000);

     //ctrl+A
     await input.click();
     await page.keyboard.press('Control+A');

     //Ctrl+C
     await page.keyboard.press('Control+C');
     await page.waitForTimeout(3000);

     //ctrl+V
     await page.locator("#email").focus();
     await page.keyboard.press('Control+V');

     await page.waitForTimeout(3000);
});

test.only('Press Tab', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#name").focus();

    await page.keyboard.type("David Jack");
    await page.waitForTimeout(2000);

    //press tab
    await page.keyboard.press('Tab');
    await page.keyboard.type("Daavid@gmail.com");
    await page.waitForTimeout(2000);

    await page.keyboard.press('Tab');
    await page.keyboard.insertText("123456789");
    await page.waitForTimeout(2000);

    //delete using Backspace
    // await page.keyboard.press('Control+A')
    // await page.keyboard.press('Backspace');
    // await page.waitForTimeout(2000);

    //delete using delete button.
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
})


     