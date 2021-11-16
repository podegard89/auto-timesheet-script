const puppeteer = require('puppeteer');
const secrets = require('./secrets');
const Sheet = require('./sheet');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(secrets.bannerUrl);

    //login
    const loginFormElements = await page.$$('input');
    await loginFormElements[0].type(secrets.USERNAME);
    await loginFormElements[1].type(secrets.PASSWORD);
    await loginFormElements[2].click();

    const waitThenClick = async (selector) => {
        await page.waitForSelector(selector);
        const element = await page.$(selector);
        await element.click();
    }

    // get rows from selector sheet
    const sheet = new Sheet();
    await sheet.load();

    const selectors = await sheet.getRows(1);

    // crawl to banner time sheet
    for (let row of selectors) {
        await waitThenClick(row.selector);
    }

    // grabs last 10 rows from time sheet
    const timeSheetRows = (await sheet.getRows(0)).slice(1).slice(-10);

    // then loop through the data and enter it into banner time sheet
    for (const [index, row] of timeSheetRows.entries()) {
        if (index === 5) {
            await waitThenClick('[value="Next"]');
        }

        const shiftDate = row.currDate;
        const shiftHours = row.hours;
        console.log({shiftDate, shiftHours});

        await waitThenClick(`[title="Enter Hours for 015 Hourly Pay for ${shiftDate}"]`);

        await page.waitForSelector('input[name="Hours"]');
        const hoursInput = await page.$('input[name="Hours"]');
        await hoursInput.click({ clickCount: 3 });
        await hoursInput.type(shiftHours);
        const saveButton = await page.$('input[value="Save"]');
        await saveButton.click();
    }

    await browser.close();
})()