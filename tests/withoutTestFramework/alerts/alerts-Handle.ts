
import {Browser, BrowserContext, chromium,Page} from "@playwright/test";

/*1.By default, dialogs are auto-dismissed by playwright, So we don't have to handle them.

  2.However, We can use a dialog handler before the action that triggers the dialog to
    either dialog.accept() or dialog.dismiss() it. */

async function alertHandles(){
    let browser:Browser= await chromium.launch({headless:false});
    let context:BrowserContext= await browser.newContext();
    let page:Page= await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

//simple Alert:
   
//    page.on('dialog',async dialog =>{
//             console.log(dialog.type());
//             console.log( dialog.message());
//             await page.waitForTimeout(3000);
//             await dialog.accept();         
//    })
//    await page.locator("#alertBtn").click();

//confirm alert:
    //     page.on('dialog',async dialog =>{
    //         console.log(dialog.type());
    //        console.log(dialog.message());
    //       await page.waitForTimeout(4000);
            
    //        await dialog.accept(); 
            
    //        //await dialog.dismiss();
    //    })
    //    await page.locator("#confirmBtn").click();
    
// Prompt alert:
   
        //  page.on('dialog', async dialog =>{
        //     console.log(dialog.type());
        //     console.log(dialog.message());
        //     console.log(dialog.defaultValue());
            
        //     await page.waitForTimeout(3000);
            
        //     await dialog.accept('Hello..How are you??'); 
           
        //     //await dialog.dismiss(); 
        // })
        //await page.locator("#promptBtn").click();
        
        // const text=await page.locator("#demo").innerText();
        // console.log(text);
        

}
alertHandles();