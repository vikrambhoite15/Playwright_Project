
import { test, expect, request } from "@playwright/test";

test('Verify Delete Api request', async ({ request }) => {

    //create token
    const tokenUrl = 'https://restful-booker.herokuapp.com/auth';

    const tokenrequestBody = {
        username: "admin",
        password: "password123"
    };

    const tokenResponse=await request.post(tokenUrl,{data: tokenrequestBody});

    const tokenBody= await tokenResponse.json();

    const token= await tokenBody.token;
    console.log(token);
    
    //delete Api request

    const deleteUrl= 'https://restful-booker.herokuapp.com/booking/14';

    const headers= {
        Cookie : `token=${token}`,
    };

    const deleteResponse=await request.delete(deleteUrl,{headers});
    
    expect(deleteResponse.status()).toBe(201);
    console.log("Status:", deleteResponse.status(), deleteResponse.statusText());
    
   
    
})