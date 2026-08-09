
import {test, expect} from "@playwright/test";

test('Mouse Hover action', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#");

    await page.getByText("Point Me").scrollIntoViewIfNeeded();

    await page.getByText("Point Me").hover();


    await page.waitForTimeout(5000);
});

test('Right Click', async ({page})=>{

    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button=page.locator("//span[text()='right click me']");

    await button.click({button:'right'});

    await page.locator("//ul[@class='context-menu-list context-menu-root']//li[1]").click();

    await page.waitForTimeout(3000);

});

test('Double click', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#");

    await page.getByText("Copy Text").dblclick();

    console.log(await page.locator("#field2").inputValue());

    await page.waitForTimeout(3000);
    
});

test('Drag & drop', async({page})=>{
 
    await page.goto("https://selenium08.blogspot.com/2020/01/drag-drop.html");

    await page.locator("#draggable").dragTo(page.locator("#droppable"));

    await page.waitForTimeout(3000);

});

test.only('Scroll down option', async ({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    //scroll down by wheeel
    // await page.waitForTimeout(3000);
    // await page.mouse.wheel(0,2000);
    // await page.waitForTimeout(3000);
    // await page.mouse.wheel(0,-500);

    //scroll down by specific element

    // await page.mouse.wheel(0,2000);
    // await page.locator("#mousehover").scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);

    // await page.locator("#mousehover").hover();

    await page.waitForTimeout(3000);

    
})
