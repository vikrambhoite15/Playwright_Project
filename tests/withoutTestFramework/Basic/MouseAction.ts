
// import {Browser, BrowserContext, chromium, Page} from "@playwright/test";

// async function mouseActions (){
//     let browser:Browser= await chromium.launch({headless:false});
//     let context:BrowserContext= await browser.newContext();
//     let page:Page= await context.newPage();

    

//Double click action:
    // await page.goto("https://qa-practice.netlify.app/double-click");
    // await page.waitForTimeout(2000);
    // await page.locator("#double-click-btn").dblclick();

//Right click action:
    //   await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    //   await page.waitForTimeout(2000);
    //   await page.locator("//span[text()='right click me']").click({button:'right'});

//Mouse Hover
    //    await page.goto("https://orangehrm.com/");
    //    await page.getByText("Allow all").click();
    //    await page.waitForTimeout(2000);
    //    await page.locator("//a[text()='Solutions']").hover();
    //    await page.waitForTimeout(2000);
    //    await page.locator("//a[text()='Resources']").hover();

//Drag and Drop:
    //   await page.goto("https://selenium08.blogspot.com/2020/01/drag-drop.html");
    //   await page.waitForTimeout(2000);
    //   await page.locator("#draggable").dragTo(page.locator("#droppable"));

    //   await page.goto("https://testautomationpractice.blogspot.com/");
    //   await page.waitForTimeout(2000);
    //   await page.locator("#draggable").dragTo(page.locator("#droppable"));

//scroll down by wheel:
    //   await page.goto("https://testautomationpractice.blogspot.com/");
    //   await page.waitForTimeout(2000);
    //   await page.mouse.wheel(0,2000);   
    //   await page.waitForTimeout(2000);
    //   await page.mouse.wheel(0,-2000);

//scroll down by specific element
    //   await page.goto("https://testautomationpractice.blogspot.com/");
    //   let element= page.locator("//input[@id='comboBox']");
    //   await page.mouse.wheel(0,3000);
    //   await element.scrollIntoViewIfNeeded();

    //   await page.mouse.wheel(0,3000);
    //   let element1= page.locator("//input[@id='input1']");
    //   await element1.scrollIntoViewIfNeeded();

    //   await page.mouse.wheel(0,3000);
    //   let element2= page.locator("//a[text()='Udemy Courses']");
    //   await element2.scrollIntoViewIfNeeded();
   
// }
// mouseActions();