const { model, Schema } = require('mongoose')


const noteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, default: true}
})



module.exports = model('notes', noteSchema)