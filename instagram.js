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

        await instagram.page.goto(`https://www.instagram.com/${username}/`)
        await instagram.page.waitForTimeout(1000);
    
        
        await instagram.page.evaluate(() => {
        
            // const postButton = document.querySelector("ul").childNodes[0]
            const followersButton = document.querySelector('ul').childNodes[1]
            // const followingButton = document.querySelector("ul").childNodes[2]

            followersButton.childNodes[0].click()
        

            let contentBody = document.querySelector('.isgrP');
  
         
        });
    },
}

module.exports = instagram;