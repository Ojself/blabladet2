const express = require('express')
const getArticle = require("./newspaperScraper")
const router = express.Router()
const newspapers = require("./newspapers.json")

const getRandomNewsPaper = (newspapers) => {
  const keys = Object.keys(newspapers);
  return newspapers[keys[ keys.length * Math.random() << 0]];
}

const getNewsPaperAlternatives = (newspaper) => {
  const alternatives = new Set
  alternatives.add(newspaper.name)
  while (alternatives.size < 3){
    const randomNewspaper = getRandomNewsPaper(newspapers)
    alternatives.add(randomNewspaper.name)
  }
  return Array.from(alternatives).sort( () => .5 - Math.random());
}


router.get('/article', async (req, res) => {
  console.log("Get /article")
  const randomNewspaper = getRandomNewsPaper(newspapers)
  let articleScreenShot
  let retries = 0
  do {
    try {
      retries += 1
      articleScreenShot = await getArticle( randomNewspaper )
    } catch (err){
      console.log("Error: ", err)
    }
  } while (retries < 3 && !articleScreenShot)
  
  const alternatives = getNewsPaperAlternatives(randomNewspaper)
  
  res.json({
    alternatives,
    correctAnswer: randomNewspaper.name,
    articleScreenShot,
  })
})


module.exports = router
