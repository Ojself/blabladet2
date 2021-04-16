const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user,
  })
})

module.exports = router
