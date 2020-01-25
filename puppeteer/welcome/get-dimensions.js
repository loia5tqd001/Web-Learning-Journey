const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({ defaultViewport: null })
  const page = await browser.newPage()
  await page.goto('https://nearhuscarl.github.io/portfolio/resume-full')

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.offsetWidth,
      height: document.documentElement.offsetHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  })

  console.log('Dimensions:', dimensions)

  await browser.close()
})()
