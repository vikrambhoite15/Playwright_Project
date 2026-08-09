
import {test, expect} from "@playwright/test";
 
test('Auto suggestion dropdown', async ({page})=>{
     
    await page.goto("https://www.amazon.in/");

    await page.locator("//input[@id='twotabsearchtextbox']").fill("mobiles");
    await page.waitForTimeout(3000);

    
    const suggestions= page.locator("//div[@class='s-suggestion s-suggestion-ellipsis-direction']");

    //count the options
    const count:number= await suggestions.count();
    console.log(count);

    //Print all the suggested options

    //console.log("5th option:", await suggestions.nth(5).textContent());

    for(let i=0;i<count;i++){

       // console.log(await suggestions.nth(i).textContent());
        console.log(await suggestions.nth(i).innerText());
        
    } ;

    //select/click on suggestion options

    //await suggestions.nth(7).click();

    for(let i=0;i<count;i++){
     const text= await suggestions.nth(i).innerText();

     if(text==='mobiles 5g phones'){

        suggestions.nth(i).click();

     }
    }
    await page.waitForTimeout(3000);

 });
