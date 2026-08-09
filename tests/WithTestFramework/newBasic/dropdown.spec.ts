
import {test, expect} from "@playwright/test";

test('single dropdown', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

   await page.locator("#country").scrollIntoViewIfNeeded(); //scroll into locator

     //select dropdown in 4 ways.

    await page.locator("#country").selectOption('India');               //select by visible text
    await page.locator("#country").selectOption({value:'uk'});         //select by value atribute
    await page.locator("#country").selectOption({label:'Germany'});   //select by label
    await page.locator("#country").selectOption({index:6});           //select by index
    await page.waitForTimeout(3000);

    //Check number of options in dropdown.
    // const options= page.locator("//select[@id='country']/child::option");
    // console.log(await options.count());
    // await expect(options).toHaveCount(10);

    //check selected option.
    const selectOption= await page.locator("#country").inputValue();
    console.log(selectOption);
    


    //print all options present in dropdown
    //console.log(await options.allTextContents());

    // for(const value of await options.allTextContents()){
    //     console.log(value);      
    // }    
});

test.only('Multi-Select dropdown', async ({page})=>{
   
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#country").scrollIntoViewIfNeeded(); //scroll into locator

    //select option from the dropdown

    await page.locator("#colors").selectOption(['Red','Blue','Green']);              //select by visible text
    await page.locator("#colors").selectOption([{value:'blue'},{value:'green'}]);    //select by value attribute
    await page.locator("#colors").selectOption([{label:'Green'},{label:'White'}]);   //select by label
    await page.locator("#colors").selectOption([{index:1},{index:3},{index:4}]);     //select by index  

    //check number of option in dropdown

    const options= page.locator("#colors>option");
    await expect(options).toHaveCount(7);

    //check option present in dropdown
    const text= await page.locator("#colors").allInnerTexts();
    console.log(text);
   
    //print all option on the text

    for(const value of text){

        console.log(value);
    }
    await page.waitForTimeout(5000);
});