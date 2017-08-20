const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.ynet.co.il');
  await page.screenshot({path: 'example.png'});

  browser.close();
})();