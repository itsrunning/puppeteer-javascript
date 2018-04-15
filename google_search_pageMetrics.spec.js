const assert = require('assert')
const puppeteer = require('puppeteer')

let browser
let page

before(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: false,
      slowMo: 100,
    });
    page = await browser.newPage()
})

describe('Check Google performance metrics', () => {
  it('has title "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'networkidle0' })
    await page.type("input[name=q]", "puppeteer github");
    await page.click("input[name=btnK]");
    await page.waitForSelector("#resultStats");
    const metrics = await page.metrics();
    console.log("metrics" + JSON.stringify(metrics))
    const performanceTiming = JSON.parse(
      await page.evaluate(() => JSON.stringify(window.performance.timing))
    );
    console.log("something : "+performanceTiming)
    const mainTitleText = await page.$eval(".r a", el => el.textContent);
    assert.equal(mainTitleText,"GitHub - GoogleChrome/puppeteer: Headless Chrome Node API");
    await page.screenshot({path: 'screenshot.png'})
  }).timeout(60000)
})

after(async () => {
  await browser.close()
})
