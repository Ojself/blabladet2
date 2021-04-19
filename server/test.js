let retries = 0

const newspapers = {
  abcnyheter: { uri: 'https://www.abcnyheter.no/', query: 'article' },
  adressa: {
    uri: 'https://www.adressa.no/',
    query: '.article',
  },
  aftenposten: {
    uri: 'https://www.aftenposten.no/',
    query: 'article',
  },
  bt: {
    uri: 'https://www.bt.no/',
    query: 'article',
  },
  dn: {
    uri: 'https://www.dn.no/',
    query: 'article',
    cookieWarning: '#closeCookie',
  },
  e24: {
    uri: 'https://e24.no/',
    query: '.article-extract',
  },
  finansavisen: {
    uri: 'https://finansavisen.no/',
    query: 'article',
  },
  nettavisen: {
    uri: 'https://www.nettavisen.no/',
    query: 'article',
  },
  nrk: {
    uri: 'https://www.nrk.no/',
    query: '.kur-room',
  },
  dagbladet: {
    uri: 'https://www.dagbladet.no',
    query: 'article',
  },
  vg: {
    uri: 'https://www.vg.no/',
    query: 'article',
  },
}

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
