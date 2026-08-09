
import { test, expect, request } from "@playwright/test";

test('Verify get Api request', async ({ request }) => {

    const url = 'https://gorest.in/public/v2/users/1005';

    const response = await request.get(url);
    const body = await response.json();

    console.log("Status:", response.status(), response.statusText());
    console.log("Body:", body);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

});

test('Verify post request', async ({ request }) => {

    const url = 'https://gorest.in/public/v2/users';

    const requestBody = {
        "id": 1111,
        "name": "vinay mehta",
        "email": "vinay@example.com",
        "gender": "male",
        "status": "inactive"
    };
    const headers = {
        'Content-type': 'application/json',
        'Authorization': 'Bearer 8ef5d4b15f921b8a66c944b0516f54c6737abeb0e8419897a4b46490039e969c'
    }

    const response = await request.post(url, { data: requestBody, headers });
    const body = await response.json();

    console.log("Status:", response.status(), response.statusText());
    console.log(body);



    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);


});

test.only('Verify patch api request', async ({ request }) => {

    const url = 'https://gorest.in/public/v2/users/1001';

    const requestBody = {

        name: "Sujan noor",
        email: "sujan.noor@example.com"
    };
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 1e3d281e16be74c7c351debfe767203ed487939f72cbf33249e898e9ce5a1153'
    };

    const response = await request.patch(url, { data: requestBody, headers });

    const body = await response.json();

    console.log("Status:", response.status(), response.statusText());
    console.log("Body:", body);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})