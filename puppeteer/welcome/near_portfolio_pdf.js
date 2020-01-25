const puppeteer = require('puppeteer')

const url = 'https://nearhuscarl.github.io/portfolio/resume-full'
const viewportWidth = 1000
const output = 'near_resume.pdf'

;(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { 
      width: +viewportWidth + 1, // THE HACK to make it work
      height: 0 
    }
  })

  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  const [width, height] = await page.evaluate(() => [
    document.documentElement.offsetWidth, 
    document.documentElement.offsetHeight
  ])

  console.log(width, height)

  await page.pdf({
    path: output,
    printBackground: true,
    pageRanges: '1', // THE HACK to make it work
    height,
  })

  await browser.close()
})()
