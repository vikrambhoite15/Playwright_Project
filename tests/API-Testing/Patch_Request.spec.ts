
import { test, expect } from "@playwright/test";

test('Verify Patch API request', async ({ request }) => {

    //Create token

    const tokenUrl = 'https://restful-booker.herokuapp.com/auth';

    const tokenRequestBody = {
        username: "admin",
        password: "password123"
    };

    const tokenResponse = await request.post(tokenUrl, { data: tokenRequestBody });
    const tokenBody = await tokenResponse.json();
    const token = await tokenBody.token;
    console.log(token);

    //Patch request

    const patchUrl = 'https://restful-booker.herokuapp.com/booking/26';

    const requestBody = {
        firstname: "wille",
        lastname: "Jems"
    };

    const headers = {
        'Cookie': `token=${token}`,
        'Authorization': `Basic ${token}`
    };

    const PatchResponse = await request.patch(patchUrl, { data: requestBody, headers });

    const patchBody = await PatchResponse.json();

    expect(PatchResponse.ok()).toBeTruthy();
    expect(patchBody).toMatchObject({
        firstname: "wille",
        lastname: "Jems"
    });

    console.log("Status:", PatchResponse.status(), PatchResponse.statusText());
    console.log(patchBody);







})