
const puppeteer = require('puppeteer')

const getArticle = async (newspaper) => {
  const { uri, query, cookieWarning } = newspaper
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(uri)

  if (cookieWarning) {
    let inputElement = await page.$(cookieWarning);
    if (inputElement) await inputElement.click();
  }
  let articles = await page.$$(query)

  const screenshot = Array.from(articles)[
    Math.floor(Math.random() * articles.length)
  ].screenshot({ encoding: "base64" })
  
  return screenshot
}

module.exports = getArticle
