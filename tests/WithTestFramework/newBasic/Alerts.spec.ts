
import {test,expect} from "@playwright/test";

test('alerts handles', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog)=>{
        console.log(dialog.message());
        expect(dialog.message()).toContain("I am an alert box!");
        console.log(dialog.type());
        await page.waitForTimeout(3000);
        dialog.accept();      
    })
    await page.locator("#alertBtn").click();

});

test('Confirm dialog', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog)=>{
        
        console.log(dialog.type());
        expect(dialog.type()).toContain("confirm")
        
        console.log(dialog.message());
        expect(dialog.message()).toContain("Press a button!");

        await page.waitForTimeout(3000);

        //dialog.accept();
        dialog.dismiss();       
    });
    await page.locator("#confirmBtn").click();
});

test.only('Prompt alerts', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog)=>{
        
        console.log(dialog.type());
        expect(dialog.type()).toContain('prompt')
        console.log(dialog.message());
        await page.waitForTimeout(3000);

        dialog.accept('Hello');
        
    });

    await page.locator("#promptBtn").click();

    await page.waitForTimeout(3000);

});