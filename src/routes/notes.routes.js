const express = require('express')
const routes = express.Router()
const { getNotes, getNote, addNote, editNote, disableNote } = require('../controllers/notes.controllers')


routes.get('/', getNotes )
routes.get('/:id', getNote )
routes.post('/', addNote )
routes.put('/:id', editNote )
routes.delete('/:id', disableNote)


module.exports = routes