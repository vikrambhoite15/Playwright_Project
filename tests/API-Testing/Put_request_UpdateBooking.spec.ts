
import { test, expect } from "@playwright/test";

test('Verify put request', async ({ request }) => {

    //1. Create token
    const tokenUrl = 'https://restful-booker.herokuapp.com/auth';

    const tokenrequestBody = {
        username: "admin",
        password: "password123"
    };

    const tokenResponse = await request.post(tokenUrl, { data: tokenrequestBody });

    const tokenResponseBody = await tokenResponse.json();

    expect(tokenResponse.ok()).toBeTruthy();
    console.log(tokenResponseBody);

    const token = tokenResponseBody.token;

    //sending update request

    const updateUrl = 'https://restful-booker.herokuapp.com/booking/12';

    const requestBody = {

        firstname: "Harry",
        lastname: "Crock",
        totalprice: 3000,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
        },
        additionalneeds: "midnight snack"
    };

    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Cookie': `token=${token}`
    };

    const putResponse = await request.put(updateUrl, { data: requestBody, headers });

    const putbody = await putResponse.json();

    expect(putResponse.ok()).toBeTruthy();
    expect(putResponse.status()).toBe(200);

    console.log("status:", putResponse.status(), putResponse.statusText());
    console.log("URL:", putResponse.url());

    console.log("Body:",putbody);

    //expect(putbody.firstname).toBe('Harry');
   // expect(putbody.lastname).toBe('brook');

    expect(putbody).toMatchObject({
        firstname: "Harry",
        lastname: "Crock",
        totalprice: 3000,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
        },
         additionalneeds: "midnight snack"
    })
});