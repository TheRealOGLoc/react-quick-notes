import * as notesAPI from './notes-api'

export async function getAllNotes() {
    const allNotes = await notesAPI.getAll();
    return allNotes;
}

export async function createNewNote(note) {
    const newNote = await notesAPI.createNote(note)
}