
 import {test,expect, request} from "@playwright/test";
 
 test('Verify post request', async ({request})=>{

    const url='https://restful-booker.herokuapp.com/booking';

    const requestBody= {
        
        firstname: 'Peter',
        lastname: "Joe",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
            checkin: "2026-08-04",
            checkout: "2026-08-05"
        },
        additionalneeds: "Breakfast"
    };

    const response=await request.post(url,{data:requestBody});
    const body= await response.json();

    //validate response-(booking details)- 1st approch
    // expect(response.ok()).toBeTruthy();
    // expect(body.booking.firstname).toBe('Peter');
    // expect(body.booking.lastname).toBe('Joe');

    //validate Bokking properties
    expect(body).toHaveProperty('bookingid');
    expect(body).toHaveProperty('booking');
    expect(body).toHaveProperty('booking.additionalneeds');



    //2nd approch:
    expect(body.booking).toMatchObject({
        firstname: 'Peter',
        lastname: "Joe",
        totalprice: 100,
        depositpaid: true,
        additionalneeds: "Breakfast"
    });

    expect(body.booking.bookingdates).toMatchObject({
        checkin: "2026-08-04",
        checkout: "2026-08-05"
    });



    console.log("Stauts:",response.status(),response.statusText());
    console.log( "URL:",response.url());
    console.log("Body:", body);
    
    
 })