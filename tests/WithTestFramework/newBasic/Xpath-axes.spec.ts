
import {test,expect} from "@playwright/test";

test('Xpath axes example', async ({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

//self Axes: select the current node.

   // page.locator("//input[@id='name']/self::input").fill("Will jacks");
  

//parent axes: select the parent of current node.
  
  // const text= page.locator("//td[text()='Selenium']/parent::tr");
  // console.log(await text.allInnerTexts());

//child Axes: select the children node.

  //  const text1=  page.locator("(//table[@name='BookTable']/child::tbody/tr)[2]");

  //  console.log(await text1.allInnerTexts());
   
  //  for(const value of await text1.allInnerTexts()){
  //    console.log(value);
     
  //  };

//Ancestor: select the current node parent and grandparents.

    // const ancesters= await page.locator("//td[text()='Mukesh']/ancestor::table/tbody/tr").allInnerTexts();
    
    // for(const text of  ancesters){

    //     console.log(text);    
    // };

//Descendant: it select the current node all children and grand chilgren elements.

    //  const author= page.locator("//table[@name='BookTable']/descendant::tr[6]/td[2]");
    //  console.log(await author.innerText());
    //  await expect(author).toHaveText("Amod");

//following: select everything in the document after the current node(not just siblings).
     
    //  const name= page.locator("//td[text()='Learn Java']/following::td[1]");
    //  console.log(await name.innerText());
    //  await expect(name).toHaveText("Mukesh");

//following-sibling: select siblings after current node.(same parent)

  //  const siblings= page.locator("//td[text()='Master In Selenium']/following-sibling::td");

  //  for(const value of await siblings.allInnerTexts()) {
  //       console.log(value);
  //   };

//Preceding: select all nodes before the current node in the document.

    //  const txt= page.locator("//td[text()='Master In Selenium']/preceding::td[2]");
    //  console.log(await txt.innerText());
     
     
  await page.waitForTimeout(3000); 
});