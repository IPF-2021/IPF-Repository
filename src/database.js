const mongoose = require('mongoose')

const URI = 'mongodb+srv://owo:P44C3BNWZphT5kOa@cluster0.eqerh.mongodb.net/IPF'

mongoose.connect(URI)
  .then(() => console.log('DB is connected'))
  .catch(err => console.log(err))
module.exports = mongoose
