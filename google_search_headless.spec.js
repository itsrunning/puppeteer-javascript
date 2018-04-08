const assert = require('assert')
const puppeteer = require('puppeteer')

let browser
let page

before(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      slowMo: 80,
    });
    page = await browser.newPage()
})

describe('Check Google Homepage in headless mode', () => {
  it('has title "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'networkidle0' })
    await page.type("input[name=q]", "puppeteer github");
    await page.click("input[name=btnK]");
    await page.waitForSelector("#resultStats");
    const mainTitleText = await page.$eval(".r a", el => el.textContent);
    assert.equal(mainTitleText,"GitHub - GoogleChrome/puppeteer: Headless Chrome Node API");
    await page.screenshot({path: 'screenshot.png'})
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
