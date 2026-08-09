
import {test, expect} from "@playwright/test";

test ('Iframe handles', async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //Total number of frames
    const frames= page.frames();
    console.log(frames.length);

//use frame() method:

   const frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});

   if(frame1){

   await frame1.locator("input[name='mytext1']").fill("David burger");
   };

//using frameLocator():

   const frame2= page.frameLocator("//frame[@src='frame_2.html']");
   await frame2.locator("input[name='mytext2']").fill("Vijay chavan");

   await page.waitForTimeout(3000);
});


test.only('Inner frame', async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});

    if(frame3){
    
        await frame3.locator("input[name='mytext3']").fill("Ajay");

        //child frame
        const childframes= frame3.childFrames();
        console.log( childframes.length);

       const checkbox= await childframes[0].locator("#i24");

       await checkbox.check();
       await expect(checkbox).toBeChecked();
    };
    


await page.waitForTimeout(3000);
})