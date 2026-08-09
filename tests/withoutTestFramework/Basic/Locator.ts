
// import {Browser, BrowserContext, chromium,Page,Locator, expect} from "@playwright/test";

// async function locators():Promise<void>{

//     let browser:Browser= await chromium.launch({headless:false});

//     let context:BrowserContext= await browser.newContext();

//     let page:Page= await context.newPage();
   //await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    //1.By id:
    // let userName:Locator= await  page.locator("#login1");

    // await userName.fill("abc@gmail.com");

    // let password:Locator= page.locator("#password");

    // await password.fill("Abc@1234");

    //2.class locators:

    // let userName:Locator= page.locator(".email-input");
    // let password:Locator= page.locator(".form-control");
    // let loginButton:Locator=page.locator(".signin-btn");

    // await userName.fill("xyz@gmail.com");
    // await password.fill("Xyz@1234");
    // await loginButton.click();
  
    //css selector:  
    // sytax: tagname[atribute='value']

    // let userName:Locator=page.locator("input[id='login1']");
    // let password:Locator=page.locator("input[class='form-control']");
    // let loginButton:Locator=page.locator("button[type='submit']");

    // await userName.fill("xyz@gmail.com");
    // await password.fill("12345678");
    // await loginButton.click();

    //nth locator:
   // await page.goto("https://www.letskodeit.com/practice");
    // await page.locator(".inputs").nth(2).fill("Abc");
    // await page.locator(".inputs").nth(3).fill("XYZ");

  //first locator:
 //await page.locator(".inputs").first().fill("abcdef");

  //last locators:
    //await page.locator(".inputs").last().fill("wruer dfdf");

//has text() locators:
   //await page.locator("a:has-text('Open Tab')").click();

   //await page.locator("button:has-text('Open Window')").click();
   //await page.locator("a:has-text('INTERVIEW')").click();

//and locator():
    //await page.goto("https://www.letskodeit.com/practice");
    //await page.locator("a:has-Text('Open Tab')").and(page.locator("#opentab")).click();

//or locator();
    //  await page.goto("https://www.letskodeit.com/practice");
    //  await page.locator("a:has-Text('Open Tab')").or(page.locator("#opentab")).click();

//getText():

     //await page.goto("https://www.letskodeit.com/practice");
    // await page.getByText("Open Tab").click();
    //await page.getByText("Sign In").click();

//getByplaceholder():

    //  await page.goto("https://www.saucedemo.com/");
    //  await page.getByPlaceholder("Username").fill("Abc@gmail.com");
    //  await page.getByPlaceholder("Password").fill("123456");

//getByTitle():

    // await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
    // await page.getByTitle('3rd party ad content').click();

//getByAltText():
//identifies images(and similar elements) based on the alt attribute.
//use this locator when your element supports all text such as img and area elements.

    //  await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
    //  await page.waitForTimeout(3000);
    //  await page.getByAltText("Rediff").click();
    //  await page.waitForTimeout(3000);
    //  await browser.close();
 
// }
// locators();