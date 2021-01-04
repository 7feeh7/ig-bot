const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.instagram.com';

const instagram = { 
    browser: null,
    page: null,

    initialize: async () => {
        instagram.browser = await puppeteer.launch({ headless: false });

        instagram.page = await instagram.browser.newPage();
        await instagram.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
    },

    login: async (username, password) => {
        await instagram.page.waitForTimeout(1000);

        /* Writing the username and password */
        await instagram.page.type('input[name="username"]', username, { delay: 50 });
        await instagram.page.type('input[name="password"]', password, { delay: 50 });
        await instagram.page.click('[type="submit"]');

        await instagram.page.waitForNavigation();

        // await instagram.page.evaluate(() => {
        //     document.querySelectorAll(".Fifk5")[4].children[1].click();
        //     document.querySelectorAll(".-qQT3")[0].click();
        // });
    },
}

module.exports = instagram;