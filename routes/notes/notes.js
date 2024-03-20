const express = require('express')
const router = express.Router();
const notesController = require("../../controllers/notes/notes")

router.get('/allnotes', notesController.getAll)
router.post('/new', notesController.createNote)
module.exports = router;