import {Browser, BrowserContext, chromium, Locator, Page} from "@playwright/test";

async function VisibleEnabled(){

    let browser:Browser= await chromium.launch({headless:false});

    let context:BrowserContext= await browser.newContext();

    let page:Page= await context.newPage();

    await page.goto("https://www.letskodeit.com/practice");

//Enabled-Disabled():

    //let Enabled:Locator= page.locator("#enabled-example-input");
   
    // console.log(await Enabled.isEnabled()); //true
    // await page.locator("#disabled-button").click();
    // console.log(await Enabled.isEnabled()); //false
    // console.log(await Enabled.isDisabled()); //true

    // if(await Enabled.isEnabled()){
    //     await page.locator("#enabled-example-input").fill("abcxyz");

    // }
    // else {
    //     console.log("texbox disabled");
        

    // }

     // let enable:Locator= page.getByPlaceholder("Enter Your Name");

    // if (await enable.isEnabled()){

    //     await page.getByPlaceholder("Enter Your Name").fill("Abc dhss");

    // }

//isVisible/isHidden():

    //   let visibility= page.locator("#displayed-text");
    //   //console.log(await visibility.isVisible()); //true
    //   //console.log(await visibility.isHidden());  //false

    //   page.locator("#hide-textbox").click();
    //   await page.waitForTimeout(3000);
    //   console.log(await visibility.isVisible()); //false
    //   console.log(await visibility.isHidden()); //true
     
}  
VisibleEnabled();