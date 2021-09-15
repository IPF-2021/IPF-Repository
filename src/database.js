const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

URI = process.env.URI

mongoose.connect(URI)
    .then(() => console.log('DB is connected'))
    .catch(err => console.log(err))
module.exports = mongoose