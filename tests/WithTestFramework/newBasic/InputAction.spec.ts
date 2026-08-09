import {test, expect} from "@playwright/test";


test.beforeEach('Open test Automation page', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");    
});

test.skip("Input text Box", async ({page})=>{

    const NameTextBox= page.locator("#name");
    await expect(NameTextBox).toBeVisible();
    await expect(NameTextBox).toBeEnabled();

    //get max length of textbox
    const maxlength= await NameTextBox.getAttribute("maxlength");
    console.log(maxlength);

    await NameTextBox.fill("David max");
    console.log(await NameTextBox.inputValue());
    expect(await NameTextBox.inputValue()).toBe("David max");


    const emailTxtBox= page.locator("#email");
    await expect(emailTxtBox).toBeVisible();
    await expect(emailTxtBox).toBeEnabled();

    await emailTxtBox.fill("Abc@gmail.com");
    const enteredValue= await emailTxtBox.inputValue();
    console.log(enteredValue);
    expect(enteredValue).toBe("Abc@gmail.com");

    await page.waitForTimeout(3000);

});

//Radio Button

test.skip('Radio button Actions', async ({page})=>{

    const maleButton= page.locator("#male");
    await expect(maleButton).toBeVisible();
    await expect (maleButton).toBeEnabled();
    await maleButton.check();   //select male button
    await expect(maleButton).toBeChecked();

    await page.waitForTimeout(3000);

    const femaleButton= page.locator("#female");
    await expect(femaleButton).toBeVisible();
    await femaleButton.check();  //select female button
    await expect(femaleButton).toBeChecked();

    await page.waitForTimeout(3000);
    });

test('CheckBox Actions', async ({page})=>{

    //select specific checkbox

    // const monday= page.locator("#monday");
    // await monday.check();
    // await expect(monday).toBeChecked();

    // const tue= page.locator("#tuesday");
    // await tue.check();
    // await expect(tue).toBeChecked();
    // await page.waitForTimeout(3000);

    // await monday.uncheck();
    // await page.waitForTimeout(3000);

    //Select all checkboxs:

    const days= page.locator("//label[@for='days']/following::div/input[@type='checkbox']");
    const count=await days.count();
    console.log(count);

    for(let i=0;i<count;i++){

        await days.nth(i).check();
    };

    await page.waitForTimeout(3000);
    
    await days.first().uncheck();
    await days.last().uncheck();

    await page.waitForTimeout(3000);
    
});