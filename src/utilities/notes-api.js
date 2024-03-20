import sendRequest from './send-request';

const BASE_URL = "/notes/"

export function getAll(user) {
    return sendRequest(BASE_URL + "allnotes", "GET", null);
}

export function createNote(note) {
    return sendRequest(BASE_URL + "new", "POST", note);
}