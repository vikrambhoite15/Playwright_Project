
import {test,expect} from "@playwright/test";

import loginData from "../../../../test-data/login-data.json";

for (const data of loginData) {
    test(`Verify login with ${data.check}`, async ({ page }) => {

        test.skip(data.tag=='@negative');

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