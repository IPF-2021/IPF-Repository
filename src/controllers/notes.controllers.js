const notes = require('../models/notes.model')

const getNotes = async (req, res) => {
  try {
    const allNotes = await notes.find({ status: true })
    res.json(allNotes)
  } catch (error) {
    console.log(error)
  }
}
const getNote = async (req, res) => {
  try {
    const oneNote = await notes.findById(req.params.id)
    res.json(oneNote)
  } catch (error) {
    console.log(error)
  }
}
const addNote = async (req, res) => {
  try {
    const newNote = new notes(req.body)
    newNote.save()
    res.json(newNote)
  } catch (error) {
    console.log(error)
  }
}
const editNote = async (req, res) => {
  try {
    await notes.findByIdAndUpdate(req.params.id, req.body)
    res.json({note: 'note updated successfully'})
  } catch (error) {
    console.log(error)
  }
}
const disableNote = async (req, res) => {
  try {
    await notes.findByIdAndUpdate(req.params.id, {status: false})
    res.json({note: 'note disabled successfully'})
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getNotes,
  getNote,
  addNote,
  editNote,
  disableNote
}