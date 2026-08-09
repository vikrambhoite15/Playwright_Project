
import {test, expect} from "@playwright/test";

test('Download files', async ({page})=>{

    await page.goto("https://demo.automationtesting.in/FileDownload.html");

    const [download]=await Promise.all([page.waitForEvent('download'), page.locator("a[class='btn btn-primary']").click() ]);

    await download.saveAs('C:/Users/Tech Concept/Desktop/Vikram/Edso/demo.pdf');
});

test.only('Download File 2', async ({page})=>{

    await page.goto("https://demoqa.com/upload-download");

    const [download]=await Promise.all([page.waitForEvent('download'), 
          page.locator("#downloadButton").click()]);

    await download.saveAs("C:/Users/Tech Concept/Desktop/Vikram/Edso/test.pdf")

});