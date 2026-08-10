
import { test, expect, request } from "@playwright/test";

import Apidata from "../../test-data/Api_BookingData.json";

test('Verify post api', async ({ request }) => {

    const url = 'https://restful-booker.herokuapp.com/booking';

    const response=await request.post(url,{data:Apidata.PostRequest});
    const body= await response.json();

    console.log("Status:",response.status(),response.statusText());
    console.log(body);   
    
});

test.only("Verify patch request", async ({request})=>{

    //create token
    const tokenresponse=await request.post(Apidata.tokenurl,{data:Apidata.tokenRequestBody});
    const body= await tokenresponse.json();
    const token =await body.token;
    console.log(token);
    
    //patch request

    const url= 'https://restful-booker.herokuapp.com/booking/26';
    const headers={
        'Cookie': `token=${token}`,
        'Authorization':`Basic ${token}`
    };

    const response=await request.patch(url,{data:Apidata.PatchRequest,headers});
    const Patchbody= await response.json();
    
    console.log("Status",response.status(),response.statusText());
    console.log(Patchbody);
    
    
    });
