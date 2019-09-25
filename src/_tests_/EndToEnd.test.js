import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');

        await page.waitForSelector('.event');


    });

    afterAll(async () => {
        browser.close();
    });

    test('an event element is collapsed by default', async () => {
        const extra = await page.$('.event .extra');
        expect(extra).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .eventButton');

        const extra = await page.$('.event .extra');
        expect(extra).toBeDefined();
    });

    test('User can collapse an expanded event', async () => {
        await page.click('.event .eventButton');

        const extra = await page.$('.event .extra');
        expect(extra).toBeNull();
    })
})