
import {test,expect} from "@playwright/test";

test.only('Verify Get request response', async ({request})=>{

    const url= 'https://restful-booker.herokuapp.com/booking/2';

   const response= await request.get(url);

   const body=await response.json();

    expect(response.ok()).toBeTruthy();
    expect( response.status()).toBe(200);
    //expect(body.lastname).toBe('Jackson');
   // expect(body.firstname).toBe('Eric');
    
   
   console.log("===========Response=================");
   console.log("Status:", response.status(),response.statusText());
   console.log(body);
    

});

test('Verify get request by query parameters', async ({request})=>{

    const firstname= 'Jane';
    const lastname= 'Doe';

    const url = 'https://restful-booker.herokuapp.com/booking';

   const response= await request.get(url,{params: {firstname, lastname}});

   const body= await response.json();

  // expect(body).toHaveProperty('bookingid');
   expect(response.ok()).toBeTruthy();
   expect(response.status()).toBe(200);

   console.log("Status:",response.status(),response.statusText());
   console.log("URL:", response.url());
   
   console.log("Body:", body);

});