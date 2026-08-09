
// import{Browser, BrowserContext, chromium, Locator, Page} from "@playwright/test"

// async function multiSelectDropDown() {
//     let browser:Browser= await chromium.launch({headless:false});
//     let context:BrowserContext= await browser.newContext();
//     let page:Page= await context.newPage();

//     await page.goto("https://testautomationpractice.blogspot.com/");

//1.select using by visible text
   // page.locator("#colors").selectOption(['Red','Blue','Green']);
   // page.locator("#colors").selectOption(['Yellow','White','Green']);

//2.select by value attribute
     //page.locator("#colors").selectOption(['Blue','green','yellow']);    

//3.select by using lebel
   // page.locator("#colors").selectOption([{label:'Red'},{label:'White'}]);

//4.select by index
   // page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]);

//print all option:

//    let option:Locator= page.locator("//select[@id='colors']//child::option");

//    for(const element of await option.allTextContents()){

//     console.log(element);      
// }
// }
// multiSelectDropDown();