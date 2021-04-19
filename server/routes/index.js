const express = require('express')
const { set } = require('../app')
const router = express.Router()
const newspapers = require("./newspapers.json")

const getRandomNewsPaper = (newspapers) => {
  const keys = Object.keys(newspapers);
  return newspapers[keys[ keys.length * Math.random() << 0]];
}

const getNewsPaperAlternatives = (newspaper) => {
  console.log(newspaper)
  const alternatives = new Set
  alternatives.add(newspaper.name)
  while (alternatives.size < 3){
    const randomNewspaper = getRandomNewsPaper(newspapers)
    alternatives.add(randomNewspaper.name)
  }
  return Array.from(alternatives).sort( () => .5 - Math.random());
}


router.get('/newspaper', async (req, res) => {
  
  const randomNewspaper = getRandomNewsPaper(newspapers)
  const alternatives = getNewsPaperAlternatives(randomNewspaper)
  
  // res.sendFile()
})


module.exports = router
