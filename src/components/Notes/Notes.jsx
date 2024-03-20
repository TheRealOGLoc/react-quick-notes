import { useState, useEffect } from "react"
import * as notesService from "../../utilities/notes-service";
import Note from "../Note/Note";

function Notes() {

    const [inputText, setInputText] = useState({text: ""});

    const [notes, setNotes] = useState([]);

    function _handleInputChange(evt) {
        setInputText({text: evt.target.value})
    }

    useEffect(function() {
        async function getAll() {
            const notes = await notesService.getAllNotes();
            setNotes(notes)
        }
        getAll()
    },[])

    async function getAll() {
        const notes = await notesService.getAllNotes();
        setNotes(notes)
    }

    async function _handleSubmit(evt) {
        evt.preventDefault()
        await notesService.createNewNote(inputText)
        await getAll()
    }

    return (
        <div>
            <h2>Your Notes</h2>
            <form onSubmit={_handleSubmit} >
                <label>Add Note</label>
                <input type="text" value={inputText.text} onChange={_handleInputChange} />
                <input type="submit" />
            </form>
            <div>
                {notes.map((note, index) => <Note note={note.text} time={note.createdAt.toLocaleString()} key={index} /> )}
            </div>
        </div>
    )
}

export default Notes