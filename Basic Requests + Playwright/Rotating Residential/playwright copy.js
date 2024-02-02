import { chromium } from 'playwright';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

(async () => {
  const browser = await chromium.launch({
    headless: false, // Set to true to run browser in headless mode, so you can see it  run
    proxy: {
      server: 'http://proxy.proxy-cheap.com:31112', // Proxy server URL and port
      username: process.env.USERNAME,
      password: process.env.PASS,
    },
  });
  const page = await browser.newPage();

  await page.goto('https://ipv4.icanhazip.com');
  //  add your crawling code here
  await page.waitForTimeout(10000);
  await browser.close();
})();
