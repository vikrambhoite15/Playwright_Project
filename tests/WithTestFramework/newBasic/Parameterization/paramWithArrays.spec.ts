
import { test, expect } from "@playwright/test";

const loginData = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        expect: 'success',
        tag: '@positive',
        check: 'Valid username & password'
    },
    {
        username: 'standard',
        password: 'secret_sauce',
        expect: 'fail',
        tag: '@negative',
        check: 'Invalid username & valid password'
    },
    {
        username: 'standard_user',
        password: 'secret_',
        expect: 'fail',
        tag: '@negative',
        check: 'Valid username & invalid password'
    },
    {
        username: 'standard',
        password: 'sauce@122',
        expect: 'fail',
        tag: '@negative',
        check: 'Invalid username & password'
    },

];

for (const data of loginData) {
    test(`Verify login with ${data.check}`, async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill(data.username);
        await page.locator("#password").fill(data.password);
        await page.locator("#login-button").click();

        if (data.expect == 'success') {

            const title = page.locator("span[class='title']");
            await expect(title).toBeVisible();
        }
        else {
            const error = page.locator("//h3[@data-test='error']");
            await expect(error).toBeVisible();
        }
    })
}