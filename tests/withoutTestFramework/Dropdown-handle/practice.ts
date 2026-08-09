import{Browser, BrowserContext, chromium, Locator, Page} from "@playwright/test"

async function dropdown(){
    let browser:Browser= await chromium.launch({headless:false});
    let context:BrowserContext=await browser.newContext();
    let page:Page=await context.newPage();

    //await page.goto("https://www.amazon.in/");

    //await page.locator("#nav-hamburger-menu").click();
   // await page.getByText("Bestsellers").click();

    // const frame=page.frames();
    // console.log(frame.length);


   // await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
   // await page.locator("//div[@rel-title='Select Country']//following::select").selectOption('India');
    
//    const text=await page.locator("//div[@rel-title='Select Country']//following::option").allTextContents();
//      for(const value of text){
//         console.log(value);   
//     }
 
    //   await page.waitForTimeout(3000);
    //   await page.locator("//div[@rel-title='Select Country']//following::select").selectOption({value:'CAN'});
    //   await page.waitForTimeout(3000);
    //   await page.locator("//div[@rel-title='Select Country']//following::select").selectOption({label:'Hong Kong'});
    //   await page.waitForTimeout(3000);
    //   await page.locator("//div[@rel-title='Select Country']//following::select").selectOption({index:56});

//=============================================================================================================

    //    await page.goto("https://jqueryui.com/selectmenu/");
    //    await page.waitForTimeout(3000);
    //    await page.locator("//span[@id='speed-button']").selectOption('Fast');
       

}
dropdown();