
const puppeteer = require('puppeteer')

const getArticle = async (newspaper) => {
  const { uri, query, cookieWarning } = newspaper
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(uri)
  if (cookieWarning) {
    let inputElement = await page.$(cookieWarning)
    await inputElement.click()
  }
  let articles = await page.$$(query)

  const screenshot = Array.from(articles)[
    Math.floor(Math.random() * articles.length)
  ].screenshot({ path: `./jarle${Math.floor(Math.random() * 10000)}.png` })

  return screenshot
}
const allNewsPapers = Object.keys(newspapers)
const randomNewsPaper =
  newspapers[allNewsPapers[Math.floor(Math.random() * allNewsPapers.length)]]
console.log(randomNewsPaper, 'randomNewsPaper')

getArticle(randomNewsPaper)
