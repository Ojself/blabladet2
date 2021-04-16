const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const mongoose = require('mongoose')
const User = require('../models/User')

require('../configs/database')

let users = [
  {
    username: 'alice',
    score: Math.floor(Math.random() * 100),
    difficulty: 'easy'
  },
  {
    username: 'bob',
    score: Math.floor(Math.random() * 100),
    difficulty: 'easy'
  },
]

User.deleteMany()
  .then(() => User.create(users))
  .then(() => mongoose.disconnect())
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
