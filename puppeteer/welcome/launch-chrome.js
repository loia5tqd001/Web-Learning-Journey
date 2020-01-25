const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/usr/bin/google-chrome'
  })

  const page = await browser.newPage()
  await page.goto('https://github.com/loia5tqd001')

  await page.screenshot({
    path: 'loi-github.jpeg',
    fullPage: true,
  })

  await browser.close()
})()