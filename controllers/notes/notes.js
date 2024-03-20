const Note = require('../../models/note')

async function getAll(req, res) {
    const user = req.user
    const notes = await Note.find({user: user._id}).populate('user')
    res.json(notes)
}

async function createNote(req, res) {
    const user = req.user
    try {
        const note = await Note.create({
            ...req.body,
            user: user
        })
        res.status(201).json(note)
    } catch {
        res.status(400).json(err)
    }
    
}

module.exports = {
    getAll,
    createNote
}
