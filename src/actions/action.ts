export type Action = {type: 'ADD_NOTE', payload: string}
export type ActionSuccess = {type: 'ADD_NOTE_SUCCESS', payload: string}

export const addNote = (note: string): Action => ({
    type: 'ADD_NOTE',
    payload: note,
})

export const addNoteSuccess = (note: string): ActionSuccess => ({
    type: 'ADD_NOTE_SUCCESS',
    payload: note,
})