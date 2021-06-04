import { Action, ActionSuccess } from '../actions/action'
export interface NotesState {
    notes: string[];
}

const initialState: NotesState = {
    notes:[]
}

type noteActions = Action | ActionSuccess

const notesReducer = (state: NotesState = initialState, action: noteActions) => {
    switch(action.type) {
        case "ADD_NOTE": {
            return {
                ...state,
            }
        }
        case "ADD_NOTE_SUCCESS": {
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        }
        default: 
            return state;
    }
    
}

export default notesReducer