import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function fileDownloadExample() {

    let browser: Browser = await chromium.launch({headless: false});

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

//Example:1
//     await page.goto('https://demo.automationtesting.in/FileDownload.html');

//    const [download]= await Promise.all([context.waitForEvent('download'), 
//         page.locator("//a[@class='btn btn-primary']").click()]);

//     download.saveAs('G:/Automation/screenshot/demo.pdf')


//Example:02
    //  await page.goto("https://practice.expandtesting.com/download");

    // const [download]= await Promise.all([page.waitForEvent('download'),
    //     page.getByText('1784813230204_Pinki Kumari typing test.pdf').click()
    //  ]);

    // await download.saveAs('G:/Automation/screenshot/sample.pdf');
}
fileDownloadExample();