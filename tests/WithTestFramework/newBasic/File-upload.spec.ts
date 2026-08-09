
import {test, expect} from "@playwright/test";

test('upload files', async ({page})=>{

    await page.goto("https://demoqa.com/upload-download");

    await page.locator("#uploadFile").setInputFiles("C:/Users/Tech Concept/Desktop/sampleFile.jpeg");

    await page.waitForTimeout(3000);
});

test ('Upload file 2', async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("C:/Users/Tech Concept/Desktop/sampleFile.jpeg");

    await page.locator("#file-submit").click();

    await page.waitForTimeout(3000);
    })