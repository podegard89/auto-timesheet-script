const puppeteer = require('puppeteer');
const secrets = require('./secrets');
const bannerURL = require('./url.json').bannerURL;
const Sheet = require('./sheet');

// const convertDateFormat = (dateString) => {
//     const monthNames = [
//         "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
//         "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
//     ];
//     const splitDate = dateString.split('/');
//     const monthIndex = parseInt(splitDate[0]) - 1;
//     return `${splitDate[1]}-${monthNames[monthIndex]}-${splitDate[2]}`;
// }

(async () => {
    const sheet = new Sheet();
    await sheet.load();
    const timeSheetLogs = await sheet.getRows(0);
    const shiftDate = convertDateFormat(timeSheetLogs[0].currDate);
    const shiftHours = timeSheetLogs[0].hours;

    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // await page.goto(bannerURL);

    // //login
    // const loginFormElements = await page.$$('input');
    // await loginFormElements[0].type(secrets.USERNAME);
    // await loginFormElements[1].type(secrets.PASSWORD);
    // await loginFormElements[2].click();

    // //navigate to employee tab
    // await page.waitForSelector('.taboff');
    // const employeeTab = await page.$('.taboff');
    // await employeeTab.click();

    // //navigate to submit/approve timesheets
    // await page.waitForSelector('[name="GeneralOpenFolder"]');
    // const submitNav = await page.$('[name="GeneralOpenFolder"]');
    // await submitNav.click();

    // await page.waitForSelector('[value="Time Sheet"]');
    // const timeSheetButton = await page.$('[value="Time Sheet"]');
    // await timeSheetButton.click();

    // //get rows from Time sheet for date/hour data
    

    // //select one enter hours cell and input time
    // await page.waitForSelector('[title="Enter Hours for 015 Hourly Pay for Sunday 17-OCT-2021"]');
    // const enterHoursButton = await page.$('[title="Enter Hours for 015 Hourly Pay for Sunday 17-OCT-2021"]');
    // await enterHoursButton.click();

    // await page.waitForSelector('input[name="Hours"]');

    // const hoursInput = await page.$('input[name="Hours"]');
    // await hoursInput.type('');
    // const saveButton = await page.$('input[value="Save"]');
    // // await saveButton.click();

    // // await browser.close();
})()