import { Action } from '../actions'
export interface NotesState {
    notes: string[];
}

const initialState: NotesState = {
    notes:[]
}

type actions = Action

const notesReducer = (state: NotesState = initialState, action: actions) => {
    switch(action.type) {
        case "ADD_NOTE": {
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