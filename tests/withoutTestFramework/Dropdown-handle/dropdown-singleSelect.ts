
// import{Browser, BrowserContext, chromium, Locator, Page} from "@playwright/test"

// async function dropdown(){
//     let browser:Browser= await chromium.launch({headless:false});
//     let context:BrowserContext=await browser.newContext();
//     let page:Page=await context.newPage();

//     await page.goto("https://testautomationpractice.blogspot.com/");
    
//select option from drop down(4 ways)

    //1. visible text
      // await page.locator("#country").selectOption('India');
      // await page.locator("#country").selectOption('Germany');

    //fetch the selected value
    //inputvalue() method return single element only.
     //const value= await page.locator("#country").inputValue();
     //console.log(value);
     
    
    //2.by using value attribute
      //await page.locator("#country").selectOption({value:'uk'});
      //await page.locator("#country").selectOption({value:'japan'});

    //3.by using label
      //await page.locator("//select[@id='country']").selectOption({label:'Brazil'});
      //await page.locator("//select[@id='country']").selectOption({label:'Australia'});

    //4.by using index
      //await page.locator("#country").selectOption({index:3});
      //await page.locator("#country").selectOption({index:1});

//Check number of options in the dropdown.
    //let count = await page.locator("//select[@id='country']//child::option").count();
                        //or
    //let count = await page.locator("#country>option").count();
    //console.log("Count number of options:",count);

//check option present in dropdown.

//    let option:Locator = page.locator("//select[@id='country']//child::option");
//    //console.log(await option.allTextContents());

//    for(const opt of await option.allTextContents()){
//     console.log(opt);
//    }
// }
// dropdown();