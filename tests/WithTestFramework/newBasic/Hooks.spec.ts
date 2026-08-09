
import test from "@playwright/test";

test('Verify Radio button', async ({page})=>{
    await page.goto("https://www.letskodeit.com/practice");
    await page.locator("#bmwradio").click();
    console.log("Select option:",await page.locator("#bmwradio").inputValue());
    
})

test ('Verify checkbox', async({page})=>{
    await page.goto("https://www.letskodeit.com/practice");
    await page.locator("#bmwcheck").click();
    await page.locator("#benzcheck").click();
    console.log("Select options:",await page.locator("#benzcheck").inputValue());
    console.log("Select options:",await page.locator("#bmwcheck").inputValue());
    
    
})

test.afterEach(async({page}) =>{
    const date= Date.now();
    await page.screenshot({
        path:`G:/Automation/ss_${date}.png`,
        fullPage:false
    });
    console.log("ScreenShot taken");
    
});

test.beforeEach(async () =>{
    console.log("  before Test Started..");   
});

test.beforeAll(async () =>{
    console.log("Before All Test runned..");
    
});

test.afterAll(async ()=>{
    console.log("After All test runned..");
    
});

//========================================================================================================

// test.afterEach(async ()=>{
//     console.log("After each test");
    
//     });
// test.beforeEach(async () =>{
//     console.log("Bfore each test");
    
// })

// test('Verify 1st test case', async ({page})=>{
//     console.log("Test Case-1");
    
// })
// test('Verify 2nd test case', async({page})=>{
//     console.log("Test case-2");
    
// })

// test.afterAll(async ()=>{
//     console.log("After All");
    
// });

// test.beforeAll(async ()=>{
//     console.log("Before All");
    
// });

