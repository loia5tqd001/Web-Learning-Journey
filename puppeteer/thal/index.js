const puppeteer = require('puppeteer')
const CREDS = require('./creds')
const mongoose = require('mongoose')
const User = require('./models/user')

run()
async function run() {
  const page = await openPage('https://github.com/login')

  await loginOnPage(
    page,
    '#login_field', CREDS.username,
    '#password', CREDS.password,
    '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block',
    '[data-disable-with="Verifying…"]'
  )

  const userToSearch = 'john'
  const searchUrl = `https://github.com/search?q=${userToSearch}&type=Users&utf8=%E2%9C%93`
  await page.goto(searchUrl)
  await page.waitFor(2 * 1000)

  const LIST_USERNAME_SELECTOR =
    '#user_search_results > div.user-list > div:nth-child(INDEX) div.d-flex > div > a'
  const LIST_EMAIL_SELECTOR =
    '#user_search_results > div.user-list > div:nth-child(INDEX) div.d-flex > div > ul > li:nth-child(2) > a'
  const LENGTH_SELECTOR_CLASS = 'user-list-item'
  const numPages = await getNumPages(page)

  console.log('Numpages: ', numPages)

  for (let h = 1; h <= numPages; h++) {
    let pageUrl = searchUrl + '&p=' + h
    await page.goto(pageUrl)

    let listLength = await page.evaluate(sel => {
      return document.getElementsByClassName(sel).length
    }, LENGTH_SELECTOR_CLASS)

    for (let i = 1; i <= listLength; i++) {
      // change the index to the next child
      let usernameSelector = LIST_USERNAME_SELECTOR.replace('INDEX', i)
      let emailSelector = LIST_EMAIL_SELECTOR.replace('INDEX', i)

      let username = await page.evaluate(sel => {
        return document
          .querySelector(sel)
          .getAttribute('href')
          .replace('/', '')
      }, usernameSelector)

      let email = await page.evaluate(sel => {
        let element = document.querySelector(sel)
        return element ? element.innerHTML : null
      }, emailSelector)

      // not all users have emails visible
      if (!email) continue

      console.log(username, ' -> ', email)

      upsertUser({
        username: username,
        email: email,
        dateCrawled: new Date()
      })
    }
  }

  browser.close()
}

async function openPage(url, isHeadless = false) {
  const browser = await puppeteer.launch({ headless: isHeadless })
  const page = await browser.newPage()  
  await page.goto(url)
  return page
}

async function loginOnPage(
  page,
  usernameSelector, username,
  passwordSelector, password,
  loginBtnSelector,
  deviceVerifySelector
) {
  await page.click(usernameSelector)
  await page.keyboard.type(username)

  await page.click(passwordSelector)
  await page.keyboard.type(password)

  await Promise.all([
    page.click(loginBtnSelector),
    page.waitForNavigation()
  ]) 

  if (await page.$(deviceVerifySelector) !== null) {
    throw Error('Meet device verification')
  }
}

async function getNumPages(page) {
  const NUM_USER_SELECTOR =
    '#js-pjax-container > div > div.col-12.col-md-9.float-left.px-2.pt-3.pt-md-0.codesearch-results > div > div.d-flex.flex-column.flex-md-row.flex-justify-between.border-bottom.pb-3.position-relative > h3'
  let inner = await page.evaluate(sel => {
    let html = document.querySelector(sel).innerHTML

    // format is: "69,803 users"
    return html
      .replace(',', '')
      .replace('users', '')
      .trim()
  }, NUM_USER_SELECTOR)

  const numUsers = parseInt(inner)

  console.log('numUsers: ', numUsers)

  /**
   * GitHub shows 10 resuls per page, so
   */
  return Math.ceil(numUsers / 10)
}

function upsertUser(userObj) {
  const DB_URL = 'mongodb://localhost/thal'

  if (mongoose.connection.readyState == 0) {
    mongoose.connect(DB_URL)
  }

  // if this email exists, update the entry, don't insert
  const conditions = { email: userObj.email }
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }

  User.findOneAndUpdate(conditions, userObj, options, (err, result) => {
    if (err) {
      throw err
    }
  })
}

