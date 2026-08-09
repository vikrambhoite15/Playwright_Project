//Xpath axes define the relationship between the current node and node in the document.
//They allow you to navigate through elements and attributes in an XML doucument.

// import{Browser, BrowserContext, chromium, Page,Locator} from "@playwright/test";

// async function xpathAxes():Promise<void>{

//     let browser:Browser= await chromium.launch({headless:false});
//     let context:BrowserContext=await browser.newContext();
//     let page:Page= await context.newPage();

   // await page.goto("https://www.w3schools.com/html/html_tables.asp");

//self Axes:  select <td> element that contains "Germany"
    
    //const germany:Locator=page.locator("//td[text()='Germany']/self::td");

//parent axes:
//    let parent:Locator= page.locator("//td[text()='Germany']/parent::tr");
//    console.log(await parent.textContent());
//   await page.waitForTimeout(3000);
//    browser.close();

//child axes:
//   let text = page.locator("//table[@id='customers']//tr[3]/child::td");
//   console.log(await text.nth(0).textContent());
//   console.log(await text.nth(1).textContent());
//   console.log(await text.nth(2).textContent());
//   await page.waitForTimeout(2000);
//   browser.close();

//Ancestor:
// The ancestor axis in XPath is used to find all parent elements of the current node, 
// such as the parent, grandparent, great-grandparent, up to the root element.
  
   //await page.goto("https://www.saucedemo.com/");

   //await page.locator("(//input[@id='login-button']/ancestor::form/div/input)[1]").fill("Vijay chavan");
   //await page.waitForTimeout(2000);

   //await page.locator("//input[@id='login-button']/ancestor::form//div//input[@id='password']").fill("1234567");
   //await page.waitForTimeout(3000);
   //await browser.close();

   
//descendant: 
//The descendant axis selects all child, grandchild, great-grandchild, and 
// deeper nested elements of the current node.

    //  await page.goto("https://www.saucedemo.com/");

    //  await page.locator("(//div[@class='login_wrapper']//descendant::input)[1]").fill("asdasasd");
    //  await page.locator("(//div[@class='login_wrapper']//descendant::input)[2]").fill("212233345");
    //  await page.locator("(//div[@class='login_wrapper']//descendant::input)[3]").click();
    //  await page.waitForTimeout(3000);
    //  browser.close();

//following:
//The following axis selects all elements that appear after the current element in the HTML document
  
//   await page.goto("https://www.saucedemo.com/");
//   await page.waitForTimeout(3000);

//   await page.locator("//input[@id='user-name']/following::input[2]").click();

//following-sibling:
//The following-sibling axis selects all sibling elements that come after the current element and have the same parent.   
//Siblings are at the same level of the current node. 
//It will find the element after the current node.

//    await page.goto("https://www.rediff.com/");

//    let text=await page.locator("(//div[@class='dropdown']//following-sibling::div)[1]").textContent();

//    console.log(text);
//    await page.waitForTimeout(3000);
//    await browser.close();
// }
// xpathAxes();
