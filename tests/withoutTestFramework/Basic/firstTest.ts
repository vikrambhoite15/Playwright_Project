// import { Browser, BrowserContext, chromium,firefox,Page }from "@playwright/test";

// async function myFirstScriplt(): Promise<void>{

//     //this represent Browser instance.
//     let browser:Browser= await chromium.launch( {headless:false});

//     //It help you to open browser in incognito mode
//     let context:BrowserContext = await browser.newContext();

//     let page:Page= await context.newPage();

//     await page.goto("https://www.edso.in/");

//     let title:string= await page.title();
//     console.log(title);
    
//     await browser.close();
// }
// myFirstScriplt();
//====================================================================================
    
//    async function openAmazon(){

//     let browser:Browser = await firefox.launch({headless:false});

//     let page:Page = await browser.newPage();

//     await page.goto("https://www.amazon.in/");
    
//     await browser.close();

//    }
//    openAmazon();
//=================================================================================