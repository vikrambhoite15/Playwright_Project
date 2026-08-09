
import {test, expect} from "@playwright/test";

test('Verify Get api', async ({request})=>{

    const url= 'https://restful-booker.herokuapp.com/booking';
    const method='Get';
    const headers={
        accept: 'application/json',
    };

    console.log("===============Request=====================");
    console.log("method:", method);
    console.log("URL:", url);
    console.log("Headers:", headers);
       
    const response=await request.get(url);
    const body= await response.json();

    expect(response.ok()).toBeTruthy();

    console.log("==============Response===================");

    console.log("status:", response.status(),response.statusText());
    console.log("body:",body);
    
    

})