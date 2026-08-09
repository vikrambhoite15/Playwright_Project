
// import { Browser, BrowserContext, chromium,Page } from "@playwright/test";


// async function openPage():Promise<void>{

//     let browser:Browser= await chromium.launch({headless:false});

//     let context:BrowserContext= await browser.newContext();

//     let page:Page= await context.newPage();
    
//     await page.goto("https://www.saucedemo.com/");
    
//     let Title:string= await page.title();
//     console.log("Tilte of Page:",Title);

//     let URL:string= page.url();
//     console.log("URL of Page:",URL);
    

//     await browser.close();
    
// }
// openPage();